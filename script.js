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

    let data = JSON.parse(localStorage.getItem("data") || "[]");


    if(position==="GK"){
        data.push(
            {
                name : player_name ,
                rating : player_rating,
                position : position,
                stats :
                {
                    reflexes : reflexes,
                    handling : handling,
                    kicking : kicking,
                    positioning :positioning ,
                    diving : diving,
                    communication : communication
                }
               
    
            }
        )
    }else{
        data.push(
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
    }

    localStorage.setItem("data" , JSON.stringify(data));

    location.reload();
    
})

function renderData (){
    const finalData = JSON.parse(localStorage.getItem("data"))
    let containner = document.querySelector(".sub");
    console.log(finalData);
    containner.innerHTML="";
    finalData.forEach((data)=>{

        containner.innerHTML += ` 
                    <div class="card">
                    <div class="s1">
                    <h1 class="rating">${data.rating}</h1>
                    <p>${data.position}</p>
                </div>
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
                </div>`

    })
    
    }

    renderData();


        document.addEventListener("load",() =>{
            renderData();
        })