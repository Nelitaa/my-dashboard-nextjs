'use client';

import { useState } from "react";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => Object.values( state.pokemons ) );
  const[pokemons, setPokemons] = useState( favoritePokemons);

  return (
    <PokemonGrid pokemons={ pokemons } />
  )
}
