var sushibeans = 0;
var sbps = 0;
var sbps_cost = 10;
var sbpsps = 0;
var sbpsps_cost = 500;
var potential_prestige = 0;
var prestige = 0;

document.getElementById("sushibeans").innerHTML = sushibeans;
document.getElementById("sbps_cost").innerHTML = sbps_cost;
document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost;
document.getElementById("potential_prestige").innerHTML = Math.round(Math.log10(sushibeans + 1));

function morebeans() {
    sushibeans += 1;
    document.getElementById("sushibeans").innerHTML = sushibeans;
    document.getElementById("potential_prestige").innerHTML = Math.round(Math.log10(sushibeans + 1) / 3);
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

function prestige() {
  if (sushibeans >= 10000) {
    sushibean = 0;
    sbps = 0;
    sbps_cost = 10;
    sbpsps = 0;
    sbpsps_cost = 500;
    prestige += potential_prestige;
    document.getElementById("sushibeans").innerHTML = sushibeans;
    document.getElementById("sbps").innerHTML = sbps;
    document.getElementById("sbps_cost").innerHTML = sbps_cost;
    document.getElementById("sbpsps").innerHTML = sbpsps;
    document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost;
    document.getElementById("potential_prestige").innerHTML = Math.round(Math.log10(sushibeans + 1) / 3);
  }
}



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