/* global Decimal*/
/* global Mousetrap*/

let game

function reset() {
  game = {
    sushibean: new Decimal(0),
    clicks: 0,
    sbps: new Decimal(0),
    sbps_cost: 10,
    sbpsps: new Decimal(0),
    sbpsps_cost: 500,
    potential_prestige: new Decimal(0),
    prestiges: new Decimal(0),
    potential_multiplier: new Decimal(0),
    multiplier: new Decimal(1),
    hit_infinity: false,
    
    singularities: new Decimal(0),
    total_singularities: new Decimal(0),
    singularity_multiplier: 1,
    power: new Decimal(1),
    powercost: 1,
    starting_prestiges: 0,
    starting_prestiges_next: 3,
    can_hotkey: false,
    sb_autoclickers: 0,
    sb_autoclickercost: 20,
    prestige_autoclickers: 0,
    prestige_autoclickercost: 40,
    collapse_autoclickers: 0,
    collapse_autoclickercost: 80,
    sb_on: true,
    prestige_on: true,
    collapse_on: true,
    cooldown: false,
    waiting: false,

    surpassed_infinity: false,
    heavenly_bought: false,
    dice_size: 6,
    roll_countdown: 0,
    prestige_boost_cost: new Decimal("ee500"),
    power_doubling: false,
    
    entered_omniverse: false,
    power_power: 1,
    power_power_cost: new Decimal("eee500"),
    tetrating: false,
    tetrate_power: 2,
    tetrate_power_cost: new Decimal("(e^100)100"),
    done: false,

    hoursLabel: document.getElementById("hours"),
    minutesLabel: document.getElementById("minutes"),
    secondsLabel: document.getElementById("seconds"),
    hoursLabel2: document.getElementById("hours2"),
    minutesLabel2: document.getElementById("minutes2"),
    secondsLabel2: document.getElementById("seconds2"),
    totalSeconds: 0,
    
    is_firstgame: true,
   }  
  
  document.getElementById("options").style.background = "rgba(0, 0, 0, 0.2)"
  document.body.style.backgroundImage = "url('')"
  document.getElementById("prestigediv").style.display = "none"
  document.getElementById("options").style.display = "block"
  document.getElementById("sbps_and_sbpsps").style.display = "block"
  document.getElementById("maingame").style.display = "block"
  document.getElementById("infinity").style.display = "none"
  document.getElementById("singularity").style.display = "none"
  document.getElementById("startingprestiges").style.display = "block"
  document.getElementById("hotkey").style.display = "block"
  document.getElementById("singularity_info").style.display = "none"
  document.getElementById("random_color").style.display = "block"
  document.getElementById("boring_beige").style.display = "block"
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
  document.getElementById("heavenly_buy").style.display = "block"
  document.getElementById("heavenly_dice_div").style.display = "none"
  document.getElementById("upgrade_dice").style.display = "none"
  document.getElementById("power_double").style.display = "block"
  document.getElementById("omniverse").style.display = "none"
  document.getElementById("omniverse_sushibeans").style.display = "none"
  document.getElementById("omniverse_sushibeans_fake").style.display = "none"
  document.getElementById("upgrade_tetrating").style.display = "none"
  document.getElementById("finish_div").style.opacity = "0"
  document.getElementById("finish_info").style.display = "none"
  document.getElementById("finish_div").style.width = "0%"
  document.getElementById("finish_div").style.height = "0%"
  
  document.body.style.backgroundColor = "#f0e7d8"
}

reset()
console.log("I see you cheating in the console, you slimy bastard. Don't be a butt!")

function exporty() {
  prompt("Copy and paste this save somewhere!",btoa(JSON.stringify(game)))
}

function importy() {
  let loadgame=""
  loadgame=JSON.parse(atob(prompt("Paste in your save here!")))
  if (loadgame != "" && loadgame != null) {
    loadGame(loadgame)
  }
}


