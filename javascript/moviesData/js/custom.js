
// var moviesData = () => {
//     new Promise((accept, reject) => {
//         const data = fetch(`https://dummyjson.com/products?skip=5&limit=15`);
//         accept(data);
//         // reject();
//     }).then((result) => {
//         new Promise((accept, reject) => {
//             accept(result.json())
//         }).then((result) => {
//             displayMovie(result);
//             console.log('Promise Complete');
//         }).catch((error) => {
//             console.log('Promise Incomplete');
//         });
//     }).catch((error) => {
//         console.log('Promise Incomplete');
//     })
// }

var moviesData = async (limit, skip) => {
    const data = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
    const result = await data.json();
    displayMovie(result);
}

var limit = 15;
var skip = 0;
var page = 1;

moviesData(limit, skip);

var displayMovie = (result) => {
    var output = '';
    result.products.forEach((v,i) => {
        output += `
            <div class="product">
                <div class="product-image">
                    <img src="${ v.thumbnail }"/>
                </div>
                <div class="product-content">
                    <h2>${ v.title }</h2>
                    <p>${ v.description }</p>
                </div>
            </div>`;
    })

    document.querySelector('.outer-products').innerHTML = output;
    console.log(result);
}

document.getElementById('previous').addEventListener('click', () => {
    if(page > 1){
        page--;
        skip = (page - 1) * limit;
        moviesData(limit, skip);
    }
});

document.getElementById('next').addEventListener('click', () => {
    page++;
    skip = (page - 1) * limit;
    moviesData(limit, skip);
});