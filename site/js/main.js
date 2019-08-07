$(function(){
   
   $searchToggle = $('.search_toggle');
   $searchForm = $('.main-header form');

   $searchForm.find('button').prop('disabled', true);

   $searchToggle.click(function(){
      $searchForm.toggleClass('active');
      if($searchForm.hasClass('active')){
         $searchForm.find('button').prop('disabled', false);
      }else{
         $searchForm.find('button').prop('disabled', true);
      }
   });

   $asideToggleBtn = $('.aside_toggle');
   $asideBg = $('.aside_bg');

   $asideToggleBtn.click(function(){
      $('body').addClass('aside_open');
   });
   $asideBg.click(function(){
      $('body').removeClass('aside_open');
   });
   
   //category change view

   var $listToggle = $('.list_toggle'),
       $category = $('.category');

   $listToggle.click(function(){
      $(this).add($category).toggleClass('active');
   });

   //이전페이지로 이동
   var $backwardsBtn = $('.backwards_toggle');

   $backwardsBtn.click(function(){
      history.go(-1);
      //history.go(1); history.back();
   });

});