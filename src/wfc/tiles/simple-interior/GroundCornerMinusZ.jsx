import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class GroundCornerMinusZ extends Tile {
    static id = "GroundCornerMinusZ";
    static okPlusX = ["GroundEdgeMinusZ"];
    static okPlusY = [];
    static okPlusZ = [];
    static okMinusX = [];
    static okMinusY = [];
    static okMinusZ = ["GroundEdgePlusX"];

    static createReactInstance = (props) => <GroundCornerMinusZ {...props} />;
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
