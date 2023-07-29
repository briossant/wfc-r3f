import {OrbitControls, Environment} from '@react-three/drei'
import {useControls} from 'leva'
import WfcEl from "../../renderer/WFC";
import gameboy from "./gameboy";

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
        <WfcEl tileset={gameboy} width={width} height={height} depth={depth}/>


        {/*<axesHelper args={[20, 20, 20]}/>*/}

        <OrbitControls makeDefault/>
        <directionalLight color={"#ffffff"} position={[-1, -2, -3]} intensity={0.3} shadow-normalBias={0.04}/>
        <directionalLight color={"#ffffff"} castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04}/>
        <ambientLight intensity={0.5}/>

    </>;
}