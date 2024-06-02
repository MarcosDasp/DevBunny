const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      

//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


// bloquear f12 e clique direito
// document.onkeydown = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123 || event.keyCode == 18)
//     {
//           return false;
//     }
// }
// document.addEventListener('contextmenu', event => event.preventDefault());
