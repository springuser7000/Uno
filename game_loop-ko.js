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
var buy_robot_bool = false;
var robot_speed = 1200;
var robot_speed_money = 200;
var robot_plus = 1;
var robot_plus_money = 200;
//var robot_;
var text = "";
var possible = "밝뷁봙웱옭숽옳덣꽑꿹낈쏤뢁뷇홝홖읡읞";
//갯수
var seojuncoin_how_many = 0;
//횟수
var seojuncoin_how_much = 0;
//시세
var one;





document.getElementById("money_html").innerHTML = money + " Point";
document.getElementById("how_much_mining_upgrade").innerHTML = "채굴 업그레이드(" + upgrade_mining_point + " 포인트 필요)";
document.getElementById("how_much_fortune_upgrade").innerHTML = "행운 업그레이드(" + upgrade_fortune_point + " 포인트 필요)";
document.getElementById("info").innerHTML = money_plus + " 채굴 레벨 | " + fortune_power + " 행운 레벨"
document.getElementById("info2").innerHTML = money_plus + " 채굴 레벨 | " + fortune_power + " 행운 레벨"
document.getElementById("info3").innerHTML = money_plus + " 채굴 레벨 | " + fortune_power + " 행운 레벨"
seojuncoin_how_much = Math.floor(Math.random() * 10000);
document.getElementById("invest").innerHTML = seojuncoin_how_much + "p/c" + " " + seojuncoin + " 코인 보유중"

document.getElementById("add_robot_id").innerHTML = robot_plus_money + " 포인트 필요"
document.getElementById("speed_robot_id").innerHTML = robot_speed_money + " 포인트 필요"
update()



one = setInterval(function(){ check_robot(); }, robot_speed);

function update(){
    document.getElementById("money_html").innerHTML = money + " Point";
    document.getElementById("how_much_mining_upgrade").innerHTML = "채굴 업그레이드(" + upgrade_mining_point + " 포인트 필요)";
    document.getElementById("how_much_fortune_upgrade").innerHTML = "행운 업그레이드(" + upgrade_fortune_point + " 포인트 필요)";
    document.getElementById("info").innerHTML = money_plus + " 채굴 레벨 | " + fortune_power + " 행운 레벨"
    document.getElementById("info2").innerHTML = money_plus + " 채굴 레벨 | " + fortune_power + " 행운 레벨"
    document.getElementById("info3").innerHTML = money_plus + " 채굴 레벨 | " + fortune_power + " 행운 레벨"
    seojuncoin_how_much = Math.floor(Math.random() * 10000);
    document.getElementById("invest").innerHTML = seojuncoin_how_much + "p/c" + " " + seojuncoin + " 코인 보유중"

    document.getElementById("add_robot_id").innerHTML = robot_plus_money + " 포인트 필요"
    document.getElementById("speed_robot_id").innerHTML = robot_speed_money + " 포인트 필요"
}

