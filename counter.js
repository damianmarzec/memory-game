let counterMemory = false;

function isCheckRequired() {
    if (counterMemory == false) {
        let toReturn = false;
        counterMemory = true;
        return toReturn;
    } else {
        let toReturn = true;
        counterMemory = false;
        return toReturn;
    }
}
