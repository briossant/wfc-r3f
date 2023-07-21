import {getRdmInt} from "./utilities";


export default class {

    //neighbours
    neighbours = [...Array(6)];

    constructor(tiles, tileset) {
        this.collapsed = false;
        this.tileset = tileset;
        this.tiles = tiles;
        this.tile = null;
    }


    collapse = () => {
        this.collapsed = true;
        if (this.tiles.length === 1) {
            this.tile = this.tiles[0];
            return;
        }
        const hist = [];
        this.tiles.forEach(tile => {
            for (let i = 0; i < this.tileset[tile].frequency; i++) {
                hist.push(tile);
            }
        })
        this.tile = hist[getRdmInt(0, hist.length)];
        this.tiles = [this.tile];
    }

    getLinkingConstraintIndex = (i) => {
        return i%2 === 0 ? i+1 : i-1;
    }

    applyConstraints = (constraints, i) => {
        if (this.collapsed) return;

        const new_tiles = [];

        this.tiles.forEach(tile => {
            if (constraints.some(cons => cons === this.tileset[tile].constraints[this.getLinkingConstraintIndex(i)])) new_tiles.push(tile);
        });

        // no change stop propagation
        if (new_tiles.length === this.tiles.length) return;

        this.tiles = new_tiles;

        // this case only happen if the tiles rules are wrong
        if (this.tiles.length === 0) this.failsafe();

        // only one choice so the tile can be collapsed
        if (this.tiles.length === 1) this.collapse();

        this.propagate();
    }

    failsafe = () => {
        console.log("ERROR WHILE PROPAGATING: no tile left in the frame")
        this.tiles = Object.keys(this.tileset);
        this.collapse();
    }

    propagate = () => {
        for (let i = 0; i < 6; i++) {
            if(this.neighbours[i] === undefined || this.neighbours[i].collapsed) continue;

            const constraints = this.tiles.map(name => this.tileset[name].constraints[i]);
            this.neighbours[i].applyConstraints(constraints, i);
        }
    }
}