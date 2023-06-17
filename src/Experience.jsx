import { OrbitControls } from '@react-three/drei'
import {useEffect, useState} from "react";
import Grid from "./wfc/Grid";
import Air from "./wfc/tiles/Air";
import GridDisplayer from "./GridDisplayer";
import Dirt from "./wfc/tiles/Dirt";
import Grass from "./wfc/tiles/Grass";
import Stone from "./wfc/tiles/Stone";


export default function Experience()
{
    const [grd, setGrd] = useState([]);

    useEffect(() => {
        const grid = new Grid(16,16,16,[Air, Dirt, Grass, Stone])
        grid.run();
        setGrd(grid.grid);
    }, [])


    return <>

        {/*<Perf position="top-left" />*/}


        <GridDisplayer grid={grd} offset={5}/>

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04} />
        <ambientLight intensity={ 0.5 } />

    </>
}