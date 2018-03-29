let GameController = function (gameModel, gameView) {
    this.model = gameModel;
    this.view = gameView;
    this.greenPlayerColor = "yellowgreen";
    this.redPlayerColor = "brown";
};

GameController.prototype = {
    initController:function(rows, columns, firstPlayerColor){
        firstPlayerColor? this.currentPlayerColor = this.redPlayerColor : this.currentPlayerColor = this.greenPlayerColor;
        this.model.initGameBoard(rows, columns);
        this.view.initGameView(this.currentPlayerColor );
    },

    play : function(rowIndex, colIndex){
        if(colIndex < 6) {
            this.model.addDiscToGameBoard(rowIndex, colIndex, this.currentPlayerColor);
            this.view.addDiscToView(rowIndex, colIndex, this.currentPlayerColor);
            this.winner = this.model.winningCheack(rowIndex, colIndex, this.currentPlayerColor);
            if(!this.winner){


            this.currentPlayerColor === this.greenPlayerColor ? this.currentPlayerColor = this.redPlayerColor : this.currentPlayerColor = this.greenPlayerColor
            this.view.ChangeCurrentPlayerColor(this.currentPlayerColor);
            }
            else{
                alert(this.winner + " Player Won!!" );
                this.view.clearBoardView();
                //this.model.clearGameBoard();
            }
        }
    },
};



