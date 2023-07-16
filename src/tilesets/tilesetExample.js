
export default {
    "Air": {
        constraints: ["None", "None", "None", "None", "None", "None"], // the tile connection in each direction in the following order : +X -X +Y -Y +Z -Z
        instantiate: (rotation) => <></> // function which return the 3d model based on the rotation
    },
    "Line": {
        constraints: ["Square connection", "Square connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: (rotation) => <mesh rotation={rotation}>
            <boxGeometry scale={[1,0.5,0.5]}/>
            <meshBasicMaterial/>
        </mesh>
    },
    "Cross": {
        constraints: ["Square connection", "Square connection", "Square connection", "Square connection", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: (rotation) => <group rotation={rotation}>
            <mesh>
                <boxGeometry scale={[1,0.5,0.5]}/>
                <meshBasicMaterial/>
            </mesh>
            <mesh>
                <boxGeometry scale={[0.5,1,0.5]}/>
                <meshBasicMaterial/>
            </mesh>
        </group>
    }
}

