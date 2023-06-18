import {Component} from "react";
import {useGLTF} from "@react-three/drei";

export default class Roof extends Component {
    static id = "Roof";
    static okPlusX = ["Roof", "RoofEdgePlusX"];
    static okPlusY = ["Air", "Ground"];
    static okPlusZ = ["Roof", "RoofEdgePlusX"];
    static okMinusX = ["Roof", "RoofEdgeMinusX"];
    static okMinusY = ["Air", "Ground"];
    static okMinusZ = ["Roof", "RoofEdgeMinusZ"];

    static createReactInstance = (props) => <Roof {...props}/>;

    render(){
        const { nodes, materials } = useGLTF("/simple-plane.glb");
        return (
            <group {...this.props} dispose={null} rotation-x={Math.PI}>
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
