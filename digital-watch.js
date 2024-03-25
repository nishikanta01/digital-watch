let timeTag = document.getElementById('display-time')
let dateTag = document.getElementById('display-date')

function timer(){
    let d1 = new Date()
    currentTime = d1.toLocaleTimeString()
    currentDate = d1.toLocaleDateString()

    timeTag.innerText = currentTime
    dateTag.innerText = currentDate
}
setInterval(timer,1000)
