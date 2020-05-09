import test from './object.js'

let i = 0
let j = 0
var pnumber, post, title, time, des, number
var prevbtn = document.getElementsByTagName('BUTTON')[0]
var nextbtn = document.getElementsByTagName('BUTTON')[1]
var oblen = test.length
prevbtn.style = 'display:none'

for (i = 0, j = 0; i < oblen && j < 6; j++, i++) {
  pnumber = document.getElementsByClassName('number')[j]
  post = document.querySelectorAll('.post .box ')[j]
  title = post.querySelectorAll('.title ')[0]
  des = post.querySelectorAll('.description ')[0]
  time = post.getElementsByTagName('time')[0]
  title.innerHTML = test[i].title
  time.innerHTML = test[i].time
  des.innerHTML = test[i].description
  pnumber.innerHTML = i + 1
}
if (oblen <= 6) {
  nextbtn.style = 'display:none'
  prevbtn.style = 'display:none'
} else {
  nextbtn.style = 'display:inline-block'
}

function next () {
  number = 0
  for (j = 0; j < 6; j++) {
    pnumber = document.getElementsByClassName('number')[j]
    post = document.querySelectorAll('.post .box ')[j]
    title = post.querySelectorAll('.title ')[0]
    des = post.querySelectorAll('.description ')[0]
    time = post.getElementsByTagName('time')[0]
    title.innerHTML = ''
    time.innerHTML = ''
    des.innerHTML = ''
    pnumber.innerHTML = ''
  }
  for (j = 0; j < 6 && i < oblen; j++, i++) {
    pnumber = document.getElementsByClassName('number')[j]
    post = document.querySelectorAll('.post .box ')[j]
    title = post.querySelectorAll('.title ')[0]
    des = post.querySelectorAll('.description ')[0]
    time = post.getElementsByTagName('time')[0]
    title.innerHTML = test[i].title
    time.innerHTML = test[i].time
    des.innerHTML = test[i].description
    pnumber.innerHTML = i + 1
    number++
  }
  if (i === oblen) {
    prevbtn.style = 'display:inline-block'
    nextbtn.style = 'display:none'
  } else {
    nextbtn.style = 'display:inline-block'
    prevbtn.style = 'display:inline-block'
  }
}
console.log(pnumber)
function prev () {
  for (j = 0; j < 6; j++) {
    pnumber = document.getElementsByClassName('number')[j]
    post = document.querySelectorAll('.post .box ')[j]
    title = post.querySelectorAll('.title ')[0]
    des = post.querySelectorAll('.description ')[0]
    time = post.getElementsByTagName('time')[0]
    title.innerHTML = ''
    time.innerHTML = ''
    des.innerHTML = ''
    pnumber.innerHTML = ''
  }
  number = i - 6 - number
  console.log(number)
  for (i = number, j = 0; j < 6 && i < oblen; j++, i++) {
    pnumber = document.getElementsByClassName('number')[j]
    post = document.querySelectorAll('.post .box ')[j]
    title = post.querySelectorAll('.title ')[0]
    des = post.querySelectorAll('.description ')[0]
    time = post.getElementsByTagName('time')[0]
    title.innerHTML = test[i].title
    time.innerHTML = test[i].time
    des.innerHTML = test[i].description
    pnumber.innerHTML = i + 1
  }
  if (i === oblen) {
    nextbtn.style = 'display:none'
    prevbtn.style = 'display:inline-block'
  } else if (i === 6) {
    nextbtn.style = 'display:inline-block'
    prevbtn.style = 'display:none'
  }
}
console.log(oblen)
