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

    let data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
    let data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");

    const stats = position ;
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
        const player = { name: player_name, rating: player_rating, position : position, stats : [
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
        const player = { name: player_name, rating: player_rating, position : position, stats : [
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

function renderData() {
    const data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
    const data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");

    const cards = document.querySelectorAll(".card");
    const bench_container = document.querySelector(".sub");


    bench_container.innerHTML = "";

    data_squad.forEach((squad_player) => {
        let position = squad_player.position;
       cards.forEach((card)=>{
        if(card.getAttribute("position") === position){
            if(position === "GK"){
                card.innerHTML = `
                <div class="card">
                    <div class="s1">
                        <h1 class="rating">${squad_player.rating}</h1>
                        <p>${squad_player.position}</p>
                    </div>
                    <img class="plpic" src="assets/brahim.webp" alt="">
                    <div class="s5">
                        <p class="name">${squad_player.name}</p>
                    </div>
                    <div class="s6">
                        <p>Ref</p>
                        <p>Han</p>
                        <p>Kic</p>
                        <p>Pos</p>
                        <p>Div</p>
                        <p>Com</p>
                    </div>
                    <div class="s7">
                        <p>${squad_player.stats[0].reflexes}</p>
                        <p>${squad_player.stats[0].handling}</p>
                        <p>${squad_player.stats[0].kicking}</p>
                        <p>${squad_player.stats[0].positioning}</p>
                        <p>${squad_player.stats[0].diving}</p>
                        <p>${squad_player.stats[0].communication}</p>
                    </div>
                </div>`;

            }else{
                card.innerHTML = `
                <div class="card">
                    <div class="s1">
                        <h1 class="rating">${squad_player.rating}</h1>
                        <p>${squad_player.position}</p>
                    </div>
                    <img class="plpic" src="assets/brahim.webp" alt="">
                    <div class="s5">
                        <p class="name">${squad_player.name}</p>
                    </div>
                    <div class="s6"> 
                        <p>PAC</p>
                        <p>SHO</p>
                        <p>PAS</p>
                        <p>DRI</p>
                        <p>DEF</p>
                        <p>PHY</p>
                    </div>
                    <div class="s7">
                        <p>${squad_player.stats[0].pace}</p>
                        <p>${squad_player.stats[0].shooting}</p>
                        <p>${squad_player.stats[0].passing}</p>
                        <p>${squad_player.stats[0].dribbling}</p>
                        <p>${squad_player.stats[0].defence}</p>
                        <p>${squad_player.stats[0].physique}</p>
                    </div>
                </div>`;
               
            }
        }
       })
    });

   
    data_bench.forEach((bench_player) => {
        let position = bench_player.position;
        if(position === "GK"){
                bench_container.innerHTML+=`
                        <div class="card">
                            <div class="s1">
                                <h1 class="rating">${bench_player.rating}</h1>
                                <p>${bench_player.position}</p>
                            </div>
                            <img class="plpic" src="assets/brahim.webp" alt="">
                            <div class="s5">
                                <p class="name">${bench_player.name}</p>
                            </div>
                            <div class="s6">
                                <p>Ref</p>
                                <p>Han</p>
                                <p>Kic</p>
                                <p>Pos</p>
                                <p>Div</p>
                                <p>Com</p>
                            </div>
                            <div class="s7">
                                <p>${bench_player.stats[0].reflexes}</p>
                                <p>${bench_player.stats[0].handling}</p>
                                <p>${bench_player.stats[0].kicking}</p>
                                <p>${bench_player.stats[0].positioning}</p>
                                <p>${bench_player.stats[0].diving}</p>
                                <p>${bench_player.stats[0].communication}</p>
                            </div>
                        </div>`;
        }else{
            bench_container.innerHTML+=`
                <div class="card">
                    <div class="s1">
                        <h1 class="rating">${bench_player.rating}</h1>
                        <p>${bench_player.position}</p>
                    </div>
                    <img class="plpic" src="assets/brahim.webp" alt="">
                    <div class="s5">
                        <p class="name">${bench_player.name}</p>
                    </div>
                    <div class="s6"> 
                        <p>PAC</p>
                        <p>SHO</p>
                        <p>PAS</p>
                        <p>DRI</p>
                        <p>DEF</p>
                        <p>PHY</p>
                    </div>
                    <div class="s7">
                        <p>${bench_player.stats[0].pace}</p>
                        <p>${bench_player.stats[0].shooting}</p>
                        <p>${bench_player.stats[0].passing}</p>
                        <p>${bench_player.stats[0].dribbling}</p>
                        <p>${bench_player.stats[0].defence}</p>
                        <p>${bench_player.stats[0].physique}</p>
                    </div>
                </div>`;
        }
    });
}








document.addEventListener("DOMContentLoaded", renderData);