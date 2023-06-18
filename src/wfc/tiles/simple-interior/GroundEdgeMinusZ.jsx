import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class GroundEdgeMinusZ extends Tile {
    static id = "GroundEdgePlusZ";
    static okPlusX = ["GroundEdgeMinusZ"];
    static okPlusY = [];
    static okPlusZ = ["Ground"];
    static okMinusX = ["GroundEdgeMinusZ"];
    static okMinusY = [];
    static okMinusZ = [];

    static createReactInstance = (props) => <GroundEdgeMinusZ {...props} />;
    render() {
        const { nodes, materials } = useGLTF("/simple-edge.glb");
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

useGLTF.preload("/simple-edge.glb");
