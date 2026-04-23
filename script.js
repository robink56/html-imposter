const playerCountInput = document.getElementById("i1");
const imposterCountInput = document.getElementById("i2");
const startGameBtn = document.getElementById("btn1");

const nameSection = document.getElementById("nameSection");
const nameInputsDiv = document.getElementById("nameInputs");
const createRolesBtn = document.getElementById("createRolesBtn");

const roleSection = document.getElementById("roleSection");
const turnText = document.getElementById("turnText");
const showRoleBtn = document.getElementById("showRoleBtn");
const nextPlayerBtn = document.getElementById("nextPlayerBtn");
const roleCard = document.getElementById("roleCard");

const photoMap = {
  namrata: "images/Namrata.jpg",
  robin: "images/Robin.jpg",
  manita: "images/Manita.jpg",
  saurav: "images/Saurav.jpg",
  sajani: "images/Sajani.jpg"
};

const fruits = ["Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Cherry", "Coconut", "Fig", "Grape", "Grapefruit", "Guava", "Kiwi", "Lemon", "Lime", "Lychee", "Mango", "Melon", "Nectarine", "Orange", "Papaya", "Peach", "Pear", "Pineapple", "Plum", "Pomegranate", "Raspberry", "Strawberry", "Tangerine", "Watermelon", "Cranberry", "Date", "Dragonfruit", "Jackfruit", "Mandarin", "Mulberry", "Olive", "Passionfruit", "Persimmon", "Quince", "Starfruit", "Cantaloupe", "Clementine", "Currant", "Gooseberry", "Kumquat", "Pomelo", "Raisin", "Soursop", "Breadfruit"];

const vegetables = ["Carrot", "Potato", "Tomato", "Onion", "Garlic", "Ginger", "Cabbage", "Cauliflower", "Broccoli", "Spinach", "Lettuce", "Cucumber", "Pumpkin", "Radish", "Beetroot", "Turnip", "Pea", "Bean", "Corn", "Chili", "Pepper", "Mushroom", "Eggplant", "Zucchini", "Okra", "Celery", "Leek", "Parsnip", "Sweet potato", "Artichoke", "Asparagus", "Kale", "Mint", "Coriander", "Parsley", "Dill", "Basil", "Thyme", "Rosemary", "Sage", "Spring onion", "Green bean", "Brussels sprout", "Shallot", "Yam", "Cassava", "Fenugreek", "Turnip greens", "Swiss chard", "Bok choy"];

const foods = ["Rice", "Bread", "Noodle", "Pasta", "Pizza", "Burger", "Sandwich", "Soup", "Salad", "Curry", "Stew", "Porridge", "Pancake", "Waffle", "Omelet", "Sausage", "Bacon", "Cheese", "Butter", "Yogurt", "Biscuit", "Cookie", "Cake", "Brownie", "Muffin", "Pie", "Doughnut", "Candy", "Chocolate", "Popcorn", "Fries", "Ketchup", "Mustard", "Mayonnaise", "Jam", "Honey", "Pickle", "Toast", "Cereal", "Sushi", "Dumpling", "Meatball", "Lasagna", "Taco", "Burrito", "Nacho", "Pudding", "Custard", "Ice cream", "Jelly"];

const drinks = ["Water", "Juice", "Tea", "Coffee", "Milk", "Smoothie", "Lemonade", "Soda", "Cola", "Cocoa", "Shake", "Soup broth", "Espresso", "Latte", "Cappuccino", "Mocha", "Herbal tea", "Green tea", "Black tea", "Iced tea", "Energy drink", "Sports drink", "Milkshake", "Hot chocolate", "Apple juice", "Orange juice", "Grape juice", "Mango juice", "Pineapple juice", "Tomato juice", "Coconut water", "Mineral water", "Sparkling water", "Buttermilk", "Yogurt drink", "Lassi", "Malt drink", "Barley water", "Sugarcane juice", "Fruit punch", "Mocktail", "Soup cup", "Broth", "Bubble tea", "Iced coffee", "Cold brew", "Vanilla shake", "Strawberry shake", "Banana shake", "Peach tea"];

