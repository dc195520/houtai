
//树形菜单
var temp = 1;
$(".tit").click(function(){    
    $(this).next().slideToggle(300);

    if(temp==1){
        temp=2;
        $(this).find(".sj").css({"transform":"rotate(180deg)","margin-top":"10px"});
    }else{
        temp=1;
        $(this).find(".sj").css({"transform":"rotate(0deg)","margin-top":"20px"});
    }
})



$("#guanli").click(function(){
    $(".con_1").show();
    $("#ifA").hide();
    $("#ifB").hide();
    $("#ifC").hide();
    $("#ifD").hide();
    $("#ifE").hide();

});

$("#leibie").click(function(){
    $(".con_1").hide();
    $("#ifA").show();
    $("#ifB").hide();
    $("#ifC").hide();
    $("#ifD").hide();
    $("#ifE").hide();

});

$("#zixun").click(function(){
    $(".con_1").hide();
    $("#ifA").hide();
    $("#ifB").show();
    $("#ifC").hide();
    $("#ifD").hide();
    $("#ifE").hide();

});

$("#lianjie").click(function(){
    $(".con_1").hide();
    $("#ifA").hide();
    $("#ifB").hide();
    $("#ifC").show();
    $("#ifD").hide();
    $("#ifE").hide();
});

$("#liuyan").click(function(){
    $(".con_1").hide();
    $("#ifA").hide();
    $("#ifB").hide();
    $("#ifC").hide();
    $("#ifD").show();
    $("#ifE").hide();
});
$("#yonghu").click(function(){
    $(".con_1").hide();
    $("#ifA").hide();
    $("#ifB").hide();
    $("#ifC").hide();
    $("#ifD").hide();
    $("#ifE").show();
});

$("#changePsd").click(function(){
    $("#ifF").show();
})
// $(".sj").animate({
//         width:0,
//         height:0,
//         border:"10px solid transparent",
//         borderTop:"10px solid #ddd",
//         float:"right",
//         marginTop: "20px"
//     },500);

