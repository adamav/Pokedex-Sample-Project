export interface PokemonDataInterface{

    data : any,
    stats: any,
    allEvolutionData: any,
    descriptionText:string,
}

export interface PokedexInterface{

    pokemonData : PokemonDataInterface | null;
    isFetchingData : boolean;
    dataFetchedSuccessfully: boolean;

    
}