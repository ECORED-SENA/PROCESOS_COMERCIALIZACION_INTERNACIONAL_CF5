export default {
  global: {
    componenteFormativo: 'Preparación del plan de mercadeo internacional',
    descripcionCurso:
      'Los procesos de comercialización internacional exigen que las empresas sean más competitivas y desarrollen estrategias que permitan estar a la vanguardia con tendencias y gustos para los clientes. Por consiguiente, es necesario plantear un plan de mercadeo que permita llevar a cabo el análisis del entorno y estructurar alternativas para satisfacer las necesidades del cliente, así como un plan de acción correspondiente a las características de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diagnóstico de internacionalización de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis interno',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Análisis externo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Análisis DAFO internacional ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Selección de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concentración/ diversificación de mercados',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Agrupación de países',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Segmentación de mercados y variables',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Formas de entrada a mercados internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Producto',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Precio ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Distribución o plaza',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Promoción',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Posicionamiento y mensaje promocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Instrumentos promocionales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Presupuesto de promoción',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de acción de mercadeo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Czinkota, M. y Ronkainen, I. (2013). Marketing Internacional. Cengage Learning. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39998?page=19',
    },
    {
      referencia:
        'Economipedia. (2021). Economipedia, Haciendo fácil la economía. ',
      link: 'https://economipedia.com/',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia:
        'Fernández, R. (2009). Segmentación de mercados. McGraw-Hill Interamericana. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=687',
    },
    {
      referencia:
        'Llamazares, O. (2017). Plan de Internacionalización para Empresas. Global Marketing. ',
      link:
        'http://globalnegotiator.com/files/plan-de-internacionalizacion-empresa.pdf',
    },
    {
      referencia:
        'Torreblanca, F. (2020). Estrategias de diversificación: definición y tipos. Esic. ',
      link:
        'https://www.esic.edu/rethink/management/estrategias-de-diversificacion-definicion-y-tipos',
    },
  ],
  glosario: [
    {
      termino: 'Amenazas',
      significado:
        'son problemas o situaciones malas, externas, que pueden afectar directamente la existencia de la organización, y que, una vez teniendo estas amenazas, es necesario diseñar una estrategia óptima para poder solucionar dichos problemas.',
    },
    {
      termino: 'Análisis DAFO',
      //terminoHtml: '<em>Suftware</em>',
      significado:
        'es un instrumento de diagnóstico muy útil para identificar los factores claves, tanto del entorno externo como del interno, que tiene que tener en cuenta la empresa para diseñar su estrategia de internacionalización.',
    },
    {
      termino: 'Pirognóstico',
      significado:
        'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
    },
    {
      termino: 'Concentración',
      //terminoHtml: '<em>Áectores</em>',
      significado:
        'se refiere al grado en el que un mercado está aglutinado o consolidado en un número determinado de agentes, sean estos productores o vendedores.',
    },
    {
      termino: 'Debilidades',
      significado:
        'se refieren a todos aquellos elementos, recursos de energía, habilidades y actitudes que la empresa ya tiene y que constituyen barreras para lograr la buena marcha de la organización.',
    },
    {
      termino: 'Diversificación',
      significado:
        'es una estrategia que encamina a los productores a ingresar a nuevos mercados con la generación de nuevos productos.',
    },
    {
      termino: 'Divisa',
      significado:
        'es toda moneda extranjera, es decir, monedas oficiales distintas de la moneda legal en el propio país.',
    },
    {
      termino: 'Fortalezas',
      significado:
        'atributos y recursos internos que respaldan un resultado exitoso.',
    },
    {
      termino: 'Franquicias',
      significado:
        'es una relación comercial entre dos partes, por la que una de ellas paga una cierta cantidad de dinero para tener la licencia para comenzar un negocio utilizando una marca ya consolidada en el mercado.',
    },
    {
      termino: 'Joint venture',
      terminoHtml: '<em>Joint venture</em>',
      significado:
        'una empresa conjunta, o joint venture, es un acuerdo entre varias empresas para llevar a cabo un negocio conjuntamente. Normalmente, requiere una gran inversión inicial y reportará beneficios en el largo plazo.',
    },
    {
      termino: 'Marca',
      significado:
        'es el identificador comercial de los bienes y servicios que ofrece una empresa y los diferencia de los de la competencia.',
    },
    {
      termino: 'Marketing internacional',
      terminoHtml: '<em>Marketing </em>internacional',
      significado:
        'es un concepto asociado de forma directa con la internacionalización de las empresas, en búsqueda del aumento en la demanda de sus productos y, por ende, de su venta.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'es una acción que se desarrolla en un medio social, entre personas o entidades con un fin económico y administrativo, donde ambas partes, mediante un intercambio de intereses, obtienen lo que quieren.',
    },
    {
      termino: 'Oportunidades',
      significado:
        'son aquellos factores positivos que se generan en el entorno y que, una vez identificados, pueden ser aprovechados y pasar a ser fortalezas.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'es una herramienta de planificación empleada para la gestión y control de tareas o proyectos.',
    },
    {
      termino: 'Plaza',
      significado:
        '(en inglés, <em>placement</em>) se entiende como la forma en la cual un bien o servicio llegará de una empresa a las manos del consumidor final.',
    },
    {
      termino: 'Precio',
      significado:
        'en el <em>marketing<em>, se define, generalmente, como la cantidad de dinero que un cliente está dispuesto a pagar para obtener los beneficios de un producto.',
    },
    {
      termino: 'Producto',
      significado:
        'es una opción elegible, viable y repetible, que la oferta pone a disposición de la demanda, para satisfacer una necesidad o atender un deseo a través de su uso o consumo.',
    },
    {
      termino: 'Promoción',
      significado:
        'en la mezcla de <em>marketing</em>, se refiere a la comunicación con el objetivo específico de informar, persuadir y recordar una audiencia objetivo.',
    },
    {
      termino: 'Segmentación de mercados',
      significado:
        'método por el cual se pueden dividir los clientes potenciales en distintos grupos, los cuales permiten que las empresas puedan enviar mensajes personalizados a las audiencias correctas.',
    },
  ],
  /*complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],*/
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Kateryn Dallan Valderrama',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Alejandro Acevedo',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio - Regional Antioquia',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Luis Arevalo Mantilla'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
