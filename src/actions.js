module.exports = {
    clickIncrease: function(){
        return {type: 'CLICK_INC'};
    },
    autoIncrease: function(){
        return {type: 'AUTO_INC'};
    },
    buyMultiplier: function(){
        return {type: 'BUY_MULTIPLIER'};
    },
    buyProgrammer: function(){
        return {type: 'BUY_PROGRAMMER'};
    },
    buyProgrammerUpgrade: function(){
        return {type: 'BUY_PROGRAMMER_UPGRADE'};
    }
};