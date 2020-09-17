var sotrudniki;
var glob_rel;
var events;
var eventlist;
var filters =
    {
        date_from:'',
        date_to:'',
        deal:'',
        date_out:'',
        sotr:'',
        all:false,
        group:'true',
        tags:[]
    };
var filters_res =
    {
        date_from:'',
        date_to:'',
        date_from1:'',
        date_to1:'',
        date_from2:'',
        date_to2:'',
        deal:'',
        work:'',
        mat:'',
        sotr:''
    };
var filters_log=
    {
        date_from:'',
        date_to:'',
        user:'',
        method:''
    };
var sort = {
    by:'date',
    ask:'desc'
};
var page = 1;
var per_page = 20;

var current_deal_to_tag_add;
var users = {};