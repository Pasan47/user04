// const data = [

//     {
//         image: 'images/happy.jpg',
//         text: "Happy"

//     },
//     {
//         image: 'images/Sad.png',
//         text: "Sad"

//     }


// ];
// // Get the container element
// const container = document.getElementById('boxContainer');

// //call function
// data.forEach(createBox);

// //Create the speech boxes
// function createBox(item) {
//     const box =document.createElement('div');

//     const{image,text} = item;
//     // box.classList.add('box');

//     box.innerHTML =
//      `<img src="${image}" alt="${text}" /><p class="info">${text}</p>` ;

//      //append to main HTMl Body
//    //  document.body.appendChild(box);


//        // Append the box to the container
//     container.appendChild(box);

//     box.addEventListener('click', () => {
//         setMessage(text);
//         speakTest();
        
        
//     })
    
// }

// //set text
// function setMessage(text){
//     message.text = text;
// }

// //Speak test

// function speakTest(){
//     speechSynthesis.speak(message);
// }




const data = [
    {
        image: 'images/happy.jpg',
        text: "Happy"
    },
    {
        image: 'images/Sad.png',
        text: "Sad"
    }
];

// Get the container element
const container = document.getElementById('boxContainer');
const voiceForm = document.getElementById('voiceForm');
const voiceSelect = document.getElementById('voiceSelect');
const toggleVoiceFormButton = document.getElementById('toggleVoiceForm');

// Initialize a global message object
let message = new SpeechSynthesisUtterance();

// Fetch voices and populate the select dropdown
function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear the existing options
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

// Set the selected voice
function setVoice() {
    const selectedVoiceName = voiceSelect.value;
    const voices = speechSynthesis.getVoices();
    message.voice = voices.find(voice => voice.name === selectedVoiceName);
}

// Create the speech boxes
function createBox(item) {
    const box = document.createElement('div');
    box.classList.add('box');  // Add class for styling

    const { image, text } = item;
    box.innerHTML = `<img src="${image}" alt="${text}" /><p class="info">${text}</p>`;

    // Append the box to the container
    container.appendChild(box);

    box.addEventListener('click', () => {
        setMessage(text);
        speakText();
    });
}

// Set text
function setMessage(text) {
    message.text = text;
}

// Speak text
function speakText() {
    speechSynthesis.speak(message);
}

// Toggle voice form visibility
function toggleVoiceForm() {
    if (voiceForm.style.display === 'none') {
        voiceForm.style.display = 'block';
        populateVoices(); // Populate voices when showing the form
    } else {
        voiceForm.style.display = 'none';
    }
}

// Event listeners
toggleVoiceFormButton.addEventListener('click', toggleVoiceForm);
voiceSelect.addEventListener('change', setVoice);

// Populate voices initially
populateVoices();
