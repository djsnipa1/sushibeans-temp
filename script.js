var sushibeans = 0;
var sbps = 0;
var sbps_cost = 10;
var sbpsps = 0;
var sbpsps_cost = 500;
var potential_prestige = 0;
var prestiges = 0;

document.getElementById("sushibeans").innerHTML = sushibeans;
document.getElementById("sbps_cost").innerHTML = sbps_cost;
document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost;
document.getElementById("prestiges").innerHTML = prestiges;
document.getElementById("potential_prestige").innerHTML = Math.round(Math.log10(sushibeans / 100 + 1));

function morebeans() {
    sushibeans += Math.round(Math.pow(1.2, prestiges));
    document.getElementById("sushibeans").innerHTML = sushibeans;
    document.getElementById("potential_prestige").innerHTML = Math.round(Math.log10(sushibeans / 100 + 1));
};

function moresbps() {
    if (sushibeans >= sbps_cost) {
        sushibeans -= sbps_cost;
        sbps += Math.round(Math.pow(1.2, prestiges));
        sbps_cost = Math.round(sbps_cost * 1.1);
        document.getElementById("sushibeans").innerHTML = sushibeans;
        document.getElementById("sbps").innerHTML = sbps;
        document.getElementById("sbps_cost").innerHTML = sbps_cost;
        document.getElementById("potential_prestige").innerHTML = Math.round(Math.log10(sushibeans / 100 + 1));
    };
};


function moresbpsps() {
    if (sushibeans >= sbpsps_cost) {
        sushibeans -= sbpsps_cost;
        sbpsps += Math.round(Math.pow(1.2, prestiges));
        sbpsps_cost = Math.round(sbpsps_cost * 1.2);
        document.getElementById("sushibeans").innerHTML = sushibeans;
        document.getElementById("sbpsps").innerHTML = sbpsps;
        document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost;
    };
};

function prestige() {
  if (Math.round(Math.log10(sushibeans / 100 + 1)) > 0) {
    prestiges += Math.round(Math.log10(sushibeans / 100 + 1));
    sushibeans = 0;
    sbps = 0;
    sbps_cost = 10;
    sbpsps = 0;
    sbpsps_cost = 500;
    document.getElementById("sushibeans").innerHTML = sushibeans;
    document.getElementById("sbps").innerHTML = sbps;
    document.getElementById("sbps_cost").innerHTML = sbps_cost;
    document.getElementById("sbpsps").innerHTML = sbpsps;
    document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost;
    document.getElementById("prestiges").innerHTML = prestiges;
    document.getElementById("potential_prestige").innerHTML = Math.round(Math.log10(sushibeans / 100 + 1));
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