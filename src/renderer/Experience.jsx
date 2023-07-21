import { OrbitControls} from '@react-three/drei'
import tilesetExample from "../tilesets/tilesetExample";
import { useControls} from 'leva'
import WfcEl from "./WFC";

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

        <WfcEl tileset={tilesetExample} width={width} height={height} depth={depth}/>

        <OrbitControls makeDefault/>

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04}/>
        <ambientLight intensity={0.5}/>

    </>
}