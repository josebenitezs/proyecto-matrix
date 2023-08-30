const element = document.querySelector("#canvas");

//ctx: es como el pincel o lapiz.  getContext: nos permite trabajar en la dimencion que nececitamos(2d, 3d etc)
const ctx = element.getContext("2d");

const w = document.body.clientWidth;
const h = document.body.clientHeight;

element.width = w;
element.heigth = h;

// join: son las posiciones,  split: es para hacer los espacios de caracteres vacios 
const position = Array(300).join(0).split("");




const initMatrix = () => {
    ctx.fillStyle = "rgba(0, 15, 2, 0.15)";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#4caf50";
    ctx.font = "12pt"


    //  //y es el eje donde boy a trabajar. fromCharCode nos 
    //  permite pasar una esprecion del tipo de caracter que vamos a pasar o generar.
    position.map((y, index) => {
        const text = String.fromCharCode(1e3 + Math.random() * 30);
        const x = index * 15 + 15;

        canvas.getContext("2d").fillText(text, x, y);

        y > 100 + Math.random() * 1e5
            ? (position[index] = 0)
            : (position[index] = y + 15);

    }
    );
};

setInterval(initMatrix, 70);
