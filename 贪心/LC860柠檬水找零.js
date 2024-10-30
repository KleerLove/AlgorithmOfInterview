var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    for(const n of bills){
        if(n === 5){
            five++;
        }else if(n === 10){
            ten++;
            if(five > 0){
                five--;
            }else{
                return false;
            }
        }else{
            if(ten > 0 && five > 0){
                ten--;
                five--;
            }else if(five >= 3){
                five -= 3;
            }else{
                return false;
            }
        }
    }
    return true;
};