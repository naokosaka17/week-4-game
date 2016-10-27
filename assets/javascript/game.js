$(document).ready(function(){	
	
	//=====  Box function  =====//
	$(".box").on("click",function(){

		// User's select character set "parent"
		if($(this).parent().attr("id") === "originalPosition"){
			// "parent" character goes to #char position.
			$("#char").append(this)
			// left characters set "children" and these move to .wait position. 
			$("#waitPosition").append($("#originalPosition").children())
		}	

		// *CSS*   change waitPosition's background-color and border-color
        ($("#waitPosition").children()).css({"background-color":"red","border-color":"black"});


        // select Defender from enemies 
        if($(this).parent().attr("id") === "waitPosition"){
         	$("#df").append(this)
        }

         // *CSS*   change defender's background-color, font-color, border-color
         ($("#df").children()).css({"background-color":"black","color": "white","border-color":"blue"});
         

		// set all character's HP and AP
        var userAP = parseInt($("#char").children().data("ap"));
		var enemyHP = parseInt($("#df").children().data("hp"));
		var userHP = parseInt($("#char").children().data("hp"));
		var enemyAP = parseInt($("#df").children().data("ap"));



	//=====  Attack button function  ======//
	$("#button").on("click",function(){

		enemyHP-=userAP;
        userAP+=10;
       	userHP-=enemyAP;

	
		//enemy's name
		var name = $("#df").children().data("value");
  
	  		//debug check 
			console.log(userAP);
			console.log(name);
			console.log(enemyHP);
			console.log(userAP);
			console.log(userHP);
			console.log(enemyAP);



		//=====  Attack result  ======//
		var first = ("You attacked " + name + " for " + userAP + " damage!!");
		$("#first").html(first);
		var second = (name + " attacked you back for " + enemyAP + "!!");
		$("#second").html(second);
		var third = ("Your HP: " + userHP + "   " + "Enemy HP: " + enemyHP);
		$("#third").html(third);


		if(userHP<= 0){
			var newfirst = ("You been defeated..GAME OVER!!");
			$("#first").replaceWith(newfirst);

			var restart = $('<input type="button" value="Restart"/>');
			$("#second").replaceWith(restart);
				
			$("#third").hide();
		}

		if(enemyHP<= 0){
			var newfirst = ("You have defated " + name + "! You can choose to fight another enemy!!");
			$("#df").empty();
			$("#first").replaceWith(newfirst);
			$("#second").hide();
			$("#third").hide();	
				//select defender again
				if($(this).parent().attr("id") === "waitPosition"){
	         		$("#df").append(this)
	        	

		         // *CSS*   change defender's background-color, font-color, border-color
		         ($("#df").children()).css({"background-color":"black","color": "white","border-color":"blue"});
		         	var first = ("You attacked " + name + " for " + userAP + " damage!!");
					$("#first").html(first);
					var second = (name + " attacked you back for " + enemyAP + "!!");
					$("#second").html(second);
					var third = ("Your HP: " + userHP + "   " + "Enemy HP: " + enemyHP);
					$("#third").html(third);


		     	}

	         	
		}



	});
	});

});