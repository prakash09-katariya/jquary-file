let button = document.querySelectorAll('button')
let display = document.querySelector('#display')
let equal = document.getElementById('equal')
let clearBtn = document.getElementById('clear-btn')
let backSpace = document.getElementById('backspace')

button[0].onclick = function()
{
    display.value += "7"
}

button[1].onclick = function()
{
    display.value += "8"
}

button[2].onclick = function()
{
    display.value += "9"
}

button[3].onclick = function()
{
    display.value += "+"
}

button[4].onclick = function()
{
    display.value += "4"
}

button[5].onclick = function()
{
    display.value += "5"
}

button[6].onclick = function()
{
    display.value += "6"
}

button[7].onclick = function()
{
    display.value += "-"
}

button[8].onclick = function()
{
    display.value += "1"
}

button[9].onclick = function()
{
    display.value += '2'
}

button[10].onclick = function()
{
    display.value += "3"
}

button[11].onclick = function()
{
    display.value += "*"
}

button[12].onclick = function()
{
    display.value += "/"
}

button[13].onclick = function()
{
    display.value += "0"
}

button[14].onclick = function()
{
    display.value += "%"
}

equal.onclick = function()
{
    display.value = eval(display.value)
}

clearBtn.onclick = function()
{
    display.value = " "
}

backSpace.onclick = function()
{
     
    display.value = display.value.slice (0 , -1)

}