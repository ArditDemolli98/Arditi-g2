document.querySelector("button").addEventListener("click", () => {
    let date = document.querySelector("input").value;

    fetch(`https://api.nasa.gov/planetary/apod?api_key=grafNkB7l4dxpZEWMz0PGxMwkPp0bncHOy2bJ4zp&date=${date}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.media_type === 'image') {
                document.querySelector("img").src = data.hdurl;
                document.querySelector("iframe").src = '';
            } else if (data.media_type === 'video') {
                document.querySelector("iframe").src = data.url;
                document.querySelector("img").src = '';
            }
            document.querySelector("h3").textContent = data.explanation;
        })
        .catch(err => {
            console.log(`Error ${err}`);
        })
})




