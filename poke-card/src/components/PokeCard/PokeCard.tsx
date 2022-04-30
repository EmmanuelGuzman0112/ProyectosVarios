import { useEffect, useState } from "react";
import "../../css/estilos.css";
import { TPokemon } from "../../models";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const PokeCard = () => {
  const poke: TPokemon = {
    img: "",
    imgJuego: "",
    imgCvg: "",
    nombre: "",
    experiencia: "",
    hp: "",
    ataque: "",
    defensa: "",
    especial: "",
  };

  const [pokemon, setPokemon] = useState<TPokemon>(poke);

  const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  //Renderiza dos veces
  const fechData = async (id: String) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const resultado = await fetch(url);
      const data = await resultado.json();

      console.log("data", data);

      const pokemonApi: TPokemon = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
      };

      setPokemon(pokemonApi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const id = getRandom(1, 151);
    fechData(id.toString());
  }, []);

  return (
    <>
    <main className="flex">
      <article className="card">
        <Header />
        <Body pokemon={pokemon} />
        <Footer pokemon={pokemon} />
      </article>
    </main>
    </>
  );
};

export default PokeCard;
