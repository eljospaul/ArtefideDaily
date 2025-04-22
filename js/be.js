const dailyWords = [
    { text: "For I know the plans I have for you, declares the Lord.", ref: "Jeremiah 29:11" },
    { text: "God doesn’t require us to succeed, He only requires that you try.", ref: "Quote" },
    { text: "Faith does not make things easy, it makes them possible.", ref: "Luke 1:37" },
    { text: "You are chosen. You are loved. You are enough.", ref: "Affirmation" },
    { text: "Worry ends where faith begins.", ref: "Christian Thought" },
    { text: "Jesus replied, ‘You do not realize now what I am doing, but later you will understand.’", ref: "John 13:7" },
    { text: "Let your faith be bigger than your fear.", ref: "Encouragement" },
    { text: "God is within her, she will not fall.", ref: "Psalm 46:5" },
    { text: "When God gives you a 'No', give Him a 'Thank you'.", ref: "Quote" }
  ];

  const backgrounds = [
    "https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602677416425-c84311bd217c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1611513940806-80d6ed9fd7cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521106581851-da5b6457f674?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1594453577255-635b3e699666?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524492514790-8310bf594ea4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527138235495-6f1b15f33051?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1539477857993-860599c2e840?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528184039930-bd03972bd974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

// Store today's quote and background
const todayKey = 'artefide-daily';
const historyKey = 'daily-history';
const maxHistory = dailyWords.length * backgrounds.length;

// Get local history
function getHistory(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

// Save to history
function saveHistory(key, item) {
  const history = getHistory(key);
  history.unshift(item); // Add to beginning
  if (history.length > maxHistory) history.pop(); // Maintain size
  localStorage.setItem(key, JSON.stringify(history));
}

// Generate unique pair
function generateUniqueCombo() {
  const history = getHistory(historyKey);
  let combo;
  let attempt = 0;
  do {
    const word = dailyWords[Math.floor(Math.random() * dailyWords.length)];
    const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    combo = { word, bg };
    attempt++;
    // Prevent infinite loop in rare case
    if (attempt > 1000) break;
  } while (history.find(h => h.word.text === combo.word.text && h.bg === combo.bg));
  return combo;
}

// Load today's content or set new one
function loadDaily() {
  const today = new Date().toDateString();
  let saved = JSON.parse(localStorage.getItem(todayKey));
  if (!saved || saved.date !== today) {
    saved = {
      ...generateUniqueCombo(),
      date: today
    };
    saveHistory(historyKey, saved);
    localStorage.setItem(todayKey, JSON.stringify(saved));
  }
  render(saved);
}

// Update DOM
function render({ word, bg }) {
  document.getElementById("intro").style.backgroundImage = `url(${bg})`;
  document.getElementById('dailyVerse').textContent = `"${word.text}"`;
  document.getElementById('dailyReference').textContent = `— ${word.ref}`;
}

// Call on page load
loadDaily();