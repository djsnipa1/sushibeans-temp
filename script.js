var sushibeans = 0;
var sbps = 0;
var sbps_cost = 10;

document.getElementById("sbps_cost").innerHTML = sbps_cost;

function morebeans() {
    sushibeans += 1;
    document.getElementById("sushibeans").innerHTML = sushibeans;
};

function moresbps() {
    if (sushibeans >= sbps_cost) {
        sushibeans -= sbps_cost;
        sbps += 1;
        sbps_cost = Math.round(sbps_cost * 1.1);
        document.getElementById("sushibeans").innerHTML = sushibeans;
        document.getElementById("sbps").innerHTML = sbps;
        document.getElementById("sbps_cost").innerHTML = sbps_cost;
    };
};






var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    sushibeans += sbps;
    document.getElementById("sushibeans").innerHTML = sushibeans;
}

var cancel = setInterval(incrementSeconds, 1000);