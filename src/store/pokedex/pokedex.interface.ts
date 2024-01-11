export interface PokemonDataInterface{

    data : any,
    stats: any,
    pokemonType:string,
    name:string,
    sprite:string;
    id:number;
    back_sprite:string,
    attacks:string[],
    allEvolutionData: any,
    descriptionText:string,
}

export interface PokedexInterface{

    pokemonData : PokemonDataInterface | null;
    isFetchingData : boolean;
    dataFetchedSuccessfully: boolean;

    
}