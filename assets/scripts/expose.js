// expose.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e=> {
      if (e.target.matches(selector)) callback(e)
    })
  }

  addGlobalEventListener("change", "#horn-select", e =>{
      document.querySelector("img").src = "assets/images/"+e.target.value+".svg";
      document.querySelector("img").alt = e.target.value+" picture";

      document.querySelector("audio").src = "assets/audio/"+e.target.value+".mp3";
  })

  document.querySelector("img").src = 'assets/images/smiling.png';


}