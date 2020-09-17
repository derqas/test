function main_deal_status_click_after(data) {
    if (data.error) {
        alert(data.message);
    } else {
        deal_update(data.elem);
    }
}

function main_deal_status_click(data) {
    getData('deal.edit/deal.status.save/'+data.elem,{val: $('select#' + data.id + '_edit').val()},'main_deal_status_click',data);
}

function bind_edit_main_after_dsl_load(data) {
    $('a#' + data.id + '_save').click(function () {
        main_deal_status_click(data);
    });
}

function main_deal_date_click_after(data) {
    if (data.error) {
        alert(data.message);
    } else {
        deal_update(data.elem);
    }
}

function main_deal_date_click(data) {
    getData('deal.edit/deal.date.save/'+data.elem,{val: $('input#' + data.id + '_edit').val()},'main_deal_date_click',data);
}

function bind_edit_main_after_dde_load(data) {
    $('a#' + data.id + '_save').click(function () {
        main_deal_date_click(data);
    });
}

function main_deal_comment_click_after(data) {
    if (data.error) {
        alert(data.message);
    } else {
        deal_update(data.elem);
    }
}

function main_deal_comment_click(data) {
    getData('deal.edit/deal.comment.save/'+data.elem,{val: $('textarea#' + data.id + '_edit').val()},'main_deal_comment_click',data);
}

function bind_edit_main_after_dce_load(data) {
    $('a#' + data.id + '_save').click(function () {
        main_deal_comment_click(data);
    });
}

function bind_edit_main() {
    $('a#main_deal_status_click').unbind('click');
    $('a#main_deal_status_click').click(function () {
        var elem = $(this).attr('rel');
        var val = $(this).attr('res');
        var id = 'main_deal_status_click_'+elem;
        getTemplation(
            'deal',
            'deal.status.list',
            {id:id,val:val},
            'div#'+id,
            'bind_edit_main_after_dsl_load',
            {elem:elem,id:id}
        );
    });
    $('a#main_deal_date_click').unbind('click');
    $('a#main_deal_date_click').click(function () {
        var elem = $(this).attr('rel');
        var val = $(this).attr('res');
        var id = 'main_deal_date_click_'+elem;
        getTemplation(
            'deal',
            'deal.date.edit',
            {id: id, val: val.replace(' ','T')},
            'div#'+id,
            'bind_edit_main_after_dde_load',
            {elem:elem,id:id}
        );
    });
    $('a#main_deal_comment_click').unbind('click');
    $('a#main_deal_comment_click').click(function () {
        var elem = $(this).attr('rel');
        var val = $(this).attr('res');
        var id = 'main_deal_comment_click_'+elem;
        getTemplation(
            'deal',
            'deal.comment.edit',
            {id: id, val: val},
            'div#'+id,
            'bind_edit_main_after_dce_load',
            {elem:elem,id:id}
        );
    });
    $('button#lead_info').unbind('click');
    $('button#lead_info').click(function () {
        var rel = $(this).attr('rel');
        dialog_init('div#lead_info_'+rel);
    });
}

function a_deal_element_id_save_click_after(data) {
    if (data.error) {
        alert(data.message);
    } else {
        deal_detail_click(data.deal);
        deal_update(data.deal_id);
    }
}

function a_deal_element_id_save_click(data) {
    getData('deal.edit/sotr.quantity.save.sum/'+data.deal,
        {
            sotr_id: data.elem,
            val: $('input#' + data.id + '_edit').val(),
            deal_id:data.deal_id
        }
        ,'a_deal_element_id_save_click',data);
}

function bind_edit_main_deal_details_after_duse_load(data) {
    $('a#' + data.id + '_save').click(function () {
        a_deal_element_id_save_click(data);
    });
}

function a_deal_quantity_id_save_click_after(data) {
    if (data.error) {
        alert(data.message);
    } else {
        deal_detail_click(data.deal);
        deal_update(data.deal_id);
    }
}

function a_deal_quantity_id_save_click(data) {
    getData('deal.edit/sotr.quantity.save.proc/'+ data.deal,
        {
            sotr_id: data.elem,
            val: $('input#' + data.id + '_edit').val(),
            deal_id:data.deal_id
        },
        'a_deal_quantity_id_save_click',data);
}

function bind_edit_main_deal_details_after_dupe_load(data) {
    $('a#' + data.id + '_save').click(function () {
        a_deal_quantity_id_save_click(data);
    });
}

function a_deal_zp_id_save_click_after(data) {
    if (data.error) {
        alert(data.message);
    } else {
        deal_detail_click(data.deal);
        deal_update(data.deal_id);
    }
}

function a_deal_zp_id_save_click(data) {
    getData('deal.edit/sotr.zp.save/'+ data.deal,
        {
            sotr_id: data.elem,
            val: $('input#' + data.id + '_edit').val(),
            deal_id:data.deal_id
        },
        'a_deal_zp_id_save_click',data);
}

