import {Component} from "react";
import {useGLTF} from "@react-three/drei";
import {getRdmFloat} from "../../../utilities";

const Flower = (props) => {
    const { nodes, materials } = useGLTF("/flower.glb");
    return (
        <group {...props} dispose={null} rotation-y={getRdmFloat(0, 2*Math.PI)}>
            <mesh
                geometry={nodes.Cylinder.geometry}
                material={materials.Material}
                position={[0, -0.46, 0]}
                scale={0.04}
            />
            <mesh
                geometry={nodes.Sphere.geometry}
                material={materials["Material.001"]}
                position={[0.16, 0.19, -0.06]}
                scale={0.65}
            />
            <mesh
                geometry={nodes.Sphere001.geometry}
                material={materials["Material.001"]}
                position={[0.16, 0.19, 0.02]}
                scale={0.65}
            />
            <mesh
                geometry={nodes.Sphere002.geometry}
                material={materials["Material.001"]}
                position={[0.23, 0.16, 0.01]}
                scale={0.65}
            />
            <mesh
                geometry={nodes.Sphere003.geometry}
                material={materials["Material.001"]}
                position={[0.1, 0.17, 0.04]}
                scale={0.65}
            />
            <mesh
                geometry={nodes.Sphere004.geometry}
                material={materials["Material.001"]}
                position={[0.16, 0.27, 0.02]}
                scale={0.65}
            />
            <mesh
                geometry={nodes.Sphere005.geometry}
                material={materials["Material.002"]}
                position={[-0.03, -0.44, 0]}
                rotation={[0, 0, 0.15]}
                scale={[0.23, 0.64, 0.64]}
            />
            <mesh
                geometry={nodes.Sphere006.geometry}
                material={materials["Material.002"]}
                position={[0.05, -0.45, 0.01]}
                rotation={[-Math.PI, 0, -2.89]}
                scale={[0.23, 0.64, 0.64]}
            />
        </group>
    );
}

export default class extends Component {
    id = "Flower";
    okPlusX = ["Grass","Air"];
    okPlusY = ["Air"];
    okPlusZ = ["Grass","Air"];
    okMinusX = ["Grass","Air"];
    okMinusY = ["Grass"];
    okMinusZ = ["Grass","Air"];

    createReactInstance = (props) => <Flower {...props}/>;
}

useGLTF.preload("/flower.glb");