

let DiscModel = function (){
    this.circleColor = null;
};

DiscModel.prototype = {
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
        this.initGameBoard(this.rows, this.columns);
    },
    initGameBoard: function (rows, columns, sumToWin) {
        for(let i = 0; i < rows; i++){
            this.gameBoard[i] = [];
            for(let j = 0; j < columns; j++){
                this.gameBoard[i][j] = new DiscModel();
            }
        }
        this.rows = rows;
        this.columns = columns;
        this.sumToWin = sumToWin;
    },
    addDiscToGameBoard: function (rowIndex, colIndex, currentPlayerColor) {
        this.gameBoard[rowIndex][colIndex].setColor(currentPlayerColor);
    },
    deleteCircleFromGameBoard: function(rowIndex, colIndex){
            this.gameBoard[rowIndex][colIndex].deleteColor();
    },
    winningCheack: function (rowIndex,colIndex, currentPlayerColor) {
        let sum = 1;
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.currentPlayerColor = currentPlayerColor;
        sum += this.horizentalCheack(true, this.rowIndex ) + this.horizentalCheack(false, this.rowIndex);
        if (sum >= this.sumToWin){
            return this.currentPlayerColor
        }
        sum = 1 + this.varticalCheack(this.colIndex);
        if (sum >= this.sumToWin){
            return this.currentPlayerColor
        }
        sum = 1 + this.ascendingDiagonalCheack(true, this.rowIndex, this.colIndex) + this.ascendingDiagonalCheack(false, this.rowIndex, this.colIndex);
        if (sum >= this.sumToWin){
            return this.currentPlayerColor
        }
        sum = 1 + this.decendingDiagonalCheack(true, this.rowIndex, this.colIndex) + this.decendingDiagonalCheack(false, this.rowIndex, this.colIndex);
        if (sum >= this.sumToWin){
            return this.currentPlayerColor
        }
        return 0;


    },
    horizentalCheack: function (firstSide, rowIndex) {
        let counter = 0;
        firstSide ? rowIndex = rowIndex + 1: rowIndex = rowIndex - 1;

        if (rowIndex < 0 || rowIndex === this.rows){
            return counter;
        }
        if(this.gameBoard[rowIndex][this.colIndex].getColor() === this.currentPlayerColor){
            counter = 1 + this.horizentalCheack(firstSide, rowIndex);
        }
        return counter;
    },
    varticalCheack: function (colIndex) {
        let counter = 0;
        colIndex = colIndex - 1;

        if (colIndex < 0 || colIndex === this.columns){
            return counter;
        }
        if(this.gameBoard[this.rowIndex][colIndex].getColor() === this.currentPlayerColor){
            counter = 1 + this.varticalCheack(colIndex);
        }
        return counter;
    },
    ascendingDiagonalCheck: function (firstSide, rowIndex, colIndex) {
        let counter = 0;
        firstSide ? rowIndex = rowIndex + 1: rowIndex = rowIndex - 1;
        if (rowIndex < 0 || rowIndex === this.rows){
            return counter;
        }
        firstSide ? colIndex = colIndex + 1: colIndex = colIndex - 1;
        if (colIndex < 0 || colIndex === this.columns){
            return counter;
        }
        if(this.gameBoard[rowIndex][colIndex].getColor() === this.currentPlayerColor){
            counter = 1 + this.ascendingDiagonalCheck(firstSide, rowIndex, colIndex);
        }
        return counter;
    },
    decendingDiagonalCheck: function (firstSide, rowIndex, colIndex) {
        let counter = 0;
        firstSide ? rowIndex = rowIndex + 1: rowIndex = rowIndex - 1;
        if (rowIndex < 0 || rowIndex === this.rows){
            return counter;
        }
        firstSide ? colIndex = colIndex - 1: colIndex = colIndex + 1;
        if (colIndex < 0 || colIndex === this.columns){
            return counter;
        }
        if(this.gameBoard[rowIndex][colIndex].getColor() === this.currentPlayerColor){
            counter = 1 + this.decendingDiagonalCheck(firstSide, rowIndex, colIndex);
        }
        return counter;
    },
    genericCheck: function (direction, rowIndex, colIndex) {
        let counter = 0;
        direction ? rowIndex = rowIndex + 1: rowIndex = rowIndex - 1;
        if (rowIndex < 0 || rowIndex === this.rows){
            return counter;
        }
        direction ? colIndex = colIndex - 1: colIndex = colIndex + 1;
        if (colIndex < 0 || colIndex === this.columns){
            return counter;
        }
        if(this.gameBoard[rowIndex][colIndex].getColor() === this.currentPlayerColor){
            counter = 1 + this.decendingDiagonalCheck(firstSide, rowIndex, colIndex);
        }
        return counter;
    }

};
