function get_sit_conf_edit_other_after_sel_load_after_after_after_selus_load(data) {

}

function get_sit_conf_edit_other_after_sel_load_after_after_after_selps_load(data) {

}

function get_sit_conf_edit_other_after_sel_load_after_after(data) {
    var res = data.result;
    var sel = '';
    if (prop.name == 'USLUGA'){
        getTemplation(
            'sit',
            'sit.edit.list.usl.sel',
            {res:res,val:prop.value},
            'div#sit_us',
            'get_sit_conf_edit_other_after_sel_load_after_after_after_selus_load',
            {}
        );
    }
    if (prop.name == 'PRODUCT'){
        getTemplation(
            'sit',
            'sit.edit.list.prod.sel',
            {res:res,val:prop.value},
            'div#sit_pr',
            'get_sit_conf_edit_other_after_sel_load_after_after_after_selps_load',
            {}
        );
    }
}

function get_sit_conf_edit_other_after_sel_load_after(data) {
    var prop = data.res;
    if (Array.isArray(prop)){
        prop = prop[0];
    }else{
        prop = {value:0};
    }
    getData('bitrix/get',{method:'product.fields.vals',for:prop.name},'get_sit_conf_edit_other_after_sel_load_after',data);
}

function sit_pu_bind_click_after(data) {
    exec_sit_conf();
}

function sit_pu_bind_click(rel) {
    var val = $('select#sit_pr').val();
    getData('sitting/set',{var: 'PRODUCT', val: val},'sit_pu_bind_click',rel);
    var val = $('select#sit_us').val();
    getData('sitting/set',{var: 'USLUGA', val: val},'sit_pu_bind_click',rel);
}

function get_sit_conf_edit_other_after_sel_load(data) {
    $('button#sit_pu_bind').click(function () {
        sit_pu_bind_click({});
    });
    getData('sitting/get',{var: 'PRODUCT'},'get_sit_conf_edit_other_after_sel_load',data);
    getData('sitting/get',{var: 'USLUGA'},'get_sit_conf_edit_other_after_sel_load',data);
}

function get_sit_conf_edit_other(rel) {
    getTemplation(
        'sit',
        'sit.edit.list',
        {},
        'div#sit_main',
        'get_sit_conf_edit_other_after_sel_load',
        {}
    );
}

function sit_sv_bind_click_after(data) {
    get_sit_conf_edit_other();
}

function sit_sv_bind_click(rel) {
    getData('sitting/set',{var: 'SVOYSTVO', val: rel},'sit_sv_bind_click',rel);
}

function exec_sit_conf_edit_after_after_after_selps_load(data) {
    $('button#sit_sv_bind').click(function () {
        sit_sv_bind_click($('select#sit_sv').val());
    });
}

function exec_sit_conf_edit_after_after(data) {
    var res = data.result;
    var sel = '';
    getTemplation(
        'sit',
        'sit.edit.list.prop.sel',
        {res: res, val: prop.value},
        'div#sit_main',
        'exec_sit_conf_edit_after_after_after_selps_load',
        {}
    );
}

function exec_sit_conf_edit_after(data){
    var prop = data.res[0];
    getData('bitrix/get',{method:'product.fields'},'exec_sit_conf_edit_after',data);
}

function exec_sit_conf_edit(rel){
    getData('sitting/get',{var:'SVOYSTVO'},'exec_sit_conf_edit',rel);
}

function exec_sit_conf_wh_del_after(data) {
    exec_sit_conf_after_sm_load('');
}

function exec_sit_conf_wh_del(rel) {
    getData('sitting/wh.del',{},'exec_sit_conf_wh_del',rel);
}

function exec_sit_conf_wh_edit_load_click_after(data) {
    exec_sit_conf_after_sm_load('');
}

function exec_sit_conf_wh_edit_load_click(rel) {
    getData('sitting/wh.add',{rel:rel},'exec_sit_conf_wh_edit_load_click',rel);
}

function exec_sit_conf_wh_edit_load(data) {
    $('a#wh_input_edit').click(function () {
        var rel = $('input#wh_input').val();
        exec_sit_conf_wh_edit_load_click(rel);
    });
}

function exec_sit_conf_wh_edit(rel){
    getTemplation(
        'sit',
        'sit.wh.add',
        {},
        'div#sit_main',
        'exec_sit_conf_wh_edit_load',
        {}
    );
}

function exec_sit_conf_after_sm_load_after_after_sl_load(data) {
    $('a#sit_conf_edit').click(function () {
        $('div#sit_main').empty();
        exec_sit_conf_edit({});
    });
    $('a#sit_hook_add').click(function () {
        $('div#sit_main').empty();
        exec_sit_conf_wh_edit({});
    });
    $('a#sit_hook_del').click(function () {
        $('div#sit_main').empty();
        exec_sit_conf_wh_del({});
    });
}

