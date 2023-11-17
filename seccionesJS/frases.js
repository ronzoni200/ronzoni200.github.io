
const frasesPositivas = [
    "¡Eres increíble!",
    "Tu positividad es contagiosa.",
    "Hoy es un buen día para sonreír.",
    "Eres capaz de lograr grandes cosas.",
    "La vida es mejor contigo en ella.",
    "La frustración forma el carácter para tu próximo éxito.",
    "Las cosas cambian cuando permaneces a pesar de todo.",
    "Tu esfuerzo va a dar fruto.",
    "Sos capaz, sos importante, no aflojes.",
    "Ni las cosas, ni las personas te definen.",
    "Gracias por seguir sonriendo.",
    "Muchas cosas que te generan ansiedad no van a pasar.",
    "Las oportunidades vienen, pero también hay que buscarlas.",
    "La franqueza te embellece.",
    "No suma a tu vida la comparación, mejor mira tus virtudes.",
    "Sos un 10.", 
    "Esperar puede parecer lento, pero la sabiduría la acompaña.",
    "Cada día estás más cerca de tus metas.",
    "Disfrutas cada momento y encuentras alegría en las pequeñas cosas.",
    "Tu actitud positiva crea oportunidades en tu vida.",
    "Eres capaz de superar cualquier desafío que se presente.",
    "Hoy eliges ser feliz y optimista.",
    "Confías en tu capacidad para enfrentar lo que venga.",
    "Cada día eres una mejor versión de vos.",
    "El amor y la gratitud llenan tu corazón.",
    "Tus pensamientos positivos crean tu realidad.",
    "Atraes éxito y prosperidad con cada decisión que tomas.",
    "Te amas y te aceptas tal como eres.",
    "Tu vida está llena de abundancia y felicidad.",
    "Eres valiente, fuerte y resiliente en todo lo que haces.",
    "Cada desafío es una oportunidad para crecer y aprender.",
    "Te mereces de todas las cosas buenas que la vida tiene para ofrecer.",
    "La paz comienza contigo, y eliges vivir en armonía.",
    "Tu corazón está lleno de amor y gratitud.",
    "Sientes una profunda paz interior y confianza en el futuro.",
    "Hoy eliges ser positiv@ y ver lo bueno en todas las cosas.",
    "Evitas quejarte y buscas soluciones en lugar de problemas.",
    "Comprendes que cada día es una oportunidad para aprender y crecer.",
    "Te enfocas en tus propias metas y logros, sin compararte con los demás.",
    "Agradeces por lo que tienes y te concentras en lo positivo de tu vida.",
    "Evitas la energía negativa y rodeas tu vida de pensamientos constructivos.",
    "Eres consciente de que la queja no te lleva hacia adelante; la acción sí lo hace.",
    "Comprendes que tu viaje es único y no necesita compararse con el de los demás.",
    "Celebras tus éxitos y aprendes de tus desafíos sin lamentarte.",
    "Optas por ver oportunidades en lugar de obstáculos.",
    "Aprecias la belleza de tu propia vida, sin compararla con la de los demás."
  ];
  

  function obtenerFrasePositiva() {
    const indice = Math.floor(Math.random() * frasesPositivas.length);
    return frasesPositivas[indice];
  }
  function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() !== '') {
      const frasePositiva = obtenerFrasePositiva();
      document.getElementById('mensaje').innerHTML = `<p class="parrafo">${nombre}, ${frasePositiva}</p>`;
    } else {
      alert("Por favor, ingresa tu nombre.");
    }
  }