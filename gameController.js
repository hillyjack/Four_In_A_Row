let GameController = function (gameModel, gameView) {
    this.model = gameModel;
    this.view = gameView;
    this.greenPlayerColor = "yellowgreen";
    this.redPlayerColor = "brown";
};

GameController.prototype = {
    initController:function(rows, columns, firstPlayerColor){
        firstPlayerColor? this.currentPlayerColor = this.redPlayerColor : this.currentPlayerColor = this.greenPlayerColor;

        //this.rowsCounters={};
        this.model.initGameBoard(rows, columns);
        this.view.initGameView(this.currentPlayerColor );
    },

    play : function(rowIndex, colIndex){
        //gameView.hideCircle(this)
        console.log(colIndex);
        if(colIndex < 6) {
            this.model.addCircleToGameBoard(rowIndex, colIndex, this.currentPlayerColor);
            this.model.winningCheack(rowIndex, colIndex, this.currentPlayerColor);
            this.view.addCircle(rowIndex, colIndex, this.currentPlayerColor);

            this.currentPlayerColor === this.greenPlayerColor ? this.currentPlayerColor = this.redPlayerColor : this.currentPlayerColor = this.greenPlayerColor
            this.view.ChangeCurrentPlayerColor(this.currentPlayerColor);
        }
    },
};


//gameBoard.updateGameBoard(rowIndex, colIndex, this.turnColor);
//gameView.updateView(rowIndex, colIndex, this.turnColor);

//let gameBoard = new GameBoardModel();
//gameBoard.initGameBoard(this.rows, this.columns);

//let gameView = new GameView();
//gameView.initGameView();





