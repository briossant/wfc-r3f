export default function (tileset) {

    const keys = Object.keys(tileset);

    keys.forEach(name => {
        tileset[name].rotation = [0,0,0];
        if (tileset[name].dontRotate) return;
        tileset[name+"###rot1"] = {
            constraints: rotateY(tileset[name].constraints),
            instantiate: tileset[name].instantiate,
            rotation: [0,Math.PI/2,0],
            dontRotate: true
        }
    });

}


function rotateY(arr) {
    let rotated = [...arr];  // Clone array
    rotated[0] = arr[4]; // +X to +Z
    rotated[1] = arr[5]; // -X to -Z
    rotated[4] = arr[1]; // +Z to -X
    rotated[5] = arr[0]; // -Z to +X

    return rotated;
}
