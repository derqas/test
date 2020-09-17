function conf_s_add_new_click_after(data) {
    exec_conf_stat();
}

function conf_s_add_new_click(rel) {
    getData('status/add/'+$('select#conf_s_add').val(),{},'conf_s_add_new_click',rel);
}

function exec_conf_stat_after_click_after_after_csa_load(data) {
    $('button#conf_s_add_new').click(function () {
        conf_s_add_new_click({});
    });
}

function exec_conf_stat_after_click_after(data) {
    var users = data.result.result;
    getTemplation(
        'conf',
        'conf.status.add',
        {statuses:users},
        'div#conf_main',
        'exec_conf_stat_after_click_after_after_csa_load',
        {}
    );
}

function exec_conf_stat_after_click(rel) {
    getData('bitrix/get',{method:'status.list'},'exec_conf_stat_after_click',rel);
}

function conf_s_d_click_after(data) {
    exec_conf_stat();
}

function conf_s_d_click(rel) {
    getData('status/delete/'+rel,{},'conf_s_d_click',rel);
}

function conf_s_e_click_after(data) {
    exec_conf_stat();
}

function conf_s_e_click(rel) {
    getData('status/edit/'+rel.rel,{val:rel.ret},'conf_s_e_click',rel);
}

function exec_conf_stat_after_csm_load_after_after_csv_load(data) {
    $('button#conf_s_btn_add').click(function () {
        exec_conf_stat_after_click();
    });
    $('a#conf_s_d').click(function () {
        var rel = $(this).attr('rel');
        conf_s_d_click(rel);
    });
    $('a#conf_s_e').click(function () {
        var rel = $(this).attr('rel');
        var ret = $(this).attr('ret');
        conf_s_e_click({rel:rel,ret:ret});
    });
}

function exec_conf_stat_after_csm_load_after(data) {
    var users = data.res;
    getTemplation(
        'conf',
        'conf.status.view',
        {statuses:users},
        'div#conf_main',
        'exec_conf_stat_after_csm_load_after_after_csv_load',
        {}
    );
}

function exec_conf_stat_after_csm_load(data) {
    getData('status/list',{},'exec_conf_stat_after_csm_load',data);
}

function exec_conf_stat(rel) {
    getTemplation(
        'conf',
        'conf.status.main',
        {},
        'div#conf_w_main',
        'exec_conf_stat_after_csm_load',
        {}
    );
}

function exec_conf_usl_after_click_after_after_cucm_load_after_cucmc_load(data) {
    $('a#conf_cat').click(function () {
        var rel = $(this).attr('rel');
        get_product_list_usl(rel);
    });
    get_product_list_usl('main');
}

function exec_conf_usl_after_click_after_after_cucm_load(data) {
    var cat = data.res.result;
    getTemplation(
        'conf',
        'conf.uslug.catalog.main.cats',
        {cats: cat},
        'div#conf_cat',
        'exec_conf_usl_after_click_after_after_cucm_load_after_cucmc_load',
        {}
    );
}

function exec_conf_usl_after_click_after(data) {
    getTemplation(
        'conf',
        'conf.uslug.catalog.main',
        {},
        'div#conf_main',
        'exec_conf_usl_after_click_after_after_cucm_load',
        data
    );
}

function conf_us_a_click_after(data) {

}

function conf_us_a_click(rel) {
    getData('usl/add/'+rel,{},'conf_us_a_click',rel);
}

function get_product_list_usl_after_after_cul_load(data) {
    $('a#conf_us_a').click(function () {
        var rel = $(this).attr('rel');
        conf_us_a_click(rel);
    });
}

function get_product_list_usl_after(data) {
    var users = data.res;
    getTemplation(
        'conf',
        'conf.uslug.list',
        {products: users},
        'div#conf_p_l',
        'get_product_list_usl_after_after_cul_load',
        {}
    );
}

function get_product_list_usl(cat) {
    getData('usl/product.list/'+cat,{},'get_product_list_usl',cat);
}

function exec_conf_usl_after_click(rel) {
    getData('bitrix/get',{method:'catalog.list'},'exec_conf_usl_after_click',rel);
}

function conf_us_d_click_after(data) {
    exec_conf_usl();
}

function conf_us_d_click(rel) {
    getData('usl/delete/'+rel,{},'conf_us_d_click',rel);
}

function usl_pr_type_click_after(data) {
    exec_conf_usl();
}

function usl_pr_type_click(rel) {
    getData('usl/edit.type/'+rel.rel,{val:rel.ret},'usl_pr_type_click',rel);
}

function exec_conf_usl_after_cum_load_after_after_culv_load(data) {
    $('button#conf_us_btn_add').click(function () {
        $('div#conf_main').empty();
        exec_conf_usl_after_click('');
    });
    $('a#conf_us_d').click(function () {
        var rel = $(this).attr('rel');
        conf_us_d_click(rel);
    });
    $('a#usl_pr_type').click(function () {
        var rel = $(this).attr('rel');
        var ret = $(this).attr('ret');
        usl_pr_type_click({rel:rel,ret:ret});
    });
    conf_usl_edit();
}

