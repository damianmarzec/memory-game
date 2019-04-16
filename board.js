function checkBoardParity(colsAmount, rowsAmount) {
    let allTiles = colsAmount * rowsAmount;
    return (allTiles % 2) === 0;
}

function getRandomListOfPairsId(colsAmount, rowsAmount) {

    // ile jest wszystkich elementow
    let countAll = colsAmount * rowsAmount;

    // ile par
    let countPairs = countAll / 2;

    // stworzyc tablice
    let randomPairs = [];

    do {

        // wylosuj liczbe z odpowiedniego zakresu
        let randomNumber = Math.ceil(Math.random() * countPairs);

        // policz ile razy ta cyfra wystepuje już w tablicy wylosowanych elem.
        let occureCount = 0; // nasz licznik
        for (let i = 0; i < randomPairs.length; i++) { // wykonaj tyle razy ile aktualnie jest elementow w tablicy
            if (randomPairs[i] === randomNumber) { // czy aktualnie sprawdzany eleemnt jest taki jak nasza wylosowana liczba
                occureCount++; // jeśli tak, zwiększ licznik o 1
            }
        }

        // sprawdz czy takich wylosowanych jest mniej niż nasz max (2)
        if (occureCount < 2) {
            randomPairs.push(randomNumber); // dodaj do tablicy
        }
    } while (randomPairs.length < countAll);

    return randomPairs;
}

function generateBoxHtml(pictureId) {
    return '<div class="game-tile" data-card-type="' + pictureId + '"></div>';
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
