function date(){
  let day = parseInt(document.getElementById("day-of-birth").value);
  let month = parseInt(document.getElementById("month-of-birth").value);
  let year = parseInt(document.getElementById("year-of-birth").value);
  let gender;

  if(document.getElementById("male").checked == true){
    gender = "male"
  }else if(document.getElementById("female").checked == true){
    gender = "female"
  }
}
   
var centuary = parseInt(year.toString().substring(0, 2)) + 1
var yearr = parseInt(year.toString().substring(2, 4))
var dayOfWeek = (((centuary/4)-2*centuary-1) + ((5*year/4)) + ((26*(month+1)/10) + day))% 7

if(centuary == 21){
  dayOfWeek = Math.ceil(dayOfWeek)
}else{
  dayOfWeek = Math.round(dayOfWeek)
} 


let femaleAkanNames =[
  "akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama",  
  ]
  
  let maleAkanNames =[
  "kwasi", "kwadko", "kwabena", "kwaku", "yaw", "kofi", "kwame",
  ]
  
  