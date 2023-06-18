import {Component} from "react";
import {useGLTF} from "@react-three/drei";

export default class Ground extends Component {
    static id = "Ground";
    static okPlusX = ["Ground", "GroundEdgePlusX"];
    static okPlusY = ["Air"];
    static okPlusZ = ["Ground", "GroundEdgePlusZ"];
    static okMinusX = ["Ground", "GroundEdgeMinusX"];
    static okMinusY = ["Air"];
    static okMinusZ = ["Ground", "GroundEdgeMinusZ"];

    static createReactInstance = (props) => <Ground {...props}/>;

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
