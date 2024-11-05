let para  =document.getElementById("timer");
function date(){

    let d = new Date();
    let typee="";
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if(hours>=0 && hours<12){
         typee="AM"
    }else{
         typee="PM"
    }
    let ans = `${month}/${date}/${year}, ${hours}:${minutes}:${seconds} ${typee}`;
    para.innerHTML = ""
	para.innerHTML = ans;

}


setInterval(date,1000);