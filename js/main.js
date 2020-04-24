$(document).ready(function(){
    $('#book').booklet({
        width:900,
        height:600,
        closed:1,
        covers:1,
        pagePadding:0,
    });

    $('#previous').click(function(){
        $('#book').booklet('prev');
    });

    $('#next').click(function(){
        $('#book').booklet('next');
    });
    
    $('#btnSearch').click(function(){
        $('#book').booklet('gotopage', $('#searchField').val());
    });
});

