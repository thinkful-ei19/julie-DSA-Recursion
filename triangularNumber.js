'use strict';

function triNum(num) {
    if(num <= 1) {
        return num;
    }
    return num + triNum(num - 1);

}

triNum(4)
//10