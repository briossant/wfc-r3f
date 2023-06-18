import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class RoofEdgePlusZ extends Tile {
    static id = "RoofEdgePlusZ";
    static okPlusX = ["RoofEdgePlusZ"];
    static okPlusY = [];
    static okPlusZ = [];
    static okMinusX = ["RoofEdgePlusZ"];
    static okMinusY = [];
    static okMinusZ = ["Roof"];

    static createReactInstance = (props) => <RoofEdgePlusZ {...props} />;
    render() {
        const { nodes, materials } = useGLTF("/simple-edge.glb");
        return (
            <group {...this.props} dispose={null}>
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
