/* ================= EDIT THIS BLOCK FIRST ================= */
const CONFIG = {
  brand: "Energy Salt",
  brandShort: "Energy Salt",
  brandHi: "Chakra Healing",
  orderFormUrl: "https://forms.gle/jAEpTEKHVr25nvf99",
  whatsapp: "",                             // e.g. "919876543210" (country code, no + sign). UPI order details are sent here.
  contactPhone: "+919029690456",
  contactEmail: "energysalt.in@gmail.com",
  address: "Bhilai, India",
  packWeight: "250 g",
  shipping: "Free",
  maxQty: 10,
  heroPhoto: "",                            // Optional: URL of a light photo behind the hero. Leave blank to show the chakra artwork.
  chakraPhotos: [
    "images/root.jpg",
    "images/sacral.jpg",
    "images/solar.jpg",
    "images/heart.jpg",
    "images/throat.jpg",
    "images/thirdeye.jpg",
    "images/crown.jpg"
  ],
  setPhoto: "images/all charas photo.PNG",       // Photo of all seven packets together, shown on the Complete 7 Chakra Set card. Leave blank to show small packets.
  products: {
    set: {
      name: "Complete 7 Chakra Set", tag: "Complete Practice", badge: "Best Value",
      price: 19000, mrp: 19000, unit: "7 packets",
      blurb: "All seven chakra salts, red to violet, for your daily practice and your shelf.",
      perks: ["Seven colour-toned salts, one per chakra", "250 g of salt in every packet", "Printed guide to the seven chakras", "Free delivery across India"]
    },
    single: {
      name: "Single Chakra Salt", tag: "Start Here", badge: "",
      price: 3000, mrp: 3000, unit: "1 packet",
      blurb: "Start with the one chakra you want to focus on.",
      perks: ["Choose any one of the seven chakras", "250 g packet of colour-toned salt", "Pairs with any other chakra salt"]
    },
    home: {
      name: "Home Energy Salt", tag: "For Home Mopping", badge: "",
      price: 5000, mrp: 5000, unit: "1 packet",
      blurb: "Home Energy Salt for mopping, made with essential oil.",
      perks: ["500 gm packet", "Made with essential oil", "For home and office mopping"]
    },
    bath: {
      name: "Bath Energy Salt", tag: "For Your Bath", badge: "",
      price: 5000, mrp: 5000, unit: "1 packet",
      blurb: "Bath Energy Salt for your bathing and self-care routine.",
      perks: ["500 gm packet", "Made with essential oil", "For bath or foot soak"]
    }
  },
  delivery: "Orders are dispatched within 2 business days and usually arrive in 5 to 7 business days across India.",
  returns: "If your order arrives damaged, message us within 48 hours with a photo and we will replace it.",
  edibleAnswer: "These salts are made for bath, meditation and ritual use. Please do not use them in food.",
  gallery: [],                              // e.g. [{ src: "jars.jpg", caption: "The full set" }]. Section stays hidden while empty.
  showSampleNote: false                      // Set to false once you add real reviews and photos.
};

/* Each review: stars, title, text, name, city. To show a real photo instead of initials, add photo: "URL". */
const REVIEWS = [
  { "stars": 5, "title": "सकारात्मक अनुभव", "text": "Energy Salt का उपयोग करना मेरे लिए एक अच्छा अनुभव रहा है। इसे अपनी दिनचर्या में शामिल करके मुझे अपने लिए कुछ समय निकालने और सकारात्मक विचारों के साथ दिन बिताने की प्रेरणा मिलती है।", "name": "Abhishek", "city": "Bhilai" },
  { "stars": 5, "title": "रिलैक्सेशन और सुकून", "text": "दिनभर की व्यस्तता के बाद Energy Salt के साथ फुट सोक करना मुझे अच्छा लगता है। यह मेरी रिलैक्सेशन और सेल्फ-केयर रूटीन का एक खास हिस्सा बन गया है।", "name": "M Subba Rao", "city": "Bhilai" },
  { "stars": 5, "title": "चक्र और ध्यान की दिनचर्या", "text": "मुझे Energy Salt की चक्र-आधारित अवधारणा पसंद आई। ध्यान, मेडिटेशन और सकारात्मक संकल्प के साथ इसका उपयोग करना मेरी व्यक्तिगत वेलनेस रूटीन को और अर्थपूर्ण बनाता है।", "name": "Piyush Gupta", "city": "Raipur" },
  { "stars": 5, "title": "प्रीमियम क्वालिटी और पैकेजिंग", "text": "Energy Salt की पैकेजिंग काफी आकर्षक और प्रीमियम लगती है। इसका कॉन्सेप्ट भी अलग है। मुझे ऐसे प्रोडक्ट पसंद हैं जो रोजमर्रा की सेल्फ-केयर को खास अनुभव बनाते हैं।", "name": "Nitin Jain", "city": "Jaipur" },
  { "stars": 5, "title": "सकारात्मक संकल्प", "text": "Energy Salt के साथ सकारात्मक संकल्प लेना मुझे अच्छा लगता है। यह मुझे कुछ पल रुककर अपने विचारों, लक्ष्यों और दिन की शुरुआत पर ध्यान देने का अवसर देता है।", "name": "Pooja Tiwari", "city": "Gondia" },
  { "stars": 5, "title": "अनोखा वेलनेस कॉन्सेप्ट", "text": "Energy Salt का विचार मुझे काफी रोचक लगा। इसे अपनी व्यक्तिगत दिनचर्या में शामिल करना अच्छा लगता है। इसकी अवधारणा इसे सामान्य सेल्फ-केयर प्रोडक्ट्स से अलग पहचान देती है।", "name": "Shweta", "city": "Mumbai" },
  { "stars": 5, "title": "My Personal Energy Ritual", "text": "Energy Salt has become a special part of my personal ritual. I love taking a few quiet moments for myself and setting positive intentions. It makes my self-care routine feel more meaningful.", "name": "Namrata Bhalerao", "city": "London" },
  { "stars": 5, "title": "A Premium Wellness Experience", "text": "What caught my attention was the unique concept of Energy Salt. The presentation feels premium, and I appreciate products that bring together thoughtful design and personal well-being.", "name": "Anand", "city": "UK" },
  { "stars": 5, "title": "खुद के लिए खास समय", "text": "आज की भागदौड़ भरी जिंदगी में खुद के लिए समय निकालना जरूरी है। Energy Salt के साथ अपनी छोटी-सी वेलनेस रूटीन बनाना मुझे अच्छा लगता है और मुझे अपने लिए समय निकालने की याद दिलाता है।", "name": "Dipti Mahalas", "city": "Durg" },
  { "stars": 5, "title": "ओवरऑल अनुभव", "text": "Energy Vastu के Energy Salt की अवधारणा मुझे पसंद आई। इसकी प्रेजेंटेशन और उपयोग का तरीका इसे एक अलग अनुभव बनाते हैं। जो लोग ध्यान, सकारात्मक संकल्प और सेल्फ-केयर में रुचि रखते हैं, उनके लिए यह एक दिलचस्प विकल्प हो सकता है।", "name": "Piyush", "city": "Durg" },
  { "stars": 5, "title": "कुछ अलग", "text": "Energy Salt अपने अनोखे वेलनेस कॉन्सेप्ट की वजह से अलग नज़र आता है। मुझे इस प्रोडक्ट के पीछे की भावना पसंद आई और यह विचार भी कि रोज़ की सेल्फ-केयर को ज़्यादा सजग और व्यक्तिगत बनाया जाए।", "name": "Garima", "city": "Raipur" },
  { "stars": 5, "title": "सकारात्मक सोच के साथ शुरुआत", "text": "मुझे अपनी Energy Salt रूटीन को सकारात्मक संकल्पों और सजग इरादों के साथ जोड़ना अच्छा लगता है। अपनी पर्सनल केयर की शुरुआत ज़्यादा जागरूकता के साथ करने का यह एक सरल तरीका है।", "name": "Nagendra Chandrakar", "city": "Dhamtari" },
  { "stars": 5, "title": "एक सोच-समझकर चुना गया वेलनेस गिफ्ट", "text": "मुझे ऐसे वेलनेस प्रोडक्ट पसंद हैं जिनका उद्देश्य साफ़ हो और जिनकी प्रस्तुति सुंदर हो। जो लोग सजग जीवन और पर्सनल-केयर रिचुअल्स में रुचि रखते हैं, उनके लिए Energy Salt एक दिलचस्प विकल्प है।", "name": "Sunil Jain", "city": "Jaipur" },
  { "stars": 5, "title": "एक सोच-समझकर बना प्रोडक्ट", "text": "मुझे Energy Salt के पीछे की सोच पसंद आई, जो लोगों को अपने लिए समय निकालने के लिए प्रेरित करती है। इसका पूरा कॉन्सेप्ट सोच-समझकर बनाया गया लगता है और सजग वेलनेस में मेरी रुचि से मेल खाता है।", "name": "Ayush Gupta", "city": "Bhopal" },
  { "stars": 5, "title": "A Moment of Calm", "text": "In my busy schedule, I value small moments of peace. I enjoy using Energy Salt as part of my relaxation routine, along with quiet time and mindful breathing.", "name": "Shamima", "city": "Dubai" },
  { "stars": 5, "title": "My Evening Wind-Down", "text": "I enjoy incorporating Energy Salt into my evening foot-soak routine. It gives me an opportunity to pause after a long day and dedicate some time to myself.", "name": "Swati", "city": "Dubai" }
];
/* =============================================================== */