const animals = ["Dog", "Cat", "Cow", "Buffalo", "Goat", "Sheep", "Horse", "Donkey", "Pig", "Rabbit", "Mouse", "Rat", "Deer", "Monkey", "Tiger", "Lion", "Bear", "Fox", "Wolf", "Camel", "Elephant", "Giraffe", "Zebra", "Kangaroo", "Panda", "Koala", "Leopard", "Cheetah", "Hippo", "Rhino", "Squirrel", "Hedgehog", "Otter", "Mole", "Bat", "Yak", "Alpaca", "Llama", "Reindeer", "Moose", "Antelope", "Bison", "Badger", "Chipmunk", "Hamster", "Beaver", "Jaguar", "Panther", "Sloth", "Hyena"];

const birdsSea = ["Bird", "Crow", "Pigeon", "Sparrow", "Parrot", "Eagle", "Owl", "Duck", "Goose", "Hen", "Rooster", "Turkey", "Peacock", "Swan", "Falcon", "Penguin", "Seagull", "Woodpecker", "Kingfisher", "Robin", "Whale", "Dolphin", "Shark", "Fish", "Octopus", "Crab", "Lobster", "Shrimp", "Seal", "Walrus", "Jellyfish", "Squid", "Starfish", "Turtle", "Frog", "Toad", "Snake", "Lizard", "Crocodile", "Alligator", "Ant", "Bee", "Butterfly", "Spider", "Mosquito", "Fly", "Worm", "Beetle", "Dragonfly", "Grasshopper"];

const household = ["Chair", "Table", "Bed", "Sofa", "Shelf", "Cabinet", "Drawer", "Desk", "Lamp", "Fan", "Mirror", "Carpet", "Curtain", "Pillow", "Blanket", "Mattress", "Cushion", "Stool", "Bench", "Cupboard", "Plate", "Bowl", "Spoon", "Fork", "Knife", "Bottle", "Glass", "Mug", "Pan", "Pot", "Kettle", "Bucket", "Basket", "Broom", "Mop", "Towel", "Soap", "Brush", "Comb", "Razor", "Hanger", "Clock", "Calendar", "Frame", "Vase", "Candle", "Tray", "Tissue", "Napkin", "Doormat"];

const schoolOffice = ["Book", "Notebook", "Paper", "Pen", "Pencil", "Eraser", "Sharpener", "Marker", "Crayon", "Chalk", "Ruler", "Scissors", "Glue", "Tape", "Folder", "File", "Bag", "Backpack", "Board", "Desk lamp", "Printer", "Stapler", "Envelope", "Card", "Map", "Globe", "Dictionary", "Textbook", "Question paper", "Homework", "Project", "Lesson", "Classroom", "Teacher", "Student", "Exam", "Test", "Quiz", "Library", "Computer lab", "Blackboard", "Whiteboard", "Attendance", "Certificate", "Diploma", "Calculator", "Clipboard", "Highlighter", "Bookmark", "Badge"];

const electronics = ["Phone", "Mobile", "Laptop", "Tablet", "Computer", "Monitor", "Screen", "Keyboard", "Mouse", "Speaker", "Headphone", "Earphone", "Microphone", "Camera", "Printer", "Scanner", "Router", "Modem", "Television", "Remote", "Battery", "Charger", "Cable", "Wire", "Plug", "Switch", "Bulb", "Flashlight", "Clock radio", "Alarm", "Watch", "Smartwatch", "Calculator", "Gamepad", "Console", "Joystick", "Drone", "Projector", "Fan heater", "Iron", "Blender", "Mixer", "Toaster", "Oven", "Fridge", "Freezer", "Washing machine", "Dryer", "Vacuum", "Air conditioner"];

const clothes = ["Shirt", "Tshirt", "Pants", "Jeans", "Shorts", "Skirt", "Dress", "Jacket", "Coat", "Sweater", "Hoodie", "Scarf", "Cap", "Hat", "Socks", "Shoes", "Boots", "Sandals", "Slippers", "Gloves", "Belt", "Tie", "Suit", "Blazer", "Uniform", "Pajamas", "Raincoat", "Helmet", "Sweatshirt", "Leggings", "Kurta", "Saree", "Blouse", "Bra", "Underwear", "Vest", "Cardigan", "Beanie", "Turban", "Apron", "Mask", "Watch strap", "Necklace", "Ring", "Bracelet", "Earring", "Wallet", "Purse", "Backpack", "Umbrella"];