function save() {
  localStorage.setItem("SushibeansSave", JSON.stringify(game))
  localStorage.setItem("BackColor", document.body.style.backgroundColor)
}

function load() {
  let loadgame = JSON.parse(localStorage.getItem("SushibeansSave"))
  if (loadgame != null) {
    loadGame(loadgame)
  }
}

function loadGame(loadgame) {
  reset()
  if (typeof loadgame.sushibean != "undefined") game.sushibean = new Decimal(loadgame.sushibean)
  if (typeof loadgame.clicks != "undefined") game.clicks = loadgame.clicks
  if (typeof loadgame.sbps != "undefined") game.sbps = new Decimal(loadgame.sbps)
  if (typeof loadgame.sbps_cost != "undefined") game.sbps_cost = loadgame.sbps_cost
  if (typeof loadgame.sbpsps != "undefined") game.sbpsps = new Decimal(loadgame.sbpsps)
  if (typeof loadgame.sbpsps_cost != "undefined") game.sbpsps_cost = loadgame.sbpsps_cost
  if (typeof loadgame.potential_prestige != "undefined") game.potential_prestige = new Decimal(loadgame.potential_prestige)
  if (typeof loadgame.prestiges != "undefined") game.prestiges = new Decimal(loadgame.prestiges)
  if (typeof loadgame.potential_multiplier != "undefined") game.potential_multiplier = new Decimal(loadgame.potential_multiplier)
  if (typeof loadgame.multiplier != "undefined") game.multiplier = new Decimal(loadgame.multiplier)
  if (typeof loadgame.hit_infinity != "undefined") game.hit_infinity = loadgame.hit_infinity
  if (typeof loadgame.singularities != "undefined") game.singularities = new Decimal(loadgame.singularities)
  if (typeof loadgame.total_singularities != "undefined") game.total_singularities = new Decimal(loadgame.total_singularities)
  if (typeof loadgame.singularity_multiplier != "undefined") game.singularity_multiplier = loadgame.singularity_multiplier
  if (typeof loadgame.power != "undefined") game.power = new Decimal(loadgame.power)
  if (typeof loadgame.powercost != "undefined") game.powercost = loadgame.powercost
  if (typeof loadgame.starting_prestiges != "undefined") game.starting_prestiges = loadgame.starting_prestiges
  if (typeof loadgame.starting_prestiges_next != "undefined") game.starting_prestiges_next = loadgame.starting_prestiges_next
  if (typeof loadgame.can_hotkey != "undefined") game.can_hotkey = loadgame.can_hotkey
  if (typeof loadgame.sb_autoclickers != "undefined") game.sb_autoclickers = loadgame.sb_autoclickers
  if (typeof loadgame.sb_autoclickercost != "undefined") game.sb_autoclickercost = loadgame.sb_autoclickercost
  if (typeof loadgame.prestige_autoclickers != "undefined") game.prestige_autoclickers = loadgame.prestige_autoclickers
  if (typeof loadgame.prestige_autoclickercost != "undefined") game.prestige_autoclickercost = loadgame.prestige_autoclickercost
  if (typeof loadgame.collapse_autoclickers != "undefined") game.collapse_autoclickers = loadgame.collapse_autoclickers
  if (typeof loadgame.collapse_autoclickercost != "undefined") game.collapse_autoclickercost = loadgame.collapse_autoclickercost
  if (typeof loadgame.sb_on != "undefined") game.sb_on = true
  if (typeof loadgame.prestige_on != "undefined") game.prestige_on = true
  if (typeof loadgame.collapse_on != "undefined") game.collapse_on = true
  if (typeof loadgame.cooldown != "undefined") game.cooldown = loadgame.cooldown
  if (typeof loadgame.waiting != "undefined") game.waiting = loadgame.waiting
  if (typeof loadgame.surpassed_infinity != "undefined") game.surpassed_infinity = loadgame.surpassed_infinity
  if (typeof loadgame.prestige_boost_cost != "undefined") game.prestige_boost_cost = new Decimal(loadgame.prestige_boost_cost)
  if (typeof loadgame.heavenly_bought != "undefined") game.heavenly_bought = loadgame.heavenly_bought
  if (typeof loadgame.dice_size != "undefined") game.dice_size = loadgame.dice_size
  if (typeof loadgame.roll_countdown != "undefined") game.roll_countdown = loadgame.roll_countdown
  if (typeof loadgame.power_doubling != "undefined") game.power_doubling = loadgame.power_doubling
  if (typeof loadgame.totalSeconds != "undefined") game.totalSeconds = loadgame.totalSeconds
  if (typeof loadgame.entered_omniverse != "undefined") game.entered_omniverse = loadgame.entered_omniverse
  if (typeof loadgame.power_power != "undefined") game.power_power = loadgame.power_power
  if (typeof loadgame.power_power_cost != "undefined") game.power_power_cost = new Decimal(loadgame.power_power_cost)
  if (typeof loadgame.entered_omniverse != "undefined") game.entered_omniverse = loadgame.entered_omniverse
  if (typeof loadgame.tetrating != "undefined") game.tetrating = loadgame.tetrating
  if (typeof loadgame.tetrate_power != "undefined") game.tetrate_power = loadgame.tetrate_power
  if (typeof loadgame.tetrate_power_cost != "undefined") game.tetrate_power_cost = new Decimal(loadgame.tetrate_power_cost)
  if (game.sushibean == "(e^NaN)NaN") {
    reset()
  }
  

  
  if (game.entered_omniverse == true) {
    document.body.style.backgroundImage = "url('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/447850/6a21d0150328351028a4c27d083221453d76c5a4.jpg')"
    document.getElementById("options").style.background = "rgba(255, 255, 255, 0.3)"
    document.getElementById("omniverse").style.display = "block"
    document.getElementById("omniverse_sushibeans").style.display = "block"
    document.getElementById("maingame").style.display = "none"
    document.getElementById("prestigediv").style.display = "none"
    document.getElementById("singularity_info").style.display = "none"
    document.getElementById("switch1").style.display = "none"
    document.getElementById("switch2").style.display = "none"
    document.getElementById("switch3").style.display = "none"
    document.getElementById("switch_text1").style.display = "none"
    document.getElementById("switch_text2").style.display = "none"
    document.getElementById("switch_text3").style.display = "none"  
    document.getElementById("random_color").style.display = "none"
    document.getElementById("boring_beige").style.display = "none"
    game.sb_autoclickers = 0
    game.prestige_autoclickers = 0
    game.collapse_autoclickers = 0
    if (game.tetrating == true) {
      document.getElementById("power_power").style.display = "none"
      document.getElementById("begin_tetrating").style.display = "none"  
      document.getElementById("upgrade_tetrating").style.display = "block" 
    }
  }
  else if (game.surpassed_infinity == true) {
    document.body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/005/829/317/large/devin-hansen-astrum-nebula-zoom2.jpg?1494052070')"
    document.getElementById("sushiverse").style.display = "block"
    document.getElementById("switch1").style.display = "block"
    document.getElementById("switch_text1").style.display = "block"
    document.getElementById("switch2").style.display = "block"
    document.getElementById("switch_text2").style.display = "block"
    document.getElementById("switch3").style.display = "block"
    document.getElementById("switch_text3").style.display = "block"
    document.getElementById("singularity_info").style.display = "block"
    document.getElementById("sbps_and_sbpsps").style.display = "none"
    document.getElementById("random_color").style.display = "none"
    document.getElementById("boring_beige").style.display = "none"
    if (game.heavenly_bought == true) {
      document.getElementById("heavenly_buy").style.display = "none"
      document.getElementById("heavenly_dice_div").style.display = "block"
      document.getElementById("upgrade_dice").style.display = "block"
      if (game.dice_size != 6) {
        document.getElementById("upgrade_dice").style.display = "none"
      }
    }
    if (game.power_doubling == true) {
      document.getElementById("power_double").style.display = "none"
      setTimeout(double, 1000)
    }
  }
  else if (game.total_singularities != 0) {
    document.getElementById("singularity").style.display = "block"
    document.getElementById("singularity_info").style.display = "block"
    if (game.sb_autoclickers > 0) {
      document.getElementById("switch1").style.display = "block"
      document.getElementById("switch_text1").style.display = "block"
    }
    if (game.prestige_autoclickers > 0) {
      document.getElementById("switch2").style.display = "block"
      document.getElementById("switch_text2").style.display = "block"
    }
    if (game.collapse_autoclickers > 0) {
      document.getElementById("switch3").style.display = "block"
      document.getElementById("switch_text3").style.display = "block"
      document.getElementById("singularity_special2").style.display = "block"
      if (game.singularity_multiplier == 1) {
        document.getElementById("singularity_special").style.display = "block"
      }
    }
    if (game.starting_prestiges == 300) {
      document.getElementById("startingprestiges").style.display = "none"
    }
    if (game.can_hotkey == true) {
      document.getElementById("hotkey").style.display = "none"
    }
    if (game.singularity_multiplier == 100) {
      document.getElementById("startingprestiges").style.display = "none"
    }
  }
  
  if (game.prestiges != 0) {
    document.getElementById("prestigediv").style.display = "block"
  }
  else if (game.potential_prestige > 0) {
    document.getElementById("prestigediv").style.display = "block"
  }
  
  
  
  if (game.waiting == 1) {
    document.getElementById("wait").style.display = "block"
    document.getElementById("maingame").style.display = "none"
  }
  else if (game.hit_infinity == 1) {
    document.getElementById("infinity").style.display = "block"
    document.getElementById("maingame").style.display = "none"
  }
  else {
    document.getElementById("infinity").style.display = "none"
    document.getElementById("wait").style.display = "none"
  }
}


