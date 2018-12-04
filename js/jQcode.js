$(document).ready(function(){
  $('#red,#green,#blue').change(function(){
    var R=$('#red').val();
    var G=$('#green').val();
    var B=$('#blue').val();
    var XN1='rgb(' + R + ',' + G + ',' + B + ')';
    $('.div-color-RGB').css('background-color',XN1);
    if(R<0||R>255){
      $('#red').css('background-color','red')
      $('.div-color-RGB').css('background-color','#fff')
      $('.war').addClass('error-1')
    }else{
      $('#red').css('background-color','#fff')
      $('.war').removeClass('error-1')
    }
     if (G<0||G>255) {
      $('#green').css('background-color','red')
      $('.div-color-RGB').css('background-color','#fff')
      $('.war').addClass('error-1')
    }else{
      $('#green').css('background-color','#fff')  //>>> not removeClass !
    }
     if (B<0||B>255) {
      $('#blue').css('background-color','red')
      $('.div-color-RGB').css('background-color','#fff')
      $('.war').addClass('error-1')
    }else{
      $('#blue').css('background-color','#fff')  //>>> not removeClass !
    }  // IF >> val('empty')
    if (R=='') {
      $(this).val(0);
    }else if (G=='') {
      $(this).val(0);
    }else if (B=='') {
      $(this).val(0);
    }
  })
  $('.body-single1').click(function(){    //Body >> body-single1
    var R=$('#red').val();
    var G=$('#green').val();
    var B=$('#blue').val();
    var XN1='rgb(' + R + ',' + G + ',' + B + ')';
    $('.div-color-RGB').css('background-color',XN1);

    if(R<0||R>255){ //if 2 :for click button-**********************
      $('#red').css('background-color','red')
      $('.div-color-RGB').css('background-color','#fff')
      $('.war').addClass('error-1')
    }else{
      $('#red').css('background-color','#fff')
      $('.war').removeClass('error-1')
    }
     if (G<0||G>255) {
      $('#green').css('background-color','red')
      $('.div-color-RGB').css('background-color','#fff')
      $('.war').addClass('error-1')
    }else{
      $('#green').css('background-color','#fff')
    }
     if (B<0||B>255) {
      $('#blue').css('background-color','red')
      $('.div-color-RGB').css('background-color','#fff')
      $('.war').addClass('error-1')
    }else{
      $('#blue').css('background-color','#fff')
    }
  })
  $('.link-modal-RGB').click(function(){
    $('.mask-modal').fadeIn();

    var h=$('body').height(); //---Height Body
    var w=$('body').width();  //---Width Body
    $('.modal-RGB-1').fadeIn().css({top:(h-300)/2 , left:(w-400)/2});
  })
  $('.mask-modal , .btn-close').click(function(){
    $('.modal-RGB-1 , .mask-modal').fadeOut();
  })
   //-------fin------color-single1-------------------------------------------------------------------------
  $('.div-input-1 :button').click(function(){
    var v_input=$(this).attr('value')
    $('.div-color-KEY-1').css('background-color',v_input)
    $('.name-color-1').text(v_input+'-')
  })
  $('.div-input-2 :button').click(function(){
    var v_input=$(this).attr('value')
    $('.div-color-KEY-2').css('background-color',v_input)
    $('.name-color-2').text(v_input+'-')
  })
  $('.div-input-3 :button').click(function(){
    var v_input=$(this).attr('value')
    $('.div-color-KEY-3').css('background-color',v_input)
    $('.name-color-3').text(v_input+'-')
  })
  $('.div-input-4 :button').click(function(){
    var v_input=$(this).attr('value')
    $('.div-color-KEY-4').css('background-color',v_input)
    $('.name-color-4').text(v_input)
  })
  $('.link-modal-button').click(function(){
    $('.mask-modal-2').fadeIn();

    var h=$('body').height(); //---Height Body
    var w=$('body').width();  //---Width Body
    $('.modal-button').fadeIn().css({top:(h-300)/2 , left:(w-400)/2});

  })
  $('.mask-modal-2 , .btn-close-2').click(function(){
    $('.mask-modal-2 , .modal-button').fadeOut();
  })
   //-------fin------color-single2-------------------------------------------------------------------------
  $('.slider').slider({
    min:0,
    max:255,
    value:0,
    range:'max' //renerse! for background-color range--------!!!
  })
  $('.slider').slider({
    change:function(){
      var slider_color1=$('.div-slider-RGB-1').slider('value');
      var slider_color2=$('.div-slider-RGB-2').slider('value');
      var slider_color3=$('.div-slider-RGB-3').slider('value');
      var color_axis='rgb('+ slider_color1 + ',' + slider_color2 + ',' + slider_color3 + ')';
      $('.div-color-slider').css('background-color',color_axis);
      $('.sp-red').text(slider_color1);
      $('.sp-green').text(slider_color2);
      $('.sp-blue').text(slider_color3);
    }
  })
  $('.link-modal-slider').click(function(){
    $('.mask-modal-3').fadeIn();

    var h=$('body').height(); //---Height Body
    var w=$('body').width();  //---Width Body
    $('.modal-slider').fadeIn().css({top:(h-300)/2 , left:(w-400)/2});

  })
  $('.mask-modal-3 , .btn-close-3').click(function(){
    $('.mask-modal-3 , .modal-slider').fadeOut();
  })
  //-------fin------color-single3-------------------------------------------------------------------------
  $('.div-drag').draggable({
    scroll:false
  })
  $('.link-modal-drag').click(function(){
    $('.mask-modal-4').fadeIn();

    var h=$('body').height(); //---Height Body
    var w=$('body').width();  //---Width Body
    $('.modal-drag').fadeIn().css({top:(h-300)/2 , left:(w-400)/2});

  })
  $('.mask-modal-4 , .btn-close-4').click(function(){
    $('.mask-modal-4 , .modal-drag').fadeOut();
  })
  //-------fin------color-single4-------------------------------------------------------------------------
})
