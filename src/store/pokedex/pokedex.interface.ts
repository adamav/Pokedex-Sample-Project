export interface PokemonDataInterface{

    data : any,
    stats: any,
    pokemonType:string,
    name:string,
    sprite:string;
    id:number;
    allEvolutionData: any,
    descriptionText:string,
}

export interface PokedexInterface{

    pokemonData : PokemonDataInterface | null;
    isFetchingData : boolean;
    dataFetchedSuccessfully: boolean;

    
}