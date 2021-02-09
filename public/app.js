var nav = document.querySelectorAll("#navbarNav > ul > li.nav-item")
var navArr = Array.prototype.slice.call(nav)


function selected () {
console.log(this)
}


navArr.forEach( element => element.addEventListener('click', selected));



