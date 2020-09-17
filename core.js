"use strict";
/**
 * Created by QAS on 17.01.2018.
 */

var blocs = ["main", "res", "conf", "sit", "log"];

function fix_css() {
    //$(".row").css("margin-right","0px");
    //$(".row").css("margin-left","0px");
}

function sleep(milliseconds) {
    /*var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }*/
}

function check_error(data, func, rel) {
    if (data == undefined){
        $(location).attr("href", location.href);
    }else {
        if (data.error == true) {
            if (data.type == "session_error") {
                if (data.repeat == true) {
                    sleep(1000);
                    eval(func + "(rel);");
                } else {
                    $(location).attr("href", data.redirect);
                }
            }
        } else {
            sleep(5000);
            eval(func + "_after(data);")
        }
    }
    fix_css();
}

function getData(method,args,func,rel) {
    $.post(
        '/api/'+api_version+'/'+method,
        {
            data:args
        }/*,
        function (data) {
            check_error(data,func,rel);
        }*/,
        'json'
    ).always(function (data) {
        check_error(data,func,rel);
    });
}

function getTemplation(bloc, templation, args, plaseholder, func, rel) {
    $(plaseholder).empty();
    $.get(script_location + 'templation/'+bloc+'/'+templation+'.twig',function (templ) {
        var template = Twig.twig({data: templ, async: false});
        var str = template.render(args);
        $(plaseholder).html(str);
        eval(func+"(rel);");
    },'html');
}

function setLocation(hash,search) {
    location.hash = hash;
    location.search = search;
}

function getHash() {
    return location.hash;
}

function getSearch() {
    return location.search;
}

function prepareHash(hash) {
    return hash.replace('#/','').split('/');
}

function buildHash(data) {
    if (Array.isArray(data)){
        var str = '';
        data.forEach(function (p) {
            str = str + '/' + p;
        });
        return str;
    }else{
        return '';
    }
}

function prepareSearch(search) {
    search = search.replace('?','').split('&');
    var data = {};
    search.forEach(function (p) {
        p = p.split('=');
        data[p[0]] = p[1];
    })
    return data;
}

function buildSearch(data) {
    if (Array.isArray(data)){
        var str = '';
        for (var i in data){
            str = str + i + '=' + data[i] + '&';
        }
        return str.substr(0, str.length - 1);
    }else {
        return '';
    }
}

function execIncomingHash(data) {

}

function execIncomingSearch(data) {

}

function hide_all() {
    blocs.forEach(function (block) {
        $("div#"+block+"_block").empty();
        $("div#"+block+"_block").hide();
    });
}

function show(id) {
    $("div#"+id+"_block").empty();
    $("div#"+id+"_block").show();
    eval("exec_"+id+"()");
}

function bind_menu() {
    blocs.forEach(function (block) {
        $("button#"+block).click(function () {
            hide_all();
            show(block);
        });
    });
    $("button#exit").click(function () {
        hide_all();
        exec_exit();
    });
}

function getUsers_after(data) {
    users = data.res;
}

function getUsers(rel){
    getData('user/list',{},'getUsers',rel);
}

function session_checker_after(data) {

}

function session_checker(rel){
    getData('sitting/session.check',{},'session_checker',rel);
}

$(document).ready(function () {
    var hash = getHash();
    if (hash.length > 1){
        var data = prepareHash(hash);
        execIncomingHash(data);
    }
    if (loader_type == 'timer') {
        setInterval(exec_main_add, 300 * 1000);
    }
    setInterval(session_checker, 600 * 1000);
    getUsers('');
    hide_all();
    show("main");
    bind_menu();
    fix_css();
});