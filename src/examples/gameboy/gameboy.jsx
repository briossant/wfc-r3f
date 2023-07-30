import tilesetRotator from "../../tilesets/tilesetRotator";
import tilesetRotatorOld from "../../tilesets/tilesetRotatorOld";
import {
    Buttons, Cross,
    CubicMess,
    Empty,
    Floor,
    FloorCon,
    Flower,
    FlowerBall,
    FlowerBottomBall,
    Lcon,
    Screen
} from "./gameboyModels";

const all_con = ["none"];
for (let i = 0; i < 12; i++) {
    all_con.push("a" + i)
}

export default {
    failsafeTile: "Air",
    borderConstraints: ["", "ground", "none"],
    forcedStart: undefined,
    tiles: tilesetRotatorOld({
        "Air": {
            constraints: [all_con, all_con, all_con, all_con, all_con, all_con], //  +X -X +Y -Y +Z -Z
            instantiate: <></>,
            frequency: 500,
            rotateOn: ""
        },
        "Screen": {
            constraints: [["side", "none"], ["side", "none"], ["side", "none"], "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <Screen/>,
            frequency: 1,
            rotateOn: "y"
        },
        "Empty": {
            constraints: [["side", "none"], ["side", "none"], "console#1010", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <Empty/>,
            frequency: 5,
            rotateOn: "y"
        },
        "Buttons": {
            constraints: [["side", "none"], ["side", "none"], "console#1010", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <Buttons/>,
            frequency: 5,
            rotateOn: "y"
        },
        "Cross": {
            constraints: [["side", "none"], ["side", "none"], "console#1010", "console#1010", "none", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <Cross/>,
            frequency: 5,
            rotateOn: "y"
        },
        "Lcon": {
            constraints: ["none", "none", "console#1010", "none", "console#1010", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <Lcon/>,
            frequency: 3,
            rotateOn: "xy"
        },
        "Floor": {
            constraints: ["ground", "ground", "none", "", "ground", "ground"], //  +X -X +Y -Y +Z -Z
            instantiate: <Floor/>,
            frequency: 0,
            rotateOn: ""
        },
        "FloorCon": {
            constraints: ["ground", "ground", "console#1010", "", "ground", "ground"], //  +X -X +Y -Y +Z -Z
            instantiate: <FloorCon/>,
            frequency: 0,
            rotateOn: "y"
        },
        "Flower": {
            constraints: ["none", "none", ["none", "flower"], "flower", "none", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <Flower/>,
            frequency: 3,
            rotateOn: "y"
        },
        "FlowerBall": {
            constraints: ["none", "none", "flower", "flower", "none", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <FlowerBall/>,
            frequency: 3,
            rotateOn: ""
        },
        "FlowerBottomBall": {
            constraints: ["none", "none", "flower", "none", "none", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <FlowerBottomBall/>,
            frequency: 3,
            rotateOn: ""
        },
        "CubicMess": {
            constraints: ["none", "side", "none", "none", "none", "none"], //  +X -X +Y -Y +Z -Z
            instantiate: <CubicMess/>,
            frequency: 1,
            rotateOn: "xyz"
        }
    })
};
