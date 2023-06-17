import Tile from "../Tile";

export default class Dirt extends Tile {
    static id = "Dirt";
    static okPlusX = ["Grass","Dirt","Stone"];
    static okPlusY = ["Grass","Dirt"];
    static okPlusZ = ["Grass","Dirt","Stone"];
    static okMinusX = ["Grass","Dirt","Stone"];
    static okMinusY = ["Dirt", "Stone","Stone"];
    static okMinusZ = ["Grass","Dirt","Stone"];

    static createReactInstance = (props) => <Dirt {...props} />;

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='#6F4E37' />
            </mesh>
        </>
    }
}
