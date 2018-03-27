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


let circleArrModel = function (arrayNumber){
    this.circleArr = [];
    this.arrNum = arrayNumber;
    this.arrCounter = 0;
};

circleArrModel.prototype = {
    addCircle: function(){
        this.circleArr.push(new circleModel())
    },
    click: function(playerColor){
        this.circleArr[this.arrCounter].changeColor(playerColor);
        this.arrCounter++;
    },
    deleteCircle: function () {
        this.circleArr[this.arrCounter].deleteColor();
        this.arrCounter--;
    }

};

let GameBoardModel = function (){
    this.gameBoard = [];
};
GameBoardModel.prototype.clear = function () {
    this.gameBoard = [];
}
GameBoardModel.prototype = {
    addCircleArr: function(){
        this.gameBoard.push(new circleArrModel(this.gameBoard.length))
    },
    deleteGameBoard: function () {

    }

};





let gameBoard = [];

let memsetGameBoard = function (rows, columns) {
    for(let i = 0; i < rows; i++){
        gameBoard[i] = []
        for(let j = 0; j < columns; j++){
            gameBoard[i][j] = null;
        }
    }
}

