import {Component} from "react";

export default class extends Component {
    static id = "Dev2";
    static ok = ["Dev1", this.id, "Dev3", "Air"];

    render(){
        return <>
            <mesh {...this.props}>
                <boxGeometry/>
                <meshStandardMaterial color='purple' wireframe={true} />
            </mesh>
        </>
    }
}
