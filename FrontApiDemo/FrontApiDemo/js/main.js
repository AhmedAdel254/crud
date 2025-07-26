
var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productDesc = document.getElementById("productDesc")
var products=[] ; 

function getDataFromApi(){
     fetch('http://localhost:4000/getAllProduct')
      .then(response => response.json())
      .then(json => {
        products=json;
        // console.log(products)
        displayProduct()
    })
}
getDataFromApi();

function displayProduct(){
    var cartona=""
    for(let i = 0 ; i < products.length ; i ++){
        cartona +=`
        <tr>
                    <td> ${products[i].name}</td>
                    <td> ${products[i].price}</td>
                    <td> ${products[i].description}</td>
                    <td> 
                        <button class="btn btn-danger" onclick='deleteData(${products[i].id})'> delete</button>
                        <button class="btn btn-success" onclick='updateProduct(${i},${products[i].id})'> update</button>
                    </td>
    </tr>
`
    }
    document.getElementById("tbody").innerHTML=cartona ;
}

function inputData(){
    var data = {
        name : productName.value ,
        price: productPrice.value ,
        description: productDesc.value
    }
    sendDataToApi("addProduct","POST",data)
    clear()
    // getDataFromApi()
}

function sendDataToApi(endPoint,method,data){

// POST request using fetch()
fetch(`http://localhost:4000/${endPoint}`, {
    
    // Adding method type
    method:method,
    
    // Adding body or contents to send
    body: JSON.stringify(data),
    
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(result =>{
    if(result=="sucess"){
        getDataFromApi()
    }
} );
}

function clear(){
    productName.value=""
    productPrice.value=""
    productDesc.value=""
}

function deleteData(id){
    sendDataToApi("deleteProduct","DELETE",{id})
}
var productId ;

function updateProduct(index,id){
    productId=id
    productName.value=products[index].name
    productPrice.value=products[index].price
    productDesc.value=products[index].description 
    document.getElementById("add").style.display="none"
    document.getElementById("update").style.display="block"
}
function sendUpdate(){
    var data = {
        id : productId ,
        name : productName.value ,
        price: productPrice.value ,
        description: productDesc.value
    }
        sendDataToApi("updateProduct","PUT", data)
        document.getElementById("add").style.display="block"
        document.getElementById("update").style.display="none"
        clear()
}
