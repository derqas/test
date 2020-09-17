function exec_filters_after_after_fm_load(data) {
    $('button#filters_exec').click(function () {
        filters.date_from = $('input#filter_date_from').val();
        filters.date_from = filters.date_from;//.replace('T',' ') + ':00';
        filters.date_to = $('input#filter_date_to').val();
        filters.date_to = filters.date_to;//.replace('T',' ') + ':59';
        filters.deal = $('input#filter_deal').val();
        filters.date_out = $('input#filter_date').val();
        filters.sotr = $('select#filter_sort').val();
        filters.all = $('input#filter_all')[0].checked;
        filters.group = ($('input#filter_group')[0].checked?'true':'false');
        load_deals();
    });
    $('input#tag_filter_add').autocomplete({
        minLength: 0,
        source: function (request, response) {
            $.post('/api/'+api_version+'/tags/autocomplete', request, response);
        },
        select: function( event, ui ) {
            var flag = true;
            filters.date_from = $('input#filter_date_from').val();
            filters.date_from = filters.date_from;//.replace('T',' ') + ':00';
            filters.date_to = $('input#filter_date_to').val();
            filters.date_to = filters.date_to;//.replace('T',' ') + ':59';
            filters.deal = $('input#filter_deal').val();
            filters.date_out = $('input#filter_date').val();
            filters.sotr = $('select#filter_sort').val();
            filters.all = $('input#filter_all')[0].checked;
            filters.group = ($('input#filter_group')[0].checked?'true':'false');
            filters.tags.forEach(function (elem) {
                if (elem.value == ui.item.value){
                    flag = false;
                }
            });
            if (flag){
                filters.tags[filters.tags.length] = ui.item;
            }
            exec_filters({});
        }
    });
    $('a#tag_delete_filter').click(function () {
        var val = $(this).attr('rel');
        var tags = filters.tags;
        filters.tags = [];
        filters.date_from = $('input#filter_date_from').val();
        filters.date_from = filters.date_from;//.replace('T',' ') + ':00';
        filters.date_to = $('input#filter_date_to').val();
        filters.date_to = filters.date_to;//.replace('T',' ') + ':59';
        filters.deal = $('input#filter_deal').val();
        filters.date_out = $('input#filter_date').val();
        filters.sotr = $('select#filter_sort').val();
        filters.all = $('input#filter_all')[0].checked;
        filters.group = ($('input#filter_group')[0].checked?'true':'false');
        tags.forEach(function (elem) {
            if (elem.value == val){
                flag = false;
            }else{
                filters.tags[filters.tags.length] = elem;
            }
        });
        exec_filters({});
    });
    $('button#filters_exec_clear').click(function () {
        filters =
            {
                date_from:'',
                date_to:'',
                deal:'',
                date_out:'',
                sotr:'',
                all:false,
                group:'true'
            };
        filters.tags = [];
        load_deals();
    })
}

function exec_filters_after(data) {
    sotrudniki = data.res;
    getTemplation(
        'filters',
        'filters.main',
        {sotr:sotrudniki,f:filters},
        'div#main_filters',
        'exec_filters_after_after_fm_load',
        {}
    );
}

function exec_filters(rel = {}) {
    getData('sotr/list',{filters:filters},'exec_filters',{});
}

function exec_filters_res_after_after_fr_load(data) {
    $('button#filters_exec').click(function () {
        filters_res.date_from = $('input#filter_date_from').val();// + ($('input#filter_date_from').val()==''?'':' 00:00:00');
        filters_res.date_to = $('input#filter_date_to').val();// + ($('input#filter_date_from').val()==''?'':' 23:59:59');
        filters_res.deal = $('input#filter_deal').val();
        filters_res.work = $('input#filter_work').val();
        filters_res.mat = $('input#filter_mat').val();
        filters_res.sotr = $('select#filter_sort').val();
        filters_res.date_from1 = $('input#filter_date_from1').val();
        filters_res.date_to1 = $('input#filter_date_to1').val();
        filters_res.date_from2 = $('input#filter_date_from2').val();
        filters_res.date_to2 = $('input#filter_date_to2').val();
        load_deals_res();
    });
}

function exec_filters_res_after(data) {
    sotrudniki = data.res;
    getTemplation(
        'filters',
        'filters.res',
        {sotr: sotrudniki,f:filters_res},
        'div#res_filters',
        'exec_filters_res_after_after_fr_load',
        {}
    );
}

function exec_filters_res(rel = {}) {
    getData('sotr/list',{},'exec_filters_res',rel);
}

function exec_filters_log_after_fl_load(data) {
    $('button#filters_exec').click(function () {
        filters_log.date_from = $('input#filter_date_from').val();
        filters_log.date_to = $('input#filter_date_to').val();
        filters_log.user = $('input#filter_user').val();
        filters_log.method = $('input#filter_module').val();
        load_log('');
    });
}

function exec_filters_log() {
    getTemplation(
        'filters',
        'filters.loggi',
        {f:filters_log},
        'div#log_filters',
        'exec_filters_log_after_fl_load',
        {}
    );
}