const bodyTask = document.getElementById("dataTask");

var list = [];

var addTask = () => {
    var edtTitle = document.getElementById("edtTitle");
    var edtDescription = document.getElementById("edtDescription");
    var title = edtTitle.value;
    var description = edtDescription.value;

    title = title.replace(" ","");
    description = description.replace(" ","");
    
    if(title != "" && description != ""){
        var item = {
            title : title,
            description : description
        };
        list.push(item);
        edtTitle.value = "";
        edtDescription.value = "";
        view();
    }else{
        alert("Datos Incompletos!");
    }
}

var view = () => {
    if(list.length > 0){
        var body = "";
        list.map( (item,index) => {
            item.id = index+1;
            body += `<tr>`;
            body += `<td>${item.id}</td>`;
            body += `<td>${item.title}</td>`;
            body += `<td>${item.description}</td>`;
            body += `<td><button class="btn btn-danger text-white text-center" onclick="remove(${index})"><i class="fa fa-trash text-center"></i></button></td>`;
            body += `</tr>`;
        });
        localStorage.setItem("data",JSON.stringify(list));
        bodyTask.innerHTML = body;
    }else{
        bodyTask.innerHTML = "";
        localStorage.removeItem("data");
    }
}

var remove = (index) => {
    var validate = confirm("Desea Eliminar Esta Tarea!!");
    if(validate){
        list.splice(index,1);
        view();
    }
}

var persisData = () => {
    list = (localStorage.getItem("data") != null) ? JSON.parse(localStorage.getItem("data")) : [];
    view();
}

(() => {
    persisData();
})();