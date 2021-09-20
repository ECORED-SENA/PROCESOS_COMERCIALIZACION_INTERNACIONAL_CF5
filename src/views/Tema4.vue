<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Posicionamiento y mensaje promocional
    
    .row.justify-content-between.mb-4
      .col-lg-6.align-self-center
        p.mb-4 El posicionamiento es la estrategia que tiene la empresa para dirigir y controlar la percepción del producto en el mercado, y se logra por medio de los instrumentos de promoción y comunicación existentes, que garanticen el éxito del resultado por medio de la generación de más conciencia en el consumidor, una actitud más positiva o mayores compras.
      .col-lg-5
        figure
          img.img-custom1.mx-auto(src='@/assets/curso/tema4/img1.svg', alt='imagen ambiental', style='')

    #t_4_1.titulo-segundo
      .h2 4.1 Elementos
    p.mb-4 Para llevar a cabo este proceso, se plantean campañas promocionales, las cuales deben contener elementos básicos como:
    .row.justify-content-around.bg-tema4
      .col-lg-12.py-4
        .row.justify-content-around
          .col-lg-5.align-self-center
            ul.lista-ul
              li 
                i.fas.fa-angle-right(style='color:#472EA6;')
                p.mb-0 Determinar la audiencia meta
              li 
                i.fas.fa-angle-right(style='color:#472EA6;')
                p.mb-0 Determinar los objetivos específicos de la campaña.
              li 
                i.fas.fa-angle-right(style='color:#472EA6;')
                p.mb-0 Determinar el presupuesto.
              li 
                i.fas.fa-angle-right(style='color:#472EA6;')
                p.mb-0 Determinar la estrategia de medios.
              li 
                i.fas.fa-angle-right(style='color:#472EA6;')
                p.mb-0 Determinar el mensaje.
              li 
                i.fas.fa-angle-right(style='color:#472EA6;')
                p.mb-0 Determinar el enfoque de la campaña.
              li 
                i.fas.fa-angle-right(style='color:#472EA6;')
                p.mb-0 Determinar la eficacia de la campaña.
          .col-lg-4
            figure
              img.mx-auto(src='@/assets/curso/tema4/img2.svg', alt='imagen ambiental', style='width: 360px;')


    separador
    #t_4_2.titulo-segundo
      .h2 4.2 Instrumentos promocionales
    
    p.mb-4 Son todos aquellos elementos que usan las empresas para dar a conocer sus portafolios, ampliar el relacionamiento externo y lograr que su producto sea comercializado en el país de destino seleccionado.
    p.mb-4 Dentro de esos elementos, se pueden encontrar: 
    

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-primario
          p.mb-0 Instrumentos promocionales

    .row.justify-content-center
      .col-lg-4.align-self-center.mb-5
        figure
          img.mx-auto(src='@/assets/curso/tema4/img3.svg', alt='imagen ambiental', style='width: 280px;')
      .col-lg-8.align-self-center.mb-5
        figure
          img.mx-auto(src='@/assets/curso/tema4/img4.svg', alt=' Instrumentos promocionales', style='')

    p.mb-4 Finalmente, se hace necesario medir el impacto y eficacia de estos elementos en la búsqueda del posicionamiento de la marca. En este aspecto, es indispensable citar a Czinkota y Ronkainen, quienes manifiestan que:

    .row.justify-content-center
      .col-lg-7
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #EA3065;font-size:24px;")
            h6.mb-0 Las medidas que más se utilizan para validar la eficacia de la promoción son las ventas, conciencia, recordación, criterio ejecutivo, intención de compra y rentabilidad, sin importar el medio que se utilice
            i.fas.fa-quote-right(style="color: #EA3065;font-size:24px;")
          .bloque-texto-d__autor.text-center
            p.mb-0 (Czinkota y Ronkainen, 2013).


    
    
    separador
    #t_4_3.titulo-segundo
      .h2 4.3 Elementos

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure.py-3
                img.mx-auto(src='@/assets/curso/tema4/img5.svg', alt='imagen ambiental', style='width: 265px;')
            .col-lg-8
              .bloque-texto-a__texto.p-lg-5.p-sm-4.p-4
                p Las actividades de promoción y comunicación implican, necesariamente, recursos económicos, que deben ser considerados no como un gasto sino como una inversión. Cada empresa, dependiendo de sus posibilidades y objetivos, determina el porcentaje del total de ventas de años anteriores que desea invertir en estos elementos, con el fin de impactar por medio de estos en el mercado internacional.










</template>

<script>
export default {
  name: 'Tema4',
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
