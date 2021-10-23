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
  })

  document.querySelector("img").src = 'assets/images/smiling.png';





  // document.querySelector("#horn-select").src = 'img/new-image.jpg';


  // const input = document.querySelector('#horn-select');
  // input.addEventListener('#horn-select', updateValue);

  // function updateValue(e) {
  //   e.src = "assets/images/"+e.target.value+".svg";
  //   console.log(e.src);
  // }
}