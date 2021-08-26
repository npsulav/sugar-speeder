document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn1").addEventListener("click", decreaseSpeed);
    document.getElementById("btn2").addEventListener("click", increaseSpeed);
    document.getElementById("btn0").addEventListener("click", reset);
    
  

    function decreaseSpeed() {
        // console.log("I am ➖  hahaha");
        chrome.tabs.executeScript(null,{code:`
        document.getElementsByTagName("video")[0].playbackRate -= 0.1;
        `}) ;
    }


    function reset() {
        // console.log("I am ➖  hahaha");
        chrome.tabs.executeScript(null,{code:`
        document.getElementsByTagName("video")[0].playbackRate = 1;
        `}) ;
    }
    
    
    function increaseSpeed() {
        // console.log("I am ➕ hahaha");
        chrome.tabs.executeScript(null,{code:`
        document.getElementsByTagName("video")[0].playbackRate += 0.1;
        `}) ;
    }
}, _=>{
    let e = chrome.runtime.lastError;
    if(e !== undefined){
      console.log(tabId, _, e);
    }
  });