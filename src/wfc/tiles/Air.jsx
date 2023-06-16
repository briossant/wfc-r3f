import {Component} from "react";

export default class extends Component {
    static id = "Air";
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
