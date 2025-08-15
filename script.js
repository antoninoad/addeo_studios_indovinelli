// ==================== Dati ====================
const indovinelli = [
  { q:"Cosa ha quattro gambe al mattino, due a mezzogiorno e tre alla sera?", a:"l'uomo", difficulty:"Facile" },
  { q:"Più lo togli, più diventa grande. Cosa è?", a:"una buca", difficulty:"Facile" },
  { q:"Sono sempre davanti a te, ma non puoi vedermi. Cosa è?", a:"il futuro", difficulty:"Media" },
  { q:"Quale mese ha 28 giorni?", a:"tutti", difficulty:"Facile" },
  { q:"Vola senza ali, piange senza occhi. Cosa è?", a:"la nuvola", difficulty:"Media" },
  { q:"Qual è l’animale più veloce del mondo?", a:"falco pellegrino", difficulty:"Difficile" },
  { q:"Più lavi, più diventa sporca. Cos'è?", a:"l’acqua", difficulty:"Media" },
  { q:"Non puoi toccarlo, ma lo senti. Cos'è?", a:"il vento", difficulty:"Facile" },
  { q:"Cosa diventa più leggero se lo metti in acqua?", a:"il ghiaccio", difficulty:"Facile" },
  { q:"Quale parola è scritta sempre sbagliata?", a:"sbagliata", difficulty:"Media" },
  { q:"Sono pieno di buchi ma trattengo l’acqua. Cosa sono?", a:"la spugna", difficulty:"Media" },
  { q:"Se mi nomini, scompaio. Cosa sono?", a:"il silenzio", difficulty:"Facile" },
  { q:"Quale cosa ha un occhio ma non può vedere?", a:"l’ago", difficulty:"Facile" },
  { q:"Ha città senza case, fiumi senza acqua, foreste senza alberi. Cos’è?", a:"la mappa", difficulty:"Difficile" },
  { q:"Cosa sale ma non scende mai?", a:"l’età", difficulty:"Facile" },
  { q:"Qual è l’unico mese con 28 giorni almeno una volta l’anno?", a:"tutti", difficulty:"Facile" },
  { q:"Quale parola è lunga solo una lettera?", a:"I", difficulty:"Difficile" },
  { q:"Vivo senza respirare, dormo senza chiudere gli occhi. Chi sono?", a:"il pesce", difficulty:"Media" },
  { q:"Cosa ha mani ma non può battere?", a:"l’orologio", difficulty:"Facile" },
  { q:"Cosa diventa più bagnata man mano che si asciuga?", a:"l’asciugamano", difficulty:"Media" },
  { q:"Ha denti ma non mangia. Cos’è?", a:"il pettine", difficulty:"Facile" },
  { q:"Sono leggero come una piuma, ma nemmeno il più forte può tenermi per più di un minuto. Cosa sono?", a:"il respiro", difficulty:"Difficile" },
  { q:"Cosa ha una chiave ma non apre nessuna porta?", a:"il pianoforte", difficulty:"Facile" },
  { q:"Cammina senza gambe. Cos’è?", a:"il tempo", difficulty:"Difficile" },
  { q:"Cosa ha molti occhi ma non può vedere?", a:"il dado", difficulty:"Media" },
  { q:"Quale numero manca in questa sequenza? 1,4,9,16, ?", a:"25", difficulty:"Difficile" },
  { q:"Se ne togli uno, diventa più grande. Cos’è?", a:"una buca", difficulty:"Facile" },
  { q:"Cos’è pieno di lettere ma non può leggere?", a:"la cassetta postale", difficulty:"Facile" },
  { q:"Cosa ha un collo ma nessuna testa?", a:"la bottiglia", difficulty:"Media" },
  { q:"Quale animale porta la sua casa sulla schiena?", a:"la tartaruga", difficulty:"Facile" },
  { q:"Cosa cresce ma non vive?", a:"l’ombra", difficulty:"Difficile" },
  { q:"Cosa corre ma non ha gambe?", a:"l’acqua", difficulty:"Media" },
  { q:"Ha una lingua ma non parla. Cos’è?", a:"la scarpa", difficulty:"Facile" },
  { q:"Più togli, più diventa grande. Cos’è?", a:"una buca", difficulty:"Facile" },
  { q:"Quale cosa appartiene a te ma viene usata più dagli altri?", a:"il nome", difficulty:"Media" },
  { q:"Ha chiavi ma non può aprire porte. Cos’è?", a:"il pianoforte", difficulty:"Facile" },
  { q:"Cosa può essere rotto senza essere toccato?", a:"la promessa", difficulty:"Facile" },
  { q:"Cos’è che può correre ma non cammina, ha una bocca ma non parla?", a:"il fiume", difficulty:"Media" },
  { q:"Quale parola è scritta uguale al contrario?", a:"radar", difficulty:"Difficile" },
  { q:"Cosa diventa più corta se aggiungi qualcosa?", a:"il buco", difficulty:"Difficile" },
  { q:"Ha mani ma non può battere. Cos’è?", a:"l’orologio", difficulty:"Facile" },
  { q:"Quale cosa puoi tenere in mano ma mai toccare?", a:"il respiro", difficulty:"Difficile" },
  { q:"Sono sempre davanti a te ma non puoi vedermi. Cos’è?", a:"il futuro", difficulty:"Media" },
  { q:"Più ne prendi, più lasci indietro. Cos’è?", a:"i passi", difficulty:"Facile" },
  { q:"Ha un letto ma non dorme mai. Cos’è?", a:"il fiume", difficulty:"Media" },
  { q:"Cosa ha radici che nessuno vede, cresce senza acqua, e mai muore?", a:"la montagna", difficulty:"Difficile" },
  { q:"Cosa ha una coda ma non un corpo?", a:"la moneta", difficulty:"Facile" },
  { q:"Cosa è sempre in movimento ma non cammina?", a:"il tempo", difficulty:"Media" },
  { q:"Quale cosa si rompe se la nomini?", a:"il silenzio", difficulty:"Facile" },
  { q:"Ha molte foglie ma non è un albero. Cos’è?", a:"il libro", difficulty:"Facile" },
  { q:"Cosa cammina sulla terra ma dorme nel cielo?", a:"la stella cadente", difficulty:"Difficile" }
];

