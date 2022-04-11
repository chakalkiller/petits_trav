setInterval(showTime, 1000);
function showTime() {
    let d = new Date();
    let heure = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let jour = d.getDate();
    let mois = d.getMonth()+1;

    heure = heure < 10 ? "0" + heure : heure;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    jour = jour < 10 ? "0" + jour : jour;
    mois = mois < 10 ? "0" + mois : mois;

    let date = jour + '/' + mois + '/' + d.getFullYear();
    let hours = heure + ":" + min + ":" + sec;
    let fullDate = hours +' '+ date;
    document.getElementById("clock")
    .innerHTML = fullDate;
}
showTime()