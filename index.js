
let peliculas='';

var data_get ='';
var data_delete= '';


const apiURL = "https://bp-marvel-api.herokuapp.com/"


data_get = apiURL + "marvel-characters?idAuthor=1";
data_delete = apiURL + ":id?idAuthor=2";

console.log(data_get);



//Ver listado 
axios.get(data_get)
    .then((response)=>{
        console.log(response.data);

        //publicar en html
        response.data.forEach(element => {
            let elemento_id = element._id;
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
                        <button type="button" id="${elemento_id}" onclick="deleteItem(this.id)" class="btn btn-outline-danger">delete</button>
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

    //post
    async function enviar(){
        var nombre = document.getElementById('nombre').value;
        var descripcion = document.getElementById('descripcion').value;
        var imagen = document.getElementById('imagen').value;
        //var ur = data_get;
        //var long = ur.data.length +1;
        const nuevoRegi = {
            title : nombre,
            body: descripcion,
            imagen: imagen,
            category: "main",
            idAuthor: 5,
            createdAt: new Date()
        };
        console.log(nuevoRegi);
        
        try{
            const response = await axios.post(data_get, nuevoRegi);
            const newTodoItem = response.data;
  
            console.log(`Added a new Todo!`, newTodoItem);
  
            return newTodoItem;
        }catch(error){
            console.log(error);
        }
    }


    //delete
    async function deleteItem(idSelect){
        console.log(idSelect);
        try {
          const response = await axios.delete(`${apiURL}marvel-characters/${idSelect}?idAuthor=1`);
          console.log(`Deleted Todo ID: `, idSelect);
      
          return response.data;
        } catch (errors) {
          console.error(errors);
        }
        refresh();
    }

    window.addEventListener('submit',async event => {
        event.preventDefault();
        makePost();
        
    })
       
    
      

function nuevo(){
    document.getElementById('dataE').style.display = 'block';
    document.getElementById('btnNuevo').style.display = 'none';
    document.getElementById('btnRegresar').style.display = 'block';
}

function regresar(){
    document.getElementById('dataE').style.display = 'none';
    document.getElementById('btnNuevo').style.display = 'block';
    document.getElementById('btnRegresar').style.display = 'none';
    


}



    


    

