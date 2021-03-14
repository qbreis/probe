export function loadImage(url) { // function to load an image
    return new Promise(resolve => { // returns promise
        const image = new Image(); // create image instance
        image.addEventListener('load', () => { // attach to image load event listener
            // load event fires when image is downloaded
            resolve(image); //resolve promise with the image itself
        });
        image.src = url; // In order to activate image downloaded
    });
}