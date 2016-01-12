function promptForPlayerName(player){
    var name= prompt("what is your name?");
    if (name.length>15){
        alert("Wow, that's a long name!");
    }
    return name;
}
function tryTwoPointShot(){
    var x = Math.random();
    var y = Math.random();{
        if(x>0.2&&y>0.2){
            return true;
        }
        return false;
    } 
}

function tryThreePointShot(){
    var x = Math.random();
    var y =Math.random();{
        if(x<=0.2&&y>=0.8)
        return true;
    }
    return false;
}

function getShotString(){
    
}