


export default class Frame {

    //neighbours
    neiPlusX = null;
    neiMinusX = null;
    neiPlusY = null;
    neiMinusY = null;
    neiPlusZ = null;
    neiMinusZ = null;

    constructor(tiles) {
        this.collapsed = false;
        this.tiles = tiles;
        this.tile = null;
    }


    collapse = () => {
        this.collapsed = true;
        this.tile = this.tiles[getRdmInt(0, this.tiles.length)];
    }

    forEachNeighbours = (fct) => {
        if(this.neiPlusX) fct(this.neiPlusX);
        if(this.neiMinusX) fct(this.neiMinusX);
        if(this.neiPlusY) fct(this.neiPlusY);
        if(this.neiMinusY) fct(this.neiMinusY);
        if(this.neiPlusZ) fct(this.neiPlusZ);
        if(this.neiMinusZ) fct(this.neiMinusZ);
    }

    // todo : optimizing by removing duplicates
    static #tilesToConstraints = (tiles) => tiles.flatMap(tile => tile.ok);


    propagate = (tiles) => {
        if (this.collapsed) return;

        const constraints = Frame.#tilesToConstraints(tiles);

        const new_tiles = [];
        this.tiles.forEach(t => {
            if(constraints.contains(t.id)){
                new_tiles.push(t);
            }
        });

        // no change stop propagation
        if (new_tiles.length === this.tiles.length) {
            this.tiles = new_tiles;
            return;
        }

        // only one choice so the tile can be collapsed
        if (new_tiles.length === 1) {
            this.collapsed = true;
            this.tile = new_tiles[0];
        }

        // impossible case -> error
        if (new_tiles.length === 0) throw new Error('propagate: no tiles left');

        // continue propagation
        this.tiles = new_tiles;
        this.forEachNeighbours((nei) => nei.propagate(this.tiles))
    }
}