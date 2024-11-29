const dropdown = document.getElementById("player-position") ;
dropdown.addEventListener("change" , ()=>{
    let dropdownValue = dropdown.value ;
    localStorage.setItem("position" , dropdownValue)
    let statspl = document.querySelectorAll("#statspl");
    let statsgk = document.querySelectorAll("#statsgk")
    if(dropdownValue ==="GK"){
        statspl.forEach((element)=>{
            element.classList.add("hidden")
        })
        statsgk.forEach((element)=>{
            element.classList.remove("hidden")
        })
    }else{
        statspl.forEach((element)=>{
            element.classList.remove("hidden")
        })
        statsgk.forEach((element)=>{
            element.classList.add("hidden")
        })
    }
    
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let squad_dropdown = document.getElementById("squad-formation");
const squad_4_3_3 = document.querySelector(".squad_4_3_3");
const squad_4_4_2 = document.querySelector(".squad_4_4_2");
squad_dropdown.addEventListener("change" , ()=>{
   let squad_value = squad_dropdown.value ;
   
   
   if(squad_value==="4-3-3"){
    localStorage.setItem("selected_sqaud" , "4-3-3");
    squad_4_3_3.classList.remove("hidden");
    squad_4_4_2.classList.add("hidden");
   }else{
    localStorage.setItem("selected_sqaud" , "4-4-2");
    squad_4_3_3.classList.add("hidden");
    squad_4_4_2.classList.remove("hidden");
   }
}) 

document.addEventListener("DOMContentLoaded",() =>{
    let selected_squad = localStorage.getItem("selected_sqaud");
    if(selected_squad==="4-3-3"){
        squad_4_3_3.classList.remove("hidden");
        squad_4_4_2.classList.add("hidden");
    }else{
        squad_4_3_3.classList.add("hidden");
        squad_4_4_2.classList.remove("hidden");
    }
    
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById("submit_btn").addEventListener("click" , ()=>{

    let player_name = document.getElementById("player-name").value ;
    let position = localStorage.getItem("position")
    let player_rating = document.getElementById("player-rating").value ;
    let pace = document.getElementById("pace").value ;
    let shooting = document.getElementById("shooting").value ;
    let passing = document.getElementById("passing").value ;
    let dribbling = document.getElementById("dribbling").value ;
    let defence = document.getElementById("defence").value ;
    let physique = document.getElementById("physique").value ;


    let reflexes = document.getElementById("Reflexes").value;
    let handling = document.getElementById("Handling").value;
    let kicking = document.getElementById("Kicking").value;
    let positioning = document.getElementById("Positioning").value;
    let diving = document.getElementById("Diving").value; 
    let communication = document.getElementById("Communication").value;

    let data_squad = JSON.parse(localStorage.getItem("data_squad") || "[]");
    let data_bench = JSON.parse(localStorage.getItem("data_bench") || "[]");


    if(position==="GK" && localStorage.getItem(`reserved${position}`)){
        data_bench.push(
            {
                name : player_name ,
                rating : player_rating,
                position : position,
                stats :
               [
                {
                    reflexes : reflexes,
                    handling : handling,
                    kicking : kicking,
                    positioning :positioning ,
                    diving : diving,
                    communication : communication
                }
               ]
               
    
            }
        )
    }else{
        data_squad.push(
            {
                name : player_name ,
                rating : player_rating,
                position : position,
                stats :
               [
                {
                    reflexes : reflexes,
                    handling : handling,
                    kicking : kicking,
                    positioning :positioning ,
                    diving : diving,
                    communication : communication
                }
               ]
               
    
            }
        )
        localStorage.setItem(`reserved${position}` , "enable");
    }
    
    
    if(position!=="GK" && localStorage.getItem(`reserved${position}`)){
        data_bench.push(
            {
                name : player_name ,
                rating : player_rating,
                position : position,
                stats :[
                {
                    pace : pace,
                    shooting : shooting,
                    passing : passing,
                    dribbling :dribbling ,
                    defence : defence,
                    physique : physique
                }
               ]
    
            }
        )
    }else{
        data_squad.push(
            {
                name : player_name ,
                rating : player_rating,
                position : position,
                stats :[
                {
                    pace : pace,
                    shooting : shooting,
                    passing : passing,
                    dribbling :dribbling ,
                    defence : defence,
                    physique : physique
                }
               ]
    
            }
        )
        localStorage.setItem(`reserved${position}` , "enable");
    }

    localStorage.setItem("data_squad" , JSON.stringify(data_squad));
    localStorage.setItem("data_bench" , JSON.stringify(data_bench));

    location.reload();
    
})

renderData() {
    const finalData = JSON.parse(localStorage.getItem("data"));
    let lenght = finalData.length;
    let container = document.querySelector(".sub");
    let cards = document.querySelectorAll(".card");
    let selected_sqaud = localStorage.getItem("selected_sqaud");
    let selected_position = localStorage.getItem("position");




    container.innerHTML = "";

    finalData.forEach((data) => {
        let position = data.position;
        

        cards.forEach((card) => {
            
            if (card.getAttribute("position") === position && lenght<=12 ) {
                if (position === "GK") {
                    
                        card.innerHTML = `
                        <div class="card">
                            <div class="s1">
                                <h1 class="rating">${data.rating}</h1>
                                <p>${data.position}</p>
                            </div>
                            <img class="plpic" src="assets/brahim.webp" alt="">
                            <div class="s5">
                                <p class="name">${data.name}</p>
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
                                <p>${data.stats[0].reflexes}</p>
                                <p>${data.stats[0].handling}</p>
                                <p>${data.stats[0].kicking}</p>
                                <p>${data.stats[0].positioning}</p>
                                <p>${data.stats[0].diving}</p>
                                <p>${data.stats[0].communication}</p>
                            </div>
                        </div>`;
        
                    
                    
                } else {
                    card.innerHTML = `
                    <div class="card">
                        <div class="s1">
                            <h1 class="rating">${data.rating}</h1>
                            <p>${data.position}</p>
                        </div>
                        <img class="plpic" src="assets/brahim.webp" alt="">
                        <div class="s5">
                            <p class="name">${data.name}</p>
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
                            <p>${data.stats[0].pace}</p>
                            <p>${data.stats[0].shooting}</p>
                            <p>${data.stats[0].passing}</p>
                            <p>${data.stats[0].dribbling}</p>
                            <p>${data.stats[0].defence}</p>
                            <p>${data.stats[0].physique}</p>
                        </div>
                    </div>`;
                   
                            
                }
                
            }else if(lenght>12){
                if (position === "GK") {
                    
                    container.innerHTML = `
                    <div class="card">
                        <div class="s1">
                            <h1 class="rating">${data.rating}</h1>
                            <p>${data.position}</p>
                        </div>
                        <img class="plpic" src="assets/brahim.webp" alt="">
                        <div class="s5">
                            <p class="name">${data.name}</p>
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
                            <p>${data.stats[0].reflexes}</p>
                            <p>${data.stats[0].handling}</p>
                            <p>${data.stats[0].kicking}</p>
                            <p>${data.stats[0].positioning}</p>
                            <p>${data.stats[0].diving}</p>
                            <p>${data.stats[0].communication}</p>
                        </div>
                    </div>`;
                   
                
                
            } else {
                container.innerHTML = `
                <div class="card">
                    <div class="s1">
                        <h1 class="rating">${data.rating}</h1>
                        <p>${data.position}</p>
                    </div>
                    <img class="plpic" src="assets/brahim.webp" alt="">
                    <div class="s5">
                        <p class="name">${data.name}</p>
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
                        <p>${data.stats[0].pace}</p>
                        <p>${data.stats[0].shooting}</p>
                        <p>${data.stats[0].passing}</p>
                        <p>${data.stats[0].dribbling}</p>
                        <p>${data.stats[0].defence}</p>
                        <p>${data.stats[0].physique}</p>
                    </div>
                </div>`;
              
                        
            }
            }
        });
    });
}

    renderData();


        document.addEventListener("load",() =>{
            renderData();
        })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cards = document.querySelectorAll(".card");
cards.forEach((card)=>{
    card.addEventListener("click" , ()=>{
        let exact_position = card.getAttribute("position");
        console.log(exact_position);
        
    })
})





