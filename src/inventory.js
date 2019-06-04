/* eslint-disable import/no-mutable-exports */
import _ from 'lodash';

let inventory = [
  {
    id: 1,
    name: 'Tropical buckeye butterfly',
    description: 'Junonia genoveua',
    price: 395,
    category: 'Tunisia',
  }, {
    id: 2,
    name: "Denham's bustard",
    description: 'Neotis denhami',
    price: 421,
    category: 'Russia',
  }, {
    id: 3,
    name: 'Cormorant, great',
    description: 'Phalacrocorax carbo',
    price: 792,
    category: 'Croatia',
  }, {
    id: 4,
    name: 'Macaque, japanese',
    description: 'Macaca fuscata',
    price: 816,
    category: 'Philippines',
  }, {
    id: 5,
    name: 'Wildebeest, blue',
    description: 'Connochaetus taurinus',
    price: 261,
    category: 'China',
  }, {
    id: 6,
    name: 'Macaw, blue and gold',
    description: 'Ara ararauna',
    price: 682,
    category: 'Philippines',
  }, {
    id: 7,
    name: 'Red brocket',
    description: 'Mazama americana',
    price: 175,
    category: 'Canada',
  }, {
    id: 8,
    name: 'Tern, white-winged',
    description: 'Chlidonias leucopterus',
    price: 262,
    category: 'Germany',
  }, {
    id: 9,
    name: 'Southern tamandua',
    description: 'Tamandua tetradactyla',
    price: 626,
    category: 'Serbia',
  }, {
    id: 10,
    name: 'Short-beaked echidna',
    description: 'Tachyglossus aculeatus',
    price: 100,
    category: 'Colombia',
  }, {
    id: 11,
    name: 'Lizard, goanna',
    description: 'Varanus sp.',
    price: 759,
    category: 'Russia',
  }, {
    id: 12,
    name: 'Heron, giant',
    description: 'Ardea golieth',
    price: 293,
    category: 'Indonesia',
  }, {
    id: 13,
    name: 'Common wallaroo',
    description: 'Macropus robustus',
    price: 115,
    category: 'United States',
  }, {
    id: 14,
    name: 'Stork, white',
    description: 'Ciconia ciconia',
    price: 121,
    category: 'Armenia',
  }, {
    id: 15,
    name: 'Lemur, sportive',
    description: 'Lepilemur rufescens',
    price: 857,
    category: 'Argentina',
  }, {
    id: 16,
    name: 'White-mantled colobus',
    description: 'Colobus guerza',
    price: 290,
    category: 'Argentina',
  }, {
    id: 17,
    name: 'Silver gull',
    description: 'Larus novaehollandiae',
    price: 136,
    category: 'Saint Vincent and the Grenadines',
  }, {
    id: 18,
    name: 'Lemur, grey mouse',
    description: 'Microcebus murinus',
    price: 975,
    category: 'Syria',
  }, {
    id: 19,
    name: 'Dog, black-tailed prairie',
    description: 'Cynomys ludovicianus',
    price: 603,
    category: 'Finland',
  }, {
    id: 20,
    name: 'Lesser flamingo',
    description: 'Phoeniconaias minor',
    price: 881,
    category: 'Greece',
  }, {
    id: 21,
    name: 'Long-tailed spotted cat',
    description: 'Felis wiedi or Leopardus weidi',
    price: 298,
    category: 'Norway',
  }, {
    id: 22,
    name: 'Lemming, collared',
    description: 'Dicrostonyx groenlandicus',
    price: 282,
    category: 'Brazil',
  }, {
    id: 23,
    name: 'Gray heron',
    description: 'Ardea cinerea',
    price: 387,
    category: 'China',
  }, {
    id: 24,
    name: 'Bison, american',
    description: 'Bison bison',
    price: 955,
    category: 'Colombia',
  }, {
    id: 25,
    name: 'Fox, cape',
    description: 'Vulpes chama',
    price: 911,
    category: 'Mozambique',
  }, {
    id: 26,
    name: 'Four-horned antelope',
    description: 'Tetracerus quadricornis',
    price: 671,
    category: 'Portugal',
  }, {
    id: 27,
    name: 'Glider, sugar',
    description: 'Petaurus breviceps',
    price: 488,
    category: 'Indonesia',
  }, {
    id: 28,
    name: 'African elephant',
    description: 'Loxodonta africana',
    price: 334,
    category: 'United States',
  }, {
    id: 29,
    name: 'Southern black-backed gull',
    description: 'Larus dominicanus',
    price: 429,
    category: 'Poland',
  }, {
    id: 30,
    name: 'Indian giant squirrel',
    description: 'Ratufa indica',
    price: 621,
    category: 'Panama',
  }, {
    id: 31,
    name: 'Large cormorant',
    description: 'Phalacrocorax carbo',
    price: 609,
    category: 'France',
  }, {
    id: 32,
    name: 'Waved albatross',
    description: 'Diomedea irrorata',
    price: 550,
    category: 'Brazil',
  }, {
    id: 33,
    name: 'Common dolphin',
    description: 'Delphinus delphis',
    price: 550,
    category: 'China',
  }, {
    id: 34,
    name: 'Cat, jungle',
    description: 'Felis chaus',
    price: 679,
    category: 'China',
  }, {
    id: 35,
    name: 'Western lowland gorilla',
    description: 'Gorilla gorilla',
    price: 716,
    category: 'Syria',
  }, {
    id: 36,
    name: 'Roe deer',
    description: 'Capreolus capreolus',
    price: 829,
    category: 'Brazil',
  }, {
    id: 37,
    name: "Thomson's gazelle",
    description: 'Gazella thompsonii',
    price: 838,
    category: 'Libya',
  }, {
    id: 38,
    name: 'Ibis, puna',
    description: 'Plegadis ridgwayi',
    price: 911,
    category: 'United States',
  }, {
    id: 39,
    name: 'Pale white-eye',
    description: 'Zosterops pallidus',
    price: 342,
    category: 'Canada',
  }, {
    id: 40,
    name: 'Yellow-billed stork',
    description: 'Mycteria ibis',
    price: 920,
    category: 'Russia',
  }, {
    id: 41,
    name: 'Mountain goat',
    description: 'Oreamnos americanus',
    price: 882,
    category: 'China',
  }, {
    id: 42,
    name: 'Orca',
    description: 'Orcinus orca',
    price: 165,
    category: 'Yemen',
  }, {
    id: 43,
    name: 'Bleeding heart monkey',
    description: 'Theropithecus gelada',
    price: 998,
    category: 'Philippines',
  }, {
    id: 44,
    name: 'Black-tailed prairie dog',
    description: 'Cynomys ludovicianus',
    price: 695,
    category: 'Micronesia',
  }, {
    id: 45,
    name: 'Leopard, indian',
    description: 'Panthera pardus',
    price: 639,
    category: 'France',
  }, {
    id: 46,
    name: 'Brown antechinus',
    description: 'Antechinus flavipes',
    price: 279,
    category: 'Poland',
  }, {
    id: 47,
    name: 'Black-capped chickadee',
    description: 'Parus atricapillus',
    price: 923,
    category: 'Thailand',
  }, {
    id: 48,
    name: 'Egyptian viper',
    description: 'Naja haje',
    price: 377,
    category: 'Colombia',
  }, {
    id: 49,
    name: 'Nilgai',
    description: 'Boselaphus tragocamelus',
    price: 580,
    category: 'China',
  }, {
    id: 50,
    name: 'Crow, house',
    description: 'Corvus brachyrhynchos',
    price: 527,
    category: 'China',
  }, {
    id: 51,
    name: 'Black and white colobus',
    description: 'Colobus guerza',
    price: 633,
    category: 'Slovenia',
  }, {
    id: 52,
    name: 'Malagasy ground boa',
    description: 'Acrantophis madagascariensis',
    price: 437,
    category: 'China',
  }, {
    id: 53,
    name: 'Egret, snowy',
    description: 'Egretta thula',
    price: 848,
    category: 'Czech Republic',
  }, {
    id: 54,
    name: 'Short-nosed bandicoot',
    description: 'Isoodon obesulus',
    price: 542,
    category: 'China',
  }, {
    id: 55,
    name: 'Waxbill, violet-eared',
    description: 'Uraeginthus granatina',
    price: 807,
    category: 'Japan',
  }, {
    id: 56,
    name: 'Partridge, coqui',
    description: 'Francolinus coqui',
    price: 596,
    category: 'Brazil',
  }, {
    id: 57,
    name: 'Black-crowned crane',
    description: 'Balearica pavonina',
    price: 368,
    category: 'Portugal',
  }, {
    id: 58,
    name: 'Common pheasant',
    description: 'Phasianus colchicus',
    price: 538,
    category: 'China',
  }, {
    id: 59,
    name: 'Snake, tiger',
    description: 'Notechis semmiannulatus',
    price: 447,
    category: 'Philippines',
  }, {
    id: 60,
    name: 'Corella, long-billed',
    description: 'Cacatua tenuirostris',
    price: 206,
    category: 'Greece',
  }, {
    id: 61,
    name: 'Bengal vulture',
    description: 'Gyps bengalensis',
    price: 133,
    category: 'Philippines',
  }, {
    id: 62,
    name: 'Red-knobbed coot',
    description: 'Fulica cristata',
    price: 290,
    category: 'Mexico',
  }, {
    id: 63,
    name: 'Seal, northern elephant',
    description: 'Mirounga angustirostris',
    price: 818,
    category: 'China',
  }, {
    id: 64,
    name: 'Eurasian badger',
    description: 'Meles meles',
    price: 516,
    category: 'Indonesia',
  }, {
    id: 65,
    name: 'Margay',
    description: 'Felis wiedi or Leopardus weidi',
    price: 822,
    category: 'China',
  }, {
    id: 66,
    name: 'Great cormorant',
    description: 'Phalacrocorax carbo',
    price: 977,
    category: 'Indonesia',
  }, {
    id: 67,
    name: 'Giant armadillo',
    description: 'Priodontes maximus',
    price: 258,
    category: 'Brazil',
  }, {
    id: 68,
    name: 'Marmot, hoary',
    description: 'Marmota caligata',
    price: 437,
    category: 'China',
  }, {
    id: 69,
    name: 'Common ringtail',
    description: 'Pseudocheirus peregrinus',
    price: 724,
    category: 'Syria',
  }, {
    id: 70,
    name: 'Snake, carpet',
    description: 'Morelia spilotes variegata',
    price: 509,
    category: 'Poland',
  }, {
    id: 71,
    name: 'Black-necked stork',
    description: 'Ephippiorhynchus mycteria',
    price: 126,
    category: 'Brazil',
  }, {
    id: 72,
    name: 'Long-nosed bandicoot',
    description: 'Perameles nasuta',
    price: 343,
    category: 'Indonesia',
  }, {
    id: 73,
    name: "Zorro, azara's",
    description: 'Pseudalopex gymnocercus',
    price: 813,
    category: 'Russia',
  }, {
    id: 74,
    name: 'Common pheasant',
    description: 'Phasianus colchicus',
    price: 723,
    category: 'China',
  }, {
    id: 75,
    name: 'Common duiker',
    description: 'Sylvicapra grimma',
    price: 435,
    category: 'Madagascar',
  }, {
    id: 76,
    name: 'Puna ibis',
    description: 'Plegadis ridgwayi',
    price: 581,
    category: 'Cuba',
  }, {
    id: 77,
    name: 'Black-cheeked waxbill',
    description: 'Estrilda erythronotos',
    price: 636,
    category: 'Brazil',
  }, {
    id: 78,
    name: 'Mynah, common',
    description: 'Acridotheres tristis',
    price: 985,
    category: 'Burkina Faso',
  }, {
    id: 79,
    name: 'Zorro, common',
    description: 'Dusicyon thous',
    price: 678,
    category: 'Greece',
  }, {
    id: 80,
    name: 'Macaw, green-winged',
    description: 'Ara chloroptera',
    price: 903,
    category: 'Philippines',
  }, {
    id: 81,
    name: 'Rat, desert kangaroo',
    description: 'Dipodomys deserti',
    price: 502,
    category: 'Peru',
  }, {
    id: 82,
    name: 'Snake, green vine',
    description: 'Oxybelis fulgidus',
    price: 211,
    category: 'Sweden',
  }, {
    id: 83,
    name: 'Giant girdled lizard',
    description: 'Cordylus giganteus',
    price: 571,
    category: 'Portugal',
  }, {
    id: 84,
    name: 'Stork, yellow-billed',
    description: 'Mycteria ibis',
    price: 626,
    category: 'El Salvador',
  }, {
    id: 85,
    name: 'Two-toed sloth',
    description: 'Choloepus hoffmani',
    price: 674,
    category: 'China',
  }, {
    id: 86,
    name: 'Egyptian cobra',
    description: 'Naja haje',
    price: 151,
    category: 'United Kingdom',
  }, {
    id: 87,
    name: 'Kite, black',
    description: 'Milvus migrans',
    price: 535,
    category: 'China',
  }, {
    id: 88,
    name: 'Vulture, black',
    description: 'Aegypius tracheliotus',
    price: 993,
    category: 'Sweden',
  }, {
    id: 89,
    name: 'Red howler monkey',
    description: 'Alouatta seniculus',
    price: 997,
    category: 'China',
  }, {
    id: 90,
    name: 'Striped skunk',
    description: 'Mephitis mephitis',
    price: 743,
    category: 'Russia',
  }, {
    id: 91,
    name: 'Gerbil (unidentified)',
    description: 'Gerbillus sp.',
    price: 150,
    category: 'China',
  }, {
    id: 92,
    name: 'Duiker, common',
    description: 'Sylvicapra grimma',
    price: 102,
    category: 'Poland',
  }, {
    id: 93,
    name: 'Tern, royal',
    description: 'Thalasseus maximus',
    price: 295,
    category: 'Cuba',
  }, {
    id: 94,
    name: "Sifaka, verreaux's",
    description: 'Propithecus verreauxi',
    price: 197,
    category: 'Philippines',
  }, {
    id: 95,
    name: 'River wallaby',
    description: 'Macropus agilis',
    price: 742,
    category: 'Philippines',
  }, {
    id: 96,
    name: 'Macaw, red and blue',
    description: 'Ara chloroptera',
    price: 671,
    category: 'China',
  }, {
    id: 97,
    name: 'Yellow-necked spurfowl',
    description: 'Francolinus leucoscepus',
    price: 189,
    category: 'Malawi',
  }, {
    id: 98,
    name: 'Eurasian hoopoe',
    description: 'Upupa epops',
    price: 933,
    category: 'Greece',
  }, {
    id: 99,
    name: 'Lapwing (unidentified)',
    description: 'Vanellus sp.',
    price: 424,
    category: 'Greece',
  }, {
    id: 100,
    name: 'African wild cat',
    description: 'Felis silvestris lybica',
    price: 521,
    category: 'Malaysia',
  }];

// inventory = _.uniqBy(inventory, 'name')
inventory = _.sortBy(inventory, 'category');

inventory.forEach((item, i) => {
  if (Math.random() > 0.5) {
    item.isSelected = true;
  } else {
    item.isSelected = false;
  }
  console.log(item);
});

const c = inventory.map(item => item.category);

export const categories = _.uniq(c);
export default inventory;
