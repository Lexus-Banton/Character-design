// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchphrases = [];



headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const value = headDropdown.value;
    // increment the head change count state
    headCount++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    
    displayStats();
    // update the stats to show the new count (call displayStats() to do this work)
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const value = middleDropdown.value;
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const value = bottomDropdown.value;
    // increment the bottom change count state
    bottomCount++;

    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    console.log('Words');
    // push the new catchphrase to the catchphrase array in state
    const newCatchphrase = catchphraseInput.value;
    // clear out the form input's value so it's empty to the user
    catchphrases.push(newCatchphrase);
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    catchphraseInput.value = '';
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have changed the head ${headCount} times, the body ${middleCount} times, and the pants ${bottomCount} times. And your character's catchphrase is:`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    for (let phrase of catchphrases) {
        const latestPhrase = document.createElement('p');
        latestPhrase.textContent = phrase;
        catchphrasesEl.append(latestPhrase);
       
        
}
    // loop through each catchphrase in state
   
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
