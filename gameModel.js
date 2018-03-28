

let CircleModel = function (){
    this.circleColor = null;
};

CircleModel.prototype = {
    changeColor: function (color){
    this.circleColor = color;
    },
    deleteColor: function () {
        this.circleColor = null;
    }
};


let GameBoardModel = function (){
    this.gameBoard = [];
};

GameBoardModel.prototype = {
    clearGameBoard: function () {
        this.gameBoard = [];
    },
    initGameBoard: function (rows, columns) {
        for(let i = 0; i < rows; i++){
            this.gameBoard[i] = []
            for(let j = 0; j < columns; j++){
                this.gameBoard[i][j] = new CircleModel();
            }
        }
    },
    addCircleToGameBoard: function(rowIndex, colIndex, turnColor) {
        this.gameBoard[rowIndex][colIndex].changeColor(turnColor);
    },
    deleteCircleFromGameBoard: function(rowIndex, colIndex, turnColor){
            this.gameBoard[rowIndex][colIndex].deleteColor();
    },

};
