@extends('components.public.matrix', ['pagina' => 'index'])

@section('css_importados')

@stop


@section('content')

  <main class="z-[15] ">

    <section class="bg-[#f8f8f8] flex flex-col justify-between ">
      <div class="mt-16 ">
        <h2 class="text-[#006BF6]  text-[29px] text-center">VENTA HASTA 30% DE DESCUENTO</h2>
        <h1 class=" text-[56px] font-semibold text-center">Serie de Cargadores Premium</h1>

        <div class="flex flex-col items-center justify-center w-[591px] mx-auto">
          <h3 class="text-[17px]  text-center leading-9">Funciones empaquetadas a un mejor precio que nunca Potentes
            sensores para
            controla tu estado físico</h3>
        </div>

        <div class="flex flex-col items-center justify-center  mx-auto mt-3">
          <button
            class="bg-[#006BF6] text-sm font-semibold text-white text-center p-3 rounded-3xl flex items-center justify-center"
            type="button">
            Comprar ahora
            <img src="{{ asset('images/img/Vector.png') }}" alt="Icono" class="ml-2">
          </button>

        </div>




      </div>

      <div class="h-[235px] relative">
        <img class="absolute mx-auto w-[770px] object-cover bottom-[-15.5rem] left-0 right-36"
          src="{{ asset('images\img\Frame_37798.png') }}" alt="">

      </div>


    </section>

    {{-- Seccion Categoria  --}}
    <section class="w-11/12 mx-auto">

      <h1 class="text-[29px] mx-auto mt-20 font-semibold "> Categorias </h1>


      <div class="flex gap-5 mt-14 md:min-h-[390px]">
        <div class="bg-[#EEEEEE] w-full flex flex-col justify-between items-center gap-5 relative bg-center bg-no-repeat"
          style="background-image: url({{ asset('images/img/Container.png') }});">

          <div class="z-10 flex flex-col items-center gap-5">
            <h2 class="mt-10 text-sm"> ACCESORIOS </h2>
            <h1 class="text-[29px]"> Los mejores Accesorios desde S/ 20.00</h1>

            <button
              class="bg-[#006BF6] text-sm font-semibold text-white text-center p-3 rounded-3xl  items-center justify-center w-32 mb-5 block"
              type="button">
              Comprar ahora
            </button>
          </div>
        </div>
        <div class="bg-[#EEEEEE] w-full flex flex-col justify-between items-center gap-5 relative bg-center bg-no-repeat"
          style="background-image: url({{ asset('images/img/Container-1.png') }});">


          <div class="z-10 flex flex-col items-center gap-5">
            <h2 class="mt-10 text-sm"> CELULARES </h2>
            <h1 class="text-[29px]"> Smartphones desde S/ 800.00</h1>

            <button
              class="bg-[#006BF6] text-sm font-semibold text-white text-center p-3 rounded-3xl flex items-center justify-center w-32"
              type="button">
              Comprar ahora

            </button>

          </div>


        </div>
      </div>


    </section>

    {{-- seccion Ultimos Productos  --}}
    <section class="w-11/12 mx-auto">
      <div class="flex flex-row justify-between mt-20 w-full">
        <h1 class="text-[29px] font-semibold">Últimos productos</h1>
        <a href="" class="flex items-center font-semibold text-[#006BF6] ">Ver todos los productos <img
            src="{{ asset('images/img/arrowBlue.png') }}" alt="Icono" class="ml-2 "></a>
      </div>
      <div class="flex flex-row gap-4 mt-14 w-full">
        <div class="w-1/5 flex flex-col justify-center items-center text-center">
          <img src="{{ asset('images\img\img1.png') }}" alt="" class="w-full  shadow-lg object-cover">
          <h2 class="text-xl mt-4  ">
            Drou watch ultra
          </h2>
          <div class="flex content-between flex-row gap-4">
            <span class="text-[#006BF6] text-base font-semibold">S/ 70.00</span>
            <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 85.00</span>
          </div>

        </div>
        <div class="w-1/5 flex flex-col justify-center items-center text-center">
          <img src="{{ asset('images\img\img2.png') }}" alt="" class="w-full  shadow-lg object-cover">
          <h2 class="text-xl mt-4 ">
            Laptop Lenovo Gris
          </h2>
          <div class="flex content-between flex-row gap-4">
            <span class="text-[#006BF6] text-base font-semibold">S/ 80.00</span>


          </div>

        </div>
        <div class="w-1/5 flex flex-col justify-center items-center text-center">
          <img src="{{ asset('images\img\img3.png') }}" alt="" class="w-full  shadow-lg object-cover">
          <h2 class="text-xl mt-4 ">
            Homepod mini 2022
          </h2>
          <div class="flex content-between flex-row gap-4">
            <span class="text-[#006BF6] text-base font-semibold">S/ 39.00</span>
            <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 60.00</span>
          </div>


        </div>
        <div class="w-1/5 flex flex-col justify-center items-center text-center">
          <img src="{{ asset('images\img\img4.png') }}" alt="" class="w-full  shadow-lg object-cover">
          <h2 class="text-xl mt-4 ">
            DroSafe Charger
          </h2>
          <div class="flex content-between flex-row gap-4">

            <span class="text-[#006BF6] text-base font-semibold">S/ 55.00</span>
            <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 75.00</span>

          </div>

        </div>
        <div class="w-1/5 flex flex-col justify-center items-center text-center">
          <img src="{{ asset('images\img\img5.png') }}" alt="" class="w-full  shadow-lg object-cover">
          <h2 class="text-xl mt-4 ">
            Home entertainment
          </h2>

          <div class="flex content-between flex-row gap-4">

            <span class="text-[#006BF6] text-base font-semibold">S/ 79.00</span>

          </div>

        </div>
      </div>

    </section>

    {{-- seccion Gran Descuento  --}}

    <section class="flex flex-row justify-between bg-[#EEEEEE] mt-14">
      <div class="flex flex-col items-center w-full gap-4  justify-center">
        <span class="text-[#666666]"> GRAN DESCUENTO </span>
        <h2 class="text-2xl ">Teléfono inteligente Google Píxel</h2>
        <h3 class="text-2xl font-bold text-[#15294C]"> S/ 350.00 </h3>
        <button
          class="bg-[#006BF6] text-sm font-semibold text-white text-center p-3 rounded-3xl flex items-center justify-center w-32"
          type="button">
          Comprar ahora
        </button>
      </div>
      <div class="w-full flex items-center">
        <img src="{{ asset('images/img/Frame1618873086.png') }}" alt="" class=" h-[470px] object-cover">
      </div>

    </section>

    {{-- seccion Productos populares  --}}
    <section class=" bg-[#F8F8F8]">
      <div class="w-11/12 mx-auto pt-[75px]  pb-[75px]">
        <div class="flex flex-row justify-between w-full">
          <h1 class="text-[29px] font-semibold text-[#323232]">Productos Populares</h1>
          <div class="flex  flex-row gap-8">
            <a href="" class="flex items-center font-semibold  text-base ">Todos </a>
            <a href="" class="flex items-center font-semibold text-[#006BF6] text-base ">Accesorios </a>
            <a href="" class="flex items-center font-semibold  text-base ">Tablet </a>
            <a href="" class="flex items-center font-semibold  text-base ">Celulares</a>
          </div>

        </div>
        <div class="flex flex-row gap-4 mt-14 w-full">
          <div class="w-1/4 flex flex-col justify-center items-center text-center bg-[#FFFFFF]">
            <img src="{{ asset('images\img\img1.png') }}" alt="" class="w-full   object-cover">
            <h2 class="text-xl mt-4  ">
              Drou watch ultra
            </h2>
            <div class="flex content-between flex-row gap-4">
              <span class="text-[#006BF6] text-base font-semibold">S/ 70.00</span>
              <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 85.00</span>
            </div>

          </div>
          <div class="w-1/4 flex flex-col justify-center items-center text-center bg-[#FFFFFF]">
            <img src="{{ asset('images\img\img2.png') }}" alt="" class="w-full   object-cover">
            <h2 class="text-xl mt-4 ">
              Laptop Lenovo Gris
            </h2>
            <div class="flex content-between flex-row gap-4">
              <span class="text-[#006BF6] text-base font-semibold">S/ 80.00</span>


            </div>

          </div>
          <div class="w-1/4 flex flex-col justify-center items-center text-center bg-[#FFFFFF]">
            <img src="{{ asset('images\img\img3.png') }}" alt="" class="w-full   object-cover">
            <h2 class="text-xl mt-4 ">
              Homepod mini 2022
            </h2>
            <div class="flex content-between flex-row gap-4">
              <span class="text-[#006BF6] text-base font-semibold">S/ 39.00</span>
              <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 60.00</span>
            </div>


          </div>
          <div class="w-1/4 flex flex-col justify-center items-center text-center bg-[#FFFFFF]">
            <img src="{{ asset('images\img\img4.png') }}" alt="" class="w-full   object-cover">
            <h2 class="text-xl mt-4 ">
              DroSafe Charger
            </h2>
            <div class="flex content-between flex-row gap-4">

              <span class="text-[#006BF6] text-base font-semibold">S/ 55.00</span>
              <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 75.00</span>

            </div>

          </div>

        </div>
        <div class="flex flex-row gap-4 mt-4 w-full">
          <div class="w-1/4 flex flex-col justify-center items-center text-center bg-[#FFFFFF]">
            <img src="{{ asset('images\img\img1.png') }}" alt="" class="w-full   object-cover">
            <h2 class="text-xl mt-4  ">
              Drou watch ultra
            </h2>
            <div class="flex content-between flex-row gap-4">
              <span class="text-[#006BF6] text-base font-semibold">S/ 70.00</span>
              <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 85.00</span>
            </div>

          </div>
          <div class="w-1/4 flex flex-col justify-center items-center text-center bg-[#FFFFFF]">
            <img src="{{ asset('images\img\img2.png') }}" alt="" class="w-full   object-cover">
            <h2 class="text-xl mt-4 ">
              Laptop Lenovo Gris
            </h2>
            <div class="flex content-between flex-row gap-4">
              <span class="text-[#006BF6] text-base font-semibold">S/ 80.00</span>


            </div>

          </div>
          <div class="w-1/4 flex flex-col justify-center items-center text-center bg-[#FFFFFF]">
            <img src="{{ asset('images\img\img3.png') }}" alt="" class="w-full   object-cover">
            <h2 class="text-xl mt-4 ">
              Homepod mini 2022
            </h2>
            <div class="flex content-between flex-row gap-4">
              <span class="text-[#006BF6] text-base font-semibold">S/ 39.00</span>
              <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 60.00</span>
            </div>


          </div>
          <div class="w-1/4 flex flex-col justify-center items-center text-center bg-[#FFFFFF]">
            <img src="{{ asset('images\img\img4.png') }}" alt="" class="w-full   object-cover">
            <h2 class="text-xl mt-4 ">
              DroSafe Charger
            </h2>
            <div class="flex content-between flex-row gap-4">

              <span class="text-[#006BF6] text-base font-semibold">S/ 55.00</span>
              <span class="text-sm text-[#15294C] opacity-60 line-through">S/ 75.00</span>

            </div>

          </div>

        </div>

      </div>

    </section>

    {{-- Seccion Blog --}}

    <section class="w-11/12 mx-auto mt-14">
      <div class="flex flex-row justify-between w-full">
        <h1 class="text-[29px] font-semibold text-[#323232]">Blog & Eventos</h1>
        <a href="" class="flex items-center font-semibold text-[#006BF6] ">Ver todos las Publicaciones <img
            src="{{ asset('images/img/arrowBlue.png') }}" alt="Icono" class="ml-2 "></a>
      </div>
      <div class="grid grid-cols-3 mt-14 gap-4">
        <div class="flex flex-col  text-start bg-[#FFFFFF]">
          <img src="{{ asset('images\img\20130031.png') }}" alt="" class="w-full   object-cover">

          <div class="flex content-between flex-col gap-4 mt-4 w-full">
            <div class="text-sm w-full">
              <img src="{{ asset('images\img\calendar.png') }}" alt="" class="mr-2 inline">
              21 de enero de 2023
            </div>
            <div class="text-lg">Auriculares magnate de la música</div>
          </div>

        </div>
        <div class="flex flex-col  text-start bg-[#FFFFFF]">
          <img src="{{ asset('images\img\20130031.png') }}" alt="" class="w-full   object-cover">

          <div class="flex content-between flex-col gap-4 mt-4 w-full">
            <div class="text-sm w-full">
              <img src="{{ asset('images\img\calendar.png') }}" alt="" class="mr-2 inline">
              21 de enero de 2023
            </div>
            <div class="text-lg">Auriculares magnate de la música</div>
          </div>

        </div>
        <div class="flex flex-col  text-start bg-[#FFFFFF]">
          <img src="{{ asset('images\img\20130031.png') }}" alt="" class="w-full   object-cover">

          <div class="flex content-between flex-col gap-4 mt-4 w-full">
            <div class="text-sm w-full">
              <img src="{{ asset('images\img\calendar.png') }}" alt="" class="mr-2 inline">
              21 de enero de 2023
            </div>
            <div class="text-lg">Auriculares magnate de la música</div>
          </div>

        </div>

    </section>

    {{-- gran descuento --}}
    <section class="w-11/12 mx-auto mt-14 ">
      <div class="bg-gradient-to-b from-gray-50 to-white flex flex-row justify-between  min-h-[450px] ">
        <div class="flex flex-col items-center w-full gap-4  justify-center">
          <span class="text-[#666666]"> GRAN DESCUENTO </span>
          <h2 class="text-2xl ">En Tables y Laptos </h2>
          <h3 class="text-2xl font-bold text-[#15294C]"> S/ 350.00 </h3>
          <button
            class="bg-[#006BF6] text-sm font-semibold text-white text-center p-3 rounded-3xl flex items-center justify-center w-32"
            type="button">
            Comprar ahora
          </button>
        </div>
        <div class="w-full flex items-center justify-center content-center relative">
          <img src="{{ asset('images\img\relojes.png') }}" alt=""
            class=" w-[28rem] object-cover object-center absolute">
        </div>

      </div>


    </section>

    <section class=" mt-14 bg-[#F8F8F8]">

      <div class="grid grid-cols-3 w-11/12 mx-auto p-10">
        <div class="flex flex-col items-center w-full gap-4 justify-center text-center">
          <img src="{{ asset('images/img/box.png') }}" alt="">
          <h4 class="text-xl font-bold"> Entrega gratis </h4>
          <span class="text-lg p-9 leading-8">Y devoluciones gratuitas. Ver pago para
            fechas de entrega.</span>
        </div>
        <div class="flex flex-col items-center w-full gap-4 justify-center text-center">
          <img src="{{ asset('images/img/box.png') }}" alt="">
          <h4 class="text-xl font-bold "> Entrega gratis </h4>
          <span class="text-lg p-9 leading-8">Y devoluciones gratuitas. Ver pago para
            fechas de entrega.</span>
        </div>
        <div class="flex flex-col items-center w-full gap-4 justify-center text-center">
          <img src="{{ asset('images/img/box.png') }}" alt="">
          <h4 class="text-xl font-bold "> Entrega gratis </h4>
          <span class="text-lg p-9 leading-8">Y devoluciones gratuitas. Ver pago para
            fechas de entrega.</span>
        </div>
      </div>

    </section>


  </main>


@section('scripts_importados')




@stop

@stop
