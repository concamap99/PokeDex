export interface DataOfAPokemon{
    height?: number
    abilities?: Array<object>
    base_experience?: number
    forms?: Array<object>
    game_indices?: Array<object>
    held_items?: Array<object>
    id?: number
    is_default?: boolean
    location_area_encounters?: string
    moves?: Array<object>
    name?: string
    order?: number
    species?: Array<object>
    sprites?: Array<Sprites>
    stats: Array<Stat> //Éo hiểu kiểu gì :D
    types?: Array<{slot: number, type:{ name:string, url: string } }>
    weight?: number
  }
  type Sprites = Readonly<{
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
  }>
  export type Stat = Readonly<{
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
  }>
  export class DataOfAPokemonClass<DataOfAPokemon> {
    height: number = 0;
    abilities: Array<object> = [];
    base_experience: number = 0;
    forms: Array<object> = [];
    game_indices: Array<object> = [];
    held_items: Array<object> = [];
    id: number = 0;
    is_default: boolean = true;
    location_area_encounters: string = '';
    moves: Array<object> = [];
    name: string = '';
    order: number = 0;
    species: Array<object> = [];
    sprites: Array<Sprites> = [
      {
        back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        back_female:null,
        back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
        back_shiny_female:null,
        front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        front_female:null,
        front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
        front_shiny_female:null
      }
    ];
    stats: Array<Stat> = [
      {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
    ];
    types: Array<{slot: number, type:{ name:string, url: string } }> = [{
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }]
    weight: number = 0;
  }