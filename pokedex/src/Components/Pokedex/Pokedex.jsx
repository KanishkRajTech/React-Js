import PokemonList from "../PokemonList/PokemonList";
import Serach from "../Search/Search";
import "./Pokedex.css"
function Pokedex(){
    return(
        <div className="pokedex-wraper">
            <h1 id="pokedex-heading">Pokedex</h1>
            <Serach/>
            <PokemonList/>
        </div>
    )
}

export default Pokedex;