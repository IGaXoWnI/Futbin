const squad = [
    { 
        name: "Erling Haaland", 
        position: "ST", 
        rating: "87",
        stats: { pace: "89", shooting: "94", passing: "76", dribbling: "82", defence: "49", physique: "93" } 
    },
    { 
        name: "Mohamed Salah", 
        position: "RW", 
        rating: "91",
        stats: { pace: "91", shooting: "89", passing: "82", dribbling: "90", defence: "45", physique: "74" } 
    },
    { 
        name: "Marcus Rashford", 
        position: "LW", 
        rating: "85",
        stats: { pace: "92", shooting: "85", passing: "79", dribbling: "88", defence: "45", physique: "78" } 
    },
    { 
        name: "Kevin De Bruyne", 
        position: "RCM", 
        rating: "91",
        stats: { pace: "74", shooting: "86", passing: "93", dribbling: "87", defence: "64", physique: "77" } 
    },
    { 
        name: "Bruno Fernandes", 
        position: "LCM", 
        rating: "86",
        stats: { pace: "75", shooting: "85", passing: "90", dribbling: "84", defence: "63", physique: "76" } 
    },
    { 
        name: "Casemiro", 
        position: "CM", 
        rating: "86",
        stats: { pace: "65", shooting: "73", passing: "76", dribbling: "72", defence: "88", physique: "90" } 
    },
    { 
        name: "Virgil van Dijk", 
        position: "LCB", 
        rating: "89",
        stats: { pace: "81", shooting: "60", passing: "71", dribbling: "70", defence: "91", physique: "86" } 
    },
    { 
        name: "Rúben Dias", 
        position: "RCB", 
        rating: "87",
        stats: { pace: "72", shooting: "40", passing: "68", dribbling: "65", defence: "88", physique: "85" } 
    },
    { 
        name: "Trent Alexander-Arnold", 
        position: "RB", 
        rating: "85",
        stats: { pace: "81", shooting: "66", passing: "90", dribbling: "82", defence: "72", physique: "72" } 
    },
    { 
        name: "Andrew Robertson", 
        position: "LB", 
        rating: "85",
        stats: { pace: "84", shooting: "61", passing: "81", dribbling: "80", defence: "81", physique: "77" } 
    },
    { 
        name: "Ederson", 
        position: "GK", 
        rating: "89",
        stats: { reflexes: "87", handling: "84", kicking: "93", positioning: "88", diving: "85", communication: "89" } 
    }
];

const bench = [
    { 
        name: "Alisson Becker", 
        position: "GK", 
        rating: "88",
        stats: { reflexes: "89", handling: "85", kicking: "86", positioning: "90", diving: "88", communication: "87" } 
    },
    { 
        name: "Bukayo Saka", 
        position: "RW", 
        rating: "84",
        stats: { pace: "85", shooting: "80", passing: "81", dribbling: "88", defence: "65", physique: "72" } 
    },
    { 
        name: "Jack Grealish", 
        position: "LW", 
        rating: "83",
        stats: { pace: "78", shooting: "72", passing: "80", dribbling: "88", defence: "42", physique: "69" } 
    },
    { 
        name: "Reece James", 
        position: "RB", 
        rating: "84",
        stats: { pace: "82", shooting: "65", passing: "76", dribbling: "78", defence: "80", physique: "81" } 
    },
    { 
        name: "João Cancelo", 
        position: "LB", 
        rating: "84",
        stats: { pace: "85", shooting: "72", passing: "82", dribbling: "85", defence: "79", physique: "72" } 
    }
];

localStorage.setItem("data_squad", JSON.stringify(squad));
localStorage.setItem("data_bench", JSON.stringify(bench));