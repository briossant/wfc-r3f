import tilesetRotator from "./tilesetRotator";

const tilesetExample = {
    "Air": {
        constraints: ["None", "None", "None", "None", "None", "None"], // the tile connection in each direction in the following order : +X -X +Y -Y +Z -Z
        instantiate: <></>, // the r3f model to display
        dontRotate: true
    },
    "Line": {
        constraints: ["Square connection", "Square connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <mesh scale={[1,0.5,0.5]}>
            <boxGeometry />
            <meshNormalMaterial color="orange"/>
        </mesh>,
        dontRotate: false
    },
    "Cross": {
        constraints: ["Square connection", "Square connection", "Square connection", "Square connection", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[1,0.5,0.5]}>
                <boxGeometry />
                <meshBasicMaterial color="blue"/>
            </mesh>
            <mesh scale={[0.5,1,0.5]}>
                <boxGeometry />
                <meshBasicMaterial color="blue"/>
            </mesh>
        </group>,
        dontRotate: false
    }
}

tilesetRotator(tilesetExample);

export default tilesetExample;