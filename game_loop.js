var money = 50;
var money_plus = 1;  
var fortune_power = 0;
var upgrade_mining_point = 50;
var upgrade_fortune_point = 50;
var Lottery_point;
var alert_onoff = 1; 
var A = 0;
var code_for_admin;
var Fortune_Master = false;

document.getElementById("money_html").innerHTML = money + " Point";
document.getElementById("how_much_mining_upgrade").innerHTML = "Upgrade Mining(" + upgrade_mining_point + " Point Require)";
document.getElementById("how_much_fortune_upgrade").innerHTML = "Upgrade Fortune(" + upgrade_fortune_point + " Point Require)";
document.getElementById("info").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
document.getElementById("info2").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
document.getElementById("info3").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"

function update(){
  document.getElementById("money_html").innerHTML = money + " Point";
  document.getElementById("info").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
  document.getElementById("info2").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
  document.getElementById("info3").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
}

function fortune_function(){
  if (fortune_power > Math.floor(Math.random() * 80)){   
    money = money + money_plus * 15;
    if (alert_onoff == 1){
    	window.alert(money_plus * 15 + " added!");
    }
    update()
   } else if(Fortune_Master == true){
     money = money + money_plus * 15
     if (alert_onoff == 1){
    	window.alert(money_plus * 15 + " added!");
    }
   }
  }

function earnmoney(){
    money = money + money_plus;
    fortune_function()
    update()
}

function upgrade_hardware(){
	if (money >= upgrade_mining_point){
    	money = money - upgrade_mining_point;
        upgrade_mining_point = upgrade_mining_point + 75;
        money_plus = money_plus + 1;
        update()
        document.getElementById("how_much_mining_upgrade").innerHTML = "Upgrade Mining(" + upgrade_mining_point + " Point Require)";
    } else {
    	if (alert_onoff == 1){
    		window.alert("Not Enough point for upgade Mining");
       	}
    }

}

function upgrade_software(){
	if (money >= upgrade_fortune_point){
    	money = money - upgrade_fortune_point;
        upgrade_fortune_point = upgrade_fortune_point + 75;
        fortune_power = fortune_power + 1;
        update();
        document.getElementById("how_much_fortune_upgrade").innerHTML = "Upgrade Fortune(" + upgrade_fortune_point + " Point Require)";
    } else {
    	if (alert_onoff == 1){
    		window.alert("Not Enough point for upgade Fortune");
        }
    }

}

function Lottery_cheap(){
	if (money >= 10){
	  Lottery_point = Math.floor(Math.random() * 20);
    money = money - 10;
    money = money + Lottery_point;
    update();
    if (alert_onoff == 1){
    	window.alert(Lottery_point + " returned!");
    }
  }
}

function Lottery_midium(){
	if (money >= 50){
	  Lottery_point = Math.floor(Math.random() * 150);
    money = money - 50;
    money = money + Lottery_point;
    update();
    if (alert_onoff == 1){
    	window.alert(Lottery_point + " returned!");
    }
  }
}

function Lottery_expencive(){
	if (money >= 100){
    Lottery_point = Math.floor(Math.random() * 200);
    money = money - 100;
    money = money + Lottery_point;
    update();
    if (alert_onoff == 1){
    	window.alert(Lottery_point + " returned!");
    }
  }
}


function Alert_OnOff_function() {
  if (alert_onoff == 0){
    alert_onoff = 1
    window.alert("Alert will show");
  } else if (alert_onoff == 1){
    alert_onoff = 0
    window.alert("Alert will not show");
  }
}

function Input_command() {
        if (window.event.keyCode == 13) {
			    DaTa = $("#input_some_command").val();
          document.getElementById("input_some_command").value = "";
          if (DaTa.toLowerCase() == "offalert") {
            alert_onoff = 0;
          }else if (DaTa.toLowerCase() == "onalert") {
            alert_onoff = 1;
          }else if (DaTa.toLowerCase() == "fastnoobbuff" || "ff"){
          	money = money + 1000;
            update();
          }
        }
}

 
function key_down(){
	if (event.which == 69){
    	//upgrade mining. E key
        upgrade_hardware();
    } else if (event.which == 82){
    	//upgrade fortune. RR key
        upgrade_software();
    } else if (event.which == 81){
    	// Q key
        Alert_OnOff_function();
    } else if (event.which == 83){
    	Lottery_cheap();
    } else if (event.which == 68){
        Lottery_midium();
    } else if (event.which == 70){
    	Lottery_expencive();
    } else if (event.which == 13){
    	window.alert("DON'T USE ENTER!");
    } else  if (event.which == 145){
      money = money + 1000
      update()
    }
}


function Wait_and_boom(){
	var Money_re;
    if (money >= 700){
        money = money - 700;
        Money_re = money;
        money = 0;
        update();
        setTimeout(function(){
            money = money + Money_re * 2;
            update();
            window.alert(Money_re * 2 + "Returned!");
        }, 60000); 
    } else {
    	if (alert_onoff == 1){
    		window.alert("Not Enough point for buy bomb");
        }
    }
}

function temple(){
    if (money >= 1000){
        money = money - 1000;
        update();
        Fortune_Master = true;
        setTimeout(function(){
          Fortune_Master = false;
        }, 30000); 
    } else {
    	if (alert_onoff == 1){
    		window.alert("Not Enough point for conversation");
        }
    }
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});