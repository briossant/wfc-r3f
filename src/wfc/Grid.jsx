import Frame from "./Frame";
import {getRdmInt} from "../utilities";

export default class {

    // todo : 3d grid mdr
    constructor(width, height, tiles) {
        this.width = width;
        this.height = height;
        this.grid = [...Array(width)].map(() =>
                [...Array(height)].map(() => new Frame(tiles))
            );
        this.fillFramesNeighbours();

        this.notCollapsedFrames = [];
        this.chooseFromNotCollapsedFrames = false;
        this.nRandomTries = 10;

        this.allCollapsed = false;
    }

    fillFramesNeighbours = () => this.grid.forEach((row, x) => {
        row.forEach((frame,y) => {

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
            const frame = this.grid[randomX][randomY];

            if (!frame.collapsed) {
                return frame;
            }
        }

        this.chooseFromNotCollapsedFrames = true;
        this.#genNotCollapsedFrames();
        this.chooseRandomFrame();
    }

    #genNotCollapsedFrames = () => this.notCollapsedFrames = this.grid.map(
            row => row.filter(frame => !frame.collapsed)
        ).flat();


    run = () => {
        while (!this.allCollapsed){
            const frame = this.chooseRandomFrame();
            if (this.allCollapsed) break;

            frame.collapse();
            frame.forEachNeighbours((nei) => nei.propagate(frame.tiles));
        }
    }

}