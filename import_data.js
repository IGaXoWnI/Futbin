// const squad = [
//     { 
//         name: "Erling Haaland", 
//         position: "ST", 
//         rating: "87",
//         stats: { pace: "89", shooting: "94", passing: "76", dribbling: "82", defence: "49", physique: "93" } 
//     },
//     { 
//         name: "Mohamed Salah", 
//         position: "RW", 
//         rating: "91",
//         stats: { pace: "91", shooting: "89", passing: "82", dribbling: "90", defence: "45", physique: "74" } 
//     },
//     { 
//         name: "Marcus Rashford", 
//         position: "LW", 
//         rating: "85",
//         stats: { pace: "92", shooting: "85", passing: "79", dribbling: "88", defence: "45", physique: "78" } 
//     },
//     { 
//         name: "Kevin De Bruyne", 
//         position: "RCM", 
//         rating: "91",
//         stats: { pace: "74", shooting: "86", passing: "93", dribbling: "87", defence: "64", physique: "77" } 
//     },
//     { 
//         name: "Bruno Fernandes", 
//         position: "LCM", 
//         rating: "86",
//         stats: { pace: "75", shooting: "85", passing: "90", dribbling: "84", defence: "63", physique: "76" } 
//     },
//     { 
//         name: "Casemiro", 
//         position: "CM", 
//         rating: "86",
//         stats: { pace: "65", shooting: "73", passing: "76", dribbling: "72", defence: "88", physique: "90" } 
//     },
//     { 
//         name: "Virgil van Dijk", 
//         position: "LCB", 
//         rating: "89",
//         stats: { pace: "81", shooting: "60", passing: "71", dribbling: "70", defence: "91", physique: "86" } 
//     },
//     { 
//         name: "Rúben Dias", 
//         position: "RCB", 
//         rating: "87",
//         stats: { pace: "72", shooting: "40", passing: "68", dribbling: "65", defence: "88", physique: "85" } 
//     },
//     { 
//         name: "Trent Alexander-Arnold", 
//         position: "RB", 
//         rating: "85",
//         stats: { pace: "81", shooting: "66", passing: "90", dribbling: "82", defence: "72", physique: "72" } 
//     },
//     { 
//         name: "Andrew Robertson", 
//         position: "LB", 
//         rating: "85",
//         stats: { pace: "84", shooting: "61", passing: "81", dribbling: "80", defence: "81", physique: "77" } 
//     },
//     { 
//         name: "Ederson", 
//         position: "GK", 
//         rating: "89",
//         stats: { reflexes: "87", handling: "84", kicking: "93", positioning: "88", diving: "85", communication: "89" } 
//     }
// ];

// const bench = [
//     { 
//         name: "Alisson Becker", 
//         position: "GK", 
//         rating: "88",
//         stats: { reflexes: "89", handling: "85", kicking: "86", positioning: "90", diving: "88", communication: "87" } 
//     },
//     { 
//         name: "Bukayo Saka", 
//         position: "RW", 
//         rating: "84",
//         stats: { pace: "85", shooting: "80", passing: "81", dribbling: "88", defence: "65", physique: "72" } 
//     },
//     { 
//         name: "Jack Grealish", 
//         position: "LW", 
//         rating: "83",
//         stats: { pace: "78", shooting: "72", passing: "80", dribbling: "88", defence: "42", physique: "69" } 
//     },
//     { 
//         name: "Reece James", 
//         position: "RB", 
//         rating: "84",
//         stats: { pace: "82", shooting: "65", passing: "76", dribbling: "78", defence: "80", physique: "81" } 
//     },
//     { 
//         name: "João Cancelo", 
//         position: "LB", 
//         rating: "84",
//         stats: { pace: "85", shooting: "72", passing: "82", dribbling: "85", defence: "79", physique: "72" } 
//     }
// ];

// localStorage.setItem("data_squad", JSON.stringify(squad));
// localStorage.setItem("data_bench", JSON.stringify(bench));

