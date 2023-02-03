function setDate() {
    let date = new Date();
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    let dateString = hours
    dateString += ':';
    dateString += minutes < 10 ? '0' : '';
    dateString += minutes;
    dateString += ':';
    dateString += seconds < 10 ? '0' : '' ;
    dateString += seconds;
    document.getElementById('clock').innerText = dateString;
}

setTimeout(() => {
    setDate();

    setInterval(setDate, 1000);
}, 1000 - new Date().getMilliseconds());