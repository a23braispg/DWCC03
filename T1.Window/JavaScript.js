let ventanaRemota;

function abrirVentana() {
    const permiso = confirm("¿Quieres abrir la nueva ventana?");
    if (permiso) {
        ventanaRemota = window.open("nuevaVentana.html", "Nueva Ventana", "width=300,height=300,toolbar=no,menubar=no,top=400,left=400");
    }
}

function cerrarVentanaRemota() {
    const confirmacion = confirm("¿Estás seguro de que quieres cerrar la ventana?");
    if(!ventanaRemota.closed){
        if (confirmacion) {
            ventanaRemota.close();
        }
    }else{
        alert("La ventana remota está cerrada.");
    }   
}

function cerrarVentana() {
    const confirmacion = confirm("¿Estás seguro de que quieres cerrar la ventana?");    
    if (confirmacion) {
        if (ventanaRemota && !ventanaRemota.closed) {
            ventanaRemota.close();
        } else {
            window.close();
        }
    }
}

function desplazarVentana() {
    window.moveBy(50, 50); 
}

function aumentarTamano() {
    window.resizeBy(50, 50);
}

function redimensionarVentana() {
    window.resizeTo(500, 500);
}