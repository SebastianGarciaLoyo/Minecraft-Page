import { post } from "../modelos/post.js";


export function controlador(form, e, usuarios){
    const URL = "http://localhost:3000/"
    let url = ""

    const datos = form !== null ? Object.fromEntries(new FormData(form)) : null;
    const value = e.target.value
    console.log(value)

    switch (value){
        case "Registrarse":
            url = URL + usuarios;
            post(url, datos);
            form.reset();
            break;  
        }
}