var sushibeans = 3000;
var sbps = 0;
var sbps_cost = 10;
var sbpsps = 0;
var sbpsps_cost = 500;
var potential_prestige = 0;
var prestiges = 0;

var x = document.getElementById("prestigediv")
x.style.display = "none"

function morebeans() {
    sushibeans += Math.round(Math.pow(1.2, prestiges));
};

function moresbps() {
    if (sushibeans >= sbps_cost) {
        sushibeans -= sbps_cost;
        sbps += Math.round(Math.pow(1.2, prestiges));
        sbps_cost = Math.round(sbps_cost * 1.1);
    };
};


function moresbpsps() {
    if (sushibeans >= sbpsps_cost) {
        sushibeans -= sbpsps_cost;
        sbpsps += Math.round(Math.pow(1.2, prestiges));
        sbpsps_cost = Math.round(sbpsps_cost * 1.2);
    };
};

function prestige() {
  if (Math.round(Math.log(sushibeans / 1000 + 1)) > 0) {
    prestiges += Math.round(Math.log(sushibeans / 1000 + 1));
    sushibeans = 0;
    sbps = 0;
    sbps_cost = 10;
    sbpsps = 0;
    sbpsps_cost = 500;
  }
}

function update() {
  document.getElementById("sushibeans").innerHTML = sushibeans;
  document.getElementById("sbps").innerHTML = sbps;
  document.getElementById("sbps_cost").innerHTML = sbps_cost;
  document.getElementById("sbpsps").innerHTML = sbpsps;
  document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost;
  document.getElementById("prestiges").innerHTML = prestiges;
  document.getElementById("potential_prestige").innerHTML = Math.round(Math.log(sushibeans / 1000 + 1));
  document.getElementById("multiplier").innerHTML = Math.round(Math.pow(1.2, prestiges));
}

function incrementSeconds() {
    sushibeans += sbps;
    document.getElementById("sushibeans").innerHTML = sushibeans;
}

function incrementSeconds2() {
    sbps += sbpsps;
    document.getElementById("sbps").innerHTML = sbps;
}

function prestigecheck() {
    if (potential_prestige > 0) {
        x.style.display = "block"
    }
}

function hardreset() {
    if (confirm("Are you sure you want to hard reset? You will lose everything!")) {
        sushibeans = 0;
        sbps = 0;
        sbps_cost = 10;
        sbpsps = 0;
        sbpsps_cost = 500;
        prestiges = 0;
    }
    else {
        alert("Thank goodness.")
    }
}

var cancel = setInterval(incrementSeconds, 1000);
var cancel = setInterval(incrementSeconds2, 1000);
var cancel = setInterval(prestigecheck, 100);
var cancel = setInterval(update, 10);