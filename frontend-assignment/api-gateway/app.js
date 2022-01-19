async function getData() {
  let response = await fetch("http://localhost:9000/trips");
  let data = await response.json();
  console.log(data);
  showData(data);
}
function showData(data) {
  let tripList = document.querySelector("#tripList");
  data.forEach((val) => {
    let trip = document.createElement("li");
    trip.innerText = `title: ${val.title}`;
    tripList.appendChild(trip);
  });
}
document.querySelector("#getData").addEventListener("click", getData);
