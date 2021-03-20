import {loadImage} from './loaders.js'
import ImageManager from './ImageManager.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 400;

const canvasTilesWidth = 11;
const canvasTileSize = canvas.width / canvasTilesWidth;
const canvasTilesHeight = Math.ceil(canvas.height / canvasTileSize);

const image = '/images/new-green-deck-a-in-progress.svg';

loadImage(image)
.then(image => {
    const backgroundImage = new ImageManager(image, 10);
    backgroundImage.draw(canvas, context, canvasTileSize, canvasTilesWidth, canvasTilesHeight, 5, 43);
});

