
// All variables
const submitEl = document.getElementById("submitBtn");
const chosenColorEl = document.getElementById("chosenColor");
const selectionEl = document.getElementById("colorScheme");
const individualColorDivEl = document.querySelector(".individual-color");

const colorOneEl = document.querySelector(".first-color-displayed");
const colorTwoEl = document.querySelector(".second-color-displayed");
const colorThreeEl = document.querySelector(".third-color-displayed");
const colorFourEl = document.querySelector(".fourth-color-displayed");
const colorFiveEl = document.querySelector(".fifth-color-displayed");

const colorOneHex = document.querySelector(".first-color-hex-value");
const colorTwoHex = document.querySelector(".second-color-hex-value");
const colorThreeHex = document.querySelector(".third-color-hex-value");
const colorFourHex = document.querySelector(".fourth-color-hex-value");
const colorFiveHex = document.querySelector(".fifth-color-hex-value");


let userColorSelect;
let userColorSchemeSelect;

// gets actioned when user wants their color pallet

submitEl.addEventListener('click', (e) =>{ 
    // prevent refreshing 
    e.preventDefault();
    
    // saves users input in variables
    userColorSelect = removeHastag(chosenColorEl.value); 
    userColorSchemeSelect = selectionEl.value;

    // calls function that sends data to api
    sendToApi(userColorSelect, userColorSchemeSelect);
    

})




// just removes the "#" so it will work in the URL sent to the api
function removeHastag(hex){
    return hex.replace('#', '');
}

function sendToApi(hex, mode){

    // scheme?hex=24B1E0&mode=triad&count=61`)
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(response => response.json()) /*converts from JSON to js object */
        .then(data => { 

            
            // sets all the new colors in CSS
            colorOneEl.style.backgroundColor = data.colors[0].hex.value;
            colorTwoEl.style.backgroundColor = data.colors[1].hex.value;
            colorThreeEl.style.backgroundColor = data.colors[2].hex.value;
            colorFourEl.style.backgroundColor = data.colors[3].hex.value;
            colorFiveEl.style.backgroundColor = data.colors[4].hex.value;

            // sets the texts to new hex values
            colorOneHex.textContent = data.colors[0].hex.value;
            colorTwoHex.textContent = data.colors[1].hex.value;
            colorThreeHex.textContent = data.colors[2].hex.value;
            colorFourHex.textContent = data.colors[3].hex.value;
            colorFiveHex.textContent = data.colors[4].hex.value;

            
        });
    
    
}


