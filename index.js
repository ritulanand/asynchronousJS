const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/name/india");
request.send();
console.log(request.responseText);
request.addEventListener("load",function(){
    console.log(JSON.parse(this.responseText));
    const html= `
        <div class="container">
          <div class="card">
                <img src="https://restcountries.eu/data/ind.svg" alt="flag" >
                    <div class="details">
                        <h4>country name</h4>
                        <p>continent name</p>
                        <p>population</p>
                    </div> 
           </div>
        </div> `
  })
