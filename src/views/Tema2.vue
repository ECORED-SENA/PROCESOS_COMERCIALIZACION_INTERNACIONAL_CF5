<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Selección de mercados
    
    p.mb-4
    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img.mx-auto(src='@/assets/curso/tema2/img1.svg', alt='imagen ambiental', style='width:399px;')
      .col-lg-6
        .tarjeta-numerada.color-primario.p-5.mb-4(style='background-color: #efebff; border: 0;')
          .tarjeta-numerada__numero.mt-lg-3(style='background-color: #EF2A66;')
            .h2.text-white 1
          p.mb-0 La #[strong concentración], que se realiza en un número reducido de mercados.
        
        .tarjeta-numerada.color-primario.p-5(style='background-color: #efebff; border: 0;')
          .tarjeta-numerada__numero.mt-lg-3(style='background-color: #EF2A66;')
            .h2.text-white 2
          p.mb-0 La #[strong diversificación], que se caracteriza por el crecimiento de un número relativamente grande de mercados.


    .row.justify-content-center
      .col-lg-5
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            //i.fas.fa-quote-left
            p.mb-0 pero,
            figure.px-2
              img.mx-auto(src='@/assets/curso/tema2/question-open.svg', alt='imagen ambiental', style='width:27px;')
            h4.mb-0 cómo definir cuál es la alternativa que mejor se adecúa a la empresa
            i.fas.fa-question

    p.mb-4 
    .row
      .col-lg-12
      .titulo-sexto.color-primario
        p.mb-0 Tabla 1 Concentración y diversificación
    .row
      .col-lg-12
        .tabla-b.color-acento-contenido.mb-5
          table
            caption Leyenda de la tabla
            thead
              tr
                th.text-white.text-center(style='width:50%; background-color: #FD8F25; font-size:18px; border-right:0;')  CONCENTRACIÓN 
                th.text-white.text-center(style='background-color: #FD8F25; font-size:18px; border-right:0; border-left:0;') DIVERSIFICACIÓN 
            tbody
              tr
                th(style='width:50%') Vulgar
                td Get back to work. Learn from criticism. Creativity is a work-ethic. Design as if your life depended on it. Keep going. It isn’t what you are.
              tr
                th Vulgar
                td Get back to work. Learn from criticism. Creativity is a work-ethic. Design as if your life depended on it. Keep going. It isn’t what you are.
      









    #t_2_1.titulo-segundo
      .h2 2.1 Infografía Animada
    
    #t_2_2.titulo-segundo
      .h2 2.2 Video Motion

    #t_2_3.titulo-segundo
      .h2 2.3 Motion + Presentador

    #t_2_4.titulo-segundo
      .h2 2.4 Animación 2D

    #t_2_5.titulo-segundo
      .h2 2.5 Video interactivo

    #t_2_6.titulo-segundo
      .h2 2.6 Infografías

    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
