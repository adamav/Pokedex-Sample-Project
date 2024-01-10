import { PokemonDataInterface } from "store/pokedex/pokedex.interface"

export interface EvolutionOverlayInterface{

    show?:boolean,
    pokemon?: PokemonDataInterface | null,
    onSelectEvolution?: (name:string) => void;
    onClose?: () => void;
}