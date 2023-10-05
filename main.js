const root=document.getElementById("root");
const url="https://api.jikan.moe/v4/seasons/now";
fetch(url)
.then((response)=>response.json())
.then((data)=>{
    const animes=data.data;
    animes.forEach(anime => {
        console.log(anime.images?.jpg?.image_url);
        root.innerHTML+=`
        <div class="anime_info_wrapper">
            <div class="anime_img_wrapper">
                <img src=${anime.images?.jpg?.image_url} alt="anime Image">
            </div>
        <div class="anime_info">
            <span class="anime_title">${anime.title}</span>
        </div>
        </div>`;
    });
})