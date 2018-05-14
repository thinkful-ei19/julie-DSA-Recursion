'use strict';

//Counting Sheep
function sheepCounter(sheep) {
    if (sheep === 0) {
        return "";
    }
    console.log(sheep + " - Another sheep jump over the fence")
    sheepCounter(sheep - 1);
}

sheepCounter(3);

