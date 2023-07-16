import {Float, OrbitControls} from '@react-three/drei'
import {useEffect, useState} from "react";
import WFC from "../wfc/WFC";
import tilesetExample from "../tilesets/tilesetExample";
import GridDisplayer from "./GridDisplayer";
import tilesetRotator from "../tilesets/tilesetRotator";


console.log(tilesetExample)

export default function Experience() {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        const wfc = new WFC(tilesetExample);
        wfc.run();
        setGrid(wfc.getGrid());
    }, []);

    return <>

        {/*<Perf position="top-left" />*/}

        <GridDisplayer tileset={tilesetExample} grid={grid} offset={5}/>

        <OrbitControls makeDefault/>

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04}/>
        <ambientLight intensity={0.5}/>

    </>
}