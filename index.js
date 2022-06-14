
let peliculas='';

var data_get ='';
var data_delete= '';

const apiURL = "https://bp-marvel-api.herokuapp.com/"


data_get = apiURL + "marvel-characters?idAuthor=1";
data_delete = apiURL + ":id?idAuthor=2";

console.log(data_get);

axios.get(data_get)
    .then((response)=>{
        console.log(response.data);

        //publicar en html
        response.data.forEach(element => {
        peliculas  += ` 
        <div class="card m-2" style="background-color: rgb(12, 14, 24);">
            <div class="card-body">   
                <div class="row"> 
                    <div class="col-md-3 col-sm-2">
                         <img src="${element.image}" width="100%" alt="">
                    </div>
                    <div class="col-md-7 col-sm-7">
                        <label for=""><span style="color: white"><b>${element.title}</b> </span> </label>
                            <br>
                            <label for=""> <span style="color: rgb(213, 204, 204)">${element.body}</span> </label>
                    </div> 
                    <div class="col-md-2 col-sm-2">
                        <button type="button" @click="delete()" class="btn btn-outline-danger">delete</button>
                    </div>           
                </div>    
            </div>
        </div>
        `;
        
        
    });
    document.getElementById('contenedor').innerHTML = peliculas;
    })
    .catch((error)=>{
        console.log("Mal conectado el api"+error);
    })


    
       
axios.delete(data_delete)
    .then((response)=>{
        console.log(response);
    })
    .catch((e)=>
        e
    )
      
    



    


    

