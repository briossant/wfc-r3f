import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class GroundCornerMinusX extends Tile {
    static id = "GroundCornerMinusX";
    static okPlusX = ["Air"];
    static okPlusY = [];
    static okPlusZ = ["Air"];
    static okMinusX = ["GroundEdgeMinusZ", "GroundCornerMinusZ"];
    static okMinusY = ["Air", "Roof"];
    static okMinusZ = ["GroundEdgeMinusX", "GroundCornerPlusZ"];

    static createReactInstance = (props) => <GroundCornerMinusX {...props} />;
    render() {
        const { nodes, materials } = useGLTF("/simple-corner.glb");
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

useGLTF.preload("/simple-corner.glb");
