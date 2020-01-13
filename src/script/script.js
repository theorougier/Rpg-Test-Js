const moveAllie = document.getElementById("allie");
const positionAllie = {x:5, y:3};
const board_length = 5;
const positionEnnemie = {x:1, y:3};

window.addEventListener("keyup", function(e){
    if(e.code === 'ArrowUp'){
        if(positionAllie.x <=0){
        }else{
        positionAllie.x = positionAllie.x - 1;
        moveAllie.style.gridRow = positionAllie.x;
    }
}
})

window.addEventListener("keyup", function(e){
    if(e.code === 'ArrowDown'){
        if(positionAllie.x >=5){
        }else{
        positionAllie.x = positionAllie.x + 1;
        moveAllie.style.gridRow = positionAllie.x;
    }
}
})

window.addEventListener("keyup", function(e){
    if(e.code === 'ArrowLeft'){
        if(positionAllie.y <=0){
        }else{
        positionAllie.y = positionAllie.y - 1;
        moveAllie.style.gridColumn = positionAllie.y;
}
    }
})

window.addEventListener("keyup", function(e){
    if(positionAllie.y >=5){
    }else{
    if(e.code === 'ArrowRight'){
        positionAllie.y = positionAllie.y + 1;
        moveAllie.style.gridColumn = positionAllie.y;
    }
}
})

