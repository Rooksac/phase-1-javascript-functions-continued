const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(activity = "go to the office") {
    console.log(activity);
    return `This Monday, I will ${activity}.`;
}
const wrapAdjective = function(flair = '*'){
    return function(adj = special) {
        return `You are ${flair}${adj}${flair}!`
    }
}