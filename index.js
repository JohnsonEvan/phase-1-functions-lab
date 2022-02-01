// Code your solution in this file!
const hq = 42
function distanceFromHqInBlocks(block){
    if (block > 42 ) {
        return(block - hq);
    } else {
        return(hq - block);
    }
}
function distanceFromHqInFeet(block) {
    if (block > 42 ) {
        return((block - hq)* 264);
    } else {
        return((hq - block)* 264);
    }
}
function distanceTravelledInFeet(start, destination){
    if (start > destination ) {
        return((start - destination) * 264);
    } else {
        return((destination - start) * 264);
    }
}
function calculatesFarePrice(start, destination) {
    let distance = 0;
    if (start > destination ) {
        distance = ((start - destination) * 264);
    } else {
        distance = ((destination - start) * 264);
    } if (distance <= 400) {
        return 0;
    } if (distance >400 && distance <=2000){
        return (distance - 400) * .02
    } if (distance > 2000 && distance <= 2500) {
        return 25
    } if (distance > 2500){
        return ('cannot travel that far')
    }
}