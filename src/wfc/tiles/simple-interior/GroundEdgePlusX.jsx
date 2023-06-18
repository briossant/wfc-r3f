import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Tile from "../../Tile";

export default class GroundEdgePlusX extends Tile {
    static id = "GroundEdgePlusX";
    static okPlusX = [];
    static okPlusY = [];
    static okPlusZ = ["GroundEdgePlusX"];
    static okMinusX = ["Ground"];
    static okMinusY = [];
    static okMinusZ = ["GroundEdgePlusX"];

    static createReactInstance = (props) => <GroundEdgePlusX {...props} />;
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
