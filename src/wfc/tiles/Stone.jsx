import Tile from "../Tile";

export default class Stone extends Tile {
    static id = "Stone";
    static ok = ["Dirt", "Stone"];

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
