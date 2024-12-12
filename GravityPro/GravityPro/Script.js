const Container = document.querySelector(".container");

const ContainerBody = document.body;

const Gravity = 9.80665; // m/s^2
const Mass = 10; // KG

let Speed = 0;

Container.addEventListener("click", (event) => {
    console.log(`x position => ${event.clientX}`);
    console.log(`y position => ${event.clientY}`);
    CreateElement(event.clientX, event.clientY);
})

//function CreateElement(xPosition, yPosition) {
//    let elementAttr = `<div style="width: 50px; height: 50px; background-color: red; position: absolute; left: ${xPosition}px; top: ${yPosition}px; transform: translate(-50%, -50%);"></div>`
//    Container.innerHTML += elementAttr;
//    FindAboutBottom(yPosition);
//}

//function CreateElement(xPosition, yPosition) {
//    let elementAttr = `<div style="width: 50px; height: 50px; background-color: red; position: absolute; left: ${xPosition}px; bottom: ${FindAboutBottom(yPosition)}px; transform: translate(-50%, 50%);"></div>`
//    Container.innerHTML += elementAttr;
//    CalculateFallTime(FindAboutBottom(yPosition));
//}

function CreateElement(xPosition, yPosition) {
    //let elementAttr = `<div style="width: 50px; height: 50px; background-color: red; position: absolute; left: ${xPosition}px; bottom: ${FindAboutBottom(yPosition)}px; transform: translate(-50%, 50%);"></div>`
    //Container.innerHTML += elementAttr;

    let elementAttr = document.createElement("div");
    elementAttr.style.width = "50px";
    elementAttr.style.height = "50px";
    elementAttr.style.backgroundColor = "red";
    elementAttr.style.position = "absolute";
    elementAttr.style.left = `${xPosition}px`;
    elementAttr.style.bottom = `${FindAboutBottom(yPosition)}px`; // bottom'a göre yüksekliği buldu.
    //elementAttr.style.bottom = `${CalculateHeight(FindAboutBottom(yPosition))}px`; // bottom'a göre yüksekliği buldu.
    elementAttr.style.transform = " translate(-50%, 50%)";
    Container.appendChild(elementAttr);

    CalculateFallTime(FindAboutBottom(yPosition)); // Düşme zamanını hesaplıyor ??


    CalculateHeight(FindAboutBottom(yPosition));
}

function FindAboutBottom(yPosition) { // Yüksekliği bottom'a göre buluyor
    let BigContainerHeight = ContainerBody.offsetHeight;
    let RealHeight = BigContainerHeight - yPosition;
    //console.log(`Real Height => ${RealHeight}px`);
    return RealHeight;
}

function CalculateFallTime(RealHeight) {// Zamanı hesaplıyor
    let time = Math.sqrt((2 * RealHeight) / Gravity);
    console.log(time);
}


function CalculateHeight(ElementAttrHeight) {
    while (ElementAttrHeight > 0) {
        //ElementAttrHeight--;
        setInterval(() => {
            ElementAttrHeight--;
        }, 1000000)
        //return ElementAttrHeight;
        console.log(ElementAttrHeight);
    }
}
