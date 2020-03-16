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
var singularities = new Decimal(0)
var total_singularities = new Decimal(0)
var singularity_multiplier = 1
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
var sb_on = true
var prestige_on = true
var collapse_on = true
var cooldown = false
var waiting = false

var surpassed_infinity = false

var hoursLabel = document.getElementById("hours")
var minutesLabel = document.getElementById("minutes")
var secondsLabel = document.getElementById("seconds")
var totalSeconds = 0

var xx = document.getElementById("prestigediv")
xx.style.display = "none"
var xy = document.getElementById("maingame")
xy.style.display = "block"
var xz = document.getElementById("infinity")
xz.style.display = "none"
var xw = document.getElementById("singularity")
xw.style.display = "none"
var xv = document.getElementById("startingprestiges")
xv.style.display = "block"
var xu = document.getElementById("hotkey")
xu.style.display = "block"
var xt = document.getElementById("singularity_info")
xt.style.display = "none"
var xs = document.getElementById("wait")
xs.style.display = "none"
var xr = document.getElementById("switch1")
xr.style.display = "none"
var xq = document.getElementById("switch2")
xq.style.display = "none"
var xp = document.getElementById("switch3")
xp.style.display = "none"
var xo = document.getElementById("switch_text1")
xo.style.display = "none"
var xn = document.getElementById("switch_text2")
xn.style.display = "none"
var xm = document.getElementById("switch_text3")
xm.style.display = "none"
var xl = document.getElementById("singularity_special")
xl.style.display = "none"
var xk = document.getElementById("singularity_special2")
xk.style.display = "none"
var xi = document.getElementById("sushiverse")
xi.style.display = "none"

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
    singularities = singularities.add(singularity_multiplier)
    total_singularities = singularities.add(singularity_multiplier)
    prestiges = starting_prestiges
    sushibean = new Decimal(0)
    sbps = new Decimal(0)
    sbps_cost = 10
    sbpsps = new Decimal(0)
    sbpsps_cost = 500
    xy.style.display = "block"
    xz.style.display = "none"
    xw.style.display = "block"
    xt.style.display = "block"
  }
}

function increasepower() {
  if (singularities >= powercost) {
    singularities = singularities.subtract(powercost)
    powercost = powercost * 2
    power += 1
  }
}

function startingprestiges() {
  if (singularities >= starting_prestiges_next) {
    singularities = singularities.subtract(starting_prestiges_next)
    starting_prestiges = starting_prestiges_next
    starting_prestiges_next = starting_prestiges_next * 10
    if (starting_prestiges_next > 300) {
      xv.style.display = "none"
    }
  }
}

function prestige_hotkey() {
  if (singularities >= 10) {
    singularities = singularities.subtract(10)
    can_hotkey = true
    xu.style.display = "none"
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
       xx.style.display = "block"
    }
}

function infinitycheck() {
  if (surpassed_infinity == false) {
    if (sushibean > 1e+308) {
        hit_infinity = true
        xy.style.display = "none"
        xz.style.display = "block"
    }
  }
}

function sb_autoclicker() {
  if (singularities >= sb_autoclickercost) {
    singularities = singularities.subtract(sb_autoclickercost)
    sb_autoclickers += 1
    sb_autoclickercost = Math.round(sb_autoclickercost * 1.5)
    xr.style.display = "block"
    xo.style.display = "block"
  }
}

function sb_autoclick() {
  if (sb_autoclickers > 0) {
    if (sb_on == true) {
      if (waiting == false) {
        morebeans()
      }
    }
    setTimeout(sb_autoclick, 1000 / sb_autoclickers)
  }
  else {
    setTimeout(sb_autoclick, 10)
  }
}

function prestige_autoclicker() {
  if (singularities >= prestige_autoclickercost) {
    singularities = singularities.subtract(prestige_autoclickercost)
    prestige_autoclickers += 1
    prestige_autoclickercost = Math.round(prestige_autoclickercost * 1.5)
    xq.style.display = "block"
    xn.style.display = "block"
  }
}

