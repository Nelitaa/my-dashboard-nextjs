import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from 'next/image';

const getPokemons = async ( limit = 20, offset = 0 ):Promise<SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data:PokemonsResponse = await response.json();

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg`}
          width={100}
          height={100}
          alt="Pokemon name"
        />
      </div>
    </div>
  );
}