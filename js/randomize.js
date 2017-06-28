function randomItem(arr) {
    var arrSize = arr.length;
    var randomIndex =  Math.floor(Math.random() * arrSize);
    return arr[randomIndex];
}

function populateQuote(quote, author) {
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}