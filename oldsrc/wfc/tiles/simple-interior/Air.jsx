import Tile from "../../Tile";

const Air = () => <></>;

export default class extends Tile {
    id = "Air";
    okPlusX = ["Air"];
    okPlusY = ["Air", "Roof"];
    okPlusZ = ["Air"];
    okMinusX = ["Air"];
    okMinusY = ["Air", "Ground"];
    okMinusZ = ["Air"];

    createReactInstance = (props) => <Air rotation={this.rotation} {...props}/>;
}


