import tilesetRotator from "./tilesetRotator";

const orange = "#273B09";
const green = "#002400";
const red = "#58641D";


const tilesetExample = {
    "Air": {
        constraints: ["None", "None", "None", "None", "None", "None"], // the tile connection in each direction in the following order : +X -X +Y -Y +Z -Z
        instantiate: <></>, // the r3f model to display
        frequency: 400,
        dontRotate: true
    },

    "Line Red": {
        constraints: ["Red connection", "Red connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <mesh scale={[1,0.3,0.3]}>
            <boxGeometry />
            <meshToonMaterial color={red}/>
        </mesh>,
        frequency: 1
    },
    "Turn Red": {
        constraints: ["Red connection", "None", "Red connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[0.5,0.3,0.3]} position={[0.25,0,0]}>
                <boxGeometry />
                <meshToonMaterial color={red}/>
            </mesh>
            <mesh scale={[0.3,0.5,0.3]} position={[0,0.25,0]}>
                <boxGeometry />
                <meshToonMaterial color={red}/>
            </mesh>
        </group>,
        frequency: 1
    },

    "Line Yellow": {
        constraints: ["Yellow connection", "Yellow connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <mesh scale={[1,0.3,0.3]}>
            <boxGeometry />
            <meshToonMaterial color={orange}/>
        </mesh>,
        frequency: 1
    },
    "Turn Yellow": {
        constraints: ["Yellow connection", "None", "Yellow connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[0.5,0.3,0.3]} position={[0.25,0,0]}>
                <boxGeometry />
                <meshToonMaterial color={orange}/>
            </mesh>
            <mesh scale={[0.3,0.5,0.3]} position={[0,0.25,0]}>
                <boxGeometry />
                <meshToonMaterial color={orange}/>
            </mesh>
        </group>,
        frequency: 1
    },

    "Line Green": {
        constraints: ["Green connection", "Green connection", "None", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <mesh scale={[1,0.3,0.3]}>
            <boxGeometry />
            <meshToonMaterial color={green}/>
        </mesh>,
        frequency: 1
    },
    "Turn Green": {
        constraints: ["Green connection", "None", "Green connection", "None", "None", "None"], // +X -X +Y -Y +Z -Z
        instantiate: <group>
            <mesh scale={[0.5,0.3,0.3]} position={[0.25,0,0]}>
                <boxGeometry />
                <meshToonMaterial color={green}/>
            </mesh>
            <mesh scale={[0.3,0.5,0.3]} position={[0,0.25,0]}>
                <boxGeometry />
                <meshToonMaterial color={green}/>
            </mesh>
        </group>,
        frequency: 1
    }
}

tilesetRotator(tilesetExample);

export default tilesetExample;