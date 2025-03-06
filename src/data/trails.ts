
import { Trail } from '../types/trail';

export const trails: Trail[] = [
  {
    id: "1",
    name: "Refugio Frey desde Lago Gutierrez",
    type: "day-hike",
    difficulty: "moderate",
    distance: 10,
    duration: 5,
    elevation: 1800,
    requiresReservation: true,
    description: {
      en: "The trail starts in Villa Los Coihues and takes approximately 1 hour longer than starting from Cerro Catedral. It shares the same route with the trails to Playa Muñoz and Cascada de los Duendes, before continuing to the refuge. It's a trail surrounded by forest, with panoramic views of Lake Gutiérrez, which then ascends through the valley until reaching Refugio Frey. Distance: 10 km. Estimated duration: 4-5 hours. How to get there from Camping Los Coihues: On foot: You can access it by walking from the camping, following the marked trail.",
      es: "El sendero comienza en Villa Los Coihues y toma aproximadamente 1 hora más que si se inicia desde Cerro Catedral. Comparte el mismo recorrido con los senderos hacia Playa Muñoz y Cascada de los Duendes, para luego continuar hacia el refugio. Es un sendero rodeado de bosque, con vistas panorámicas al Lago Gutiérrez, que luego asciende por el valle hasta alcanzar el Refugio Frey. Distancia: 10 km. Duración estimada: 4-5 horas. Cómo llegar desde Camping Los Coihues: A pie: Se puede acceder caminando desde el camping, siguiendo el sendero marcado.",
      fr: "Le sentier commence à Villa Los Coihues et prend environ 1 heure de plus que si l'on part de Cerro Catedral. Il partage le même itinéraire que les sentiers vers Playa Muñoz et Cascada de los Duendes, avant de continuer vers le refuge. C'est un sentier entouré de forêt, avec des vues panoramiques sur le lac Gutiérrez, qui monte ensuite par la vallée jusqu'au Refugio Frey. Distance: 10 km. Durée estimée: 4-5 heures. Comment s'y rendre depuis Camping Los Coihues: À pied: On peut y accéder en marchant depuis le camping, en suivant le sentier balisé.",
      de: "Der Weg beginnt in Villa Los Coihues und dauert etwa 1 Stunde länger als wenn man von Cerro Catedral startet. Er teilt die gleiche Route mit den Wegen nach Playa Muñoz und Cascada de los Duendes, bevor es zum Refugio weitergeht. Es ist ein Weg umgeben von Wald, mit Panoramablick auf den Lago Gutiérrez, der dann durch das Tal bis zum Refugio Frey aufsteigt. Entfernung: 10 km. Geschätzte Dauer: 4-5 Stunden. Anfahrt vom Camping Los Coihues: Zu Fuß: Sie können zu Fuß vom Camping aus zugreifen, indem Sie dem markierten Weg folgen."
    },
    imageUrl: "/lovable-uploads/0a880087-8ded-441c-b362-9e8437aad433.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightAlpineLake", "highlightMountainRefuge", "highlightClimbingArea"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "high-mountain"
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
      fr: "Une randonnée accessible desde el Hotel Llao Llao. Depuis le Camping Los Coihues, prenez la ligne de bus 20 jusqu'à Llao Llao (45 minutes de trajet). Le sentier commence derrière le hôtel.",
      de: "Eine zugängliche Wanderung aus dem Hotel Llao Llao. Vom Camping Los Coihues aus nehmen Sie die Linie 20 zu Llao Llao (45 Minuten Reise). Der Wanderweg beginnt hinter dem Hotel."
    },
    imageUrl: "/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png",
    startingPoint: "Hotel Llao Llao (45 min by bus from Los Coihues)",
    highlights: ["highlightPanoramicViews", "highlightNativeForest", "highlightLakeViews"],
    transportation: ["bus"],
    distanceFromCampsite: 12,
    travelTime: 45,
    busLines: "Lines 50 + 20",
    category: "easy-mountain"
  },
  {
    id: "3",
    name: "Refugio Frey-Jakob Circuit",
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
    imageUrl: "/lovable-uploads/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50.png",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["highlightTwoMountainRefuges", "highlightAlpineLakes", "highlightHighMountainPasses"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 15,
    category: "high-mountain"
  },
  {
    id: "4",
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
    imageUrl: "/lovable-uploads/291df6e4-5c22-4747-85e4-d706e969db6b.png",
    startingPoint: "Cerro Otto base (20 min drive)",
    highlights: ["highlightPanoramicViews", "highlightHistoricSite", "highlightRestaurantAtSummit"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 20,
    category: "easy-mountain"
  },
  {
    id: "5",
    name: "Lago Gutiérrez",
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
    imageUrl: "/lovable-uploads/bdd46388-2e54-44ed-8cb1-f449f800bd97.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightLakeViews", "highlightBeachAccess", "highlightBirdWatching"],
    transportation: ["walking", "hitchhiking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
  },
  {
    id: "6",
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
    imageUrl: "/lovable-uploads/93c2508f-ddf6-4b0b-bf08-0fc63590f9ae.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightLakeViews", "highlightEasyAccess", "highlightFamilyFriendly"],
    transportation: ["walking", "hitchhiking", "taxi"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "easy-mountain"
  },
  {
    id: "7",
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
      fr: "Un charmant sentier menant à una cascade avec accès aux belles plages du lac Gutiérrez. Sentier parfait pour débuter, directement depuis le camping, suivant un chemin doux à travers la forêt native. Idéal pour les familles et les débutants.",
      de: "Ein charmanter Wasserfall-Wanderweg mit Zugang zu schönen Stränden am Gutiérrez-See. Perfekter Anfängerpfad direkt vom Campingplatz aus, der einem sanften Weg durch den heimischen Wald folgt. Ideal für Familien und Anfänger."
    },
    imageUrl: "/lovable-uploads/1f998a53-3c5b-429f-8ea5-709a0af96d94.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightWaterfall", "highlightLakeBeaches", "highlightNativeForest", "highlightFamilyFriendly"],
    transportation: ["hitchhiking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
  },
  {
    id: "8",
    name: "Cerro Campanario",
    type: "day-hike",
    difficulty: "moderate",
    distance: 2,
    duration: 1,
    elevation: 300,
    requiresReservation: false,
    description: {
      en: "A short but steep hike offering one of the best panoramic views of Bariloche. The summit provides a 360-degree view of lakes and mountains.",
      es: "Una caminata corta pero empinada que ofrece una de las mejores vistas panorámicas de Bariloche. La cumbre proporciona una vista de 360 grados de lagos y montañas.",
      fr: "Une randonnée courte mais raide offrant l'une des meilleures vues panoramiques de Bariloche. Le sommet offre une vue à 360 degrés sur les lacs et les montagnes.",
      de: "Eine kurze aber steile Wanderung mit einem der besten Panoramablicke auf Bariloche. Der Gipfel bietet einen 360-Grad-Blick auf Seen und Berge."
    },
    imageUrl: "/lovable-uploads/1f6daf6e-7023-4399-9b7b-85dee316066e.png",
    startingPoint: "Base of Cerro Campanario (25 min bus ride)",
    highlights: ["highlightPanoramicViews", "highlightChairliftOption", "highlightMountainCafe"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 10,
    travelTime: 25,
    busLines: "Lines 20 + 10",
    category: "easy-mountain"
  },
  {
    id: "9",
    name: "Circuito Chico - Lago Moreno",
    type: "day-hike",
    difficulty: "easy",
    distance: 8,
    duration: 3,
    elevation: 150,
    requiresReservation: false,
    description: {
      en: "A scenic lakeside trail following the famous Circuito Chico route. Beautiful views of Lago Moreno and surrounding mountains.",
      es: "Un pintoresco sendero junto al lago siguiendo la famosa ruta del Circuito Chico. Hermosas vistas del Lago Moreno y las montañas circundantes.",
      fr: "Un sentier pittoresque au bord du lac suivant la célèbre route du Circuito Chico. Belles vues sur le Lago Moreno et les montagnes environnantes.",
      de: "Ein malerischer Seeuferweg entlang der berühmten Circuito Chico Route. Schöne Aussichten auf den Lago Moreno und die umliegenden Berge."
    },
    imageUrl: "/lovable-uploads/2d1500b3-3ff7-49f4-8523-acf161b6f388.png",
    startingPoint: "Circuito Chico entrance (35 min bus ride)",
    highlights: ["highlightLakeViews", "highlightForestTrail", "highlightPhotographySpots"],
    transportation: ["bus", "taxi", "private-transfer"],
    distanceFromCampsite: 15,
    travelTime: 35,
    busLines: "Line 20",
    category: "walking-path"
  },
  {
    id: "10",
    name: "Colonia Suiza",
    type: "day-hike",
    difficulty: "easy",
    distance: 6,
    duration: 2.5,
    elevation: 100,
    requiresReservation: false,
    description: {
      en: "A pleasant walk through the historic Swiss settlement, combining cultural heritage with natural beauty. Visit the local artisan market and try regional specialties.",
      es: "Un agradable paseo por el histórico asentamiento suizo, combinando patrimonio cultural con belleza natural. Visite el mercado artesanal local y pruebe las especialidades regionales.",
      fr: "Une agréable promenade à travers la colonie suisse historique, alliant patrimoine culturel et beauté naturelle. Visitez le marché artisanal local et goûtez aux spécialités régionales.",
      de: "Ein angenehmer Spaziergang durch die historische Schweizer Siedlung, der kulturelles Erbe mit natürlicher Schönheit verbindet. Besuchen Sie den lokalen Handwerkermarkt und probieren Sie regionale Spezialitäten."
    },
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    startingPoint: "Colonia Suiza (30 min bus ride)",
    highlights: ["highlightHistoricSettlement", "highlightArtisanMarket", "highlightLocalCuisine", "highlightLakeAccess"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 12,
    travelTime: 30,
    busLines: "Line 10",
    category: "walking-path"
  },
  {
    id: "11",
    name: "Cerro San Martín",
    type: "day-hike",
    difficulty: "easy",
    distance: 5.2,
    duration: 3,
    elevation: 350,
    requiresReservation: false,
    description: {
      en: "Cerro San Martin offers a moderate climb with beautiful views of Lago Gutiérrez and the surrounding mountains. It's directly accessible from the campsite.",
      es: "Cerro San Martín ofrece una subida moderada con hermosas vistas del Lago Gutiérrez y las montañas circundantes. Es accesible directamente desde el camping.",
      fr: "Cerro San Martin offre une montée modérée avec de belles vues sur le Lago Gutiérrez et les montagnes environnantes. Il est directement accessible depuis le camping.",
      de: "Cerro San Martin bietet einen moderaten Aufstieg mit schönen Ausblicken auf den Lago Gutiérrez und die umliegenden Berge. Es ist direkt vom Campingplatz aus zugänglich."
    },
    imageUrl: "/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png",
    startingPoint: "Camping Los Coihues",
    highlights: ["highlightMountainViews", "highlightForestTrail", "highlightPanoramicVista"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "easy-mountain"
  },
  {
    id: "12",
    name: "Playa Muñoz",
    type: "day-hike",
    difficulty: "easy",
    distance: 3.5,
    duration: 1.5,
    elevation: 80,
    requiresReservation: false,
    description: {
      en: "A short, pleasant walk to a secluded beach on Lago Gutiérrez with crystal clear waters. The trail starts directly from Camping Los Coihues and follows the lakeshore through the native forest. Perfect for a refreshing swim in summer.",
      es: "Una caminata corta y agradable a una playa aislada en el Lago Gutiérrez con aguas cristalinas. El sendero comienza directamente desde Camping Los Coihues y sigue la costa del lago a través del bosque nativo. Perfecto para un refrescante baño en verano.",
      fr: "Une promenade courte et agréable vers une plage isolée sur le Lago Gutiérrez aux eaux cristallines. Le sentier commence directement du Camping Los Coihues et suit le rivage à travers la forêt native. Parfait pour une baignade rafraîchissante en été.",
      de: "Ein kurzer, angenehmer Spaziergang zu einem abgelegenen Strand am Lago Gutiérrez mit kristallklarem Wasser. Der Weg beginnt direkt am Camping Los Coihues und führt am Seeufer durch den heimischen Wald. Perfekt für ein erfrischendes Bad im Sommer."
    },
    imageUrl: "/lovable-uploads/c6ad3c8c-4f1b-4a31-aede-0d658eab6fee.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightSecludedBeach", "highlightCrystalWaters", "highlightSwimmingSpot", "highlightForestTrail"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
  },
  {
    id: "13",
    name: "Refugio Lopez",
    type: "multi-day",
    difficulty: "moderate",
    distance: 24,
    duration: 36,
    elevation: 1300,
    requiresReservation: true,
    description: {
      en: "A beautiful overnight trek to Refugio Lopez. From Camping Los Coihues, take bus line 20 to Arroyo Lopez (30 min). The trail offers stunning views of lakes Nahuel Huapi and Moreno. The refuge is perched on a rock outcrop with 360° panoramic views.",
      es: "Una hermosa caminata con pernocte al Refugio Lopez. Desde Camping Los Coihues, tome la línea 20 hasta Arroyo Lopez (30 min). El sendero ofrece impresionantes vistas de los lagos Nahuel Huapi y Moreno. El refugio está situado en un afloramiento rocoso con vistas panorámicas de 360°.",
      fr: "Un magnifique trek d'une nuit au Refugio Lopez. Depuis le Camping Los Coihues, prenez la ligne 20 à Arroyo Lopez (30 min). Le sentier offre des vues spectaculaires sur les lacs Nahuel Huapi et Moreno. Le refuge est perché sur un affleurement rocheux avec des vues panoramiques à 360°.",
      de: "Eine schöne Übernachtungswanderung zum Refugio Lopez. Vom Camping Los Coihues aus nehmen Sie die Linie 20 nach Arroyo Lopez (30 Minuten). Der Weg bietet atemberaubende Aussichten auf die Seen Nahuel Huapi und Moreno. Die Hütte liegt auf einem Felsvorsprung mit 360°-Panoramablick."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Arroyo Lopez (30 min bus from Los Coihues)",
    highlights: ["highlightPanoramicViewpoint", "highlightMountainRefuge", "highlightLakeViews", "highlightSunsetViews"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 15,
    travelTime: 30,
    busLines: "Line 20",
    category: "high-mountain"
  },
  {
    id: "14",
    name: "Refugio Laguna Negra",
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
    imageUrl: "/lovable-uploads/9d067eaf-8ba5-4bf1-a730-0a1f06c0e9c9.png",
    startingPoint: "Colonia Suiza (30 min bus from Los Coihues)",
    highlights: ["highlightMultipleLakes", "highlightMountainRefuges", "highlightForestTrails"],
    transportation: ["bus", "hitchhiking"],
    distanceFromCampsite: 15,
    travelTime: 30,
    category: "high-mountain"
  },
  {
    id: "15",
    name: "López-Laguna Negra Circuit",
    type: "multi-day",
    difficulty: "hard",
    distance: 38,
    duration: 72,
    elevation: 2000,
    requiresReservation: true,
    description: {
      en: "A challenging three-day circuit connecting Refugio López and Refugio Laguna Negra. Take bus line 10 from Los Coihues to Colonia Suiza to start the trek.",
      es: "Un desafiante circuito de tres d��as que conecta el Refugio López y el Refugio Laguna Negra. Tome la línea de bus 10 desde Los Coihues hasta Colonia Suiza para comenzar la travesía.",
      fr: "Un circuit difficile de trois jours connectant Refugio López et Refugio Laguna Negra. Prenez la ligne de bus 10 de Los Coihues à Colonia Suiza pour commencer la randonnée.",
      de: "Ein schwieriger drei-Tage-Kreislauf, der Refugio López und Refugio Laguna Negra verbindet. Nehmen Sie die Linie 10 von Los Coihues zu Colonia Suiza, um die Wanderung zu beginnen."
    },
    imageUrl: "/lovable-uploads/c2cfed37-332c-49bb-8f26-e701a5a11d48.png",
    startingPoint: "Colonia Suiza (30 min bus from Los Coihues)",
    highlights: ["highlightTwoMountainRefuges", "highlightPanoramicViews", "highlightTechnicalTerrain"],
    transportation: ["bus", "private-transfer"],
    distanceFromCampsite: 15,
    travelTime: 30,
    category: "high-mountain"
  },
  {
    id: "16",
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
      de: "Ein épischer drei-Tage-Kreislauf, der fünf alpinen Lakes besucht: Negra, CAB, Cretton, Jujuy und Ilón. Beginnt in Pampa Linda."
    },
    imageUrl: "/lovable-uploads/67fa31e5-4160-46c9-92fb-86aad3955a56.png",
    startingPoint: "Pampa Linda (transfer required)",
    highlights: ["highlightFiveAlpineLakes", "highlightRemoteWilderness", "highlightTechnicalTerrain"],
    transportation: ["private-transfer"],
    distanceFromCampsite: 60,
    travelTime: 120,
    category: "high-mountain",
    region: "pampa-linda"
  },
  {
    id: "17",
    name: "Cerro Lopez",
    type: "day-hike",
    difficulty: "hard",
    distance: 18,
    duration: 8,
    elevation: 1200,
    requiresReservation: false,
    description: {
      en: "A challenging day hike to the summit of Cerro Lopez. From Camping Los Coihues, take bus line 20 to Arroyo Lopez (30 min). The trail ascends steeply through forests before reaching alpine terrain with spectacular views of the surrounding lakes and mountains.",
      es: "Una desafiante caminata de un día a la cumbre del Cerro Lopez. Desde Camping Los Coihues, tome la línea 20 hasta Arroyo Lopez (30 min). El sendero asciende pronunciadamente a través de bosques antes de alcanzar terreno alpino con vistas espectaculares de los lagos y montañas circundantes.",
      fr: "Una randonnée difficile d'une journée jusqu'au sommet du Cerro Lopez. Depuis le Camping Los Coihues, prenez la ligne 20 à Arroyo Lopez (30 min). Le sentier monte abruptement à travers des forêts avant d'atteindre un terrain alpin avec des vues spectaculaires sur les lacs et montagnes environnantes.",
      de: "Eine anspruchsvolle Tageswanderung zum Gipfel des Cerro Lopez. Vom Camping Los Coihues aus nehmen Sie die Linie 20 nach Arroyo Lopez (30 Min.). Der Weg führt steil durch Wälder, bevor Sie alpines Gelände mit spektakulärem Blick auf die umliegenden Seen und Berge erreichen."
    },
    imageUrl: "/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png",
    startingPoint: "Arroyo Lopez (30 min bus from Los Coihues)",
    highlights: ["highlightSummitViews", "highlightAlpineTerrain", "highlightPanoramicVista", "highlightTechnicalTrail"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 15,
    travelTime: 30,
    busLines: "Line 20",
    category: "high-mountain"
  },
  {
    id: "18",
    name: "Bahia Lopez & Mirador Tristeza",
    type: "day-hike",
    difficulty: "easy",
    distance: 6,
    duration: 3,
    elevation: 200,
    requiresReservation: false,
    description: {
      en: "A scenic trail combining Bahia Lopez bay and the Mirador Tristeza viewpoint. From Camping Los Coihues, take bus line 20 (35 min). The trail offers beautiful views of Nahuel Huapi Lake and the surrounding mountains with minimal elevation gain.",
      es: "Un pintoresco sendero que combina la bahía de Bahía Lopez y el mirador Tristeza. Desde Camping Los Coihues, tome la línea 20 (35 min). El sendero ofrece hermosas vistas del Lago Nahuel Huapi y las montañas circundantes con un desnivel mínimo.",
      fr: "Un sentier pittoresque combinant la baie de Bahía Lopez et le point de vue Mirador Tristeza. Depuis le Camping Los Coihues, prenez la ligne 20 (35 min). Le sentier offre de belles vues sur le lac Nahuel Huapi et les montagnes environnantes avec un dénivelé minimal.",
      de: "Ein malerischer Weg, der die Bucht von Bahía Lopez und den Aussichtspunkt Mirador Tristeza verbindet. Vom Camping Los Coihues nehmen Sie die Linie 20 (35 Min.). Der Weg bietet schöne Ausblicke auf den See Nahuel Huapi und die umliegenden Berge mit minimalem Höhenunterschied."
    },
    imageUrl: "/lovable-uploads/bdd46388-2e54-44ed-8cb1-f449f800bd97.png",
    startingPoint: "Hotel Llao Llao area (35 min bus from Los Coihues)",
    highlights: ["highlightLakeViews", "highlightBayArea", "highlightViewpoint", "highlightFamilyFriendly"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 16,
    travelTime: 35,
    busLines: "Line 20",
    category: "easy-mountain"
  },
  {
    id: "19",
    name: "Laguna Ilón",
    type: "multi-day",
    difficulty: "hard",
    distance: 32,
    duration: 48,
    elevation: 1800,
    requiresReservation: true,
    description: {
      en: "A spectacular two-day trek to Laguna Ilón, a hidden alpine lake surrounded by towering peaks. Starts from Pampa Linda and requires a transfer from Los Coihues.",
      es: "Una espectacular caminata de dos días a Laguna Ilón, un lago alpino escondido rodeado de imponentes picos. Comienza en Pampa Linda y requiere un traslado desde Los Coihues.",
      fr: "Une randonnée spectaculaire de deux jours à Laguna Ilón, un lac alpin caché entouré de hauts sommets. Commence à Pampa Linda et nécessite un transfert depuis Los Coihues.",
      de: "Eine spektakuläre zweitägige Wanderung zur Laguna Ilón, einem versteckten Alpensee, umgeben von hohen Gipfeln. Beginnt in Pampa Linda und erfordert einen Transfer von Los Coihues."
    },
    imageUrl: "/lovable-uploads/5e6c44cc-a8c6-4013-8464-49f82efa40fc.png",
    startingPoint: "Pampa Linda (transfer required)",
    highlights: ["highlightAlpineLake", "highlightRemoteWilderness", "highlightOvernightCamping"],
    transportation: ["private-transfer"],
    distanceFromCampsite: 60,
    travelTime: 120,
    category: "high-mountain",
    region: "pampa-linda"
  },
  {
    id: "20",
    name: "Mirada del Doctor",
    type: "multi-day",
    difficulty: "moderate",
    distance: 28,
    duration: 36,
    elevation: 1500,
    requiresReservation: true,
    description: {
      en: "A stunning viewpoint accessed via a two-day trek. The effort is well worth it for the panoramic views.",
      es: "Un impresionante mirador al que se accede a través de una caminata de dos días. El esfuerzo vale la pena por las vistas panorámicas.",
      fr: "Un point de vue magnifique accessible via une randonnée de deux jours. L'effort en vaut la peine pour les vues panoramiques.",
      de: "Ein atemberaubender Aussichtspunkt, der über eine zweitägige Wanderung erreicht wird. Die Anstrengung lohnt sich für die Panoramablicke."
    },
    imageUrl: "/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png",
    startingPoint: "Pampa Linda (transfer required)",
    highlights: ["highlightPanoramicViews", "highlightRemoteWilderness", "highlightOvernightCamping"],
    transportation: ["private-transfer"],
    distanceFromCampsite: 60,
    travelTime: 120,
    category: "high-mountain",
    region: "pampa-linda"
  }
];
