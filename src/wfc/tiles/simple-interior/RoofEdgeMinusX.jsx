import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class RoofEdgeMinusX extends Tile {
    static id = "RoofEdgeMinusX";
    static okPlusX = ["Roof"];
    static okPlusY = [];
    static okPlusZ = ["RoofEdgeMinusX"];
    static okMinusX = [];
    static okMinusY = [];
    static okMinusZ = ["RoofEdgeMinusX"];

    static createReactInstance = (props) => <RoofEdgeMinusX {...props} />;
    render() {
        const { nodes, materials } = useGLTF("/simple-edge.glb");
        return (
            <group {...this.props} dispose={null} rotation-y={Math.PI}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials.Material}
                    scale={[0.5, 1, 0.5]}
                />
            </group>
        );
    }
}

useGLTF.preload("/simple-edge.glb");
