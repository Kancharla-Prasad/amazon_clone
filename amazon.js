
//variables for images

let images = document.querySelectorAll(".home #images img");

console.log(images.length);
console.log(images)

let n = 0;
function changeImage()
{
	for(let i=0;i<images.length;i++)
	{
		images[i].style.display="none";
	}
	images[n].style.display="block";
}
changeImage();


//variable for bttons
let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");
console.log(prevBtn);
console.log(nextBtn);

prevBtn.addEventListener('click',function(){
	if(n>0)
		n--;
	else
		n=images.length-1;
	changeImage();
});
nextBtn.addEventListener('click',function(){
	if(n<images.length-1)
			n++;
	else
		n=0;
	changeImage();
});

setInterval(function(){
	if(n<images.length-1)
		n++;
	else
		n=0;
	changeImage();
},3000);



// Tackling the box roller

// let scrollBar = document.querySelectorAll(".imgs");
// console.log(scrollBar);

// for(const item in scrollBar)
// {
// 	item.addEventListener('wheel',(e)=>{
// 		e.preventDefault();
// 		item.scrollLeft += e.deltaY;
// 	});
// 	item.addEventListener('scroll',(e)=>{
// 		console.log(e);
// 		item.style.background="#f1f1f1";
// 	});
// }





//hover menu
//tackling the body element
let navBar = document.querySelector('nav');
console.log(navBar);

let navBar1 = document.querySelector('.nav2');
console.log(navBar1);

let homeSection = document.querySelector('.home');
console.log(homeSection);

let allBtn = document.querySelector('#allBtn');
let hoverMenu = document.querySelector('#hoverMenu');
console.log(allBtn);
console.log(hoverMenu);
allBtn.onclick = function(){
	console.log("hell0");
	hoverMenu.style.display="block";
	// hoverMenu.style.width="400px";
	hoverMenu.style.left="0px";
	hoverMenu.style.transition="0.5s ease";
	// navBar.style.opacity="0.3";
	// navBar1.style.opacity="0.3";
	// homeSection.style.opacity="0.3";
};

navBar.addEventListener('scroll',
	function(){
		document.body.style.opacity="0.4";
	}
);





//tackling the croos btn

let crossBtn = document.querySelector('.hoverMenu .heading .crossBtn');
console.log(crossBtn);

crossBtn.onclick = ()=>{
	console.log("hell");
	// hoverMenu.style.display="none";
	hoverMenu.style.left="-400px";
	// navBar.style.opacity="1";
	// navBar1.style.opacity="1";
	// homeSection.style.opacity="";
	hoverMenu.style.transition="0.5s ease"
}




//tackling scroll gallery

let scrollContaiter = document.querySelector('.gallery');
let scrollNextBtn = document.querySelector('#nextBtn');
let scrollPrevBtn =document.querySelector('#prevBtn')

//making prevBtn as display onone
scrollPrevBtn.style.display="none";

let nextCount =0;
let prevCount =0;
scrollNextBtn.addEventListener('click',function(){
	console.log("hello")
	scrollContaiter.scrollLeft += 1200;
	nextCount++;
	prevCount++;
	scrollPrevBtn.style.display="block";
	if(nextCount==2)
	{
		scrollNextBtn.style.display="none";
	}
});
scrollPrevBtn.addEventListener('click',function(){
	console.log("hello")
	scrollContaiter.scrollLeft -= 1200;
	prevCount--;
	nextCount--;
	scrollNextBtn.style.display="block";
	if(prevCount==0)
		scrollPrevBtn.style.display="none";
});


// hover langauge

let hoverLang = document.querySelector('.hover-language')
console.log(hoverLang);

let languageBox = document.querySelector('.language')
languageBox.addEventListener('mouseover',
	function(){
		hoverLang.style.display="block";
		console.log("hell");
	}
);

languageBox.addEventListener('mouseout',function(){
	hoverLang.style.display="none";
});