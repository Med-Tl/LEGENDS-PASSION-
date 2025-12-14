import { Legend, Trophy, Stadium, MatchMoment, FanCulture } from './types';

export const LEGENDS: Legend[] = [
  // FC Barcelona
  {
    id: 'messi',
    name: 'Lionel Messi',
    club: 'FCB',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
    role: 'Forward / Playmaker',
    years: '2004 - 2021',
    description: 'The greatest of all time. Need we say more? 672 goals, 35 titles, and magic in every touch.',
    achievements: ['7x Ballon d\'Or (at Barça)', '4x Champions League', '10x La Liga'],
    quote: "I start early and I stay late, day after day, year after year.",
    wikiLink: 'https://en.wikipedia.org/wiki/Lionel_Messi'
  },
  {
    id: 'neymar',
    name: 'Neymar Jr',
    club: 'FCB',
    image: '/images/legends/neymar.jpeg',
    role: 'Forward / Magician',
    years: '2013 - 2017',
    description: 'One third of the legendary MSN trio. He brought Brazilian flair, joy, and the famous "Remontada" against PSG.',
    achievements: ['1x Champions League', '2x La Liga', '3x Copa del Rey'],
    wikiLink: 'https://en.wikipedia.org/wiki/Neymar'
  },
  {
    id: 'xavi',
    name: 'Xavi Hernández',
    club: 'FCB',
    image: '/images/legends/xavi-scaled.jpg',
    role: 'Midfield Maestro',
    years: '1998 - 2015',
    description: 'The heartbeat of Tiki-Taka. His vision defined an era of dominance.',
    achievements: ['4x Champions League', '8x La Liga', 'Euro & World Cup Winner'],
    wikiLink: 'https://en.wikipedia.org/wiki/Xavi'
  },
  {
    id: 'iniesta',
    name: 'Andrés Iniesta',
    club: 'FCB',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Andr%C3%A9s_Iniesta.jpg',
    role: 'Midfield Magician',
    years: '2002 - 2018',
    description: 'Elegant, elusive, and scorer of vital goals. The infinite 8.',
    achievements: ['9x La Liga', '4x Champions League', 'World Cup Winner'],
    wikiLink: 'https://en.wikipedia.org/wiki/Andr%C3%A9s_Iniesta'
  },
  {
    id: 'ronaldinho',
    name: 'Ronaldinho',
    club: 'FCB',
    image: '/images/legends/ronaldinho.webp',
    role: 'Forward',
    years: '2003 - 2008',
    description: 'He made the world smile. The man who restored joy to the Camp Nou.',
    achievements: ['1x Ballon d\'Or', '2x La Liga', '1x Champions League'],
    wikiLink: 'https://en.wikipedia.org/wiki/Ronaldinho'
  },
  {
    id: 'cruyff',
    name: 'Johan Cruyff',
    club: 'FCB',
    image: '/images/legends/johan-cruyff-19.webp',
    role: 'Forward / Manager',
    years: '1973 - 1978',
    description: 'The father of modern football. He changed the club as a player and defined it as a coach.',
    achievements: ['1x La Liga (Player)', '4x La Liga (Manager)', '1x European Cup (Manager)'],
    wikiLink: 'https://en.wikipedia.org/wiki/Johan_Cruyff'
  },
  // EST Legends
  {
    id: 'msakni',
    name: 'Youssef Msakni',
    club: 'EST',
    image: '/images/legends/Youssef-msakni.jpg',
    role: 'Winger / Playmaker',
    years: '2008 - 2013',
    description: 'The artist of the curve. A technical genius who lit up the African stage.',
    achievements: ['1x CAF Champions League', '4x Tunisian League', 'Tunisian Footballer of the Year'],
    wikiLink: 'https://en.wikipedia.org/wiki/Youssef_Msakni'
  },
  {
    id: 'eneramo',
    name: 'Michael Eneramo',
    club: 'EST',
    image: '/images/legends/Michael-Eneramo.jpg',
    role: 'Striker',
    years: '2004 - 2010',
    description: 'The Nigerian tank. Unstoppable force in the box and a fan favorite.',
    achievements: ['3x Tunisian League', '1x Arab Champions League', 'Top Scorer'],
    wikiLink: 'https://en.wikipedia.org/wiki/Michael_Eneramo'
  },
  {
    id: 'belaili',
    name: 'Youcef Belaïli',
    club: 'EST',
    image: '/images/legends/Bleili_USA.jpg',
    role: 'Winger',
    years: '2012-14, 2018-19',
    description: 'The clutch performer. Decisive in back-to-back CAF Champions League titles.',
    achievements: ['2x CAF Champions League', '4x Tunisian League', 'African Player of the Year (Inter-Club)'],
    wikiLink: 'https://en.wikipedia.org/wiki/Youcef_Bela%C3%AFli'
  },
  {
    id: 'chammam',
    name: 'Khalil Chammam',
    club: 'EST',
    image: '/images/legends/Khalil-chammem.jpg',
    role: 'Left Back / Captain',
    years: '2006 - 2022',
    description: 'The eternal captain. Symbol of longevity and leadership.',
    achievements: ['3x CAF Champions League', '12x Tunisian League', 'Most Decorated Player'],
    wikiLink: 'https://en.wikipedia.org/wiki/Khalil_Chemmam'
  },
  {
    id: 'dhiab',
    name: 'Tarak Dhiab',
    club: 'EST',
    image: '/images/legends/tarek-dhiab.jpg',
    role: 'Playmaker',
    years: '1972 - 1990',
    description: 'The Emperor of Football. The only Tunisian to win African Footballer of the Year (1977).',
    achievements: ['African Ballon d\'Or 1977', '6x Tunisian League', 'Legendary #10'],
    wikiLink: 'https://en.wikipedia.org/wiki/Tarak_Dhiab'
  },
  {
    id: 'jaidi',
    name: 'Radhi Jaïdi',
    club: 'EST',
    image: '/images/legends/radhi.png',
    role: 'Centre Back',
    years: '1993 - 2004',
    description: 'The defensive rock. Dominant in the air and a true leader.',
    achievements: ['8x Tunisian League', '1x CAF Champions League', '1x CAF Cup'],
    wikiLink: 'https://en.wikipedia.org/wiki/Radhi_Ja%C3%AFdi'
  },
  {
    id: 'badra',
    name: 'Khaled Badra',
    club: 'EST',
    image: '/images/legends/khaled-badra.jpeg',
    role: 'Defender',
    years: '1995-2000, 2006-07',
    description: 'A warrior on the pitch. Feared by strikers across the continent.',
    achievements: ['1x CAF Cup Winners Cup', 'Tunisian League Titles', 'African Champion 2004 (National)'],
    wikiLink: 'https://en.wikipedia.org/wiki/Khaled_Badra'
  }
];