function prestige_autoclick() {
  if (prestige_autoclickers > 0) {
    if (prestige_on == true) {
      if (waiting == false) {
        prestige()
      }
    }
    setTimeout(prestige_autoclick, 1000 / prestige_autoclickers)
  }
  else {
    setTimeout(prestige_autoclick, 10)
  }
}

function collapse_autoclicker() {
  if (singularities >= collapse_autoclickercost) {
    singularities = singularities.subtract(collapse_autoclickercost)
    collapse_autoclickers += 1
    collapse_autoclickercost = Math.round(collapse_autoclickercost * 1.5)
    xp.style.display = "block"
    xm.style.display = "block"
    xl.style.display = "block"
    xk.style.display = "block"
  }
}

function collapse_autoclick() {
  if (collapse_autoclickers > 0) {
    if (collapse_on == true) {
      if (waiting == false) {
        collapse()
      }
    }
    setTimeout(collapse_autoclick, 10000 / collapse_autoclickers)
  }
  else {
    setTimeout(collapse_autoclick, 10)
  }
}

function sb_onoff() {
    if (sb_on == true) {
      if (cooldown == false) {
        sb_on = false
        cooldown = true
        setTimeout(cooldown_off, 10)
        }
    }
    else {
      if (cooldown == false) {
        sb_on = true
        cooldown = true
        setTimeout(cooldown_off, 10)
      }
    }
}

function prestige_onoff() {
    if (prestige_on == true) {
      if (cooldown == false) {
        prestige_on = false
        cooldown = true
        setTimeout(cooldown_off, 10)
        }
    }
    else {
      if (cooldown == false) {
        prestige_on = true
        cooldown = true
        setTimeout(cooldown_off, 10)
      }
    }
}

function collapse_onoff() {
    if (collapse_on == true) {
      if (cooldown == false) {
        collapse_on = false
        cooldown = true
        setTimeout(cooldown_off, 10)
        }
    }
    else {
      if (cooldown == false) {
        collapse_on = true
        cooldown = true
        setTimeout(cooldown_off, 10)
      }
    }
}

function cooldown_off() {
  cooldown = false
}

function s_multiplier_hundred() {
  if (singularities >= 1000) {
    singularities = new Decimal(0)
    singularity_multiplier = 100
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
    
    xv.style.display = "block"
    xu.style.display = "block"
    xl.style.display = "none"
    xk.style.display = "none"
    xr.style.display = "none"
    xq.style.display = "none"
    xp.style.display = "none"
    xo.style.display = "none"
    xn.style.display = "none"
    xm.style.display = "none"
  }
}

function enter_sushiverse() {
  if (singularities >= 1000000) {
    waiting = true
    sushibean = new Decimal(0)
    hit_infinity = false
    xs.style.display = "block"
    xy.style.display = "none"
    xz.style.display = "none"
  }
}

function IDWTD() {
  xs.style.display = "none"
  waiting = false
  if (sushibean > 1e+308) {
    xz.style.display = "block"
  }
  else {
    xy.style.display = "block"
  }
}

function ready() {
  waiting = false
  xy.style.display = "block"
  xi.style.display = "block"
  xw.style.display = "none"
  xs.style.display = "none"
  surpassed_infinity = true
}

function getRandomColor() {
  var letters = '6789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}

function setRandomColor() {
  document.body.style.backgroundColor = ("background-color", getRandomColor())
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
      singularities = new Decimal(0)
      total_singularities = new Decimal(0)
      singularity_multiplier = 0
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
      sb_on = true
      prestige_on = true
      collapse_on = true
      
      totalSeconds = 0
      
      xw.style.display = "none"
      xx.style.display = "none"
      xt.style.display = "none"
      xr.style.display = "none"
      xq.style.display = "none"
      xp.style.display = "none"
      xo.style.display = "none"
      xn.style.display = "none"
      xm.style.display = "none"
    }
    else {
      alert("Thank goodness.")
    }
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = totalSeconds % 60;
  minutesLabel.innerHTML = parseInt(totalSeconds / 60) % 60;
  hoursLabel.innerHTML = parseInt(totalSeconds / 3600);
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
