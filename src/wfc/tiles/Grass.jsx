import {Component} from "react";

export default class Grass extends Component {
    static id = "Grass";
    static ok = ["Dirt", "Grass", "Air"];

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
