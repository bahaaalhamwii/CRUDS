let title = document.querySelector('#title');
let price = document.querySelector('#price');
let taxes = document.querySelector('#taxes');
let ads = document.querySelector('#ads');
let discount = document.querySelector('#discount');
let numberofcat = document.querySelector('#number-of-cat');
let category = document.querySelector('#category');
let total = document.querySelector('.total');
let creat = document.querySelector('.creat');
let bodydata = document.querySelector('.body-data');
let deletal = document.querySelector('.delete-all');
let count;
let mood ='creat';
let tmp;




function gettotal(){
    if(price.value!=''){
    let result =(+price.value + +taxes.value + +ads.value ) - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor='green'
    }
    else{
    window.alert("pleas Enter A price")
    total.style.backgroundColor='red'
    }
    }
    
    
    
    
     let datapro='';
     if(localStorage.product!=null){
      datapro=JSON.parse(localStorage.product)
      }
     else{
        datapro=[];
     }

    creat.onclick=()=>{
        let newbro ={
            title:title.value.toLowerCase(),
            price:price.value,
            taxes:taxes.value,
            ads:ads.value,
            discount :discount.value,
            total:total.innerHTML,
            numberofcat:numberofcat.value,
            category:category.value.toLowerCase()
        }
        count= numberofcat.value;
        if(mood==='creat'){
            if(count>1){
                for(let i=0; i<count;i++){
                    datapro.push(newbro);
                    localStorage.setItem('product',JSON.stringify(datapro));
                    clearinput()
                    showdata()
    
                }
            }
            else if(count=1){
                datapro.push(newbro);
                localStorage.setItem('product',JSON.stringify(datapro));
                clearinput()
                showdata()
            }
        }
        else{
             datapro[tmp] = newbro;
             localStorage.setItem('product',JSON.stringify(datapro));
              mood='creat';
              numberofcat.style.display='block';
              creat.innerHTML='creat';

        }

    }
    
    
    
    
    function clearinput(){
        title.value='';
         price.value='';
         taxes.value='';
         ads.value='';
         discount.value='';
         numberofcat.value='';
         category.value ='';
    }
    
    
    
    function showdata(){
    
        let table='';
        for(let i=0; i<datapro.length ;i++){
            table +=`
    
            <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button onclick="updatdata(${i})" id="update">update</button></td>
        <td><button onclick="deletData(${i})" id="delet">delete</button></td>
        </tr>
        <br>
            
            `
        }
     bodydata.innerHTML=table;
    }
    
    
    function deletData(i){
      datapro.splice(i,1);
      localStorage.product=JSON.stringify(datapro);
      showdata()
    
    }


    function deletall(){
        datapro.splice(0);
        localStorage.clear();
        showdata()
    }


    function updatdata(i){
        title.value = datapro[i].title;
        price.value = datapro[i].price;
        taxes.value = datapro[i].taxes;
        ads.value = datapro[i].ads;
        category.value=datapro[i].category;
        numberofcat.style.display='none';
        creat.innerHTML='update';
        mood='update';
        tmp = i;

    }



    let searchMood='title';
    function getSearhMood(id){

        let search = document.querySelector('#search11');
        if(id=='search-by-title'){
            search.placeholder='search by title';
            searchMood='title';
        }
        else{
            search.placeholder='search by categury';
            searchMood='categury'
        }
        search.focus();
    }




    function searchData(value){


        let table='';
        if(searchMood=='title'){
            for(let i=0;i<datapro.length;i++){
                if(datapro[i].title.includes(value)){
                    table +=`
    
                    <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updatdata(${i})" id="update">update</button></td>
                <td><button onclick="deletData(${i})" id="delet">delete</button></td>
                </tr>
                    
                    `


                }
            }
        }
        else{
            for(let i=0;i<datapro.length;i++){
                if(datapro[i].category.includes(value)){
                    table +=`
    
                    <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updatdata(${i})" id="update">update</button></td>
                <td><button onclick="deletData(${i})" id="delet">delete</button></td>
                </tr>
                    
                    `


                }
            }

        }
        bodydata.innerHTML=table;





    }



    

    



