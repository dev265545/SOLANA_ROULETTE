export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function totalAmtToBePaid(investment){
    
    return investment;
}

export function getReturnAmount(investment, stakeFactor){
    return investment*stakeFactor;
}
  
export default {randomNumber, totalAmtToBePaid, getReturnAmount};
