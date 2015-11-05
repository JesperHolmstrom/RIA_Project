var initialState = require('./../initial-state');

var CountReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'CLICK_INC':
            newState.linesOfCode += newState.clickBaseValue * newState.clickIncrementMultiplier;
            return newState;
        case 'AUTO_INC':
            newState.linesOfCode += newState.autoBaseValue * newState.autoIncrementMultiplier;
            return newState;
        case 'BUY_MULTIPLIER':
            if(newState.linesOfCode >= newState.costMultiplier){
                newState.linesOfCode -= newState.costMultiplier;
                newState.costMultiplier = Math.ceil(20 * Math.pow(1.17,newState.clickIncrementMultiplier));
                newState.clickIncrementMultiplier +=  1;
                return newState;
            }
            else{
                return newState;
            }
        case 'BUY_PROGRAMMER':
            if(newState.linesOfCode >= newState.costAutoBaseValue){
                newState.linesOfCode -= newState.costAutoBaseValue;
                newState.costAutoBaseValue = Math.ceil(200 * Math.pow(1.17,(newState.autoBaseValue/10)+1));
                newState.autoBaseValue +=  10;
                return newState;
            }
            else{
                return newState;
            }
        case 'BUY_PROGRAMMER_UPGRADE':
            if(newState.linesOfCode >= newState.costAutoBaseMultiplier){
                newState.linesOfCode -= newState.costAutoBaseMultiplier;
                newState.costAutoBaseMultiplier = Math.ceil(50000 * Math.pow(1.17,newState.autoIncrementMultiplier));
                newState.autoIncrementMultiplier *=  2;
                return newState;
            }
            else{
                return newState;
            }
        default:
            return state || initialState().count;
    }
};

module.exports = CountReducer;