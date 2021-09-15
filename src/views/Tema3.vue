<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Formas de entrada a mercados internacionales

    

    p.mb-4 Previamente, se han identificado las pautas para la preselección y selección de mercados, al igual que la segmentación de este, para lograr establecer el mercado disponible para la empresa, es decir, el grupo de personas que estarían dispuestas a adquirir los productos y servicios ofertados por la misma.
    p.mb-4 Es el momento de determinar la forma de entrada al mercado seleccionado. Esta elección faculta a la empresa para el planteamiento del plan de acción a poner en marcha para la comercialización internacional. Las formas de entrada a mercados son:


    .row.mb-5
      .col-lg-12(style='background-color: #F3F9FF')
        SlyderC.mb-0(:datos="datosSlyder")
    
    
    p.mb-4 En este orden de ideas, y con el fin de continuar con el proceso de expansión de mercados, llega el momento en el cual las empresas centran su atención en la mezcla de mercado, término utilizado para definir las políticas de producto, precio, plaza y promoción. 




    #t_3_1.titulo-segundo
      .h2 3.1 Producto
    
    p.mb-4 El producto es el bien o tangible que se desea comercializar en un mercado determinado. A nivel internacional, es importante identificar, de la gama de productos de una empresa, cuál o cuáles productos pueden ofrecer mayor rentabilidad y mayor potencial de ventas en el exterior. 
    p.mb-4 Dentro de la política del producto, hay que definir cada uno de sus atributos y las adaptaciones necesarias para su comercialización en mercados exteriores, teniendo en cuenta que las tendencias de consumo varían de un país a otro.
    p.mb-4 Los siguientes aspectos son los recomendados a tener en cuenta en la adaptación de los productos: 
    
    .row.justify-content-center
      .col-lg-4
        figure
          img.mx-auto(src='@/assets/curso/tema3/img4.svg', alt='imagen ambiental', style='width:420px;')
            
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/icp1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style='background-color: #E9E3FF')
            .p-4
              p.mb-0 Normativa legal (materias primas, análisis químicos, medioambiente, certificaciones, entre otras) y necesidades de lo clientes (rendimientos, prestaciones, gustos).
    
    
    
    
    separador
    #t_3_2.titulo-segundo
      .h2 3.2
    
    
    
    
    
    
    
    separador
    #t_3_3.titulo-segundo
      .h2 3.3
    
    
    
    
    
    
    
    separador
    #t_3_4.titulo-segundo
      .h2 3.4








</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        imagen: require('@/assets/curso/tema3/img1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        imagen: require('@/assets/curso/tema3/img2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        imagen: require('@/assets/curso/tema3/img3.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
