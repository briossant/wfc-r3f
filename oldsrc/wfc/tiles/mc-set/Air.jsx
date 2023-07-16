import Tile from "../../Tile";

const Air = () => <></>;

export default class extends Tile {
    id = "Air";
    okPlusX = ["Air", "Grass", "Flower"];
    okPlusY = ["Air"];
    okPlusZ = ["Air", "Grass", "Flower"];
    okMinusX = ["Air", "Grass", "Flower"];
    okMinusY = ["Air", "Grass", "Flower"];
    okMinusZ = ["Air", "Grass", "Flower"];

    createReactInstance = (props) => <Air/>;
}
