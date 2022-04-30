import { FunctionComponent } from "react";
import { TPokemon } from "../../../../models";

type Props = {
    pokemon: TPokemon;
}

const Body: FunctionComponent<Props> = ({pokemon}) => {
  return (
    <div className="card-body">
      <img
        src={pokemon.img}
        alt="imagen card"
        className="card-body-img"
      />
      <h1 className="card-body-title">
        {pokemon.nombre} <span>{pokemon.hp} hp</span>
      </h1>
      <p className="card-body-text">Pokemon</p>
    </div>
  );
};

export default Body;
