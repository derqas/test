function exec_main_add_after_load_list_after_deal_add_after_after_mpdin_load(data) {

}

function exec_main_add_after_load_list_after_deal_add_after(data) {
    getTemplation(
        'main',
        'main.page.deals.info.notify',
        {},
        'div#deals_added',
        'exec_main_add_after_load_list_after_deal_add_after_after_mpdin_load',
        {}
    );
}

function exec_main_add_after_load_list_after_deal_add(deal) {
    getData('deal/add/'+deal,{},'exec_main_add_after_load_list_after_deal_add',deal);
}

function exec_main_add_after_load_list_after(data) {
    var deals = data.res;
    deals.forEach(function (pp1, pp2, pp3) {
        exec_main_add_after_load_list_after_deal_add(pp1.ID);
    });
}

function exec_main_add_after_load_list(stat) {
    getData('deal/bitrix.list/'+stat,{},'exec_main_add_after_load_list',stat);
}

function exec_main_add_after(data) {
    var stats = data.res;
    stats.forEach(function (p1) {
        if (p1.base.type == 'IN'){
            if (p1.bitrix != null) {
                var stat = p1.bitrix.STATUS_ID;
                exec_main_add_after_load_list(stat);
            }
        }
    });
}

function deal_update_click_after_after_mpdinu_load(data) {

}

function deal_update_click_after(data) {
    getTemplation(
        'main',
        'main.page.deals.info.notify.update',
        {},
        'div#deals_added',
        'deal_update_click_after_after_mpdinu_load',
        {}
    );
}

function deal_update_click(rel) {
    getData('deal/update/'+rel,{},'deal_update_click',rel);
}

function exec_main_add(rel){
    getData('status/list',{},'exec_main_add',rel);
}

function main_deal_details_sotr_add_click_click_after(data) {
    var rel = data.res.rel;
    deal_detail_click(rel);
}

function main_deal_details_sotr_add_click_click(rel) {
    getData(
        'deal/sotr.add/'+rel,
        {sotr_id: $('select#sotr_deal_add_u_add_' + rel).val()},
        'main_deal_details_sotr_add_click_click',
        rel);
}

function main_deal_details_sotr_add_click_after_after_load_mddua(rel) {
    $('button#main_deal_details_sotr_cancel_click_' + rel).click(function () {
        var rel = $(this).attr('rel');
        deal_detail_click(rel);
    });
    $('button#main_deal_details_sotr_add_click_' + rel).click(function () {
        var rel = $(this).attr('rel');
        main_deal_details_sotr_add_click_click(rel);
    });
}

function main_deal_details_sotr_add_click_after(data) {
    //sotrudniki = data.res;
    var rel = glob_rel.rel;
    var sotr = glob_rel.sotr;
    getTemplation(
        'main',
        'main.deal.details.users.add',
        {users: sotr, rel: rel, usersGlobal: sotrudniki},
        'div#main_deal_details_sotr_' + rel,
        'main_deal_details_sotr_add_click_after_after_load_mddua',
        rel
    );
}

function main_deal_details_sotr_add_click(rel) {
    main_deal_details_sotr_add_click_after('');
    //getData('sotr/list',{},'main_deal_details_sotr_add_click',rel)
}

function main_deal_details_mat_add_click_click_after(data) {
    var rel = data.res.rel;
    deal_detail_click(rel);
}

function main_deal_details_mat_add_click_click(rel) {
    getData('deal/mat.add/'+rel,
        {mat_id: $('select#mat_deal_add_u_add_' + rel).val()},
        'main_deal_details_mat_add_click_click',
        rel);
}

function main_deal_details_mat_add_click_after_after_load_mddpa_templation(rel) {
    $('button#main_deal_details_mat_cancel_click_' + rel).click(function () {
        var rel = $(this).attr('rel');
        deal_detail_click(rel);
    });
    $('button#main_deal_details_mat_add_click_' + rel).click(function () {
        var rel = $(this).attr('rel');
        main_deal_details_mat_add_click_click(rel);
    });
}

function main_deal_details_mat_add_click_after(data) {
    var rel = data.res.rel;
    var mat = data.res.mat;
    getTemplation(
        'main',
        'main.deal.details.products.add',
        {products: mat, rel: rel},
        'div#main_deal_details_mat_' + rel,
        'main_deal_details_mat_add_click_after_after_load_mddpa_templation',
        rel
    );
}

function main_deal_details_mat_add_click(rel) {
    getData('deal/deal.mat.list/'+rel,{},'main_deal_details_mat_add_click',rel);
}

function deal_detail_click_after_templation_mddp_load(rel) {
    $('button#main_deal_details_mat_add_' + rel).click(function () {
        var rel = $(this).attr('rel');
        //glob_rel = rel;
        main_deal_details_mat_add_click(rel);
    });
    bind_edit_main_deal_details(rel);
}

function tag_add_to_deal_after(data) {
    deal_detail_click(data.res.rel);
}

function tag_add_to_deal(rel) {
    getData('tags/add/'+rel.rel,{tag_id:rel.value},'tag_add_to_deal',rel);
}

function tag_add_new_to_deal_after(data) {
    deal_detail_click(data.res.rel);
}

