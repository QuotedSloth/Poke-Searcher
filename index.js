// fetch function

async function fetchData(){

    try{

        const pkmnName = document.getElementById("pkmnName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnName}`);

        if(!response.ok){
            throw new Error("That Pokemon doesn't exist.")
        }
        
        const data = await response.json();

        if(data.types[1]){
            var weakness = "";
            const pkmnType = data.types[0].type.name;
            const pkmnType2 = data.types[1].type.name
            const typeText = document.getElementById("pkmnType");
            const weaknessText = document.getElementById("pkmnWeakness")
            typeText.innerHTML = `This pokémon is a ${pkmnType} and ${pkmnType2} type`;

            switch(pkmnType){
                case pkmnType = "normal":
                    console.log("test123")
                    weakness = "fighting"
                    weaknessText.innerHTML = `This pokemon is weak to ${weakness}`;

            }

        }

        else{
            const pkmnType = data.types[0].type.name;
            const typeText = document.getElementById("pkmnType");
            typeText.innerHTML = `This pokémon is a ${pkmnType} type`;
        }
       
        const pkmnImg = data.sprites.front_default;        
        const imgElement = document.getElementById("pkmnImg");
    
        imgElement.src = pkmnImg;
        imgElement.style.display = "block";

        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}
