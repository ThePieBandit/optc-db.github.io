window.altspecials = {
    2958: {
        atk: function(p) { return 2; },
        type: "type",
    },
    2960: {
        chainMultiplication: function(p) { return 1.25; },
        staticMult: function(p) { return 100; }
    },
    2962: {
        delay: function(p) { return 1; },
    },
    2964: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3009: {
        orb: function(p) { return p.unit.cost <= 40  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3037: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        type: "type",
    },
    3038: {
        atk: function(p) { return p.unit.type == "PSY" ? 2.5 : 1; },
        type: "type",
    },
    3071: {
        chainMultiplication: function(p) { return 1.25; },
    },
    3100:{
        staticMult: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3118: {
        def: function(p) { return 0; },
    },
    3122: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    3175: {
        atkbase: function(p) { return p.slot == p.sourceSlot ? 1000 : 0; },
    },
    3225:{
        affinity: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
    },
    3334: {
        chainAddition: function(p) { return 1; },
    },
    5012: {
        chainAddition: function(p) { return 0.5; },
    },
    5013: {
        chainAddition: function(p) { return 0.5; },
    },
    5014: {
        chainAddition: function(p) { return 0.5; },
    },
    5015: {
        chainAddition: function(p) { return 0.5; },
    },
    5036: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5037: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5038: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5039: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5040: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5041: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5042: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5043: {
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5052: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5053: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5054: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5055: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5056: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5057: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5082: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5083: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5084: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5085: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5086: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5087: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5088: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5089: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5090: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5091: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5092: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5093: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5094: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5095: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5096: {
        chainAddition: function(p) { return 0.3; },
    },
    5097: {
        chainAddition: function(p) { return 0.3; },
    },
    5098: {
        chainAddition: function(p) { return 0.3; },
    },
    5099: {
        chainAddition: function(p) { return 0.3; },
    },
    5100: {
        chainAddition: function(p) { return 0.3; },
    },
    5101: {
        chainAddition: function(p) { return 0.3; },
    },
    5102: {
        chainAddition: function(p) { return 0.3; },
    },
    5103: {
        chainAddition: function(p) { return 0.3; },
    },
    5028: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    5029: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    5030: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    5031: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    5032: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    5033: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    5034: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "type",
    },
    5144:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    5145:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    5146:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    5147:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    5148:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    5149:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    5150:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    5151:{
        affinity: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit")) ? 1.5 : 1; },
    },
    5160: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    5161: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    5162: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    5163: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    5164: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    5165: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    5166: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    5167: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    5176: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5177: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5178: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5179: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")  ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5214: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5214].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5214].multiplier = p.percHP; },
    },
    5215: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5215].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5215].multiplier = p.percHP; },
    },
    5216: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5216].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5216].multiplier = p.percHP; },
    },
    5217: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5217].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5217].multiplier = p.percHP; },
    },
    5218: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5218].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5218].multiplier = p.percHP; },
    },
    5219: {
        atkbase: function(p) { return Math.ceil(10 + 240*(1 - window.altspecials[5219].multiplier/100)); },
        onActivation: function(p) { window.altspecials[5219].multiplier = p.percHP; },
    },
    5220: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    5221: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    5222: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    5223: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    5224: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    5225: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    5226: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    5227: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    5244:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    5245:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    5246:{
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? 1.2 : 1; },
    },
    5184: {
        chainAddition: function(p) { return 0.3; },
    },
    5185: {
        chainAddition: function(p) { return 0.3; },
    },
    5186: {
        chainAddition: function(p) { return 0.3; },
    },
    5283: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5284: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5285: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5286: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5287: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5288: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5289: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5290: {
        chainMultiplication: function(p) { return 1.25; },
    },
    5307: {
        atk: function(p) { return 2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    5308: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    5309: {
        atk: function(p) { return 2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    5310: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Burn."
    },
    5325: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5326: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5327: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5328: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
    },
    5329: {
        affinity: function(p) { return window.altspecials[5329].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5329].multiplier) + 1) % levels.length;
            window.altspecials[5329].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5329warning'
            });
        },
    },
    5330: {
        affinity: function(p) { return window.altspecials[5330].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5330].multiplier) + 1) % levels.length;
            window.altspecials[5330].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5330warning'
            });
        },
    },
    5331: {
        affinity: function(p) { return window.altspecials[5331].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5331].multiplier) + 1) % levels.length;
            window.altspecials[5331].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5331warning'
            });
        },
    },
    5332: {
        affinity: function(p) { return window.altspecials[5332].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5332].multiplier) + 1) % levels.length;
            window.altspecials[5332].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5332warning'
            });
        },
    },
    5333: {
        affinity: function(p) { return window.altspecials[5333].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5333].multiplier) + 1) % levels.length;
            window.altspecials[5333].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5333warning'
            });
        },
    },
    5334: {
        affinity: function(p) { return window.altspecials[5334].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5334].multiplier) + 1) % levels.length;
            window.altspecials[5334].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5334warning'
            });
        },
    },
    5335: {
        affinity: function(p) { return window.altspecials[5335].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5335].multiplier) + 1) % levels.length;
            window.altspecials[5335].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5335warning'
            });
        },
    },
    5336: {
        affinity: function(p) { return window.altspecials[5336].multiplier; },
        onActivation: function(p) {
            var levels = [1.5, 2.25];
            var n = (levels.indexOf(window.altspecials[5336].multiplier) + 1) % levels.length;
            window.altspecials[5336].multiplier = levels[n];
            p.scope.notify({
                text: '' + levels[n] + ' boost. To ' + levels[(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '5336warning'
            });
        },
    },
};