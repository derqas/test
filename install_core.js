/**
 * Created by QAS on 16.05.2017.
 */

function get_step() {
    $.post(
        '/install',
        {step:'get_step'},
        function (data) {
            if (data.step != null){
                $('#step'+data.step).show();
                if (data.step == 1){
                    $('button#step_1').click(function () {
                        $.post(
                            '/install',
                            {
                                step:'1',
                                portal:$('input#b_domain').val(),
                                app_id:$('input#app_id').val(),
                                app_sec:$('input#app_sec').val()
                            },
                            function (data) {
                                if (data.redirect != null){
                                    $(location).attr('href',data.redirect);
                                }
                            }
                        );
                    });
                }
                if (data.step == 3){
                    $('button#step_3').click(function () {
                        $.post(
                            '/install',
                            {
                                step:'3',
                                m_host:$('input#m_domain').val(),
                                m_db:$('input#m_db').val(),
                                m_u:$('input#m_user').val(),
                                m_p:$('input#m_pass').val(),
                                m_pr:$('input#m_prefix').val()
                            },
                            function (data) {

                                if (data.mysql.error == false){
                                    $('#step3').hide();
                                    get_step();
                                }else {
                                    $('div#error_3').empty();
                                    $('div#error_3').html('<p><b>'+data.mysql.error+':</b> '+data.mysql.message+'</p>')
                                }
                            }
                        )
                    });
                }
                if (data.step == 4){
                    $('button#step_4').click(function () {
                        $.post(
                            '/install',
                            {
                                step:'4'
                            },
                            function (data) {

                                if (data.mysql.con.error == false){
                                    var fl = true;
                                    var str = '';
                                    var pp = data.mysql.res;
                                    pp.forEach(function (p1, p2, p3) {
                                        if (p1.result == false){
                                            fl = false;
                                            str = str + 'Table '+p1.table+' not created!<br/>';
                                        }
                                    });
                                    if (fl == false){
                                        $('div#error_4').empty();
                                        $('div#error_4').html('<p>'+str+'</p>')
                                    }else{
                                        $('#step4').hide();
                                        get_step();
                                    }


                                }else {

                                    $('div#error_4').empty();
                                    $('div#error_4').html('<p><b>'+data.mysql.con.mysql.error+':</b> '+data.mysql.con.mysql.message+'</p>')
                                }
                            },
                            'json'
                        )
                    });
                }
                if (data.step == 5){
                    $('button#step_5').click(function () {
                        $.post(
                            '/install',
                            {
                                step:'5'
                            },
                            function (data) {
                                if (data.redirect != null){
                                    $(location).attr('href',data.redirect);
                                }
                            }
                        );
                    });
                }
            }
        }
    );
}

$(document).ready(function () {
    get_step();

    $('div#step_img').click(function () {
        $('div#pop_app').empty();
        $('div#pop_app').html('<center><div><p>Click to close</p></div>'+$('div#step_img').html()+'</center>');
        $('div#pop_app center img').css('max-width', '100%');
        $('div#pop_app').show();
        $('div#pop_app').click(function () {
            $('div#pop_app').hide();
            $('div#pop_app').empty();
            $('div#pop_app').unbind('click');
        });
    });
});