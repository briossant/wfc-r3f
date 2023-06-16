import Tile from "../Tile";

export default class extends Tile {
    static id = "Dev3";
    static ok = ["Dev2"];

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='red' wireframe={true} />
            </mesh>
        </>
    }
}
