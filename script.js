var sushibeans = new Decimal(0)
var clicks = 0
var sbps = 0
var sbps_cost = 10
var sbpsps = 0
var sbpsps_cost = 500
var potential_prestige = 0
var prestiges = 0
var multiplier = 1
var multiplier2 = 1
var singularities = 0
var total_singularities = 0
var power = 1
var powercost = 1
var starting_prestiges = 0
var starting_prestiges_next = 3

var minutesLabel = document.getElementById("minutes")
var secondsLabel = document.getElementById("seconds")
var totalSeconds = 0

var x = document.getElementById("prestigediv")
x.style.display = "none"
var y = document.getElementById("maingame")
y.style.display = "block"
var z = document.getElementById("infinity")
z.style.display = "none"
var w = document.getElementById("singularity")
w.style.display = "none"
var v = document.getElementById("startingprestiges")
v.style.display = "block"

function morebeans() {
  sushibeans += multiplier2
  clicks += 1
}

function moresbps() {
    if (sushibeans >= sbps_cost) {
        sushibeans -= sbps_cost
        sbps += multiplier2
        sbps_cost = Math.round(sbps_cost * 1.1)
    };
}


function moresbpsps() {
    if (sushibeans >= sbpsps_cost) {
        sushibeans -= sbpsps_cost
        sbpsps += multiplier2
        sbpsps_cost = Math.round(sbpsps_cost * 1.2)
    };
}

function prestige() {
  if (potential_prestige > 0) {
    prestiges += Math.round(Math.log2(sushibeans / 1000 + 1))
    sushibeans = 0
    sbps = 0
    sbps_cost = 10
    sbpsps = 0
    sbpsps_cost = 500
  }
}

function collapse() {
  singularities += 1
  total_singularities += 1
  prestiges = starting_prestiges
  sushibeans = 0
  sbps = 0
  sbps_cost = 10
  sbpsps = 0
  sbpsps_cost = 500
  y.style.display = "block"
  z.style.display = "none"
  w.style.display = "block"
}

function increasepower() {
  if (singularities >= powercost) {
    singularities -= powercost
    powercost = powercost * 2
    power += 1
  }
}

function startingprestiges() {
  if (singularities >= starting_prestiges_next) {
    singularities -= starting_prestiges_next
    starting_prestiges = starting_prestiges_next
    starting_prestiges_next = starting_prestiges_next * 10
    if (starting_prestiges_next > 300) {
      v.style.display = "none"
    }
  }
}







function update() {
  multiplier = Math.round(Math.pow(1.2, prestiges))
  multiplier2 = Math.round(Math.pow(multiplier, power))
  potential_prestige = Math.round(Math.log2(sushibeans / 1000 + 1))
  document.getElementById("sushibeans").innerHTML = sushibeans
  document.getElementById("clicks").innerHTML = clicks
  document.getElementById("sbps").innerHTML = sbps
  document.getElementById("sbps_cost").innerHTML = sbps_cost
  document.getElementById("sbpsps").innerHTML = sbpsps
  document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost
  document.getElementById("prestiges").innerHTML = prestiges
  document.getElementById("potential_prestige").innerHTML = potential_prestige
  document.getElementById("multiplier").innerHTML = multiplier2
  document.getElementById("singularities").innerHTML = singularities
  document.getElementById("total_singularities").innerHTML = total_singularities
  document.getElementById("power").innerHTML = power
  document.getElementById("powernext").innerHTML = power + 1
  document.getElementById("powercost").innerHTML = powercost
  document.getElementById("starting_prestiges_next").innerHTML = starting_prestiges_next
  document.getElementById("starting_prestiges_cost").innerHTML = starting_prestiges_next
}

function incrementSeconds() {
    sushibeans += sbps;
    document.getElementById("sushibeans").innerHTML = sushibeans
}

function incrementSeconds2() {
    sbps += sbpsps;
    document.getElementById("sbps").innerHTML = sbps
}

function prestigecheck() {
    if (potential_prestige > 0) {
        x.style.display = "block"
    }
}

function infinitycheck() {
    if (sushibeans >= 1e+308) {
        y.style.display = "none"
        z.style.display = "block"
    }
}






function hardreset() {
    if (confirm("Are you sure you want to hard reset? You will lose everything!")) {
      sushibeans = 0
      sbps = 0
      sbps_cost = 10
      sbpsps = 0
      sbpsps_cost = 500
      prestiges = 0
      singularities = 0
      total_singularities = 0
      power = 1
      powercost = 1
      starting_prestiges = 0
      starting_prestiges_next = 3
      
      totalSeconds = 0
      
      w.style.display = "none"
      x.style.display = "none"
    }
    else {
      alert("Thank goodness.")
    }
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = totalSeconds % 60;
  minutesLabel.innerHTML = parseInt(totalSeconds / 60);
}



setInterval(setTime, 1000)
setInterval(incrementSeconds, 1000)
setInterval(incrementSeconds2, 1000)
setInterval(prestigecheck, 100)
setInterval(infinitycheck, 10)
setInterval(update, 10)