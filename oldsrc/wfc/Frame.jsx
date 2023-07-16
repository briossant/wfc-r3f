import {getRdmInt} from "../utilities";


export default class Frame {

    //neighbours
    neiPlusX = null;
    neiMinusX = null;
    neiPlusY = null;
    neiMinusY = null;
    neiPlusZ = null;
    neiMinusZ = null;

    constructor(tiles, failSafeTile) {
        this.collapsed = false;
        this.tiles = tiles;
        this.tile = null;
        this.failSafeTile = failSafeTile;
    }


    collapse = () => {
        this.collapsed = true;
        if (this.tiles.length === 1) {
            this.tile = this.tiles[0];
            return;
        }


        this.tile = this.tiles[getRdmInt(0, this.tiles.length)];
        this.tiles = [this.tile];
    }

    forEachNeighbours = (fct) => {
        if(this.neiPlusX) fct(this.neiPlusX, "PlusX");
        if(this.neiMinusX) fct(this.neiMinusX, "MinusX");
        if(this.neiPlusY) fct(this.neiPlusY, "PlusY");
        if(this.neiMinusY) fct(this.neiMinusY, "MinusY");
        if(this.neiPlusZ) fct(this.neiPlusZ, "PlusZ");
        if(this.neiMinusZ) fct(this.neiMinusZ, "MinusZ");
    }

    // todo : optimizing by removing duplicates
    static tilesToConstraints = (tiles,dir) => tiles.flatMap(tile => tile["ok"+dir]);


    propagate = (constraints) => {
        if (this.collapsed) return;

        const new_tiles = [];
        this.tiles.forEach(t => {
            if(constraints.includes(t.id)){
                new_tiles.push(t);
            }
        });

        // no change stop propagation
        if (new_tiles.length === this.tiles.length) return;

        this.tiles = new_tiles;

        // this case only happen if the tiles rules are wrong
        if (this.tiles.length === 0) this.tiles = [this.failSafeTile];

        // only one choice so the tile can be collapsed
        if (this.tiles.length === 1) this.collapse();

        // continue propagation
        this.forEachNeighbours((nei, dir) =>
            nei.propagate(Frame.tilesToConstraints(this.tiles, dir))
        );
    }
}