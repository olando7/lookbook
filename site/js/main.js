$(function(){
    $searchToggle = $('.search_toggle');
    $searchForm = $('.main-header form');

    $searchForm.find('button').prop("disabled", true);

    $searchToggle.click(function(){
        $searchForm.toggleClass('active');
        if($searchForm.hasClass('active')){
            $searchForm.find('button').prop("disabled", false);
        }else{
            $searchForm.find('button').prop("disabled", true);
        }        
    });

    //aside toggle
    $body = $('body');
    $asideToggleBtn = $('.aside_toggle');
    $sideCloseBtn = $('.aside_bg');

    $asideToggleBtn.click(function(){
        $body.addClass('aside-open');
    });
    $sideCloseBtn.click(function(){
        $body.removeClass('aside-open');
    });

    //Categroy change view
    var $listToggle = $('.list_toggle'),
        $category = $('.category');

    $listToggle.click(function(){
        $(this).add($category).toggleClass('active');
        //$('.list_toggle, .category').toggleClass('active');
    })

    //이전 페이지로 이동하기
    var $backwardsBtn = $('.backwards_toggle');

    $backwardsBtn.click(function(){
        history.go(-1);
        //history.go(1);  history.back(); history.forward();
    });


});