function tag_add_new_to_deal(rel) {
    getData('tags/new/'+rel.rel,{value:rel.value},'tag_add_new_to_deal',rel);
}

function tag_delete_to_deal_after(data) {
    deal_detail_click(data.res.rel);
}

function tag_delete_to_deal(rel) {
    getData('tags/delete/'+rel.rel,{tag_id:rel.value},'tag_delete_to_deal',rel);
}

function deal_detail_click_after_templation_mddu_load(data) {
    var sotr = data.sotr;
    var mat = data.mat;
    var rel = data.rel;
    current_deal_to_tag_add = rel;
    $('button#main_deal_details_close_' + rel).click(function () {
        var rel = $(this).attr('rel');
        $('tr#main_deal_details_' + rel).empty();
    });
    $('button#main_deal_details_sotr_add_' + rel).click(function () {
        var rel = $(this).attr('rel');
        glob_rel = {rel:rel,sotr:sotr};
        main_deal_details_sotr_add_click(rel);
    });
    $('input#tag_add_'+rel).autocomplete({
        minLength: 0,
        source: function (request, response) {
            $.post('/api/'+api_version+'/tags/autocomplete', request, response);
        },
        select: function( event, ui ) {
            var rel = $(this).attr('rel');
            tag_add_to_deal({rel:rel,value:ui.item.value});
        }
    });
    $('button#tag_add').click(function () {
        var rel = $(this).attr('rel');
        var val = $('input#tag_add_'+rel).val();
        tag_add_new_to_deal({rel:rel,value:val});
    });
    $('a#tag_delete').click(function () {
        var rel = $(this).attr('ret');
        var tag = $(this).attr('rel');
        tag_delete_to_deal({rel:rel,value:tag});
    });
    getTemplation(
        'main',
        'main.deal.details.products',
        {products: mat, rel: rel},
        'div#main_deal_details_mat_' + rel,
        'deal_detail_click_after_templation_mddp_load',
        rel
    );
}

function deal_detail_click_after_templation_mdd_load(data) {
    var sotr = data.sotr;
    var mat = data.mat;
    var rel = data.rel;
    getTemplation(
        'main',
        'main.deal.details.users',
        {users:sotr,rel:rel,usersGlobal:sotrudniki},
        'div#main_deal_details_sotr_' + rel,
        'deal_detail_click_after_templation_mddu_load',
        {sotr:sotr,mat:mat,rel:rel});
}

function deal_detail_click_after(data) {
    var sotr = data.res.sotr;
    var mat = data.res.mat;
    var rel = data.res.usl;
    var tags = data.res.tags;
    getTemplation(
        'main',
        'main.deal.details',
        {rel:rel,tags:tags},
        'tr#main_deal_details_' + rel,
        'deal_detail_click_after_templation_mdd_load',
        {sotr:sotr,mat:mat,rel:rel});
}

function deal_detail_click(rel) {
    getData('deal/deal.details/'+rel,{},'deal_detail_click',rel);
}

function load_deals_after_templation_load(data){
    $('a#main_list_sort').click(function () {
        sort.ask = $(this).attr('res');
        sort.by = $(this).attr('rel');
        load_deals('');
    });
    $('a#main_deal_details_click').click(function () {
        var rel = $(this).attr('rel');
        deal_detail_click(rel);
    });
    $('button#deal_update').click(function () {
        var rel = $(this).attr('rel');
        deal_update_click(rel);
    });
    $('button#pagination_count').click(function () {
        per_page = $(this).attr('rel');
        load_deals('');
    });
    $('button#page_selector').click(function () {
        page = $(this).attr('rel');
        load_deals('');
    });
    $('button#deal_info').click(function () {
        var rel = $(this).attr('rel');
        dialog_init('div#deal_info_'+rel);
    });
    $('button#lead_info').click(function () {
        var rel = $(this).attr('rel');
        dialog_init('div#lead_info_'+rel);
    });
    bind_edit_main();
}

function dialog_init(rel) {
    $(rel).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            Ok: function() {
                $( this ).dialog( "destroy" );
            }
        }
    });
}

function load_deals_after(data) {
    var usl = data.res;
    $('div#main_filters').show();
    getTemplation('main','main.deal.list.new',{users:users,deals: usl,sort:sort,pagination:data.pagination},'div#main_main','load_deals_after_templation_load',{});
}

function load_deals(rel) {
    $('div#main_main').empty();
    getData('deal/list',{filters:filters,sort:sort,page:page,count:per_page},'load_deals','');
}

function sotr_load_after(data) {
    sotrudniki = data.res;
}

function sotr_load(rel) {
    getData('sotr/list',{},'sotr_load',rel);
}

function after_main_load(data) {
    $('button#main_add_deal').click(function () {
        exec_main_add();
    });
    $('div#main_filters').show();
    $('button#main_btn_update').click(function () {
        exec_main();
    });
    load_deals();
    fix_css();
    exec_filters();
}

function exec_main() {
    //sotr_load('');
    if (loader_type == 'timer') {
        exec_main_add('');
    }
    getTemplation('main','main.main',{},'div#main_block','after_main_load',{});
}