var img = document.getElementsByTagName("img")[2];
var btn = document.getElementsByClassName("btn");
var txt1 = document.getElementsByTagName("h1")[0];
var txt2 = document.getElementsByTagName("p")[0];


function cambio0 (){
    img.setAttribute("src","img/mod1.jpg");
    txt1.innerHTML = "Imagen 1";
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

function cambio1 (){
    img.setAttribute("src","img/mod2.jpg");
    txt1.innerHTML = "Imagen 2";
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
}

function cambio2 (){
    img.setAttribute("src","img/mod3.jpg");
    txt1.innerHTML = "Imagen 3";
    txt2.innerHTML = "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus"
}
function cambio3 (){
    img.setAttribute("src","img/mod4.jpg");
    txt1.innerHTML = "Imagen 4";
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

function cambio4 (){
    img.setAttribute("src","img/mod5.jpg");
    txt1.innerHTML = "Imagen 5";
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
}

function cambio5 (){
    img.setAttribute("src","img/mod6.jpg");
    txt1.innerHTML = "Imagen 6";
    txt2.innerHTML = "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus"
}

btn[0].addEventListener("click",cambio0);
btn[1].addEventListener("click",cambio1);
btn[2].addEventListener("click",cambio2);
btn[3].addEventListener("click",cambio3);
btn[4].addEventListener("click",cambio4);
btn[5].addEventListener("click",cambio5);