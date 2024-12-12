const Container = document.querySelector(".container");
const ContainerBody = document.body;
const Gravity = 9.80665; // m/s^2
const Mass = 10; // KG
let Speed = 0;




Container.addEventListener("click", (event) => {
    if (event.target.className === Container.className) {

        //console.log(`x position => ${event.clientX}`);
        //console.log(`y position => ${event.clientY}`);
        //console.log(`Gri kısmın ayarları; x => ${Container.offsetWidth}; y => ${Container.offsetHeight} `)

        FuncCreateElement(event.clientX, event.clientY);


    }
})

FuncCreateElement = (Left, Bottom) => {
    let CreatedDiv = document.createElement("div");
    CreatedDiv.style.position = "absolute";
    CreatedDiv.style.left = `${Left}px`;

    let calculatedBottom = FuncCalculateBottom(Bottom);
    if (calculatedBottom > 0) {
        CreatedDiv.style.bottom = `${calculatedBottom}px`;
    } else {
        CreatedDiv.style.bottom = `0px`;
        console.log("Div yere ulaştı.");
    }

    //CreatedDiv.style.backgroundColor = "red";
    CreatedDiv.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
    CreatedDiv.style.width = "50px";
    CreatedDiv.style.height = "50px";
    CreatedDiv.style.transform = "translate(-30px, 0px)";

    Container.appendChild(CreatedDiv);
    //FallAnimation(CreatedDiv);
    FallAnimation(CreatedDiv, calculatedBottom);
};



FuncCalculateBottom = (yPosition) => {
    let ContainerHeight = Container.offsetHeight;
    let MiddleToBottom = 14;
    let Bottom = ContainerHeight - yPosition - MiddleToBottom;
    return Bottom;
}


//function FallAnimation(CreatedElement) {
//    CreatedElement.style.bottom = `${CreatedElement.style.bottom - 1}px`;
//    window.requestAnimationFrame(FallAnimation);
//}


function FallAnimation(CreatedElement, initialBottom) {
    let currentBottom = parseInt(CreatedElement.style.bottom); // Sayıya dönüştürmeye yarıyor 

    if (currentBottom > 0) {
        currentBottom -= 2;
        CreatedElement.style.bottom = `${currentBottom}px`;
        requestAnimationFrame(() => FallAnimation(CreatedElement, initialBottom));
    } else {
        CreatedElement.style.bottom = "0px";
        console.log(`Div yere ulaştı. Left => ${CreatedElement.style.left}px, Bottom => ${CreatedElement.style.bottom}`);
    }
}

