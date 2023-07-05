import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class Edge extends Tile {
    static id = "GroundEdgePlusZ";
    static okPlusX = ["GroundEdgePlusZ"];
    static okPlusY = [];
    static okPlusZ = [];
    static okMinusX = ["GroundEdgePlusZ"];
    static okMinusY = [];
    static okMinusZ = ["Ground"];

    static createReactInstance = (props) => <Edge {...props} />;
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
