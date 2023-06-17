import {Component} from "react";

export default class extends Component {
    static id = "Grass";
    static ok = ["Dirt", this.id, "Air"];

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='green' />
            </mesh>
        </>
    }
}
