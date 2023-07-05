import {Component} from "react";
import {useGLTF} from "@react-three/drei";

export default class Plane extends Component {
    static id = "Plane";
    static okPlusX = ["Plane", "Edge"];
    static okPlusY = ["Air"];
    static okPlusZ = ["Plane", "Edge"];
    static okMinusX = ["Plane", "Edge"];
    static okMinusY = ["Air"];
    static okMinusZ = ["Plane", "Edge"];

    static createReactInstance = (props) => <Plane {...props}/>;

    render(){
        const { nodes, materials } = useGLTF("/simple-plane.glb");
        return (
            <group {...this.props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={materials["Material.001"]}
                />
            </group>
        );
    }
}

useGLTF.preload("/simple-plane.glb");
