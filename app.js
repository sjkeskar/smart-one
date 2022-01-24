const getdata = async () => {
    const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
    const data = response.json()
    return data
}

getdata().then(prod => {
    const store = []
    for (let i in prod.products) {
        store.push(prod.products[i])
    }
    store.sort((a, b) => { return parseInt(b.popularity) - parseInt(a.popularity) })
    console.log(store)
    addToTable(store)
})

const addToTable = (arr) => {
    const table = document.getElementById("table");
    let j=0
    for (let i in arr) {
        let row = table.insertRow(-1)
        let num = row.insertCell(0)
        let popularity = row.insertCell(1)
        let title = row.insertCell(2);
        let price = row.insertCell(3);
        let subcategory = row.insertCell(4)
        num.innerHTML = parseInt(i)+1
        popularity.innerHTML = arr[i].popularity
        title.innerHTML = arr[i].title
        price.innerHTML = arr[i].price
        subcategory.innerHTML = arr[i].subcategory
        if(j%2===0){
            row.setAttribute("class","table-secondary")
        }else{
            row.setAttribute("class","table-light")
        }
        j++;
    }
}


// const store = []
// const ul = getdata()
// for (let i in ul) {
//     store.push(ul[i])
// }
// store.sort((a, b) => { return parseInt(b.popularity) - parseInt(a.popularity) })
// console.log(store)