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

  $('.myItems').keyup(function () {
    var value = $(this).val();
    var exp = new RegExp('^' + value, 'i');
  
    $('.itemsList .toggleDiv .item').each(function () {
      var isMatch = exp.test($('.name', this).text());
      $(this).toggle(isMatch);
    });
  });
   