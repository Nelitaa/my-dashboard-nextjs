import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }:Props): Promise<Metadata> {

  const { id, name } = await getPokemon(params.id);

  return {
    title: `Pokemon #${ id }: ${ name }`,
    description: `This is the ${ name } page`,
  }
}

const getPokemon = async(id: string): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
  const data = await response.json();
  console.log("Pokemon's name:", data.name);
  return data;
}

export default async function PokemonPage({ params }: Props) {

  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Pokemon { params.id }</h1>
      <div>
        { JSON.stringify( pokemon )}
      </div>
    </div>
  );
}