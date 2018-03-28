let circleModel = function (){
    this.circleColor = null;
};

circleModel.prototype = {
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
    clear: function () {
        this.gameBoard = [];
    },
    initGameBoard: function (rows, columns) {
        for(let i = 0; i < rows; i++){
            gameBoard[i] = []
            for(let j = 0; j < columns; j++){
                gameBoard[i][j] = null;
            }
        }
    },

};