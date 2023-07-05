import {Float, OrbitControls} from '@react-three/drei'
import {useEffect, useState} from "react";
import WFC from "./wfc/WFC";
import GridDisplayer from "./GridDisplayer";
import Air from "./wfc/tiles/mc-set/Air";
import Dirt from "./wfc/tiles/mc-set/Dirt";
import Stone from "./wfc/tiles/mc-set/Stone";
import Grass from "./wfc/tiles/mc-set/Grass";
import Flower from "./wfc/tiles/mc-set/Flower";

const wfc = new WFC(12, 8, 12, [
    Dirt, Stone, Grass, Air, Flower
], Air);

export default function Experience() {
    const [grid, setGrid] = useState([]);


    useEffect(() => {
        wfc.moveGrid();
        wfc.run();
        setGrid([...wfc.grid]);
    }, [grid]);

    return <>

        {/*<Perf position="top-left" />*/}

        <GridDisplayer grid={grid} getCoo={wfc.getCoordinates} offset={5}/>

        <OrbitControls makeDefault/>

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04}/>
        <ambientLight intensity={0.5}/>

    </>
}