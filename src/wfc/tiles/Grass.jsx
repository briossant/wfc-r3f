import {Component} from "react";

export default class Grass extends Component {
    static id = "Grass";
    static okPlusX = ["Grass","Air","Dirt"];
    static okPlusY = ["Air"];
    static okPlusZ = ["Grass","Air","Dirt"];
    static okMinusX = ["Grass","Air","Dirt"];
    static okMinusY = ["Dirt"];
    static okMinusZ = ["Grass","Air","Dirt"];

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
