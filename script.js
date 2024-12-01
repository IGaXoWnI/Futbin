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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("submit_btn").addEventListener("click", () => {
    let player_name = document.getElementById("player-name").value;
    let position = localStorage.getItem("position");
    let player_rating = document.getElementById("player-rating").value;
    let flag_pic = document.getElementById("nation-image-url").value;
    let club_pic = document.getElementById("club-image-url").value;
    let player_pic = document.getElementById("player-image-url").value;

    let data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
    let data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");


    if(position=== "GK")   {
        reflexes = document.getElementById("Reflexes").value,
        handling= document.getElementById("Handling").value,
        kicking= document.getElementById("Kicking").value,
        positioning= document.getElementById("Positioning").value,
        diving= document.getElementById("Diving").value,
        communication= document.getElementById("Communication").value
    } else {
        pace= document.getElementById("pace").value,
        shooting= document.getElementById("shooting").value,
        passing= document.getElementById("passing").value,
        dribbling= document.getElementById("dribbling").value,
        defence= document.getElementById("defence").value,
        physique= document.getElementById("physique").value
    };

    if(position==="GK"){
        const player = { name: player_name , flag_pic : flag_pic, club_pic:club_pic, player_pic:player_pic, rating: player_rating, position : position, stats : [
            {
                reflexes : reflexes,
                handling : handling,
                kicking : kicking,
                positioning :positioning ,
                diving : diving,
                communication : communication
            }
        ] };
        if (localStorage.getItem(`reserved${position}`)) {
            data_bench.push(player);
        } else {
            data_squad.push(player);
            localStorage.setItem(`reserved${position}`, "enable");
        }
        
    }else{
        const player = { name: player_name , flag : flag_pic, club:club_pic, player_pic:player_pic, rating: player_rating, position : position, stats : [
            {
                pace : pace,
                shooting : shooting,
                passing : passing,
                dribbling :dribbling ,
                defence : defence,
                physique : physique
            }
        ] };
        if (localStorage.getItem(`reserved${position}`)) {
            data_bench.push(player);
        } else {
            data_squad.push(player);
            localStorage.setItem(`reserved${position}`, "enable");
        }
    }
    

  

    localStorage.setItem("data_squad", JSON.stringify(data_squad));
    localStorage.setItem("data_bench", JSON.stringify(data_bench));
    location.reload();
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
    const data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");
    const cards = document.querySelectorAll(".card");
    const bench_container = document.querySelector(".sub");
    function renderData() {


    


    
        
    

        data_squad.forEach((squad_player) => {
            let position = squad_player.position;
            cards.forEach((card) => {
                if (card.getAttribute("position") === position) {
                    const stats = position === "GK"
                        ? 
                        `
                            <p>Ref</p><p>Han</p><p>Kic</p><p>Pos</p><p>Div</p><p>Com</p>
                        `
                        : 
                        `
                            <p>PAC</p><p>SHO</p><p>PAS</p><p>DRI</p><p>DEF</p><p>PHY</p>
                        `;
                    const statsValues = position === "GK"
                        ? 
                        `
                            <p>${squad_player.stats[0].reflexes}</p>
                            <p>${squad_player.stats[0].handling}</p>
                            <p>${squad_player.stats[0].kicking}</p>
                            <p>${squad_player.stats[0].positioning}</p>
                            <p>${squad_player.stats[0].diving}</p>
                            <p>${squad_player.stats[0].communication}</p>
                        `
                        :
                         `
                            <p>${squad_player.stats[0].pace}</p>
                            <p>${squad_player.stats[0].shooting}</p>
                            <p>${squad_player.stats[0].passing}</p>
                            <p>${squad_player.stats[0].dribbling}</p>
                            <p>${squad_player.stats[0].defence}</p>
                            <p>${squad_player.stats[0].physique}</p>
                        `;
    
                    card.innerHTML = `
                        <div class="card">
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
                }
            });
        });
    

        data_bench.forEach((bench_player) => {
            const stats = bench_player.position === "GK"
                ? 
                `
                    <p>Ref</p><p>Han</p><p>Kic</p><p>Pos</p><p>Div</p><p>Com</p>
                `
                : 
                `
                    <p>PAC</p><p>SHO</p><p>PAS</p><p>DRI</p><p>DEF</p><p>PHY</p>
                `;
            const statsValues = bench_player.position === "GK"
                ?
                 `
                    <p>${bench_player.stats[0].reflexes}</p>
                    <p>${bench_player.stats[0].handling}</p>
                    <p>${bench_player.stats[0].kicking}</p>
                    <p>${bench_player.stats[0].positioning}</p>
                    <p>${bench_player.stats[0].diving}</p>
                    <p>${bench_player.stats[0].communication}</p>
                `
                : `
                    <p>${bench_player.stats[0].pace}</p>
                    <p>${bench_player.stats[0].shooting}</p>
                    <p>${bench_player.stats[0].passing}</p>
                    <p>${bench_player.stats[0].dribbling}</p>
                    <p>${bench_player.stats[0].defence}</p>
                    <p>${bench_player.stats[0].physique}</p>
                `;
    
            bench_container.innerHTML += `
                <div  class="card card_bench">
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
                    <div class="stats_name">${stats}</div>
                    <div class="stats_value">${statsValues}</div>
                </div>`;
        });


        
        

       
        
    }





let cards_bench = localStorage.getItem("cards_bench");
console.log(cards_bench);



document.addEventListener("DOMContentLoaded", renderData);














