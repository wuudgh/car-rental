console.log("text")

const main = document.querySelector("main");
let carData = {
    cars:[],
    carTypes:[],
    prices:[],
    image:[]
}

function getAvailableCars() {
    fetch ("http://localhost:3000/cars")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            carData.cars = data;
            const carTypes = data.map(function(element){
                return element["type of car"]  
            })
            const prices = data.map(function(element){
                return element["price daily"]
            }) 
            const images = data.map(function(element){
                return element ["image"]
            })
            //console.log(prices);
            carData.carTypes = carTypes
            carData.prices = prices
            carData.image = images
            //const carDataEL = carData.prices
           // console.log(images);


            //console.log(carData.cars)
        })
    }

function renderHeaderPrices(){
    const pricesButton = document.getElementById("prices");
    //console.log(carDataEL);
    pricesButton.addEventListener("click", function(event){
        event.preventDefault()
        main.innerHTML = "";
        
        for (let i = 0 ; i < carData.cars.length; i++ ){
            const carDatadivEl = document.createElement("div");
            const carDataEl = document.createElement("h3");
            const carDataTypeEl = document.createElement("h2");
            carDatadivEl.append(carDataEl);
            carDataEl.innerText = carData.cars[i].priceDaily
            carDataEl.className = "render-header-prices"
            carDataTypeEl.innerText = carData.cars[i].typeOfCar
            carDataTypeEl.className = "render-header-cars"
            //console.log(carData.prices[i])
            main.append(carDataEl);
            main.append(carDataTypeEl);

            
        }
        /*for (let i = 0; i < carData.carTypes.length; i++){
            const carDatadivEl = document.createElement("div");
            
            carDatadivEl.append(carDataTypeEl);
            carDataTypeEl.innerText = carData.carTypes[i]
            console.log(carData.carTypes[i])
            main.append(carDataTypeEl);
        } */     
    })
}
function renderHeaderVehicles(){
    const vehicleButton = document.getElementById("vehicles");
    vehicleButton.addEventListener("click", function (event){
        event.preventDefault()
        main.innerHTML = "";
        for (let i = 0; i < carData.image.length; i++){
            const carImageDivEl = document.createElement("div");
            const carImageEl = document.createElement("img");
            carImageEl.setAttribute("src", `${carData.image[i]}`);
            carImageEl.setAttribute("alt", `${carData.image[i]}`);
            carImageEl.setAttribute("width", "500px");
            carImageEl.className = "render-header-vehicle-img"
            

            carImageDivEl.append(carImageEl);
            main.append(carImageDivEl);
            
        }
    })
    

}

function renderAside(){
    const reserveForm = document.getElementById("rent-cars");
    reserveForm.addEventListener("submit", function(event){
        event.preventDefault()
      
      //console.log("man")
       const carTypeSelect = document.querySelector(".select-car-type")
       //reserveForm.append(carTypeSelect);
       const carType = carTypeSelect.value;
       console.log(carTypeSelect.value);
       //carTypeSelect.append(carType);

       const pickUpDateInput = document.querySelector(".pickup-date input")
       const pickUpDate = pickUpDateInput.value;
       console.log(pickUpDateInput.value)

       const returnDateInput = document.querySelector(".return-date input")
       const returnDate = returnDateInput.value;
       console.log(returnDateInput.value)

       const citySelect = document.querySelector(".select-cities")
       const cityName =citySelect.value;
       console.log(citySelect.value)


    })

}


function createHomePage(){
    const homeButton = document.getElementById("home");
    homeButton.addEventListener("click", function (event){
        event.preventDefault()
    main.innerHTML = "";
    //<img src="https://www.ramsis-group.com/wp-content/uploads/2020/10/360-elantra-cn7-2021-09.png" width="1300px" alt="">
    const imgEl = document.createElement("img");
    //imgEl.className = "right"
    imgEl.setAttribute("src","https://www.ramsis-group.com/wp-content/uploads/2020/10/360-elantra-cn7-2021-09.png")
    //imgEl.setAttribute("src","https://www.motortrend.com/uploads/sites/5/2020/08/2021-Hyundai-Elantra-Hybrid.png")
    imgEl.setAttribute("alt","elantra" )
    imgEl.setAttribute("width", '1500px')
    main.append(imgEl);
    })


}

getAvailableCars();
renderHeaderPrices();
renderHeaderVehicles();
renderAside();
createHomePage();
