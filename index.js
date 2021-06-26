const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/name/Japan");
request.send();
console.log(request.responseText);
request.addEventListener("load",function(){
    let data = JSON.parse(this.responseText)[0];
    let currency = data.currencies[0]
    let secondData = JSON.parse(this.responseText)[1];
    console.log(data);
    const html= `
        <div class="container">
          <div class="card">
                <img src="${data.flag}" alt="flag" >
                    <div class="details">
                        <h4>Country: ${data.name}</h4>
                        <p>Capital: ${data.capital}</p>
                        <p>Currency: ${currency.symbol}</p> 
                        <span>${currency.name}</span>
                        <p>Continent: ${data.region}</p>
                        <p>Population : ${data.population}</p>
                    </div> 
           </div>
        </div> `
        let startingDom = document.getElementById('start');
        startingDom.insertAdjacentHTML('afterend', html);
  })
