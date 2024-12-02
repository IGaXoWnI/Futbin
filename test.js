const dropdown = document.getElementById("player-position");
dropdown.addEventListener("change", () => {
    let dropdownValue = dropdown.value;
    localStorage.setItem("position", dropdownValue);

    let statspl = document.querySelectorAll("#statspl");
    let statsgk = document.querySelectorAll("#statsgk");

    if (dropdownValue === "GK") {
        statspl.forEach(element => element.classList.add("hidden"));
        statsgk.forEach(element => element.classList.remove("hidden"));
    } else {
        statspl.forEach(element => element.classList.remove("hidden"));
        statsgk.forEach(element => element.classList.add("hidden"));
    }
});

const squad_dropdown = document.getElementById("squad-formation");
const squad_4_3_3 = document.querySelector(".squad_4_3_3");
const squad_4_4_2 = document.querySelector(".squad_4_4_2");

squad_dropdown.addEventListener("change", () => {
    let squad_value = squad_dropdown.value;

    if (squad_value === "4-3-3") {
        localStorage.setItem("selected_squad", "4-3-3");
        squad_4_3_3.classList.remove("hidden");
        squad_4_4_2.classList.add("hidden");
    } else {
        localStorage.setItem("selected_squad", "4-4-2");
        squad_4_3_3.classList.add("hidden");
        squad_4_4_2.classList.remove("hidden");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let selected_squad = localStorage.getItem("selected_squad");
    if (selected_squad === "4-3-3") {
        squad_4_3_3.classList.remove("hidden");
        squad_4_4_2.classList.add("hidden");
    } else {
        squad_4_3_3.classList.add("hidden");
        squad_4_4_2.classList.remove("hidden");
    }
});

document.getElementById("submit_btn").addEventListener("click", () => {
    let player_name = document.getElementById("player-name").value;
    let position = localStorage.getItem("position");
    let player_rating = document.getElementById("player-rating").value;
    
    // Add input validation
    if (!player_name || player_name.trim() === "") {
        alert("Please enter a player name");
        return;
    }

    // Check if player name contains only letters, spaces, and hyphens
    if (!/^[A-Za-z\s-]+$/.test(player_name)) {
        alert("Player name should only contain letters, spaces, and hyphens");
        return;
    }

    if (isNaN(player_rating) || player_rating < 0 || player_rating > 99) {
        alert("Rating must be a number between 0 and 99");
        return;
    }

    let flag_pic = document.getElementById("nation-image-url").value;
    let club_pic = document.getElementById("club-image-url").value;
    let player_pic = document.getElementById("player-image-url").value;

    let data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
    let data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");

    if (position === "GK") {
        var reflexes = parseInt(document.getElementById("Reflexes").value),
            handling = parseInt(document.getElementById("Handling").value),
            kicking = parseInt(document.getElementById("Kicking").value),
            positioning = parseInt(document.getElementById("Positioning").value),
            diving = parseInt(document.getElementById("Diving").value),
            communication = parseInt(document.getElementById("Communication").value);

        // Validate GK stats
        const gkStats = [reflexes, handling, kicking, positioning, diving, communication];
        if (gkStats.some(stat => isNaN(stat) || stat < 0 || stat > 99)) {
            alert("All stats must be numbers between 0 and 99");
            return;
        }
    } else {
        var pace = parseInt(document.getElementById("pace").value),
            shooting = parseInt(document.getElementById("shooting").value),
            passing = parseInt(document.getElementById("passing").value),
            dribbling = parseInt(document.getElementById("dribbling").value),
            defence = parseInt(document.getElementById("defence").value),
            physique = parseInt(document.getElementById("physique").value);

        // Validate player stats
        const playerStats = [pace, shooting, passing, dribbling, defence, physique];
        if (playerStats.some(stat => isNaN(stat) || stat < 0 || stat > 99)) {
            alert("All stats must be numbers between 0 and 99");
            return;
        }
    }

    const player = position === "GK" ? 
        { name: player_name, flag: flag_pic, club: club_pic, player_pic: player_pic, rating: player_rating, position, stats: [{ reflexes, handling, kicking, positioning, diving, communication }] } : 
        { name: player_name, flag: flag_pic, club: club_pic, player_pic: player_pic, rating: player_rating, position, stats: [{ pace, shooting, passing, dribbling, defence, physique }] };

    if (localStorage.getItem(`reserved${position}`)) {
        data_bench.push(player);
    } else {
        data_squad.push(player);
        localStorage.setItem(`reserved${position}`, "enable");
    }

    localStorage.setItem("data_squad", JSON.stringify(data_squad));
    localStorage.setItem("data_bench", JSON.stringify(data_bench));
    location.reload();
});

const data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
const data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");
const cards = document.querySelectorAll(".card");
const bench_container = document.querySelector(".sub");

function renderData() {
    data_squad.forEach((squad_player) => {
        let position = squad_player.position;
        cards.forEach((card) => {
            if (card.getAttribute("position") === position) {
                const stats = position === "GK" ?
                    `<p>Ref</p><p>Han</p><p>Kic</p><p>Pos</p><p>Div</p><p>Com</p>` :
                    `<p>PAC</p><p>SHO</p><p>PAS</p><p>DRI</p><p>DEF</p><p>PHY</p>`;
                const statsValues = position === "GK" ?
                    `<p>${squad_player.stats[0].reflexes}</p><p>${squad_player.stats[0].handling}</p><p>${squad_player.stats[0].kicking}</p><p>${squad_player.stats[0].positioning}</p><p>${squad_player.stats[0].diving}</p><p>${squad_player.stats[0].communication}</p>` :
                    `<p>${squad_player.stats[0].pace}</p><p>${squad_player.stats[0].shooting}</p><p>${squad_player.stats[0].passing}</p><p>${squad_player.stats[0].dribbling}</p><p>${squad_player.stats[0].defence}</p><p>${squad_player.stats[0].physique}</p>`;
                card.innerHTML = `
                    <div class="card">
                    <img class = "delete_icon" src="assets/remove.svg" alt="">
                    <img class = "edit_icon" src="assets/edit.svg" alt="">

                        <div class="rating_position_logo_flag">
                            <p>${squad_player.rating}</p>
                            <p>${squad_player.position}</p>
                            <div class="flag_club">
                                <img class="club" src="${squad_player.club}" alt="Club Logo">
                                <img class="flag" src="${squad_player.flag}" alt="Flag">
                            </div>
                        </div>
                        <div class="playerpic">
                            <img class="plpic" src="${squad_player.player_pic}" alt="Player Image">
                        </div>
                        <div class="name">
                            <p>${squad_player.name}</p>
                        </div>
                        <div class="stats_name">${stats}</div>
                        <div class="stats_value">${statsValues}</div>
                    </div>`;
                
                const editIcon = card.querySelector('.edit_icon');
                if (editIcon) {
                    editIcon.addEventListener('click', editPlayerCard);
                }
            }
        });
    });

    bench_container.innerHTML = '';

    data_bench.forEach((bench_player) => {
        const benchCard = document.createElement('div');
        benchCard.className = 'card card_bench';
        benchCard.innerHTML = `
        <img class = "delete_icon" src="assets/remove.svg" alt="">
        <img class = "edit_icon" src="assets/edit.svg" alt="">

            <div class="rating_position_logo_flag">
                <p>${bench_player.rating}</p>
                <p>${bench_player.position}</p>
                <div class="flag_club">
                    <img class="club" src="${bench_player.club}" alt="Club Logo">
                    <img class="flag" src="${bench_player.flag}" alt="Flag">
                </div>
            </div>
            <div class="playerpic">
                <img class="plpic" src="${bench_player.player_pic}" alt="Player Image">
            </div>
            <div class="name">
                <p>${bench_player.name}</p>
            </div>
            <div class="stats_name">${bench_player.position === "GK" ? `<p>Ref</p><p>Han</p><p>Kic</p><p>Pos</p><p>Div</p><p>Com</p>` : `<p>PAC</p><p>SHO</p><p>PAS</p><p>DRI</p><p>DEF</p><p>PHY</p>`}</div>
            <div class="stats_value">${bench_player.position === "GK" ? `<p>${bench_player.stats[0].reflexes}</p><p>${bench_player.stats[0].handling}</p><p>${bench_player.stats[0].kicking}</p><p>${bench_player.stats[0].positioning}</p><p>${bench_player.stats[0].diving}</p><p>${bench_player.stats[0].communication}</p>` : `<p>${bench_player.stats[0].pace}</p><p>${bench_player.stats[0].shooting}</p><p>${bench_player.stats[0].passing}</p><p>${bench_player.stats[0].dribbling}</p><p>${bench_player.stats[0].defence}</p><p>${bench_player.stats[0].physique}</p>`}</div>
        `;
        
        const editIcon = benchCard.querySelector('.edit_icon');
        if (editIcon) {
            editIcon.addEventListener('click', editPlayerCard);
        }
        
        bench_container.appendChild(benchCard);
    });
}

renderData();

function checkAndSwapPlayers() {
    const selectedBench = localStorage.getItem("selected_bench");
    const selectedSquad = localStorage.getItem("selected_squad");

    if (selectedBench && selectedSquad) {
        const squadIndex = data_squad.findIndex(player => player.name === selectedSquad);
        const benchIndex = data_bench.findIndex(player => player.name === selectedBench);

        if (squadIndex !== -1 && benchIndex !== -1) {
            // Check if positions match or are compatible
            const squadPlayer = data_squad[squadIndex];
            const benchPlayer = data_bench[benchIndex];

            // Add position compatibility check here
            if (squadPlayer.position === benchPlayer.position) {
                // Swap players of the same position
                const temp = data_squad[squadIndex];
                data_squad[squadIndex] = data_bench[benchIndex];
                data_bench[benchIndex] = temp;

                localStorage.setItem("data_squad", JSON.stringify(data_squad));
                localStorage.setItem("data_bench", JSON.stringify(data_bench));
                localStorage.removeItem("selected_bench");
                localStorage.removeItem("selected_squad");
                location.reload();
            } else {
                // If positions are different, find a matching position slot
                const matchingSquadIndex = data_squad.findIndex(player => player.position === benchPlayer.position);
                
                if (matchingSquadIndex !== -1) {
                    // Swap players with matching positions
                    const temp = data_squad[matchingSquadIndex];
                    data_squad[matchingSquadIndex] = data_bench[benchIndex];
                    data_bench[benchIndex] = temp;

                    localStorage.setItem("data_squad", JSON.stringify(data_squad));
                    localStorage.setItem("data_bench", JSON.stringify(data_bench));
                    localStorage.removeItem("selected_bench");
                    localStorage.removeItem("selected_squad");
                    location.reload();
                } else {
                    alert("Cannot swap players of different positions!");
                }
            }
        }
    }
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle('scalee');
        const name = card.querySelector('.name p').textContent.trim();
        if (localStorage.getItem("selected_squad") === name) {
            localStorage.removeItem("selected_squad");
        } else {
            localStorage.setItem("selected_squad", name);
        }

        checkAndSwapPlayers();
    });
});

