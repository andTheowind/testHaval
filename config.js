const COLORS = {

    "white": {
        "name": "Белый",
        "value": "#ffffff"
    },
    
    "red": {
        "name": "Красный",
        "value": "#F53131"
    },
    
    "blue": {
        "name": "Синий",
        "value": "#1AB5E7"
    },

    "black": {
        "name": "Черный",
        "value": "#000"
    },

    "silver": {
        "name": "Серебристый",
        "value": "#BBBBBB"
    },

    "gray": {
        "name": "Серый",
        "value": "#9B9B9B"
    }

}


export const data = {
    "cars": [
        {
            "name": "Haval M6",
            "imgFirstStep": "Haval-M6-step1.png",
            "colors": [
                {
                    ...COLORS.white,
                    "image": "haval-m6-white.png",
                    "finalImg": "haval-m6-white-final.png"
                },
                {
                    ...COLORS.black,
                    "image": "haval-m6-black.png",
                    "finalImg": "haval-m6-black-final.png"
                },
                {
                    ...COLORS.gray,
                    "image": "haval-m6-gray.png",
                    "finalImg": "haval-m6-gray-final.png"
                }
            ]
        },
        {
            "name": "Haval Jolion",
            "imgFirstStep": "Haval-Jolion-step1.png",
            "colors": [
                {
                    ...COLORS.white,
                    "image": "haval-jolion-white.png",
                    "finalImg": "haval-jolion-black-final.png"
                },
                {
                    ...COLORS.black,
                    "image": "haval-jolion-black.png",
                    "finalImg": "haval-jolion-black-final.png"
                },
                {
                    ...COLORS.gray,
                    "image": "haval-jolion-gray.png",
                    "finalImg": "haval-jolion-black-final.png"
                },
                {
                    ...COLORS.silver,
                    "image": "haval-jolion-silver.png",
                    "finalImg": "haval-jolion-black-final.png"
                },
                {
                    ...COLORS.blue,
                    "image": "haval-jolion-blue.png",
                    "finalImg": "haval-jolion-black-final.png"
                },
                {
                    ...COLORS.red,
                    "image": "haval-jolion-red.png",
                    "finalImg": "haval-jolion-black-final.png"
                }
            ]
        },
        {
            "name": "Haval Dargo",
            "imgFirstStep": "Haval-Dargo-step1.png",
            "colors": [
                {
                    ...COLORS.silver,
                    "image": "haval-dargo-silver.png",
                    "finalImg": "haval-dargo-silver-final.png"
                },
                {
                    ...COLORS.black,
                    "image": "haval-dargo-black.png",
                    "finalImg": "haval-dargo-black-final.png"
                },
                {
                    ...COLORS.red,
                    "image": "haval-dargo-red.png",
                    "finalImg":  "haval-dargo-red-final.png"
                },
                {
                    ...COLORS.gray,
                    "image": "haval-dargo-gray.png",
                    "finalImg": "haval-dargo-gray-final.png"
                }
            ]
        },
        {
            "name": "Haval Dargo Х",
            "imgFirstStep": "Haval-Dargo-x-step1.png",
            "colors": [
                {
                    ...COLORS.silver,
                    "image": "haval-dargo-x-silver.png",
                    "finalImg": "haval-dargo-x-silver-final.png"
                },
                {
                    ...COLORS.black,
                    "image": "haval-dargo-x-black.png",
                    "finalImg": "haval-dargo-x-black-final.png"
                },
                {
                    ...COLORS.red,
                    "image": "haval-dargo-x-red.png",
                    "finalImg": "haval-dargo-x-red-final.png"
                },
                {
                    ...COLORS.gray,
                    "image": "haval-dargo-x-gray.png",
                    "finalImg": "haval-dargo-x-gray-final.png"
                }
            ]
        },
        {
            "name": "Haval F7",
            "imgFirstStep": "Haval-F7-step1.png",
            "colors": [
                {
                    ...COLORS.white,
                    "image": "haval-f7-white.png",
                    "finalImg": "haval-f7-white-final.png"
                },
                {
                    ...COLORS.black,
                    "image": "haval-f7-black.png",
                    "finalImg": "haval-f7-black-final.png"
                },
                {
                    ...COLORS.red,
                    "image": "haval-f7-red.png",
                    "finalImg": "haval-f7-red-final.png"
                },
                {
                    ...COLORS.blue,
                    "image": "haval-f7-blue.png",
                    "finalImg": "haval-f7-blue-final.png"
                },
                {
                    ...COLORS.gray,
                    "image": "haval-f7-gray.png",
                    "finalImg": "haval-f7-gray-final.png"
                },
                {
                    ...COLORS.white,
                    "image": "haval-f7-silver.png",
                    "finalImg": "haval-f7-silver-final.png"
                }
            ]
        },
        {
            "name": "Haval F7x",
            "imgFirstStep": "Haval-F7x-step1.png",
            "colors": [
                {
                    ...COLORS.white,
                    "image": "haval-f7-white.png",
                    "finalImg": "haval-f7x-white-final.png"
                },
                {
                    ...COLORS.black,
                    "image": "haval-f7x-black.png",
                    "finalImg": "haval-f7x-black-final.png"
                },
                {
                    ...COLORS.blue,
                    "image": "haval-f7x-blue.png",
                    "finalImg": "haval-f7x-blue-final.png"
                },
                {
                    ...COLORS.gray,
                    "image": "haval-f7x-gray.png",
                    "finalImg": "haval-f7x-gray-final.png"
                },
                {
                    ...COLORS.silver,
                    "image": "haval-f7x-silver.png",
                    "finalImg": "haval-f7x-silver-final.png"
                },
                {
                    ...COLORS.red,
                    "image": "haval-f7x-red.png",
                    "finalImg": "haval-f7x-red-final.png"
                }
            ]
        },
        {
            "name": "Haval H9",
            "imgFirstStep": "Haval-H9-step1.png",
            "colors": [
                {
                    ...COLORS.white,
                    "image": "haval-h9-white.png",
                    "finalImg": "haval-h9-white-final.png"
                },
                {
                    ...COLORS.gray,
                    "image": "haval-h9-gray.png",
                    "finalImg": "haval-h9-gray-final.png"
                },
                {
                    ...COLORS.black,
                    "image": "haval-h9-black.png",
                    "finalImg": "haval-h9-black-final.png"
                }
            ]
        }
    ]
}

export function getAllCars() {
    return data.cars;
}

export function getCarByName(name) {
    return data.cars.find((car) => car.name === name);
}

/**
 *
 * @param {string} carName
 * @param {string} colorName
 * @returns Array
 */
export function getCarColorByName(carName, colorName) {
    const car = getCarByName(carName);
    if (!car) {return null;}
    return car.colors.find((color) => color.name === colorName);
}
