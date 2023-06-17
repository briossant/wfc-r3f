import Tile from "../Tile";

export default class Stone extends Tile {
    static id = "Stone";
    static okPlusX = ["Stone", "Dirt"];
    static okPlusY = ["Stone", "Dirt"];
    static okPlusZ = ["Stone", "Dirt"];
    static okMinusX = ["Stone", "Dirt"];
    static okMinusY = ["Stone"];
    static okMinusZ = ["Stone", "Dirt"];

    static createReactInstance = (props) => <Stone {...props}/>;

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='gray' />
            </mesh>
        </>
    }
}
