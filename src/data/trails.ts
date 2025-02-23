import { Trail } from "../types/trail";

export const trails: Trail[] = [
  {
    id: "1",
    name: "Refugio Frey",
    type: "day-hike",
    difficulty: "moderate",
    distance: 20,
    duration: 6,
    elevation: 1000,
    requiresReservation: true,
    description: {
      en: "A beautiful day hike to Refugio Frey. From Camping Los Coihues, take a 15-minute drive to Cerro Catedral base, where the trail begins. The path is well-marked with red markers.",
      es: "Una hermosa caminata de un día al Refugio Frey. Desde Camping Los Coihues, tome un viaje de 15 minutos en auto hasta la base del Cerro Catedral, donde comienza el sendero. El camino está bien marcado con señales rojas.",
      fr: "Une belle randonnée d'une journée jusqu'au Refugio Frey. Depuis le Camping Los Coihues, prenez 15 minutes en voiture jusqu'à la base de Cerro Catedral, où commence le sentier. Le chemin est bien balisé avec des marqueurs rouges.",
      de: "Eine schöne Tageswanderung zum Refugio Frey. Vom Camping Los Coihues aus fahren Sie 15 Minuten mit dem Auto zur Basis des Cerro Catedral, wo der Wanderweg beginnt. Der Weg ist gut mit roten Markierungen gekennzeichnet."
    },
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["Alpine lake", "Mountain refuge", "Rock climbing area"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 15
  },
  {
    id: "2",
    name: "Cerro Llao Llao",
    type: "day-hike",
    difficulty: "easy",
    distance: 8,
    duration: 3,
    elevation: 400,
    requiresReservation: false,
    description: {
      en: "An accessible hike from Hotel Llao Llao. From Camping Los Coihues, take bus line 20 to Llao Llao (45 min ride). Trail starts behind the hotel.",
      es: "Una caminata accesible desde el Hotel Llao Llao. Desde Camping Los Coihues, tome la línea de bus 20 hasta Llao Llao (45 minutos de viaje). El sendero comienza detrás del hotel.",
      fr: "Une randonnée accessible depuis le Hotel Llao Llao. Depuis le Camping Los Coihues, prenez la ligne de bus 20 jusqu'à Llao Llao (45 minutes de trajet). Le sentier commence derrière le hôtel.",
      de: "Eine zugängliche Wanderung aus dem Hotel Llao Llao. Vom Camping Los Coihues aus nehmen Sie die Linie 20 zu Llao Llao (45 Minuten Reise). Der Wanderweg beginnt hinter dem Hotel."
    },
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    startingPoint: "Hotel Llao Llao (45 min by bus from Los Coihues)",
    highlights: ["Panoramic viewpoint", "Native forest", "Lake views"],
    transportation: ["bus"],
    distanceFromCampsite: 12,
    travelTime: 45
  },
  {
    id: "3",
    name: "Refugio Otto Meiling",
    type: "multi-day",
    difficulty: "hard",
    distance: 35,
    duration: 48,
    elevation: 1800,
    requiresReservation: true,
    description: {
      en: "A challenging two-day trek. From Camping Los Coihues, take the morning bus to Pampa Linda (2-hour journey). Register at the park office before starting the hike.",
      es: "Una desafiante caminata de dos días. Desde Camping Los Coihues, tome el bus de la mañana a Pampa Linda (2 horas de viaje). Regístrese en la oficina del parque antes de comenzar la caminata.",
      fr: "Une randonnée difficile de deux jours. Depuis le Camping Los Coihues, prenez le bus de la matinée à Pampa Linda (2 heures de trajet). Inscrivez-vous à l'office du parc avant de commencer la randonnée.",
      de: "Eine schwierige zwei-Tage-Wanderung. Vom Camping Los Coihues aus nehmen Sie den Morgenbus zu Pampa Linda (2 Stunden Reise). Registrieren Sie sich bei der Parkstelle vor dem Beginn der Wanderung."
    },
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    startingPoint: "Pampa Linda (2h bus ride from Los Coihues)",
    highlights: ["Glacier views", "Mountain refuge", "Tronador peak"],
    transportation: ["bus", "private-transfer"],
    distanceFromCampsite: 45
  },
  {
    id: "4",
    name: "Laguna Negra Circuit",
    type: "multi-day",
    difficulty: "moderate",
    distance: 42,
    duration: 72,
    elevation: 1500,
    requiresReservation: true,
    description: {
      en: "A three-day circuit. From Camping Los Coihues, take bus line 10 to Colonia Suiza (30 min). Start early as the first section is exposed to sun. Register at the park entrance.",
      es: "Un circuito de tres días. Desde Camping Los Coihues, tome la línea de bus 10 a Colonia Suiza (30 minutos). Comience temprano ya que la primera sección está expuesta al sol. Regístrese en la entrada del parque.",
      fr: "Un circuit de trois jours. Depuis le Camping Los Coihues, prenez la ligne de bus 10 à Colonia Suiza (30 minutes). Commencez tôt car la première section est exposée au soleil. Inscrivez-vous à l'entrée du parc.",
      de: "Ein drei-Tage-Kreislauf. Vom Camping Los Coihues aus nehmen Sie die Linie 10 zu Colonia Suiza (30 Minuten). Beginnen Sie früh, da die erste Section unter Sonne liegt. Registrieren Sie sich bei der Parkeingang."
    },
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    startingPoint: "Colonia Suiza (30 min bus from Los Coihues)",
    highlights: ["Multiple lakes", "Mountain refuges", "Forest trails"],
    transportation: ["bus", "hitchhiking"],
    distanceFromCampsite: 15
  },
  {
    id: "5",
    name: "Lago Gutiérrez Circuit",
    type: "day-hike",
    difficulty: "easy",
    distance: 5,
    duration: 2,
    elevation: 150,
    requiresReservation: false,
    description: {
      en: "A scenic lakeside trail that starts directly from Camping Los Coihues. Perfect for a morning walk with beautiful views of Lago Gutiérrez and surrounding mountains.",
      es: "Un pintoresco sendero junto al lago que comienza directamente desde Camping Los Coihues. Perfecto para una caminata matutina con hermosas vistas del Lago Gutiérrez y las montañas circundantes.",
      fr: "Un sentier pittoresque sur la rive du lac qui commence directement du Camping Los Coihues. Idéal pour une promenade matinale avec des vues magnifiques du Lago Gutiérrez et des montagnes circondantes.",
      de: "Ein schöner Wasserweg am Ufer des Lages, der direkt aus dem Camping Los Coihues beginnt. Perfekt für eine morgendliche Wanderung mit schönen Blicken auf den Lago Gutiérrez und die umliegenden Berge."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["Lake views", "Beach access", "Bird watching"],
    transportation: ["hitchhiking"],
    distanceFromCampsite: 0
  },
  {
    id: "6",
    name: "Frey-Jakob Circuit",
    type: "multi-day",
    difficulty: "hard",
    distance: 45,
    duration: 72,
    elevation: 2200,
    requiresReservation: true,
    description: {
      en: "A spectacular three-day trek connecting Refugio Frey and Refugio Jakob. Start from Cerro Catedral (15-min drive from Los Coihues) and end at Colonia Suiza. Return by bus to Los Coihues.",
      es: "Una espectacular travesía de tres días que conecta el Refugio Frey y el Refugio Jakob. Comience desde Cerro Catedral (15 minutos en auto desde Los Coihues) y termine en Colonia Suiza. Regrese en bus a Los Coihues.",
      fr: "Une randonnée spectaculaire de trois jours connectant le Refugio Frey et le Refugio Jakob. Commencez à partir de Cerro Catedral (15 minutes en voiture depuis Los Coihues) et terminez à Colonia Suiza. Retournez en bus à Los Coihues.",
      de: "Eine wunderbare drei-Tage-Wanderung, die Refugio Frey und Refugio Jakob verbindet. Beginnen Sie von Cerro Catedral (15 Minuten in Auto aus Los Coihues) und beenden Sie sich in Colonia Suiza. Registrieren Sie sich bei dem Bus zum Rückweg nach Los Coihues."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["Two mountain refuges", "Alpine lakes", "High mountain passes"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 8
  },
  {
    id: "7",
    name: "López-Laguna Negra Circuit",
    type: "multi-day",
    difficulty: "hard",
    distance: 38,
    duration: 72,
    elevation: 2000,
    requiresReservation: true,
    description: {
      en: "A challenging three-day circuit connecting Refugio López and Refugio Laguna Negra. Take bus line 10 from Los Coihues to Colonia Suiza to start the trek.",
      es: "Un desafiante circuito de tres días que conecta el Refugio López y el Refugio Laguna Negra. Tome la línea de bus 10 desde Los Coihues hasta Colonia Suiza para comenzar la travesía.",
      fr: "Un circuit difficile de trois jours connectant Refugio López et Refugio Laguna Negra. Prenez la ligne de bus 10 de Los Coihues à Colonia Suiza pour commencer la randonnée.",
      de: "Ein schwieriger drei-Tage-Kreislauf, der Refugio López und Refugio Laguna Negra verbindet. Nehmen Sie die Linie 10 von Los Coihues zu Colonia Suiza, um die Wanderung zu beginnen."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Colonia Suiza (30 min bus from Los Coihues)",
    highlights: ["Two mountain refuges", "Panoramic views", "Technical terrain"],
    transportation: ["bus", "private-transfer"],
    distanceFromCampsite: 15
  },
  {
    id: "8",
    name: "Mirador Lago Gutiérrez",
    type: "day-hike",
    difficulty: "easy",
    distance: 3,
    duration: 1.5,
    elevation: 200,
    requiresReservation: false,
    description: {
      en: "A short but rewarding hike with panoramic views of Lake Gutiérrez. Easy access from Camping Los Coihues.",
      es: "Una caminata corta pero gratificante con vistas panorámicas del Lago Gutiérrez. Fácil acceso desde Camping Los Coihues.",
      fr: "Une randonnée courte mais récompensante avec des vues panoramiques du Lago Gutiérrez. Accès facile depuis le Camping Los Coihues.",
      de: "Eine kurze aber belohnte Wanderung mit schiczen Blicken auf den Lago Gutiérrez. Einfaches Zugang von Camping Los Coihues."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["Lake views", "Easy access", "Family friendly"],
    transportation: ["hitchhiking", "taxi"],
    distanceFromCampsite: 0,
    travelTime: 0
  },
  {
    id: "9",
    name: "Cerro Otto & Piedra de Habsburgo",
    type: "day-hike",
    difficulty: "moderate",
    distance: 12,
    duration: 5,
    elevation: 800,
    requiresReservation: false,
    description: {
      en: "A classic hike combining Cerro Otto summit and the historic Piedra de Habsburgo viewpoint.",
      es: "Una caminata clásica que combina la cumbre del Cerro Otto y el histórico mirador Piedra de Habsburgo.",
      fr: "Une randonnée classique combinant la cime du Cerro Otto et le mirador historique de la Piedra de Habsburgo.",
      de: "Eine klassische Wanderung, die die Spitze des Cerro Otto und den historischen Mirador Piedra de Habsburgo verbindet."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Cerro Otto base (20 min drive)",
    highlights: ["Panoramic views", "Historic site", "Restaurant at summit"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 0
  },
  {
    id: "10",
    name: "Travesía 5 Lagunas",
    type: "multi-day",
    difficulty: "hard",
    distance: 45,
    duration: 72,
    elevation: 2500,
    requiresReservation: true,
    description: {
      en: "Epic three-day trek visiting five alpine lakes: Negra, CAB, Cretton, Jujuy, and Ilón. Starts from Pampa Linda.",
      es: "Épica travesía de tres días visitando cinco lagos alpinos: Negra, CAB, Cretton, Jujuy e Ilón. Comienza en Pampa Linda.",
      fr: "Épique randonnée de trois jours visitant cinq lacs alpins : Negra, CAB, Cretton, Jujuy et Ilón. Départ de Pampa Linda.",
      de: "Ein épischer drei-Tage-Wanderung, die fünf alpinen Lakes besucht: Negra, CAB, Cretton, Jujuy und Ilón. Beginnen Sie in Pampa Linda."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Pampa Linda (transfer required)",
    highlights: ["Five alpine lakes", "Remote wilderness", "Technical terrain"],
    transportation: ["private-transfer"],
    distanceFromCampsite: 60,
    travelTime: 0
  },
  {
    id: "11",
    name: "Cascada de los Duendes",
    type: "day-hike",
    difficulty: "easy",
    distance: 3,
    duration: 1.5,
    elevation: 100,
    requiresReservation: false,
    description: {
      en: "A charming waterfall trail with access to beautiful Gutiérrez lake beaches. Perfect starter trail directly from the campsite, following a gentle path through the native forest. Great for families and beginners.",
      es: "Un encantador sendero a la cascada con acceso a hermosas playas del lago Gutiérrez. Sendero perfecto para comenzar, directamente desde el camping, siguiendo un camino suave a través del bosque nativo. Ideal para familias y principiantes.",
      fr: "Un charmant sentier menant à une cascade avec accès aux belles plages du lac Gutiérrez. Sentier parfait pour débuter, directement depuis le camping, suivant un chemin doux à travers la forêt native. Idéal pour les familles et les débutants.",
      de: "Ein charmanter Wasserfall-Wanderweg mit Zugang zu schönen Stränden am Gutiérrez-See. Perfekter Anfängerpfad direkt vom Campingplatz aus, der einem sanften Weg durch den heimischen Wald folgt. Ideal für Familien und Anfänger."
    },
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["Waterfall", "Lake beaches", "Native forest", "Family friendly"],
    transportation: ["hitchhiking"],
    distanceFromCampsite: 0,
    travelTime: 0
  }
];
