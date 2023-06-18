import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class RoofEdgePlusX extends Tile {
    static id = "RoofEdgePlusX";
    static okPlusX = [];
    static okPlusY = [];
    static okPlusZ = ["RoofEdgePlusX"];
    static okMinusX = ["Roof"];
    static okMinusY = [];
    static okMinusZ = ["RoofEdgePlusX"];

    static createReactInstance = (props) => <RoofEdgePlusX {...props} />;
    render() {
        const { nodes, materials } = useGLTF("/simple-edge.glb");
        return (
            <group {...this.props} dispose={null} rotation-y={Math.PI/2*3}>
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
