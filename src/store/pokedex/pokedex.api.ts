import { API_BASE_URL } from "CONTANTS";


export const searchForPokemonAPI = async (name:string, thunkAPI:any) =>{

     //bug fix
    //have to use lower cased input to fetch data or else api would throw an 404 error
    const lowerCasedName = name.toLocaleLowerCase();

    try {

        //get main data
        const pokemonResponse =  await fetch(`${API_BASE_URL}/pokemon/${lowerCasedName}`);

        const pokemonData  = await pokemonResponse.json();
 
        //need to fetch more data to determin evelutions
        const speciesUrl = pokemonData.species.url;
        const speciesResponse = await fetch(speciesUrl);
        const speciesData = await speciesResponse.json();
 
        const evolutionChainUrl = speciesData.evolution_chain.url;
        const evolutionChainResponse = await fetch(evolutionChainUrl);
        const evolutionChainData = await evolutionChainResponse.json();

        const evolutionArray :any = []
        extractEvolutionChain(evolutionChainData.chain, evolutionArray);
       

        const allEvolutionData: any[]  = []
     
        for(const item of evolutionArray){
  
  
              const evoResponse = await  fetch(`${API_BASE_URL}/pokemon/${item}`);
              const eveJson = await evoResponse.json();
    
              const data = {
                name: eveJson.name,
                image: eveJson.sprites.front_default
              }
  
              console.log(data)
              //full = [...full, data]
              allEvolutionData.push(data);
  
  
        }
       
        //pick an few random information to display
        const count = 10;
        const randomEntries = [];
        for (let i = 0; i < count; i++) {
          const randomIndex = Math.floor(Math.random() * speciesData.flavor_text_entries.length);
          
          randomEntries.push(speciesData.flavor_text_entries[randomIndex].flavor_text);
        }

        const descriptionText = randomEntries.join();


        return {pokemonData, allEvolutionData, descriptionText};
 
        
    } catch (error) {
        
        console.log(error)
        return thunkAPI.rejectWithValue("Something went wrong");
    }
}



 // Recursively
const extractEvolutionChain =  (chain: any, array: any[]) => {
   
  
    if (chain.evolves_to && chain.evolves_to.length > 0) {

       chain.evolves_to.map((evolution: any) => {

          array.push(evolution.species.name);
         
         extractEvolutionChain(evolution, array);
      });
    }
  
    
  };