import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: 'Favorites Page',
  description: 'This is the favorites pokemons page',
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <h1 className="text-5xl font-bold my-2">Favorite Pokemons list<small className="text-blue-500"> - Global State</small></h1>

      <PokemonGrid pokemons={ [] }/>

    </div>
  );
}