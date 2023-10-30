function getRandomCookies(min, max, avg){
  const randomPeople = Math.floor( Math.random() * (max - min + 1) + min );
  const totalCookies = Math.floor(randomPeople * avg);
  return totalCookies;
}

const seattleStore = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 63
};

// const tokyoStore = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
// };



// const mainList = document.getElementById('boogers');
// const sixAm = document.createElement('li');
// mainList.appendChild(sixAm);
// sixAm.textContent = getRandomCookies(seattleStore.minCust,seattleStore.maxCust,seattleStore.avgCookie);

const seattleList = [];
for (let i = 0; i < 9; i++) {
  seattleList.push(getRandomCookies(seattleStore.minCust,seattleStore.maxCust,seattleStore.avgCookie));
}
const seattleTotal = seattleList[0] + seattleList[1] + seattleList[2] + seattleList[3] + seattleList[4] + seattleList[5] + seattleList[6] + seattleList[7] + seattleList[8];

console.log(seattleList);
console.log(seattleTotal);









// getRandomCookies(tokyoStore.minCust, tokyoStore.maxCust, tokyoStore.avgCookie);
// getRandomCookies(seattleStore.minCust,seattleStore.maxCust,seattleStore.avgCookie);




// function getRandomInt() {
//   const min = 3;
//   const max = 24;
//   console.log(Math.floor(Math.random() *(max - min + 1) + min));
// }

// getRandomInt();
