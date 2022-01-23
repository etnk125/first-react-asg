//for fetch debugging before implement react web
let url = "http://localhost:9000";
let tripList = document.querySelector("#tripList");
let searchBar = document.querySelector("#searchBar");
// to get all data
async function getData() {
  try {
    let response = await fetch(`${url}/trips`);
    let data = await response.json();
    console.log(data);
    showData(data);
  } catch (err) {
    console.log(err);
  }
}
// to get searchData
async function searchData(searchText) {
  try {
    // let response = await fetch(url + "?keyword=" + searchText);
    let response = await fetch(`${url}/api/trips?keyword=${searchText}`);
    let data = await response.json();
    showData(data);
  } catch (err) {
    console.log(err);
  }
}

// to show data
function showData(data) {
  clearData();
  data.forEach((val) => {
    let trip = document.createElement("li");
    trip.innerText = `title: ${val.title}`;
    tripList.appendChild(trip);
  });
}

// to clear content
function clearData() {
  tripList.innerHTML = "";
}

searchBar.addEventListener("input", (event) => {
  event.preventDefault();
  let searchText = event.target.value;
  console.log(searchText);
  searchData(searchText);
});
