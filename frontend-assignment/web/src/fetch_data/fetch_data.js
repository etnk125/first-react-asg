const url = "http://localhost:9000/trips";
// let searchBar = document.querySelector("#searchBar");
// to get all data
export async function getData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    // showData(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
// to get searchData
export async function searchData(searchText) {
  try {
    // let response = await fetch(url + "?keyword=" + searchText);
    let response = await fetch(url + "?q=" + searchText);
    // let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    // let filteredData = data.filter((val) => {
    //   console.log(val.title);
    //   return (
    //     val.title.includes(searchText) ||
    //     val.description.includes(searchText) ||
    //     val.tags.includes(searchText)
    //   );
    // });
    // showData(filteredData);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

// to show data
export function showData(data) {
  // clearData();
  data.forEach((val) => {
    let trip = document.createElement("li");
    trip.innerText = `title: ${val.title}`;
    console.log(trip);
  });
}

// // to clear content
// function clearData() {
//   tripList.innerHTML = "";
// }
// export default fetch_data;
