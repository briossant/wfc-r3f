import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class GroundEdgeMinusX extends Tile {
    static id = "GroundEdgeMinusX";
    static okPlusX = ["Ground"];
    static okPlusY = [];
    static okPlusZ = ["GroundEdgeMinusX"];
    static okMinusX = [];
    static okMinusY = [];
    static okMinusZ = ["GroundEdgeMinusX"];

    static createReactInstance = (props) => <GroundEdgeMinusX {...props} />;
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
