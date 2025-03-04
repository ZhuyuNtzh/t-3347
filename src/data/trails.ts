import { Trail } from '../types/trail';

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
    imageUrl: "/lovable-uploads/b319c062-05e6-4673-85bb-e653feab11fb.png",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["Alpine lake", "Mountain refuge", "Rock climbing area"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 15,
    busLines: "Line 20",
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
    highlights: ["Panoramic viewpoint", "Native forest", "Lake views"],
    transportation: ["bus"],
    distanceFromCampsite: 12,
    travelTime: 45,
    busLines: "Lines 50 + 20",
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
    highlights: ["Lake views", "Beach access", "Bird watching"],
    transportation: ["walking", "hitchhiking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
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
    imageUrl: "/lovable-uploads/93c2508f-ddf6-4b0b-bf08-0fc63590f9ae.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["Lake views", "Easy access", "Family friendly"],
    transportation: ["walking", "hitchhiking", "taxi"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "easy-mountain"
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
    imageUrl: "/lovable-uploads/291df6e4-5c22-4747-85e4-d706e969db6b.png",
    startingPoint: "Cerro Otto base (20 min drive)",
    highlights: ["Panoramic views", "Historic site", "Restaurant at summit"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 20,
    category: "easy-mountain"
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
      fr: "Un charmant sentier menant à una cascade avec accès aux belles plages du lac Gutiérrez. Sentier parfait pour débuter, directement depuis le camping, suivant un chemin doux à travers la forêt native. Idéal pour les familles et les débutants.",
      de: "Ein charmanter Wasserfall-Wanderweg mit Zugang zu schönen Stränden am Gutiérrez-See. Perfekter Anfängerpfad direkt vom Campingplatz aus, der einem sanften Weg durch den heimischen Wald folgt. Ideal für Familien und Anfänger."
    },
    imageUrl: "/lovable-uploads/1f998a53-3c5b-429f-8ea5-709a0af96d94.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["Waterfall", "Lake beaches", "Native forest", "Family friendly"],
    transportation: ["hitchhiking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
  },
  {
    id: "12",
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
    imageUrl: "/lovable-uploads/291df6e4-5c22-4747-85e4-d706e969db6b.png",
    startingPoint: "Base of Cerro Campanario (25 min bus ride)",
    highlights: ["Panoramic viewpoint", "Chairlift option", "Mountain cafe"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 10,
    travelTime: 25,
    busLines: "Lines 20 + 10",
    category: "easy-mountain"
  },
  {
    id: "13",
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
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    startingPoint: "Circuito Chico entrance (35 min bus ride)",
    highlights: ["Lake views", "Forest trail", "Photography spots"],
    transportation: ["bus", "taxi", "private-transfer"],
    distanceFromCampsite: 15,
    travelTime: 35,
    busLines: "Line 20",
    category: "walking-path"
  },
  {
    id: "14",
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
    highlights: ["Historic settlement", "Artisan market", "Local cuisine", "Lake access"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 12,
    travelTime: 30,
    busLines: "Line 10",
    category: "walking-path"
  },
  {
    id: "15",
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
    highlights: ["Mountain views", "Forest trail", "Panoramic vista"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "easy-mountain"
  },
  {
    id: "16",
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
    imageUrl: "/lovable-uploads/bdd46388-2e54-44ed-8cb1-f449f800bd97.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["Secluded beach", "Crystal clear waters", "Swimming spot", "Forest trail"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
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
    imageUrl: "/lovable-uploads/291df6e4-5c22-4747-85e4-d706e969db6b.png",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["Two mountain refuges", "Alpine lakes", "High mountain passes"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 15,
    category: "high-mountain"
  },
  {
    id: "17",
    name: "Refugio Jakob",
    type: "multi-day",
    difficulty: "hard",
    distance: 32,
    duration: 48,
    elevation: 1600,
    requiresReservation: true,
    description: {
      en: "A challenging two-day hike to Refugio Jakob. From Camping Los Coihues, take bus line 10 to Villa Catedral (40 min). The trail ascends through dense forests before reaching the alpine refuge with spectacular views of Lago Jakob.",
      es: "Una exigente caminata de dos días al Refugio Jakob. Desde Camping Los Coihues, tome la línea 10 hasta Villa Catedral (40 min). El sendero asciende a través de densos bosques antes de llegar al refugio alpino con vistas espectaculares del Lago Jakob.",
      fr: "Une randonnée difficile de deux jours au Refugio Jakob. Depuis le Camping Los Coihues, prenez la ligne 10 à Villa Catedral (40 min). Le sentier monte à travers des forêts denses avant d'atteindre le refuge alpin avec des vues spectaculaires sur le Lago Jakob.",
      de: "Eine anspruchsvolle zweitägige Wanderung zum Refugio Jakob. Vom Camping Los Coihues aus nehmen Sie die Linie 10 nach Villa Catedral (40 Min.). Der Weg führt durch dichte Wälder, bevor Sie die Berghütte mit spektakulärem Blick auf den Lago Jakob erreichen."
    },
    imageUrl: "/lovable-uploads/6d9b3452-7edd-47fa-a936-024b5bf05aa3.png",
    startingPoint: "Villa Catedral (40 min bus from Los Coihues)",
    highlights: ["Alpine lake", "Mountain refuge", "Forest trail", "Panoramic views"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 18,
    travelTime: 40,
    busLines: "Line 10",
    category: "high-mountain"
  },
  {
    id: "18",
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
      de: "Eine schöne Übernachtungswanderung zum Refugio Lopez. Vom Camping Los Coihues aus nehmen Sie die Linie 20 nach Arroyo Lopez (30 Min.). Der Weg bietet atemberaubende Aussichten auf die Seen Nahuel Huapi und Moreno. Die Hütte liegt auf einem Felsvorsprung mit 360°-Panoramablick."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Arroyo Lopez (30 min bus from Los Coihues)",
    highlights: ["Panoramic viewpoint", "Mountain refuge", "Lake views", "Sunset views"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 15,
    travelTime: 30,
    busLines: "Line 20",
    category: "high-mountain"
  },
  {
    id: "4",
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
    highlights: ["Multiple lakes", "Mountain refuges", "Forest trails"],
    transportation: ["bus", "hitchhiking"],
    distanceFromCampsite: 15,
    travelTime: 30,
    category: "high-mountain"
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
    distanceFromCampsite: 15,
    travelTime: 30,
    category: "high-mountain"
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
      de: "Ein épischer drei-Tage-Kreislauf, der fünf alpinen Lakes besucht: Negra, CAB, Cretton, Jujuy und Ilón. Beginnen Sie in Pampa Linda."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Pampa Linda (transfer required)",
    highlights: ["Five alpine lakes", "Remote wilderness", "Technical terrain"],
    transportation: ["private-transfer"],
    distanceFromCampsite: 60,
    travelTime: 120,
    category: "high-mountain"
  },
  {
    id: "19",
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
      fr: "Una randonnée difficile d'une journée jusqu'au sommet du Cerro Lopez. Depuis le Camping Los Coihues, prenez la ligne 20 à Arroyo Lopez (30 min). Le sentier monte abruptement à travers des forêts avant d'atteindre un terrain alpin avec des vues spectaculaires sur les lacs et montagnes environnants.",
      de: "Eine anspruchsvolle Tageswanderung zum Gipfel des Cerro Lopez. Vom Camping Los Coihues aus nehmen Sie die Linie 20 nach Arroyo Lopez (30 Min.). Der Weg führt steil durch Wälder, bevor Sie alpines Gelände mit spektakulärem Blick auf die umliegenden Seen und Berge erreichen."
    },
    imageUrl: "/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png",
    startingPoint: "Arroyo Lopez (30 min bus from Los Coihues)",
    highlights: ["Summit views", "Alpine terrain", "Panoramic vista", "Technical trail"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 15,
    travelTime: 30,
    busLines: "Line 20",
    category: "high-mountain"
  },
  {
    id: "20",
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
    highlights: ["Lake views", "Bay area", "Viewpoint", "Family friendly"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 16,
    travelTime: 35,
    busLines: "Line 20",
    category: "easy-mountain"
  }
];