load()


function update() {
  if (game.multiplier < 1e+16) {
    game.multiplier = Math.round(Decimal.round(Decimal.pow(1.2, game.prestiges)).pow(game.power))
    game.potential_multiplier = Math.round(Decimal.round(Decimal.pow(1.2, (game.prestiges.add(game.potential_prestige)))).pow(game.power))
  }
  else {
    game.multiplier = Decimal.pow(1.2, game.prestiges).pow(game.power)
    game.potential_multiplier = Decimal.round(Decimal.pow(1.2, (game.prestiges.add(game.potential_prestige)))).pow(game.power)
  }
  
  if (game.prestiges < 1e+16) {
    game.potential_prestige = new Decimal(Math.round(game.sushibean.divide(1000).add(1).log2(1)))
  }
  else {
    game.potential_prestige = new Decimal(game.sushibean.divide(1000).add(1).log2(1))
  }
  
  if (game.entered_omniverse == true) {
    if (game.sushibean < 100) {
      game.sushibean = new Decimal("ee1500000")
    }
  }
  
  
  document.getElementById("sushibeans").innerHTML = game.sushibean
  document.getElementById("clicks").innerHTML = game.clicks
  document.getElementById("sbps").innerHTML = game.sbps
  document.getElementById("sbps_cost").innerHTML = game.sbps_cost
  document.getElementById("sbpsps").innerHTML = game.sbpsps
  document.getElementById("sbpsps_cost").innerHTML = game.sbpsps_cost
  document.getElementById("prestiges").innerHTML = game.prestiges
  document.getElementById("potential_prestige").innerHTML = game.potential_prestige
  document.getElementById("potential_multiplier").innerHTML = game.potential_multiplier
  document.getElementById("multiplier").innerHTML = game.multiplier
  document.getElementById("singularities").innerHTML = game.singularities
  document.getElementById("total_singularities").innerHTML = game.total_singularities
  document.getElementById("power").innerHTML = game.power
  document.getElementById("power2").innerHTML = game.power
  document.getElementById("powernext").innerHTML = game.power.add(1)
  document.getElementById("powercost").innerHTML = game.powercost
  document.getElementById("starting_prestiges_next").innerHTML = game.starting_prestiges_next
  document.getElementById("starting_prestiges_cost").innerHTML = game.starting_prestiges_next
  document.getElementById("sb_autoclickercost").innerHTML = game.sb_autoclickercost
  document.getElementById("sb_autoclickers").innerHTML = game.sb_autoclickers
  document.getElementById("prestige_autoclickercost").innerHTML = game.prestige_autoclickercost
  document.getElementById("prestige_autoclickers").innerHTML = game.prestige_autoclickers
  document.getElementById("collapse_autoclickercost").innerHTML = game.collapse_autoclickercost
  document.getElementById("collapse_autoclickers").innerHTML = game.collapse_autoclickers
  document.getElementById("prestige_boost_cost").innerHTML = game.prestige_boost_cost
  document.getElementById("roll_countdown").innerHTML = game.roll_countdown
  document.getElementById("omni_sushibeans").innerHTML = game.sushibean
  document.getElementById("power_power_cost").innerHTML = game.power_power_cost
  document.getElementById("tetrate_power_cost").innerHTML = game.tetrate_power_cost
  
  if (game.surpassed_infinity == true) {
    document.getElementById("current_goal").innerHTML = "to get as many sushi beans as possible"
  }
  else if (game.collapse_autoclickers > 0) {
    document.getElementById("current_goal").innerHTML = "to enter the sushiverse"
  }
  else if (game.total_singularities > 0) {
    document.getElementById("current_goal").innerHTML = "to gain a 'collapse' autoclicker"
  }
  else {
    document.getElementById("current_goal").innerHTML = "to get infinity (10^308) sushi beans"
  }
  
  if (game.potential_prestige > 0) {
    document.getElementById("potential_text").style.display = "block"
    if (game.potential_multiplier == game.multiplier && game.potential_prestige > 0) {
      document.getElementById("prestige_hold_on").innerHTML = "Hold on! Prestiging now won't increase your multiplier. Try saving up some sushi beans!"
    }
    else {
      document.getElementById("prestige_hold_on").innerHTML = ""
    }
  }
  else {
    document.getElementById("potential_text").style.display = "none"
  }
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
    if (game.prestiges < 1e+16) {
      game.prestiges = game.prestiges.add(Math.round(game.sushibean.divide(1000).add(1).log2(1)))
    }
    else {
      game.prestiges = game.prestiges.add(game.sushibean.divide(1000).add(1).log2(1))
    }
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
    game.total_singularities = game.total_singularities.add(game.singularity_multiplier)
    game.prestiges = new Decimal(game.starting_prestiges)
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
    game.power = game.power.add(1)
  }
}

