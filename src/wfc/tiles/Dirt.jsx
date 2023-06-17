import Tile from "../Tile";

export default class Dirt extends Tile {
    static id = "Dirt";
    static ok = [this.id, "Grass", "Stone"];

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
