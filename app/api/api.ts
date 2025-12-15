import {
  get,
  post,
} from "./api.crud";

const BASE_POKEMON_URL = "https://pokeapi.co/api/v2";

export const API = {
  translate: {
    asShakespeare: (text: string) => post("/api/shakespeare", { text }),
  },
  pokemon: {
    getSpecies: (name: string) =>
      get(`${BASE_POKEMON_URL}/pokemon-species/${name.toLowerCase()}`),
  },
};

