/* global Decimal*/

let game

function reset() {
  game = {
    sushibean: new Decimal(0),
    clicks: 0,
    sbps: new Decimal(0),
    sbps_cost: 10,
    sbpsps: new Decimal(0),
    sbpsps_cost: 500,
    potential_prestige: 0,
    prestiges: 0,
    multiplier: new Decimal(1),
    hit_infinity: false,
    singularities: new Decimal(0),
    total_singularities: new Decimal(0),
    singularity_multiplier: 1,
    power: 1,
    powercost: 1,
    starting_prestiges: 0,
    starting_prestiges_next:3,
    can_hotkey: false,
    sb_autoclickers: 0,
    sb_autoclickercost: 25,
    prestige_autoclickers: 0,
    prestige_autoclickercost: 50,
    collapse_autoclickers: 0,
    collapse_autoclickercost: 100,
    sb_on: true,
    prestige_on: true,
    collapse_on: true,
    cooldown: false,
    waiting: false,

    surpassed_infinity: false,

    hoursLabel: document.getElementById("hours"),
    minutesLabel: document.getElementById("minutes"),
    secondsLabel: document.getElementById("seconds"),
    totalSeconds: 0,
   }  
  
  document.getElementById("prestigediv").style.display = "none"
  document.getElementById("maingame").style.display = "block"
  document.getElementById("infinity").style.display = "none"
  document.getElementById("singularity").style.display = "none"
  document.getElementById("startingprestiges").style.display = "block"
  document.getElementById("hotkey").style.display = "block"
  document.getElementById("singularity_info").style.display = "none"
  document.getElementById("wait").style.display = "none"
  document.getElementById("switch1").style.display = "none"
  document.getElementById("switch2").style.display = "none"
  document.getElementById("switch3").style.display = "none"
  document.getElementById("switch_text1").style.display = "none"
  document.getElementById("switch_text2").style.display = "none"
  document.getElementById("switch_text3").style.display = "none"
  document.getElementById("singularity_special").style.display = "none"
  document.getElementById("singularity_special2").style.display = "none"
  document.getElementById("sushiverse").style.display = "none"
  
  document.body.style.backgroundColor = "#f0e7d8"
}

reset()

function update() {
  if (game.multiplier < 1e+16) {
    game.multiplier = Math.round(Decimal.round(Decimal.pow(1.2, game.prestiges)).pow(game.power))
  }
  else {
    game.multiplier = Decimal.pow(1.2, game.prestiges).pow(game.power)
  }
  
  
  game.potential_prestige = Math.round(game.sushibean.divide(1000).add(1).log2(1))
  
  document.getElementById("sushibeans").innerHTML = game.sushibean
  document.getElementById("clicks").innerHTML = game.clicks
  document.getElementById("sbps").innerHTML = game.sbps
  document.getElementById("sbps_cost").innerHTML = game.sbps_cost
  document.getElementById("sbpsps").innerHTML = game.sbpsps
  document.getElementById("sbpsps_cost").innerHTML = game.sbpsps_cost
  document.getElementById("prestiges").innerHTML = game.prestiges
  document.getElementById("potential_prestige").innerHTML = game.potential_prestige
  document.getElementById("multiplier").innerHTML = game.multiplier
  document.getElementById("singularities").innerHTML = game.singularities
  document.getElementById("total_singularities").innerHTML = game.total_singularities
  document.getElementById("power").innerHTML = game.power
  document.getElementById("powernext").innerHTML = game.power + 1
  document.getElementById("powercost").innerHTML = game.powercost
  document.getElementById("starting_prestiges_next").innerHTML = game.starting_prestiges_next
  document.getElementById("starting_prestiges_cost").innerHTML = game.starting_prestiges_next
  document.getElementById("sb_autoclickercost").innerHTML = game.sb_autoclickercost
  document.getElementById("sb_autoclickers").innerHTML = game.sb_autoclickers
  document.getElementById("prestige_autoclickercost").innerHTML = game.prestige_autoclickercost
  document.getElementById("prestige_autoclickers").innerHTML = game.prestige_autoclickers
  document.getElementById("collapse_autoclickercost").innerHTML = game.collapse_autoclickercost
  document.getElementById("collapse_autoclickers").innerHTML = game.collapse_autoclickers
  
}














function morebeans() {
  game.clicks += 1
  game.sushibean = game.sushibean.add(game.multiplier)
  document.getElementById("sushibeans").innerHTML = game.sushibean
}

function moresbps() {
    if (game.sushibean >= game.sbps_cost) {
        game.sushibean = game.sushibean.subtract(game.sbps_cost)
        game.sbps = game.sbps.add(game.multiplier)
        game.sbps_cost = Math.round(game.sbps_cost * 1.1)
    };
}


