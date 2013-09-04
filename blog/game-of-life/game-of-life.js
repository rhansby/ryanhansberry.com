var stage, board, tile_size = 10, generation = 0;

function Tile(x, y) {
    var tile = new createjs.BitmapAnimation(stage.sprite_sheet);

    tile.x = x * tile_size;
    tile.y = y * tile_size;
    tile.gotoAndPlay('dead');
    stage.addChild(tile);

    return tile;
}

function Grid(width, height) {
    var x, y, grid = new Array(height);

    for (x = 0; x < width; x++) {
        grid[x] = new Array(width);

        for (y = 0; y < height; y++) {
            grid[x][y] = false;
        }
    }

    return grid;
}

function Board(width, height) {
    this.width = width;
    this.height = height;
    this.bool_grid = Grid(width, height);
    this.tile_grid = Grid(width, height);

    var x, y;
    for (x = 0; x < this.width; x++) {
        for (y = 0; y < this.height; y++) {
            this.tile_grid[x][y] = Tile(x, y);
        }
    }
}

Board.prototype = {
    constructor: Board,
    countLiveNeighbors: function(x, y) {
        var num_live_neighbors = 0;

        if ( x > 0 && y > 0 && this.bool_grid[x-1][y-1] == true ) {
            num_live_neighbors++;
        }
        if ( y > 0 && this.bool_grid[x][y-1] == true ) {
            num_live_neighbors++;
        }
        if ( x < this.width-1 && y > 0 && this.bool_grid[x+1][y-1] == true ) {
            num_live_neighbors++;
        }
        if ( x > 0 && this.bool_grid[x-1][y] == true ) {
            num_live_neighbors++;
        }
        if ( x < this.width-1 && this.bool_grid[x+1][y] == true ) {
            num_live_neighbors++;
        }
        if ( x > 0 && y < this.height-1 && this.bool_grid[x-1][y+1] == true ) {
            num_live_neighbors++;
        }
        if ( y < this.height-1 && this.bool_grid[x][y+1] == true ) {
            num_live_neighbors++;
        }
        if ( x < this.width-1 && y < this.height-1 && this.bool_grid[x+1][y+1] == true ) {
            num_live_neighbors++;
        }

        return num_live_neighbors;
    },
    updateGrid: function() {
        var new_grid = Grid(this.width, this.height), x, y;

        for (x = 0; x < this.width; x++) {
            for (y = 0; y < this.height; y++) {
                var num_live_neighbors = this.countLiveNeighbors(x, y);

                if ( this.bool_grid[x][y] == true && (num_live_neighbors < 2 || num_live_neighbors > 3) ) {
                    new_grid[x][y] = false;
                }
                else if ( num_live_neighbors == 3 ) {
                    new_grid[x][y] = true;
                }
                else {
                    new_grid[x][y] = this.bool_grid[x][y];
                }
            }
        }

        this.bool_grid = new_grid;
    },
    renderGrid: function() {
        var x, y;
        for (x = 0; x < this.width; x++) {
            for (y = 0; y < this.height; y++) {
                if ( this.bool_grid[x][y] == true ) {
                    this.tile_grid[x][y].gotoAndPlay('alive');
                }
                else {
                    this.tile_grid[x][y].gotoAndPlay('dead');
                }
            }
        }
    }
}

function init(board_width, board_height) {
    stage = new createjs.Stage(document.getElementById('board-canvas'));

    stage.addEventListener('stagemousedown', function(evt) { // or stagemousemove
        var x = Math.floor(evt.stageX / tile_size);
        var y = Math.floor(evt.stageY / tile_size);

        board.bool_grid[x][y] = !( board.bool_grid[x][y] );
        board.renderGrid();
        stage.update();
    })

    stage.sprite_sheet = new createjs.SpriteSheet({
        'images': ['game-of-life/tiles.png'],
        'frames': {'width': 10, 'height': 10, 'regX': 0, 'regY': 0},
        'animations': {
            'dead': [0, 0, 'dead'],
            'alive': [1, 1, 'alive']
        }
    });

    board = new Board(board_width, board_height);
    board.renderGrid();
    stage.update();

    createjs.Ticker.setFPS(5);
    createjs.Ticker.addListener(tick);
    createjs.Ticker.setPaused(true);
}

function tick() {
    $('#generation-counter').text(generation++);
    board.updateGrid();
    board.renderGrid();
    stage.update();
}

function reset_board() {
    // Prevent use of this function without having prior called init():
    if ( ! stage || ! board ) {
        return;
    }

    board = new Board(board.width, board.height);
    board.renderGrid();
    stage.update();
    createjs.Ticker.setPaused(true);
}

window.onload = function() {
    init(50, 50);

    $('#play').click(function() {
        if ( $(this).text() === 'Pause' ) {
            createjs.Ticker.setPaused(true);
            $(this).text('Resume');
            return false;
        }

        // Otherwise it's either in it's "Start" or "Resume" state,
        // in which case the logic is the same:
        createjs.Ticker.setPaused(false);
        $(this).text('Pause');
        return false;
    });

    $('#reset').click(function() {
        reset_board();
        generation = 0;
        $('#play').text('Start');
        $('#generation-counter').text('0');
        return false;
    });

    $('#seed-1').click(function() {
        var ref_x = 20;
        var ref_y = 20;

        board.bool_grid[ref_x + 0][ref_y + 5] = true;

        board.bool_grid[ref_x + 2][ref_y + 4] = true;
        board.bool_grid[ref_x + 2][ref_y + 5] = true;

        board.bool_grid[ref_x + 4][ref_y + 1] = true;
        board.bool_grid[ref_x + 4][ref_y + 2] = true;
        board.bool_grid[ref_x + 4][ref_y + 3] = true;

        board.bool_grid[ref_x + 6][ref_y + 0] = true;
        board.bool_grid[ref_x + 6][ref_y + 1] = true;
        board.bool_grid[ref_x + 6][ref_y + 2] = true;
        board.bool_grid[ref_x + 7][ref_y + 1] = true;

        board.renderGrid();
        stage.update();
    });

    $('#seed-2').click(function() {
        var ref_x = 22;
        var ref_y = 22;

        board.bool_grid[ref_x + 0][ref_y + 0] = true;
        board.bool_grid[ref_x + 0][ref_y + 1] = true;
        board.bool_grid[ref_x + 0][ref_y + 4] = true;

        board.bool_grid[ref_x + 1][ref_y + 0] = true;
        board.bool_grid[ref_x + 1][ref_y + 3] = true;

        board.bool_grid[ref_x + 2][ref_y + 0] = true;
        board.bool_grid[ref_x + 2][ref_y + 3] = true;
        board.bool_grid[ref_x + 2][ref_y + 4] = true;

        board.bool_grid[ref_x + 3][ref_y + 2] = true;

        board.bool_grid[ref_x + 4][ref_y + 0] = true;
        board.bool_grid[ref_x + 4][ref_y + 2] = true;
        board.bool_grid[ref_x + 4][ref_y + 3] = true;
        board.bool_grid[ref_x + 4][ref_y + 4] = true;

        board.renderGrid();
        stage.update();
    });

    $('#seed-3').click(function() {
        var ref_x = 6;
        var ref_y = 25;
        var i;


        for (i = 0; i < 38; i++) {
            switch (i) {
                case 8:
                case 14:
                case 15:
                case 16:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 33:
                    continue;
                default:
                    break;
            }

            board.bool_grid[ref_x + i][ref_y] = true;
        }

        board.renderGrid();
        stage.update();
    });
};
