const adverbs = [
    "abnormally",
    "actually",
    "absently",
    "nearly",
    "basically",
    "orderly",
    "disorderly",
    "accidentally",
    "diabolically",
    "dubiously",
    "doubtfully",
    "dreadfully",
    "dutifully",
    "dynamically",
    "dynamically",
    "dynamically",
    "artistically",
    "artfully",
    "fearfully",
    "dreadfully",
    "dutifully",
    "undoubtedly",
    "absolutely",
    "slightly",
    "regrettably",
    "unbelievably",
    "nearly",
    "inevitably",
    "unquestionably",
    "happily",
    "easily",
    "unwittingly",
    "scarcely",
    "anually",
    "shockingly",
    "very",
    "unusually",
    "deceptively",
    "unintentionally",
    "exactly",
    "equally",
    "positively",
    "negatively",
    "unfortunately",
    "apparently",
    "evidently",
    "clearly",
    "certainly",
    "hypothetically",
    "physically",
    "friendly",
    "globally"
];
const adjectives = [
    "annoying",
    "abyssmal",
    "abnormal",
    "oblique",
    "obtuse",
    "obvious",
    "oblivious",
    "obnoxious",
    "obsequious",
    "electric",
    "actual",
    "ambient",
    "ambulatory",
    "interplanetary",
    "interstellar",
    "intergalactic",
    "interdimensional",
    "intercontinental",
    "interstellar",
    "interplanetary",
    "interdimensional",
    "international",
    "ancient",
    "arcane",
    "nocturnal",
    "punctual",
    "unscientific",
    "useless",
    "doomed",
    "fragile",
    "continental",
    "flying",
    "decapitated",
    "incapacitated",
    "obliterated",
    "precipitated",
    "sharp",
    "prickly",
    "serrated",
    "rectangular",
    "tall",
    "short",
    "wide",
    "narrow",
    "square",
    "round",
    "circular",
    "sparse",
    "dense",
    "extravagant",
    "obedient",
    "misshapen",
    "magnetic",
    "pointed",
    "incarcerated",
    "intercepted",
    "evil",
    "altruistic",
    "crooked",
    "corrupted",
    "anticipated",
    "unanticipated",
    "cosmetic",
    "blind",
    "ballistic",
    "belligerent",
    "easy",
    "noisy",
    "quiet",
    "loud",
    "holy",
    "biblical",
    "observant",
    "spherical",
    "cylindrical",
    "spherical",
    "cubical",
    "cubic",
    "concave",
    "convex",
    "convoluted",
    "convincing",
    "convivial",
    "conniving",
    "celestial",
    "uncorked",
    "bottomless",
    "corrosive",
    "executive",
    "apathetic",
    "boiling",
    "acidic",
    "fluctuating",
    "flexable",
    "rigid",
    "dynamic",
    "perforated",
    "perpetual",
    "perplexed",
    "persecuted",
    "perverted",
    "pernicious",
    "punctured",
    "picturesque",
    "grotesque",
    "glass",
    "concentrated",
    "concrete",
    "incomplete",
    "absent",
    "near",
    "basic",
    "disastrous",
    "accidental",
    "diabolical",
    "dubious",
    "doubtful",
    "dreadful",
    "dutiful",
    "dynamic",
    "diabolical",
    "charged",
    "coincidental",
    "perpendicular",
    "unlucky",
    "spectacular",
    "ridiculous",
    "ludicrous",
    "phantom",
    "mysteryous",
    "corporeal",
    "incorporeal",
    "fantastic",
    "faabulous",
    "fanatic",
    "ominous",
    "ecstatic",
    "fascinating",
    "effervescent",
    "triumphant",
    "tremendous",
    "enormous",
    "cosmic",
    "astronomical",
    "gigantic",
    "gargantuan",
    "colossal",
    "miniscule",
    "tiny",
    "radiant",
    "brilliant",
    "exothermic",
    "disastrous",
    "horrific",
    "horrible",
    "amusing",
    "airtight",
    "unsightly",
    "unpleasant",
    "hideous",
    "atomic",
    "boring",
    "bizarre",
    "insubordinate",
    "naughty",
    "angry",
    "annoying",
    "anxious",
    "arrogant",
    "ashamed",
    "awful",
    "bad",
    "bitter",
    "bored",
    "broken",
    "busy",
    "careless",
    "cautious",
    "cheerless",
    "chilly",
    "cold",
    "cold-hearted",
    "cold-blooded",
    "cold-blooded",
    "cold-blooded",
    "five-headed",
    "copious",
    "crazy",
    "creepy",
    "cruel",
    "blasphemous",
    "blazing",
    "intolerable",
    "insipid",
    "insulting",
    "colorful",
    "aggressive",
    "agitated",
    "peaceful",
    "unholy",
    "dissonant",
    "disfigured",
    "damaged",
    "soiled",
    "armored",
    "weaponized",
    "frozen",
    "flaming",
    "incendiary",
    "legendary",
    "hairy",
    "hairless",
    "hazardous",
    "unsuitable",
    "unfit",
    "unhealthy",
    "unjust",
    "unlucky",
    "underqualified",
    "unwilling",
    "vile",
    "villainous",
    "vicious",
    "vapid",
    "victorious",
    "vindictive",
    "toxic",
    "vivid",
    "wicked",
    "unstable",
    "incredible",
    "incompatible",
    "inconsequential",
    "ineffable",
    "inept",
    "inexorable",
    "inexperienced",
    "inexplicable",
    "incomprehensible",
    "inconceivable",
    "labrynthine",
    "luxurious",
    "mexican",
    "melted",
    "molten",
    "liquid",
    "liquidated",
    "gaseous",
    "confused",
    "carnivorous",
    "cat-eating",
    "carpeted",
    "callous",
    "motorized",
    "motivated",
    "industrial",
    "canned",
    "thick",
    "thickened",
    "flat",
    "carbonated",
    "clandestine",
    "ironclad",
    "trustworthy",
    "deceitful",
    "deceptive",
    "triangular",
    "bulbous",
    "basic",
    "burnt",
    "scorned",
    "resentful",
    "spiteful",
    "hateful",
    "happy",
    "busy",
    "contagious",
    "humongous",
    "felonious",
    "tasteful",
    "untested",
    "cubed",
    "diced",
    "chopped",
    "sliced",
    "malignant",
    "benign",
    "benevolent",
    "erratic",
    "cursed",
    "juvenile",
    "mature",
    "matured",
    "majestic",
    "omniscient",
    "sculptured",
    "sophisticated",
    "curious",
    "tarnished",
    "tainted",
    "pristine",
    "delicious",
    "inconspicuous",
    "apocalyptic",
    "pickled",
    "radioactive",
    "poisonous",
    "delicate",
    "exotic",
    "esoteric"
];
const nouns = [
    "abacus",
    "abdomen",
    "apothecary",
    "armpit",
    "asterisk",
    "arrow",
    "arrowhead",
    "disease",
    "acorn",
    "ant",
    "antelope",
    "almond",
    "astronaut",
    "army",
    "armchair",
    "ape",
    "antler",
    "angle",
    "avocado",
    "aircraft",
    "apple",
    "apricot",
    "armadillo",
    "alpaca",
    "almond",
    "banjo",
    "ball",
    "bomb",
    "banana",
    "basement",
    "bear",
    "beard",
    "beetle",
    "bison",
    "butterfly",
    "butter",
    "baker",
    "board",
    "boulder",
    "battery",
    "bakery",
    "bell",
    "bellhop",
    "baton",
    "briefcase",
    "backpack",
    "button",
    "baseball",
    "car",
    "carriage",
    "carrot",
    "cat",
    "caterpillar",
    "cheese",
    "cherry",
    "chicken",
    "chick",
    "chimpanzee",
    "chocolate",
    "clam",
    "closet",
    "casket",
    "clown",
    "cactus",
    "candle",
    "cannon",
    "capybara",
    "caterpillar",
    "caterpillar",
    "card",
    "carrot",
    "campfire",
    "bar",
    "barn",
    "blog",
    "biscuit",
    "barrel",
    "bass",
    "bat",
    "bathtub",
    "bass",
    "cane",
    "cake",
    "ceiling",
    "capacitor",
    "calculator",
    "circle",
    "castle",
    "cable",
    "corn",
    "cornhole",
    "cardboard",
    "cardboard box",
    "camera",
    "cannon",
    "clerk",
    "clergyman",
    "choir",
    "chorus",
    "chess board",
    "cracker",
    "canal",
    "cigar",
    "cigarette",
    "cinder block",
    "carnival",
    "cellophane",
    "cello",
    "chisel",
    "celery",
    "coin",
    "city",
    "clam",
    "clan",
    "classmate",
    "classroom",
    "clock",
    "cloud",
    "couch",
    "cinnamon",
    "cinnamon",
    "coconut",
    "colosseum",
    "computer",
    "crab",
    "crayon",
    "cucumber",
    "cup",
    "cupcake",
    "dagger",
    "dialogue",
    "dandelion",
    "dinosaur",
    "doctor",
    "dentist",
    "dirt",
    "demon",
    "dolphin",
    "domicile",
    "dove",
    "dragon",
    "dragonfly",
    "diamond",
    "disc",
    "duck",
    "dugong",
    "didgeridoo",
    "diaper",
    "dog",
    "door",
    "doorknob",
    "dent",
    "dish",
    "dishwasher",
    "dishwater",
    "dispenser",
    "dumbwaiter",
    "dump",
    "dust",
    "dustpan",
    "ear",
    "earlobe",
    "echo",
    "edge",
    "empire",
    "egg",
    "ether",
    "easel",
    "engine",
    "envelope",
    "eyeball",
    "eyebrow",
    "eyelash",
    "eyelid",
    "eyeliner",
    "eyeshadow",
    "eyestrain",
    "eyeball",
    "eyebrow",
    "eyelash",
    "eyelid",
    "eyeliner",
    "eyeshadow",
    "eyestrain",
    "face",
    "factory",
    "falcon",
    "fairy",
    "fan",
    "foghorn",
    "flapjack",
    "floor",
    "flask",
    "flamingo",
    "fortress",
    "fountain",
    "fez",
    "fiddle",
    "fire",
    "fireman",
    "fireplace",
    "firetruck",
    "firework",
    "fish",
    "floor",
    "fisherman",
    "flute",
    "fly",
    "flying fish",
    "flying squirrel",
    "flying fish",
    "floozy",
    "ferret",
    "forehead",
    "forest",
    "fork",
    "frog",
    "gallery",
    "garden",
    "garden hose",
    "giraffe",
    "gazelle",
    "gazebo",
    "gnat",
    "goat",
    "golf",
    "golf cart",
    "gondola",
    "gap",
    "garage",
    "garage door",
    "galaxy",
    "generator",
    "gasket",
    "grass",
    "grasshopper",
    "grape",
    "grapefruit",
    "grenade",
    "guitar",
    "gum",
    "gumdrop",
    "gym",
    "gymnast",
    "gerbil",
    "geyser",
    "gutter",
    "gear",
    "gun",
    "game",
    "gladiator",
    "guide",
    "hat",
    "hamburger",
    "harp",
    "hammer",
    "handle",
    "hexagon",
    "hedgehog",
    "hedge",
    "helicopter",
    "helmet",
    "honey",
    "honeybee",
    "honeydew",
    "honeycomb",
    "honey",
    "house",
    "hotdog",
    "highway",
    "harpoon",
    "hazelnut",
    "ham",
    "hand",
    "hammock",
    "haystack",
    "hail",
    "head",
    "headlight",
    "headphones",
    "headphone",
    "icicle",
    "ice",
    "ice cream",
    "ice cream cone",
    "ice cream scoop",
    "ice cream truck",
    "icon",
    "iron",
    "island",
    "jacket",
    "jail",
    "jellyfish",
    "jelly",
    "jellybean",
    "javelin",
    "jester",
    "jukebox",
    "junk",
    "junkyard",
    "jar",
    "jogger",
    "jockey",
    "jade",
    "kite",
    "kangaroo",
    "kilt",
    "killer",
    "keg",
    "kitchen",
    "kite",
    "kitten",
    "kid",
    "kiss",
    "karaoke",
    "kayak",
    "knee",
    "knee",
    "kneecap",
    "kneepads",
    "knife",
    "knob",
    "knot",
    "knight",
    "ladder",
    "ladybug",
    "lamb",
    "lambkin",
    "lamp",
    "laptop",
    "leaf",
    "lemon",
    "lemonade",
    "leopard",
    "lion",
    "lizard",
    "lobster",
    "lollipop",
    "lampshade",
    "lawnmower",
    "leprechaun",
    "lighthouse",
    "lightning",
    "lightbulb",
    "lord",
    "lunch",
    "lunchbox",
    "lunchroom",
    "llama",
    "log",
    "loogie",
    "man",
    "mail",
    "mall",
    "mallet",
    "mailman",
    "mango",
    "map",
    "mack truck",
    "marble",
    "marble podium",
    "marina",
    "market",
    "marker",
    "marksman",
    "marmot",
    "marmoset",
    "marmoset",
    "maggot",
    "magnet",
    "mantle",
    "melon",
    "milk",
    "milkshake",
    "mirror",
    "mitten",
    "mole",
    "molehill",
    "midwife",
    "maiden",
    "muffin",
    "mug",
    "mushroom",
    "mistress",
    "missile",
    "mobster",
    "mattress",
    "mermaid",
    "meat",
    "meathouse",
    "meathook",
    "meatloaf",
    "meatball",
    "metal",
    "molasess",
    "migrant",
    "mint",
    "minivan",
    "mortuary",
    "minefield",
    "nail",
    "nailfile",
    "narrator",
    "neck",
    "necktie",
    "needle",
    "nephew",
    "nostril",
    "notary",
    "nose",
    "nosehair",
    "nipple",
    "nun",
    "nurse",
    "nut",
    "nutmeg",
    "nutcracker",
    "oatmeal",
    "octopus",
    "octogon",
    "oar",
    "ocean",
    "opera",
    "opossum",
    "ostrich",
    "owl",
    "ox",
    "oxen",
    "oxpecker",
    "oyster",
    "outhouse",
    "obelisk",
    "oil",
    "oil drum",
    "ointment",
    "olive",
    "onion",
    "ogre",
    "odor",
    "orca",
    "opal",
    "oak tree",
    "pan",
    "pancake",
    "paper",
    "paddle",
    "pallet",
    "pebble",
    "pear",
    "peach",
    "peacock",
    "peanut",
    "pearl",
    "pencil",
    "penguin",
    "peg",
    "pear",
    "priest",
    "pin",
    "pinhole",
    "piano",
    "pigeon",
    "pie",
    "pixel",
    "pocket",
    "potato",
    "porch",
    "pontoon",
    "pothole",
    "pistol",
    "piston",
    "plaque",
    "podium",
    "pedestrian",
    "pellet",
    "pedestal",
    "pillow",
    "pill",
    "person",
    "phone",
    "parakeet",
    "parrot",
    "piranha",
    "plate",
    "pelican",
    "pecan",
    "pants",
    "prince",
    "princess",
    "pirate",
    "pylon",
    "pyramid",
    "pecker",
    "quill",
    "quiver",
    "quest",
    "question",
    "question mark",
    "quorum",
    "quota",
    "quiz",
    "rapper",
    "rain",
    "rainbow",
    "raisin",
    "railing",
    "raft",
    "raffle",
    "robot,
    "reliquary",
    "rebel",
    "rod",
    "rodent",
    "rose",
    "rosary",
    "riddle",
    "rum",
    "rucksack",
    "rubber band",
    "rental",
    "raspberry",
    "rumor",
    "ride",
    "rag",
    "ragdoll",
    "rotor",
    "rain",
    "renegade",
    "rooster",
    "rug",
    "ring",
    "ribbon",
    "resort",
    "ruler",
    "sand",
    "sandpaper",
    "sack",
    "saddle",
    "satellite",
    "saw",
    "saucer",
    "saber",
    "scab",
    "scabbard",
    "season",
    "sea",
    "sediment",
    secretary",
    "segment",
    "salesman",
    "scorpion",
    "sanitarium",
    "sanity",
    "saint",
    "satin",
    "satan",
    "sculpture",
    "scene",
    "scoreboard",
    "sapling",
    "suggestion",
    "sugar",
    "shrub",
    "seagull",
    "specimen",
    "slot",
    "scale",
    "soldier",
    "sauce",
    "slime",
    "sapphire",
    "soda",
    "sucker",
    "stone",
    "silicon",
    "saturday",
    "slate",
    "state",
    "staple",
    "stapler",
    "saxophone",
    "seed",
    "seat",
    "slug",
    "skeleton",
    "soap",
    "soccer ball",
    "shed",
    "surfboard",
    "sample",
    "sunlight",
    "sundial",
    "salt",
    "shack",
    "sister",
    "snare",
    "street",
    "streetlight",
    "stopsign",
    "sandal",
    "scavenger",
    "snorkel",
    "shark",
    "skull",
    "skunk",
    "sabbath",
    "shingle",
    "saffron",
    "scalpel",
    "spectrum",
    "shade",
    "speaker",
    "squirrel",
    "salmon",
    "taco",
    "talisman",
    "tag",
    "table",
    "tapestry",
    "tar",
    "taragon",
    "tarp",
    "tampon",
    "tea",
    "teacup",
    "tea kettle",
    "teaspoon",
    "tear",
    "temple",
    "tenticle",
    "tape",
    "tennis ball",
    "tangerine",
    "tendon",
    "tent",
    "target",
    "tadpole",
    "test",
    "tapioca",
    "till",
    "tire",
    "tile",
    "title",
    "thing",
    "thumb",
    "therapy",
    "thirst",
    "thimble",
    "telephone",
    "timber",
    "thug",
    "terminal",
    "time",
    "timer",
    "tenant",
    "tumbler",
    "tree",
    "turd",
    "turf",
    "turtle",
    "tonsil",
    "toe",
    "toenail",
    "twig",
    "ulcer",
    "uncle",
    "underwear",
    "union",
    "ukelele",
    "unicorn",
    "urn",
    "vase",
    "van",
    "vent",
    "verb",
    "vehicle",
    "vacuum",
    "venison",
    "vector",
    "visor",
    "vise",
    "varnish",
    "vampire",
    "voyage",
    "vest",
    "vestibule",
    "voice",
    "wafer",
    "water",
    "winery",
    "word",
    "wood",
    "wrapper",
    "wig",
    "weather",
    "witch",
    "wednesday"


]; 
