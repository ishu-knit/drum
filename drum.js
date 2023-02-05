
// // // // document.querySelector("button").addEventListener("click",function fun() {alert("hellooo")}   ) 
// for (let i = 0; i < document.querySelectorAll(".bm11").length; i++) {
    
//     document.querySelectorAll(".bm11")[i].addEventListener("click",function fun(){
//         // both work
//         // document.addEventListener("click",function fun(){
//     /*to change color  */ 
//         // this.style.color="aqua"

//         /*to play sound while pressing key  */
//         // audio = new Audio("sounds/crash.mp3");
//         // audio.play();

//         /*to play specific sound for a specific key  */
//         var button = this.innerHTML;
//         switch (button) {
//             case "a":
//                 audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//             case "s":
//                 audio1=new Audio("sounds/tom-1.mp3");
//                 audio1.play();
//                 break

//             case "d":
//                 audio2=new Audio("sounds/tom-2.mp3");
//                 audio2.play();
//                 break

//             case "j":
//                 audio3=new Audio("sounds/tom-3.mp3");
//                 audio3.play();
//                 break
//             case "k":
//                 audio4=new Audio("sounds/tom-4.mp3");
//                 audio4.play();
//                 break
//             case "l":
//                 // alert("hello you press l")
//                 audio5=new Audio("sounds/snare.mp3");
//                 audio5.play();
//                 break
//             default:
//                    console.log("erro")
//         }

// }
//  )}

    
// // }


// //   keyboard playing 
// document.addEventListener("keypress",function (event){
//     makesound(event.key );
//     animation(event.key);
// })

// function makesound(key) {
//     switch (key) {
//                     case "a":
//                         audio = new Audio("sounds/kick-bass.mp3");
//                         audio.play();
//                         break;
//                     case "s":
//                         audio1=new Audio("sounds/tom-1.mp3");
//                         audio1.play();
//                         break
        
//                     case "d":
//                         audio2=new Audio("sounds/tom-2.mp3");
//                         audio2.play();
//                         break
        
//                     case "j":
//                         audio3=new Audio("sounds/tom-3.mp3");
//                         audio3.play();
//                         break
//                     case "k":
//                         audio4=new Audio("sounds/tom-4.mp3");
//                         audio4.play();
//                         break
//                     case "l":
//                         // alert("hello you press l")
//                         audio5=new Audio("sounds/snare.mp3");
//                         audio5.play();
//                         break
//                     default:
//                            console.log("erro")         
// }}


// // it is to animate button which will pressed 
// function animation(key) {
//     // to add class from css which make pressed key partially disappear
//     document.querySelector("."+key).classList.add("pressed");
// //  to remove the above add class 
//     setTimeout(function () {document.querySelector("."+key).classList.remove("pressed");},200);
// }




                    // meee

document.addEventListener("keypress",function (event){
    play(event.key);
    animation(event.key);
});





function play(key)
{
    switch (key) {
        case "a":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break

        case "s":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break
        case "d":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break
        case "j":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break
        case "k":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break
        case "l":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break
    }
}

function animation(_k) {
    
document.querySelector("."+_k).classList.add("pressed")
setTimeout(function(){
    document.querySelector("."+_k).classList.remove("pressed")
},200)        
    }
