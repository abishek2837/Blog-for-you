function changecolor(colors){
    document.body.style.backgroundColor=colors;
    let txt=document.getElementsByClassName('text-content');
    if(colors=="#000000"){
        for(let elm of txt){
            elm.style.color="white";
        }
    }
    else{
        for(let elm of txt){
            elm.style.color="black";
        }
    }
}

