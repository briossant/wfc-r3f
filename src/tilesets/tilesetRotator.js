export default function (tileset) {

    const keys = Object.keys(tileset);

    keys.forEach(name => {
        tileset[name].rotation = [0, 0, 0];
        //if (tileset[name].dontRotate) return;

        getAllRotations(tileset[name].constraints).forEach(({rotation, rotationVector}, i) => {
            tileset[name + "###rot" + i] = {
                constraints: rotation,
                instantiate: tileset[name].instantiate,
                rotation: rotationVector,
                dontRotate: true
            }
        });
    });

}

function getAllRotations(arr) {
    let rotations = [];

    // Rotate about the X-axis.
    for (let i = 0; i < 3; i++) {
        arr = rotateX(arr);
        let rotationX = {rotation: [...arr], rotationVector: [(i + 1) * -Math.PI / 2, 0, 0]};
        rotations.push(rotationX);
    }
    arr = rotateX(arr);

    // While holding this X rotation, rotate about the Y-axis.
    for (let j = 0; j < 3; j++) {
        arr = rotateY(arr);
        let rotationY = {
            rotation: [...arr],
            rotationVector: [0, (j + 1) * Math.PI / 2, 0]
        };
        rotations.push(rotationY);

    }
    arr = rotateY(arr);

    // While holding this X and Y rotation, rotate about the Z-axis.
    for (let k = 0; k < 3; k++) {
        arr = rotateZ(arr);
        let rotationZ = {
            rotation: [...arr],
            rotationVector: [0, 0, (k + 1) * -Math.PI / 2]
        };

        rotations.push(rotationZ);
    }


    return rotations;
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