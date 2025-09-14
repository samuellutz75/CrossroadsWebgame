const puzzles = [
  	{
    	unifier: "Fly",
    	categories: [
    	  { name: "Household Pest", terms: ["Ant", "Roach", "Wasp"] },
    	  { name: "Slang for Cool", terms: ["Dope", "Lit", "Rad"] },
    	  { name: "Part of Pants", terms: ["Button", "Pocket", "Seam"] },
    	  { name: "Outs in Baseball", terms: ["Ground", "Strike", "Tag"] },
    	],
  	},
  	{
    	unifier: "Short",
    	categories: [
    	  { name: "Synonyms for Small", terms: ["Little", "Petite", "Tiny"] },
    	  { name: "Actions on the Stock Market", terms: ["Buy", "Hold", "Sell"] },
    	  { name: "Forms of Media on YouTube", terms: ["Podcast", "Stream", "Video"] },
    	  { name: "Legwear Minus the S", terms: ["Jean", "Pant", "Tight"] },
    	],
  	},
  	{
    	unifier: "Bat",
    	categories: [
    	  { name: "___man Hero", terms: ["Super", "Iron", "Aqua"] },
    	  { name: "Baseball Equipment", terms: ["Glove", "Base", "Helmet"] },
    	  { name: "Spooky Animals", terms: ["Spider", "Owl", "Cat"] },
    	  { name: "Might be Upside Down", terms: ["Cake", "Australia", "Stranger Things"] },
    	],
  	},
  	{
   	 unifier: "Donut",
   	 categories: [
   	   { name: "Fried Pastries", terms: ["Beignet", "Churro", "Fritter"] },
   	   { name: "Driving Tricks", terms: ["Burnout", "Drift", "Wheelie"] },
    	  { name: "Hollow Cylindrical Shape", terms: ["Ring", "Torus", "Tube"] },
    	  { name: "Used to Replace a Flat Tire", terms: ["Jack", "Reflector", "Wrench"] },
    	],
  	},
  	{
    	unifier: "Palm",
    	categories: [
    	  { name: "Types of Trees", terms: ["Oak", "Pine", "Maple"] },
    	  { name: "Parts of a Hand", terms: ["Wrist", "Thumb", "Knuckle"] },
    	  { name: "Things You Might Read", terms: ["Room", "Book", "Mind"] },
    	  { name: "Days of the Week Modifier", terms: ["Ash", "Black", "Cyber"] },
    	],
  	},
	{
		unifier: "Pan",
		categories: [
			{ name: "Cookwear", terms: ["Wok", "Skillet", "Pot"] },
			{ name: "Minor Greek Gods", terms: ["Hypnos", "Thanatos", "Nike"] },
			{ name: "___Cake", terms: ["Fruit", "Cup", "Cheese"] },
			{ name: "Characters Named Peter", terms: ["Parker", "Rabbit", "Griffin"] },
		],
	},
	{
		unifier: "Link",
		categories: [
			{ name: "Chain ___", terms: ["Reaction", "Mail", "Smoker"] },
			{ name: "Might be Attached to an Email", terms: ["Image", "Document", "File"] },
			{ name: "Nintendo Franchise Leads", terms: ["Mario", "Kirby", "Samus"] },
			{ name: "To Fasten", terms: ["Bind", "Join", "Attach"] },
		],
	},
	{
		unifier: "Sack",
		categories: [
			{ name: "To Remove from Duty", terms: ["Fire", "Dismiss", "Discharge"] },
			{ name: "Bag", terms: ["Pack", "Pouch", "Tote"] },
			{ name: "Statistics for a Defensive Lineman (NFL)", terms: ["Tackle", "Pressure", "Hit"] },
			{ name: "To Ravage", terms: ["Pillage", "Loot", "Raid"] },
		],
	},
	{
		unifier: "Monitor",
		categories: [
			{ name: "To Watch", terms: ["Observe", "Scan", "Survey"] },
			{ name: "Parts of a PC", terms: ["Tower", "Keyboard", "Mouse"] },
			{ name: "Types of Lizards", terms: ["Skink", "Gecko", "Iguana"] },
			{ name: "Words that Might Follow Hall", terms: ["Pass", "Way", "Mark"] },
		],
	},
	{
		unifier: "Eagle",
		categories: [
			{ name: "Golden ___", terms: ["Gate", "Retriever", "Goose"] },
			{ name: "___ Eye", terms: ["Pink", "Black", "Stink"] },
			{ name: "Member of an NFL Team", terms: ["Jet", "Falcon", "Brown"] },
			{ name: "US Fighter Jets", terms: ["Tomcat", "Phantom", "Sabre"] },
		],
	},
	{
		unifier: "Pilot",
		categories: [
			{ name: "Whale Species", terms: ["Sperm", "Blue", "Killer"] },
			{ name: "Pen Brands", terms: ["BIC", "PaperMate", "Parker"] },
			{ name: "Openings", terms: ["Debut", "Premiere", "Launch"] },
			{ name: "Vehicle Operator", terms: ["Driver", "Captain", "Engineer"] },
		],
	},
	{
		unifier: "Odyssey",
		categories: [
			{ name: "Christopher Nolan Movies", terms: ["Interstellar", "Prestige", "Memento"] },
			{ name: "Adventure", terms: ["Journey", "Voyage", "Quest"] },
			{ name: "Space ___", terms: ["Shuttle", "Heater", "Bar"] },
			{ name: "Honda Models", terms: ["Civic", "Pilot", "Accord"] },
		],
	},
	{
		unifier: "Gemini",
		categories: [
			{ name: "AI Models", terms: ["ChatGPT", "Copilot", "DeepSeek"] },
			{ name: "NASA Manned Spaceflight Programs", terms: ["Mercury", "Apollo", "Artemis"] },
			{ name: "Zodiac Signs", terms: ["Cancer", "Taurus", "Leo"] },
			{ name: "Might be Twins", terms: ["Minnesota Cities", "Doppelganger", "Parent Trap"] },
		],
	},
	{
		unifier: "Slack",
		categories: [
			{ name: "Communication Apps", terms: ["Discord", "Teams", "Zoom"] },
			{ name: "___line", terms: ["Base", "Trend", "Pipe"] },
			{ name: "To be Lazy", terms: ["Idle", "Loaf", "Shirk"] },
			{ name: "Relaxed", terms: ["Flexible", "Loose", "Easygoing"] },
		],
	},
	{
		unifier: "League",
		categories: [
			{ name: "Association", terms: ["Coalition", "Alliance", "Union"] },
			{ name: "Antiquated Units of Length", terms: ["Furlong", "Cubit", "Span"] },
			{ name: "Organizational Tier in Sports", terms: ["Conference", "Division", "Team"] },
			{ name: "Out of your ___", terms: ["Mind", "Depth", "Element"] },
		],
	},
	{
		unifier: "Vine",
		categories: [
			{ name: "Short Form Social Media", terms: ["Instagram", "TikTok", "Musically"] },
			{ name: "Grape___", terms: ["Shot", "Seed", "Fruit"] },
			{ name: "Clingy Growths", terms: ["Lichen", "Moss", "Ivy"] },
			{ name: "Biblical Metaphors for Jesus", terms: ["Cornerstone", "Lamb", "Bread"] },
		],
	},
	{
		unifier: "Skeleton",
		categories: [
			{ name: "Made Partially out of Calcium", terms: ["Seashell", "Coral", "Limestone"] },
			{ name: "___ Key", terms: ["Answer", "House", "Low"] },
			{ name: "Winter Olympic Events", terms: ["Bobsleigh", "Curling", "Hockey"] },
			{ name: "Rudimentary Structure", terms: ["Scaffold", "Framework", "Outline"] },
		],
	},
	{
		unifier: "Terminal",
		categories: [
			{ name: "Life-Ending", terms: ["Fatal", "Lethal", "Mortal"] },
			{ name: "Parts of an Airport", terms: ["Tarmac", "Gate", "Hangar"] },
			{ name: "System Interaction Point", terms: ["Console", "Interface", "Controller"] },
			{ name: "Transportation Stops", terms: ["Station", "Depot", "Platform"] },
		],
	},
	{
		unifier: "Piano",
		categories: [
			{ name: "Things with Keys", terms: ["Florida", "Locks", "Maps"] },
			{ name: "Musical Instructions", terms: ["Forte", "Allegro", "Staccato"] },
			{ name: "Grand ___", terms: ["Canyon", "Jury", "Prize"] },
			{ name: "Keywords of Billy Joel Hits", terms: ["Uptown", "Fire", "Longest"] },
		],
	},
	{
		unifier: "Cardinal",
		categories: [
			{ name: "Member of MLB Team", terms: ["Yankee", "Padre", "Royal"] },
			{ name: "Backyard Birdwatching", terms: ["Robin", "Sparrow", "Blue Jay"] },
			{ name: "Catholic Church Positions", terms: ["Bishop", "Deacon", "Priest"] },
			{ name: "Synonyms for Main", terms: ["Primary", "Chief", "Principal"] },
		],
	},
	{
		unifier: "Reception",
		categories: [
			{ name: "Statistics for a Wide Receiver (NFL)", terms: ["Drop", "Touchdown", "Target"] },
			{ name: "-ist Professions", terms: ["Art", "Dent", "Journal"] },
			{ name: "Internet Access", terms: ["Service", "Signal", "Connection"] },
			{ name: "Parts of a Wedding", terms: ["Rehearsal", "Ceremony", "Registry"] },
		],
	},
	{
		unifier: "Charger",
		categories: [
			{ name: "Members of Relocated NFL Teams", terms: ["Ram", "Cardinal", "Raider"] },
			{ name: "American Muscle Cars", terms: ["Camaro", "Challenger", "Mustang"] },
			{ name: "Might be Plugged into a Laptop", terms: ["Mouse", "Headphones", "Drive"] },
			{ name: "Lightning ___", terms: ["Bug", "McQueen", "Bolt"] },
		],
	},
	{
		unifier: "Mole",
		categories: [
			{ name: "Skin Defect", terms: ["Wart", "Pimple", "Freckle"] },
			{ name: "Burrowing Animal", terms: ["Gopher ", "Badger", "Aardvark"] },
			{ name: "Someone Comitting Espionage", terms: ["Spy", "Plant", "Informant"] },
			{ name: "Numerical Quantities", terms: ["Score", "Gross", "Dozen"] },
		],
	},
	{
		unifier: "Clipper",
		categories: [
			{ name: "LA Sports Team", terms: ["King", "Dodger", "Charger"] },
			{ name: "Nail ___", terms: ["Gun", "Biter", "Polish"] },
			{ name: "Types of Sailing Ships", terms: ["Schooner", "Sloop", "Caravel"] },
			{ name: "Haircutting Tools", terms: ["Razor", "Shears", "Scissors"] },
		],
	},
	{
		unifier: "Connections",
		categories: [
			{ name: "NYT Games", terms: ["Wordle", "Strands", "Crossword"] },
			{ name: "Attachment Points", terms: ["Joints", "Links", "Couplings"] },
			{ name: "Social Links", terms: ["Acquaintances", "Contacts", "Allies"] },
			{ name: "Types of Flights", terms: ["Charters", "Red Eyes", "Internationals"] },
		],
	},
	{
		unifier: "Shield",
		categories: [
			{ name: "To Defend", terms: ["Protect", "Guard", "Shelter"] },
			{ name: "Canadian ___", terms: ["Goose", "Flag", "Bacon"] },
			{ name: "Marvel Comics Factions", terms: ["Hydra", "Aim", "Avengers"] },
			{ name: "Medieval Combat Equipment", terms: ["Armor", "Sword", "Dagger"] },
		],
	},
	{
		unifier: "Brush",
		categories: [
			{ name: "___ Fire", terms: ["Forest", "Dumpster", "House"] },
			{ name: "Hair___", terms: ["Line", "Dresser", "Cut"] },
			{ name: "Toilet ___", terms: ["Bowl", "Seat", "Paper"] },
			{ name: "___Stroke", terms: ["Back", "Heat", "Breast"] },
		],
	},
	{
		unifier: "Stream",
		categories: [
			{ name: "Jet___", terms: ["Lag", "Pack", "Ski"] },
			{ name: "Flowing Water", terms: ["River", "Creek", "Brook"] },
			{ name: "Methods of Media Access", terms: ["Broadcast", "Download", "Physical"] },
			{ name: "___ of Consciousness", terms: ["Loss", "State", "Level"] },
		],
	},
	{
		unifier: "Spider",
		categories: [
			{ name: "Variants of Solitaire", terms: ["Klondike", "Pyramid", "FreeCell"] },
			{ name: "Arachnids", terms: ["Scorpion", "Tick", "Harvestman"] },
			{ name: "Power Origins of Avengers", terms: ["Serum", "Radiation", "Worthiness"] },
			{ name: "Monsters Fought in Tolkien Books", terms: ["Wraith", "Dragon", "Goblin"] },
		],
	},
	{
		unifier: "Strike",
		categories: [
			{ name: "Bowling Terms", terms: ["Spare", "Double", "Turkey"] },
			{ name: "Objecting Rally", terms: ["Picket", "Protest", "Demonstration"] },
			{ name: "Things that Might Come in 3s", terms: ["Musketeer", "Wise Man", "Wish"] },
			{ name: "To Hit", terms: ["Smash", "Beat", "Knock"] },
		],
	},
	{
		unifier: "Counter",
		categories: [
			{ name: "Kitchen Workspaces", terms: ["Table", "Island", "Stovetop"] },
			{ name: "Defensive Move", terms: ["Parry", "Riposte", "Deflect"] },
			{ name: "___ Attack", terms: ["Panic", "Heart", "Sneak"] },
			{ name: "Verbal Disagreement", terms: ["Retort", "Rebuttal", "Protest"] },
		],
	},
	{
		unifier: "Bronco",
		categories: [
			{ name: "Horses", terms: ["Stallion", "Mustang", "Mare"] },
			{ name: "Ford Models", terms: ["Explorer", "Focus", "Ranger"] },
			{ name: "What the Mannings Were in the NFL", terms: ["Saint", "Colt", "Giant"] },
			{ name: "Associated with OJ Simpson", terms: ["Gloves", "Autobiography", "Heisman"] },
		],
	},
	{
		unifier: "Match",
		categories: [
			{ name: "Things you can Strike", terms: ["Deal", "Chord", "Pose"] },
			{ name: "Unit of Play", terms: ["Round", "Game", "Set"] },
			{ name: "Identical Pairs", terms: ["Twin", "Clone", "Copy"] },
			{ name: "___Box", terms: ["Juke", "Gear", "Lunch"] },
		],
	},
	{
		unifier: "Inclination",
		categories: [
			{ name: "Bias", terms: ["Tendency", "Preference", "Disposition"] },
			{ name: "Degree of Ascent", terms: ["Grade", "Angle", "Slope"] },
			{ name: "Orbital Parameters", terms: ["Apoapsis", "Eccentricity", "Longitude"] },
			{ name: "Settings on a Treadmill", terms: ["Speed", "Program", "Volume"] },
		],
	},
	{
		unifier: "Pound",
		categories: [
			{ name: "___Cake", terms: ["Short", "Beef", "Pan"] },
			{ name: "Units of Weight", terms: ["Carat", "Stone", "Gram"] },
			{ name: "Currencies", terms: ["Krone", "Yuan", "Peso"] },
			{ name: "To Hit", terms: ["Pummel", "Pelt", "Punch"] },
		],
	},
	{
		unifier: "Iron",
		categories: [
			{ name: "Golf Clubs", terms: ["Driver", "Wood", "Wedge"] },
			{ name: "To Dewrinkle Clothes", terms: ["Press", "Steam", "Hang"] },
			{ name: "Elements with Unintuitive Symbols", terms: ["Lead", "Tin", "Mercury"] },
			{ name: "Marvel __Man Characters", terms: ["Sand", "Ice", "Ant"] },
		],
	},
	{
		unifier: "Bridge",
		categories: [
			{ name: "Parts of a Song", terms: ["Chorus", "Verse", "Refrain"] },
			{ name: "Card Games", terms: ["Poker", "Rummy", "Solitaire"] },
			{ name: "Elevated Connection", terms: ["Span", "Trestle", "Overpass"] },
			{ name: "Parts of a Ship", terms: ["Keel", "Deck", "Hull"] },
		],
	},
	{
		unifier: "Ford",
		categories: [
			{ name: "To Pass Through", terms: ["Navigate", "Traverse", "Cross"] },
			{ name: "Star Wars Original Trilogy Actors", terms: ["Hamill", "Fisher", "Guinness"] },
			{ name: "Presidents Who Never Won a Presidential Election", terms: ["Tyler", "Fillmore", "Johnson"] },
			{ name: "Car Brands", terms: ["Lincoln", "Tesla", "Genesis"] },
		],
	},
	{
		unifier: "Burn",
		categories: [
			{ name: "Witty Insult", terms: ["Diss", "Roast", "Clapback"] },
			{ name: "Muscular Discomfort", terms: ["Ache", "Soreness", "Cramp"] },
			{ name: "___Out", terms: ["Black", "Work", "Sell"] },
			{ name: "Damage with Heat", terms: ["Scald", "Sear", "Melt"] },
		],
	},
	{
		unifier: "Express",
		categories: [
			{ name: "Polar ___", terms: ["Bear", "Coordinates", "Opposite"] },
			{ name: "___Way Roads", terms: ["High", "Free", "Park"] },
			{ name: "To Speak", terms: ["Voice", "Declare", "Convey"] },
			{ name: "Types of Trains", terms: ["Bullet", "Freight", "Commuter"] },
		],
	},
	{
		unifier: "Mercury",
		categories: [
			{ name: "Planets", terms: ["Jupiter", "Venus", "Mars"] },
			{ name: "Toxic Metal Elements", terms: ["Cadmium", "Lead", "Beryllium"] },
			{ name: "Defunct US Car Brands", terms: ["Saturn", "Pontiac", "Plymouth"] },
			{ name: "Pheonix Sports Teams", terms: ["Suns", "Cardinals", "Diamondbacks"] },
		],
	},
	{
		unifier: "Pepper",
		categories: [
			{ name: "Attack in Volume", terms: ["Bombard", "Pelt", "Shower"] },
			{ name: "Cooking Spices", terms: ["Paprika", "Salt", "Oregano"] },
			{ name: "Second Words of Soda Brands", terms: ["Dry", "Dew", "Pibb"] },
			{ name: "___Corn", terms: ["Pop", "Capri", "Uni"] },
		],
	},
	{
		unifier: "Shell",
		categories: [
			{ name: "Destroy with Explosives", terms: ["Bomb", "Strike", "Blast"] },
			{ name: "Sea___", terms: ["Horse", "Weed", "Foam"] },
			{ name: "Gas Station Chains", terms: ["Pilot", "Marathon", "Speedway"] },
			{ name: "Exterior", terms: ["Skin", "Rind", "Coating"] },
		],
	},
	{
		unifier: "Shower",
		categories: [
			{ name: "Rainfall", terms: ["Deluge", "Precipitation", "Storm"] },
			{ name: "Found in a Bathroom", terms: ["Mirror", "Tub", "Sink"] },
			{ name: "Baby ___", terms: ["Formula", "Monitor", "Bottle"] },
			{ name: "Group of Projectile Attacks", terms: ["Barrage", "Salvo", "Volley"] },
		],
	},
	{
		unifier: "Pickle",
		categories: [
			{ name: "___Ball Sports", terms: ["Basket", "Foot", "Volley"] },
			{ name: "Tricky Situation", terms: ["Jam", "Mess", "Bind"] },
			{ name: "Food Preservation Technique", terms: ["Brine", "Salt", "Ferment"] },
			{ name: "Things that Might be Spears", terms: ["Britney", "Asparagus", "Polearm"] },
		],
	},
	{
		unifier: "Tomato",
		categories: [
			{ name: "Animated Bobs", terms: ["Sponge", "Minion", "Builder"] },
			{ name: "Iconically Red", terms: ["Fire Truck", "Stop Sign", "Lobster"] },
			{ name: "Burger Toppings", terms: ["Onion", "Pickle", "Lettuce"] },
			{ name: "Foods that Grow on Vines", terms: ["Grape", "Cucumber", "Pumpkin"] },
		],
	},
	{
		unifier: "Crunch",
		categories: [
			{ name: "Fictional Captains", terms: ["America", "Hook", "Nemo"] },
			{ name: "Chocolate Bars", terms: ["Mars", "Snickers", "Heath"] },
			{ name: "To Bite", terms: ["Munch", "Chomp", "Gnaw"] },
			{ name: "Urgent Situation", terms: ["Pinch", "Squeeze", "Jam"] },
		],
	},
	{
		unifier: "Lincoln",
		categories: [
			{ name: "State Capitals", terms: ["Jackson", "Concord", "Madison"] },
			{ name: "Luxury Car Brands", terms: ["Acura", "Infiniti", "Lexus"] },
			{ name: "Types of Logs", terms: ["Natural", "Data", "Captain's"] },
			{ name: "People on US Currency", terms: ["Grant", "Washington", "Franklin"] },
		],
	},
	{
		unifier: "Maverick",
		categories: [
			{ name: "Dallas Professional Athlete", terms: ["Ranger", "Star", "Cowboy"] },
			{ name: "Nonconformist", terms: ["Bohemian", "Radical", "Individualist"] },
			{ name: "Top Gun Callsigns", terms: ["Goose", "Rooster", "Iceman"] },
			{ name: "US Truck Models", terms: ["Sierra", "Colorado", "Gladiator"] },
		],
	},
	{
		unifier: "Genesis",
		categories: [
			{ name: "Luxury Car Brands", terms: ["Audi", "Buick", "Porsche"] },
			{ name: "Old Testament Books", terms: ["Job", "Numbers", "Proverbs"] },
			{ name: "Beginning", terms: ["Origin", "Inception", "Birth"] },
			{ name: "Retro Game Consoles", terms: ["Atari", "Dreamcast", "GameCube"] },
		],
	},
	{
		unifier: "Carpenter",
		categories: [
			{ name: "Types of Bees", terms: ["Bumble", "Honey", "Stingless"] },
			{ name: "Titles Jesus Held", terms: ["Healer", "Preacher", "Messiah"] },
			{ name: "Tradesmen Involved in House Construction", terms: ["Roofer", "Electrician", "Plumber"] },
			{ name: "Pop Artists", terms: ["Swift", "Grande", "Rodrigo"] },
		],
	},
	{
		unifier: "Delta",
		categories: [
			{ name: "Parts of a River", terms: ["Bed", "Bank", "Mouth"] },
			{ name: "Airlines", terms: ["American", "United", "Frontier"] },
			{ name: "NATO Phonetic Alphabet", terms: ["Bravo", "Tango", "Foxtrot"] },
			{ name: "Associated with Triangles", terms: ["Bermuda", "Triforce", "Illuminati"] },
		],
	},
	{
		unifier: "Dressing",
		categories: [
			{ name: "Ingredients in a Salad", terms: ["Lettuce", "Tomato", "Carrot"] },
			{ name: "Rooms to Change In", terms: ["Locker", "Green", "Fitting"] },
			{ name: "Window ___", terms: ["Sill", "Pane", "Shade"] },
			{ name: "Wound Coverings", terms: ["Bandage", "Gauze", "Salve"] },
		],
	},
	{
		unifier: "Spirit",
		categories: [
			{ name: "Ghost", terms: ["Apparition", "Wraith", "Shade"] },
			{ name: "Airlines", terms: ["Allegiant", "Hawaiian", "Southwest"] },
			{ name: "Enthusiasm", terms: ["Fervor", "Zeal", "Ardor"] },
			{ name: "Words for Alcohol", terms: ["Liquor", "Booze", "Moonshine"] },
		],
	},
	{
		unifier: "Cast",
		categories: [
			{ name: "Staff for a Play", terms: ["Orchestra", "Stagehands", "Director"] },
			{ name: "Perform Magic", terms: ["Conjure", "Hex", "Curse"] },
			{ name: "Used to Stabilize an Injury", terms: ["Sling", "Splint", "Brace"] },
			{ name: "Metal Manufacturing Methods", terms: ["Print", "Stamp", "Mill"] },
		],
	},
	{
		unifier: "Strand",
		categories: [
			{ name: "Leave", terms: ["Maroon", "Desert", "Abandon"] },
			{ name: "String", terms: ["Fiber", "Filament", "Thread"] },
			{ name: "Unit of DNA", terms: ["Nucleotide", "Gene", "Chromosome"] },
			{ name: "Waterfront", terms: ["Beach", "Shore", "Coast"] },
		],
	},
	{
		unifier: "Buff",
		categories: [
			{ name: "Fan", terms: ["Enthusiast", "Aficionado", "Fanatic"] },
			{ name: "Slang for Muscular", terms: ["Jacked", "Built", "Ripped"] },
			{ name: "Gloss", terms: ["Polish", "Shine", "Burnish"] },
			{ name: "Naked", terms: ["Nude", "Exposed", "Bare"] },
		],
	},
	{
		unifier: "Pike",
		categories: [
			{ name: "Polearms", terms: ["Glaive", "Spear", "Halberd"] },
			{ name: "Fish", terms: ["Bass", "Trout", "Perch"] },
			{ name: "Turn___", terms: ["Stile", "Table", "Over"] },
			{ name: "Gymnastics Moves", terms: ["Bridge", "Tuck", "Split"] },
		],
	},
	{
		unifier: "Verse",
		categories: [
			{ name: "Uni___", terms: ["Corn", "Cycle", "Fier"] },
			{ name: "Subdivision of the Bible", terms: ["Testament", "Book", "Chapter"] },
			{ name: "Parts of a Song", terms: ["Chorus", "Bridge", "Coda"] },
			{ name: "NFL Defensive Rookie of the Year Winners", terms: ["Parsons", "Bosa", "Lattimore"] },
		],
	},
	{
		unifier: "Judge",
		categories: [
			{ name: "Old Testament Books, Singular", terms: ["Lamentation", "Psalm", "Chronicle"] },
			{ name: "Roles in a Courtroom", terms: ["Bailiff", "Prosecutor", "Jury"] },
			{ name: "Recent MLB MVPs", terms: ["Harper", "Ohtani", "Acuña"] },
			{ name: "Consider", terms: ["Assess", "Evaluate", "Criticize"] },
		],
	},
	{
		unifier: "Saturn",
		categories: [
			{ name: "Planets", terms: ["Neptune", "Jupiter", "Mars"] },
			{ name: "Defunct Car Brands", terms: ["Mercury", "Scion", "Oldsmobile"] },
			{ name: "NASA Rocket Families", terms: ["Atlas", "Delta", "Titan"] },
			{ name: "Associated with Rings", terms: ["Boxing", "Hobbit", "Bell"] },
		],
	},
	{
		unifier: "Silver",
		categories: [
			{ name: "Award Metals", terms: ["Bronze", "Gold", "Platinum"] },
			{ name: "Folklore Monster Weaknesses", terms: ["Iron", "Garlic", "Fire"] },
			{ name: "___Back Animals", terms: ["Leather", "Diamond", "Hump"] },
			{ name: "Professional Sports League Commissioners", terms: ["Goodell", "Manfred", "Bettman"] },
		],
	},
	{
		unifier: "Sting",
		categories: [
			{ name: "Lord of the Rings Weapon Names", terms: ["Glamdring", "Andúril", "Orcrist"] },
			{ name: "Types of Rays", terms: ["Manta", "X", "Gamma"] },
			{ name: "Law Enforcement Operations", terms: ["Sweep", "Raid", "Stakeout"] },
			{ name: "Sharp Pain", terms: ["Pang", "Twinge", "Prick"] },
		],
	},
	{
		unifier: "Twilight",
		categories: [
			{ name: "Late Day", terms: ["Evening", "Sunset", "Dusk"] },
			{ name: "__ Zone", terms: ["Friend", "Time", "Danger"] },
			{ name: "Ending", terms: ["Finale", "Coda", "Epilogue"] },
			{ name: "Fiction Featuring Vampires", terms: ["Blade", "Buffy", "Sinners"] },
		],
	},
	{
		unifier: "Titan",
		categories: [
			{ name: "Something Massive", terms: ["Colossus", "Giant", "Leviathan"] },
			{ name: "Nissan Models", terms: ["Leaf", "Kicks", "Rogue"] },
			{ name: "Moons of Saturn", terms: ["Enceladus", "Mimas", "Hyperion"] },
			{ name: "Member of a Blue NFL Team", terms: ["Lion", "Colt", "Bill"] },
		],
	},
	{
		unifier: "Thor",
		categories: [
			{ name: "Flying Avengers", terms: ["Falcon", "Vision", "Wasp"] },
			{ name: "Namesakes of Weekdays", terms: ["Sun", "Frigg", "Saturn"] },
			{ name: "ICBMs Repurposed for Manned Spaceflight", terms: ["Redstone", "Titan", "Atlas"] },
			{ name: "Pictured Wielding a Hammer", terms: ["John Henry", "Hephaestus", "Fix-It Felix"] },
		],
	},
	{
		unifier: "Letter",
		categories: [
			{ name: "Lexical Symbol", terms: ["Glyph", "Rune", "Character"] },
			{ name: "Written Message", terms: ["Epistle", "Memo", "Note"] },
			{ name: "Owner of Rented Property", terms: ["Proprietor", "Lessor", "Landlord"] },
			{ name: "Scarlet ___", terms: ["Witch", "Pimpernel", "Fever"] },
		],
	},
	{
		unifier: "Cooper",
		categories: [
			{ name: "Cheeses", terms: ["Feta", "Colby", "Brie"] },
			{ name: "Mini ___", terms: ["Golf", "Fridge", "Skirt"] },
			{ name: "Involved in Wine Making", terms: ["Cellarmaster", "Sommelier", "Viticulturist"] },
			{ name: "First Names of Eagles Stars", terms: ["Jalen", "Saquon", "DeVonta"] },
		],
	},
	{
		unifier: "Pencil",
		categories: [
			{ name: "Writing Implements", terms: ["Chalk", "Quill", "Marker"] },
			{ name: "Iconically Yellow", terms: ["School Bus", "Banana", "Tape Measure"] },
			{ name: "Types of Skirts", terms: ["Tulip", "Mini", "Mermaid"] },
			{ name: "Applications of Graphite", terms: ["Neutron Moderator", "Electrode", "Lubricant"] },
		],
	},
	{
		unifier: "Dodge",
		categories: [
			{ name: "___ball Sports", terms: ["Kick", "Soft", "Pickle"] },
			{ name: "To Avoid", terms: ["Shirk", "Sidestep", "Elude"] },
			{ name: "Dishonest Ploy", terms: ["Gambit", "Ruse", "Scheme"] },
			{ name: "Car Companies", terms: ["Ford", "Mini", "Jaguar"] },
		],
	},
	{
		unifier: "Crash",
		categories: [
			{ name: "Wreck", terms: ["Collision", "Pileup", "Accident"] },
			{ name: "Computer Failure", terms: ["Glitch", "Bug", "Error"] },
			{ name: "___ Out", terms: ["Pass", "Drop", "Freak"] },
			{ name: "2000s Best Picture Winners", terms: ["Gladiator", "Chicago", "Return of the King"] },
		],
	},
	{
		unifier: "Trench",
		categories: [
			{ name: "Types of Coats", terms: ["Over", "Pea", "Duffle"] },
			{ name: "___ Foot", terms: ["Athlete's", "Rabbit's", "Webbed"] },
			{ name: "Excavated Combat Fortification", terms: ["Foxhole", "Dugout", "Bunker"] },
			{ name: "Star Wars Admirals", terms: ["Thrawn", "Ackbar", "Holdo"] },
		],
	},
	{
		unifier: "Ring",
		categories: [
			{ name: "Boxing ___", terms: ["Glove", "Day", "Match"] },
			{ name: "Types of Lights", terms: ["Spot", "Flood", "Strobe"] },
			{ name: "Illegal Organization", terms: ["Syndicate", "Cartel", "Mob"] },
			{ name: "Famous Fictional McGuffins", terms: ["Holy Grail", "Tesseract", "Elder Wand"] },
		],
	},
	{
		unifier: "Shake",
		categories: [
			{ name: "To Shiver", terms: ["Shudder", "Tremble", "Quiver"] },
			{ name: "Ice Cream Desserts", terms: ["Cone", "Float", "Sundae"] },
			{ name: "Hand___", terms: ["Kerchief", "Cuffs", "Brake"] },
			{ name: "Keywords of Taylor Swift Songs", terms: ["Cruel", "Blank", "Anti-Hero"] },
		],
	},
	{
		unifier: "Frontier",
		categories: [
			{ name: "Limit", terms: ["Boundary", "Horizon", "Threshold"] },
			{ name: "Compact Pickup Trucks", terms: ["Ridgeline", "Tacoma", "Colorado"] },
			{ name: "Airlines", terms: ["Lufthansa", "Emirates", "Alaska"] },
			{ name: "Disney's Magic Kingdom ___land Regions", terms: ["Adventure", "Fantasy", "Tomorrow"] },
		],
	},
	{
		unifier: "Spoon",
		categories: [
			{ name: "Scooping Tool", terms: ["Ladle", "Shovel", "Trowel"] },
			{ name: "To Lie Close Together", terms: ["Snuggle", "Nuzzle", "Cuddle"] },
			{ name: "Tea___", terms: ["Berry", "Kettle", "Cup"] },
			{ name: "Used in a Prison Escape", terms: ["Key", "Bribe", "File"] },
		],
	},
	{
		unifier: "Crop",
		categories: [
			{ name: "Photo Editing Actions", terms: ["Rotate", "Filter", "Blur"] },
			{ name: "___ Top", terms: ["Tube", "Tank", "Halter"] },
			{ name: "Avian Digestive System", terms: ["Beak", "Gizzard", "Cloaca"] },
			{ name: "Types of Dusting", terms: ["Fingerprint", "Snow", "Furniture"] },
		],
	},
	{
		unifier: "Halo",
		categories: [
			{ name: "Hollow Circle", terms: ["Ring", "Band", "Hoop"] },
			{ name: "Associated with Angels", terms: ["Wings", "Harp", "Trumpet"] },
			{ name: "First Person Shooter Game Franchises", terms: ["Doom", "Destiny", "Battlefield"] },
			{ name: "Psychological Effects", terms: ["Pygmalion", "Placebo", "Bystander"] },
		],
	},
	{
		unifier: "Switch",
		categories: [
			{ name: "Control Inputs", terms: ["Button", "Dial", "Knob"] },
			{ name: "Swap", terms: ["Exchange", "Substitute", "Replace"] },
			{ name: "Railroad Intersection", terms: ["Turnout", "Junction", "Crossover"] },
			{ name: "___blade", terms: ["Roller", "Razor", "Fan"] },
		],
	},
	{
		unifier: "Friday",
		categories: [
			{ name: "Marvel AI Names", terms: ["Ultron", "Jarvis", "Vision"] },
			{ name: "Considered Unlucky", terms: ["Corvids ", "13", "Broken Mirror"] },
			{ name: "Black ___", terms: ["Magic", "Sabbath", "Widow"] },
			{ name: "Associated with Frigg", terms: ["Marriage", "Odin", "Prophecy"] },
		],
	},

  
];
export default puzzles;
