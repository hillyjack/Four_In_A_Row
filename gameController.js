let GameController = function (gameModel, gameView) {
    this.model = gameModel;
    this.view = gameView;
    this.greenPlayerColor = "yellowgreen";
    this.redPlayerColor = "brown";
};

GameController.prototype = {
    initController:function(rows, columns, sumToWin, firstPlayerColor){
        firstPlayerColor? this.currentPlayerColor = this.redPlayerColor : this.currentPlayerColor = this.greenPlayerColor;
        this.model.initGameBoard(rows, columns, sumToWin);
        this.view.initGameView(this.currentPlayerColor);
        this.view.pushCallbacksFunc(this.play.bind(this));
        this.columns = columns;
    },

    play : function(rowIndex, colIndex){
        if(colIndex < this.columns) {
            this.model.addDiscToGameBoard(rowIndex, colIndex, this.currentPlayerColor);
            this.view.addDiscToView(rowIndex, colIndex, this.currentPlayerColor);
            setTimeout(() =>
            {
                this.winner = this.model.winningCheack(rowIndex, colIndex, this.currentPlayerColor);
                if(!this.winner){


                    this.currentPlayerColor === this.greenPlayerColor ? this.currentPlayerColor = this.redPlayerColor : this.currentPlayerColor = this.greenPlayerColor;
                    this.view.ChangeCurrentPlayerColor(this.currentPlayerColor);
                }
                else{
                    let winnerColor;
                    this.winner === "brown"? winnerColor = "Red": winnerColor = "Green";
                    let txtMsg = winnerColor + " Player Won!!" ;
                    this.view.displayMsg(txtMsg);
                    this.view.clearBoardView();
                    this.model.clearGameBoard();
                }
            },0);
        }
    },
};



