import Frame from "./Frame";
import {getRdmInt} from "./utilities";

export default class {
    constructor(tileset, width = 10, height = 10, depth = 10) {

        this.width = width;
        this.height = height;
        this.depth = depth;
        this.size = width*height*depth;


        this.tileset = tileset;
        this.tiles = Object.keys(this.tileset);

        this.grid = [...Array(this.size)].map(() => new Frame(this.tiles, this.tileset));
        this.fillFramesNeighbours();
        this.allCollapsed = false;
    }

    getCoordinates = (i) => [
        Math.floor(i/this.height/this.depth),
        Math.floor((i%(this.height*this.depth))/this.height),
        i % this.depth
    ];

    fillFramesNeighbours = (i = 0, max_i = this.size) => {
        while (i<max_i) {
            const [x,y,z] = this.getCoordinates(i);
            if (x > 0) this.grid[i].neighbours[1] = this.grid[i-this.height*this.depth];
            if (y > 0) this.grid[i].neighbours[3] = this.grid[i-this.depth];
            if (z > 0) this.grid[i].neighbours[5] = this.grid[i-1];
            if (x < this.width - 1) this.grid[i].neighbours[0] = this.grid[i+this.height*this.depth];
            if (y < this.height - 1) this.grid[i].neighbours[2] = this.grid[i+this.depth];
            if (z < this.depth - 1) this.grid[i].neighbours[4] = this.grid[i+1];
            i++;
        }
    };

    /**
     * choose a random frame not collapsed in the grid
     * */
    chooseRandomFrame = () => {
        if(this.allCollapsed) throw new Error('chooseRandomFrame: cannot choose a frame if all of them are collapsed');

        let eligibleFrames = [];

        for (let i = 0; i < this.size; i++) {
            const frame = this.grid[i];
            if (!frame.collapsed){
                eligibleFrames.push(frame);
            }
        }

        if(eligibleFrames.length === 0) {
            this.allCollapsed = true;
            return;
        }

        let minTilesCount = Infinity;

        eligibleFrames.forEach((frame) => {
            const tilesCount = frame.tiles.length;
            if (tilesCount < minTilesCount) {
                minTilesCount = tilesCount;
            }
        });

        eligibleFrames = eligibleFrames.filter(
            (frame) => frame.tiles.length === minTilesCount
        );

        const randomIndex = getRdmInt(0, eligibleFrames.length);
        return eligibleFrames[randomIndex];
    }

    run = () => {
        while (!this.allCollapsed){
            const frame = this.chooseRandomFrame();
            if (this.allCollapsed) break;
            frame.collapse();
            frame.propagate();
        }
    }

    getGrid = () => {
        if (!this.allCollapsed) return [];
        return [...Array(this.width)].map((_,x) =>
                    [...Array(this.height)].map((_,y) =>
                        [...Array(this.depth)].map((_,z) =>
                            this.grid[x*this.height*this.depth+y*this.depth+z].tile
                        )
                    )
                );
    }

}