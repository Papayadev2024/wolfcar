@extends('components.public.matrix', ['pagina' => 'catalogo'])
@section('title', 'Producto Detalle | ' . config('app.name', 'Laravel'))

@section('css_importados')

@stop



@section('content')
  <?php
  // Definición de la función capitalizeFirstLetter()
  // function capitalizeFirstLetter($string)
  // {
  //     return ucfirst($string);
  // }
  ?>

  <style>
    .clase_table {
      border-collapse: separate;
      border-spacing: 10;
    }

    .clase_table td {
      /* border: 1px solid black; */
      border-radius: 10px;
      -moz-border-radius: 10px;
      padding: 10px;
    }

    .swiper-pagination-bullet-active {
      background-color: #272727;
    }

    .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
      background-color: #979693 !important;
    }

    .blocker {
      z-index: 20;
    }
  </style>
  @php
    $images = ['', '_ambiente'];
    $x = $product->toArray();
    $i = 1;
  @endphp
  @php
    $breadcrumbs = [['title' => 'Inicio', 'url' => route('index')], ['title' => 'Producto', 'url' => '']];
  @endphp
  @component('components.breadcrumbs', ['breadcrumbs' => $breadcrumbs])
  @endcomponent
  <main class="font-poppins px-5" id="mainSection">
    @csrf



    <section class="flex flex-col gap-10 md:flex-row md:gap-24 w-11/12 m-auto mt-10">
      <div class="grid grid-col-1 sm:grid-cols-3  gap-1  mt-10 h-max w-6/12">
        <div class=" col-span-3 h-max">

          <img class="w-full h-max  object-cover" src="{{ asset($product->imagen) }}" alt="">


        </div>

        <x-product-slider :product="$product" />
      </div>
      <div class="flex flex-col gap-6 w-7/12 mt-10 ">
        <div class="flex flex-col gap-3">
          <h3 class="font-Inter_Regular text-[34.41px] text-[#333333]"> {{ $product->producto }}</h3>
          <p class="font-Inter_Regular text-[14.77px] gap-2">Disponibilidad:
            @if ($product->stock == 0)
              <span class="text-[#f6000c]">No hay Stock disponible</span>
          </p>
        @else
          <span class="text-[#006BF6]">Quedan {{ round((float) $product->stock) }} en stock</span> </p>
          @endif

        </div>
        <div class="flex flex-col gap-5 ">
          <p class="font-Inter_Regular text-[13.34px] gap-2 text-[#666666]">SKU: {{ $product->sku }} </p>

          <div class="flex flex-row gap-3 content-center items-center">
            @if ($product->descuento == 0)
              <div class=" content-center flex flex-row gap-2 items-center">
                <span class="font-bold text-2xl gap-2 text-[#006BF6]">S/ {{ $product->precio }}</span>


              </div>
            @else
              <div class=" content-center flex flex-row gap-2 items-center">
                <span class="font-bold text-2xl gap-2 text-[#006BF6]">S/ {{ $product->descuento }}</span>

                <span class="text-[#666666] font-normal line-through text-sm">S/ {{ $product->precio }}</span>
              </div>
              @php
                $descuento = round((($product->precio - $product->descuento) * 100) / $product->precio);
              @endphp
              <span
                class="font-medium text-center  content-center text-xs gap-2 bg-[#006BF6] text-white h-8 w-14 rounded-3xl">
                -{{ $descuento }}% </span>
            @endif


          </div>
          <p class="text-sm leading-6 ">
            {!! $product->description !!}
          </p>

        </div>
        <div class="flex flex-col gap-6">
          @php
            $groupedAttributes = $product->attributes->groupBy('titulo');
          @endphp

          @foreach ($groupedAttributes as $titulo => $items)
            <div class="flex flex-row gap-3 text-center">
              <span>{{ $titulo }}:</span>
              @foreach ($items as $item)
                @php
                  // Encuentra el objeto en $valorAtributo que tiene el id igual a $item->pivot->attribute_value_id
                  $atributo = $valorAtributo->firstWhere('id', $item->pivot->attribute_value_id);
                @endphp @if ($atributo)
                  <!-- Muestra el valor del atributo encontrado -->
                  <span class="bg-[#006BF6] text-white rounded-md px-2 text-[15px]">{{ $atributo->valor }}</span>
                @endif
              @endforeach
            </div>
          @endforeach



        </div>
        <p class="font-normal text-sm gap-2">Especificaciones: </p>

        <div class="min-w-full divide-y divide-gray-200">
          <table class="clase_table divide-y divide-gray-200 ">
            <tbody>
              @foreach ($especificaciones as $item)
                <tr>
                  <td class="px-4 py-2 whitespace-nowrap border border-gray-200 rounded-lg">
                    {{ $item->tittle }}
                  </td>
                  <td class="px-4 py-2 whitespace-nowrap border border-gray-200 rounded-lg">
                    {{ $item->specifications }}
                  </td>
                </tr>
              @endforeach
            </tbody>
          </table>
        </div>
        <div class="flex flex-row gap-6">

          <div class="flex flex-row gap-2 items-center">
            <i class="h-5 w-5 inline-block"
              style="background-image: url('{{ asset('images/img/carrito.png') }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"></i>
            <span class=""> Envio a Domicilio</span>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <i class="h-5 w-5 inline-block"
              style="background-image: url('{{ asset('images/img/mail.png') }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"></i>
            <a href="https://api.whatsapp.com/send?phone={{ $general->whatsapp }}&text=Hola! Quería solicitar informacion para el producto  {{ $product->producto }}."
              class="">Preguntar sobre este producto</a>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex flex-row gap-5">
            <div class="flex mb-4">
              <div class="flex justify-center items-center bg-[#F5F5F5] cursor-pointer hover:bg-slate-300">
                <button class="py-2.5 px-5 text-lg font-semibold" id=disminuir type="button">-</button>
              </div>
              <div id=cantidadSpan
                class="py-2.5 px-5 flex justify-center items-center bg-[#F5F5F5] text-lg font-semibold">
                <span>1</span>
              </div>
              <div class="flex justify-center items-center bg-[#F5F5F5] cursor-pointer hover:bg-slate-300">
                <button class="py-2.5 px-5 text-lg font-semibold" id=aumentar type="button">+</button>
              </div>
            </div>

            <button id="btnAgregarCarrito" class="bg-[#0D2E5E] w-60 text-white text-center rounded-3xl font-bold"> Agregar
              al Carrito </button>
            <button class="bg-[#0D2E5E] w-12 h-12 rounded-full text-white flex justify-center items-center">
              <img src="{{ asset('images/img/blanco.png') }}" alt="" class="w-8 h-8">
            </button>

          </div>

        </div>
        <div class="flex flex-col mt-9">
          <h6 class="">Combinalo con: </h6>

          <div class="grid grid-cols-3 gap-3  mb-6">
            <div class="col-span-3">
              <div class="swiper productos-relacionados">

                <div class="swiper-wrapper gap-2 h-full">
                  @foreach ($ProdComplementarios as $item)
                    <div class="swiper-slide w-full h-full col-span-1">
                      <div class="flex flex-col items-center justify-center col-span-1  shadow-lg py-2  pb-5">
                        <a href="/producto/{{ $item->id }}" target="_blanck">
                          {{-- <img src="{{ asset('images\img\1.png') }}" alt="" class="h-40 w-40 ">
                          <span> {{ $item->producto }}</span>
                          <h2 class="font-bold text-[#006BF6]">S/ 80.00</h2> --}}
                          <x-product.container width="" bgcolor="bg-[#FFFFFF]" :item="$item" />


                        </a>

                      </div>

                    </div>
                  @endforeach

                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="flex flex-col mt-9 gap-2">
          <span>
            Pago seguro garantizado
          </span>
          <div class="flex flex-row gap-4">
            <img src="{{ asset('images\svg\amazon.png') }}" alt="" class="h-9 w-14">
            <img src="{{ asset('images\svg\american.svg') }}" alt="" class="h-9 w-14">
            <img src="{{ asset('images\svg\applepay.png') }}" alt="" class="h-9 w-14">
            <img src="{{ asset('images\svg\bitcoin.png') }}" alt="" class="h-9 w-14">
            <img src="{{ asset('images\svg\Vector-1.svg') }}" alt="" class="h-9 w-14">
            <img src="{{ asset('images\svg\gpay.png') }}" alt="" class="h-9 w-14">

            <img src="{{ asset('images\svg\visa.svg') }}" alt="" class="h-9 w-14">

            <img src="{{ asset('images\svg\paypal.svg') }}" alt="" class="h-9 w-14">
          </div>
          <div class="flex flex-row gap-4 mt-6">
            <span>Compartir</span>
            <img src="{{ asset('images\svg\gb.svg') }}" alt="" class="h-8 w-8">
            <img src="{{ asset('images\svg\twitter.svg') }}" alt="" class="h-8 w-8">
            <img src="{{ asset('images\svg\pinterest.svg') }}" alt="" class="h-8 w-8">
          </div>
        </div>

      </div>
    </section>
    <section class="bg-[#F8F8F8]">
      <div class="w-11/12 mx-auto pt-20 ">
        <div class="flex flex-row justify-between w-full ">
          <h1 class="text-[29px] font-semibold">Productos Relacionados</h1>
          <a href="" class="flex items-center font-semibold text-[#006BF6] ">Ver todos los productos <img
              src="{{ asset('images/img/arrowBlue.png') }}" alt="Icono" class="ml-2 "></a>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-14 w-full">
          @foreach ($ProdComplementarios->take(4) as $item)
            <x-product.container width="w-1/4" bgcolor="bg-[#FFFFFF]" :item="$item" />
          @endforeach




        </div>
      </div>

    </section>
    <section class="">
      <div class="w-11/12 mx-auto pt-20 ">
        <h3 class="text-[30px] font-medium"> ¿Qué dicen los clientes sobre nosotros?</h3>

        <div class="grid grid-cols-3 w-full gap-8 pt-20">
          @foreach ($testimonios->take(3) as $item)
            <div class="flex flex-col bg-[#F7F7F7] col-span-1 p-7 gap-6">
              <div class="flex items-center gap-4"> <!-- Contenedor Flex para la imagen y el texto -->
                <p class="font-medium text-[20px] flex-1">Gran calidad</p>
                <!-- flex-1 hace que el texto ocupe el espacio disponible -->
                <img src="{{ asset('images\svg\icons8-comillas-48.png') }}" alt=""
                  class="w-10 h-10 rounded-full">
              </div>
              <p class="font-normal text-[16px]">Duis auctor eros id risus fringilla, eget porta leo vestibulum. Morbi
                mollis ligula non dui consectetur, a rhoncus nulla dictum. Etiam mattis pulvinar ipsum.
              </p>
              <div class="font-bold text-[20px] w-5">
                Ademir Neyra
              </div>
              <p class="text-[13px] font-normal">Lima, Peru</p>
            </div>
          @endforeach

        </div>


      </div>


    </section>


  </main>

