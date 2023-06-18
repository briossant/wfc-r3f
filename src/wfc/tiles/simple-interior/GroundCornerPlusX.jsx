import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class GroundCornerPlusX extends Tile {
    static id = "GroundCornerPlusX";
    static okPlusX = [];
    static okPlusY = [];
    static okPlusZ = ["GroundEdgePlusZ"];
    static okMinusX = [];
    static okMinusY = [];
    static okMinusZ = ["GroundEdgePlusX"];

    static createReactInstance = (props) => <GroundCornerPlusX {...props} />;
    render() {
        const { nodes, materials } = useGLTF("/simple-corner.glb");
        return (
            <group {...this.props} dispose={null} rotation-y={Math.PI/2}>
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

useGLTF.preload("/simple-corner.glb");