const CHAKRAS = [
  { hi:"Muladhara", en:"Root Chakra", short:"Root", color:"#D6403A", petals:4, salt:"Muladhar Chakra Salt", location:"Base of the spine", element:"Earth", mantra:"LAM", focus:"Grounding, stability, feeling safe",
    about:"The root chakra is the foundation of the whole system. In yogic tradition it is linked with security, home, the body and your basic needs. When you feel scattered or unsettled, this is the centre practitioners return to first.",
    use:"Keep a small bowl of the red salt near your seat during grounding practice, or add a pinch to a footbath at the end of a long day.",
    affirm:"I am safe. I am steady. I belong here." },
  { hi:"Svadhisthana", en:"Sacral Chakra", short:"Sacral", color:"#EE7B30", petals:6, salt:"Energy Salt (Swadhisthan Chakra)", location:"Lower abdomen, below the navel", element:"Water", mantra:"VAM", focus:"Creativity, pleasure, emotional flow",
    about:"The sacral chakra is associated with creativity, movement and feeling freely. Tradition links it with water, so it is the centre of flow: emotions, relationships and the pleasure of making things.",
    use:"Place the orange salt on your desk or in a creative corner, or use it in a warm bath when you want to slow down and reconnect with what you enjoy.",
    affirm:"I allow myself to feel, create and enjoy." },
  { hi:"Manipura", en:"Solar Plexus Chakra", short:"Solar Plexus", color:"#F2C230", petals:10, salt:"Manipura Salt", location:"Upper abdomen, above the navel", element:"Fire", mantra:"RAM", focus:"Confidence, willpower, self-belief",
    about:"In yoga tradition the solar plexus chakra is the seat of personal power: willpower, discipline and the confidence to act. Its element is fire, so it is linked with energy and decision-making.",
    use:"Keep the yellow salt where you plan your day, such as a study table or work desk, and pause with it for a moment before big decisions.",
    affirm:"I trust myself completely. Every step I take has purpose." },
  { hi:"Anahata", en:"Heart Chakra", short:"Heart", color:"#3FA86B", petals:12, salt:"Heart Chakra Salt", location:"Centre of the chest", element:"Air", mantra:"YAM", focus:"Compassion, love, balance",
    about:"The heart chakra sits in the middle of the seven, bridging the three lower and three upper centres. It is associated with love, compassion, forgiveness and connection with others.",
    use:"Use the green salt in a bath, or keep a bowl by your bed while you practise gratitude or a loving-kindness meditation.",
    affirm:"My heart is open. Love flows through me and finds its way back." },
  { hi:"Vishuddha", en:"Throat Chakra", short:"Throat", color:"#2F86D6", petals:16, salt:"Throat Chakra Salt", location:"Throat", element:"Space (ether)", mantra:"HAM", focus:"Honest expression, communication, listening",
    about:"The throat chakra is linked with speaking your truth clearly and listening well. It is the centre associated with voice, chanting and honest communication.",
    use:"Keep the blue salt near where you journal or chant, and use it in a bath before a day of presentations or difficult conversations.",
    affirm:"My words are clear and my listening is true." },
  { hi:"Agya", en:"Third Eye Chakra", short:"Third Eye", color:"#4B47B8", petals:2, salt:"Agya Chakra Salt", location:"Between the eyebrows", element:"Light (mind)", mantra:"OM", focus:"Intuition, focus, clarity",
    about:"The third eye chakra is the centre of insight and inner vision. Traditions link it with intuition, concentration and the ability to see the bigger picture.",
    use:"Keep the indigo salt beside you during meditation or your evening wind-down, whenever you want a quiet, focused space.",
    affirm:"I see clearly and I trust my inner voice." },
  { hi:"Sahasrara", en:"Crown Chakra", short:"Crown", color:"#8E4BC4", petals:16, salt:"Energy Salt (Sahasrara Chakra)", location:"Top of the head", element:"Cosmic energy (thought)", mantra:"OM or silence", focus:"Awareness, connection, stillness",
    about:"The crown chakra is the seventh and highest centre, associated with awareness and a sense of connection to something larger than yourself.",
    use:"Use the violet salt to close your practice. Place a small bowl at the centre of your seven-salt arrangement, or keep it in your prayer or meditation corner.",
    affirm:"Everything is connected to me. There is stillness within me." }
];

