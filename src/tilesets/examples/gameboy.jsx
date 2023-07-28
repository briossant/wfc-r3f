import tilesetRotator from "../tilesetRotator";
import {useGLTF} from "@react-three/drei";
import tilesetRotatorOld from "../tilesetRotatorOld";

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

function Buttons(props) {
    const { nodes, materials } = useGLTF("models/gameboyButtons.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.buttonWgitePlastic}
                scale={[1, 1, 0.25]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.Red}
                position={[-0.368, -0.092, 0.088]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.254}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={materials.Red}
                position={[0.35, 0.192, 0.088]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.254}
            />
        </group>
    );
}


function Lcon(props) {
    const { nodes, materials } = useGLTF("models/gameboyL.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.L_connector.geometry}
                material={materials.Material}
                scale={[1, 1, 0.25]}
            />
        </group>
    );
}

function FloorCon(props) {
    const { nodes, materials } = useGLTF("models/gameboyFloorCon.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor_con.geometry}
                material={materials.WhitePlastic}
            />
        </group>
    );
}


function Floor(props) {
    const { nodes, materials } = useGLTF("models/gameboyFloor.glb");
    return (
        <group {...props} scale={0.5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
                material={materials.WhitePlastic}
                position={[0, -0.5, 0]}
                scale={[1, 0.5, 1]}
            />
        </group>
    );
}

useGLTF.preload("models/gameboyFloor.glb");
useGLTF.preload("models/gameboyFloorCon.glb");
useGLTF.preload("models/gameboyL.glb");
useGLTF.preload("models/gameboyButtons.glb");
useGLTF.preload("models/gameboyScreen.glb");

const all_con = ["none"];
for (let i = 0; i < 12; i++) {
    all_con.push("a"+i)
}

export default {
    failsafeTile: "Air",
    borderConstraints: ["", "ground", "none"],
    forcedStart: {index:0, tiles:["Floor"]},
    tiles: tilesetRotatorOld({
    "Air": {
        constraints: [all_con, all_con, all_con, all_con, all_con, all_con], //  +X -X +Y -Y +Z -Z
        instantiate: <></>,
        frequency: 100,
        rotateOn: ""
    },
    "Screen": {
        constraints: ["none", "none", "none", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Screen/>,
        frequency: 1,
        rotateOn: "y"
    },
    "Buttons": {
        constraints: ["none", "none", "console#1010", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Buttons/>,
        frequency: 5,
        rotateOn: "y"
    },
    "Lcon": {
        constraints: ["none",  "none", "console#1010",  "none", "console#1010", "none"], //  +X -X +Y -Y +Z -Z
        instantiate: <Lcon/>,
        frequency: 3,
        rotateOn: "xy"
    },
    "Floor": {
        constraints: ["ground",  "ground", "none",  "", "ground", "ground"], //  +X -X +Y -Y +Z -Z
        instantiate: <Floor/>,
        frequency: 50,
        rotateOn: ""
    },
    "FloorCon": {
        constraints: ["ground",  "ground", "console#1010",  "", "ground", "ground"], //  +X -X +Y -Y +Z -Z
        instantiate: <FloorCon/>,
        frequency: 1,
        rotateOn: "y"
    },
})};
