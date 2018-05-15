'use strict';

function sheepCounter(sheep) {
    if (sheep === 0) {
        return "";
    }
    console.log(sheep + " - Another sheep jump over the fence")
    sheepCounter(sheep - 1);
}

sheepCounter(3);



function sheepCounterIter(sheep) {
    for (let i = sheep; i > 0; i--) {
        console.log(sheep + " - Another sheep jump over the fence")
        sheep--
    }

}


sheepCounterIter(3)