function fortune_function(){
  if (fortune_power > Math.floor(Math.random() * 80)){   
    money = money + money_plus * 15;
    if (alert_onoff == 1){
    	window.alert(money_plus * 15 + " 포인트가 반환되었습니다!");
    }
    update()
   } else if(Fortune_Master == true){
     money = money + money_plus * 15
     if (alert_onoff == 1){
    	window.alert(money_plus * 15 + " 포인트가 반환되었습니다!");
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
        document.getElementById("how_much_mining_upgrade").innerHTML = "채굴 업그레이드(" + upgrade_mining_point + " 포인트 필요)";
    } else {
    	if (alert_onoff == 1){
    		window.alert("채굴 업그레이드에 필요한 포인트가 부족합니다.");
       	}
    }

}

function upgrade_software(){
	if (money >= upgrade_fortune_point){
    	money = money - upgrade_fortune_point;
        upgrade_fortune_point = upgrade_fortune_point + 75;
        fortune_power = fortune_power + 1;
        update();
        document.getElementById("how_much_fortune_upgrade").innerHTML = "행운 업그레이드(" + upgrade_fortune_point + " 포인트 필요)";
    } else {
    	if (alert_onoff == 1){
    		window.alert("행운 업그레이드에 필요한 포인트가 부족합니다.");
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
    	window.alert(Lottery_point + " 포인트가 반환되었습니다.");
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
    	window.alert(Lottery_point + " 포인트가 반환되었습니다.");
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
    	window.alert(Lottery_point + " 포인트가 반환되었습니다.");
    }
  }
}


function Alert_OnOff_function() {
  if (alert_onoff == 0){
    alert_onoff = 1
    window.alert("이제 알림이 보입니다.");
  } else if (alert_onoff == 1){
    alert_onoff = 0
    window.alert("이제 알림이 보이지 않습니다.");
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
            window.alert(Money_re * 2 + " 포인트가 반환되었습니다!");
        }, 60000); 
    } else {
    	if (alert_onoff == 1){
    		window.alert("복제 폭탄을 살 포인트가 부족합니다.");
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
    		window.alert("물약을 살 포인트가 부족합니다.");
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
    window.alert("포인트가 부족합니다.")
  } else {
    money = money - seojuncoin_how_much;
    seojuncoin = seojuncoin + 1;
    update();
  }
}

function sell_seojuncoin(){
  if (seojuncoin == 0){
    window.alert("서준코인이 없습니다.")
  } else {
    money = money + seojuncoin_how_much;
    seojuncoin = seojuncoin - 1;
    update();
  }
}

function buy_all_seojuncoin(){
  var var1;
  if (money - seojuncoin_how_much <= 0){
    window.alert("포인트가 부족합니다.")
  } else {
    var1 = Math.floor(money / seojuncoin_how_much);
    money = money - seojuncoin_how_much * var1;
    seojuncoin = seojuncoin + var1;
    update();
  }
}

function sell_all_seojuncoin(){
  if (seojuncoin == 0){
    window.alert("서준코인이 없습니다.")
  } else {
    money = seojuncoin * seojuncoin_how_much;
    seojuncoin = 0;
    update();
  }
}







//robot function
function buy_robot(){
  if (buy_robot_bool == false){
    if (money >= 5000){
      money = money - 5000;
      update();
      buy_robot_bool = true;
    } else {
      if (alert_onoff == 1){
        window.alert("로봇을 살 포인트가 부족합니다.")
      }
    }
  } else {
    if (alert_onoff == 1){
      window.alert("이미 로봇을 보유하고 있습니다.")
    }
  }
}


function check_robot(){
  if (buy_robot_bool == true){
    money = money + robot_plus;
    update();
  }
}

function upgrade_robot_speed(){
  if(0 <= money - robot_speed_money){
    if (100 < robot_speed){
      money = money - robot_speed_money;
      robot_speed_money += 325;
      robot_speed -= 100;
      update();
      reset_robot_speed_timer();
    } else{
      window.alert("이미 로봇 스피드 업그레이드를 모두 끝냈습니다.");
    }
  } else {
    if (alert_onoff == 1){
      window.alert("로봇의 스피드 업그레이드에 필요한 포인트가 부족합니다.");
    }
  }
}

function upgrade_robot_add(){
  if (0 <= money - robot_plus_money){
    money = money - robot_plus_money;
    robot_plus_money += 325;
    robot_plus += 1;
    update();
  } else {
    if (alert_onoff == 1){
      window.alert("로봇의 파워 업그레이드에 필요한 포인트가 부족합니다.");
    }
  }
}

function reset_robot_speed_timer(){
  //asdf
  clearInterval(one);
  one = setInterval(function(){ check_robot(); }, robot_speed);
}











$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
  $(document).bind('keydown', function(e){
    if(e.keyCode == 123){
      e.preventDefault();
      e.returnValue = false;
    }
  });
});