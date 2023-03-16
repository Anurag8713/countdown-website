const date = document.getElementById("date")
date.innerHTML = "3 January 2023 12:00 PM"

const endDate = "3 January 2023 12:00 PM"

const inputs = document.querySelectorAll("input")

function clock() {
const end = new Date(endDate)
const now = new Date()
const diff = end - now

if(diff < 0) return;

inputs[0].value = Math.floor(diff / 1000 / 3600 / 24)
inputs[1].value = Math.floor(diff / 1000 / 3600) % 24
inputs[2].value = Math.floor(diff / 1000 / 60) % 60
inputs[3].value = Math.floor(diff / 1000 % 60)

function clockrun() {
    
    setInterval(clock , 1000)
    
}

clockrun()

}

// intial call
clock()