const places = ["Home", "House", "Room", "Kitchen", "Bathroom", "Bedroom", "Garden", "Garage", "Balcony", "Roof", "School", "College", "University", "Office", "Shop", "Market", "Mall", "Hospital", "Clinic", "Pharmacy", "Bank", "Post office", "Police station", "Fire station", "Library", "Cafe", "Restaurant", "Hotel", "Park", "Zoo", "Museum", "Temple", "Church", "Mosque", "Stadium", "Cinema", "Theater", "Gym", "Beach", "Forest", "Mountain", "Hill", "River", "Lake", "Island", "Village", "Town", "City", "Airport", "Station"];

const transport = ["Car", "Bus", "Train", "Plane", "Bike", "Bicycle", "Motorcycle", "Scooter", "Taxi", "Truck", "Van", "Boat", "Ship", "Helicopter", "Subway", "Metro", "Tram", "Rickshaw", "Ferry", "Canoe", "Kayak", "Skateboard", "Roller skates", "Wheelchair", "Ambulance", "Fire truck", "Police car", "Bulldozer", "Tractor", "Crane", "Rocket", "Spaceship", "Glider", "Yacht", "Jet", "Minibus", "School bus", "Pickup", "Lorry", "Cable car", "Elevator", "Escalator", "Cart", "Trolley", "Handcart", "Wheelbarrow", "Hovercraft", "Speedboat", "Sled", "Snowmobile"];

const jobs = ["Doctor", "Nurse", "Teacher", "Student", "Driver", "Pilot", "Chef", "Cook", "Farmer", "Gardener", "Police", "Soldier", "Firefighter", "Engineer", "Mechanic", "Electrician", "Plumber", "Carpenter", "Builder", "Painter", "Tailor", "Barber", "Hairdresser", "Singer", "Actor", "Dancer", "Writer", "Poet", "Artist", "Photographer", "Journalist", "Lawyer", "Judge", "Clerk", "Cashier", "Manager", "Boss", "Leader", "Guard", "Cleaner", "Waiter", "Waitress", "Baker", "Butcher", "Fisherman", "Dentist", "Scientist", "Programmer", "Designer", "Coach"];

const bodyHealth = ["Head", "Hair", "Face", "Eye", "Ear", "Nose", "Mouth", "Tooth", "Tongue", "Neck", "Shoulder", "Arm", "Elbow", "Hand", "Finger", "Thumb", "Chest", "Back", "Stomach", "Waist", "Leg", "Knee", "Foot", "Toe", "Bone", "Skin", "Blood", "Heart", "Brain", "Lung", "Liver", "Kidney", "Muscle", "Fever", "Cough", "Cold", "Pain", "Wound", "Medicine", "Tablet", "Syrup", "Bandage", "Needle", "Hospital bed", "Ambulance siren", "Exercise", "Sleep", "Breakfast", "Vitamin", "Soap"];

const natureWeather = ["Sun", "Moon", "Star", "Sky", "Cloud", "Rain", "Snow", "Wind", "Storm", "Thunder", "Lightning", "Rainbow", "Fog", "Mist", "Ice", "Fire", "Smoke", "Shadow", "Light", "Heat", "Cold", "River", "Ocean", "Sea", "Lake", "Pond", "Waterfall", "Island", "Beach", "Sand", "Stone", "Rock", "Mud", "Soil", "Tree", "Plant", "Leaf", "Root", "Flower", "Grass", "Forest", "Jungle", "Desert", "Valley", "Mountain", "Hill", "Cave", "Volcano", "Earthquake", "Weather"];

const sportsGames = ["Football", "Cricket", "Basketball", "Volleyball", "Tennis", "Badminton", "Baseball", "Hockey", "Rugby", "Golf", "Chess", "Carrom", "Ludo", "Puzzle", "Tag", "Hide and seek", "Race", "Jump", "Swim", "Run", "Walk", "Climb", "Throw", "Catch", "Kick", "Hit", "Score", "Goal", "Ball", "Bat", "Racket", "Net", "Whistle", "Referee", "Coach", "Player", "Team", "Captain", "Match", "Tournament", "Medal", "Trophy", "Gymnastics", "Skating", "Cycling", "Wrestling", "Boxing", "Karate", "Yoga", "Exercise"];

