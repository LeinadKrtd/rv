document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "+593980906099";
    
    let cliente = document.querySelector("#cliente").value;
    let contenido = document.querySelector("#contenido").value;

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_Rv Importaciones WebHomra_*%0A
          *¿En qué podemos ayudarte?*%0A %0A
          *Nombre del Cliente: *%0A
          ${cliente}%0A
          *Contenido: *%0A
          ${contenido}`;
  
    window.open(url);
  });