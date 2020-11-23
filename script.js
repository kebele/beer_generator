


/* ++++++++++++++++++++++++++++++++++++++
 thanks to Ania Kubow
https://www.youtube.com/watch?v=MAU15Vn7mKI
  ++++++++++++++++++++++++++++++++++++++
*/




document.addEventListener("DOMContentLoaded", () => {
  const beerButton = document.querySelector(".beer-button");
  const randomBeer = document.querySelector(".random-beer");
  const descriptionDisplay = document.querySelector(".description");
  const tagDisplay = document.querySelector(".tag");
  const beerImage = document.getElementById('beer-image');
  const foodPairing = document.querySelector('.pairing')


  function getData(e) {
      e.preventDefault();

    //fetch api https://api.punkapi.com/v2/beers
    // fetch("https://api.punkapi.com/v2/beers")
    //random çeksin istiyoruz
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data)
        //api den çektiği datayı json a çevirecek sonrada console a yazacak
        //random dan gelen
        //0: {id: 229, name: "Rye Hammer", tagline: "Our Ruthless IPA with A Spicy Twist.", first_brewed: "06/2016", description: "Rye Hammer is
        const name = data[0].name;
        // console.log(name);
        //console da name bilgisi var
        const tag = data[0].tagline;
        const description = data[0].description;
        //  console.log(description);
         const image = data[0].image_url;
        //  console.log(image)
        const { volume } = data[0]; //object old. için
        const volumeValue = volume.value;
        const volumeUnit = volume.unit;
        // console.log(volumeValue, volumeUnit);

        const pairing = data[0].food_pairing;
        console.log(pairing)

        // randomBeer.innerHTML = name + " " + volumeValue + volumeUnit;
        randomBeer.innerHTML = name;
        descriptionDisplay.innerHTML = description;
        tagDisplay.innerHTML = tag;
        tagDisplay.style.color = "orangered";
        beerImage.innerHTML = `<img src="${image}" alt=""></img>`;
        foodPairing.innerHTML = "</br>" + "<h3 style='color:blue;'>pairing foods</h3>" + pairing.map(x => `<p>${x}</p>`).join('') 
    
        
        
      });
  }

  beerButton.addEventListener('click', getData)
});

