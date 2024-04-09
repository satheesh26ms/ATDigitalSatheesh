// asign html elements to variable
const menuicon = document.getElementById('menubar');
const menu_side = document.getElementById('sideMenu');
const closeBar = document.getElementById('closeIcon');

// when click menu icon
menuicon.addEventListener('click', () => {
    menu_side.style.right = "0"
    menu_side.style.zIndex = "1"
})

// when click close icon/ closing the side bar
closeBar.addEventListener("click", () => {
    menu_side.style.right = "-100vw"
})


// below codes => for FAQ section
const vector1 = document.getElementById('vec1');
const vector2 = document.getElementById('vec2');
const vector3 = document.getElementById('vec3');

// for first qeustion
vector1.addEventListener('click' , () => {
    document.getElementById('ans1').style.display = "block";
    document.querySelector("#vec1 > img").src = "assets/minus.png";
});

// for second qeustion
vector2.addEventListener('click' , () => {
    document.getElementById('ans2').style.display = "block";
    document.querySelector("#vec2 > img").src = "assets/minus.png";
});

// for third qeustion
vector3.addEventListener('click' , () => {
    document.getElementById('ans3').style.display = "block";
    document.querySelector("#vec3 > img").src = "assets/minus.png";
});
