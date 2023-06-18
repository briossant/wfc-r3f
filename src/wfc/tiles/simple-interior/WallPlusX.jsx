import {Component} from "react";
import {useGLTF} from "@react-three/drei";

export default class WallPlusX extends Component {
    static id = "WallPlusX";
    static okPlusX = ["Air"];
    static okPlusY = ["WallPlusX"];
    static okPlusZ = ["WallPlusX"];
    static okMinusX = ["Air"];
    static okMinusY = ["WallPlusX"];
    static okMinusZ = ["WallPlusX"];

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