function moresbpsps() {
    if (game.sushibean >= game.sbpsps_cost) {
        game.sushibean = game.sushibean.subtract(game.sbpsps_cost)
        game.sbpsps = game.sbpsps.add(game.multiplier)
        game.sbpsps_cost = Math.round(game.sbpsps_cost * 1.2)
    };
}

function prestige() {
  if (game.potential_prestige > 0) {
    game.prestiges += Math.round(game.sushibean.divide(1000).add(1).log2(1))
    game.sushibean = new Decimal(0)
    game.sbps = new Decimal(0)
    game.sbps_cost = 10
    game.sbpsps = new Decimal(0)
    game.sbpsps_cost = 500
  }
}

function collapse() {
  if (game.hit_infinity == true) {
    game.hit_infinity = false
    game.singularities = game.singularities.add(game.singularity_multiplier)
    game.total_singularities = game.singularities.add(game.singularity_multiplier)
    game.prestiges = game.starting_prestiges
    game.sushibean = new Decimal(0)
    game.sbps = new Decimal(0)
    game.sbps_cost = 10
    game.sbpsps = new Decimal(0)
    game.sbpsps_cost = 500
    document.getElementById("maingame").style.display = "block"
    document.getElementById("infinity").style.display = "none"
    document.getElementById("singularity").style.display = "block"
    document.getElementById("singularity_info").style.display = "block"
  }
}

function increasepower() {
  if (game.singularities >= game.powercost) {
    game.singularities = game.singularities.subtract(game.powercost)
    game.powercost = game.powercost * 2
    game.power += 1
  }
}

function startingprestiges() {
  if (game.singularities >= game.starting_prestiges_next) {
    game.singularities = game.singularities.subtract(game.starting_prestiges_next)
    game.starting_prestiges = game.starting_prestiges_next
    game.starting_prestiges_next = game.starting_prestiges_next * 10
    if (game.starting_prestiges_next > 300) {
      document.getElementById("startingprestiges").style.display = "none"
    }
  }
}

function prestige_hotkey() {
  if (game.singularities >= 10) {
    game.singularities = game.singularities.subtract(10)
    game.can_hotkey = true
    document.getElementById("hotkey").style.display = "none"
  }
}

document.onkeypress = function (e) {
  if (game.can_hotkey == true) {
    prestige()
  }
}

function incrementSeconds() {
    game.sushibean = game.sushibean.add(game.sbps)
}

function incrementSeconds2() {
    game.sbps = game.sbps.add(game.sbpsps)
}

function prestigecheck() {
    if (game.potential_prestige > 0) {
       document.getElementById("prestigediv").style.display = "block"
    }
}

function infinitycheck() {
  if (game.surpassed_infinity == false) {
    if (game.sushibean > 1e+308) {
        game.hit_infinity = true
        document.getElementById("maingame").style.display = "none"
        document.getElementById("infinity").style.display = "block"
    }
  }
}

function sb_autoclicker() {
  if (game.singularities >= game.sb_autoclickercost) {
    game.singularities = game.singularities.subtract(game.sb_autoclickercost)
    game.sb_autoclickers += 1
    game.sb_autoclickercost = Math.round(game.sb_autoclickercost * 1.5)
    document.getElementById("switch1").style.display = "block"
    document.getElementById("switch_text1").style.display = "block"
  }
}

function sb_autoclick() {
  if (game.sb_autoclickers > 0) {
    if (game.sb_on == true) {
      if (game.waiting == false) {
        morebeans()
      }
    }
    setTimeout(sb_autoclick, 1000 / game.sb_autoclickers)
  }
  else {
    setTimeout(sb_autoclick, 10)
  }
}

function prestige_autoclicker() {
  if (game.singularities >= game.prestige_autoclickercost) {
    game.singularities = game.singularities.subtract(game.prestige_autoclickercost)
    game.prestige_autoclickers += 1
    game.prestige_autoclickercost = Math.round(game.prestige_autoclickercost * 1.5)
    document.getElementById("switch2").style.display = "block"
    document.getElementById("switch_text2").style.display = "block"
  }
}

function prestige_autoclick() {
  if (game.prestige_autoclickers > 0) {
    if (game.prestige_on == true) {
      if (game.waiting == false) {
        prestige()
      }
    }
    setTimeout(prestige_autoclick, 1000 / game.prestige_autoclickers)
  }
  else {
    setTimeout(prestige_autoclick, 10)
  }
}

