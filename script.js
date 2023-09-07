const timeEl = document.getElementById("timeEl")
const dayEl = document.getElementById("dayEl")

// create new Date Object 
const date = new Date()

// get current day 
const currentDay = date.getDay()

// array list of days of the week 
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// get the exact day from the "daysOFWeek" array 
const nameOfCurrentDay = daysOfWeek[currentDay]

// display in html 
dayEl.textContent = " " +   nameOfCurrentDay

// get time in milliseconds 
const timeUTCInMilliseconds = date.getTime()

timeEl.textContent = " " +  timeUTCInMilliseconds