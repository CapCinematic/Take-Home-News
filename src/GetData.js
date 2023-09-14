async function GetData() {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-08-13&sortBy=publishedAt&apiKey=ef1451a6620e4bac88b89f17692b479c');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default GetData