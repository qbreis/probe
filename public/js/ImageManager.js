export default class ImageManager {
    constructor(image, tileSize) {
        this.image = image;
        this.imageTileSize = tileSize;
    }
    draw(canvas, context, canvasTileSize, canvasTilesWidth, canvasTilesHeight, x, y) {

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

        context.drawImage(this.image, 
            x, 
            y, 
            canvasTilesWidth * this.imageTileSize, 
            canvasTilesHeight * this.imageTileSize, // subset 
            0, 
            0, 
            canvasTilesWidth * canvasTileSize, 
            canvasTilesHeight * canvasTileSize
        );
    }
}
