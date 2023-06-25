fetch("archivo.json")
.then(response => {
    return response.json();
})
.then(jsondata => console.log(JSON.stringify(jsondata)));