const $ = (s, r = document) => r.querySelector(s);
const inr = n => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
const starText = n => "★".repeat(n) + "☆".repeat(5 - n);
const P = CONFIG.products;

/* ---------- colour + SVG helpers ---------- */
function shade(hex, p) {
  const n = parseInt(hex.slice(1), 16), t = p < 0 ? 0 : 255, k = Math.abs(p);
  const ch = v => Math.round((t - v) * k + v);
  const r = ch(n >> 16), g = ch((n >> 8) & 255), b = ch(n & 255);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function lotus(cx, cy, r, n, color, op, rot = 0) {
  const rx = r * (n > 12 ? 0.11 : n > 8 ? 0.16 : n > 2 ? 0.22 : 0.34);
  let s = "";
  for (let k = 0; k < n; k++) {
    const a = rot + (360 / n) * k;
    s += `<ellipse cx="${cx}" cy="${cy - r * 0.64}" rx="${rx}" ry="${r * 0.4}" transform="rotate(${a} ${cx} ${cy})" fill="${color}" fill-opacity="${op}" stroke="${color}" stroke-opacity="${Math.min(1, op + 0.4)}"/>`;
  }
  return s + `<circle cx="${cx}" cy="${cy}" r="${r * 0.4}" fill="none" stroke="${color}" stroke-opacity=".8"/>`;
}
function heroArt() {
  let g = `<line x1="200" y1="40" x2="200" y2="980" stroke="#EBC97A" stroke-opacity=".5" stroke-width="2"/>`;
  CHAKRAS.forEach((c, i) => { g += lotus(200, 930 - i * 140, 64, c.petals, c.color, 0.5, c.petals === 2 ? 90 : 0); });
  return `<svg viewBox="0 0 400 1020" xmlns="http://www.w3.org/2000/svg">${g}</svg>`;
}
function saltArt(c, i) {
  const col = c.color, id = "pk" + i;
  const body = "M102 46H258L270 322Q270 344 246 346Q180 356 114 346Q90 344 90 322Z";
  let crimp = "", grains = "", crystals = "";
  for (let x = 104; x < 258; x += 6) crimp += `<line x1="${x}" y1="46" x2="${x}" y2="76"/>`;
  for (let k = 0; k < 24; k++) {
    const x = 130 + ((k * 29 + i * 11) % 100), y = 272 + ((k * 17 + i * 5) % 44), s = 3 + (k % 4);
    grains += `<polygon points="${x},${y - s} ${x + s},${y} ${x},${y + s} ${x - s},${y}" fill="${shade(col, [0.5, 0.15, -0.15][k % 3])}" stroke="#fff" stroke-opacity=".45" stroke-width=".8"/>`;
  }
  for (let k = 0; k < 16; k++) {
    const x = 50 + ((k * 37 + i * 53) % 260), y = 362 + ((k * 19 + i * 7) % 22), s = 5 + ((k * 5 + i) % 8);
    crystals += `<polygon points="${x},${y - s} ${x + s * 0.85},${y} ${x + s * 0.1},${y + s * 0.75} ${x - s * 0.9},${y - s * 0.1}" fill="${shade(col, [0.4, 0, -0.25][k % 3])}" stroke="#fff" stroke-opacity=".35" transform="rotate(${(k * 41) % 90} ${x} ${y})"/>`;
  }
  return `<svg viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${c.salt} packet">
    ${lotus(180, 200, 165, c.petals, shade(col, 0.35), 0.22, c.petals === 2 ? 90 : 0)}
    <defs><clipPath id="${id}"><path d="${body}"/></clipPath></defs>
    <ellipse cx="180" cy="360" rx="132" ry="14" fill="#000" fill-opacity=".3"/>
    <path d="${body}" fill="${col}"/>
    <g clip-path="url(#${id})">
      <rect x="252" y="40" width="30" height="330" fill="#000" fill-opacity=".16"/>
      <rect x="90" y="40" width="14" height="330" fill="#fff" fill-opacity=".18"/>
      <rect x="90" y="46" width="190" height="30" fill="#000" fill-opacity=".16"/>
      <g stroke="#000" stroke-opacity=".3" stroke-width="2">${crimp}</g>
      <line x1="90" y1="98" x2="282" y2="98" stroke="#000" stroke-opacity=".3" stroke-width="2"/>
      <line x1="90" y1="104" x2="282" y2="104" stroke="#fff" stroke-opacity=".3" stroke-width="1.5"/>
      <path d="M102 86l10 5-10 5z M258 86l-10 5 10 5z" fill="#000" fill-opacity=".3"/>
      <rect x="116" y="122" width="128" height="130" rx="10" fill="#FBF3E4" fill-opacity=".97"/>
      ${lotus(180, 158, 27, c.petals, col, 0.85, c.petals === 2 ? 90 : 0)}
      <text x="180" y="208" text-anchor="middle" fill="#2A1212" style="font:600 22px var(--serif)">${c.hi}</text>
      <text x="180" y="228" text-anchor="middle" fill="#6B5048" style="font:500 12px var(--sans)">${c.salt}</text>
      <text x="180" y="245" text-anchor="middle" fill="#8A2B1E" style="font:600 12px var(--sans)">${CONFIG.packWeight}</text>
      <rect x="122" y="262" width="116" height="58" rx="8" fill="${shade(col, 0.2)}"/>
      ${grains}
      <rect x="122" y="262" width="116" height="58" rx="8" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>
    </g>
    <path d="${body}" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="2"/>
    ${crystals}
  </svg>`;
}
const pkMarkup = (i) => (CONFIG.chakraPhotos && CONFIG.chakraPhotos[i]) ? `<span class="pk pk-img"><img src="${CONFIG.chakraPhotos[i]}" alt=""></span>` : `<span class="pk"></span>`;

/* placeholder faces: use until real photos are added */
const FACES = [
  `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="80" height="80" fill="#EBC97A"/><path d="M12 80c2-16 14-22 28-22s26 6 28 22z" fill="#B4802A"/><path d="M20 42C14 20 26 8 40 8s26 12 20 34c-1 10 3 18 5 26H15c2-8 6-16 5-26z" fill="#1E1412"/><rect x="34" y="50" width="12" height="12" fill="#D9A57B"/><ellipse cx="40" cy="38" rx="14" ry="16" fill="#D9A57B"/><path d="M25 32c4-10 26-12 30 0-6-4-22-5-30 0z" fill="#1E1412"/><circle cx="34" cy="38" r="1.7" fill="#2A1212"/><circle cx="46" cy="38" r="1.7" fill="#2A1212"/><circle cx="40" cy="29" r="1.5" fill="#C0392B"/><path d="M35 46q5 4 10 0" fill="none" stroke="#8A2B1E" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="80" height="80" fill="#F3D9B1"/><path d="M10 80c2-17 15-23 30-23s28 6 30 23z" fill="#2F6F5E"/><rect x="34" y="50" width="12" height="12" fill="#C68B59"/><ellipse cx="40" cy="37" rx="14" ry="16.5" fill="#C68B59"/><path d="M25 33c-1-13 7-18 15-18s16 5 15 18c-4-7-10-9-15-9s-11 2-15 9z" fill="#1E1412"/><circle cx="34" cy="38" r="1.7" fill="#2A1212"/><circle cx="46" cy="38" r="1.7" fill="#2A1212"/><path d="M34 46q6 3.5 12 0" fill="none" stroke="#5B1D6B" stroke-width="1.6" stroke-linecap="round"/><path d="M36 44q4-1.5 8 0" fill="none" stroke="#1E1412" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="80" height="80" fill="#E7B8A0"/><path d="M12 80c2-16 14-22 28-22s26 6 28 22z" fill="#7A3B6E"/><circle cx="40" cy="13" r="8" fill="#1E1412"/><rect x="34" y="50" width="12" height="12" fill="#E0B48C"/><ellipse cx="40" cy="38" rx="14" ry="16" fill="#E0B48C"/><path d="M25 35c0-14 6-19 15-19s15 5 15 19c-4-7-9-9-15-9s-11 2-15 9z" fill="#1E1412"/><circle cx="34" cy="39" r="1.7" fill="#2A1212"/><circle cx="46" cy="39" r="1.7" fill="#2A1212"/><circle cx="25.5" cy="44" r="2" fill="#D9A441"/><circle cx="54.5" cy="44" r="2" fill="#D9A441"/><path d="M35 47q5 4 10 0" fill="none" stroke="#8A2B1E" stroke-width="1.6" stroke-linecap="round"/></svg>`
];
const initials = n => n.split(/\s+/).map(w => w[0]).slice(0, 2).join("");

/* ---------- static bits ---------- */
document.title = CONFIG.brand + " | One Salt for Every Chakra";
$("#brand-en").textContent = CONFIG.brandShort;
$("#brand-hi").textContent = CONFIG.brandHi;
$("#foot-brand").textContent = CONFIG.brand;
$("#foot-brand2").textContent = CONFIG.brand;
$("#year").textContent = new Date().getFullYear();
$("#sample-note").hidden = !CONFIG.showSampleNote;
$("#contact-list").innerHTML =
  `<li><a href="tel:${CONFIG.contactPhone}">Phone: ${CONFIG.contactPhone}</a></li>` +
  `<li><a href="mailto:${CONFIG.contactEmail}">Email: ${CONFIG.contactEmail}</a></li>` +
  (CONFIG.whatsapp ? `<li><a href="https://wa.me/${CONFIG.whatsapp}">Message us on WhatsApp</a></li>` : "") +
  `<li style="opacity:.88">${CONFIG.address}</li>`;

/* ---------- hero background ---------- */
$("#hero-bg").innerHTML = CONFIG.heroPhoto ? `<img src="${CONFIG.heroPhoto}" alt="">` : heroArt();

/* ---------- trust bar ---------- */
function renderTrust() {
  const avgNow = REVIEWS.reduce((s, r) => s + r.stars, 0) / REVIEWS.length;
  $("#trust").innerHTML = [
    `<li>⭐ <b>${avgNow.toFixed(1)}/5</b> rating</li>`,
    `<li>🚚 <b>${CONFIG.shipping}</b> delivery</li>`,
    `<li>📝 <b>Simple</b> ordering</li>`,
    `<li>↩️ <b>Easy</b> returns</li>`
  ].join("");
}
renderTrust();

/* ---------- legend ---------- */
$("#legend").innerHTML = CHAKRAS.slice().reverse().map(c => `
  <div style="--c:${c.color}"><span class="dot"></span><strong>${c.hi}</strong><small>${c.short}, ${c.element}</small></div>`).join("");

/* ---------- gallery ---------- */
if (CONFIG.gallery.length) {
  $("#gallery").hidden = false; $("#nav-gallery").hidden = false;
  $("#gal-grid").innerHTML = CONFIG.gallery.map(g => `<figure><img src="${g.src}" alt="${g.caption || ""}" loading="lazy"><figcaption>${g.caption || ""}</figcaption></figure>`).join("");
}

/* ---------- seven chakra sections ---------- */
/* ---------- chakra details (from the supplied content) ---------- */
const D = [
{ col:"Red", loc:"Base of the spine", th:"Security, stability, survival, grounding, and belonging.",
  ar:[["Emotional Stability and Personal Security",["Feeling insecure or unsafe in ordinary situations.","Worrying constantly about the future or financial stability.","Fearing the loss of money, property, employment, or important relationships.","Finding it difficult to adapt to change.","Feeling disconnected from one’s surroundings or lacking a sense of belonging.","Becoming excessively attached to possessions because of insecurity.","Struggling to feel grounded, stable, and confident in daily life."]],
  ["Personal Life and Relationships",["Depending excessively on others for emotional or financial security.","Fearing abandonment or being alone.","Finding it difficult to trust others or feel secure in relationships.","Becoming possessive or controlling because of insecurity.","Avoiding necessary changes because of fear.","Experiencing family tension related to finances or stability.","Struggling to maintain consistent routines and a stable home environment."]],
  ["Business and Professional Life",["Fearing calculated business risks.","Hesitating to start or expand a business.","Worrying excessively about financial losses and uncertainty.","Struggling to maintain consistent business routines and systems.","Avoiding long-term investments because of insecurity.","Depending excessively on one client, employee, or income source.","Finding it difficult to make patient, long-term decisions."]]],
  ex:["A person may earn a good income but remain constantly worried about losing money. This fear may affect their peace of mind, family relationships, and ability to make confident decisions.","A business owner may avoid expansion despite having a viable opportunity because the fear of financial loss feels overwhelming. Careful financial planning and realistic risk assessment may help address this concern."],
  note:"financial circumstances, past experiences, anxiety, and environmental factors may also contribute" },
{ col:"Orange", loc:"Lower abdomen, below the navel", th:"Emotions, creativity, pleasure, adaptability, intimacy, and enjoyment.",
  ar:[["Emotional Expression and Creativity",["Finding it difficult to understand or express emotions.","Feeling emotionally disconnected or unable to enjoy daily experiences.","Struggling to adapt to change or unexpected situations.","Lacking inspiration or creative expression.","Feeling guilty about pleasure or enjoyment.","Depending excessively on external validation for emotional satisfaction.","Struggling to balance responsibilities with personal enjoyment."]],
  ["Personal Life and Relationships",["Finding it difficult to express affection or emotional needs.","Experiencing challenges with intimacy and trust.","Depending excessively on a partner for happiness.","Fearing rejection or struggling to accept relationship changes.","Finding it difficult to maintain healthy boundaries.","Becoming jealous or possessive in relationships.","Struggling to balance personal freedom with emotional commitment.","Finding it difficult to balance giving and receiving."]],
  ["Business and Professional Life",["Finding it difficult to generate ideas or explore creative opportunities.","Resisting changes in business strategy.","Struggling to build enjoyable, collaborative working relationships.","Finding it difficult to balance work with personal well-being.","Losing enthusiasm for previously engaging projects.","Depending excessively on praise or approval from clients and colleagues.","Struggling to adapt products or services to changing customer preferences."]]],
  ex:["A person may depend entirely on their partner for happiness and feel unsettled whenever the partner is unavailable. Developing personal interests, emotional awareness, and healthy boundaries may support a more balanced relationship.","An entrepreneur may continue using the same business approach despite changing customer needs. Encouraging creativity, experimentation, and customer feedback may improve adaptability."],
  note:"emotional experiences, attachment patterns, relationship history, and life circumstances may also contribute" },
{ col:"Yellow", loc:"Upper abdomen, around the solar plexus", th:"Confidence, personal power, discipline, motivation, decision-making, and self-esteem.",
  ar:[["Confidence and Personal Power",["Lacking confidence when making important decisions.","Doubting one’s abilities and judgement.","Fearing failure or criticism.","Struggling to take responsibility for personal choices.","Depending excessively on others’ approval.","Finding it difficult to remain disciplined and consistent.","Feeling powerless when facing challenges.","Becoming controlling, domineering, or unwilling to accept feedback."]],
  ["Personal Life and Relationships",["Finding it difficult to express personal needs and preferences.","Allowing others to make important decisions on one’s behalf.","Avoiding disagreements because of fear of rejection.","Becoming defensive when receiving constructive criticism.","Trying to control family members or a partner.","Struggling to balance independence with cooperation.","Feeling resentful when personal contributions go unrecognised.","Finding it difficult to establish boundaries while respecting others’ needs."]],
  ["Business and Professional Life",["Hesitating when making important business decisions.","Finding it difficult to lead or accept responsibility.","Lacking confidence when negotiating with clients.","Struggling to set goals and follow through consistently.","Fearing competition or comparison with successful professionals.","Finding it difficult to delegate tasks and trust team members.","Struggling to assert professional boundaries.","Becoming authoritarian or dismissive of colleagues’ opinions."]]],
  ex:["A person may have strong opinions but hesitate to express them because they fear criticism. Another person may insist that everyone follow their decisions. Both patterns can interfere with healthy communication and mutual respect.","A business owner may repeatedly delay decisions because of fear of making mistakes. Setting clear objectives, reviewing available information, and taking measured action may strengthen decision-making confidence."],
  note:"confidence, upbringing, stress, and learned behavioural patterns may also contribute" },
{ col:"Green", loc:"Centre of the chest", th:"Love, compassion, forgiveness, empathy, acceptance, and emotional connection.",
  ar:[["Emotional Well-being and Self-Acceptance",["Finding it difficult to accept oneself or recognise personal worth.","Struggling to give or receive affection.","Holding on to emotional hurt from past experiences.","Finding it difficult to forgive oneself or move forward after disappointment.","Feeling emotionally disconnected from others.","Becoming excessively self-critical or sensitive to rejection.","Giving too much to others while neglecting personal needs.","Becoming emotionally guarded or reluctant to trust others."]],
  ["Personal Life and Relationships",["Finding it difficult to build trust and emotional intimacy.","Fearing hurt, rejection, or betrayal.","Holding on to resentment after disagreements.","Struggling to forgive a partner or family member.","Depending excessively on another person’s affection.","Neglecting personal boundaries to keep others happy.","Finding it difficult to express appreciation, gratitude, or affection.","Experiencing repeated conflict because of unresolved emotional issues."]],
  ["Business and Professional Life",["Finding it difficult to build trusting client relationships.","Struggling to maintain long-term professional connections.","Taking criticism or business disagreements personally.","Finding it difficult to forgive mistakes or resolve workplace conflicts.","Offering excessive discounts because of discomfort with saying no.","Becoming overly invested in client approval.","Struggling to balance compassion with professional boundaries.","Finding it difficult to recognise employees’ contributions or appreciate colleagues’ efforts."]]],
  ex:["A person who has experienced disappointment in a previous relationship may become reluctant to trust a new partner. Processing past experiences, communicating openly, and developing healthy boundaries may support stronger relationships.","A consultant may repeatedly reduce professional fees because they fear disappointing clients. Communicating value while remaining respectful and empathetic may support healthier business relationships."],
  note:"relationship history, grief, emotional stress, and interpersonal circumstances may also contribute" },
{ col:"Light blue or sky blue", loc:"Throat region", th:"Communication, self-expression, truth, listening, clarity, and authenticity.",
  ar:[["Communication and Self-Expression",["Finding it difficult to express thoughts and feelings openly.","Hesitating or feeling anxious when speaking before others.","Struggling to communicate personal needs clearly.","Finding it difficult to explain ideas or opinions.","Talking excessively or speaking without considering the consequences.","Fearing honesty or disagreement.","Remaining silent to avoid upsetting others."]],
  ["Personal Life and Relationships",["Experiencing misunderstandings with partners or spouses.","Creating emotional distance through limited communication.","Feeling unheard or misunderstood by family members.","Finding it difficult to set personal boundaries.","Suppressing emotions and accumulating resentment.","Struggling to express affection, disappointment, or expectations.","Trying to please everyone at the expense of personal needs."]],
  ["Business and Professional Life",["Finding it difficult to present services confidently to clients.","Feeling nervous during presentations, meetings, or public speaking.","Hesitating when discussing professional fees.","Struggling to negotiate or communicate value.","Feeling uncomfortable promoting professional achievements.","Finding it difficult to give clear instructions to a team.","Struggling to resolve disagreements professionally."]]],
  ex:["A person may feel upset with their partner but remain silent instead of discussing the issue. Over time, this silence may lead to misunderstandings and emotional distance.","A professional may have excellent knowledge and experience but struggle to communicate their value during a client meeting. Practising presentations, improving listening skills, and explaining ideas clearly may strengthen professional communication."],
  note:"communication habits, stress, and relationship circumstances may also contribute" },
{ col:"Indigo or deep blue", loc:"Between the eyebrows", th:"Intuition, insight, awareness, perspective, imagination, and discernment.",
  ar:[["Mental Clarity and Self-Awareness",["Finding it difficult to gain clarity in complex situations.","Overthinking decisions and repeatedly questioning oneself.","Struggling to distinguish assumptions from evidence.","Depending excessively on other people’s opinions.","Finding it difficult to reflect on behaviour and learn from experience.","Struggling to focus on long-term goals.","Becoming rigid in one’s perspective or unwilling to consider alternatives.","Relying excessively on intuition while overlooking practical information."]],
  ["Personal Life and Relationships",["Misinterpreting another person’s words or intentions.","Making assumptions instead of asking questions.","Finding it difficult to recognise recurring relationship patterns.","Becoming confused when making important personal decisions.","Overthinking a partner’s behaviour or communication.","Struggling to consider another person’s perspective.","Ignoring practical warning signs because of unrealistic expectations.","Finding it difficult to separate fears and assumptions from facts."]],
  ["Business and Professional Life",["Finding it difficult to identify opportunities and evaluate alternatives.","Struggling to develop a clear long-term business vision.","Making decisions based on assumptions rather than reliable information.","Overlooking important details during planning.","Finding it difficult to anticipate potential challenges.","Becoming attached to one strategy despite changing circumstances.","Struggling to analyse customer behaviour or market trends objectively.","Relying excessively on instinct without validating decisions."]]],
  ex:["A person may assume that a partner’s delayed response means the relationship is in trouble. Asking calmly and considering alternative explanations may prevent unnecessary conflict.","A business owner may invest in a new product because it seems promising without researching customer demand. Combining creative insight with market research, financial analysis, and customer feedback may support better decisions."],
  note:"stress, uncertainty, cognitive habits, and incomplete information may also contribute" },
{ col:"Violet, purple, or white", loc:"Crown of the head", th:"Spiritual awareness, meaning, wisdom, interconnectedness, and purpose.",
  ar:[["Purpose, Meaning, and Spiritual Awareness",["Feeling disconnected from a sense of purpose or direction.","Questioning the meaning of personal achievements.","Finding it difficult to make time for reflection and self-awareness.","Feeling disconnected from personal values.","Focusing excessively on material success without considering fulfilment.","Focusing excessively on abstract or spiritual ideas while neglecting practical responsibilities.","Struggling to maintain perspective during periods of change.","Finding it difficult to connect daily actions with long-term values."]],
  ["Personal Life and Relationships",["Finding it difficult to understand different perspectives and experiences.","Feeling disconnected from family, community, or a wider sense of belonging.","Focusing excessively on being right rather than understanding others.","Struggling to balance personal beliefs with respect for differing opinions.","Finding it difficult to accept changes beyond one’s control.","Expecting relationships to provide a complete sense of purpose or fulfilment.","Neglecting relationship responsibilities while pursuing personal or spiritual goals.","Finding it difficult to appreciate ordinary experiences and meaningful connections."]],
  ["Business and Professional Life",["Finding it difficult to connect business activities with a meaningful long-term vision.","Feeling professionally successful but personally unfulfilled.","Losing sight of the broader purpose of a business.","Struggling to balance financial goals with personal values.","Focusing excessively on short-term achievements.","Finding it difficult to recognise how business decisions affect employees, customers, and the community.","Losing motivation when work no longer feels meaningful.","Focusing on an idealistic vision without translating it into practical plans and measurable objectives."]]],
  ex:["A person may focus heavily on professional achievements but still feel that something is missing from life. Reflecting on personal values, nurturing relationships, and contributing to something meaningful may strengthen their sense of purpose.","An entrepreneur may achieve strong financial results but feel disconnected from the original purpose of starting the business. Reviewing the company’s mission, identifying meaningful goals, and creating practical steps may help restore a sense of direction."],
  note:"life transitions, social isolation, stress, and changing personal priorities may also contribute" }
];
const HOW = [
  ["in the evening", "your feet and the base of your spine", "LAM", "I am safe, grounded and supported."],
  ["after sunset", "your lower abdomen, below the navel", "VAM", "I welcome joy, creativity and change."],
  ["in the morning", "your upper abdomen, around the solar plexus", "RAM", "I trust my decisions and act with confidence."],
  ["in the evening", "the centre of your chest", "YAM", "I give and receive love freely."],
  ["in the morning or evening", "your throat", "HAM", "I speak my truth clearly and with kindness."],
  ["at night", "the space between your eyebrows", "OM", "I see clearly and trust my insight."],
  ["in the early morning or at night", "the crown of your head", "OM", "I am connected to my purpose."]
];
const howHtml = i => {
  const [when, focus, mantra, aff] = HOW[i];
  return `<div class="how"><p class="how-h"><strong>How to Use Salt</strong></p><ul>
    <li>Bath or foot soak: Add a small handful of the salt to warm water and soak for 15 to 20 minutes, ideally ${when}.</li>
    <li>Meditation: Keep a small bowl of the salt beside you, bring your attention to ${focus}, and chant the seed mantra ${mantra} slowly 21 times.</li>
    <li>Intention: While you soak or sit, repeat: “${aff}”</li>
    <li>Care: For external use only. Do a small patch test before first use, avoid broken or irritated skin and keep away from the eyes. Not a medicine. If you are pregnant or have a health condition, check with your doctor first.</li></ul></div>`;
};

const detailsHtml = i => {
  const d = D[i], c = CHAKRAS[i];
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  const area = (k, extra) => `<details class="det"${k === 0 ? " open" : ""}><summary><strong>${d.ar[k][0]}</strong></summary><ul>${li(d.ar[k][1])}</ul>${extra || ""}</details>`;
  const ex = t => `<p class="ex"><strong>Example:</strong> ${t}</p>`;
  const note = `<p class="ex">In traditional chakra philosophy, these experiences may be associated with an imbalanced ${c.en}. However, ${d.note}.</p>`;
  return `<div class="dets"><p class="dets-h">According to traditional chakra beliefs, an imbalance in the ${c.en} may be associated with difficulties in three areas of life.</p>${area(0)}${area(1, ex(d.ex[0]) + note)}${area(2, ex(d.ex[1]))}</div>`;
};

$("#jars").innerHTML = CHAKRAS.map((c, i) => `
  <button type="button" class="jar" style="--c:${c.color};--i:${i}" data-i="${i}" aria-label="View ${c.hi}, ${c.en} salt">
    ${pkMarkup(i)}<span class="jar-name">${c.short}</span>
  </button>`).join("");
$("#jars").addEventListener("click", e => {
  const b = e.target.closest(".jar"); if (b) document.getElementById(b.dataset.t || "chakra-" + b.dataset.i).scrollIntoView({ behavior: "smooth" });
});
$("#cs-list").innerHTML = CHAKRAS.map((c, i) => `
  <section class="cs ${i % 2 ? "rev" : ""}" id="chakra-${i}" style="--c:${c.color}" aria-labelledby="cs-h-${i}">
    <div class="wrap cs-grid">
      <figure class="art-frame">${CONFIG.chakraPhotos[i] ? `<img src="${CONFIG.chakraPhotos[i]}" alt="${c.salt}" loading="lazy">` : saltArt(c, i)}</figure>
      <div class="cs-body">
        <div class="bar"></div>
        <p class="eyebrow">${c.short} Chakra</p>
        <h3 id="cs-h-${i}">${c.hi}</h3>
        <p class="en">${c.en}</p>
        <p class="cs-meta">Colour: ${D[i].col} · Location: ${D[i].loc}</p>
        <p class="cs-meta"><strong>Themes:</strong> ${D[i].th}</p>
        ${detailsHtml(i)}
      </div>
    </div>
  </section>`).join("");

/* ---------- How to Use Salt (after the seven chakras) ---------- */
$("#cs-list").insertAdjacentHTML("beforeend", `<section class="how-sec pad" id="how-to-use"><div class="wrap">
  <div class="sec-head"><h2><strong>How to Use Salt</strong></h2></div>
  <div class="how-grid">
    <div class="how-card"><span class="how-num">1</span><h3><strong>How to use this salt:</strong></h3>
      <p>Before going to bed at night, mix 15 to 20 grams of the salt into approximately 10–12 liters of lukewarm or plain water. Once the salt has dissolved, soak your feet in the water for about 7 to 10 minutes. Finally, rinse your feet with clean water before retiring for the night.</p></div>
    <div class="how-card during"><span class="how-num">2</span><h3><strong>During use:</strong></h3>
      <p>While soaking your feet, repeat the following affirmation to yourself:</p>
      <blockquote>“I am letting go of stress and negative thoughts. My mind is becoming calm, my body is relaxing, and my life is filling with positive energy.”</blockquote></div>
    <div class="how-card warn"><span class="how-num">3</span><h3><strong>Caution:</strong></h3>
      <p>For external use only. Perform a patch test before using it for the first time; do not apply to broken or irritated skin, and keep away from the eyes. This product is not a medicine. If you are pregnant or have any health issues, please consult your doctor before use.</p></div>
  </div></div></section>`);

/* ---------- two more energy salts: Home Energy Salt + Bath Salt ---------- */
const EXTRA = [
  { c:"#C9A227", img:"images/home energy salt .jpeg", name:"Home Energy Salt", sub:"For Home Mopping", tag:"Clean Space. Positive Vibes. Happier Life.",
    meta:"Pack: 500 gm · Made with essential oil",
    ben:["Remove negative energy","Increase positive energy","Bring peace and harmony","Enhance well-being"],
    howT:"How to use this salt",
    how:"When mopping your home or office, add 15–20 grams of salt to about 10–12 litres of lukewarm or plain water. Mop the floor once the salt has dissolved, then go over it again with clean water." },
  { c:"#1F8F6B", img:"images/Bath Salt.jpeg", name:"Bath Salt", sub:"For Your Bath", tag:"Relax · Rejuvenate · Rebalance",
    meta:"Pack: 500 gm · Made with essential oil",
    ben:["Relax your mind and body","Remove stress and negativity","Rejuvenate your energy","Bring balance in life"],
    howT:"How to use this salt",
    how:"While bathing, add 15 to 20 grams of salt to about 10–12 litres of lukewarm or plain water. If you are using a larger amount of water, increase the quantity of salt accordingly. Once the salt has dissolved, begin bathing, starting from your head. (If you are using a bathtub, remain in it for 10 minutes.) Afterward, rinse yourself again with clean water." }
];
const CAUTION = "For external use only. Perform a patch test before using it for the first time; do not apply to broken or irritated skin, and keep away from the eyes. This product is not a medicine. If you are pregnant or have any health issues, please consult your doctor before use.";
$("#jars").insertAdjacentHTML("beforeend", EXTRA.map((e, i) => `
  <button type="button" class="jar" style="--c:${e.c};--i:${7 + i}" data-t="extra-${i}" aria-label="View ${e.name}">
    <span class="pk pk-img"><img src="${e.img}" alt="${e.name}"></span><span class="jar-name">${i ? "Bath" : "Home"}</span>
  </button>`).join(""));
$("#cs-list").insertAdjacentHTML("beforeend", EXTRA.map((e, i) => `
  <section class="cs ${i % 2 ? "" : "rev"}" id="extra-${i}" style="--c:${e.c}" aria-labelledby="ex-h-${i}">
    <div class="wrap cs-grid">
      <figure class="art-frame"><img src="${e.img}" alt="Barakah Energy Salt, ${e.name}, 500 gm" loading="lazy"></figure>
      <div class="cs-body">
        <div class="bar"></div>
        <p class="eyebrow">Barakah Energy Salt</p>
        <h3 id="ex-h-${i}">${e.name}</h3>
        <p class="en">${e.sub}</p>
        <p class="cs-meta">${e.meta}</p>
        <p class="cs-meta"><strong>${e.tag}</strong></p>
        <details class="det" open><summary><strong>Benefits</strong></summary><ul>${e.ben.map(x => `<li>${x}</li>`).join("")}</ul></details>
        <details class="det" open><summary><strong>${e.howT}</strong></summary><p style="margin:10px 0 4px">${e.how}</p></details>
        <details class="det"><summary><strong>Caution</strong></summary><p style="margin:10px 0 4px">${CAUTION}</p></details>
      </div>
    </div>
  </section>`).join(""));

$("#cs-list").insertAdjacentHTML("beforeend", `<section class="light pad whole"><div class="wrap"><div class="sec-head"><p class="eyebrow">Together</p><h2>Understanding the Seven Chakras as a Whole</h2><p>In traditional chakra philosophy, the seven chakras represent interconnected dimensions of human experience:</p></div><ol><li>Root Chakra: Security, stability, and grounding.</li><li>Sacral Chakra: Emotions, creativity, and enjoyment.</li><li>Solar Plexus Chakra: Confidence, discipline, and personal power.</li><li>Heart Chakra: Love, compassion, and emotional connection.</li><li>Throat Chakra: Communication, truth, and self-expression.</li><li>Third Eye Chakra: Awareness, insight, and discernment.</li><li>Crown Chakra: Spiritual awareness, purpose, and interconnectedness.</li></ol><p class="ex">These descriptions may serve as a framework for self-reflection and personal development. They should not be used to diagnose physical or mental health conditions, predict business outcomes, or establish that a particular chakra causes relationship difficulties. Practical factors, professional guidance, and individual circumstances remain important when addressing these challenges.</p></div></section>`);

/* ---------- offerings ---------- */
const miniJars = CHAKRAS.map((c, i) => `<span class="mini" style="--c:${c.color}">${pkMarkup(i)}</span>`).join("");
P.duo = {
  name: "Home + Bath Salt Duo", tag: "Barakah Energy Salt", badge: "",
  price: 9000, mrp: 9000, unit: "2 packets",
  blurb: "One Home Energy Salt for mopping and one Bath Salt for bathing, 500 gm each.",
  perks: ["1 Home Energy Salt, 500 gm", "1 Bath Salt, 500 gm", "Made with essential oil", "Free delivery across India"]
};
$("#offer-grid").innerHTML = ["single", "set", "home", "bath", "duo"].map(key => {
  const p = P[key];
  return `
  <article class="offer">
    ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
    <div class="art ${key === "single" ? "one" : ""}${key === "set" && CONFIG.setPhoto ? " group" : ""}" aria-hidden="true"${key === "set" && CONFIG.setPhoto ? ` style="--bgimg:url('${CONFIG.setPhoto}')"` : ""}>
      ${key === "duo" ? `<img src="${EXTRA[0].img}" alt="Home Energy Salt" style="height:100%;width:auto;max-width:48%;object-fit:cover;border-radius:10px"><img src="${EXTRA[1].img}" alt="Bath Energy Salt" style="height:100%;width:auto;max-width:48%;object-fit:cover;border-radius:10px">` : key === "set" ? (CONFIG.setPhoto ? `<img src="${CONFIG.setPhoto}" alt="">` : miniJars) : key === "home" || key === "bath" ? `<img src="${EXTRA[key === "home" ? 0 : 1].img}" alt="${p.name}" style="height:100%;width:100%;object-fit:cover;border-radius:10px">` : `<span class="mini" id="single-art" style="--c:${CHAKRAS[0].color}">${pkMarkup(0)}</span>`}
    </div>
    <div class="offer-body">
      <p class="tag">${p.tag}</p>
      <h3>${p.name}</h3>
      <div class="price-row"><b>${inr(p.price)}</b>${p.mrp > p.price ? `<s>${inr(p.mrp)}</s>` : ""}<span>${p.unit}</span></div>
      <p class="blurb">${p.blurb}</p>
      <ul class="perks">${p.perks.map(x => `<li>${x}</li>`).join("")}</ul>
      <a class="btn ${key === "set" ? "" : "btn-maroon"}" data-order href="#book">Order Now, ${inr(p.price)}</a>
    </div>
  </article>`;
}).join("");

/* ---------- reviews ---------- */
const avg = REVIEWS.reduce((s, r) => s + r.stars, 0) / REVIEWS.length;
$("#t-grid").innerHTML = REVIEWS.map(r => `
  <figure class="t-card">
    <div class="q" aria-hidden="true">&ldquo;</div>
    <span class="stars" role="img" aria-label="${r.stars} out of 5 stars">${starText(r.stars)}</span>
    ${r.title ? `<h3 class="t-title">${r.title}</h3>` : ""}
    <blockquote>${r.text}</blockquote>
    <figcaption class="who">
      <span class="av${r.photo ? "" : " init"}">${r.photo ? `<img src="${r.photo}" alt="${r.name}">` : initials(r.name)}</span>
      <span><b>${r.name}</b><small>${r.city}${r.used ? ", " + r.used : ""}</small></span>
    </figcaption>
  </figure>`).join("");
$("#t-stats").innerHTML = `
  <div><b>${avg.toFixed(1)}/5</b><span>Average rating</span></div>
  <div><b>${REVIEWS.length}</b><span>Customer reviews</span></div>
  <div><b>7</b><span>Chakra salts</span></div>`;

/* ---------- FAQ ---------- */
const FAQ = [
  ["Can these salts be eaten?", CONFIG.edibleAnswer],
  ["What is included in the Complete Set?", P.set.perks.join(". ") + "."],
  ["How long does delivery take?", CONFIG.delivery],
  ["What if my order arrives damaged?", CONFIG.returns],
  ["How do I place an order?", "Tap Order Now and fill in the short form with your details. Once you submit it, your order reaches us directly. All prices are in Indian rupees."],
  ["Are these salts a medical treatment?", "No. They are meant for ritual, meditation and wellness practice based on yogic tradition. They do not diagnose, treat or cure any condition. If you have a health concern, please see a doctor."]
];
$("#faq").innerHTML = FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");

/* ---------- Order Now buttons open the Google Form ---------- */
document.querySelectorAll("[data-order]").forEach(a => {
  a.href = CONFIG.orderFormUrl;
  a.target = "_blank";
  a.rel = "noopener";
});
$("#sticky-price").innerHTML = `<small>Starting at</small>${inr(P.single.price)}`;