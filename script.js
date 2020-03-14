/* global Decimal*/

var sushibean = new Decimal(0)
document.getElementById("sushibeans").innerHTML = sushibean

var clicks = 0
var sbps = new Decimal(0)
var sbps_cost = 10
var sbpsps = new Decimal(0)
var sbpsps_cost = 500
var potential_prestige = 0
var prestiges = 0
var multiplier = new Decimal(1)
var hit_infinity = false
var singularities = 0
var total_singularities = 0
var power = 1
var powercost = 1
var starting_prestiges = 0
var starting_prestiges_next = 3
var can_hotkey = false
var sb_autoclickers = 0
var sb_autoclickercost = 25
var prestige_autoclickers = 0
var prestige_autoclickercost = 50
var collapse_autoclickers = 0
var collapse_autoclickercost = 100

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
var u = document.getElementById("hotkey")
u.style.display = "block"
var t = document.getElementById("singularity_info")
t.style.display = "none"

function update() {
  if (multiplier < 1e+16) {
    multiplier = Math.round(Decimal.round(Decimal.pow(1.2, prestiges)).pow(power))
  }
  else {
    multiplier = Decimal.pow(1.2, prestiges).pow(power)
  }
  
  
  potential_prestige = Math.round(sushibean.divide(1000).add(1).log2(1))
  
  document.getElementById("sushibeans").innerHTML = sushibean
  document.getElementById("clicks").innerHTML = clicks
  document.getElementById("sbps").innerHTML = sbps
  document.getElementById("sbps_cost").innerHTML = sbps_cost
  document.getElementById("sbpsps").innerHTML = sbpsps
  document.getElementById("sbpsps_cost").innerHTML = sbpsps_cost
  document.getElementById("prestiges").innerHTML = prestiges
  document.getElementById("potential_prestige").innerHTML = potential_prestige
  document.getElementById("multiplier").innerHTML = multiplier
  document.getElementById("singularities").innerHTML = singularities
  document.getElementById("total_singularities").innerHTML = total_singularities
  document.getElementById("power").innerHTML = power
  document.getElementById("powernext").innerHTML = power + 1
  document.getElementById("powercost").innerHTML = powercost
  document.getElementById("starting_prestiges_next").innerHTML = starting_prestiges_next
  document.getElementById("starting_prestiges_cost").innerHTML = starting_prestiges_next
  document.getElementById("sb_autoclickercost").innerHTML = sb_autoclickercost
  document.getElementById("sb_autoclickers").innerHTML = sb_autoclickers
  document.getElementById("prestige_autoclickercost").innerHTML = prestige_autoclickercost
  document.getElementById("prestige_autoclickers").innerHTML = prestige_autoclickers
  document.getElementById("collapse_autoclickercost").innerHTML = collapse_autoclickercost
  document.getElementById("collapse_autoclickers").innerHTML = collapse_autoclickers
  
}














function morebeans() {
  clicks += 1
  sushibean = sushibean.add(multiplier)
  document.getElementById("sushibeans").innerHTML = sushibean
}

function moresbps() {
    if (sushibean >= sbps_cost) {
        sushibean = sushibean.subtract(sbps_cost)
        sbps = sbps.add(multiplier)
        sbps_cost = Math.round(sbps_cost * 1.1)
    };
}


function moresbpsps() {
    if (sushibean >= sbpsps_cost) {
        sushibean = sushibean.subtract(sbpsps_cost)
        sbpsps = sbpsps.add(multiplier)
        sbpsps_cost = Math.round(sbpsps_cost * 1.2)
    };
}

function prestige() {
  if (potential_prestige > 0) {
    prestiges += Math.round(sushibean.divide(1000).add(1).log2(1))
    sushibean = new Decimal(0)
    sbps = new Decimal(0)
    sbps_cost = 10
    sbpsps = new Decimal(0)
    sbpsps_cost = 500
  }
}

function collapse() {
  if (hit_infinity == true) {
    hit_infinity = false
    singularities += 1
    total_singularities += 1
    prestiges = starting_prestiges
    sushibean = new Decimal(0)
    sbps = new Decimal(0)
    sbps_cost = 10
    sbpsps = new Decimal(0)
    sbpsps_cost = 500
    y.style.display = "block"
    z.style.display = "none"
    w.style.display = "block"
    t.style.display = "block"
  }
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

function prestige_hotkey() {
  if (singularities >= 10) {
    singularities -= 10
    can_hotkey = true
    u.style.display = "none"
  }
}

document.onkeypress = function (e) {
  if (can_hotkey == true) {
    prestige()
  }
}

function incrementSeconds() {
    sushibean = sushibean.add(sbps)
}

function incrementSeconds2() {
    sbps = sbps.add(sbpsps)
}

function prestigecheck() {
    if (potential_prestige > 0) {
        x.style.display = "block"
    }
}

function infinitycheck() {
    if (sushibean > 1e+308) {
        hit_infinity = true
        y.style.display = "none"
        z.style.display = "block"
    }
}

function sb_autoclicker() {
  if (singularities >= sb_autoclickercost) {
    singularities -= sb_autoclickercost
    sb_autoclickers += 1
    sb_autoclickercost = Math.round(sb_autoclickercost * 1.5)
  }
}

function sb_autoclick() {
  if (sb_autoclickers > 0) {
    morebeans()
    setTimeout(sb_autoclick, 1000 / sb_autoclickers)
  }
  else {
    setTimeout(sb_autoclick, 10)
  }
}

function prestige_autoclicker() {
  if (singularities >= prestige_autoclickercost) {
    singularities -= prestige_autoclickercost
    prestige_autoclickers += 1
    prestige_autoclickercost = Math.round(prestige_autoclickercost * 1.5)
  }
}

function prestige_autoclick() {
  if (prestige_autoclickers > 0) {
    prestige()
    setTimeout(prestige_autoclick, 1000 / prestige_autoclickers)
  }
  else {
    setTimeout(prestige_autoclick, 10)
  }
}

function collapse_autoclicker() {
  if (singularities >= collapse_autoclickercost) {
    singularities -= collapse_autoclickercost
    collapse_autoclickers += 1
    collapse_autoclickercost = Math.round(collapse_autoclickercost * 1.5)
  }
}

function collapse_autoclick() {
  if (collapse_autoclickers > 0) {
    collapse()
    setTimeout(collapse_autoclick, 10000 / collapse_autoclickers)
  }
  else {
    setTimeout(collapse_autoclick, 10)
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  document.body.style.backgroundColor = ("background-color", getRandomColor())
  $("#maingame").css("background-color", getRandomColor())
}














function hardreset() {
    if (confirm("Are you sure you want to hard reset? You will lose everything!")) {
      sushibean = new Decimal(0)
      clicks = 0
      sbps = new Decimal(0)
      sbps_cost = 10
      sbpsps = new Decimal(0)
      sbpsps_cost = 500
      prestiges = 0
      singularities = 0
      total_singularities = 0
      power = 1
      powercost = 1
      starting_prestiges = 0
      starting_prestiges_next = 3
      can_hotkey = false
      sb_autoclickers = 0
      sb_autoclickercost = 25
      prestige_autoclickers = 0
      prestige_autoclickercost = 50
      collapse_autoclickers = 0
      collapse_autoclickercost = 100
      
      totalSeconds = 0
      
      w.style.display = "none"
      x.style.display = "none"
      t.style.display = "none"
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
setTimeout(sb_autoclick, 10)
setTimeout(prestige_autoclick, 10)
setTimeout(collapse_autoclick, 10)
