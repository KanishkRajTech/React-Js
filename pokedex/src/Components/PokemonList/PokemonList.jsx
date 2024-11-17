import { useEffect, useState  } from "react";
import axios from 'axios';
import './PokemoList.css';
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const downloadPokemons = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(pokedexUrl);
      const pokemonResult = response.data.results;

      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);

      const pokemonPromises = pokemonResult.map((pokemon) => axios.get(pokemon.url));
      const pokemonData = await Promise.all(pokemonPromises);

      const formattedData = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.front_shiny,
          types: pokemon.types.map((typeInfo) => typeInfo.type.name), // Extract types
        };
      });

      setPokemonList(formattedData);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    downloadPokemons();
  }, [pokedexUrl]);

  return (
    <div className="pokemon-list-wrapper">
      <h1>List of Pokémon</h1>
      <div className="pokemon-wraper">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          pokemonList.map((p) => (
            <Pokemon name={p.name} image={p.image} key={p.id} />
          ))
        )}
      </div>
      <div className="control">
        <button disabled={!prevUrl} onClick={() => setPokedexUrl(prevUrl)}>
          Prev
        </button>
        <button disabled={!nextUrl} onClick={() => setPokedexUrl(nextUrl)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
