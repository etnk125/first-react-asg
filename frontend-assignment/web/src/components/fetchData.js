//fetch data from api

async function fetchData({ url, text, limit }) {
  try {
    const res = await fetch(`${url}api/trips?keyword=${text}&_limit=${limit}`);
    const JSONdata = await res.json();
    return JSONdata;
  } catch (err) {
    console.log(err);
    return [];
  }
}
export default fetchData;
