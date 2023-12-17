const inputs = document.getElementById("inputs");
inputs.addEventListener("input",(e)=>{
    const target = e.target;
    if(isNaN(target.value)){
        target.value ="";
        return;
    }

    if(target.value != ""){
        const next = target.nextElementSibling;
        if(next){
            next.focus();
        }
    }

})

inputs.addEventListener("keyup",(e)=>{
    const target = e.target;
    const key = e.key.toLowerCase();
    if(key==='backspace' || key==='delete'){
        target.value="";
        const previous = target.previousElementSibling;
        if(previous){
            previous.focus();
        }
    }

})