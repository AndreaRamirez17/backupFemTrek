var travelers = [

  {
    id: "@Mari_Viaja",
    userName: "Maria",
    userLastName: "Garcia",
    profilePhoto: "https://www.billin.net/blog/wp-content/uploads/2021/06/Im%C3%A1genes-sin-derechos-de-autor.jpeg",
    travelAdvice: "Si visitas Buenos Aires, Argentina, no te pierdas el vibrante barrio de La Boca. Conocido por sus casas coloridas y la famosa calle Caminito, es un gran lugar para experimentar la cultura local. También, visita el Cementerio de la Recoleta donde puedes encontrar la tumba de Eva Perón. Y, por supuesto, disfruta de un tradicional asado argentino en una de las muchas parrillas de la ciudad.",
    travelPhotos: ["https://example.com/la_boca.jpg", "https://example.com/recoleta.jpg", "https://example.com/parrilla.jpg"],
    location: "Buenos Aires, Argentina",
    tags: ["La Boca", "Cementerio de la Recoleta", "Asado Argentino"]
  },
  {
    id: "@AnneMtz",
    userName: "Ana",
    userLastName: "Martinez",
    profilePhoto: "https://example.com/ana.jpg",
    travelAdvice: "En Perú, asegúrate de visitar la impresionante Machu Picchu. La antigua ciudad inca es uno de los monumentos más icónicos del mundo. Para una experiencia inolvidable, camina por el Camino Inca. También, explora la vibrante ciudad de Cusco, con su rica historia y hermosa arquitectura colonial.",
    travelPhotos: ["https://example.com/machu_picchu.jpg", "https://example.com/inca_trail.jpg", "https://example.com/cusco.jpg"],
    location: "Machu Picchu, Perú",
    tags: ["Machu Picchu", "Camino Inca", "Cusco"]
  },
  {
    id: "@Sofi.Rojas23",
    userName: "Sofia",
    userLastName: "Rojas",
    profilePhoto: "https://example.com/sofia.jpg",
    travelAdvice: "Cuando estés en Colombia, no te pierdas la histórica ciudad de Cartagena. Su ciudad vieja, rodeada por murallas construidas en el siglo XVI, es un sitio del Patrimonio Mundial de la UNESCO. Las coloridas calles, hermosas plazas e iglesias históricas son un placer para explorar. Asegúrate de visitar el Castillo San Felipe de Barajas y tomar un tour en barco al atardecer.",
    travelPhotos: ["https://example.com/cartagena.jpg", "https://example.com/old_town.jpg", "https://example.com/castillo.jpg"],
    location: "Cartagena, Colombia",
    tags: ["Cartagena", "Ciudad Vieja", "Castillo San Felipe"]
  },
  {
    id: "@travelerIsa",
    userName: "Isabella",
    userLastName: "Perez",
    profilePhoto: "https://example.com/isabella.jpg",
    travelAdvice: "En Brasil, la ciudad de Río de Janeiro es una visita obligada. Conocida por su icónica estatua del Cristo Redentor y las impresionantes playas de Copacabana e Ipanema, Río ofrece una mezcla de belleza natural y cultura vibrante. No olvides tomar un teleférico hasta el Pan de Azúcar para disfrutar de vistas impresionantes de la ciudad.",
    travelPhotos: ["https://example.com/rio.jpg", "https://example.com/copacabana.jpg", "https://example.com/sugarloaf.jpg"],
    location: "Río de Janeiro, Brasil",
    tags: ["Río de Janeiro", "Cristo Redentor", "Copacabana", "Pan de Azúcar"]
  },
  {
    id: "@ValGonz4554",
    userName: "Valentina",
    userLastName: "Gonzalez",
    profilePhoto: "https://example.com/valentina.jpg",
    travelAdvice: "En México, asegúrate de explorar la rica historia de la Ciudad de México. Visita el Zócalo, la plaza principal de la ciudad, donde puedes ver la Catedral Metropolitana y el Palacio Nacional. Las cercanas ruinas de Teotihuacán también son una visita obligada, con la impresionante Pirámide del Sol. No olvides explorar los vibrantes barrios de Coyoacán y Roma.",
    travelPhotos: ["https://example.com/mexico_city.jpg", "https://example.com/teotihuacan.jpg", "https://example.com/coyoacan.jpg"],
    location: "CDMX, México",
    tags: ["Ciudad de México", "Zócalo", "Teotihuacán", "Coyoacán"]
  },
  {
    id: "@NomadCami5820",
    userName: "Camila",
    userLastName: "Lopez",
    profilePhoto: "https://example.com/camila.jpg",
    travelAdvice: "Visita el Desierto de Atacama en Chile para una experiencia realmente única. El Valle de la Luna es un paisaje impresionante que se asemeja a la superficie de la luna. También puedes visitar los géiseres de El Tatio, el tercer campo de géiseres más grande del mundo, y los impresionantes salares de Salar de Atacama.",
    travelPhotos: ["https://example.com/atacama.jpg", "https://example.com/valle_de_la_luna.jpg", "https://example.com/el_tatio.jpg"],
    location: "Desierto de Atacama, Chile",
    tags: ["Desierto de Atacama", "Valle de la Luna", "El Tatio", "Salar de Atacama"]
  },
  {
    id: "@Gabi_SoloTravs",
    userName: "Gabriela",
    userLastName: "Fernandez",
    profilePhoto: "https://example.com/gabriela.jpg",
    travelAdvice: "Costa Rica es un paraíso para los amantes de la naturaleza. Visita el Parque Nacional Manuel Antonio por sus hermosas playas y abundante vida silvestre. El Volcán Arenal es otro lugar imprescindible, ofreciendo aguas termales y oportunidades para hacer senderismo. No te pierdas el Bosque Nuboso de Monteverde por su ecosistema único y emocionantes tours de canopy.",
    travelPhotos: ["https://example.com/manuel_antonio.jpg", "https://example.com/arenal_volcano.jpg", "https://example.com/monteverde.jpg"],
    location: "Costa Rica",
    tags: ["Manuel Antonio", "Volcán Arenal", "Monteverde"]
  },
  {
    id: "@Luci1711",
    userName: "Lucia",
    userLastName: "Silva",
    profilePhoto: "https://example.com/lucia.jpg",
    travelAdvice: "En Ecuador, un viaje a las Islas Galápagos es una experiencia única en la vida. La fauna única y los impresionantes paisajes no tienen comparación. Explora las islas en barco, haz snorkel con lobos marinos y visita la Estación de Investigación Charles Darwin. Las tierras altas de la Isla Santa Cruz ofrecen hermosas oportunidades para hacer senderismo.",
    travelPhotos: ["https://example.com/galapagos.jpg", "https://example.com/sea_lions.jpg", "https://example.com/santa_cruz.jpg"],
    location: "Islas Galápagos, Ecuador",
    tags: ["Islas Galápagos", "Fauna", "Isla Santa Cruz"]
  },
  {
    id: "@Elena_Solitaria",
    userName: "Elena",
    userLastName: "Torres",
    profilePhoto: "https://example.com/elena.jpg",
    travelAdvice: "En Bolivia, el Salar de Uyuni es un destino imperdible. El salar más grande del mundo ofrece un paisaje surrealista, especialmente durante la temporada de lluvias cuando se convierte en un gigantesco espejo. También puedes visitar el cercano Parque Nacional Eduardo Avaroa para ver flamencos y otras especies en impresionantes entornos naturales.",
    travelPhotos: ["https://example.com/salar_de_uyuni.jpg", "https://example.com/uyuni_mirror.jpg", "https://example.com/eduardo_avaroa.jpg"],
    location: "Salar de Uyuni, Bolivia",
    tags: ["Salar de Uyuni", "Parque Nacional Eduardo Avaroa", "Flamencos"]
  },
  {
    id: "@CaroTravels",
    userName: "Carolina",
    userLastName: "Morales",
    profilePhoto: "https://example.com/carolina.jpg",
    travelAdvice: "La Ciudad de Panamá es un destino vibrante y cosmopolita. El histórico distrito de Casco Viejo está lleno de hitos de la era colonial y cafés de moda. No te pierdas una visita al Canal de Panamá, una de las mayores hazañas de ingeniería del siglo XX. El cercano Parque Nacional Soberanía ofrece excelentes oportunidades para la observación de aves y el senderismo.",
    travelPhotos: ["https://example.com/casco_viejo.jpg", "https://example.com/panama_canal.jpg", "https://example.com/soberania.jpg"],
    location: "Ciudad de Panamá, Panamá",
    tags: ["Casco Viejo", "Canal de Panamá", "Parque Nacional Soberanía"]

  },

];
  
  travelers.forEach(function(item) {
    addToList(item);
  });