const actions = ["Run", "Walk", "Jump", "Sit", "Stand", "Sleep", "Wake", "Eat", "Drink", "Talk", "Listen", "Read", "Write", "Draw", "Sing", "Dance", "Laugh", "Cry", "Smile", "Shout", "Whisper", "Look", "Watch", "Open", "Close", "Push", "Pull", "Carry", "Throw", "Catch", "Climb", "Swim", "Drive", "Ride", "Fly", "Think", "Learn", "Teach", "Build", "Make", "Fix", "Break", "Find", "Lose", "Bring", "Send", "Call", "Meet", "Help", "Share"];

const adjectivesFeelings = ["Happy", "Sad", "Angry", "Calm", "Quiet", "Loud", "Fast", "Slow", "Big", "Small", "Tall", "Short", "Long", "Round", "Square", "Clean", "Dirty", "Soft", "Hard", "Hot", "Cold", "Warm", "Cool", "Wet", "Dry", "Sweet", "Sour", "Salty", "Bitter", "Spicy", "Bright", "Dark", "Heavy", "Light", "Strong", "Weak", "Rich", "Poor", "Young", "Old", "Funny", "Brave", "Shy", "Kind", "Lazy", "Busy", "Hungry", "Thirsty", "Tired", "Excited"];

const timeNumbersColors = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Morning", "Noon", "Evening", "Night", "Today", "Tomorrow", "Yesterday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Week", "Month", "Year", "Hour", "Minute", "Second", "Red", "Blue", "Green", "Yellow", "Black", "White", "Pink", "Purple", "Brown", "Gray", "Orange", "Silver", "Gold", "Early", "Late", "Now", "Soon", "Always"];

const dailyMisc = ["Friend", "Family", "Mother", "Father", "Brother", "Sister", "Baby", "Child", "Boy", "Girl", "Man", "Woman", "People", "Neighbor", "Guest", "Host", "Name", "Photo", "Picture", "Video", "Music", "Song", "Story", "News", "Idea", "Dream", "Love", "Hope", "Luck", "Money", "Coin", "Cash", "Card", "Ticket", "Gift", "Toy", "Doll", "Balloon", "Party", "Cake candle", "Letter", "Message", "Password", "Window glass", "Door lock", "House key", "Raincoat pocket", "Lunch box", "Water bottle", "Travel bag"];

const words = [
  ...fruits.map((word) => ({ word, hint: "Fruit" })),
  ...vegetables.map((word) => ({ word, hint: "Vegetable or herb" })),
  ...foods.map((word) => ({ word, hint: "Food" })),
  ...drinks.map((word) => ({ word, hint: "Drink" })),
  ...animals.map((word) => ({ word, hint: "Animal" })),
  ...birdsSea.map((word) => ({ word, hint: "Animal, bird, insect, or sea creature" })),
  ...household.map((word) => ({ word, hint: "Household item" })),
  ...schoolOffice.map((word) => ({ word, hint: "School or office item" })),
  ...electronics.map((word) => ({ word, hint: "Electronic device or machine" })),
  ...clothes.map((word) => ({ word, hint: "Clothing or accessory" })),
  ...places.map((word) => ({ word, hint: "Place" })),
  ...transport.map((word) => ({ word, hint: "Transport or vehicle" })),
  ...jobs.map((word) => ({ word, hint: "Job or role" })),
  ...bodyHealth.map((word) => ({ word, hint: "Body or health related" })),
  ...natureWeather.map((word) => ({ word, hint: "Nature or weather" })),
  ...sportsGames.map((word) => ({ word, hint: "Sport or game related" })),
  ...actions.map((word) => ({ word, hint: "Action word" })),
  ...adjectivesFeelings.map((word) => ({ word, hint: "Feeling or describing word" })),
  ...timeNumbersColors.map((word) => ({ word, hint: "Time, number, or color" })),
  ...dailyMisc.map((word) => ({ word, hint: "Common everyday word" }))
];

let players = [];
let roles = [];
let currentPlayerIndex = 0;

