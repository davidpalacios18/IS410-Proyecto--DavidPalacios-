$('#agregarProducto').hide();

function mostrarAgregarProducto(){
    $('#agregarProducto').show();
}

function agregarProducto(){
    let producto = {
        imagenProducto: $('#imagen').val(),
        nombreProducto: $('#nombre').val(),
        descripcionProducto: $('#descripcion').val(),
        cantidadDisponible: $('#disponible').val(),
        precioNormal: $('#normal').val(),
        precioPromocion: $('#promocion').val(),
        categoriaProducto: $('#categoria').val(),
    };
    console.log(producto);

    let formData = new FormData($('#agregarProducto')[0]);

    $.ajax({
        url: '../ajax/vendedor/'
    });
    
    anexarProducto(producto);
    $('#agregarProducto').hide();
}

function anexarProducto(producto){
    $('#contenedorProductos').append(`
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-3 caja_margen" >
        <div class="card text-center ">
            <div id="imagenProducto" class="card-img-top">
                <img src="img/productos/" class="img-fluid" alt="...">
            </div>
            <div class="card-body tarjeta">
                <div class="">
                    <h5 id="tituloProducto" class="card-title">${producto.nombreProducto}</h5>
                </div>
                <div id="descripcionProducto" class="">
                    <small><p id="desProducto" class="card-text truncar-texto">${producto.descripcionProducto}</p></small>
                    <small><p id="categoria" class="card-text truncar-texto">Categoria: ${producto.categoriaProducto}</p></small>
                    <div class="card-text row">
                        <div class="col-6">
                            <small class="text-muted"><i class="fas fa-tags"></i> <span id="cantidadDisponible">${producto.cantidadDisponible}</span> Disponibles</small>
                        </div>
                        <div class="col-6">
                            <small class="text-muted">Antes<br><span id="precioAntes" style="text-decoration: line-through;"> L ${producto.precioNormal}</span> </small>
                        </div>
                    </div><hr>
                    <div class="">
                        <p class="card-text"><span id="precioOferta">L ${producto.precioPromocion}</span></p>
                    </div><hr>
                </div>
                <div class="">
                    <button href="#" class="btn btn-link btn-producto">Editar</button> | <button href="#" class="btn btn-link btn-producto">Eliminar</button>  <!-- btn btn-anadirCarrito -->
                </div>
            </div>
        </div>
    </div>
    
    `);
}