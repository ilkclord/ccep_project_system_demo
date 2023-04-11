var pre_search = 'none'
function block(k ,tag){
    var l = $('.container').find('.card');
    console.log('click'  ,tag , pre_search);
    for (var i = 0; i < l.length; i++) {
        if (pre_search != tag){
            if (!l[i].getAttribute('info').includes(tag)){
                console.log($(l[i]));
                $(l[i]).css('display' , "none");
            }
            else
                $(l[i]).css('display', "block");
        }
        else{
            $(l[i]).css('display', "block");
        }
    }
    if(pre_search == tag)
        pre_search = 'none';
    else
        pre_search = tag;

} 
var tg = $('.selectors').find('.year_selector');
for(var i = 0  ; i < tg.length ; i++){
    $(tg[i]).click(block.bind(null,tg[i].id, tg[i].getAttribute('info'))) ;
}
tg = $('.container').find('.card');
for (var i = 0; i < tg.length; i++) {
    var _tg = $(tg[i]).find('.tag')
    for(var j = 0 ; j < _tg.length ; j++){
        $(_tg[j]).click(block.bind(null, tg[i].id, _tg[j].getAttribute('info')));
    }
}