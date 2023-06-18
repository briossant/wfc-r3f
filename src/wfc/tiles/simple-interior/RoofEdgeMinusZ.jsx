import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class RoofEdgeMinusZ extends Tile {
    static id = "RoofEdgePlusZ";
    static okPlusX = ["RoofEdgeMinusZ"];
    static okPlusY = [];
    static okPlusZ = ["Roof"];
    static okMinusX = ["RoofEdgeMinusZ"];
    static okMinusY = [];
    static okMinusZ = [];

    static createReactInstance = (props) => <RoofEdgeMinusZ {...props} />;
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
