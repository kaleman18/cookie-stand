
const hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

function getRandomCookies(min, max) {
  const randomPeople = Math.floor(Math.random() * (max - min + 1) + min);
  return randomPeople;
}

let totals = new Array(14);
totals.fill(0);

function Store(minCust, maxCust, avgCookie, storeName, storeHours, storeNumber, storeLocation) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.storeHours = storeHours;
  this.storeNumber = storeNumber;
  this.storeLocation = storeLocation;
  this.avgCookiePer = [];
  this.totalCookiesPerHour = [];
  this.totalCookiesSoldPerStore = 0;
}

Store.prototype.cookiePerHour = function () {

  for (let i = 0; i < hours.length; i++) {
    const randomCookies = getRandomCookies(this.minCust, this.maxCust);

    const avgCookiesPerHour = Math.ceil(randomCookies * this.avgCookie);

    this.avgCookiePer.push(avgCookiesPerHour);
    this.totalCookiesSoldPerStore += avgCookiesPerHour;
    totals[i] += avgCookiesPerHour;
  }
};

Store.prototype.renderData = function () {

  let infoStart = document.getElementById('storeInfo');

  if (infoStart) {
    let infoName = document.createElement('h2');
    infoName.textContent = this.storeName;
    infoStart.appendChild(infoName);

    let infoSecond = document.createElement('ul');
    infoStart.appendChild(infoSecond);

    let infoThird = document.createElement('li');
    infoThird.textContent = this.storeHours;
    infoSecond.appendChild(infoThird);

    let infoFourth = document.createElement('li');
    infoFourth.textContent = this.storeNumber;
    infoSecond.appendChild(infoFourth);

    let infoFifth = document.createElement('li');
    infoFifth.textContent = this.storeLocation;
    infoSecond.appendChild(infoFifth);
  }

  const timeElement = document.getElementById('info');
  if (timeElement) {
    let storeRow = document.createElement('tr');
    storeRow.textContent = this.storeName;
    timeElement.append(storeRow);

    for (let i = 0; i < this.avgCookiePer.length; i++) {
      let storeCell = document.createElement('td');
      storeCell.textContent = this.avgCookiePer[i];
      storeRow.append(storeCell);
    }
    let totalPerStore = document.createElement('td');
    totalPerStore.textContent = this.totalCookiesSoldPerStore;
    storeRow.append(totalPerStore);
  }
};

let renderTotals = function(){
  const timeElement = document.getElementById('totalPerHour');
  let storeRow = document.createElement('tr');
  storeRow.textContent = 'Totals Per Hour';
  timeElement.append(storeRow);

  for (let i = 0; i < totals.length; i++) {
    let storeCell = document.createElement('td');
    storeCell.textContent = totals[i];
    storeRow.append(storeCell);
  }
};

// Store.prototype.totalCookiesPerHour = function () {
//   let totalCookiesPerHour = [];
//   for (let i = 0; i < hours.length; i++) {
//     const totalCookiesPerHour2 = Store.Seattle.totalCookiePer[i] + Store.Tokyo.totalCookiePer[i] + Store.Dubai.totalCookiePer[i] + Store.Paris.totalCookiePer[i] + Store.Lima.totalCookiePer[i];
//     totalCookiesPerHour.push(totalCookiesPerHour2);
//   }
//   this.totalCookiesPerHour.push(totalCookiesPerHour);
// };




let Seattle = new Store(23, 65, 6.3, 'Seattle', 'Hours Open : 6am-7pm', 'Contact Info : 123-456-7890', 'Location :2901 3rd Ave #300, Seattle, WA 98121');
let Tokyo = new Store(3, 24, 1.2, 'Tokyo', 'Hours Open : 6am - 7pm', 'Contact Info : 222-222-2222', 'ocation : 1 Chome-1-2 Oshiage, Sumida, 131-8634');
let Dubai = new Store(11, 38, 3.7, 'Dubai', 'Hours Open : 6am - 7pm', 'Contact Info : 333-333-3333', 'Location : 1 Sheikh Mahammed bin Rashid - Dubai');
let Paris = new Store(20, 38, 2.3, 'Paris', 'Hours Open : 6am - 7pm', 'Contact Info : 444-444-4444', 'Location : Champ de Mars, 5 Avenue Anatole France, 75007 Paris');
let Lima = new Store(2, 16, 2.6, 'Lima', 'Hours Open : 6am - 7pm', 'Contact Info : 555-555-5555', 'Location : Ca. Gral. Brogono cuadra 8, Miraflores 15074');
let stores = [Seattle, Tokyo, Dubai, Paris, Lima];

// loop for the prototypes
for (let i = 0; i < stores.length; i++) {
  stores[i].cookiePerHour();
  stores[i].renderData();

}

renderTotals();






















