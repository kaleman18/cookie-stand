
const hours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];

function getRandomCookies(min, max){
  const randomPeople = Math.floor( Math.random() * (max - min + 1) + min );
  return randomPeople;
}

function Store (minCust,maxCust,avgCookie,storeName) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.avgCookiePer = [];
  // this.totalCookiesPer = [];
}

Store.prototype.totalCookiePer = function(){
  let estimatedStore = [];
  // let totalCookiesPer = [];
  for (let i = 0; i < hours.length; i++) {
    const randomCookies = getRandomCookies(this.minCust,this.maxCust);

    const avgCookiesPerHour = Math.ceil(randomCookies * this.avgCookie);
    // const totalCookiePer = Math.ceil();
    estimatedStore.push(avgCookiesPerHour);
  }

  // for (let i = 0; i < estimatedStore.length; i++) {
  //   totalCookies = totalCookies + estimatedStore[i];
  // }
  this.avgCookiePer.push(estimatedStore);
  // this.totalCookiesPer.push(totalCookies) ;
  // console.log(totalCookies);
};

Store.prototype.render = function(){
  const timeElement = document.getElementById('info');
  let storeRow = document.createElement('tr');
  storeRow.textContent = this.storeName;
  timeElement.append(storeRow);

  for (let i = 0; i < this.avgCookiePer[0].length; i++) {
    let storeCell = document.createElement('td');
    storeCell.textContent = this.avgCookiePer[0][i];
    storeRow.append(storeCell);
  }




};

// function renderTotal(){
//   const totalElement = document.getElementById('total');
//   let totalRow = document.createElement('tr');
//   const totalElement2 = document.createElement('td');
//   totalElement2.textContent = 'Total';
//   totalRow.append(totalElement2);


//   for (let i = 0; i < this.avgCookiePer[0].length; i++) {
//     let finalCell = document.createElement('td');
//     let finalTotal = 0;
//     for (let j = 0; j < this.avgCookiePer.length; j++) {
//       finalTotal = finalTotal + this.avgCookiePer[j][i];
//     }
//     finalCell.textContent = `${finalTotal}`;
//     totalElement.append(finalCell);
//   }
//   totalElement.append(totalRow);
// }

let Seattle = new Store (23,65,6.3,'Seattle');
let Tokyo = new Store (3,24,1.2,'Tokyo');
let Dubai = new Store (11,38,3.7,'Dubai');
let Paris = new Store (20,38,2.3,'Paris');
let Lima = new Store (2,16,2.6,'Lima');
let stores = [Seattle,Tokyo,Dubai,Paris,Lima];
for (let i = 0; i < stores.length; i++) {
  stores[i].totalCookiePer();
  stores[i].render();
}
// renderTotal();





















