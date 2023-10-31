
const hours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];

function getRandomCookies(min, max){
  const randomPeople = Math.floor( Math.random() * (max - min + 1) + min );
  // const totalCookies = Math.floor(randomPeople * avg);
  return randomPeople;
}


const seattleStore = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  avgCookiePer: [],
  mainList: [],
  totalCustPerHour: function(){
    for (let i = 0; i < hours.length; i++) {
      this.mainList.push(getRandomCookies(this.minCust,this.maxCust));
    }
  },
  totalCookiePerHour: function(){
    for (let i = 0;i < hours.length; i++) {
      this.avgCookiePer.push(Math.floor(this.mainList[i] * this.avgCookie));
    }
  },
};
seattleStore.totalCustPerHour();
seattleStore.totalCookiePerHour();
console.log(seattleStore);


const tokyoStore = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  avgCookiePer: [],
  mainList: [],
  totalCustPerHour: function(){
    for (let i = 0; i < hours.length; i++) {
      this.mainList.push(getRandomCookies(this.minCust,this.maxCust));
    }
  },
  totalCookiePerHour: function(){
    for (let i = 0;i < hours.length; i++) {
      this.avgCookiePer.push(Math.floor(this.mainList[i] * this.avgCookie));
    }
  },
};

console.log(tokyoStore);

tokyoStore.totalCustPerHour();
tokyoStore.totalCookiePerHour();





const seattleList = document.getElementById('seattle');
for (let i = 0; i < hours.length; i++) {
  const liElem = document.createElement('li');
  liElem.textContent = `${hours[i]}${seattleStore.avgCookiePer[i]}`;
  seattleList.appendChild(liElem);
}

const tokyoList = document.getElementById('tokyo');
for (let i = 0; i < hours.length; i++) {
  const liElem = document.createElement('li');
  liElem.textContent = `${hours[i]}${tokyoStore.avgCookiePer[i]}`;
  tokyoList.appendChild(liElem);
}


const seatteTotal = document.getElementById('seattle');
let seattleSum = 0;
for (let i = 0; i < hours.length; i++) {
  seattleSum = seattleSum + seattleStore.avgCookiePer[i];
}
const liSeattleElem = document.createElement('li');
let seattleFinal = `Total: ${seattleSum}`;
liSeattleElem.textContent = seattleFinal;
seatteTotal.appendChild(liSeattleElem);


const tokyoTotal = document.getElementById('tokyo');
let tokyoSum = 0;
for (let i = 0; i < hours.length; i++) {
  tokyoSum = tokyoSum + tokyoStore.avgCookiePer[i];
}
const liTokyoElem = document.createElement('li');
let tokyoFinal = `Total: ${tokyoSum}`;
liTokyoElem.textContent = tokyoFinal;
tokyoTotal.appendChild(liTokyoElem);
















