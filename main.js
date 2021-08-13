
function countDown(){
    // date that we want to finish
    const countdate = new Date('November 27, 2021 00:00:00').getTime()
    // our current date
    const now = new Date().getTime();
    // i think it is understood what we are doing here

    const difference = countdate - now;
    // How our time works!
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    // we should figure out how many days, hours, minutes and seconds till occaision
    const textday = Math.floor(difference/day);
    const texthour = Math.floor((difference%day)/hour);
    const textmin = Math.floor((difference%hour)/minute);
    const textsec = Math.floor((difference%minute)/second);
    
    // change our HTML to data that we want
    document.querySelector(".day").innerText = textday;
    document.querySelector(".hour").innerText = texthour;
    document.querySelector(".minute").innerText = textmin;
    document.querySelector(".second").innerText = textsec;


}
countDown()

setInterval(countDown, 1000);