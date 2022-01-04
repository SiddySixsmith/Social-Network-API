const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Smith",
  "Jones",
  "Coollastname",
  "enter_name_here",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  "Xander",
  "Jared",
  "Courtney",
  "Gillian",
  "Clark",
  "Jared",
  "Grace",
  "Kelsey",
  "Tamar",
  "Alex",
  "Mark",
  "Tamar",
  "Farish",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const thought = [
  "Decision Tracker",
  "Find My Phone",
  "Learn Piano",
  "Starbase Defender",
  "Tower Defense",
  "Monopoly Money Manager",
  "Movie trailers",
  "Hello world",
  "Stupid Social Media App",
  "Notes",
  "Messages",
  "Email",
  "Compass",
  "Firefox",
  "Running app",
  "Cooking app",
  "Poker",
  "Deliveries",
];

const reaction = [
  "I disagree!",
  "yes I love this!",
  "you high?",
  "wow my guy, you need to reevaluate everything",
  "1/5",
  "There is absolutely no way this is correct",
  "9 out of 10 voices in my head tell me I’m crazy. The tenth is just humming.",
  "After Tuesday, even the calendar says WTF.",
  "Don’t you hate it when someone answers their own questions? I do.",
  "6:30 is the best time on a clock, hands down.",
  "I used to think I was indecisive. But now I’m not so sure.",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
  `${getRandomArrItem(names)}.${getRandomArrItem(names)}`;

const getRandomThought = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thought),
      username: getRandomUsername(),
      reactions: [...getReactions(3)],
    });
  }
  return results;
};

const getReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(reaction);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(reaction),
      username: getRandomUsername(),
    });
  }
  return results;
};

module.exports = { getRandomUsername, getRandomThought };