function exec_conf_usl_after_cum_load_after(data) {
    var users = data.res;
    getTemplation(
        'conf',
        'conf.uslug.list.view',
        {products: users},
        'div#conf_main',
        'exec_conf_usl_after_cum_load_after_after_culv_load',
        {}
    );
}

function conf_usl_edit_click_after_after_culet_load(data) {
    conf_usl_edit();
}

function conf_usl_edit_click_after(data) {
    var rel = data.res;
    getTemplation(
        'conf',
        'conf.uslug.list.edit.type',
        {rel: rel},
        'div#conf_us_edit_'+rel.id,
        'conf_usl_edit_click_after_after_culet_load',
        {}
    );
}

function conf_usl_edit_click(rel) {
    getData('usl/edit/'+rel,{val:$('input#conf_us_ed_i_'+rel).val()},'conf_usl_edit_click',rel);
}

function conf_usl_edit_after_culec_load(data) {
    $('a#conf_us_ed_i_btn_' + data.rel).click(function () {
        var rel = $(this).attr('rel');
        conf_usl_edit_click(rel);
    });
}

function conf_usl_edit() {
    $('a#conf_us_e').unbind('click');
    $('a#conf_us_e').click(function () {
        var rel = $(this).attr('rel');
        var ret = $(this).attr('ret');
        getTemplation(
            'conf',
            'conf.uslug.list.edit.cost',
            {ret: ret,rel:rel},
            'div#conf_us_edit_'+rel,
            'conf_usl_edit_after_culec_load',
            {rel:rel}
        );
    });
}

function exec_conf_usl_after_cum_load(rel) {
    getData('usl/list',{},'exec_conf_usl_after_cum_load',rel);
}

function exec_conf_usl(rel) {
    getTemplation(
        'conf',
        'conf.uslug.main',
        {},
        'div#conf_w_main',
        'exec_conf_usl_after_cum_load',
        {}
    );
}

function exec_conf_mat_after_click_after_after_cpcm_load_after_cpcl_load(data) {
    $('a#conf_cat').click(function () {
        var rel = $(this).attr('rel');
        get_product_list(rel);
    });
    get_product_list('main');
}

function exec_conf_mat_after_click_after_after_cpcm_load(data) {
    var cat = data.res.result;
    getTemplation(
        'conf',
        'conf.products.catalog.list',
        {cats:cat},
        'div#conf_cat',
        'exec_conf_mat_after_click_after_after_cpcm_load_after_cpcl_load',
        {}
    );
}

function exec_conf_mat_after_click_after(data) {
    getTemplation(
        'conf',
        'conf.products.catalog.main',
        {},
        'div#conf_main',
        'exec_conf_mat_after_click_after_after_cpcm_load',
        'data'
    );
}

function conf_m_a_click_after(data) {

}

function conf_m_a_click(rel) {
    getData('mat/add/'+rel,{},'conf_m_a_click',rel);
}

function get_product_list_after_after_cpla_load(data) {
    $('a#conf_m_a').click(function () {
        var rel = $(this).attr('rel');
        conf_m_a_click(rel);
    });
}

function get_product_list_after(data) {
    var users = data.res;
    getTemplation(
        'conf',
        'conf.products.list.add',
        {products:users},
        'div#conf_p_l',
        'get_product_list_after_after_cpla_load',
        {}
    );
}

function get_product_list(cat) {
    getData('mat/product.list/'+cat,{},'get_product_list',cat);
}

function exec_conf_mat_after_click(rel) {
    getData('bitrix/get',{method:'catalog.list'},'exec_conf_mat_after_click',rel);
}

function conf_m_d_click_after(data) {
    exec_conf_mat();
}

function conf_m_d_click(rel) {
    getData('mat/delete/'+rel,{},'conf_m_d_click',rel);
}

function exec_conf_mat_after_cpm_load_after_after_cpl_load(data) {
    $('button#conf_m_btn_add').click(function () {
        $('div#conf_main').empty();
        exec_conf_mat_after_click('');
    });
    $('a#conf_m_d').click(function () {
        var rel = $(this).attr('rel');
        conf_m_d_click(rel);
    });
    conf_mat_edit();
}

function exec_conf_mat_after_cpm_load_after(data) {
    var users = data.res;
    getTemplation(
        'conf',
        'conf.products.list',
        {products: users},
        'div#conf_main',
        'exec_conf_mat_after_cpm_load_after_after_cpl_load',
        {}
    );
}

function conf_mat_edit_click_after_after_cplev_load(data) {
    conf_mat_edit();
}

