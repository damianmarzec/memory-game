let clickingMemory;

function remember(id) {
    clickingMemory = id;
}

function whatWasClickedPreviously() {
    return clickingMemory;
}

