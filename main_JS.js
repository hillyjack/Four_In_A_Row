
let gameBoard = new GameBoardModel();
let gameView = new GameView();
let gameController = new GameController(gameBoard, gameView);
gameView.setController(gameController);
gameController.initController(7,6,'brown');

