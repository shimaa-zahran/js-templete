// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function() {

    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");

};
// switch colors
const colorsli = document.querySelectorAll(".colors-list li")
    // click on every list item
colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        // set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
            // remove active class from all childern

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        })
        e.target.classList.add("active")
    })

})



// sellect landing-page element
let landingPage = document.querySelector(".landing-page")
    // get array of imgs
let imgsArray = ["img2.jpg", "img3.jpg", "img4.jpg"]
setInterval(() => {
    // get random number
    let randomNamber = Math.floor(Math.random() * imgsArray.length)
        // change b.g imge url
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNamber] + '")'
}, 5000)