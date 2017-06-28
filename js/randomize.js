function randomItem(arr) {
    var arrSize = arr.length();
    var randomIndex =  Math.floor(Math.random() * arrSize);
    return arr(randomIndex);
}