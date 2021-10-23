// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    var synth = window.speechSynthesis;

    const playButton = document.querySelector('button');
    const textInput = document.querySelector('#text-to-speak'); 
    const voiceSelect = document.querySelector('#voice-select');

    playButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(textInput);
        var utterThis = new SpeechSynthesisUtterance(textInput.value);
        var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        for(var i = 0; i < voices.length ; i++) {
          if(voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
          }
        }
        synth.cancel();
        synth.speak(utterThis);
      
        textInput.blur();
        
        document.querySelector("img").src = "assets/images/smiling-open.png";
        utterThis.onend = () => {
            document.querySelector("img").src = "assets/images/smiling-open.png";
        }
      
    })

    var voices = [];

    function populateVoiceList() {
      voices = synth.getVoices();
    
      for(var i = 0; i < voices.length ; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
        if(voices[i].default) {
          option.textContent += ' -- DEFAULT';
        }
    
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
      }
    }
    
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    



    function addGlobalEventListener(type, selector, callback){
        document.addEventListener(type, e=> {
          if (e.target.matches(selector)) callback(e)
        })
      }
    
      addGlobalEventListener("change", "#img", e =>{
          document.querySelector("header+img").src = "assets/images/"+e.target.value+".svg";
          document.querySelector("header+img").alt = e.target.value+" picture";
    
          document.querySelector("audio").src = "assets/audio/"+e.target.value+".mp3";
    
      })
     
}