bench_container.addEventListener('click', (event) => {
    const benchCard = event.target.closest('.card_bench');
    benchCard.classList.toggle("scalee");
    if (benchCard) {
        const name = benchCard.querySelector('.name p').textContent.trim();
        if (localStorage.getItem("selected_bench") === name) {
            localStorage.removeItem("selected_bench");
        } else {
            localStorage.setItem("selected_bench", name);
        }

        checkAndSwapPlayers();
    }
});

// Function to delete a player card
function deletePlayerCard(event) {
    // Stop event propagation to avoid triggering parent event listeners
    event.stopPropagation();

    // Find the card to delete
    const card = event.target.closest('.card');
    const name = card.querySelector('.name p').textContent.trim();
    const position = card.querySelector('.rating_position_logo_flag p:nth-child(2)').textContent.trim();

    // Remove the player from the localStorage
    let data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
    let data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");

    // Check if the player is in the squad or bench
    const squadIndex = data_squad.findIndex(player => player.name === name && player.position === position);
    const benchIndex = data_bench.findIndex(player => player.name === name && player.position === position);

    if (squadIndex !== -1) {
        data_squad.splice(squadIndex, 1);
        // Remove reserved position if it was in the squad
        localStorage.removeItem(`reserved${position}`);
    } else if (benchIndex !== -1) {
        data_bench.splice(benchIndex, 1);
    }

    // Update localStorage
    localStorage.setItem("data_squad", JSON.stringify(data_squad));
    localStorage.setItem("data_bench", JSON.stringify(data_bench));

    // Reload the page or re-render the UI
    location.reload();
}

