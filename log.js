var res =null;

function load_log_after_after_lm_load(data) {

}

function load_log_after(data) {
    res = data.res;
    getTemplation(
        'log',
        'log.main',
        {res:res},
        'div#log_main',
        'load_log_after_after_lm_load',
        {}
    );
}

function load_log(rel) {
    getData('log/list',{filters:filters_log},'load_log',rel);
}

function exec_log_after_lp_load(data) {
    exec_filters_log();
}

function exec_log(){
    getTemplation(
        'log',
        'log.page',
        {},
        'div#log_block',
        'exec_log_after_lp_load',
        {}
    );
}