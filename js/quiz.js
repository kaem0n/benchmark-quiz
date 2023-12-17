const easyQuestions = [
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question: "Whose signature guitar technique is called the \"windmill\"?",
      correctAnswer: "Pete Townshend",
      incorrectAnswers: [
          "Jimmy Page",
          "Eddie Van Halen",
          "Jimi Hendrix"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "Which American-owned brewery led the country in sales by volume in 2015?",
      correctAnswer: "D. G. Yuengling and Son, Inc",
      incorrectAnswers: [
          "Anheuser Busch",
          "Boston Beer Company",
          "Miller Coors"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "In Kingdom Hearts the Paopu fruit is said to intertwine the destinies for two people forever.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "Who is the leader of the Brotherhood of Nod in the Command and Conquer series?",
      correctAnswer: "Kane",
      incorrectAnswers: [
          "Joseph Stalin",
          "CABAL",
          "Yuri"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question: "What is not a wind instrument?",
      correctAnswer: "Viola",
      incorrectAnswers: [
          "Oboe",
          "Trombone",
          "Duduk"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Comics",
      question: "In Black Hammer, what city did the heroes save from the Anti-God?",
      correctAnswer: "Spiral City",
      incorrectAnswers: [
          "Mega-City One",
          "Rockwood",
          "Star City"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "Who is the main protagonist of Dead Space?",
      correctAnswer: "Isaac Clarke",
      incorrectAnswers: [
          "Commander Shepard",
          "Gordon Freeman",
          "Master Chief"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "In the game Dead by Daylight, the killer Michael Myers is refered to as \"The Shape\".",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime & Manga",
      question: "What is the theme song of \"Neon Genesis Evangelion\"?",
      correctAnswer: "A Cruel Angel's Thesis",
      incorrectAnswers: [
          "Stardust Crusaders",
          "Requiem for a Dream",
          "God Knows"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "General Knowledge",
      question: "On average, at least 1 person is killed by a drunk driver in the United States every hour.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Mathematics",
      question: "The 'Squaring the Circle' problem is solvable.",
      correctAnswer: "False",
      incorrectAnswers: [
          "True"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Film",
      question: "Brandon Routh plays the titular character in the movie \"John Wick\".",
      correctAnswer: "False",
      incorrectAnswers: [
          "True"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Books",
      question: "What was the name of Captain Nemo's submarine in \"20,000 Leagues Under the Sea\"?",
      correctAnswer: "The Nautilus",
      incorrectAnswers: [
          "The Neptune",
          "The Poseidon  ",
          "The Atlantis"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Music",
      question: "Eurobeat is primarily an Italian genre of music.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Vehicles",
      question: "Which of the following car manufacturers had a war named after it?",
      correctAnswer: "Toyota",
      incorrectAnswers: [
          "Honda",
          "Ford",
          "Volkswagen"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "History",
      question: "When did the Battle of the Somme begin?",
      correctAnswer: "July 1st, 1916",
      incorrectAnswers: [
          "August 1st, 1916",
          "July 2nd, 1916",
          "June 30th, 1916"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "Animals",
      question: "Kangaroos keep food in their pouches next to their children.",
      correctAnswer: "False",
      incorrectAnswers: [
          "True"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "Area 51 is located in which US state?",
      correctAnswer: "Nevada",
      incorrectAnswers: [
          "Arizona",
          "New Mexico",
          "Utah"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Science & Nature",
      question: "What does LASER stand for?",
      correctAnswer: "Light amplification by stimulated emission of radiation",
      incorrectAnswers: [
          "Lite analysing by stereo ecorazer",
          "Light amplifier by standby energy of radio",
          "Life antimatter by standing entry of range"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "History",
      question: "What does the United States of America celebrate during the 4th of July?",
      correctAnswer: "The signing of the Declaration of Independence",
      incorrectAnswers: [
          "The anniversary of the Battle of Gettysburg",
          "The crossing of the Delaware River",
          "The ratification of the Constitution"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Animals",
      question: "What is the scientific name for modern day humans?",
      correctAnswer: "Homo Sapiens",
      incorrectAnswers: [
          "Homo Ergaster",
          "Homo Erectus",
          "Homo Neanderthalensis"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does LTS stand for in the software market?",
      correctAnswer: "Long Term Support",
      incorrectAnswers: [
          "Long Taco Service",
          "Ludicrous Transfer Speed",
          "Ludicrous Turbo Speed"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "In Super Mario Bros., who informs Mario that the princess is in another castle?",
      correctAnswer: "Toad",
      incorrectAnswers: [
          "Luigi",
          "Yoshi",
          "Bowser"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question: "What was the title of the first Bond movie, released in 1962?",
      correctAnswer: "Dr. No",
      incorrectAnswers: [
          "From Russia with Love",
          "Goldfinger",
          "Thunderball"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Who is the author of the manga series \"Astro Boy\"?",
      correctAnswer: "Osamu Tezuka",
      incorrectAnswers: [
          "Mitsuteri Yokoyama",
          "Takao Saito",
          "Yoshihiro Tatsumi"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "In past times, what would a gentleman keep in his fob pocket?",
      correctAnswer: "Watch",
      incorrectAnswers: [
          "Money",
          "Keys",
          "Notebook"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "What was the first game in the \"Battlefield\" series?",
      correctAnswer: "Battlefield 1942",
      incorrectAnswers: [
          "Battlefield Vietnam",
          "Battlefield 2",
          "Battlefield 1"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "What war is Call Of Duty: Black Ops based on?",
      correctAnswer: "Cold War",
      incorrectAnswers: [
          "WW3",
          "Vietnam",
          "WW1"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question: "According to the American rapper Nelly, what should you do when its hot in here?",
      correctAnswer: "Take off all your clothes",
      incorrectAnswers: [
          "Take a cool shower",
          "Drink some water",
          "Go skinny dipping"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question: "Which brass instrument has the lowest pitch in an orchestra?",
      correctAnswer: "Tuba",
      incorrectAnswers: [
          "Trumpet",
          "Saxophone",
          "Trombone"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question: "Who plays Jack Burton in the movie \"Big Trouble in Little China?\"",
      correctAnswer: "Kurt Russell",
      incorrectAnswers: [
          "Patrick Swayze",
          "John Cusack",
          "Harrison Ford"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Which of the following originated as a manga?",
      correctAnswer: "Akira",
      incorrectAnswers: [
          "Cowboy Bebop",
          "High School DxD",
          "Gurren Lagann"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "What Nationality is D.Va from Overwatch?",
      correctAnswer: "Korean",
      incorrectAnswers: [
          "Japanese",
          "Chinese",
          "Vietnamese "
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "Which of these covert groups employs Sam Fisher to work as a Splinter Cell?",
      correctAnswer: "Third Echelon",
      incorrectAnswers: [
          "Voron",
          "Black Arrow",
          "The Engineers"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Mythology",
      question: "The ancient Roman god of war was commonly known as which of the following?",
      correctAnswer: "Mars",
      incorrectAnswers: [
          "Jupiter",
          "Juno",
          "Ares"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime & Manga",
      question: "What caused the titular mascot of Yo-Kai Watch, Jibanyan, to become a yokai?",
      correctAnswer: "Being run over by a truck",
      incorrectAnswers: [
          "Ate one too many chocobars",
          "Through a magical ritual",
          "When he put on the harmaki"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Sports",
      question: "This Canadian television sportscaster is known for his \"Hockey Night in Canada\" role, a commentary show during hockey games.",
      correctAnswer: "Don Cherry",
      incorrectAnswers: [
          "Don McKellar",
          "Don Taylor ",
          "Donald Sutherland"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Cartoon & Animations",
      question: "Bill Cipher in the show \"Gravity Falls\" is the good guy.",
      correctAnswer: "False",
      incorrectAnswers: [
          "True"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question: "Who plays Alice in the Resident Evil movies?",
      correctAnswer: "Milla Jovovich",
      incorrectAnswers: [
          "Madison Derpe",
          "Milla Johnson",
          "Kim Demp"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question: "For the film \"Raiders of The Lost Ark\", what was Harrison Ford sick with during the filming of the Cairo chase?",
      correctAnswer: "Dysentery",
      incorrectAnswers: [
          "Anemia",
          "Constipation",
          "Acid Reflux "
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Geography",
      question: "How many stars are featured on New Zealand's flag?",
      correctAnswer: "4",
      incorrectAnswers: [
          "5",
          "2",
          "0"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Geography",
      question: "What is the Capital of the United States?",
      correctAnswer: "Washington, D.C.",
      incorrectAnswers: [
          "Los Angelas, CA",
          "New York City, NY",
          "Houston, TX"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "Who is the youngest person to recieve a Nobel Prize?",
      correctAnswer: "Malala Yousafzai",
      incorrectAnswers: [
          "Lawrence Bragg",
          "Werner Heisenberg",
          "Yasser Arafat"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "General Knowledge",
      question: "One of Donald Trump's 2016 Presidential Campaign promises was to build a border wall between the United States and Mexico.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "General Knowledge",
      question: "It is automatically considered entrapment in the United States if the police sell you illegal substances without revealing themselves.",
      correctAnswer: "False",
      incorrectAnswers: [
          "True"
      ]
  },
  {
      type: "boolean",
      difficulty: "easy",
      category: "Science & Nature",
      question: "An atom contains a nucleus.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Television",
      question: "In Star Trek: The Next Generation, what is the name of Data's cat?",
      correctAnswer: "Spot",
      incorrectAnswers: [
          "Mittens",
          "Tom",
          "Kitty"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What amount of bits commonly equals one byte?",
      correctAnswer: "8",
      incorrectAnswers: [
          "1",
          "2",
          "64"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: "Which character in the \"Animal Crossing\" series uses the phrase \"zip zoom\" when talking to the player?",
      correctAnswer: "Scoot",
      incorrectAnswers: [
          "Drake",
          "Bill",
          "Mallary"
      ]
  },
  {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "Which one of these is not a typical European sword design?",
      correctAnswer: "Scimitar",
      incorrectAnswers: [
          "Falchion",
          "Ulfberht",
          "Flamberge"
      ]
  }
]



const mediumQuestions = [
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Film",
      question: "Which 90's comedy cult classic features cameos appearances from Meat Loaf, Alice Cooper and Chris Farley?",
      correctAnswer: "Wayne's World",
      incorrectAnswers: [
          "Bill & Ted's Excellent Adventure",
          "Dumb and Dumber",
          "Austin Powers: International Man of Mystery"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "In the game series \"The Legend of Zelda\", what was the first 3D game?",
      correctAnswer: "Ocarina of Time",
      incorrectAnswers: [
          "Majora's Mask",
          "A Link to the Past",
          "The Wind Waker"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "Which Iron Maiden album did the song \"Dream of Mirrors\" feature in?",
      correctAnswer: "Brave New World",
      incorrectAnswers: [
          "Dance of Death",
          "A Matter of Life and Death",
          "Somewhere in Time"
      ]
  },
  {
      type: "boolean",
      difficulty: "medium",
      category: "Science & Nature",
      question: "Sugar contains fat.",
      correctAnswer: "False",
      incorrectAnswers: [
          "True"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "How many time zones are in Russia?",
      correctAnswer: "11",
      incorrectAnswers: [
          "8",
          "5",
          "2"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "How many bits make up the significand portion of a single precision floating point number?",
      correctAnswer: "23",
      incorrectAnswers: [
          "8",
          "53",
          "15"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "How many timezones does Russia have?",
      correctAnswer: "11",
      incorrectAnswers: [
          "6",
          "24",
          "16"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "What song on ScHoolboy Q's album Black Face LP featured Kanye West?",
      correctAnswer: "THat Part",
      incorrectAnswers: [
          "Neva CHange",
          "Big Body",
          "Blank Face"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "EDM record label Monstercat is based in which country?",
      correctAnswer: "Canada",
      incorrectAnswers: [
          "United States",
          "Australia",
          "United Kingdom"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Television",
      question: "What is the surname of the character Daryl in AMC's show The Walking Dead?",
      correctAnswer: "Dixon",
      incorrectAnswers: [
          "Grimes",
          "Dickinson",
          "Dicketson"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "History",
      question: "Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?",
      correctAnswer: "Brazil",
      incorrectAnswers: [
          "India",
          "Mozambique",
          "Madagascar"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Board Games",
      question: "In \"Magic: The Gathering\", what instant card has the highest converted mana cost?",
      correctAnswer: "Blinkmoth Infusion",
      incorrectAnswers: [
          "Vitalizing Wind",
          " Chant of Vitu-Ghazi",
          "Assert Authority"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "The walls of the Goldenrod City Gym in \"Pokémon Gold and Silver\" are arranged in the shape of which Pokémon?",
      correctAnswer: "Clefairy",
      incorrectAnswers: [
          "Bulbasaur",
          "Pikachu",
          "Pidgey"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "In Kingdom Hearts which of the following people can NOT wield a keyblade?",
      correctAnswer: "Larxene",
      incorrectAnswers: [
          "Xehanort",
          "Lea",
          "Mickey"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Which of these programming languages is a low-level language?",
      correctAnswer: "Assembly",
      incorrectAnswers: [
          "Python",
          "C#",
          "Pascal"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "Where did the pineapple plant originate?",
      correctAnswer: "South America",
      incorrectAnswers: [
          "Hawaii",
          "Europe",
          "Asia"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
      correctAnswer: "India",
      incorrectAnswers: [
          "United States of America",
          "Soviet Union",
          "Poland"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime & Manga",
      question: "What sport is being played in the Anime Eyeshield 21?",
      correctAnswer: "American Football",
      incorrectAnswers: [
          "Baseball",
          "Football",
          "Basketball"
      ]
  },
  {
      type: "boolean",
      difficulty: "medium",
      category: "Entertainment: Television",
      question: "The television show Doctor Who first aired in 1963.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "History",
      question: "Which of the following countries was the first to send an object into space?",
      correctAnswer: "Germany",
      incorrectAnswers: [
          "USA",
          "Russia",
          "China"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Sports",
      question: "How many French Open's did Björn Borg win?",
      correctAnswer: "6",
      incorrectAnswers: [
          "4",
          "9",
          "2"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "Which essential condiment is also known as Japanese horseradish?",
      correctAnswer: "Wasabi ",
      incorrectAnswers: [
          "Mentsuyu",
          "Karashi",
          "Ponzu"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "In Left 4 Dead, which campaign has the protagonists going through a subway in order to reach a hospital for evacuation?",
      correctAnswer: "No Mercy",
      incorrectAnswers: [
          "Subway Sprint",
          "Hospital Havoc",
          "Blood Harvest"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime & Manga",
      question: "In the anime, \"Super Sonico\", what is Super Sonico's favorite food?",
      correctAnswer: "Macroons",
      incorrectAnswers: [
          "Ice Cream",
          "Pizza",
          "Chips"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Animals",
      question: "The now extinct species \"Thylacine\" was native to where?",
      correctAnswer: "Tasmania, Australia",
      incorrectAnswers: [
          "Baluchistan, Pakistan",
          "Wallachia, Romania",
          "Oregon, United States"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "Which ones of these Mario Kart games was made for the Gameboy Advance?",
      correctAnswer: "Mario Kart: Super Circuit",
      incorrectAnswers: [
          "Mario Kart: Double Dash",
          "Mario Kart 64",
          "Super Mario Kart"
      ]
  },
  {
      type: "boolean",
      difficulty: "medium",
      category: "Vehicles",
      question: "When BMW was established in 1916, it was producing automobiles.",
      correctAnswer: "False",
      incorrectAnswers: [
          "True"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "In Forza Motorsport 6, which of these track-exclusive cars was NOT featured in the game, either originally with the game or added as DLC?",
      correctAnswer: "Aston Martin Vulcan",
      incorrectAnswers: [
          "Ferrari FXX-K",
          "McLaren P1 GTR",
          "Lotus E23"
      ]
  },
  {
      type: "boolean",
      difficulty: "medium",
      category: "Science & Nature",
      question: "The Doppler effect applies to light.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Who voices the character \"Reigen\"  in the English dub of \"Mob Psycho 100\"?",
      correctAnswer: "Chris Niosi",
      incorrectAnswers: [
          "Max Mittelman",
          "Kyle McCarley",
          "Casey Mongillo"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "In August 1964, who introduced the Beatles to cannabis?",
      correctAnswer: "Bob Dylan",
      incorrectAnswers: [
          "Jim Morrison",
          "Brian Epstein",
          "Jerry Garcia"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "If you play the Super Mario RPG and nap in a rented hotel room, you will wake up next to what familiar looking character?",
      correctAnswer: "Link",
      incorrectAnswers: [
          "Wario",
          "Q*bert",
          "Solid Snake"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "In Overwatch, what is Lúcio's full name?",
      correctAnswer: "Lúcio Correia Dos Santos",
      incorrectAnswers: [
          "Lúcio Luiz Lós Guilherme",
          "Lúcio João Lucas",
          "Lúcio Chupar Prima"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "Which of the following is not a megadiverse country - one that harbors a high number of the earth's endemic species?",
      correctAnswer: "Thailand",
      incorrectAnswers: [
          "Peru",
          "Mexico",
          "South Africa"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Musicals & Theatres",
      question: "Which of these musicals won the Tony Award for Best Musical?",
      correctAnswer: "Rent",
      incorrectAnswers: [
          "The Color Purple",
          "American Idiot",
          "Newsies"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Books",
      question: "What is the make and model of the tour vehicles in \"Jurassic Park\" (1990)?",
      correctAnswer: "1989 Toyota Land Cruiser",
      incorrectAnswers: [
          "1989 Jeep Wrangler YJ Sahar",
          "1989 Ford Explorer XLT",
          "Mercedes M-Class"
      ]
  },
  {
      type: "boolean",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "Green Day's album 'American Idiot' is considered a \"punk rock opera.\"",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Science & Nature",
      question: "What is the scientific term for 'taste'?",
      correctAnswer: "Gustatory Perception",
      incorrectAnswers: [
          "Olfaction",
          "Somatosensation",
          "Auditory Perception"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Which of these is not a world in the anime \"Buddyfight\"?",
      correctAnswer: "Ancient Dragon World",
      incorrectAnswers: [
          "Dragon World",
          "Star Dragon World",
          "Darkness Dragon World"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "What is the name of the machine that fails and essentially dooms mankind in the beginning of the first Half-Life game?",
      correctAnswer: "Anti-mass spectrometer",
      incorrectAnswers: [
          "Oscillation generator",
          "Dark fusion reactor",
          "Dark fusion resonator"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "On average, Americans consume 100 pounds of what per second?",
      correctAnswer: "Chocolate",
      incorrectAnswers: [
          "Potatoes",
          "Donuts",
          "Cocaine"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Science & Nature",
      question: "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
      correctAnswer: "8 Minutes",
      incorrectAnswers: [
          "6 Minutes",
          "2 Minutes",
          "12 Minutes"
      ]
  },
  {
      type: "boolean",
      difficulty: "medium",
      category: "Vehicles",
      question: "The snowmobile was invented by Canadian Joseph-Armand Bombardier in 1937.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "Which genre is the Touhou Project associated with?",
      correctAnswer: "Shoot 'em up (bullet-hell) & Fighting",
      incorrectAnswers: [
          "Turn-Based Strategy",
          "MMORPG",
          "Building "
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "Which of these artists was NOT a member of the electronic music supergroup Swedish House Mafia, which split up in 2013?",
      correctAnswer: "Alesso",
      incorrectAnswers: [
          "Steve Angello",
          "Sebastian Ingrosso",
          "Axwell"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Politics",
      question: "What is former United States President Bill Clinton's full name?",
      correctAnswer: "William Jefferson Clinton",
      incorrectAnswers: [
          "William Roosevelt Clinton",
          "William Truman Clinton",
          "William Lincoln Clinton"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Science & Nature",
      question: "Which of the following men does not have a chemical element named after him?",
      correctAnswer: "Sir Isaac Newton",
      incorrectAnswers: [
          "Albert Einstein",
          "Niels Bohr",
          "Enrico Fermi"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Which internet company began life as an online bookstore called 'Cadabra'?",
      correctAnswer: "Amazon",
      incorrectAnswers: [
          "eBay",
          "Overstock",
          "Shopify"
      ]
  },
  {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "Which of these Japanese islands is the largest by area?",
      correctAnswer: "Shikoku",
      incorrectAnswers: [
          "Iki",
          "Odaiba",
          "Okinawa"
      ]
  },
  {
      type: "boolean",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime & Manga",
      question: "In \"JoJo's Bizarre Adventure\", Father Enrico Pucchi uses a total of 3 stands in Part 6: Stone Ocean.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  }
]



const hardQuestions = [
  {
      type: "multiple",
      difficulty: "hard",
      category: "Science & Nature",
      question: "What genetic disease is caused by having an extra Y chromosome (XYY)?",
      correctAnswer: "Jacob's Syndrome",
      incorrectAnswers: [
          "Klinefelter's Syndrome",
          "Turner's Syndrome",
          "Down Syndrome"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "The word \"aprosexia\" means which of the following?",
      correctAnswer: "The inability to concentrate on anything",
      incorrectAnswers: [
          "The inability to make decisions",
          "A feverish desire to rip one's clothes off",
          "The inability to stand up"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Animals",
      question: "What type of creature is a Bonobo?",
      correctAnswer: "Ape",
      incorrectAnswers: [
          "Lion",
          "Parrot",
          "Wildcat"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "In the MMO RPG \"Realm of the Mad God\", what dungeon is widely considered to be the most difficult?",
      correctAnswer: "The Shatter's",
      incorrectAnswers: [
          "Snake Pit",
          "The Tomb of the Acient's",
          "The Puppet Master's Theater"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "History",
      question: "What did the abbreviation \"RMS\" stand for in the RMS Titanic in 1912?",
      correctAnswer: "Royal Mail Ship",
      incorrectAnswers: [
          "Royal Majesty Service",
          "Regular Maritime Schedule ",
          "Regulated Maelstrom Sensor"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Television",
      question: "In season one of the US Kitchen Nightmares, Gordan Ramsay tried to save 10 different restaurants. How many ended up closing afterwards?",
      correctAnswer: "9",
      incorrectAnswers: [
          "6",
          "3",
          "0"
      ]
  },
  {
      type: "boolean",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "The names of Roxas's Keyblades in Kingdom Hearts are \"Oathkeeper\" and \"Oblivion\".",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Who is the horror manga artist who made Uzumaki?",
      correctAnswer: "Junji Ito",
      incorrectAnswers: [
          "Kazuo Umezu",
          "Shintaro Kago",
          "Sui Ishida"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "History",
      question: "What was the real name of the Albanian national leader Skanderbeg?",
      correctAnswer: "Gjergj Kastrioti",
      incorrectAnswers: [
          "Diturak Zhulati",
          "Iskander Bejko",
          "Mirash Krasniki"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Japanese Anime & Manga",
      question: "In the anime, Full Metal Panic!, who is Kaname's best friend?",
      correctAnswer: "Kyoko Tokiwa",
      incorrectAnswers: [
          "Melissa Mao",
          "Ren Mikihara",
          "Teletha \"Tessa\" Testarossa"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Which animation studio produced \"Log Horizon\"?",
      correctAnswer: "Satelite",
      incorrectAnswers: [
          "Sunrise",
          "Xebec",
          "Production I.G"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "What programming language was used to create the game \"Minecraft\"?",
      correctAnswer: "Java",
      incorrectAnswers: [
          "HTML 5",
          "C++",
          "Python"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "In the video game \"Metal Gear Solid\", what did Revolver Ocelot consider the greatest handgun ever made?",
      correctAnswer: "Colt Single Action Army",
      incorrectAnswers: [
          "Colt Python",
          "Colt M1892",
          "Colt 1851 Navy Revolver"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Science & Nature",
      question: "Which of the following are cells of the adaptive immune system?",
      correctAnswer: "Cytotoxic T cells",
      incorrectAnswers: [
          "Dendritic cells",
          "Natural killer cells",
          "White blood cells"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Animals",
      question: "What was the name of the Ethiopian Wolf before they knew it was related to wolves?",
      correctAnswer: "Simien Jackel",
      incorrectAnswers: [
          "Ethiopian Coyote",
          "Amharic Fox",
          "Canis Simiensis"
      ]
  },
  {
      type: "boolean",
      difficulty: "hard",
      category: "History",
      question: "The fourth funnel of the RMS Titanic was fake designed to make the ship look more powerful and symmetrical.",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Geography",
      question: "Which of these cities is NOT in England?",
      correctAnswer: "Edinburgh",
      incorrectAnswers: [
          "Oxford",
          "Manchester",
          "Southampton"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question: "What Magic: The Gathering card's flavor text is just 'Ribbit.'?",
      correctAnswer: "Turn to Frog",
      incorrectAnswers: [
          "Spore Frog",
          "Bloated Toad",
          "Frogmite"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Vehicles",
      question: "Which Audi does not use Haldex based all wheel drive system?",
      correctAnswer: "Audi A8",
      incorrectAnswers: [
          "Audi TT",
          "Audi S3",
          "Audi A3"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Which of these anime have over 7,500 episodes?",
      correctAnswer: "Sazae-san",
      incorrectAnswers: [
          "Naruto",
          "One Piece",
          "Chibi Maruko-chan"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "Which of these Pokémon cannot learn Surf?",
      correctAnswer: "Arbok",
      incorrectAnswers: [
          "Linoone",
          "Tauros",
          "Nidoking"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Which of the following computer components can be built using only NAND gates?",
      correctAnswer: "ALU",
      incorrectAnswers: [
          "CPU",
          "RAM",
          "Register"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Vehicles",
      question: "What year did the Chevrolet LUV mini truck make its debut?",
      correctAnswer: "1972",
      incorrectAnswers: [
          "1982",
          "1975",
          "1973"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Geography",
      question: "What is the area of Vatican City?",
      correctAnswer: "0.44km^2",
      incorrectAnswers: [
          "0.10km^2",
          "0.86km^2",
          "12.00km^2"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question: "What was the development code name for the \"Urza's Destiny\" expansion for \"Magic: The Gathering\", released in 1999?",
      correctAnswer: "Chimichanga",
      incorrectAnswers: [
          "Burrito",
          "Taquito",
          "Enchilada"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "In \"Call Of Duty: Zombies\", which map's opening cutscene shows \"Richtofen\" killing another version of himself?",
      correctAnswer: "The Giant",
      incorrectAnswers: [
          "Shadows Of Evil",
          "Der Eisendrache",
          "Moon"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "In the \"Little Lost Girl\" Easter Egg in Call of Duty: Black Ops II, what's the last step required for the achievement?",
      correctAnswer: "Raise Hell",
      incorrectAnswers: [
          "Freedom",
          "Skewer the Winged Beast",
          "Ascend from Darkness"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Animals",
      question: "What scientific suborder does the family Hyaenidae belong to?",
      correctAnswer: "Feliformia",
      incorrectAnswers: [
          "Haplorhini",
          "Caniformia",
          "Ciconiiformes"
      ]
  },
  {
      type: "boolean",
      difficulty: "hard",
      category: "Geography",
      question: "The two largest ethnic groups of Belgium are Flemish and Walloon. ",
      correctAnswer: "True",
      incorrectAnswers: [
          "False"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "What is the fastest speed possible in Trackmania²: Stadium?",
      correctAnswer: "1000  km/h",
      incorrectAnswers: [
          "500 km/h",
          "320 km/h",
          "100 km/h"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Which one of these characters is from \"Legendz : Tale of the Dragon Kings\"?",
      correctAnswer: "Shiron",
      incorrectAnswers: [
          "Jack",
          "Axia",
          "Drum"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "\"Exile\" and \"Revelations\" were the third and fourth installments of which PC game series?",
      correctAnswer: "Myst",
      incorrectAnswers: [
          "Shivers",
          "Doom",
          "Tropico"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Geography",
      question: "What year is on the flag of the US state Wisconsin?",
      correctAnswer: "1848",
      incorrectAnswers: [
          "1634",
          "1783",
          "1901"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question: "What was the last Marx Brothers film to feature Zeppo?",
      correctAnswer: "Duck Soup",
      incorrectAnswers: [
          "A Night at the Opera",
          "A Day at the Races",
          "Monkey Business"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Music",
      question: "Which of these artists did NOT remix the song \"Faded\" by Alan Walker?",
      correctAnswer: "Skrillex",
      incorrectAnswers: [
          "Tiësto",
          "Slushii",
          "Dash Berlin"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "What is the name of the main character in the video game VA-11 HALL-A: Cyberpunk Bartender Action?",
      correctAnswer: "Jill",
      incorrectAnswers: [
          "Dana",
          "Alma",
          "Anna"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "What is the name of your team in Star Wars: Republic Commando?",
      correctAnswer: "Delta Squad",
      incorrectAnswers: [
          "The Commandos",
          "Bravo Six",
          "Vader's Fist"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "Which of the following games in the The Legend of Zelda franchise was released in Japan before North America?",
      correctAnswer: "The Legend of Zelda: The Minish Cap",
      incorrectAnswers: [
          "The Legend of Zelda: Twilight Princess",
          "The Legend of Zelda: Spirit Tracks",
          "The Legend of Zelda: Four Swords"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Geography",
      question: "Which of these is NOT a province in China?",
      correctAnswer: "Yangtze",
      incorrectAnswers: [
          "Fujian",
          "Sichuan",
          "Guangdong"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "How long are all the cutscenes from Metal Gear Solid 4 (PS3, 2008) combined?",
      correctAnswer: "8 hours",
      incorrectAnswers: [
          "4 hours",
          "12 hours",
          "5 hours"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Music",
      question: "In the Panic! At the Disco's song \"Nothern Downpour\", which lyric follows 'I know the world's a broken bone'.",
      correctAnswer: "\"So melt your headaches call it home\"",
      incorrectAnswers: [
          "\"So sing your song until you're home\"",
          "\"So let them know they're on their own\"",
          "\"So start a fire in their cold stone\""
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "Where is Apple Inc. headquartered?",
      correctAnswer: "Cupertino, California",
      incorrectAnswers: [
          "Redwood City, California",
          "Redmond, Washington",
          "Santa Monica, CA"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "In the indie farming game \"Stardew Valley\", which NPC hates the \"prismatic shard\" item when received as a gift?",
      correctAnswer: "Haley",
      incorrectAnswers: [
          "Abigail ",
          "Elliott",
          "Lewis"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "In the Team Fortress 2 canon, what did Shakespearicles NOT invent?",
      correctAnswer: "Stairs",
      incorrectAnswers: [
          "Two-Story Building",
          "Rocket Launcher",
          "Stage Play"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Vehicles",
      question: "Which Variable Valve Timing technology is used by BMW?",
      correctAnswer: "VANOS",
      incorrectAnswers: [
          "VVT-iw",
          "VVEL",
          "MultiAir"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question: "How long was the World Record Speed Run of Valve Software's \"Half-Life\" that was done in 2014.",
      correctAnswer: "20 Minutes, 41 Seconds",
      incorrectAnswers: [
          "45 Minutes, 32 Seconds",
          "5 Minutes, 50 Seconds",
          "12 Minutes, 59 Seconds"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Mathematics",
      question: "The French mathematician évariste Galois is primarily known for his work in which?",
      correctAnswer: "Galois Theory",
      incorrectAnswers: [
          "Galois' Continued Fractions",
          "Galois' Method for PDE's ",
          "Abelian Integration"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Animals",
      question: "Which of the following is another name for the \"Poecilotheria Metallica Tarantula\"?",
      correctAnswer: "Gooty",
      incorrectAnswers: [
          "Hopper",
          "Silver Stripe",
          "Woebegone"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question: "Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?",
      correctAnswer: "Dave",
      incorrectAnswers: [
        "John",
        "Will",
        "Carl"
      ]
  },
  {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question: "In \"Star Trek Nemesis\", why was Praetor Shinzon created?",
      correctAnswer: "To replace Picard as a Romulan Agent",
      incorrectAnswers: [
        "To destroy the Enterprise",
        "To become Picard's friend ",
        "To steal the Enterprise"
      ]
  }
]
  
const difficulty = localStorage.getItem('difficulty')
const ptMultiplier = localStorage.getItem('ptMultiplier')
const numberOfQuestions = localStorage.getItem('numberOfQuestions')

console.log('difficulty:', difficulty, 'ptmult:', ptMultiplier, 'questions:', numberOfQuestions)

// BUTTON CLICK BEHAVIOR

const unselected = function () {
  const previousClicked = document.getElementsByClassName('clicked')[0]
  if (previousClicked) {
    previousClicked.classList.remove('clicked')
  }
}

const selected = function (e) {
  unselected()
  e.target.classList.add('clicked')
}

// QUESTION GENERATOR

const questionContainer = document.getElementById('question-container')
const h1 = document.getElementById('question')
const h2 = document.getElementById('category')
const form = document.getElementById('question-form')
const tracker = document.getElementById('tracker')
const quizEnd = document.getElementById('quiz-end')

let questions = []
if (difficulty === '1') {
  questions = [...easyQuestions]
} else if (difficulty === '2') {
  questions = [...mediumQuestions]
} else if (difficulty === '3') {
  questions = [...hardQuestions]
}

let index = 0
let result = 0
let score = 0

const questionGen = function () {

  // MAIN STRUCTURE GENERATION

  if (index === parseInt(numberOfQuestions)-1) {
    questionContainer.classList.add('invisible')
    quizEnd.classList.remove('invisible')
    quizEnd.innerHTML = `
    <form action="./results.html">
    <span>Congratulations! You reached the end! <br/>
    You scored <strong class="red semibold">${result}</strong> points!</span>
    <button class="special">GO TO RESULTS</button>
    </form>
    `
    clearInterval(timer)
  } else {
    h1.innerText = questions[index].question
    h2.innerHTML = `<strong class="red">Category:</strong> ${questions[index].category}`
    form.innerHTML = `
    <div id="button-container"></div>
    <button class="special">CONFIRM</button>
    `
    tracker.innerHTML = `Question ${index+1}<span class="red">/${numberOfQuestions}</span>`
    
    // BUTTON GEN CODE - randomizes the position of the correct answer in type:multiple questions
    
    const buttonContainer = document.getElementById('button-container')
    const questionsAnswers = [questions[index].correctAnswer, ...questions[index].incorrectAnswers]
    let numberOfButtons = questionsAnswers.length
    if (numberOfButtons === 2) { // case specific for type:boolean questions
    buttonContainer.innerHTML = `
    <button onclick="selected(event)" type="button" class="answers">True</button>
    <button onclick="selected(event)" type="button" class="answers">False</button>
    `
    const buttons = document.getElementsByClassName('answers')
    if (questions[index].correctAnswer === buttons[0].innerText) {
        buttons[0].classList.add('correct')
    } else {
        buttons[1].classList.add('correct')
    }
    } else {
    let n = 4
    for (let i=0; i<4; i++) {
        const answerButton = document.createElement('button')
        answerButton.setAttribute('onclick', 'selected(event)')
        answerButton.setAttribute('type', 'button')
        answerButton.classList.add('answers')
        answerButton.innerText = questionsAnswers[Math.floor(Math.random() * n)]
        questionsAnswers.splice(questionsAnswers.indexOf(answerButton.innerText), 1)
        if (answerButton.innerText === questions[index].correctAnswer) {
        answerButton.classList.add('correct')
        }
        buttonContainer.appendChild(answerButton)
        n--
    }
    }
    index++
    console.log('index:', index)
  }
}

questionGen() // FIRST QUESTION ON PAGE LOAD

let counter
if (questions[index].type === 'boolean') {
    counter = 30
} else {
    counter = 60
}

// SUBMIT EVENT LISTENER

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const answerButton = document.getElementsByClassName('clicked')[0]
    if (answerButton && answerButton.className === 'answers correct clicked') {
        answerButton.classList.remove('clicked')
        result += parseInt(ptMultiplier)
        score++
        localStorage.setItem('score', score)
        localStorage.setItem('result', result)
        console.log('result:', result, 'score:', score)
    } else if (answerButton) {
        answerButton.classList.remove('clicked')
    }
    if (questions[index].type === 'boolean') {
        counter = 30
    } else {
        counter = 60
    }
    questionGen()
})

// TIMER 

const clockContainer1 = document.getElementById('clock')
const clockContainer2 = document.getElementById('circle')
const timerText = document.getElementById('timer-text')

const timer = setInterval(function () {
    timerText.innerHTML = `seconds <br />
    <strong class="big">${counter-1}</strong> <br />
    remaining</span>`
    counter -= 1
    if (counter === 0) {
        const answerButton = document.getElementsByClassName('clicked')[0]
        if (answerButton && answerButton.className === 'answers correct clicked') {
            answerButton.classList.remove('clicked')
            result += parseInt(ptMultiplier)
            score++
            localStorage.setItem('score', score)
            localStorage.setItem('result', result)
            console.log('result:', result, 'score:', score)
        } else if (answerButton) {
            answerButton.classList.remove('clicked')
        }
        if (questions[index].type === 'boolean') {
            counter = 30
        } else {
            counter = 60
        }
        questionGen()
    }
}, 1000)














// const questionForms = document.getElementsByClassName('question')
// const questionContainers = document.getElementsByClassName('question-container')
// const answers = document.getElementsByClassName('answers')



// let counter = 20
// let index = 0
// const clock = document.createElement('span')
// const timer = setInterval(function () {
//   clockContainer1.style.background = `conic-gradient(rgba(255, 255, 255, 0.3) ${
//     100 - ((counter-1) * 5)
//   }%, rgba(157,12,12,1) 0)`
//   placeholder.classList.add('invisible')
//   clock.innerHTML = `seconds <br />
//   <strong class="big">${counter-1}</strong> <br />
//   remaining`
//   counter -= 1
//   if (index === 10) {
//     clearInterval(timer)
//   } else if (counter === 0) {
//     const timerText = document.createElement('span')
//     timerText.innerText = 'Capra!'
//     timerText.classList.add('wrong-text')
//     console.log('index', index)
//     questionContainers[index].appendChild(timerText)
//     questionForms[index].classList.add('invisible')
//     if (questionForms[index+1]) {
//       const submitButton = questionForms[index+1].querySelector('.special')
//       submitButton.classList.remove('invisible')
//       const answerButtons = questionForms[index+1].querySelectorAll('.answers')
//       for (let i=0; i<answerButtons.length; i++) {
//         answerButtons[i].removeAttribute('disabled')
//       }
//     } else {
//       const quizEnd = document.getElementById('quiz-end')
//       quizEnd.classList.remove('invisible')
//       clock.innerHTML = `<br /><strong class="big">END</strong>`
//       clearInterval(timer)
//     }
//     counter = 21
//     index += 1
//     console.log('index', index)
//   }
// }, 1000)

// for (let i=0; i<questionForms.length; i++) {
//   questionForms[i].addEventListener('submit', function (e) {
//     e.preventDefault()
//     const correctText = document.createElement('span')
//     correctText.innerText = 'Corretto!'
//     correctText.classList.add('correct-text')
//     const wrongText = document.createElement('span')
//     wrongText.innerText = 'Capra!'
//     wrongText.classList.add('wrong-text')
//     for (let j=0; j<answers.length; j++) {
//       if (questionForms[i+1]) {
//         const answerButtons = questionForms[i+1].querySelectorAll('.answers')
//         for (let k=0; k<answerButtons.length; k++) {
//           answerButtons[k].removeAttribute('disabled')
//         }
//       }
//       if (answers[j].className === 'answers correct clicked') {
//         questionContainers[i].appendChild(correctText)
//         wrongText.innerText = ''
//         questionForms[i].classList.add('invisible')
//         answers[j].classList.remove('clicked')
//         result += 10
//       } else {
//         questionContainers[i].appendChild(wrongText)
//         questionForms[i].classList.add('invisible')
//       }
//     }
//     if (questionForms[i+1]) {
//       const submitButton = questionForms[i+1].querySelector('.special')
//       submitButton.classList.remove('invisible')
//       counter = 21
//     } else {
//       const quizEnd = document.getElementById('quiz-end')
//       quizEnd.classList.remove('invisible')
//       clock.innerHTML = `<br /><strong>END</strong>`
//       clearInterval(timer)
//     }
//     localStorage.setItem('result', result)
//     console.log(localStorage)
//     index += 1
//     localStorage.setItem('index', index)
//     console.log(index)
//   })
// }

// localStorage.setItem('multiplier', multiplier)
// localStorage.setItem('scoreToPass', scoreToPass)
// clockContainer2.appendChild(clock)