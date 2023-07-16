export default function (tileset) {

    const keys = Object.keys(tileset);

    keys.forEach(name => {
        tileset[name].rotation = [0,0,0];
        //if (tileset[name].dontRotate) return;
        tileset[name+"###rotY"] = {
            constraints: rotateY(tileset[name].constraints),
            instantiate: tileset[name].instantiate,
            rotation: [0,Math.PI/2,0],
            dontRotate: true
        }
        tileset[name+"###rotX"] = {
            constraints: rotateX(tileset[name].constraints),
            instantiate: tileset[name].instantiate,
            rotation: [Math.PI/2,0,0],
            dontRotate: true
        }
        tileset[name+"###rotZ"] = {
            constraints: rotateZ(tileset[name].constraints),
            instantiate: tileset[name].instantiate,
            rotation: [0,0,Math.PI/2],
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
function rotateX(arr) {
    let rotated = [...arr];
    rotated[2] = arr[4]; // +Y to +Z
    rotated[3] = arr[5]; // -Y to -Z
    rotated[4] = arr[3]; // +Z to -Y
    rotated[5] = arr[2]; // -Z to +Y

    return rotated;
}

function rotateZ(arr) {
    let rotated = [...arr];
    rotated[0] = arr[2]; // +X to +Y
    rotated[1] = arr[3]; // -X to -Y
    rotated[2] = arr[1]; // +Y to -X
    rotated[3] = arr[0]; // -Y to +X

    return rotated;
}