//Sort
var pre_search = 'none'
function block(k, tag) {
    var l = $('*[class*="pj"]').find('*[class*="pj_unit"]');
    for (var i = 0; i < l.length; i++) {
        if (pre_search != tag && tag !='all') {
            if (!l[i].getAttribute('info').includes(tag)) {
                $(l[i]).css('display', "none");
            }
            else
                $(l[i]).css('display', "block");
        }
        else {
            $(l[i]).css('display', "block");
        }
    }
    if (pre_search == tag)
        pre_search = 'none';
    else
        pre_search = tag;

}
var tg = $('.selectors').find('*[class*="yslt"]');
for (var i = 0; i < tg.length; i++) {    
    $(tg[i]).click(block.bind(null, tg[i].id, tg[i].getAttribute('info')));
}
tg = $('.pj').find('*[class*="pj_unit"]');
for (var i = 0; i < tg.length; i++) {
    var _tg = $(tg[i]).find('.tag')
    for (var j = 0; j < _tg.length; j++) {
        $(_tg[j]).click(block.bind(null, tg[i].id, _tg[j].getAttribute('info')));
    }
}
//Search
function content_search() {
    tag = $('#search').val();
    $('#search').val("") ;
    var l = $('.pj').find('*[class*="pj_unit"]');
    for (var i = 0; i < l.length; i++) {
        if (pre_search != tag && tag != 'all') {
            if (!$(l[i]).text().includes(tag)) {
                $(l[i]).css('display', "none");
            }
            else
                $(l[i]).css('display', "block");
        }
        else {
            $(l[i]).css('display', "block");
        }
    }
    if (pre_search == tag)
        pre_search = 'none';
    else
        pre_search = tag;

}
$("#search-bt").click(content_search);

//Modal
function modal(src) {
    $("#mdc").attr('src' , src) ;
    $("#md").css('display','block')
}
tg = $('.pj').find('*[class^="pj_unit"]');
var _src = "html/project/default.html" ;
for (var i = 0; i < tg.length; i++) {
    var _tg = $(tg[i]).find(".abstract") ;
    src = tg[i].getAttribute('src')
    console.log(src , _tg)
    if (src == "None")
        src = _src
    $(_tg).click(modal.bind(null, src)) ;
}