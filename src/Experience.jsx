import { OrbitControls } from '@react-three/drei'
import {useEffect, useState} from "react";
import Grid from "./wfc/Grid";
import GridDisplayer from "./GridDisplayer";
import Ground from "./wfc/tiles/simple-interior/Ground";
import GroundEdgeMinusX from "./wfc/tiles/simple-interior/GroundEdgeMinusX";
import GroundEdgeMinusZ from "./wfc/tiles/simple-interior/GroundEdgeMinusZ";
import GroundEdgePlusX from "./wfc/tiles/simple-interior/GroundEdgePlusX";
import GroundEdgePlusZ from "./wfc/tiles/simple-interior/GroundEdgePlusZ";
import Roof from "./wfc/tiles/simple-interior/Roof";
import RoofEdgeMinusZ from "./wfc/tiles/simple-interior/RoofEdgeMinusZ";
import RoofEdgeMinusX from "./wfc/tiles/simple-interior/RoofEdgeMinusX";
import RoofEdgePlusX from "./wfc/tiles/simple-interior/RoofEdgePlusX";
import RoofEdgePlusZ from "./wfc/tiles/simple-interior/RoofEdgePlusZ";
import Air from "./wfc/tiles/simple-interior/Air";
import GroundCornerPlusZ from "./wfc/tiles/simple-interior/GroundCornerPlusZ";
import GroundCornerMinusZ from "./wfc/tiles/simple-interior/GroundCornerMinusZ";
import GroundCornerMinusX from "./wfc/tiles/simple-interior/GroundCornerMinusX";
import GroundCornerPlusX from "./wfc/tiles/simple-interior/GroundCornerPlusX";



export default function Experience()
{
    const [grd, setGrd] = useState([]);

    useEffect(() => {
        const grid = new Grid(8,8,8,[
            Ground, GroundEdgeMinusX, GroundEdgeMinusZ, GroundEdgePlusX, GroundEdgePlusZ,
            Roof, RoofEdgeMinusX, RoofEdgeMinusZ, RoofEdgePlusX, RoofEdgePlusZ, Air,
            GroundCornerPlusZ, GroundCornerPlusX, GroundCornerMinusZ, GroundCornerMinusX
        ], Air);
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