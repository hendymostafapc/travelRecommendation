const result= document.querySelector('result');
const inputSearch = document.querySelector('nav input').value.trim().toLowerCase();
function fetchData(){
    fetch('GET', 'travel_recommendation_api.json')
    .then(Response=>Response.json())
    .then(data=>{
        result.innerHTML="";
        const arr =['countr','beach', 'temple'];
        const card = document.createElement('div');
        if(inputSearch.includes(arr[0])){
            const cities = data.countries.cities;
            for(city of cities){
                const card = document.createElement('div');
                const img = document.createElement('img');
                const para = document.createElement('p');
                const location = document.createElement('span');
                img.setAttribute('src',city.imageUrl);
                para.innerHTML=city.description;
                span.innerHTML = city.name;
                card.appendChild(img);
                card.appendChild(para);
                card.appendChild(span);
                result.appendChild(card);
            }
        }else if(inputSearch.includes(arr[1])){
            const temples = data.temples;
            for(temple of temples){
                const card = document.createElement('div');
                const img = document.createElement('img');
                const para = document.createElement('p');
                const location = document.createElement('span');
                img.setAttribute('src',temple.imageUrl);
                para.innerHTML=temple.description;
                span.innerHTML = temple.name;
                card.appendChild(img);
                card.appendChild(para);
                card.appendChild(span);
                result.appendChild(card);
        }else if(inputSearch.includes(arr[2])){
            const beaches = data.beaches;
            for(beach of beaches){
                const card = document.createElement('div');
                const img = document.createElement('img');
                const para = document.createElement('p');
                const location = document.createElement('span');
                img.setAttribute('src',beach.imageUrl);
                para.innerHTML=beach.description;
                span.innerHTML = beach.name;
                card.appendChild(img);
                card.appendChild(para);
                card.appendChild(span);
                result.appendChild(card);
        }else{
            result.innerHTML=`No Results`;
        }
    })
    .catch(error=>{
        result.innerHTML=`An error occurred while fetching data.`
    })
}