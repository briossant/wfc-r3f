import Tile from "../../Tile";

const Dirt = (props) => <>
    <mesh {...props}>
        <boxGeometry/>
        <meshStandardMaterial color='#6F4E37'/>
    </mesh>
</>

export default class extends Tile {
    id = "Dirt";
    okPlusX = ["Grass", "Dirt", "Stone"];
    okPlusY = ["Grass", "Dirt"];
    okPlusZ = ["Grass", "Dirt", "Stone"];
    okMinusX = ["Grass", "Dirt", "Stone"];
    okMinusY = ["Dirt", "Stone", "Stone"];
    okMinusZ = ["Grass", "Dirt", "Stone"];

    createReactInstance = (props) => <Dirt rotation={this.rotation} {...props} />;
};