export const TROPHIES: Trophy[] = [
  {
    id: 'cl-fcb',
    name: 'UEFA Champions League',
    club: 'FCB',
    image: 'https://picsum.photos/seed/ucl/300/300',
    count: 5,
    years: '1992, 2006, 2009, 2011, 2015',
    description: 'The pinnacle of European football. Barça has conquered the continent 5 times.'
  },
  {
    id: 'liga-fcb',
    name: 'La Liga',
    club: 'FCB',
    image: 'https://picsum.photos/seed/laliga/300/300',
    count: 27,
    years: 'Many',
    description: 'Dominance in Spain. A symbol of consistency and excellence.'
  },
  {
    id: 'caf-est',
    name: 'CAF Champions League',
    club: 'EST',
    image: 'https://picsum.photos/seed/cafcl/300/300',
    count: 4,
    years: '1994, 2011, 2018, 2019',
    description: 'Kings of Africa. The Blood and Gold have ruled the continent 4 times.'
  },
  {
    id: 'league-est',
    name: 'Tunisian League',
    club: 'EST',
    image: 'https://picsum.photos/seed/tnleague/300/300',
    count: 33,
    years: 'Record Holder',
    description: 'Absolute dominance in Tunisian football history.'
  }
];

export const STADIUMS: Stadium[] = [
  {
    name: 'Spotify Camp Nou',
    club: 'FCB',
    capacity: '99,354',
    location: 'Barcelona, Spain',
    description: 'More than a stadium. A temple of football where history is written every matchday.',
    image: '/images/legends/Camp-Nou-3.webp',
    features: ['Europe\'s Largest Stadium', 'The Blaugrana Cauldron', 'Historic Remontadas']
  },
  {
    name: 'Stade Olympique de Radès',
    club: 'EST',
    capacity: '60,000',
    location: 'Tunis, Tunisia',
    description: 'The fortress of African football. When the Virage Sud sings, the ground shakes.',
    image: '/images/legends/rades.jpg',
    features: ['African Fortress', 'Virage Sud Home', 'Electric Atmosphere']
  }
];

export const FAN_CULTURE: FanCulture[] = [
  {
    club: 'FCB',
    title: 'Més que un club',
    groupName: 'Dracs & Supporters',
    description: 'Barça fans represent the Catalan identity. The Camp Nou mosaic is a world-famous tradition.',
    image: '/images/legends/barcachamps.webp',
    chants: ['Cant del Barça', 'Un dia de partit', 'Ser del Barça és el millor']
  },
  {
    club: 'EST',
    title: 'Taraji Dawla',
    groupName: 'Ultras L\'Emkachkhines',
    description: 'The Virage Sud is legendary. Known for massive tifos, pyro shows, and 90 minutes of non-stop chanting.',
    image: '/images/legends/taraji-champ3.jpg',
    chants: ['Taraji La Prima', 'Unico Amore', 'Allez Les Jeunes']
  }
];
