import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class GroundCornerPlusZ extends Tile {
    static id = "GroundCornerPlusZ";
    static okPlusX = [];
    static okPlusY = [];
    static okPlusZ = ["GroundEdgePlusZ"];
    static okMinusX = ["GroundEdgeMinusX"];
    static okMinusY = [];
    static okMinusZ = [];

    static createReactInstance = (props) => <GroundCornerPlusZ {...props} />;
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
