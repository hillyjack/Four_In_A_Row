
let gameBoard = new GameBoardModel();
let gameView = new GameView();
let gameController = new GameController(gameBoard, gameView);
gameController.initController(7,6,1);
gameView.setController(gameController);


