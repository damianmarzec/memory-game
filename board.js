function checkBoardParity(colsAmount, rowsAmount) {
    return true;
    // @todo @aniax
}

function getRandomListOfPairsId(colsAmount, rowsAmount) {
    return [1,4,3,4,2,3,2,1,5,5,6,6,7,7,8,8];
    // @todo
}

function generateBoxHtml(pictureId) {
    return '<div class="game-tile" data-card-type="'+pictureId+'"></div>';
}

function unCover(clickedId) {
    // todo
}

function desapireBoth(clickedId, whatWasClickedPreviously) {
    // todo
}

function hideBoth(clickedId, whatWasClickedPreviously) {
    // todo
}

function renderBoard(colsAmount, rowsAmount) {
    if (!checkBoardParity(colsAmount, rowsAmount)) {
        alert("WTF?");
        return false;
    }

    let listOfIds = getRandomListOfPairsId(colsAmount, rowsAmount);

    let numberOfBoxes = colsAmount * rowsAmount;
    for (boxNr = 0; boxNr < numberOfBoxes; boxNr++) {
        $('.game-board').append(
            generateBoxHtml(listOfIds[boxNr])
        );
    }

    $('.game-tile').click(function (e) {
        // todo Chceck if element clicked is not exact the same tile. If it is, there shouldn't be any action at all


        let clickedPictureId = $(this).attr('data-card-type');
        console.log(clickedPictureId);

        unCover(clickedPictureId);

        if (isCheckRequired()) { // czy to jest 2gie klikniecie
            if (checkIfSuccess(clickedPictureId)) {
                addPoint();
                desapireBoth(clickedPictureId, whatWasClickedPreviously());
                console.log("SUCCESS");
            } else {
                addFail();
                hideBoth(clickedPictureId, whatWasClickedPreviously());
                console.log("FAILE");
            }
            updatePointsAndFails();
        } else {
            remember(clickedPictureId);
        }

    });
}
