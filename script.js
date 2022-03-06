let h1_tag = document.createElement("h1");
let h1_text = document.createTextNode("Brewery List");
h1_tag.className = "heading-container";
h1_tag.appendChild(h1_text);
document.body.appendChild(h1_tag);

let first_div = document.createElement("div");
first_div.id = "maincontainer";
first_div.className = "brewerylist";
document.body.appendChild(first_div);

const url = "https://api.openbrewerydb.org/breweries";

async function getData() {
  let breweries;
  try {
    let data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    breweries = await data.json();
  } catch (err) {
    console.log(err);
  }
  return breweries;
}

async function displayData() {
  let details = await getData();
  console.log(details);
  first_div.innerHTML = "";
  console.log(details);
  details.forEach((element) => {
    let address = `${element.street} ,${ element.city}`;

    first_div.innerHTML += `
        <div class='container'>
        <p class='Name_bewery'><strong>Name: ${element.name}</strong></p>
        <p><b>Type:</b> ${element.brewery_type}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Phone:</b> ${element.phone} </p>
        <p><b>Website_Url:</b> ${element.website_url} </p>
        </div>
        `;
  });
}

displayData();