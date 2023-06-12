
const vowels = document.getElementById("vowels");
const consonants =document.getElementById("consonants");
const combination_charater = document.getElementById("combination_charater");
const keys = document.querySelectorAll("#key");
const vowelsKey = document.querySelectorAll("#key1");
const text_area = document.getElementById("text_area");
const combination_key = document.querySelectorAll("#combination_key");
const backspace = document.getElementById("backspace");
const spacebar = document.getElementById("spacebar");
const enter = document.getElementById("enter");
const display_history = document.getElementById("display_history");
const display = document.getElementById("display");
const close_display = document.getElementById("close_display");
const container = document.getElementById("container");
console.log(container);
let buttons = document.querySelectorAll("button")
let tamil = []
for(let k=0;k<buttons.length;k++){
    tamil.push(buttons[k].innerText)
}
console.log(tamil)

for(let i =0;i<keys.length;i++){
    keys[i].addEventListener("click",function clickMe(){
        text_area.value = text_area.value + keys[i].innerText ;
        
    })
}

for(let i =0;i<vowelsKey.length;i++){
    vowelsKey[i].addEventListener("click",function clickMe(){
        text_area.value = text_area.value + vowelsKey[i].innerText;

    })
}


for(let i=0;i<combination_key.length;i++){
    combination_key[i].addEventListener("click",function clickMe(e){
            console.log(text_area.value.slice(-1))
            for(let i=0;i<keys.length;i++){
                if(text_area.value.slice(-1) == keys[i].innerText){
                    text_area.value = text_area.value + e.target.innerText;
                }
                else{
                    console.log("you lose")
                }
            }
        })
    
}

backspace.addEventListener("click",function backClear(){
    // text_area.value = text_area.value - text_area.value.slice(-1);
    output = text_area.value.slice(0,text_area.value.length-1)
    text_area.value = output
})

spacebar.addEventListener("click",function space(){
    text_area.value =  text_area.value + " " ;
})

enter.addEventListener("click",function clickEnter(e){

    if(text_area.value === ""){
        e.preventDefault();
       text_area.style.borderColor = "red";
       alert("Please enter some values")
    }else{
        console.log("you lose")
    }
})

display.addEventListener("click",function display(e){
    e.preventDefault();
    display_history.style.display = "block"

})

close_display.addEventListener("click",function display(e){
    e.preventDefault();
    display_history.style.display = "none"

})