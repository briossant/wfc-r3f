import Tile from "../Tile";

export default class extends Tile {
    static id = "Dev1";
    static ok = [this.id, "Dev2"];

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='green' wireframe={true} />
            </mesh>
        </>
    }
}
