

let CircleModel = function (){
    this.circleColor = null;
};

CircleModel.prototype = {
    setColor: function (color){
    this.circleColor = color;
    },
    getColor: function (){
        return this.circleColor;
    },
    deleteColor: function () {
        this.circleColor = null;
    }
};


let GameBoardModel = function (){
    this.gameBoard = [];
    this.rows = "";
    this.columns = "";
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
        this.rows = rows;
        this.columns = columns;
    },
    addCircleToGameBoard: function(rowIndex, colIndex, currentPlayerColor) {
        this.gameBoard[rowIndex][colIndex].setColor(currentPlayerColor);
    },
    deleteCircleFromGameBoard: function(rowIndex, colIndex){
            this.gameBoard[rowIndex][colIndex].deleteColor();
    },
    winningCheack: function (rowIndex,colIndex, currentPlayerColor) {
        this.srcRowIndex = rowIndex;
        this.otherSide = false;
        rowIndex += 1;
        //this.horizentalCheack(rowIndex,colIndex, currentPlayerColor);
        console.log("horizentalCheack " + this.horizentalCheack(rowIndex,colIndex, currentPlayerColor))

    },
    horizentalCheack: function (rowIndex,colIndex, currentPlayerColor) {
        let counter = 0;
        if (rowIndex < 0 || rowIndex === this.rows){
            return counter;
        }
        if(this.gameBoard[rowIndex][colIndex].getColor() === currentPlayerColor){
            if (!this.otherSide ) {
                counter = 1 + this.horizentalCheack(rowIndex + 1, colIndex, currentPlayerColor);
                rowIndex -= 1;
            }
            if (rowIndex  === this.srcRowIndex || this.otherSide ){
                this.otherSide = true;
                counter = counter + 1 + this.horizentalCheack(rowIndex - 1, colIndex, currentPlayerColor);
            }
        }
        return counter;
    },
    genericCheack: function (rowIndex, colIndex, currentPlayerColor) {

        if (rowIndex < 0 || rowIndex === this.rows){
            return 0
        }
        if (colIndex < 0 || colIndex === this.columns){
            return 0
        }
        if(this.gameBoard[rowIndex][colIndex] === currentPlayerColor){
            return 1
        }
        return 0
    }


};
