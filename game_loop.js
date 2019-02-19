// Copyright 2019 springuser700 all rights reserved.

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
var seojuncoin = 0;
var buy_computer_bool = false;
var computer_cpu_level = 20000;
var computer_cpu_level_upgrade = 200;
var computer_ram_level = 1;
var computer_ram_level_upgrade = 200;
var computer_power_level = 50;
var computer_power_level_upgrade = 200;
//var computer_;
var text = "";
var possible = "밝뷁봙웱옭숽옳덣꽑꿹낈쏤뢁뷇홝홖읡읞";
//갯수
var seojuncoin_how_many = 0;
//횟수
var seojuncoin_how_much = 0;
//시세
var one;

one = setInterval(function(){ check_computer(); }, computer_cpu_level);

document.getElementById("money_html").innerHTML = money + " Point";
document.getElementById("how_much_mining_upgrade").innerHTML = "Upgrade Mining(" + upgrade_mining_point + " Point Require)";
document.getElementById("how_much_fortune_upgrade").innerHTML = "Upgrade Fortune(" + upgrade_fortune_point + " Point Require)";
document.getElementById("info").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
document.getElementById("info2").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
document.getElementById("info3").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
seojuncoin_how_much = Math.floor(Math.random() * 10000);
document.getElementById("invest").innerHTML = seojuncoin_how_much + "p/c" + " " + seojuncoin + " coins you have"
update()




function update(){
  document.getElementById("money_html").innerHTML = money + " Point";
  document.getElementById("info").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
  document.getElementById("info2").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
  document.getElementById("info3").innerHTML = money_plus + " Mining Level | " + fortune_power + " Fortune Level"
  document.getElementById("invest").innerHTML = seojuncoin_how_much + "p/c" + " " + seojuncoin + " coins you have"
  document.getElementById("up_CPU").title = computer_cpu_level_upgrade + " Point require"
  document.getElementById("up_RAM").title = computer_ram_level_upgrade + " Point require"
  document.getElementById("up_power").title = computer_power_level_upgrade + " Point require"
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
      computer_cpu_level = computer_cpu_level - 1000
      window.alert(computer_cpu_level)
      money = money + 1000
      update()
    } else if (event.which == 25){
      window.alert("Made by leeseojun");
    } else if (event.which == 73){
      reload_seojuncoin()
      if (alert_onoff == 1){
        window.alert(seojuncoin_how_much + " points per coin.")
      }
    } else if (event.which == 79){
      buy_seojuncoin()
    } else if (event.which == 80){
      sell_seojuncoin()
    } else if (event.which == 219){
      buy_all_seojuncoin()
    } else if (event.which == 221){
      sell_all_seojuncoin()
    }
}


function Wait_and_boom(){
	var Money_re;
    if (money >= 10000){
        money = money - 10000;
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
function reload_seojuncoin() {
  seojuncoin_how_much = Math.floor(Math.random() * 10000);
  while (false == Boolean(seojuncoin_how_much > 7000)){
    seojuncoin_how_much = Math.floor(Math.random() * 10000);
  }
  update()
}

function buy_seojuncoin(){
  if (money - seojuncoin_how_much <= 0){
    window.alert("you don't have money.")
  } else {
    money = money - seojuncoin_how_much;
    seojuncoin = seojuncoin + 1;
    update();
  }
}

function sell_seojuncoin(){
  if (seojuncoin == 0){
    window.alert("You don't have any seojuncoins.")
  } else {
    money = money + seojuncoin_how_much;
    seojuncoin = seojuncoin - 1;
    update();
  }
}

function buy_all_seojuncoin(){
  var var1;
  if (money - seojuncoin_how_much <= 0){
    window.alert("you don't have money.")
  } else {
    var1 = Math.floor(money / seojuncoin_how_much);
    money = money - seojuncoin_how_much * var1;
    seojuncoin = seojuncoin + var1;
    update();
  }
}

function sell_all_seojuncoin(){
  if (seojuncoin == 0){
    window.alert("You don't have any seojuncoins.")
  } else {
    money = seojuncoin * seojuncoin_how_much;
    seojuncoin = 0;
    update();
  }
}







//computer function
function buy_computer(){
  if (buy_computer_bool == false){
    if (money >= 400){
      money = money - 400;
      update();
      buy_computer_bool = true;
    } else {
      if (alert_onoff == 1){
        window.alert("Not enough points to buy computer")
      }
    }
  } else {
    if (alert_onoff == 1){
      window.alert("You already buy computer.")
    }
  }
}
function check_computer(){
  if (buy_computer_bool == true){
    money = money + computer_ram_level;
    if (computer_power_level > Math.floor(Math.random() * 80)){
      make_computer_error();
      // asdf
    }
    //서준 바로가기 1
  }
}

function upgrade_CPU(){
  if (money >= computer_cpu_level_upgrade){
    if (false == (computer_cpu_level == 1000)){
      money = money - computer_cpu_level_upgrade
      computer_cpu_level_upgrade = computer_cpu_level_upgrade + 125;
      computer_cpu_level = computer_cpu_level - 1000;
      update()
    } else{
      if (alert_onoff == 1){
        window.alert("You already did ALL upgrades.");
      }
    }
  } else{
    if (alert_onoff == 1){
      window.alert("Not enough point to upgrade CPU");
    }
  }
}

function upgrade_RAM(){
  if (money >= computer_ram_level){
    computer_ram_level_upgrade = computer_ram_level_upgrade + 125;
    money = money - computer_ram_level_upgrade
    computer_ram_level = computer_ram_level + 1
    update()
  } else {
    if (alert_onoff == 1){
      window.alert("Not enough point to upgrade RAM")
    }
  }
}

function upgrade_power(){
  if (money >= computer_power_level_upgrade){
    money = money - computer_power_level_upgrade;
    computer_power_level_upgrade = computer_power_level_upgrade - 1;
    update()
  } else{
    if (alert_onoff == 1){
      window.alert("Not enough point to upgrade power");
    }
  }
}


function make_computer_error(){
  text = ""
  for( var i=0; i < 7; i++ ){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  var error = prompt("Your computer has breaked. Enter this code to fix it: " + text);
  while (false == (text == error)){
    var error = prompt("Your computer has breaked. Enter this code to fix it: " + text);
  }
}

//computer_cpu_level; - 순환 수
//computer_ram_level; - 한 번 얻는 포인트
//computer_power_level; - 고장 관련

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});