function bind_edit_main_deal_details_after_duze_load(data) {
    $('a#' + data.id + '_save').click(function () {
        a_deal_zp_id_save_click(data);
    });
}

function a_deal_count_id_save_click_after(data) {
    if (data.error) {
        alert(data.message);
    } else {
        deal_detail_click(data.deal);
        deal_update(data.deal_id);
    }
}

function a_deal_count_id_save_click(data) {
    getData('deal.edit/mat.count.save/'+ data.deal,
        {
            sotr_id: data.elem,
            val: $('input#' + data.id + '_edit').val(),
            deal_id:data.deal_id
        },
        'a_deal_count_id_save_click',data);
}

function bind_edit_main_deal_details_after_dpce_load(data) {
    $('a#' + data.id + '_save').click(function () {
        a_deal_count_id_save_click(data);
    });
}

function a_deal_cost_id_save_click_after(data) {
    if (data.error) {
        alert(data.message);
    } else {
        deal_detail_click(data.deal);
        deal_update(data.deal_id);
    }
}

function a_deal_cost_id_save_click(data) {
    getData('deal.edit/mat.cost.save/'+ data.deal,
        {
            sotr_id: data.elem,
            val: $('input#' + data.id + '_edit').val(),
            deal_id:data.deal_id
        },
        'a_deal_cost_id_save_click',data);
}

function bind_edit_main_deal_details_after_dpcoste_load(data) {
    $('a#' + data.id + '_save').click(function () {
        a_deal_cost_id_save_click(data);
    });
}

function bind_edit_main_deal_details(deal_id) {
    $('a#sotr_sum_edit_deal_'+deal_id).click(function () {
        var elem = $(this).attr('rel');
        var deal = $(this).attr('ret');
        var val = $(this).attr('res');
        var id = 'sotr_sum_edit_deal_'+deal+'_'+elem;
        getTemplation(
            'deal',
            'deal.user.cost.edit',
            {id: id, val: val},
            'div#'+id,
            'bind_edit_main_deal_details_after_duse_load',
            {id:id,deal:deal,deal_id:deal_id,elem:elem}
        );
    });
    $('a#sotr_proc_edit_deal_'+deal_id).click(function () {
        var elem = $(this).attr('rel');
        var deal = $(this).attr('ret');
        var val = $(this).attr('res');
        var id = 'sotr_proc_edit_deal_'+deal+'_'+elem;
        getTemplation(
            'deal',
            'deal.user.procent.edit',
            {id: id, val: val},
            'div#'+id,
            'bind_edit_main_deal_details_after_dupe_load',
            {id:id,deal:deal,deal_id:deal_id,elem:elem}
        );
    });
    $('a#sotr_zp_edit_deal_'+deal_id).click(function () {
        var elem = $(this).attr('rel');
        var deal = $(this).attr('ret');
        var val = $(this).attr('res');
        var id = 'sotr_zp_edit_deal_'+deal+'_'+elem;
        getTemplation(
            'deal',
            'deal.user.zp.edit',
            {id: id, val: val},
            'div#'+id,
            'bind_edit_main_deal_details_after_duze_load',
            {id:id,deal:deal,deal_id:deal_id,elem:elem}
        );
    });
    $('a#mat_edit_deal_'+deal_id).click(function () {
        var elem = $(this).attr('rel');
        var deal = $(this).attr('ret');
        var val = $(this).attr('res');
        var id = 'mat_edit_deal_'+deal+'_'+elem;
        getTemplation(
            'deal',
            'deal.product.count.edit',
            {id: id, val: val},
            'div#'+id,
            'bind_edit_main_deal_details_after_dpce_load',
            {id:id,deal:deal,deal_id:deal_id,elem:elem}
        );
    });
    $('a#mat_edit_cost_deal_'+deal_id).click(function () {
        var elem = $(this).attr('rel');
        var deal = $(this).attr('ret');
        var val = $(this).attr('res');
        var id = 'mat_edit_cost_deal_'+deal+'_'+elem;
        getTemplation(
            'deal',
            'deal.product.cost.edit',
            {id: id, val: val},
            'div#'+id,
            'bind_edit_main_deal_details_after_dpcoste_load',
            {id:id,deal:deal,deal_id:deal_id,elem:elem}
        );
    });
}

function deal_update_after_after_dls_load(data) {
    bind_edit_main();
    $('a#main_deal_details_click').unbind('click');
    $('a#main_deal_details_click').click(function () {
        var rel = $(this).attr('rel');
        deal_detail_click(rel);
    });
}

function deal_update_after(data) {
    var usl = data.res;
    getTemplation(
        'deal',
        'deal.list.single',
        {usl:usl,users:users},
        'tr#deal_id_'+usl[0].usl_id,
        'deal_update_after_after_dls_load',
        {}
    );
}

function deal_update(deal_id) {
    getData('deal/deal.list/'+deal_id,{},'deal_update',deal_id);
}