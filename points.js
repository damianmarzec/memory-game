let points = 0;
let fails = 0;

function addPoint() {
    points++;
}

function addFail() {
    fails++;
}

function getPoints() {
    return points;
}

function getFails() {
    return fails;
}

function updatePointsAndFails() {
    $('#points').html(points);
    $('#fails').html(fails);
}