import {Component} from "react";

export default class Grass extends Component {
    static id = "Grass";
    static okPlusX = ["Grass","Air","Dirt", "Flower"];
    static okPlusY = ["Air", "Flower"];
    static okPlusZ = ["Grass","Air","Dirt", "Flower"];
    static okMinusX = ["Grass","Air","Dirt", "Flower"];
    static okMinusY = ["Dirt"];
    static okMinusZ = ["Grass","Air","Dirt", "Flower"];

    static createReactInstance = (props) => <Grass {...props}/>;

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='green' />
            </mesh>
        </>
    }
}
