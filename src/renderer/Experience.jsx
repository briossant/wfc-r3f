import { OrbitControls} from '@react-three/drei'
import pipes from "../tilesets/examples/pipes";
import { useControls} from 'leva'
import WfcEl from "./WFC";
import minecraft from "../tilesets/examples/minecraft";
import stairs from "../tilesets/examples/stairs";

export default function Experience() {

    const {width, height, depth} = useControls({
        width: {
            value: 8,
            step: 1,
            min: 4,
            max: 20,
        },
        height: {
            value: 8,
            step: 1,
            min: 4,
            max: 20,
        },
        depth: {
            value: 8,
            step: 1,
            min: 4,
            max: 20,
        }
    })

    return <>

        {/*<Perf position="top-left" />*/}

        <WfcEl tileset={stairs} width={width} height={height} depth={depth}/>

        <OrbitControls makeDefault/>

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04}/>
        <ambientLight intensity={0.5}/>

    </>
}