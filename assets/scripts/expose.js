// expose.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e=> {
      if (e.target.matches(selector)) callback(e)
    })
  }

  //big images
  addGlobalEventListener("change", "#horn-select", e =>{
      document.querySelector("header+img").src = "assets/images/"+e.target.value+".svg";
      document.querySelector("header+img").alt = e.target.value+" picture";

      document.querySelector("audio").src = "assets/audio/"+e.target.value+".mp3";

  })

  // slider volume icons
  addGlobalEventListener("change", "#volume", e =>{
    let volume = document.querySelector("#volume").value;
    if (volume >=67){
      document.querySelector("input+img").src = "assets/icons/volume-level-3.svg";
    }
    else if (volume >=33){
      document.querySelector("input+img").src = "assets/icons/volume-level-2.svg";
    }
    else if (volume >=1){
      document.querySelector("input+img").src = "assets/icons/volume-level-1.svg";
    }
    else {
      document.querySelector("input+img").src = "assets/icons/volume-level-0.svg";
    }

  })

  //audio play
  addGlobalEventListener("click", "button", e =>{
    let volume = document.querySelector("#volume").value;
    let value = document.querySelector("#horn-select").value;

    if (volume != 0) {
      let volumeController = document.querySelector("audio");
      volumeController.pause();
      volumeController.currentTime = 0;
      volumeController.play();
    }
    if (value=="party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
})

}