// ==================== Mischia casuale ====================
function shuffleArray(array){
  for(let i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}
const shuffledIndovinelli = shuffleArray([...indovinelli]);

// ==================== DOM ====================
let current = 0;
let strikeCount = 0;
let isProcessing = false;
const debounceTime = 500; // ms
let debounceTimeout = null;

const indovinelloEl = document.getElementById("indovinello");
const answerEl      = document.getElementById("answer");
const submitBtn     = document.getElementById("submit");
const waveEl        = document.getElementById("wave");
const strikeHud     = document.getElementById("strike-hud");
const strikeCountEl = document.getElementById("strike-count");
const difficultyEl  = document.getElementById("difficulty");
const progressBar   = document.getElementById("progress-bar");

// ==================== Util ====================
function normalize(str){
  return (str || "")
    .normalize('NFD').replace(/\p{Diacritic}/gu,'')
    .replace(/[^a-z0-9 ']/gi,'')
    .replace(/\s+/g,' ')
    .trim().toLowerCase();
}

function setHudLevel(count){
  const level = Math.min(count, 4);
  for (let i=0;i<=4;i++) strikeHud.classList.remove(`level-${i}`);
  strikeHud.classList.add(`level-${level}`);
}

// ==================== UI ====================
function showIndovinello(){
  if (current < shuffledIndovinelli.length){
    const question = shuffledIndovinelli[current].q;
    const difficulty = shuffledIndovinelli[current].difficulty;

    difficultyEl.textContent = `Livello: ${difficulty}`;
    const percent = (current/shuffledIndovinelli.length)*100;
    progressBar.style.width = `${percent}%`;

    indovinelloEl.innerHTML = '';
    question.split(' ').forEach((word, wi) => {
      word.split('').forEach((char, ci) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className   = 'letter';
        span.style.animationDelay = `${(wi*5 + ci)*0.05}s`;
        indovinelloEl.appendChild(span);
      });
      indovinelloEl.appendChild(document.createTextNode(' '));
    });
    answerEl.value = "";
    answerEl.focus();
  } else {
    indovinelloEl.textContent = "Hai completato tutti gli indovinelli!";
    difficultyEl.textContent = '';
    progressBar.style.width = `100%`;
    answerEl.style.display = "none";
    submitBtn.style.display = "none";
  }
}

// ==================== Particelle e Wave ====================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const particleCount = 150;

class Particle{
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = canvas.height + Math.random()*50;
    this.size = Math.random()*5 + 2;
    this.vx = 0;
    this.vy = -(Math.random()*0.3 + 0.1);
    this.opacity = Math.random()*0.5 + 0.2;
    this.tempColor = null;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.opacity -= 0.002;
    if (this.y < -10 || this.opacity <= 0){
      this.y = canvas.height + Math.random()*50;
      this.x = Math.random()*canvas.width;
      this.opacity = Math.random()*0.5 + 0.2;
      this.vx = 0;
      this.vy = -(Math.random()*0.3 + 0.1);
    }
  }
  draw(){
    ctx.fillStyle = this.tempColor || `rgba(255,255,255,${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}
for (let i=0;i<particleCount;i++) particlesArray.push(new Particle());

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ==================== Wave trigger ====================
function triggerWave(color){
  waveEl.style.backgroundColor = color;
  waveEl.classList.remove("wave-show");
  void waveEl.offsetWidth;
  waveEl.classList.add("wave-show");

  particlesArray.forEach(p => p.tempColor = color);
  setTimeout(() => {
    particlesArray.forEach(p => p.tempColor = null);
  }, 400);

  const cx = window.innerWidth/2, cy = window.innerHeight/2;
  particlesArray.forEach(p => {
    let dx = p.x - cx;
    let dy = p.y - cy;
    let dist = Math.hypot(dx, dy) || 1;
    let force = 300 / (dist + 50);
    p.vx += (dx/dist) * force;
    p.vy += (dy/dist) * force;
  });
}

// ==================== Strike FX ====================
function addStrike(){
  strikeCount++;
  strikeCountEl.textContent = strikeCount;
  setHudLevel(strikeCount);

  strikeHud.classList.add('punch');
  strikeHud.addEventListener('animationend', ()=>strikeHud.classList.remove('punch'), { once:true });

  const rect = strikeHud.getBoundingClientRect();
  const burst = document.createElement('span');
  burst.className = 'burst';
  burst.textContent = '🔥';
  burst.style.left = `${rect.left + 24}px`;
  burst.style.top  = `${rect.top  + 8}px`;
  document.body.appendChild(burst);
  burst.addEventListener('animationend', ()=> burst.remove(), { once:true });

  for (let i=0; i<8; i++){
    const spark = document.createElement('span');
    spark.className = 'spark';
    spark.style.left = `${rect.left + 28}px`;
    spark.style.top  = `${rect.top + 18}px`;
    const angle = Math.random()*Math.PI*2;
    const dist  = 40 + Math.random()*60;
    const dx = Math.cos(angle)*dist;
    const dy = -Math.abs(Math.sin(angle)*dist);
    spark.style.setProperty('--dx', `${dx}px`);
    spark.style.setProperty('--dy', `${dy}px`);
    spark.style.animationDuration = `${600 + Math.random()*300}ms`;
    document.body.appendChild(spark);
    spark.addEventListener('animationend', ()=> spark.remove(), { once:true });
  }
}

// ==================== Funzione AI con gestione 429 ====================
async function isAnswerCorrectAI(question, userAnswer, correctAnswer, retries = 3) {
  const apiKey = localStorage.getItem("OPENAI_API_KEY");
  if (!apiKey) throw new Error("Chiave OpenAI non trovata in localStorage");

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Sei un valutatore di risposte per un gioco di indovinelli. Rispondi solo con SI o NO." },
          { role: "user", content: `Domanda: ${question}\nRisposta utente: ${userAnswer}\nRisposta corretta: ${correctAnswer}` }
        ],
        max_tokens: 3,
        temperature: 0
      })
    });

    if (res.status === 429 && retries > 0) {
      await new Promise(r => setTimeout(r, 1500));
      return await isAnswerCorrectAI(question, userAnswer, correctAnswer, retries - 1);
    }

    const data = await res.json();
    const answer = data.choices?.[0]?.message?.content?.trim().toLowerCase() || "";
    return answer.startsWith("si");
  } catch(e) {
    console.error(e);
    return false;
  }
}

// ==================== Controllo risposta con debounce ====================
async function checkAnswer(){
  if (isProcessing) return;
  const userRaw = answerEl.value;
  if (!userRaw.trim()) return;

  if (debounceTimeout) clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(async () => {
    const { q: question, a: correctAnswer } = shuffledIndovinelli[current];
    isProcessing = true;

    const isCorrect = await isAnswerCorrectAI(question, userRaw, correctAnswer);

    if (isCorrect) {
      triggerWave("#00c853");
      addStrike();
      setTimeout(() => {
        current++;
        showIndovinello();
        isProcessing = false;
      }, 600);
    } else {
      triggerWave("#d50000");
      strikeCount = 0;
      strikeCountEl.textContent = strikeCount;
      setHudLevel(strikeCount);
      isProcessing = false;
    }
  }, debounceTime);
}

// ==================== Eventi ====================
submitBtn.addEventListener("click", checkAnswer);
answerEl.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkAnswer();
  }
});

// ==================== Init ====================
setHudLevel(0);
showIndovinello();
async function testOpenAI() {
  const apiKey = localStorage.getItem("OPENAI_API_KEY");
  console.log("API key:", apiKey);
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "Ciao, funziona?" }
      ],
      max_tokens: 3
    })
  });
  console.log(res.status);
  const data = await res.json();
  console.log(data);
}
testOpenAI();


