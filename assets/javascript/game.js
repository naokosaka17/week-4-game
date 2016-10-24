$(document).ready(function(){	
var char;
var enem;

//=====  Box function  =====//
	$(".box").on("click",function(){

		// User's select character set "parent"
		if($(this).parent().attr("id") === "originalPosition"){
			// "parent" character goes to #char position.
			$("#char").append(this)
			// left characters set "children" and these move to .wait position. 
			$("#waitPosition").append($("#originalPosition").children())
			console.log(this);
		}

		// change waitPosition's background-color and border-color
         ($("#waitPosition").children()).css({"background-color":"red","border-color":"black"});
 


        //select Defender from enemies
         if($(this).parent().attr("id") === "waitPosition"){
         	$("#df").append(this)
         	console.log(this);
         }

         //change defender's background-color, font-color, border-color
         ($("#df").children()).css({"background-color":"black","color": "white","border-color":"blue"});
         
	});

//=====  Attack button function  ======//
	$("#button").on("click",function(){
		char = $("#char").val();
		enem = $("#df").val();
		console.log(char);
		console.log(enem);
		// if($("#char") !== "" && $("#df") !== "")
		// 	{
		// 		var attack = $("<div>");
		// 		attack.html("hello");
		// 		$("#df").append(attack);
		// 		attack.attr("id","defName");
		// 		return;
		// 		console.log(attack);
		// 	}
		
		//var id = $("#df").html()


		var attack = $("<div>");
		attack.html("You attacked " + $("#df").html());
		$("#df").append(attack);
		attack.attr("id","defName");




	});





});