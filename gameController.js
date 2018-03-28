let GameController = function (gameModel, gameView) {
    this.model = gameModel;
    this.view = gameView;
    this.greenPlayerColor = 'yellowgreen';
    this.redPlayerColor = 'brown';
};

GameController.prototype = {
    initController:function(rows, columns, firstPlayerColor){
        this.turnColor = firstPlayerColor;
        this.rowsCounters={};
        this.model.initGameBoard(rows, columns);
        this.view.initGameView();
    },

    play : function(rowIndex, colIndex){
        //gameView.hideCircle(this)
        this.view.hideCircle(this)
        console.log(colIndex);
        if(colIndex < 6) {
            //gameBoard.updateGameBoard(rowIndex, colIndex, this.turnColor);
            //gameView.updateView(rowIndex, colIndex, this.turnColor);

            this.model.addCircleToGameBoard(rowIndex, colIndex, this.turnColor);
            this.view.addCircle(rowIndex, colIndex, this.turnColor);

            this.turnColor === this.greenPlayerColor ? this.turnColor = this.redPlayerColor : this.turnColor = this.greenPlayerColor
        }
    },
};

//let gameBoard = new GameBoardModel();
//gameBoard.initGameBoard(this.rows, this.columns);

//let gameView = new GameView();
//gameView.initGameView();





