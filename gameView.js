let GameView = function(){
    this.rowsCounters = [];
    this.currentPlayerColor = "";
    this.callbacksFunc = [];
    this.redPlayerScore = 0;
    this.greenPlayerScore = 0;
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
        for(let i = 0; i < this.rowsCounters.length; i++) {
            let currentDisc;
            for(let j = 0; j < this.rowsCounters[i]; j++){
            currentDisc = "disc_" + i + "_" + j;
            currentDisc = document.getElementById(currentDisc);
            currentDisc.className = "disc"
            }
            this.rowsCounters[i] = 0
        }
    },
    displayMsg: function(txtMsg) {
        let winnerPlayer;
        let newScore;
        this.currentPlayerColor === "brown" ? newScore = ++this.redPlayerScore: newScore = ++this.greenPlayerScore;
        winnerPlayer =  this.currentPlayerColor + "PlayerScore";
        document.getElementById(winnerPlayer).innerHTML = newScore;

        alert(txtMsg);
    },
    removeCustomAlert: function() {

    },
    pushCallbacksFunc: function(func) {
        this.callbacksFunc.push(func);
    },
    letsPlay: function (event){
        this.hideClickableDisc(event);
        let currentRowId = event.srcElement.id;
        let rowIndex = Number(currentRowId.substring(currentRowId.length-1,currentRowId.length));
        let colIndex = this.rowsCounters[rowIndex]++;
        this.callbacksFunc.forEach(((func) => func(rowIndex, colIndex)),this);
    }
};