// Attach delete functionality to all delete icons
document.addEventListener('DOMContentLoaded', () => {
    const deleteIcons = document.querySelectorAll('.delete_icon');
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', deletePlayerCard);
    });
});

// Add event listeners to delete icons for each card
document.querySelectorAll('.delete_icon').forEach(deleteIcon => {
    deleteIcon.addEventListener('click', deletePlayerCard);
});
deletePlayerCard();

// Function to edit a player card
function editPlayerCard(event) {
    event.stopPropagation();
    console.log("Edit icon clicked"); // Debug log
    
    const card = event.target.closest('.card');
    if (!card) {
        console.log("No card found"); // Debug log
        return;
    }

    const name = card.querySelector('.name p')?.textContent.trim();
    const position = card.querySelector('.rating_position_logo_flag p:nth-child(2)')?.textContent.trim();
    
    console.log("Player:", name, "Position:", position); // Debug log
    
    // Get current data
    let data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
    let data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");
    
    // Find player in either squad or bench
    let player = data_squad.find(p => p.name === name && p.position === position) ||
                data_bench.find(p => p.name === name && p.position === position);
    
    if (player) {
        console.log("Player found:", player); // Debug log
        
        // Pre-fill form with current values
        document.getElementById("player-name").value = player.name;
        document.getElementById("player-rating").value = player.rating;
        document.getElementById("nation-image-url").value = player.flag;
        document.getElementById("club-image-url").value = player.club;
        document.getElementById("player-image-url").value = player.player_pic;
        
        // Set position dropdown
        const positionDropdown = document.getElementById("player-position");
        positionDropdown.value = position;
        
        // Trigger position change event to show correct stats
        positionDropdown.dispatchEvent(new Event('change'));
        
        // Pre-fill stats based on position
        if (position === "GK") {
            document.getElementById("Reflexes").value = player.stats[0].reflexes;
            document.getElementById("Handling").value = player.stats[0].handling;
            document.getElementById("Kicking").value = player.stats[0].kicking;
            document.getElementById("Positioning").value = player.stats[0].positioning;
            document.getElementById("Diving").value = player.stats[0].diving;
            document.getElementById("Communication").value = player.stats[0].communication;
        } else {
            document.getElementById("pace").value = player.stats[0].pace;
            document.getElementById("shooting").value = player.stats[0].shooting;
            document.getElementById("passing").value = player.stats[0].passing;
            document.getElementById("dribbling").value = player.stats[0].dribbling;
            document.getElementById("defence").value = player.stats[0].defence;
            document.getElementById("physique").value = player.stats[0].physique;
        }
        
        // Delete existing player
        if (data_squad.includes(player)) {
            data_squad = data_squad.filter(p => p.name !== name || p.position !== position);
        } else {
            data_bench = data_bench.filter(p => p.name !== name || p.position !== position);
        }
        
        localStorage.setItem("data_squad", JSON.stringify(data_squad));
        localStorage.setItem("data_bench", JSON.stringify(data_bench));
        
        // Remove the reserved position to allow re-adding the player
        localStorage.removeItem(`reserved${position}`);
        
        // Scroll to the form
        document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Player not found in data"); // Debug log
    }
}

// Add event listeners to edit icons after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const editIcons = document.querySelectorAll('.edit_icon');
    console.log("Found edit icons:", editIcons.length); // Debug log
    
    editIcons.forEach(icon => {
        icon.addEventListener('click', editPlayerCard);
    });
});

