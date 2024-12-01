function swapPlayer(){

    
    cards.forEach((card)=>{
        card.addEventListener("click" , ()=>{
            let name = card.querySelector('.name');
            let clearName = name.textContent.trim();
            if(clearName){
                let selectedplayersquad = data_squad.find(player => player.name === clearName);
                console.table(selectedplayersquad);   
            }
            else{
                console.log("no data");
            }
    
            card.classList.toggle('scale-125');
            
            
        })
        
    })
    
    
    cardsbench.forEach((benchCard)=>{
        benchCard.addEventListener("click" , ()=>{
            console.log("clicked");
            
        })
        
    })
    }
    
    swapPlayer();