function numberConversion(number){
	if(number<=9){
		number="0"+number;
		return number;
	}else{
		return String(number);
	}
}
function dayConversion(dayNumber){
	let days=["SUN","MON","TUE","WED","THU","FRI","SAT"];
	return dayNumber=days[dayNumber];
}
function hourConversion(hourNumber){
	if(hourNumber>12){
		return hourNumber-12;
	}
	else if(hourNumber==0){
		return 12;
	}
	else{
		return hourNumber;
	}
}
function timeConversion(time){
	if(time>=12){
		return "PM";
	}
	else if(time==0){
		return "AM";
	}
	else{
		return "AM";
	}
}
function clock(){
let currentDate= new Date();
//Date :day
let date=currentDate.getDate();
date=numberConversion(date);
//Date :month
let month=currentDate.getMonth();
month++;
month=numberConversion(month);
//Date:year
let year=String(currentDate.getFullYear());
//Time : hours
let hours=currentDate.getHours();
hours=hourConversion(hours);
hours=numberConversion(hours);
//Time : minutes
let minutes=currentDate.getMinutes();
minutes=numberConversion(minutes);
//Time :seconds
let seconds=currentDate.getSeconds();
seconds=numberConversion(seconds);
//Time =AM/PM
let dayBreak=currentDate.getHours();
dayBreak=timeConversion(dayBreak);
//Day : day
let day=currentDate.getDay();
day=dayConversion(day);

const displayDate=document.getElementById("date");
const displayMonth=document.getElementById("month");
const displayYear=document.getElementById("year");
const displayHours=document.getElementById("hours");
const displayMinutes=document.getElementById("minutes");
const  displaySeconds=document.getElementById("seconds");
const displayWeekDays=document.getElementById("daysofweek");
const  displayDayBreak=document.getElementById("daybreak");

displayDate.innerHTML=date;
displayMonth.innerHTML=month;
displayYear.innerHTML=year;
displayHours.innerHTML=hours;
displayMinutes.innerHTML=minutes;
displaySeconds.innerHTML=seconds;
displayWeekDays.innerHTML=day;
displayDayBreak.innerHTML=dayBreak;
}

setInterval(clock,1000);
