import { getAllCars, getCarByName, getCarColorByName } from "./config.js";

const carsElement = document.getElementById('cars');
const carColorsElement = document.getElementById('car-colors');
const tradeInElement = document.getElementsByName('tradeIn');
const paymentElement = document.getElementsByName('payment');
const tradeIn = document.getElementById('trade-in');
const carPayment = document.getElementById('car-payment');
const carPreviewElement = document.getElementById('car-preview');
const finalContainerElement = document.getElementById('final-container');
const finalContainerImg = document.getElementById('final-container-img');


const getDefaultAppState = () => {
    const cars = getAllCars();
    return {
        cars,
        selectedCar: null,
        selectedColor: null,
        previewColor: null,
        modelSelected: false,
        colorSelected: false,
        tradeInSelected: false,
        carPaymentSelected: false
    }
}

let appState = getDefaultAppState();

const getCarCard = (car) => {
    const carElement = document.createElement('div');
    carElement.classList.add("car");
    carElement.dataset.name = car.name;

    carElement.onclick = () => {
        appState.selectedCar = car.name;
        appState.selectedColor = null;
        appState.modelSelected = true;
        appState.carPaymentSelected = false;
        appState.colorSelected = false;
        appState.tradeInSelected = false;
        appState.previewColor = car.colors[0].name;
        renderQuizView(appState);
        renderCarPreview();
        renderFinalContainer();
        carsElement.parentElement.classList.remove("quiz-active");
        carColorsElement.parentElement.classList.add("quiz-active");
        tradeIn.parentElement.classList.remove("quiz-active");
        carPayment.parentElement.classList.remove("quiz-active");
        tradeIn.parentElement.classList.add("half-transparent");

        finalContainerImg.innerHTML = "";
    }

    if (car.name == appState.selectedCar) {
        carElement.classList.add('selected');
        console.log('clicked');
    }

    const carImgElement = document.createElement('div');
    carImgElement.classList.add('car-img');

    const imgElement = document.createElement('img');
    imgElement.src = './img/modelCars/step-1-img/' + car.imgFirstStep;
    carImgElement.appendChild(imgElement);

    carElement.appendChild(carImgElement);

    return carElement;
}

const getColorCard = (color) => {
    const colorElement = document.createElement('div');
    colorElement.classList.add("d-flex", "align-items-center");

    const colorInputId = `color-input-${color.name}`;
    const colorInputElement = document.createElement("input");
    colorInputElement.type = "radio";
    colorInputElement.name = "colorInput";
    colorInputElement.id = colorInputId;
    colorInputElement.value = color.name;
    
    const colorLabelElement = document.createElement("label");
    colorLabelElement.htmlFor = colorInputId;
    colorLabelElement.innerText = color.name;

    colorElement.style.setProperty('--input-color', color.value);

    colorElement.appendChild(colorInputElement);
    colorElement.appendChild(colorLabelElement);

    colorElement.onclick = () => {
        appState.selectedColor = color.name;
        appState.previewColor = color.name;
        appState.colorSelected = true;
        appState.carPaymentSelected = false;
        renderQuizView(appState);
        renderFinalContainer();

        carColorsElement.parentElement.classList.remove("quiz-active");
        tradeIn.parentElement.classList.add("quiz-active");
        carPayment.parentElement.classList.remove("quiz-active");

        finalContainerImg.innerHTML = "";
    }

    if (color.name == appState.selectedColor) {
        colorElement.classList.add('selected');
    }

    return colorElement;
}



const renderCarsView = () => {
    carsElement.innerHTML = '';
    appState.cars.forEach((car) => {
        const carElement = getCarCard(car);
        carsElement.appendChild(carElement);
    });
}

/**
 *
 * @param {Array} colors
 */
const renderColorsView = () => {
    carColorsElement.innerHTML = '';
    const car = getCarByName(appState.selectedCar);
    carColorsElement.parentElement.classList.remove("half-transparent");
    
    car.colors.forEach((color) => {
        const colorElement = getColorCard(color);
        carColorsElement.appendChild(colorElement);
        
    });
}

const renderTradeInView = () => {
    tradeInElement.forEach((element) => {
        element.checked = false;

        element.onclick = () => {
            appState.tradeInSelected = true;
            renderFinalContainer();
            tradeIn.parentElement.classList.remove("half-transparent");
            tradeIn.parentElement.classList.remove("quiz-active");
            carPayment.parentElement.classList.add("quiz-active");
        }
    });
}

const renderCarPayment = () => {
    paymentElement.forEach((element) => {
        element.checked = false;

        element.onclick = () => {
            appState.carPaymentSelected = true;
            renderFinalContainer();
            carPayment.parentElement.classList.add("quiz-active");
        }
    });
} 

const renderCarPreview = () => {
    const color = getCarColorByName(appState.selectedCar, appState.previewColor);
    if (!color) {return;}
    const previewImage = document.createElement('img');
    
    previewImage.src = './img/modelCars/' + color.image;
    carPreviewElement.innerHTML = '';
    carPreviewElement.appendChild(previewImage);
}

const renderFinalContainer = () => {
    if (appState.modelSelected && appState.colorSelected && appState.tradeInSelected && appState.carPaymentSelected) {
        finalContainerElement.classList.add('show');

        const color = getCarColorByName(appState.selectedCar, appState.previewColor);
        if (!color) {return;}
        const finalImage = document.createElement('img');
        
        finalImage.src = './img/modelCars/' + color.finalImg;
        finalContainerImg.innerHTML = '';
        finalContainerImg.appendChild(finalImage);
        document.getElementById('car-preview').classList.add('d-none');
    } 
    else {
        finalContainerElement.classList.remove('show');
        document.getElementById('car-preview').classList.remove('d-none');
    }
}

const renderQuizView = () => {
    renderCarsView(appState.cars);
    if (appState.selectedCar) {
        renderColorsView(getCarByName(appState.selectedCar).colors);
    }
    renderCarPreview();
    renderTradeInView();
    renderCarPayment();
}

renderQuizView();