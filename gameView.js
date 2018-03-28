let GameView = function(){
    this.rowsCounters = [];
    this.currentPlayerColor = "";
};

GameView.prototype = {
    initGameView: function(firstPlayerColor){
        let clickableCirclesArr = document.getElementsByClassName("clickableCircle");
        this.currentPlayerColor = firstPlayerColor;

        Array.from(clickableCirclesArr, item => item).forEach(function(element) {
            element.onmouseover = this.showCircle.bind(this);
            element.onmouseout = this.hideCircle.bind(this);
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

    addCircle : function (rowIndex, colIndex, currentPlayerColor){
        let currentCircle;
        currentCircle = "circle_" + rowIndex + "_" + colIndex;
        currentCircle = document.getElementById(currentCircle);
        currentCircle.classList.add("circle_" + currentPlayerColor);
    },

    showCircle: function (event){
        //console.log(arguments)
        event.srcElement.style.backgroundColor = this.currentPlayerColor;
    },
    hideCircle: function (event){
        event.srcElement.style.backgroundColor = '#dadada';
    },

    ChangeCurrentPlayerColor: function(currentPlayerColor){
        this.currentPlayerColor = currentPlayerColor;
    },

    letsPlay: function (event){
        this.hideCircle(event); //????@?$?%?$#?#?^?$%$?&%?
        let currentRowId = event.srcElement.id;  //????@?$?%?$#?#?^?$%$?&%?
        console.log(currentRowId);
        let rowIndex = Number(currentRowId.substring(currentRowId.length-1,currentRowId.length));
        let colIndex = this.rowsCounters[rowIndex]++;
        this.controller.play(rowIndex, colIndex);

    }

};








