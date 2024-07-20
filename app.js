
function switchBtn() {
    document.getElementById("Switch").style.display = "none"
}

function menuBtn() {
    document.getElementById("MenuMenu").style.display = "block";
}

function MenuMenuX() {
    document.getElementById("MenuMenu").style.display = "none";
}

// close form section

function formSectionClose() {
    document.getElementById("formSection").style.display = "none"
}

// Open form section 

function Talktomesection() {
    document.getElementById("formSection").style.display = "block"
}

function OnBtn() {
    addEventListener("mouseover", () => {
        document.getElementById("OnBtn").style.color = "Blue"
    })
}

function H5switch() {
    addEventListener("mouseover", () => {
        document.getElementById("H5switch").style
    })
}


document.addEventListener("mouseover", ()=> {
    OnBtn() && H5switch()
})
