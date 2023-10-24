const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')



const  converterChanges = (elementInput, elementTarget, elementTarget2, variant) => {
    elementInput.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            switch (variant) {
                case 'som':
                    elementTarget.value =(elementInput.value / response.usd).toFixed(2)
                    elementTarget2.value =(elementInput.value / response.eurSom).toFixed(2)
                    break
                case 'usd':
                    elementTarget.value =(elementInput.value * response.usd).toFixed(2)
                    elementTarget2.value =(elementInput.value / response.eurUsd).toFixed(2)
                    break
                case 'eur':
                    elementTarget.value =(elementInput.value * response.eurSom).toFixed(2)
                    elementTarget2.value =(elementInput.value * response.eurUsd).toFixed(2)
                    break
                default:
                    break
            }

            elementInput.value === '' &&  (elementTarget.value = '')
            elementInput.value === '' &&  (elementTarget2.value = '')
        }
    }



}
converterChanges(somInput, usdInput, eurInput,'som')
converterChanges(usdInput, somInput, eurInput, 'usd')



converterChanges(eurInput, somInput, usdInput, 'eur')
// Получаем все слайды и преобразуем NodeList в массив












