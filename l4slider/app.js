var slides = document.getElementsByClassName("carousel-item")
// console.log(slides)
var dots = document.getElementsByClassName("dot")
// console.log(dots)

var currslide = 1

// for prev
document.getElementById("prev").addEventListener("click",function(){
	carousel(currslide -= 1)
})

// for next
document.getElementById("next").addEventListener("click",function(){
	carousel(currslide += 1)
})

for(let q = 0; q < slides.length; q++){
	dots[q].addEventListener("click",function(){
		currslide = this.getAttribute("data-bs-slide-to")
		carousel(currslide)
	})
}

carousel(currslide)

function carousel(slidenum){
	// console.log(slidenum)

	if(slidenum > slides.length){
		currslide = 1;
	}else if(slidenum < 1){
		currslide = slides.length
	}

	console.log(currslide)

	let x,y;

	for(x = 0; x < slides.length; x++){
		slides[x].style.display = "none"
	}

	for(y = 0; y < dots.length; y++){
		// dots[y].className = "dot"
		// dots[y].classList.remove("active")
		dots[y].className = dots[y].className.replace("active","")
	}

	slides[currslide - 1].style.display = "block"

	// dots[currslide - 1].className = "dot active"
	// dots[currslide - 1].classList.add("active")
	dots[currslide - 1].className = dots[currslide - 1].className + " active"
}