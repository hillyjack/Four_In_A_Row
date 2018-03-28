let GameView = function(){
    this.rowsCounters = {};
};

GameView.prototype = {
    initGameView: function(){
        let sepRowArr = document.getElementsByClassName("sep_row");

        Array.from(sepRowArr, item => item).forEach(function(element) {
            element.onmouseover = this.showCircle;
            element.onmouseout = this.hideCircle;
            element.onclick = this.letsPlay;
        });
        this.initRowsCounters();

    },

    initRowsCounters: function (){
        let rowsArr = document.getElementsByClassName("row");
        let rowIndex;

        Array.from(rowsArr, item => item).forEach(function(element) {
            rowIndex = Number(element.id.substring((element.id).length-1,(element.id).length));
            this.rowsCounters[rowIndex] = 0;
        });
    },

    setController : function(controller){
        this.controller = controller;
    },

    addCircle : function (rowIndex, colIndex, turnColor){
        let currentCircle;
        currentCircle = "circle_" + rowIndex + "_" + colIndex;
        currentCircle = document.getElementById(currentCircle);
        currentCircle.classList.add("circle_" + turnColor);
    },

    showCircle: function (turnColor){
        this.style.backgroundColor = turnColor;
    },
    hideCircle: function (currentCircle){
        currentCircle.style.backgroundColor = '#dadada';
    },

    letsPlay: function (){
        let currentRowId = this.id;
        console.log(currentRowId);
        let rowIndex = Number(currentRowId.substring(currentRowId.length-1,currentRowId.length));
        let colIndex = this.rowsCounters[rowIndex]++;
        this.controller.play(rowIndex, colIndex);

    }

};








