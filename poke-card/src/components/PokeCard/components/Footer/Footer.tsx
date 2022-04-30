import { FunctionComponent } from "react";
import { TPokemon } from "../../../../models";

type Props = {
  pokemon: TPokemon;
};

const Footer: FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <div className="card-footer">
      <div className="card-footer-social">
        <h3>{pokemon.ataque}</h3>
        <p>Ataque</p>
      </div>
      <div className="card-footer-social">
        <h3>{pokemon.especial}</h3>
        <p>Ataque especial</p>
      </div>
      <div className="card-footer-social">
        <h3>{pokemon.defensa}</h3>
        <p>Defensa</p>
      </div>
    </div>
  );
};

export default Footer;
