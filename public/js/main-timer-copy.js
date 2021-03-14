import Timer from './Timer.js';

async function main(canvas) {

    const context = canvas.getContext('2d');

    let timeElapsed = 0;

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        
        canvas.width = 600;
        canvas.height = 300;
    
        context.fillStyle = '#cccc00';
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        context.fillStyle = '#000000';
        context.font = "20px Arial";
        timeElapsed += deltaTime;




        const minutes = Math.floor(timeElapsed / 60);
        const seconds = Math.floor(timeElapsed - (minutes * 60));



        context.fillText("Time: "+minutes.toString().padStart(2, '0')+':'+seconds.toString().padStart(2, '0'), 30, 30);
    }

    timer.start();

}

const canvas = document.getElementById('screen');

const start = () => {
    main(canvas);
};

start();