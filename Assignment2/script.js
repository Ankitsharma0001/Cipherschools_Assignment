$(function(){
    $('.toggleButton').click(function(){
  
    var target = $('#' + $(this).attr('data-target'));
    $('.toggleDiv').not(target).hide();
    target.show();
  });
  });  
  
  $(function(){
     $("#allShow").click(function(){
         $("#div1").show();
         $("#div2").show();
         $("#div3").show();
         $("#div4").show();
     });
  });
