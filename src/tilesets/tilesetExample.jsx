import tilesetRotator from "./tilesetRotator";

const tilesetExample = {
    "Air": {
        constraints: ["None", "None", "None", "None", "None", "None"], // the tile connection in each direction in the following order : +X -X +Y -Y +Z -Z
        instantiate: <></>, // the r3f model to display
        dontRotate: true
    },

    "Line Red": {
        constraints: ["Red connection", "Red connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <mesh scale={[1,0.3,0.3]}>
            <boxGeometry />
            <meshToonMaterial color="red"/>
        </mesh>,
        dontRotate: false
    },
    "Turn Red": {
        constraints: ["Red connection", "None", "Red connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[0.5,0.3,0.3]} position={[0.25,0,0]}>
                <boxGeometry />
                <meshToonMaterial color="red"/>
            </mesh>
            <mesh scale={[0.3,0.5,0.3]} position={[0,0.25,0]}>
                <boxGeometry />
                <meshToonMaterial color="red"/>
            </mesh>
        </group>,
        dontRotate: false
    },

    "Line Yellow": {
        constraints: ["Yellow connection", "Yellow connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <mesh scale={[1,0.3,0.3]}>
            <boxGeometry />
            <meshToonMaterial color="orange"/>
        </mesh>,
        dontRotate: false
    },
    "Turn Yellow": {
        constraints: ["Yellow connection", "None", "Yellow connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[0.5,0.3,0.3]} position={[0.25,0,0]}>
                <boxGeometry />
                <meshToonMaterial color="orange"/>
            </mesh>
            <mesh scale={[0.3,0.5,0.3]} position={[0,0.25,0]}>
                <boxGeometry />
                <meshToonMaterial color="orange"/>
            </mesh>
        </group>,
        dontRotate: false
    },

    "Line Green": {
        constraints: ["Green connection", "Green connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <mesh scale={[1,0.3,0.3]}>
            <boxGeometry />
            <meshToonMaterial color="green"/>
        </mesh>,
        dontRotate: false
    },
    "Turn Green": {
        constraints: ["Green connection", "None", "Green connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[0.5,0.3,0.3]} position={[0.25,0,0]}>
                <boxGeometry />
                <meshToonMaterial color="green"/>
            </mesh>
            <mesh scale={[0.3,0.5,0.3]} position={[0,0.25,0]}>
                <boxGeometry />
                <meshToonMaterial color="green"/>
            </mesh>
        </group>,
        dontRotate: false
    },
    /*"End": {
        constraints: ["Square connection", "None", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[0.5,0.3,0.3]} position={[0.25,0,0]}>
                <boxGeometry />
                <meshToonMaterial color="orange"/>
            </mesh>
            <mesh scale={[0.25,0.25,0.25]}>
                <sphereGeometry />
                <meshNormalMaterial color="green"/>
            </mesh>
        </group>,
        dontRotate: false
    }
    "Cross": {
        constraints: ["Square connection", "Square connection", "Square connection", "Square connection", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[1,0.3,0.3]}>
                <boxGeometry />
                <meshToonMaterial color="blue"/>
            </mesh>
            <mesh scale={[0.3,1,0.3]}>
                <boxGeometry />
                <meshToonMaterial color="blue"/>
            </mesh>
        </group>,
        dontRotate: false
    },*/
}

tilesetRotator(tilesetExample);

export default tilesetExample;