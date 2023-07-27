import tilesetRotator from "../tilesetRotator";
import {useGLTF} from "@react-three/drei";

function Screen(props) {
    const { nodes, materials } = useGLTF("models/gameboyScreen.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <group rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2.geometry}
                    material={materials["Material.003"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("models/gameboyScreen.glb");

export default tilesetRotator({
    "Air": {
        constraints: ["none","none","none","none","none","none"], //  +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 1,
        rotateOn: ""
    },
    "Screen": {
        constraints: ["console", "console", "console", "console", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Screen color={"#565656"}/>,
        frequency: 1,
        rotateOn: "123456"
    }
});
