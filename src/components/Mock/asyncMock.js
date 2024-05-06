const servicios = [
    {
      id: 1,
      title: "DISEÑO DE NUEVOS ALMACENES Y CENTROS DE DISTRIBUCIÓN",
      price: 10000,
      description:
        "Capacidad y dimensionamiento de instalaciones y equipos. Estructura de personal, directo e indirecto. Procedimientos de trabajo. Sistemas de gestión y administración.",
      image: '../img/almacen.jpg',
      stock: 12,
      categoria: "almacenamiento",
    },
    {
      id: 2,
      title: "REVISIÓN DE ALMACENES",
      price: 10000,
      description:
        "Rediseño de instalaciones. Selección de equipamiento. Administración y gestión. Análisis de subcontrataciones.",
      image:'../img/almacen-b.jpg',
      stock: 12,
      categoria: "almacenamiento",
    },
    {
      id: 3,
      title: "GESTIÓN DE STOCKS",
      price: 10000,
      description:
        "Auditorías de inventarios, análisis de rotación y ocupación.",
      image: '../img/galeria-c.jpg',
      stock: 12,
      categoria: "almacenamiento",
    },
    {
      id: 4,
      title: "OPTIMIZACIÓN DEL TRANSPORTE",
      price: 20000,
      description:
        "Diseño de Redes de distribución.Definición de las funciones a subcontratar, comparación interno/externo. Selección de compañías de transporte. Selección de operadores logísticos. Asesoramiento y soporte en la contratación.",
      image: '../img/carga.jpg',
      stock: 12,
      categoria: "distribucion",
    },
    {
      id: 5,
      title:
        "ANÁLISIS DE LA RED DE DISTRIBUCIÓN",
      price: 20000,
      description:
        "Mejora de costos. Procedimientos. Cuadro de mando. Rutas de transporte.",
      image: '../img/camion.jpg',
      stock: 12,
      categoria: "distribucion",
    },
    {
        id: 6,
        title:
          "PLIEGOS Y LICITACIONES PARA PROVEEDORES EXTERNOS",
        price: 20000,
        description:
          "Armado de pliegos. Realización de licitaciones.",
        image: '../img/op-logisticos.jpg',
        stock: 12,
        categoria: "distribucion",
      },
      {
        id: 7,
        title:
          "RUTEO Y SEGURIDAD",
        price: 20000,
        description:
          "Tracking y rastreo de cada pedido. Servicio de custodia.",
        image: '../img/ruteo.jpg',
        stock: 12,
        categoria: "tecnologia",
      },
      {
        id: 8,
        title:
          "TECNOLOGÍA",
        price: 20000,
        description:
          "Automatización del almacenaje. Sistemas de picking. Digitalización y guarda de documentación.",
        image: '../img/kpi.jpg',
        stock: 12,
        categoria: "tecnologia",
      },
      {
        id: 9,
        title:
          "IMPORTACIÓN Y EXPORTACIÓN",
        price: 30000,
        description:
          "WORKSHOPS PARA EMPRESAS. Costeo de operaciones de importación y exportación. Auditorías en zonas francas y depósitos fiscales. Procedimientos aduaneros.",
        image: '../img/container.jpg',
        stock: 12,
        categoria: "comercioexterior",
      },
  ];
  
  export const getServicios = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(servicios);
      }, 1000);
    });
  };

 
  export const getServicioById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(servicios.find((servicio) => servicio.id == id));
    }, 1000);
  });
};

export const getServiciosByCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(servicios.filter((servicio) => servicio.categoria === categoria));
    }, 1000);
  });
};
    
 