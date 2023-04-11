function modal(k , act){
    console.log(k) ;
    $('#modal_card' + k).css('display' , act) ;
}
const l = $('.container').find('.card');
for (var i =0 ; i < l.length ; i++){
    var str = (i+1).toString()
    try {
        $('#card' + str).click(modal.bind(null, str, 'block'));
        $('#modal_card' + str).click(modal.bind(null, str, 'none'));
    }
    catch(e){
        console.log(e)
    }
}



