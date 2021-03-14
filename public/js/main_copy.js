function loadImage(url) { // function to load an image
    return new Promise(resolve => { // returns promise
        const image = new Image(); // create image instance
        image.addEventListener('load', () => { // attach to image load event listener
            // load event fires when image is downloaded
            resolve(image); //resolve promise with the image itself
        });
        image.src = url; // In order to activate image downloaded
    });
}
/*
class Deck {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
    }
}
*/
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const canvasWidth = 600;
const canvasHeight = 300;












resize();
draw();

function draw() {
    context.fillStyle = '#cccccc';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#ff0000';
    context.fillRect(20, 20, 100, 50);
}

function resize() {
    const height = document.documentElement.clientHeight;
    const width  = document.documentElement.clientWidth;

    //console.log(width+', '+height+' - '+canvasWidth+', '+canvasHeight);
    if (width > height) {
        if (height > (width * canvasHeight) / canvasWidth) {
            canvas.width = width;
            canvas.height = (width * canvasHeight) / canvasWidth;
        } else {
        
            canvas.height = height;
            canvas.width = (height * canvasWidth) / canvasHeight;
        }
    } else {
        canvas.width = width;
        canvas.height = (width * canvasHeight) / canvasWidth;
    }
    
    /*
        
    */

    /*
    if (width < canvasWidth) {
        canvas.width = width;
        canvas.height = (width * canvasHeight) / canvasWidth;
    } else {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
    }
    */
    draw();
}

window.addEventListener("resize" , resize);









/*
function loadShip(name) {

}
*/

/*
const deckImage = '/images/new-green-deck-a-in-progress.svg';
const deckWidth = 200;
const deckHeight = 150;
const tileSize = 10;

const deckWidthTiles = deckWidth / tileSize;
const deckWHeightTiles = deckHeight / tileSize;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const canvasTileSize = canvas.width / deckWidthTiles;

loadImage(deckImage)
*/

/*
.then(image => {
    
    context.drawImage(image, 
        0, 0, deckWidth, deckWidth, // subset 
        0, 0, canvasWidth, canvasHeight // where 
    );
    
    for(let i = 0;i < 15;i++) {
        for(let j = 0;j < 15;j++) {
            if(j % 2) {
                if(i % 2) {
                    context.fillStyle = 'rgb(255, 165, 0, .2)';
                } else {
                    context.fillStyle = 'rgb(255, 0, 165, .2)';
                }
                context.fillRect(i * canvasTileSize, j * canvasTileSize, canvasTileSize, canvasTileSize);
            } else {
                if(i % 2) {
                    context.fillStyle = 'rgb(255, 0, 165, .2)';
                } else {
                    context.fillStyle = 'rgb(255, 165, 0, .2)';
                }
                context.fillRect(i * canvasTileSize, j * canvasTileSize, canvasTileSize, canvasTileSize);
            }
        }
    }

});
*/