document.addEventListener("DOMContentLoaded", () => {
    // Hardcoded data for 12 squad players and 6 bench players
    const squadData = [
        { name: "Aaron Ramsdale", flag: "url_to_flag_1", club: "url_to_club_1", player_pic: "url_to_player_pic_1", rating: "85", position: "GK", stats: [{ reflexes: "85", handling: "90", kicking: "80", positioning: "88", diving: "87", communication: "91" }] },
        { name: "Alisson Becker", flag: "url_to_flag_2", club: "url_to_club_2", player_pic: "url_to_player_pic_2", rating: "89", position: "GK", stats: [{ reflexes: "89", handling: "93", kicking: "85", positioning: "90", diving: "88", communication: "93" }] },
        { name: "Sadio Mane", flag: "url_to_flag_3", club: "url_to_club_3", player_pic: "url_to_player_pic_3", rating: "87", position: "LW", stats: [{ pace: "91", shooting: "85", passing: "78", dribbling: "85", defence: "70", physique: "80" }] },
        { name: "Harry Kane", flag: "url_to_flag_4", club: "url_to_club_4", player_pic: "url_to_player_pic_4", rating: "89", position: "ST", stats: [{ pace: "83", shooting: "90", passing: "85", dribbling: "80", defence: "70", physique: "82" }] },
        { name: "Mohamed Salah", flag: "url_to_flag_5", club: "url_to_club_5", player_pic: "url_to_player_pic_5", rating: "92", position: "RW", stats: [{ pace: "92", shooting: "88", passing: "85", dribbling: "91", defence: "70", physique: "80" }] },
        { name: "Declan Rice", flag: "url_to_flag_6", club: "url_to_club_6", player_pic: "url_to_player_pic_6", rating: "85", position: "LCM", stats: [{ pace: "80", shooting: "75", passing: "85", dribbling: "80", defence: "88", physique: "83" }] },
        { name: "Kevin De Bruyne", flag: "url_to_flag_7", club: "url_to_club_7", player_pic: "url_to_player_pic_7", rating: "92", position: "CM", stats: [{ pace: "82", shooting: "80", passing: "92", dribbling: "85", defence: "70", physique: "80" }] },
        { name: "Bruno Fernandes", flag: "url_to_flag_8", club: "url_to_club_8", player_pic: "url_to_player_pic_8", rating: "88", position: "RCM", stats: [{ pace: "78", shooting: "80", passing: "87", dribbling: "84", defence: "70", physique: "82" }] },
        { name: "Ben Chilwell", flag: "url_to_flag_9", club: "url_to_club_9", player_pic: "url_to_player_pic_9", rating: "85", position: "LB", stats: [{ pace: "83", shooting: "70", passing: "80", dribbling: "78", defence: "85", physique: "80" }] },
        { name: "Virgil van Dijk", flag: "url_to_flag_10", club: "url_to_club_10", player_pic: "url_to_player_pic_10", rating: "91", position: "LCB", stats: [{ pace: "75", shooting: "65", passing: "70", dribbling: "60", defence: "92", physique: "90" }] },
        { name: "Ruben Dias", flag: "url_to_flag_11", club: "url_to_club_11", player_pic: "url_to_player_pic_11", rating: "87", position: "RCB", stats: [{ pace: "78", shooting: "60", passing: "72", dribbling: "65", defence: "88", physique: "84" }] },
        { name: "Trent Alexander-Arnold", flag: "url_to_flag_12", club: "url_to_club_12", player_pic: "url_to_player_pic_12", rating: "89", position: "RB", stats: [{ pace: "83", shooting: "75", passing: "90", dribbling: "85", defence: "78", physique: "80" }] }
    ];

    const benchData = [
        { name: "Jack Grealish", flag: "url_to_flag_13", club: "url_to_club_13", player_pic: "url_to_player_pic_13", rating: "85", position: "LW" },
        { name: "Phil Foden", flag: "url_to_flag_14", club: "url_to_club_14", player_pic: "url_to_player_pic_14", rating: "84", position: "RW" },
        { name: "Marcus Rashford", flag: "url_to_flag_15", club: "url_to_club_15", player_pic: "url_to_player_pic_15", rating: "87", position: "LW" },
        { name: "James Maddison", flag: "url_to_flag_16", club: "url_to_club_16", player_pic: "url_to_player_pic_16", rating: "85", position: "CM" },
        { name: "Rodri", flag: "url_to_flag_17", club: "url_to_club_17", player_pic: "url_to_player_pic_17", rating: "88", position: "CDM" },
        { name: "Kieran Trippier", flag: "url_to_flag_18", club: "url_to_club_18", player_pic: "url_to_player_pic_18", rating: "86", position: "RB" }
    ];

    // Save the data to localStorage
    localStorage.setItem("data_squad", JSON.stringify(squadData));
    localStorage.setItem("data_bench", JSON.stringify(benchData));
});