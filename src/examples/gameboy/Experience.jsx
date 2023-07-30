import {OrbitControls, Environment} from '@react-three/drei'
import {useControls} from 'leva'
import WfcEl from "../../renderer/WFC";
import gameboy from "./gameboy";
import {Bloom, DepthOfField, EffectComposer, Noise, Scanline, Vignette} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";
import {Perf} from "r3f-perf";

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

        <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={2.9} height={100} />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            {/*<Scanline
                blendFunction={BlendFunction.OVERLAY} // blend mode
                density={2.25} // scanline density
            />*/}
        </EffectComposer>

        <Perf position="top-left" />
        <WfcEl tileset={gameboy} width={width} height={height} depth={depth}/>


        {/*<axesHelper args={[20, 20, 20]}/>*/}

        <OrbitControls makeDefault/>
        <directionalLight color={"#ffffff"} position={[-1, -2, -3]} intensity={0.3} shadow-normalBias={0.04}/>
        <directionalLight color={"#ffffff"} castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04}/>
        <ambientLight intensity={0.5}/>

    </>;
}