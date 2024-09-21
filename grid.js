class Piece {
    static pieceTypes = {
        I: [[1], [1], [1], [1]],
        O: [[1, 1], [1, 1]],
        T: [[0, 1, 0], [1, 1, 1]],
        L: [[1, 0], [1, 0], [1, 1]],
        Z: [[1, 1, 0], [0, 1, 1]],
    }

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    generateFullPiece(type, color) {
        
    }

}

class Grid {
    constructor(numRows, numCols){
        this.rows = numRows;
        this.cols = numCols;

        this.defaultColor = "#fff"

        this.canvas = document.querySelector("#grid");
        this.context = this.canvas.getContext("2d")
        this.cellSize = Math.floor(this.canvas.width / 2);

        // each cell represents the color of the grain of sand
        // a defaultColor cell means no grain of sand is present
        this.grid = [];
        for (let row = 0; row < this.rows; row++){
            this.grid[row] = [];
            for (let col = 0; col < this.cols; col++) {
                this.grid[row][col] = this.defaultColor;
            }
        }
    }

    draw() {
        for (let row = 0; row < this.rows; row++){
            for (let col = 0; col < this.cols; col++) {
                this.context.fillStyle = this.grid[row][col];
                this.context.fillRect(row*this.cellSize, col*this.cellSize, this.cellSize, this.cellSize)
            }
        }
    }
}

const grid = new Grid(150, 100)
grid.draw()