function exec_sit_conf_after_sm_load_after(data) {
    var res = data.res;
    getTemplation(
        'sit',
        'sit.list',
        {res: res},
        'div#sit_main',
        'exec_sit_conf_after_sm_load_after_after_sl_load',
        {}
    );
}

function exec_sit_conf_after_sm_load(data) {
    getData('sitting/get',{},'exec_sit_conf_after_sm_load',data);
}

function exec_sit_conf(rel) {
    getTemplation(
        'sit',
        'sit.main',
        {},
        'div#sit_w_main',
        'exec_sit_conf_after_sm_load',
        {}
    );
}

function sit_u_add_new_click_after(data) {
    exec_sit_user(data);
}

function sit_u_add_new_click(rel) {
    getData('user/add/'+rel,{},'sit_u_add_new_click',rel);
}

function exec_sit_user_after_click_after_after_sua_load(data) {
    $('button#sit_u_add_new').click(function () {
        sit_u_add_new_click($('select#sit_u_add').val());
    });
}

function exec_sit_user_after_click_after(data) {
    var users = data.result.result;
    getTemplation(
        'sit',
        'sit.users.add',
        {users:users},
        'div#sit_main',
        'exec_sit_user_after_click_after_after_sua_load',
        {}
    );
}

function exec_sit_user_after_click(rel) {
    getData('bitrix/get',{method:'user.list'},'exec_sit_user_after_click',rel);
}

function sit_u_d_click_after(data) {
    exec_sit_user();
}

function sit_u_d_click(rel) {
    getData('user/delete/'+rel,{},'sit_u_d_click',rel);
}

function exec_sit_user_after_sulm_load_after_after_sul_load(data) {
    $('button#sit_u_btn_add').click(function () {
        $('div#sit_main').empty();
        exec_sit_user_after_click('');
    });
    $('a#sit_u_d').click(function () {
        var rel = $(this).attr('rel');
        sit_u_d_click(rel);
    });
}

function exec_sit_user_after_sulm_load_after(data) {
    var users = data.res;
    getTemplation(
        'sit',
        'sit.users.list',
        {users: users},
        'div#sit_main',
        'exec_sit_user_after_sulm_load_after_after_sul_load',
        {}
    );
}

function exec_sit_user_after_sulm_load(data) {
    getData('user/list',{},'exec_sit_user_after_sulm_load',data);
}

function exec_sit_user(rel){
    getTemplation(
        'sit',
        'sit.users.list.main',
        {},
        'div#sit_w_main',
        'exec_sit_user_after_sulm_load',
        {}
    );
}

function event_install_click_after(data) {
    exec_sit_event_after_sem_load();
}

function event_uninstall_click_after(data) {
    exec_sit_event_after_sem_load();
}

function event_install_click(rel) {
    getData('sitting/event.bind',{event:rel},'event_install_click',rel);
}

function event_uninstall_click(rel) {
    getData('sitting/event.unbind',{event:rel},'event_uninstall_click',rel);
}

function exec_sit_event_after_sel_load(data) {
    $('button#event_install').click(function () {
        var rel = $(this).attr('rel');
        event_install_click(rel);
    });
    $('button#event_uninstall').click(function () {
        var rel = $(this).attr('rel');
        event_uninstall_click(rel);
    });
}

function exec_sit_event_after_sem_load_after_after(data) {
    events = data.res;
    getTemplation(
        'sit',
        'sit.event.list',
        {eventlist:eventlist,events:events},
        'div#sit_main',
        'exec_sit_event_after_sel_load',
        {}
    );
}

function exec_sit_event_after_sem_load_after(data) {
    eventlist = data.res;
    getData('sitting/event.get',{},'exec_sit_event_after_sem_load_after',data);
}

function exec_sit_event_after_sem_load(data) {
    getData('sitting/event.list',{},'exec_sit_event_after_sem_load',data);
}

function exec_sit_event(rel){
    getTemplation(
        'sit',
        'sit.event.main',
        {},
        'div#sit_w_main',
        'exec_sit_event_after_sem_load',
        {}
    );
}

function sit_bind() {
    $('a#sit_m_conf').click(function () {
        $('div#sit_main').empty();
        exec_sit_conf();
    });
    $('a#sit_m_user').click(function () {
        $('div#sit_main').empty();
        exec_sit_user();
    });
    $('a#sit_m_event').click(function () {
        $('div#sit_main').empty();
        exec_sit_event();
    });
}

function exec_sit_after_m_load_after_ml_load(data) {
    sit_bind();
    exec_sit_user();
}

function exec_sit_after_m_load(data) {
    getTemplation(
        'sit',
        'main.list',
        {},
        'div#sit_menu',
        'exec_sit_after_m_load_after_ml_load',
        {}
    );
}

function exec_sit() {
    getTemplation(
        'sit',
        'main',
        {},
        'div#sit_block',
        'exec_sit_after_m_load',
        {}
    );
}