let GameView = function(){
    this.rowsCounters = [];
    this.currentPlayerColor = "";
};

GameView.prototype = {
    initGameView: function(firstPlayerColor){
        let clickableTopDiscsArr = document.getElementsByClassName("clickableDisc");
        this.currentPlayerColor = firstPlayerColor;

        Array.from(clickableTopDiscsArr, item => item).forEach(function(element) {
            element.onmouseover = this.showClickableDisc.bind(this);
            element.onmouseout = this.hideClickableDisc.bind(this);
            element.onclick = this.letsPlay.bind(this);
        }, this);
        this.initRowsCounters();

    },

    initRowsCounters: function (){
        let rowsArr = document.getElementsByClassName("row");
        let rowIndex;

        Array.from(rowsArr, row => row).forEach(function(row) {
            rowIndex = Number(row.id.substring((row.id).length-1,(row.id).length));
            this.rowsCounters[rowIndex] = 0;
        }, this);
    },

    setController : function(controller){
        this.controller = controller;
    },

    addDiscToView : function (rowIndex, colIndex, currentPlayerColor){
        let currentDisc;
        currentDisc = "disc_" + rowIndex + "_" + colIndex;
        currentDisc = document.getElementById(currentDisc);
        currentDisc.classList.add("disc_" + currentPlayerColor);
    },

    showClickableDisc: function (event){
        event.srcElement.style.backgroundColor = this.currentPlayerColor;
    },
    hideClickableDisc: function (event){
        event.srcElement.style.backgroundColor = '#dadada';
    },

    ChangeCurrentPlayerColor: function(currentPlayerColor){
        this.currentPlayerColor = currentPlayerColor;
    },
    clearBoardView: function (){
        location.reload();
    },

    letsPlay: function (event){
        this.hideClickableDisc(event);
        let currentRowId = event.srcElement.id;
        let rowIndex = Number(currentRowId.substring(currentRowId.length-1,currentRowId.length));
        let colIndex = this.rowsCounters[rowIndex]++;
        this.controller.play(rowIndex, colIndex);
    }
};








