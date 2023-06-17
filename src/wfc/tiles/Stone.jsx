import Tile from "../Tile";

export default class extends Tile {
    static id = "Stone";
    static ok = ["Air", "Dirt", this.id];

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='gray' />
            </mesh>
        </>
    }
}
