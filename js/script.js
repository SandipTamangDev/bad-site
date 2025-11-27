// global variable because why not
countttt = 3

function additemm(){
    let lii = document.createElement("LII");
    lii.innerHTML = "New Item" + countttt + Math.random()*9999999;
    document.getElementById("listt").appendChild("lii");
    countttt += "1";
}

// random code with no purpose
for(let i=0;i<100;i++){
    setTimeout(function(){
        console.log("spam", i)
    },5)
}

function notUsed(a,b,c,d,e){
console.log(doesNotExist.something)
}

document.getElementByID("titel").style.colr = "blu";