function startingprestiges() {
  if (game.singularities >= game.starting_prestiges_next) {
    game.singularities = game.singularities.subtract(game.starting_prestiges_next)
    game.prestiges = game.prestiges.add(game.starting_prestiges_next)
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


Mousetrap.bind('p', pressed_p)

Mousetrap.bind('ctrl+shift+f', froggy_chair)

function pressed_p() {
  if (game.can_hotkey == true) {
    prestige()
  }
}

function froggy_chair() {
  document.body.style.backgroundImage = "url('https://cdn.glitch.com/fa454442-2598-4fa6-a6d3-fc753ba7666a%2Ffroggy_chair.jpg?v=1584847827810')"
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
    if (game.sushibean > 1e+308 || Decimal.max(game.sushibean, "1e308") == game.sushibean) {
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
    if (game.singularity_multiplier != 100) {
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
    game.power = new Decimal(1)
    game.powercost = 1
    game.starting_prestiges = 0
    game.starting_prestiges_next = 3
    game.can_hotkey = false
    game.sb_autoclickers = 0
    game.sb_autoclickercost = 20
    game.prestige_autoclickers = 0
    game.prestige_autoclickercost = 40
    game.collapse_autoclickers = 0
    game.collapse_autoclickercost = 80
    
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
  if (game.singularities >= 500000) {
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
  document.getElementById("random_color").style.display = "none"
  document.getElementById("boring_beige").style.display = "none"
  document.getElementById("wait").style.display = "none"
  document.getElementById("switch1").style.display = "block"
  document.getElementById("switch_text1").style.display = "block"
  document.getElementById("switch2").style.display = "block"
  document.getElementById("switch_text2").style.display = "block"
  document.getElementById("switch3").style.display = "block"
  document.getElementById("switch_text3").style.display = "block"
  game.surpassed_infinity = true
  document.body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/005/829/317/large/devin-hansen-astrum-nebula-zoom2.jpg?1494052070')"
  game.sb_autoclickers = 10
  game.prestige_autoclickers = 10
  game.collapse_autoclickers = 0
  game.power = new Decimal(100)
  document.getElementById("sbps_and_sbpsps").style.display = "none"
}

function prestige_boost() {
  if (Decimal.max(game.multiplier, game.prestige_boost_cost) == game.multiplier) {
    game.prestige_boost_cost = game.prestige_boost_cost.pow(game.prestige_boost_cost.log10())
    var prestige_boost_temp = game.prestiges.mag
    game.prestiges.mag = prestige_boost_temp * 1.2
  }
}

function heavenly_buy() {
  if (Decimal.max(game.multiplier, "ee2000") == game.multiplier) {
    game.heavenly_bought = true
    document.getElementById("heavenly_buy").style.display = "none"
    document.getElementById("heavenly_dice_div").style.display = "block"
    document.getElementById("upgrade_dice").style.display = "block"
  }
}

function upgrade_dice() {
  if (Decimal.max(game.multiplier, "ee100000") == game.multiplier) {
    game.heavenly_bought = true
    document.getElementById("upgrade_dice").style.display = "none"
    game.dice_size = 1000
    game.roll_countdown = 0
  }
}

function roll() {
  if (game.roll_countdown == 0) {
    var dice_value = Math.ceil(Math.random() * game.dice_size)
    document.getElementById("roll_value").innerHTML = dice_value
    game.power = game.power.mul(dice_value)
    if (game.dice_size == 6) {
      game.roll_countdown = 180
    }
    else {
      game.roll_countdown = 60
    }
    setTimeout(roll_count, 1000)
  }
}

function roll_count() {
  if (game.roll_countdown > 0) {
    game.roll_countdown -= 1
    setTimeout(roll_count, 1000)
  }
}

roll_count()

function power_double() {
  if (Decimal.max(game.multiplier, "ee250000") == game.multiplier) {
    game.power_doubling = true
    document.getElementById("power_double").style.display = "none"
    setTimeout(double, 1000)
  }
}

function double() {
  if (game.power_doubling == true) {
    game.power = game.power.multiply(2)
    setTimeout(double, 1000)
  }
}

function enter_omniverse() {
  if (Decimal.max(game.multiplier, "ee1500000") == game.multiplier) {
    game.sushibean = new Decimal(game.multiplier)
    document.getElementById("options").style.background = "rgba(255, 255, 255, 0.3)"
    game.entered_omniverse = true
    document.getElementById("sushiverse").style.display = "none"
    document.getElementById("heavenly_dice_div").style.display = "none"
    document.getElementById("maingame").style.display = "none"
    document.getElementById("singularity_info").style.display = "none"
    document.getElementById("omniverse_sushibeans").style.display = "block"
    document.getElementById("omniverse").style.display = "block"
    document.getElementById("power_power").style.display = "block"
    document.getElementById("begin_tetrating").style.display = "block"
    document.getElementById("switch1").style.display = "none"
    document.getElementById("switch2").style.display = "none"
    document.getElementById("switch3").style.display = "none"
    document.getElementById("switch_text1").style.display = "none"
    document.getElementById("switch_text2").style.display = "none"
    document.getElementById("switch_text3").style.display = "none"
    game.sb_autoclickers = 0
    game.prestige_autoclickers = 0
    game.collapse_autoclickers = 0
    document.body.style.backgroundImage = "url('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/447850/6a21d0150328351028a4c27d083221453d76c5a4.jpg')"
  }
}

function omniply() {
  if (game.entered_omniverse == true) {
    if (game.tetrating == true) {
      game.sushibean = game.sushibean.tetrate(game.tetrate_power)
      game.sushibean.mag = 100
    }
    else {
      game.sushibean = game.sushibean.pow(game.sushibean.log10().pow(game.power_power))
    }
  }
}

function power_power_up() {
  if (Decimal.max(game.sushibean, game.power_power_cost) == game.sushibean) {
    game.power_power = game.power_power * 2
    var power_power_temp = game.power_power_cost.mag
    game.power_power_cost.mag = power_power_temp * 1.8
  }
}

function begin_tetrating() {
  if (Decimal.max(game.sushibean, "eee10000") == game.sushibean) {
    document.getElementById("power_power").style.display = "none"
    document.getElementById("begin_tetrating").style.display = "none"
    document.getElementById("upgrade_tetrating").style.display = "block"
    game.tetrating = true
  }
}

function upgrade_tetrating() {
  if (Decimal.max(game.sushibean, game.tetrate_power_cost) == game.sushibean) {
    game.tetrate_power = game.tetrate_power * 10
    var tetrate_power_cost_temp = game.tetrate_power_cost.layer
    game.tetrate_power_cost.layer = tetrate_power_cost_temp * 9
  }
}

function trueinfinitycheck() {
  if (game.sushibean.layer > 9e+15) {
    document.getElementById("maingame").style.display = "none"
    document.getElementById("omniverse").style.display = "none"
    document.getElementById("options").style.display = "none"
    document.getElementById("omniverse_sushibeans").style.display = "none"
    document.getElementById("omniverse_sushibeans_fake").style.display = "block"
    if (game.done == false) {
      game.done == true
      document.getElementById("finish_div").style.opacity = "1"
      document.getElementById("finish_div").style.width = "100%"
      document.getElementById("finish_div").style.height = "100%"
      setTimeout(finishinfo, 5000)
    }
  }
}
  
function finishinfo() {
  document.getElementById("finish_info").style.display = "block"
}

function newgame() {
  document.getElementById("finish_div").style.width = "0%"
  document.getElementById("finish_div").style.height = "0%"
  reset()
  save()
  game.beaten_game = true
  document.getElementById("options").style.display = "block"
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

function beige() {
  document.body.style.backgroundColor = ("#f0e7d8")
}









function hardreset() {
    if (confirm("Are you sure you want to hard reset? You will lose everything!")) {
      reset()
      save()
    }
    else {
      alert("Thank goodness.")
    }
}

function setTime() {
  if (game.sushibean.layer < 9e+15) {
    ++game.totalSeconds;
  }
  game.secondsLabel.innerHTML = game.totalSeconds % 60;
  game.minutesLabel.innerHTML = parseInt(game.totalSeconds / 60) % 60;
  game.hoursLabel.innerHTML = parseInt(game.totalSeconds / 3600);
  game.secondsLabel2.innerHTML = game.totalSeconds % 60;
  game.minutesLabel2.innerHTML = parseInt(game.totalSeconds / 60) % 60;
  game.hoursLabel2.innerHTML = parseInt(game.totalSeconds / 3600);
}

setInterval(save, 10000)
setInterval(setTime, 1000)
setInterval(incrementSeconds, 1000)
setInterval(incrementSeconds2, 1000)
setInterval(prestigecheck, 100)
setInterval(infinitycheck, 10)
setInterval(trueinfinitycheck, 10)
setInterval(update, 10)
setTimeout(sb_autoclick, 10)
setTimeout(prestige_autoclick, 10)
setTimeout(collapse_autoclick, 10)
setInterval(omniply, 100)

document.body.style.backgroundColor = (localStorage.getItem("BackColor"))