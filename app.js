// REEMPLAZA ESTE TEXTO CON LA URL QUE COPIASTE DE APPS SCRIPT:
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxN-IdtR-Rs3lmsl_O-rJc3_sbj5GzoG2_qUe8eMpBBBy-PfgprAn253YXsHnvCgNb5/exec";

const rutinaData = {
  dia1: [
    { id: "p_plano", musculo: "Pecho", nombre: "Press Pecho Plano", series: "3-4 series x 8-10 reps", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200", video: "https://www.youtube.com/results?search_query=press+de+banca+plano+mancuernas+tecnica" },
    { id: "p_inclinado", musculo: "Pecho", nombre: "Press Inclinado Mancuernas", series: "3 series x 10-12 reps", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200", video: "https://www.youtube.com/results?search_query=press+inclinado+con+mancuernas+tecnica" },
    { id: "voador", musculo: "Pecho", nombre: "Voador Direto (Máquina)", series: "3 series x 12-15 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=peck+deck+machine+fly+tecnica" },
    { id: "press_militar", musculo: "Hombro", nombre: "Press Militar Sentado", series: "3 series x 10-12 reps", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200", video: "https://www.youtube.com/results?search_query=press+militar+mancuernas+sentado" },
    { id: "elev_lat", musculo: "Hombro", nombre: "Elevaciones Laterales", series: "3-4 series x 12-15 reps", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=200", video: "https://www.youtube.com/results?search_query=elevaciones+laterales+mancuerna+tecnica" },
    { id: "elev_front", musculo: "Hombro", nombre: "Elevaciones Frontales", series: "3 series x 12-15 reps", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=200", video: "https://www.youtube.com/results?search_query=elevaciones+frontales+mancuerna" },
    { id: "shrugs", musculo: "Trapecio", nombre: "Encogimientos (Shrugs)", series: "3-4 series x 12-15 reps", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200", video: "https://www.youtube.com/results?search_query=encogimiento+de+hombros+mancuernas+shrugs" },
    { id: "biceps_w", musculo: "Bíceps", nombre: "Curl Barra W", series: "3 series x 10-12 reps", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200", video: "https://www.youtube.com/results?search_query=curl+biceps+barra+w+tecnica" },
    { id: "martelo", musculo: "Bíceps", nombre: "Rosca Martillo", series: "3 series x 12-15 reps", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200", video: "https://www.youtube.com/results?search_query=curl+martillo+mancuernas" },
    { id: "plancha", musculo: "Core", nombre: "Plancha Frontal", series: "3-4 series x 30-45s", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=200", video: "https://www.youtube.com/results?search_query=plancha+abdominal+tecnica" }
  ],
  dia2: [
    { id: "goblet", musculo: "Pierna", nombre: "Goblet Squat (Globo)", series: "3 series x 12-15 reps", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=200", video: "https://www.youtube.com/results?search_query=goblet+squat+tecnica" },
    { id: "prensa", musculo: "Pierna", nombre: "Prensa Horizontal", series: "3-4 series x 10-12 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=prensa+horizontal+piernas" },
    { id: "extensora", musculo: "Cuádriceps", nombre: "Cadeira Extensora", series: "3 series x 15 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=sillon+cuadriceps+extensora" },
    { id: "flexora", musculo: "Isquios", nombre: "Cadeira Flexora", series: "3 series x 15 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=camilla+femoral+flexora" },
    { id: "adutora", musculo: "Aductores", nombre: "Cadeira Adutora", series: "3 series x 15 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=maquina+aductora" },
    { id: "abdutora", musculo: "Abductores", nombre: "Cadeira Abdutora", series: "3 series x 15 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=maquina+abductora" },
    { id: "pelvica", musculo: "Glúteo", nombre: "Elevação Pélvica", series: "3 series x 15 reps", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=200", video: "https://www.youtube.com/results?search_query=puente+de+gluteo+suelo" },
    { id: "panto_prensa", musculo: "Gemelos", nombre: "Pantorrilla en Prensa", series: "3-4 series x 15 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=pantorrilla+en+prensa" },
    { id: "abd_reto", musculo: "Abdomen", nombre: "Abdominal Reto", series: "4 series x 15 reps", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=200", video: "https://www.youtube.com/results?search_query=crunch+abdominal+suelo" }
  ],
  dia3: [
    { id: "puxada", musculo: "Espalda", nombre: "Puxada Anatômica", series: "3-4 series x 10-12 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=jalon+al+pecho+polea+tecnica" },
    { id: "serrote", musculo: "Espalda", nombre: "Serrote Mancuerna", series: "3 series x 10-12 reps", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200", video: "https://www.youtube.com/results?search_query=remo+con+mancuerna+serrote" },
    { id: "remo_sentado", musculo: "Espalda", nombre: "Remo Barra Anatómica", series: "3 series x 10-12 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=remo+sentado+en+polea+baja" },
    { id: "pullover_polea", musculo: "Espalda", nombre: "Pullover Polea Alta", series: "3 series x 12-15 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=pullover+en+polea+alta+dorsal" },
    { id: "crucifijo_inv", musculo: "Deltoides Post", nombre: "Crucifijo Inverso", series: "3 series x 15 reps", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=200", video: "https://www.youtube.com/results?search_query=pajaros+con+mancuernas+deltoides+posterior" },
    { id: "triceps_corda", musculo: "Tríceps", nombre: "Tríceps Corda Polea", series: "3-4 series x 12-15 reps", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200", video: "https://www.youtube.com/results?search_query=extension+triceps+cuerda+polea" },
    { id: "triceps_frances", musculo: "Tríceps", nombre: "Tríceps Francés", series: "3 series x 10-12 reps", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200", video: "https://www.youtube.com/results?search_query=press+frances+triceps+mancuerna" }
  ]
};

function inicializarApp() {
  for (const dia in rutinaData) {
    const contenedor = document.getElementById("lista-" + dia);
    if (!contenedor) continue;
    contenedor.innerHTML = "";

    rutinaData[dia].forEach(ex => {
      const pesoGuardado = localStorage.getItem("peso_" + ex.id) || "";
      const tagClass = "tag-" + ex.musculo.toLowerCase().replace(/[\s/]/g, "-");

      const card = document.createElement("div");
      card.className = "exercise-card";
      card.innerHTML = `
        <div class="card-top">
          <img class="thumb" src="${ex.img}" alt="${ex.nombre}" loading="lazy">
          <div class="info">
            <span class="tag ${tagClass}">${ex.musculo}</span>
            <h3>${ex.nombre}</h3>
            <div class="scheme">${ex.series}</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="weight-control">
            <label for="input-${ex.id}">Peso:</label>
            <input id="input-${ex.id}" class="weight-input" type="text" inputmode="decimal" 
                   value="${pesoGuardado}" placeholder="0 kg" 
                   onchange="guardarPeso('${ex.id}', this.value)">
          </div>
          <a href="${ex.video}" target="_blank" rel="noopener noreferrer" class="video-btn">
            ▶ Ver video
          </a>
        </div>
      `;
      contenedor.appendChild(card);
    });
  }
}

function guardarPeso(id, valor) {
  localStorage.setItem("peso_" + id, valor.trim());
}

function cambiarDia(diaId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
  document.getElementById(diaId).classList.add("active");
  event.target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function registrarEntrenamiento(nombreRutina, statusId) {
  const statusEl = document.getElementById(statusId);
  statusEl.style.color = "#38bdf8";
  statusEl.innerText = "Registrando en Google Drive...";

  const ahora = new Date();
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const diaSemana = diasSemana[ahora.getDay()];
  const fecha = ahora.toISOString().split("T")[0];

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fecha: fecha,
      diaSemana: diaSemana,
      rutina: nombreRutina,
      notas: "Completado"
    })
  }).then(() => {
    statusEl.style.color = "#10b981";
    statusEl.innerText = `✓ ¡Excelente! Guardado en Drive (${diaSemana} ${fecha}).`;
  }).catch(() => {
    statusEl.style.color = "#ef4444";
    statusEl.innerText = "Error al conectar con Drive.";
  });
}

document.addEventListener("DOMContentLoaded", inicializarApp);
