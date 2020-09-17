function load_deals_res_after_after_rdl_load(data) {

}

function load_deals_res_after(data) {
    var usl = data.res;
    $('div#res_filters').show();
    getTemplation(
        'res',
        'res.deals.list',
        {deals:usl,users:sotrudniki},
        'div#res_main',
        'load_deals_res_after_after_rdl_load',
        {}
    );
}

function load_deals_res(rel) {
    getData('deal/res.list',{filters:filters_res},'load_deals_res',rel);
}

function exec_res_after_after_rm_load(data) {
    fix_css();
    exec_filters_res();
}

function exec_res_after(data) {
    //sotrudniki = data.res;
    getTemplation(
        'res',
        'res.main',
        {},
        'div#res_block',
        'exec_res_after_after_rm_load',
        {}
    );
}

function exec_res(rel = {}) {
    exec_res_after('');
    //getData('sotr/list',{},'exec_res',rel);
}