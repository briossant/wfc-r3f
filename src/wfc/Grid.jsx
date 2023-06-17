import Frame from "./Frame";
import {getRdmInt} from "../utilities";

export default class {

    constructor(width, height, depth, tiles) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.grid = [...Array(width)].map(() =>
            [...Array(width)].map(() =>
                [...Array(depth)].map(() => new Frame(tiles))
            ));
        this.fillFramesNeighbours();

        this.notCollapsedFrames = [];
        this.chooseFromNotCollapsedFrames = false;
        this.nRandomTries = 10;

        this.allCollapsed = false;
    }

    fillFramesNeighbours = () => this.grid.forEach((row, x) => {
        row.forEach((line,y) => {
            line.forEach((frame,z) =>{
                if(x>0) frame.neiMinusX = this.grid[x-1][y][z];
                if(y>0) frame.neiMinusY = this.grid[x][y-1][z];
                if(z>0) frame.neiMinusZ = this.grid[x][y][z-1];
                if(x<this.width-1) frame.neiPlusX = this.grid[x+1][y][z];
                if(y<this.height-1) frame.neiPlusY = this.grid[x][y+1][z];
                if(z<this.depth-1) frame.neiPlusZ = this.grid[x][y][z+1];
            });
        });
    });


    /**
     * choose a random frame not collapsed in the grid
     * if unsuccessful after this.nRandomTries tries, generate the this.notCollapsedFrames list
     * and choose in it
     * */
    chooseRandomFrame = () => {
        if(this.allCollapsed) throw new Error('chooseRandomFrame: cannot choose a frame if all of them are collapsed');

        if (this.chooseFromNotCollapsedFrames){
            if (this.notCollapsedFrames.length === 0){
                this.allCollapsed = true;
                return;
            }

            const choice_i = getRdmInt(0, this.notCollapsedFrames.length);
            const choice = this.notCollapsedFrames[choice_i];
            this.notCollapsedFrames.splice(choice_i,1);
            return choice;
        }

        for (let i = 0; i < this.nRandomTries; i++) {
            const randomX = getRdmInt(0, this.width);
            const randomY = getRdmInt(0, this.height);
            const randomZ = getRdmInt(0, this.depth);
            const frame = this.grid[randomX][randomY][randomZ];

            if (!frame.collapsed) {
                return frame;
            }
        }

        this.chooseFromNotCollapsedFrames = true;
        this.#genNotCollapsedFrames();
        return this.chooseRandomFrame();
    }

    #genNotCollapsedFrames = () => this.notCollapsedFrames = this.grid.flat().flatMap(
            row => row.filter(frame => !frame.collapsed)
        );


    run = () => {
        while (!this.allCollapsed){
            const frame = this.chooseRandomFrame();
            if (this.allCollapsed) break;
            frame.collapse();
            frame.forEachNeighbours((nei) => nei.propagate(frame.tiles));
        }
    }

}