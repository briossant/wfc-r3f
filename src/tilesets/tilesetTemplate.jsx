import tilesetRotator from "./tilesetRotator";


export default tilesetRotator({
    "Tile name": {
        constraints: ["connector name", "connector name", "connector name",
            "connector name", "connector name", "connector name"], // the tile connection in each direction in the following order : +X -X +Y -Y +Z -Z
        instantiate: <></>, // the r3f model to display
        frequency: 1, // integer, the higher the more the tile will appear
        dontRotate: true // optional default false, true = not affected by tilesetRotator
    },
});
