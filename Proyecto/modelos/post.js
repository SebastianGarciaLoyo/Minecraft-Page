export function post(url,usuarios){
    console.log(url)
    fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(usuarios),
    })

    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
}