startGameBtn.addEventListener("click", function () {
  const playerCount = Number(playerCountInput.value);

  if (playerCount < 2) {
    alert("Please enter at least 2 players.");
    return;
  }

  imposterCountInput.value = 1;
  nameInputsDiv.innerHTML = "";

  for (let i = 1; i <= playerCount; i++) {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter player " + i + " name";
    input.classList.add("player-input");
    input.id = "player" + i;
    input.autocomplete = "off";

    const img = document.createElement("img");
    img.classList.add("preview-image");
    img.id = "preview" + i;
    img.alt = "Player photo";

    input.addEventListener("input", function () {
      showPreviewImage(input.value, img);
    });

    playerCard.appendChild(input);
    playerCard.appendChild(img);
    nameInputsDiv.appendChild(playerCard);
  }

  nameSection.classList.remove("hidden");
  roleSection.classList.add("hidden");
});

function showPreviewImage(name, imageElement) {
  const cleanName = name.trim().toLowerCase();

  if (photoMap[cleanName]) {
    imageElement.src = photoMap[cleanName];
    imageElement.style.display = "block";
  } else {
    imageElement.src = "";
    imageElement.style.display = "none";
  }
}

createRolesBtn.addEventListener("click", function () {
  const playerCount = Number(playerCountInput.value);
  players = [];

  for (let i = 1; i <= playerCount; i++) {
    const input = document.getElementById("player" + i);
    const name = input.value.trim();

    if (name === "") {
      alert("Please fill all player names.");
      return;
    }

    players.push(name);
  }

  generateRoles();
  currentPlayerIndex = 0;
  updateTurnText();

  nameSection.classList.add("hidden");
  roleSection.classList.remove("hidden");

  roleCard.style.display = "none";
  showRoleBtn.classList.remove("hidden");
  nextPlayerBtn.classList.add("hidden");
});

function generateRoles() {
  roles = [];

  const randomWordObject = words[Math.floor(Math.random() * words.length)];
  const secretWord = randomWordObject.word;
  const secretHint = randomWordObject.hint;

  const imposterIndex = Math.floor(Math.random() * players.length);

  for (let i = 0; i < players.length; i++) {
    if (i === imposterIndex) {
      roles.push({
        role: "Imposter",
        message: "You are the Imposter!",
        hint: secretHint
      });
    } else {
      roles.push({
        role: "Normal",
        message: "Your word is: " + secretWord,
        hint: ""
      });
    }
  }
}

function updateTurnText() {
  turnText.textContent = players[currentPlayerIndex] + ", click below to see your role.";
}

function getPlayerImageHTML(playerName) {
  const cleanName = playerName.trim().toLowerCase();

  if (photoMap[cleanName]) {
    return `<img src="${photoMap[cleanName]}" alt="${playerName}" class="role-image">`;
  }

  return "";
}

showRoleBtn.addEventListener("click", function () {
  const currentRole = roles[currentPlayerIndex];
  const playerName = players[currentPlayerIndex];
  const playerImage = getPlayerImageHTML(playerName);

  if (currentRole.role === "Imposter") {
    roleCard.innerHTML = `
      ${playerImage}
      <h3>${playerName}</h3>
      <p><strong>${currentRole.message}</strong></p>
      <p>Hint: ${currentRole.hint}</p>
    `;
  } else {
    roleCard.innerHTML = `
      ${playerImage}
      <h3>${playerName}</h3>
      <p><strong>${currentRole.message}</strong></p>
    `;
  }

  roleCard.style.display = "block";
  showRoleBtn.classList.add("hidden");
  nextPlayerBtn.classList.remove("hidden");
});

nextPlayerBtn.addEventListener("click", function () {
  currentPlayerIndex++;

  if (currentPlayerIndex < players.length) {
    roleCard.style.display = "none";
    showRoleBtn.classList.remove("hidden");
    nextPlayerBtn.classList.add("hidden");
    updateTurnText();
  } else {
    turnText.textContent = "All roles have been assigned. Game starts now!";
    roleCard.innerHTML = `
      <h3>Done!</h3>
      <p>Everyone has seen their role.</p>
      <p>Now start discussing and find the imposter.</p>
    `;
    roleCard.style.display = "block";
    showRoleBtn.classList.add("hidden");
    nextPlayerBtn.classList.add("hidden");
  }
});

console.log("Total words:", words.length);