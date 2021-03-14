import {loadImage} from './loaders.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 400;




const image = '/images/new-green-deck-a-in-progress.svg';
const imageTileSize = 10;
const imageTilesWidth = 15;
const imageTilesHeight = 20;
const imageWidth = imageTilesWidth * imageTileSize;

const canvasTilesWidth = 13;
const canvasTileSize = canvas.width / canvasTilesWidth;

const canvasTilesHeight = Math.floor(canvas.height / canvasTileSize);

/*
canvasTileSize       canvas.width
---------------- = -----------------
imageTileSize             x


*/

console.log('::: ', imageTileSize);



loadImage(image)
.then(image => {
    
    
    context.fillStyle = '#cccc00';
    context.fillRect(0, 0, canvas.width, canvas.height);



    for(let i = 0;i < canvasTilesWidth;i++) {
        for(let j = 0;j < canvasTilesHeight;j++) {
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


    
    context.drawImage(image, 
        1 * imageTileSize, 
        2 * imageTileSize, 
        canvasTilesWidth * imageTileSize, 
        canvasTilesHeight * imageTileSize, // subset 
        0, 0, canvas.width, canvas.height // where 
    );
    
});