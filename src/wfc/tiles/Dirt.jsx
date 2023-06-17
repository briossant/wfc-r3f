import Tile from "../Tile";

export default class extends Tile {
    static id = "Dirt";
    static ok = [this.id, "Grass", "Stone"];

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='brown' />
            </mesh>
        </>
    }
}
