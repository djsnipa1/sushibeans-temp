var sushibeans = 0;
var sbps = 0;

function morebeans() {
    sushibeans += 1;
    document.getElementById("sushibeans").innerHTML = sushibeans;
};








var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    sushibeans += sbps;
    document.getElementById("sushibeans").innerHTML = sushibeans;
}

var cancel = setInterval(incrementSeconds, 1000);