function conf_mat_edit_click_after(data) {
    var rel = data.res;
    getTemplation(
        'conf',
        'conf.products.list.edit.val',
        {rel: rel},
        'div#conf_m_edit_'+rel.id,
        'conf_mat_edit_click_after_after_cplev_load',
        {}
    );
}

function conf_mat_edit_click(rel) {
    getData('mat/edit/'+rel,{val:$('input#conf_m_ed_i_'+rel).val()},'conf_mat_edit_click',rel);
}

function conf_mat_edit_after_cplev_load(rel) {
    $('a#conf_m_ed_i_btn_' + rel).click(function () {
        var rel = $(this).attr('rel');
        conf_mat_edit_click(rel);
    });
}

function conf_mat_edit() {
    $('a#conf_m_e').unbind('click');
    $('a#conf_m_e').click(function () {
        var rel = $(this).attr('rel');
        var ret = $(this).attr('ret');
        getTemplation(
            'conf',
            'conf.products.list.edit.value',
            {rel: rel,ret:ret},
            'div#conf_m_edit_'+rel,
            'conf_mat_edit_after_cplev_load',
            rel
        );
    });
}

function exec_conf_mat_after_cpm_load(rel) {
    getData('mat/list',{},'exec_conf_mat_after_cpm_load',rel);
}

function exec_conf_mat(rel) {
    getTemplation(
        'conf',
        'conf.products.main',
        {},
        'div#conf_w_main',
        'exec_conf_mat_after_cpm_load',
        {}
    );
}

function conf_u_add_new_click_after(data) {
    exec_conf_sotr(data);
}

function conf_u_add_new_click(rel) {
    getData('sotr/add/'+$('select#conf_u_add').val(),{},'conf_u_add_new_click',rel);
}

function exec_conf_sotr_after_click_after_after_cula_load(data) {
    $('button#conf_u_add_new').click(function () {
        conf_u_add_new_click('');
    });
}

function exec_conf_sotr_after_click_after(data) {
    var users = data.result.result;
    getTemplation(
        'conf',
        'conf.users.list.add',
        {users:users},
        'div#conf_main',
        'exec_conf_sotr_after_click_after_after_cula_load',
        {}
    );
}

function exec_conf_sotr_after_click(rel) {
    getData('bitrix/get',{method:'user.list'},'exec_conf_sotr_after_click',rel);
}

function conf_u_d_click_after(data) {
    exec_conf_sotr();
}

function conf_u_d_click(rel) {
    getData('sotr/delete/'+rel,{},'conf_u_d_click',rel)
}

function conf_u_e_click_after(data) {
    exec_conf_sotr();
}

function conf_u_e_click(rel) {
    getData('sotr/edit/'+rel.rel,{val: rel.ret},'conf_u_e_click',rel);
}

function exec_conf_sotr_list_load_after_after_cul_load(data) {
    $('button#conf_u_btn_add').click(function () {
        $('div#conf_main').empty();
        exec_conf_sotr_after_click('');
    });
    $('a#conf_u_d').click(function () {
        var rel = $(this).attr('rel');
        conf_u_d_click(rel);
    });
    $('a#conf_u_e').click(function () {
        var rel = $(this).attr('rel');
        var ret = $(this).attr('ret');
        conf_u_e_click({rel:rel,ret:ret});
    });
}

function exec_conf_sotr_list_load_after(data) {
    var users = data.res;
    getTemplation(
        'conf',
        'conf.users.list',
        {users: users},
        'div#conf_main',
        'exec_conf_sotr_list_load_after_after_cul_load',
        {}
    );
}

function exec_conf_sotr_list_load(rel) {
    getData('sotr/list',{},'exec_conf_sotr_list_load',rel);
}

function exec_conf_sotr_after_cum_load(data) {
    exec_conf_sotr_list_load('');
}

function exec_conf_sotr(rel) {
    getTemplation(
        'conf',
        'conf.users.main',
        {},
        'div#conf_w_main',
        'exec_conf_sotr_after_cum_load',
        {}
    );
}

function conf_bind() {
    $('a#conf_m_sotr').click(function () {
        $('div#conf_main').empty();
        exec_conf_sotr();
    });
    $('a#conf_m_mat').click(function () {
        $('div#conf_main').empty();
        exec_conf_mat();
    });
    $('a#conf_m_usl').click(function () {
        $('div#conf_main').empty();
        exec_conf_usl();
    });
    $('a#conf_m_stat').click(function () {
        $('div#conf_main').empty();
        exec_conf_stat();
    });
}

function exec_conf_after_cml_load(data) {
    conf_bind();
    exec_conf_sotr();
}

function exec_conf_after_cm_load(data) {
    getTemplation(
        'conf',
        'conf.main.list',
        {},
        'div#conf_menu',
        'exec_conf_after_cml_load',
        {}
    );
}

function exec_conf() {
    getTemplation(
        'conf',
        'conf.main',
        {},
        'div#conf_block',
        'exec_conf_after_cm_load',
        {}
    );
}
