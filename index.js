document.addEventListener('DOMContentLoaded', () => fetchData)

function fetchData() 
{
    fetch('https://api.github.com/users/michael-kang')
   .then((resp) => resp.json())
   .then((data) => console.log(data))
}   