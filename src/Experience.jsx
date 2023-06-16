import { OrbitControls } from '@react-three/drei'
import Dev1 from "./wfc/tiles/Dev1";


export default function Experience()
{


    return <>

        {/*<Perf position="top-left" />*/}

        <Dev1/>

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04} />
        <ambientLight intensity={ 0.5 } />

    </>
}