@section('scripts_importados')
  <script>
    var headerServices = new Swiper(".productos-relacionados", {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      centeredSlides: false,
      initialSlide: 0, // Empieza en el cuarto slide (índice 3) */
      /* pagination: {
        el: ".swiper-pagination-estadisticas",
        clickable: true,
      }, */
      //allowSlideNext: false,  //Bloquea el deslizamiento hacia el siguiente slide
      //allowSlidePrev: false,  //Bloquea el deslizamiento hacia el slide anterior
      allowTouchMove: true, // Bloquea el movimiento táctil
      autoplay: {
        delay: 5500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          centeredSlides: false,
          loop: true,
        },
        1024: {
          slidesPerView: 3,
          centeredSlides: false,

        },
      },
    });
  </script>
  <script>
    // $(document).ready(function() {


    function capitalizeFirstLetter(string) {
      string = string.toLowerCase()
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // })
    $('#disminuir').on('click', function() {
      let cantidad = Number($('#cantidadSpan span').text())
      if (cantidad > 0) {
        cantidad--
        $('#cantidadSpan span').text(cantidad)
      }


    })
    // cantidadSpan
    $('#aumentar').on('click', function() {
      let cantidad = Number($('#cantidadSpan span').text())
      cantidad++
      $('#cantidadSpan span').text(cantidad)

    })
  </script>
  <script>
    let articulosCarrito = [];


    function deleteOnCarBtn(id, operacion) {
      const prodRepetido = articulosCarrito.map(item => {
        if (item.id === id && item.cantidad > 0) {
          item.cantidad -= Number(1);
          return item; // retorna el objeto actualizado 
        } else {
          return item; // retorna los objetos que no son duplicados 
        }

      });
      Local.set('carrito', articulosCarrito)
      limpiarHTML()
      PintarCarrito()


    }

    function calcularTotal() {
      let articulos = Local.get('carrito')
      let total = articulos.map(item => {
        let monto
        if (Number(item.descuento) !== 0) {
          monto = item.cantidad * Number(item.descuento)
        } else {
          monto = item.cantidad * Number(item.precio)

        }
        return monto

      })
      const suma = total.reduce((total, elemento) => total + elemento, 0);

      $('#itemsTotal').text(`S/. ${suma} `)

    }

    function addOnCarBtn(id, operacion) {

      const prodRepetido = articulosCarrito.map(item => {
        if (item.id === id) {
          item.cantidad += Number(1);
          return item; // retorna el objeto actualizado 
        } else {
          return item; // retorna los objetos que no son duplicados 
        }

      });
      Local.set('carrito', articulosCarrito)
      // localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
      limpiarHTML()
      PintarCarrito()


    }

    function deleteItem(id) {
      articulosCarrito = articulosCarrito.filter(objeto => objeto.id !== id);

      Local.set('carrito', articulosCarrito)
      limpiarHTML()
      PintarCarrito()
    }

    var appUrl = <?php echo json_encode($url_env); ?>;
    $(document).ready(function() {
      articulosCarrito = Local.get('carrito') || [];

      PintarCarrito();
    });

    function limpiarHTML() {
      //forma lenta 
      /* contenedorCarrito.innerHTML=''; */
      $('#itemsCarrito').html('')


    }

    $('#btnAgregarCarrito').on('click', function() {
      let url = window.location.href;
      let partesURl = url.split('/')
      let item = partesURl[partesURl.length - 1]
      let cantidad = Number($('#cantidadSpan span').text())
      item = item.replace('#', '')



      // id='nodescuento'


      $.ajax({

        url: `{{ route('carrito.buscarProducto') }}`,
        method: 'POST',
        data: {
          _token: $('input[name="_token"]').val(),
          id: item,
          cantidad

        },
        success: function(success) {
          let {
            producto,
            id,
            descuento,
            precio,
            imagen,
            color
          } = success.data
          let cantidad = Number(success.cantidad)
          let detalleProducto = {
            id,
            producto,
            descuento,
            precio,
            imagen,
            cantidad,
            color

          }
          let existeArticulo = articulosCarrito.some(item => item.id === detalleProducto.id)
          if (existeArticulo) {
            //sumar al articulo actual 
            const prodRepetido = articulosCarrito.map(item => {
              if (item.id === detalleProducto.id) {
                item.cantidad += Number(detalleProducto.cantidad);
                return item; // retorna el objeto actualizado 
              } else {
                return item; // retorna los objetos que no son duplicados 
              }

            });
          } else {
            articulosCarrito = [...articulosCarrito, detalleProducto]

          }

          Local.set('carrito', articulosCarrito)
          let itemsCarrito = $('#itemsCarrito')
          let ItemssubTotal = $('#ItemssubTotal')
          let itemsTotal = $('#itemsTotal')
          limpiarHTML()
          PintarCarrito()
          mostrarTotalItems()

          Swal.fire({

            icon: "success",
            title: `Producto agregado correctamente`,
            showConfirmButton: true


          });
        },
        error: function(error) {
          console.log(error)
        }

      })



      // articulosCarrito = {...articulosCarrito , detalleProducto }
    })
    // $('#openCarrito').on('click', function() {
    //   $('.main').addClass('blur')
    // })
    // $('#closeCarrito').on('click', function() {

    //   $('.cartContainer').addClass('hidden')
    //   $('#check').prop('checked', false);
    //   $('.main').removeClass('blur')


    // })
  </script>


@stop

@stop
