let body= document.querySelector("body");
let button= document.querySelector(".elsad");
let mathquiz= document.querySelectorAll(".darked")
// let mathsaquiz= document.querySelectorAll("main p")
let deyismeyen= document.querySelector("#main2")
let deyismeyen2= document.querySelector(".deyismeyen")
let colorspan= document.querySelector(".colorspan")
let acolor1= document.querySelector(".colorbutton1")
let acolor2= document.querySelector(".colorbutton2")
let acolor3= document.querySelector(".colorbutton3")
let acolor4= document.querySelector(".colorbutton4")
let acolor5= document.querySelector(".colorbutton5")





button.addEventListener("click", ()=> {
    button.classList.toggle("checked");
    let newList = Array.from(button.classList);
    mathquiz.forEach((elem)=>{
        console.log(elem);
        if(newList.includes("checked")){
            elem.style.backgroundColor= "white"
            console.log("salam");
            elem.style.color="black"
            colorspan.style.color= "rgba(43, 42, 42, 1)"
            acolor1.style.color= "rgba(43, 42, 42, 1)"
            acolor2.style.color= "rgba(43, 42, 42, 1)"
            acolor3.style.color= "rgba(43, 42, 42, 1)"
            acolor4.style.color= "rgba(43, 42, 42, 1)"
            acolor5.style.color= "rgba(43, 42, 42, 1)"

        }
        else{
            elem.style.backgroundColor ="rgb(43, 42, 42)"
            deyismeyen.style.backgroundColor = "#30333d"
            deyismeyen2.style.backgroundColor= "#30333d"
            console.log("sagol");
            colorspan.style.color= "white"
            acolor1.style.color= "white"
            acolor2.style.color= "white"
            acolor3.style.color= "white"
            acolor4.style.color= "white"
            acolor5.style.color= "white"
        }




      })
})

