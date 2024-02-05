const getPokemons = async ( limit = 20, offset = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons();

  return (
    <div>
      <h1>Hello Pokemons</h1>
      <ul>
        {pokemons.results.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}