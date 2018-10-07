
//隔行变色
let trs = $("tr"); 
for(var i=0;i<trs.length;i++){
    if(i%2==0){
        $("tr").eq(i).css({"background-color":"heightlight"});
    }else{
        $("tr").eq(i).css({"background-color":"skyblue  "});
    }
}

// 删除
$(".delete").click(function(){
    if(window.confirm("您是否要删除？")==true){
        $(this).parentsUntil("tbody").detach("tr");
    }
    
})