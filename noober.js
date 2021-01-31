async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
   


  // 🔥 start here: write code to loop through the rides
  let outputElement = document.querySelector('.rides')

  for (let i = 0; i < json.length; i++) {
    for (let j = 0; j< json[i].length; j++) {
      passengerName = json[i][j].passengerDetails.first + " " + json[i][j].passengerDetails.last
      passengerPhone = json[i][j].passengerDetails.phoneNumber
      passengerNumberOfPassengers = json[i][j].numberOfPassengers
      passengerPickupAddressLine1 = json[i][j].pickupLocation.address
      passengerPickupAddressLine2 = json[i][j].pickupLocation.city + ',' +  json[i][j].pickupLocation.state + " " + json[i][j].pickupLocation.zip 
      passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
      passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + ',' +  json[i][j].dropoffLocation.state + " " + json[i][j].dropoffLocation.zip 
      purpleRequested = json[i][j].purpleRequested
      numberOfPassengers = json[i][j].numberOfPassengers}

    if (json[i].length > 1) {
      levelOfService = 'Noober Pool' 
      outputElement.insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>`)
      
    for (let j =0; j< json[i].length; j++) { 
      passengerName = json[i][j].passengerDetails.first + " " + json[i][j].passengerDetails.last
      passengerName = json[i][j].passengerDetails.first + " " + json[i][j].passengerDetails.last
      passengerPhone = json[i][j].passengerDetails.phoneNumber
      passengerNumberOfPassengers = json[i][j].numberOfPassengers
      passengerPickupAddressLine1 = json[i][j].pickupLocation.address
      passengerPickupAddressLine2 = json[i][j].pickupLocation.city + ',' +  json[i][j].pickupLocation.state + " " + json[i][j].pickupLocation.zip 
      passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
      passengerDropoffAddressLine2 = json[i][j].dropoffLocation.city + ',' +  json[i][j].dropoffLocation.state + " " + json[i][j].dropoffLocation.zip 
      purpleRequested = json[i][j].purpleRequested
      numberOfPassengers = json[i][j].numberOfPassengers

      outputElement.insertAdjacentHTML('beforeend', `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>`)
    }}
      
    else if (purpleRequested == true) {
      levelOfService = 'Noober Purple'
      outputElement.insertAdjacentHTML('beforeend', ` <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>
    
    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}2</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
          ${passengerNumberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>
    `)}

     else if (numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
      outputElement.insertAdjacentHTML('beforeend', `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>
    
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>C${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>
    `)
      

    } else {
      levelOfService = 'Noober X'
      outputElement.insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>
      `)
    }
  

    // console.log(numberOfPassengers)
    // console.log(json[i].length)
    // console.log(json[i][j].passengerDetails.last)
    // console.log(json[j].length)
    // }
  }


//  console.log(json[0][0].passengerDetails.first)

}

window.addEventListener('DOMContentLoaded', pageLoaded)

