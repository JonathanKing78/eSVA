function countto10(){
    let x = 0;
    for (x =0; x<10; x++){
        
        setTimeout(console.log(x), 100000);
   
    }
}

document.addEventListener("DOMContentLoaded", countto10());