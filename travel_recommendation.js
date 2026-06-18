const result= document.querySelector('.result');
const input = document.querySelector('.inputSearch');
const searchBtn= document.querySelector('.searchBtn');
const clearBtn= document.querySelector('.clear');
const homeArticle = document.querySelector('.homeArticle');
function fetchData(){
    fetch('travel_recommendation_api.json')
    .then(Response=>Response.json())
    .then(data=>{
        const inputSearch = input.value.trim().toLowerCase();
        const timeZoneMap = {
            "Australia": "Australia/Sydney",
            "Japan": "Asia/Tokyo",
            "Brazil": "America/Sao_Paulo",
            "Cambodia": "Asia/Phnom_Penh",
            "India": "Asia/Kolkata",
            "French Polynesia": "Pacific/Tahiti"
          };
        result.innerHTML="";
        if(inputSearch.includes('country') || inputSearch.includes('countries')){
            const countries = data.countries;
            for(const country of countries){
                const cities = country.cities
                    for(const city of cities){
                        const timeDiv = document.createElement('div');
                        timeDiv.classList.add('timeDiv');
                        const card = document.createElement('div');
                        card.classList.add('card');
                        const img = document.createElement('img');
                        const para = document.createElement('p');
                        const location = document.createElement('span');
                        img.setAttribute('src',`./images/${city.imageUrl}`);
                        img.setAttribute('class',`imgCard`);
                        para.innerHTML=city.description;
                        location.innerHTML = city.name;
                        const countryName = city.name.split(', ');
                        const zone = timeZoneMap[countryName[1]];
                        const option={timeZone: zone, hour12:true, hour: 'numeric', minute: 'numeric', second:'numeric'};
                        const timeZone = new Date().toLocaleTimeString('en-US', option);
                        timeDiv.innerHTML=`Time zone: ${timeZone}`;
                        card.appendChild(timeDiv);
                        card.appendChild(img);
                        card.appendChild(location);
                        card.appendChild(para);
                        result.appendChild(card);
                    }
                }
        }else if(inputSearch.includes('temple') || inputSearch.includes('temples')){
            const temples = data.temples;
            for(const temple of temples){
                const timeDiv = document.createElement('div');
                timeDiv.classList.add('timeDiv');
                const card = document.createElement('div');
                card.classList.add('card');
                const img = document.createElement('img');
                const para = document.createElement('p');
                const location = document.createElement('span');
                img.setAttribute('src',`./images/${temple.imageUrl}`);
                img.setAttribute('class',`imgCard`);
                para.innerHTML=temple.description;
                location.innerHTML = temple.name;
                const countryName = temple.name.split(', ');
                const zone = timeZoneMap[countryName[1]];
                const option={timeZone:zone, hour12:true, hour: 'numeric', minute: 'numeric', second:'numeric'};
                const timeZone = new Date().toLocaleTimeString('en-US', option);
                timeDiv.innerHTML=`Time zone: ${timeZone}`;
                card.appendChild(timeDiv);
                card.appendChild(img);
                card.appendChild(location);
                card.appendChild(para);
                result.appendChild(card);
            }
        }else if(inputSearch.includes('beach') || inputSearch.includes('beaches')){
            const beaches = data.beaches;
            for(const beach of beaches){
                const timeDiv = document.createElement('div');
                timeDiv.classList.add('timeDiv');
                const card = document.createElement('div');
                card.classList.add('card');
                const img = document.createElement('img');
                const para = document.createElement('p');
                const location = document.createElement('span');
                img.setAttribute('src',`./images/${beach.imageUrl}`);
                img.setAttribute('class',`imgCard`);
                para.innerHTML=beach.description;
                location.innerHTML = beach.name;
                const countryName = beach.name.split(', ');
                const zone = timeZoneMap[countryName[1]];
                const option={timeZone:zone, hour12:true, hour: 'numeric', minute: 'numeric', second:'numeric'};
                const timeZone = new Date().toLocaleTimeString('en-US', option);
                timeDiv.innerHTML=`Time zone: ${timeZone}`;
                card.appendChild(timeDiv);
                card.appendChild(img);
                card.appendChild(location);
                card.appendChild(para);
                result.appendChild(card);
            }
        }else{
            result.innerHTML=`No Results`;
        }
        result.style.display= "grid";
        homeArticle.style.display= 'none';
    })
    .catch(error=>{
        result.innerHTML=`An error occurred while fetching data.`;
        result.style.display= "block";
        homeArticle.style.display= 'none';
    })
}

function clear(){
    result.innerHTML="";
    result.style.display= "none";
    homeArticle.style.display= 'flex';
    input.value=""
}

searchBtn.addEventListener('click',fetchData);
clearBtn.addEventListener('click',clear);