function collapse_autoclicker() {
  if (game.singularities >= game.collapse_autoclickercost) {
    game.singularities = game.singularities.subtract(game.collapse_autoclickercost)
    game.collapse_autoclickers += 1
    game.collapse_autoclickercost = Math.round(game.collapse_autoclickercost * 1.5)
    document.getElementById("switch3").style.display = "block"
    document.getElementById("switch_text3").style.display = "block"
    if (game.singularity_multiplier == 1) {
      document.getElementById("singularity_special").style.display = "block"
    }
    document.getElementById("singularity_special2").style.display = "block"
  }
}

function collapse_autoclick() {
  if (game.collapse_autoclickers > 0) {
    if (game.collapse_on == true) {
      if (game.waiting == false) {
        collapse()
      }
    }
    setTimeout(collapse_autoclick, 10000 / game.collapse_autoclickers)
  }
  else {
    setTimeout(collapse_autoclick, 10)
  }
}

function sb_onoff() {
    if (game.sb_on == true) {
      if (game.cooldown == false) {
        game.sb_on = false
        game.cooldown = true
        setTimeout(cooldown_off, 10)
        }
    }
    else {
      if (game.cooldown == false) {
        game.sb_on = true
        game.cooldown = true
        setTimeout(cooldown_off, 10)
      }
    }
}

function prestige_onoff() {
    if (game.prestige_on == true) {
      if (game.cooldown == false) {
        game.prestige_on = false
        game.cooldown = true
        setTimeout(cooldown_off, 10)
        }
    }
    else {
      if (game.cooldown == false) {
        game.prestige_on = true
        game.cooldown = true
        setTimeout(cooldown_off, 10)
      }
    }
}

function collapse_onoff() {
    if (game.collapse_on == true) {
      if (game.cooldown == false) {
        game.collapse_on = false
        game.cooldown = true
        setTimeout(cooldown_off, 10)
        }
    }
    else {
      if (game.cooldown == false) {
        game.collapse_on = true
        game.cooldown = true
        setTimeout(cooldown_off, 10)
      }
    }
}

function cooldown_off() {
  game.cooldown = false
}

function s_multiplier_hundred() {
  if (game.singularities >= 1000) {
    game.singularities = new Decimal(0)
    game.singularity_multiplier = 100
    game.power = 1
    game.powercost = 1
    game.starting_prestiges = 0
    game.starting_prestiges_next = 3
    game.can_hotkey = false
    game.sb_autoclickers = 0
    game.sb_autoclickercost = 25
    game.prestige_autoclickers = 0
    game.prestige_autoclickercost = 50
    game.collapse_autoclickers = 0
    game.collapse_autoclickercost = 100
    
    document.getElementById("startingprestiges").style.display = "block"
    document.getElementById("hotkey").style.display = "block"
    document.getElementById("singularity_special").style.display = "none"
    document.getElementById("singularity_special2").style.display = "none"
    document.getElementById("switch1").style.display = "none"
    document.getElementById("switch2").style.display = "none"
    document.getElementById("switch3").style.display = "none"
    document.getElementById("switch_text1").style.display = "none"
    document.getElementById("switch_text2").style.display = "none"
    document.getElementById("switch_text3").style.display = "none"
  }
}

function enter_sushiverse() {
  if (game.singularities >= 1000000) {
    game.waiting = true
    game.sushibean = new Decimal(0)
    game.hit_infinity = false
    document.getElementById("wait").style.display = "block"
    document.getElementById("maingame").style.display = "none"
    document.getElementById("infinity").style.display = "none"
  }
}

function IDWTD() {
  document.getElementById("wait").style.display = "none"
  game.waiting = false
  if (game.sushibean > 1e+308) {
    document.getElementById("infinity").style.display = "block"
  }
  else {
    document.getElementById("maingame").style.display = "block"
  }
}

function ready() {
  game.waiting = false
  document.getElementById("maingame").style.display = "block"
  document.getElementById("sushiverse").style.display = "block"
  document.getElementById("singularity").style.display = "none"
  document.getElementById("wait").style.display = "none"
  game.surpassed_infinity = true
  document.body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/005/829/317/large/devin-hansen-astrum-nebula-zoom2.jpg?1494052070')"
  game.sb_autoclickers = 100
  game.prestige_autoclickers = 100
  game.collapse_autoclickers = 0
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
      reset()
    }
    else {
      alert("Thank goodness.")
    }
}

function setTime() {
  ++game.totalSeconds;
  game.secondsLabel.innerHTML = game.totalSeconds % 60;
  game.minutesLabel.innerHTML = parseInt(game.totalSeconds / 60) % 60;
  game.hoursLabel.innerHTML = parseInt(game.totalSeconds / 3600);
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
