var sushibeans = 0;
var sbps = 0;
var sbps_cost = 10;
var sbpsps = 0;
var sbpsps_cost = 500;

document.getElementById("sbps_cost").innerHTML = sbps_cost;
document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost;

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


function moresbpsps() {
    if (sushibeans >= sbpsps_cost) {
        sushibeans -= sbpsps_cost;
        sbpsps += 1;
        sbpsps_cost = Math.round(sbpsps_cost * 1.2);
        document.getElementById("sushibeans").innerHTML = sushibeans;
        document.getElementById("sbpsps").innerHTML = sbpsps;
        document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost;
    };
};





var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    sushibeans += sbps;
    document.getElementById("sushibeans").innerHTML = sushibeans;
}

function incrementSeconds2() {
    sbps += sbpsps;
    document.getElementById("sbps").innerHTML = sbps;
}

var cancel = setInterval(incrementSeconds, 1000);
var cancel = setInterval(incrementSeconds2, 1000);