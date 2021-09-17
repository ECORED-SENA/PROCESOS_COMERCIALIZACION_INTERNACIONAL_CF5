<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Plan de acción de mercadeo


    .row.justify-content-center
      .col-lg-6.mb-5.align-self-center
        p.mb-4 Hasta este momento, se han analizado todos y cada uno de los criterios a tener en cuenta en el proceso de internacionalización, el cual inicia con el diagnóstico del entorno interno y externo de la compañía, seguido de la selección de mercados y la definición de la mezcla de mercadeo. Es momento de poner en marcha el plan de acción de mercadeo internacional.
        p.mb-4 El plan de acción es una herramienta de planificación que concede a las empresas la ruta a seguir para el alcance de sus objetivos. Este inicia por establecimiento de los objetivos, el presupuesto asignado y, lo más importante, la evaluación de la eficacia de este.
      .col-lg-6.mb-5
        .row.justify-content-center
          .col-auto
            figure
              img.mx-auto(src='@/assets/curso/tema5/img1.svg', alt='imagen ambiental', style='width:290px;')

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-3.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema5/img2.svg', alt='imagen ambiental', style='width:228px')
                
            .col-md-9
              h4 Obejtivos
              p En términos generales, los objetivos son los resultados que desea alcanzar la empresa. En el mercadeo internacional, uno de los principales objetivos está relacionado con las ventas. 
              p Estos se caracterizan por ser claros, concretos, mensurables y alcanzables.
              
          .row
            .col-md-9.mb-4.mb-md-0.align-self-center
              h4 Presupuesto
              p Capital financiero que la empresa está dispuesta a invertir para alcanzar cada uno de los objetivos del plan de acción.
            .col-md-3
              figure
                img(src='@/assets/curso/tema5/img3.svg', alt='imagen ambiental', style='width:212px;')
                
          .row
            .col-md-3
              figure
                img(src='@/assets/curso/tema5/img4.svg', alt='imagen ambiental', style='width:212px;')
            .col-md-9.mb-4.mb-md-0.align-self-center
              h4 Indicadores de cumplimiento
              p Conjunto de mediciones que establece la compañía para monitorear el cumplimiento de los objetivos del plan de acción.
                

    p.mb-4 En resumen, el plan de acción de mercadeo representa un mapa de ruta que señala las acciones que se emprenderán para el alcance de los objetivos de la empresa, el posicionamiento de la marca, el aumento de ventas y la fidelización de los clientes.
    p.mb-4 Las empresas exitosas no dejan nada a la deriva. Definen con todo detalle qué metas quieren alcanzar y cómo lo harán, asegurándose de estar en sintonía con los objetivos estratégicos de la misma.



</template>

<script>
export default {
  name: 'Tema5',
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
