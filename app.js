

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


//-------------------------------------------------------------------------------
// Switch phase

// Switch button
function OnBtn() {
    addEventListener("mouseover", () => {
        document.getElementById("OnBtn").style.color = "#25e3dc"
    })
}

function OnClickBtn() {
    document.getElementById("Switch").style.display = "none"
}

//Switch phase time

function updateTime() {
  const timeContainer = document.getElementById("time");
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  timeContainer.textContent = formattedTime;
  setInterval(updateTime, 1000);

  
}

updateTime();




//----------------- End Switch phase ------------------------------------------------------------------
