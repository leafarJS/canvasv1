const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.strokeStyle='green';
    context.fillStyle = 'yelow';
    context.fillRect(0, 0, width, height);
    context.lineWidth= width * .008;
    

     const w = width *.12;
     const h = height * .12;
     const gap = width * .03;
     const ix = width * .17;
     const iy = height * .17;
     
      const off =  width * .02

     let x, y;

     for (let i = 0; i < 5; i++) {
       for (let j = 0; j < 5; j++) {
         x = ix + (w + gap) * i;
         y = iy + (h + gap) * j;

         context.beginPath();
         context.rect(x, y, w, h);
         context.stroke();
         //new path
         //if (i > 0 && i < 4) {
         if (Math.random() > 0.5) {
           context.beginPath();
           context.rect(x + off/2, y + off/2, w - off, h - off,);
           context.stroke();
         }
       }
     }
  };
};

canvasSketch(sketch, settings);
