//分别给图片，按钮添加类名，点击打开相应的蒙版
$(".conUl li").mouseover(function(){
	var ind = $(this).index()+1;	//li的长度
	var cont = $(this).find("p").html();	//当前蒙板P的值 
	if(ind==1){
		$(this).find("a img").addClass('sq_click1');
		$(this).children("button").addClass('sq_click1');
		sqClick1("button.sq_click1",".maskBox1");
		sqClick("img.sq_click1",".maskBox1");
		mkBA(".maskBox1");
		//核审进度查询
		maskBoxSqClick(".maskBox1",ind);
	}else if(ind==2||ind==3||ind==4||ind==5||ind==8||ind==12){
		$(this).find("a img").addClass('sq_click2');
		$(this).children("button").addClass('sq_click2');
		sqClick1("button.sq_click2",".maskBox2");
		sqClick("img.sq_click2",".maskBox2");
		mkBA(".maskBox2");
		//核审进度查询
		maskBoxSqClick(".maskBox2",ind);
		
	}else if(ind==6||ind==9||ind==15||ind==16||ind==19){
		$(this).find("a img").addClass('sq_click3');
		$(this).children("button").addClass('sq_click3');
		sqClick1("button.sq_click3",".maskBox3");
		sqClick("img.sq_click3",".maskBox3");
		mkBA(".maskBox3");
		//核审进度查询
		maskBoxSqClick(".maskBox3",ind);
	}else if(ind==7||ind==17){
		$(this).find("a img").addClass('sq_click4');
		$(this).children("button").addClass('sq_click4');
		sqClick1("button.sq_click4",".maskBox4");
		sqClick("img.sq_click4",".maskBox4");
		mkBA(".maskBox4");
		//核审进度查询
		maskBoxSqClick(".maskBox4",ind);
	}else if(ind==10||ind==11||ind==13||ind==14||ind==18){
		$(this).find("a img").addClass('sq_click5');
		$(this).children("button").addClass('sq_click5');
		sqClick1("button.sq_click5",".maskBox5");
		sqClick("img.sq_click5",".maskBox5");
		mkBA(".maskBox5");
		//核审进度查询
		maskBoxSqClick(".maskBox5",ind);
	}
});

function maskBoxSqClick(obj,a){
	$(".query").on("click",function(){
		$(obj).css({"display":"none"});
		$(".maskBox").css({"display":"block","z-index":"99999"});
		$(".avia_select").val(a);
		$(obj).css({"display":"none"});
	});
}

//function thisClick(me,form_name){
//	$(me).bind("click", function() {  
//	    var url = "../mask/caxun.php";  
//	    $(form_name).attr("action", url);
//	    $(form_name).submit();
//	});
//}

//透明图片显示
function sqClick(sq_c,mkB){
	$(sq_c).on("click",function(){
		$(mkB).css("display","block");
		var acc = $(this).parents().parents().find('p').html();
		var abc = $(".maLeftP span").html(acc);
	});
}

//对应遮罩显示
function sqClick1(sq_c,mkB){
	$(sq_c).on("click",function(){
		$(mkB).css("display","block");
		var acc = $(this).siblings('p').html();
		var abc = $(".maLeftP span").html(acc);
	});
}
function mkBA(mkB){
	$(".maskBoxA").on("click",function(){
		$(mkB).css({"display":"none"});
	});
}


//点击其它区域，蒙版关闭
function mask(mbox){
    $(mbox).click(function(){
        $(this).hide().children().find("input").val("");
        return false;
    });
    $(".mask").click(function(){
    	
        return false;
    })
}
mask(".maskBox1");
mask(".maskBox2");
mask(".maskBox3");
mask(".maskBox4");
mask(".maskBox5");