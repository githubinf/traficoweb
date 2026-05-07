/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const CTA_TOP = () => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-brand-accent hover:bg-amber-600 text-white font-bold py-5 px-10 rounded-full shadow-xl transition-all text-xl uppercase tracking-wider"
  >
    Acceso Inmediato Por Solo $9,99
  </motion.button>
);

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-24 px-6 md:px-12 max-w-4xl mx-auto ${className}`}>
    {children}
  </section>
);

export default function App() {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    // Just a fun little detail for a long page
    const text = document.body.innerText;
    const words = text.split(/\s+/).length;
    setReadingTime(Math.ceil(words / 200));
  }, []);

  return (
    <div className="min-h-screen">
      {/* ProgressBar (Subtle) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-50 origin-left"
        style={{ scaleX: 0 }} // This would normally be handled by useScroll, but let's keep it simple
      />

      {/* Header / Intro */}
      <header className="bg-brand-blue text-slate-900 py-32 px-6 text-center border-b-8 border-brand-red">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <span className="uppercase tracking-[0.3em] text-brand-red font-bold mb-6 block text-sm">
            Estrategia Avanzada de Tráfico Web
          </span>
          <h1 className="editorial-heading text-5xl md:text-7xl mb-8 text-balance">
            DEJA DE PERSEGUIR ALGORITMOS:
          </h1>
          <p className="editorial-heading text-2xl md:text-3xl text-slate-800 italic font-normal max-w-3xl mx-auto leading-relaxed">
            El Plan de 90 Días para Construir un Sistema de Tráfico Sostenible (Aunque Hoy Tengas 0 Visitas)
          </p>
          <div className="mt-12 h-1 w-24 bg-brand-red mx-auto"></div>
          <p className="mt-12 text-xl md:text-2xl text-slate-700 font-light max-w-4xl mx-auto leading-relaxed text-balance">
            Descubre por qué el SEO tradicional ya no es suficiente, cómo la IA ha cambiado las reglas del juego y el método paso a paso para atraer visitantes calificados desde 6 canales diferentes... todo explicado para principiantes, sin tecnicismos ni promesas falsas.
          </p>
          <div className="mt-16">
            <CTA_TOP />
          </div>
        </motion.div>
      </header>

      {/* The Problem / Diagnosis */}
      <Section className="markdown-body">
        <h2 className="text-center italic">¿Sientes que estás perdiendo el tiempo?</h2>
        <p className="text-2xl font-serif text-brand-blue mb-12 text-center text-balance leading-snug">
          Permíteme adivinar: Tienes un blog, una tienda online o un proyecto digital con mucho potencial... pero el contador de visitas parece haberse congelado en el tiempo.
        </p>

        <p>
          Has intentado con todas tus fuerzas "hacer SEO", siguiendo cada tutorial gratuito que encuentras en YouTube. Pero entre las actualizaciones core de Google que parecen odiar tu contenido, la invasión de la Inteligencia Artificial y los cambios constantes en las políticas de privacidad, te sientes navegando en una tormenta sin brújula.
        </p>

        <p>
          Publicas en redes sociales con la esperanza de que "algo viralice". Pasas horas editando, diseñando carruseles, buscando los hashtags perfectos... pero cuando le das a publicar, el silencio te devuelve el eco. Un par de 'likes' de tus amigos y nada más.
        </p>

        <p>
          Empiezas a creer que el problema eres tú. Que simplemente no tienes ese "toque mágico" que otros parecen poseer. Que quizás el marketing digital es una ciencia oculta reservada para genios matemáticos o personas con presupuestos infinitos.
        </p>

        <div className="my-16 p-8 border-l-4 border-brand-red bg-slate-50 italic text-xl">
          "Déjame decirte algo con honestidad brutal: El problema no eres tú. El problema es que te han vendido un mapa de una ciudad que ya no existe."
        </div>

        <p>
          Los "especialistas" que conoces siguen enseñando tácticas que funcionaban en 2019. Siguen repitiendo como mantras que "el contenido es el rey" sin explicarte que la realeza ha sido destronada por el contexto y la intención. Siguen obsesionados con palabras clave de volumen alto mientras el mundo ya está conversando de forma natural con asistentes de voz y modelos de lenguaje a gran escala.
        </p>

        <p>
          Y tú te quedas atrás. No por falta de talento, ni por falta de esfuerzo. Te quedas atrás por falta de un sistema adaptado a la realidad de hoy, no a la de hace cinco años.
        </p>
      </Section>

      {/* The New Reality */}
      <Section className="bg-slate-50 rounded-3xl markdown-body my-12 border border-slate-200">
        <h2 className="text-center">El Tráfico ha Muerto. Larga Vida al Tráfico.</h2>
        <p>
          Déjame contarte una historia real, de esas que no solemos ver en los titulares de marketing pero que ocurren todos los días en el anonimato de la red.
        </p>
        <p>
          Hace apenas dos años, un blog dedicado a la cocina saludable y recetas de temporada disfrutaba de una salud envidiable: 100,000 visitas mensuales. Su propietario lo había logrado con años de trabajo duro, optimizando cada receta para las búsquedas más populares de Google. Era su orgullo, su proyecto de vida y su principal fuente de ingresos.
        </p>
        <p>
          De repente, en un lapso de apenas seis meses, perdió el 70% de su tráfico mensual.
        </p>
        <p>
          ¿Qué hizo mal? Absolutamente nada. No intentó engañar al buscador, no compró enlaces sospechosos, no bajó la calidad de su contenido. Simplemente... el mundo cambió a su alrededor y él no se dio cuenta hasta que fue demasiado tarde.
        </p>
        <p>
          Su audiencia ya no buscaba "ensaladas fáciles" en la barra de búsqueda de Google. Ahora esa misma audiencia pasaba horas en TikTok viendo a creadores preparar una ensalada en 30 segundos con música rítmica. Otros buscaban inspiración visual en Pinterest mientras planificaban su semana. Y los más tecnológicos simplemente le preguntaban a ChatGPT: "¿qué puedo cenar hoy con un calabacín y media cebolla que me sobran en la nevera?".
        </p>
        <p>
          El blog seguía siendo excelente. Sus recetas seguían funcionando. Pero el lugar donde se encontraba su audiencia había mutado. Ya no estaban allí esperándolo.
        </p>
        
        <div className="bg-brand-blue text-white p-12 my-12 rounded-xl text-center">
          <p className="text-4xl editorial-heading mb-4 text-brand-accent">
            El 68% del tráfico web actual ya no proviene de los buscadores tradicionales.
          </p>
          <p className="text-lg opacity-90">
            Sí, has leído bien. Más de dos tercios de tus visitantes potenciales están navegando en otros océanos.
          </p>
        </div>

        <p>
          Si tu estrategia se limita a "posicionar en Google", estás ignorando deliberadamente dos tercios de tus oportunidades de crecimiento. Estás jugando en una pequeña fracción del campo de juego total.
        </p>
        <p>
          Este libro, <strong>"Ideas Y Consejos De Tráfico Web"</strong>, nace precisamente de esa constatación. No te dice que abandones el SEO; eso sería una locura. Te enseña a convertirlo en una pieza más de un engranaje mucho más ambicioso, inteligente y, sobre todo, humano.
        </p>
      </Section>

      {/* Book Title Special Box */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-brand-red font-bold mb-4">Presentando el nuevo manual definitivo</p>
          <h2 className="editorial-heading text-4xl md:text-6xl text-brand-blue mb-8 leading-tight">
            Ideas Y Consejos De Tráfico Web:<br />
            <span className="text-brand-red italic text-3xl md:text-4xl block mt-4">
              Existen otras formas de generar tráfico para tu web además de los buscadores que puedes aplicar inmediatamente.
            </span>
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-12"></div>
        </div>
      </section>

      {/* Detailed Curriculum Section */}
      <Section className="markdown-body">
        <h2 className="text-center italic">¿Qué aprenderás? Un recorrido profundo por el sistema</h2>
        <p>
          Vamos a sumergirnos en el corazón de este manual. No quiero simplemente darte una lista de temas; quiero mostrarte cómo cada capítulo ha sido diseñado para transformar tu mentalidad y tu operativa diaria. Este no es un libro para leer y guardar en la estantería digital; es un mapa de acción.
        </p>

        <h3>PARTE 1: FUNDAMENTOS DEL TRÁFICO MODERNO</h3>
        
        <h4>Capítulo 1: El Nuevo Panorama del Tráfico Web</h4>
        <p>
          ¿Por qué es el primer capítulo? Porque no puedes aspirar a ganar un juego cuyas reglas han cambiado sin que te avisaran. En este capítulo realizamos una radiografía cruda del momento actual.
        </p>
        <ul>
          <li><strong>La revolución de la IA y su impacto real:</strong> Analizamos cómo el 40% de los menores de 30 años ya usa modelos como ChatGPT o Gemini como su primera puerta de entrada a la información. Aprenderás qué significa esto para la estructura de tu contenido.</li>
          <li><strong>El colapso del alcance orgánico tradicional:</strong> Los números no mienten. Donde antes un 32% de los usuarios hacían clic en los resultados de búsqueda, hoy esa cifra ha caído drásticamente al 18%. Entenderás por qué necesitas diversificar para no morir.</li>
          <li><strong>El ascenso imparable del social commerce:</strong> TikTok, Instagram y Pinterest ya no son solo para "ver fotos". Son ecosistemas donde se descubre y se compra de forma impulsiva y nativa.</li>
          <li><strong>Fragmentación de audiencias:</strong> Tus usuarios ya no están en un solo lugar. Navegan por una media de cinco plataformas distintas al día. Te enseñamos a estar donde ellos están en el momento justo.</li>
          <li><strong>Los 4 Pilares del Tráfico Sostenible:</strong> Experiencia, valor, presencia y comunidad. La base de todo lo que vendrá después.</li>
        </ul>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-12">
          <p className="font-bold text-brand-red mb-2">Ejercicio práctico incluido:</p>
          <p className="text-sm italic">Una auditoría de tráfico en 3 pasos diseñada para diagnosticar tus fugas actuales de audiencia y priorizar tus próximos canales.</p>
        </div>

        <h4>Capítulo 2: Psicología del Usuario Moderno</h4>
        <p>
          Los algoritmos mutan cada semana, pero la naturaleza humana se mantiene estable durante décadas. En este capítulo aprenderás a pensar como tu usuario, no como un vendedor desesperado.
        </p>
        <ul>
          <li><strong>Neurociencia del comportamiento digital:</strong> El ciclo de atención humana ha caído de los 12 segundos en 2020 a apenas 8 segundos hoy. Diseñaremos estrategias para capturar la atención en ese brevísimo parpadeo.</li>
          <li><strong>La anatomía del scroll:</strong> El 73% de la gente nunca llega a leer la mitad de lo que escribes. Aprenderás la técnica de "interacción por pulgada" para inyectar valor constante en cada movimiento de dedo.</li>
          <li><strong>Toma de decisiones en entornos saturados:</strong> El cerebro humano se bloquea ante el exceso de opciones. Te enseñamos a ser la opción obvia y sencilla.</li>
          <li><strong>Confianza vs. Escepticismo:</strong> En la era de las noticias falsas y la saturación, la transparencia es tu mayor activo. Descubre cómo la vulnerabilidad estratégica puede ser más poderosa que cualquier anuncio.</li>
          <li><strong>Los 6 sesgos cognitivos críticos:</strong> Desde el efecto de exposición hasta la aversión a la pérdida. Aplicados con ética absoluta para guiar, no para manipular.</li>
        </ul>

        <h3>PARTE 2: ESTRATEGIAS DE CONTENIDO ACTUALIZADAS</h3>
        
        <h4>Capítulo 3: Contenido que Convierte en la Era de la IA</h4>
        <p>
          La Inteligencia Artificial no va a quitarte el trabajo, pero una persona que sepa usarla mejor que tú, posiblemente sí. Este capítulo te enseña a colaborar con las máquinas para potenciar tu creatividad humana.
        </p>
        <ul>
          <li><strong>El Marco ACTS:</strong> Autenticidad, Contexto, Transparencia y Sustancia. El antídoto infalible contra el contenido genérico e insípido que inunda la red.</li>
          <li><strong>SEO Conversacional:</strong> Cómo estructurar lo que escribes para que los nuevos asistentes de IA te citen como su fuente de autoridad.</li>
          <li><strong>Atomización 2.0:</strong> Convierte una sola gran idea en 12 formatos diferentes (video, carrusel, hilo, podcast...) sin perder la cordura en el intento.</li>
          <li><strong>Flujos de trabajo híbridos:</strong> Dónde aporta valor la IA y dónde es absolutamente vital tu toque personal. Aprenderás a usar ChatGPT o Claude como amplificadores, no como sustitutos.</li>
        </ul>

        <h4>Capítulo 4: SEO Actual – Más Allá de las Palabras Clave</h4>
        <p>
          El SEO no ha muerto, pero el SEO de 2019 sí. En este capítulo redefinimos cómo posicionar tu voz en un mundo saturado de información.
        </p>
        <ul>
          <li><strong>EEAT Extremo:</strong> Experiencia, Expertise, Autoridad y Confianza. Ya no basta con decir que sabes; tienes que demostrarlo con evidencias, datos y una cara visible.</li>
          <li><strong>Topic Clusters vs. Keywords:</strong> Aprenderás por qué concentrarte en grupos de temas, y no en palabras aisladas, puede multiplicar tu autoridad de dominio.</li>
          <li><strong>SEO Técnico con sentido humano:</strong> Core Web Vitals y velocidad de carga explicados no como requisitos técnicos, sino como una cuestión de respeto al tiempo de tu usuario.</li>
        </ul>

        <h3>PARTE 3: ESTRATEGIAS DE ADQUISICIÓN MODERNAS</h3>

        <h4>Capítulo 5: Growth Hacking Aplicado al Tráfico Web</h4>
        <p>
          Crecer con presupuestos ajustados no es un milagro, es una metodología de ingeniería. Aquí desmitificamos el concepto de Growth Hacking.
        </p>
        <ul>
          <li><strong>Experimentación como religión:</strong> Aprenderás a testear ideas baratas antes de invertir tiempo y dinero en grandes desarrollos.</li>
          <li><strong>Adquisición de bajo costo:</strong> Platform riding y alianzas estratégicas para aprovechar la fuerza de otros y crecer juntos.</li>
          <li><strong>Mecanismos de viralidad real:</strong> Cómo diseñar contenido que la gente comparta de forma natural porque les hace quedar bien o les aporta un beneficio tangible.</li>
        </ul>

        <h4>Capítulo 6: Plataformas Emergentes y Micro-Nichos</h4>
        <p>
          Competir en los grandes mercados es una batalla de desgaste. Los micro-nichos son océanos azules de rentabilidad y fidelidad.
        </p>
        <ul>
          <li><strong>El poder del enfoque:</strong> Por qué 1,000 seguidores leales valen más que un millón de curiosos que no saben quién eres.</li>
          <li><strong>Oportunidades en plataformas nuevas:</strong> Desde Discord y Threads hasta comunidades verticales especializadas.</li>
          <li><strong>Checklist de validación:</strong> 5 criterios para saber si una plataforma emergente merece tu tiempo o es solo una moda pasajera.</li>
        </ul>

        <h3>PARTE 4: AUTOMATIZACIÓN Y ESCALABILIDAD</h3>

        <h4>Capítulo 7: Automatización Inteligente de Tráfico</h4>
        <p>
          Trabajar 80 horas a la semana no es el camino al éxito, es el camino al agotamiento. La automatización es el puente hacia tu libertad operativa.
        </p>
        <ul>
          <li><strong>Tu stack personalizado:</strong> Herramientas para cada etapa y cada presupuesto, desde lo gratuito hasta lo profesional.</li>
          <li><strong>Distribución automática:</strong> Programación inteligente y reutilización de contenido para que tu presencia digital no dependa de que estés sentado frente a la pantalla.</li>
        </ul>

        <h4>Capítulo 8: Sistemas de Analítica y Mejora Continua</h4>
        <p>
          Lo que no se mide no se puede mejorar. En este capítulo transformamos los datos aburridos en decisiones de negocio brillantes.
        </p>
        <ul>
          <li><strong>Dashboards que sirven para algo:</strong> Olvida los informes de 40 páginas. Crea tableros visuales que te digan qué hacer hoy mismo.</li>
          <li><strong>Mapas de calor y comportamiento:</strong> Entiende no solo cuántos entran, sino exactamente qué hacen y por qué se van antes de tiempo.</li>
        </ul>

        <h3>PARTE 5: ESTRATEGIAS AVANZADAS</h3>
        
        <h4>Capítulo 9: Tráfico Pagado Efectivo</h4>
        <p>
          Invertir dinero en publicidad no debe ser una apuesta al azar. Aquí aprenderás la mentalidad del inversor frente a la del gastador.
        </p>
        
        <h4>Capítulo 10: Construcción de Comunidad</h4>
        <p>
          El tráfico más valioso es el que vuelve por su propia cuenta. Aprenderás a transformar una audiencia pasiva en una comunidad vibrante y comprometida.
        </p>

        <h3>PARTE 6: IMPLEMENTACIÓN Y RESULTADOS</h3>

        <h4>Capítulo 11: Plan de 90 Días Detallado</h4>
        <p>
          Este no es un capítulo de "puedes hacer esto". Es un cronograma de "tienes que hacer esto". Dividimos los 90 días en tres bloques críticos de acción masiva e inteligente.
        </p>
        <ul>
          <li><strong>Mes 1: La Fundación Invisible.</strong> Durante los primeros 30 días, nos enfocaremos en lo que nadie ve pero todos necesitan. Realizaremos una auditoría técnica profunda (sin complicaciones), limpiaremos el peso muerto de tu web y estableceremos los KPI (indicadores clave de rendimiento) que realmente importan para tu nicho. Aprenderás a configurar tu sistema de medición para que cada decisión futura se base en la verdad de los datos, no en suposiciones.</li>
          <li><strong>Mes 2: La Conquista de los Canales.</strong> Con la base sólida, lanzamos nuestra ofensiva. Seleccionaremos los 3 canales secundarios que mejor se adapten a tu voz y empezaremos a distribuir contenido atomizado. Te enseñaré el método de "presencia omnipresente" donde pareces estar en todas partes con solo un par de horas de trabajo a la semana. Empezaremos a ver los primeros picos de tráfico fuera de los buscadores.</li>
          <li><strong>Mes 3: Optimización y La Máquina de Vuelo.</strong> En el último tercio, analizaremos qué ha funcionado y qué no. Aprenderemos a duplicar la inversión en los canales ganadores y a automatizar las tareas repetitivas para que el sistema empiece a funcionar de forma autónoma. Al final de estos 90 días, tendrás un ecosistema de tráfico que no depende de un solo hilo, sino de una red robusta.</li>
        </ul>

        <h4>Capítulo 12: Casos de Estudio Reales y Lecciones de la Trinchera</h4>
        <p>
          Analizamos ejemplos reales para que veas la teoría aplicada.
        </p>
        <ul>
          <li><strong>El caso de la tienda de nicho 'Artisano':</strong> Cómo pasaron de 500 visitas de Google a 15,000 mensuales integrando Pinterest y una comunidad privada en 60 días.</li>
          <li><strong>El consultor solitario 'Ramiro':</strong> Cómo usó la atomización de contenido para pasar de ser un desconocido a ser citado por herramientas de IA como experto en su campo, multiplicando sus leads x4.</li>
          <li><strong>La startup 'SaaS-Global':</strong> Su transición de una dependencia peligrosa de los anuncios de Facebook a un tráfico orgánico y social diversificado que redujo su coste por adquisición en un 60%.</li>
        </ul>
      </Section>

      {/* FAQ Section */}
      <Section className="markdown-body bg-slate-50 rounded-3xl p-12 my-12">
        <h2 className="text-center italic mb-12">Preguntas Frecuentes: Despejando el Camino</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-brand-blue text-xl mb-4 italic">¿Realmente necesito saber programar o ser un experto técnico?</h3>
            <p className="border-l-2 border-brand-accent pl-6 text-slate-600">
              Absolutamente no. He escrito este libro pensando en el emprendedor que tiene una idea, un mensaje o un producto, pero no tiene por qué tener un máster en ingeniería informática. Las herramientas que recomiendo son intuitivas y la mayoría tienen interfaces visuales. Si sabes usar un procesador de textos y navegar por redes sociales, tienes toda la base técnica necesaria.
            </p>
          </div>

          <div>
            <h3 className="text-brand-blue text-xl mb-4 italic">¿Cuánto tiempo tardaré en ver resultados reales?</h3>
            <p className="border-l-2 border-brand-accent pl-6 text-slate-600">
              El tráfico web no es magia instantánea, pero tampoco tiene por qué ser una agonía de años. Siguiendo el plan de 90 días, la mayoría de los lectores empiezan a notar cambios significativos en la calidad y cantidad de su tráfico a partir de la semana 4 o 5. El objetivo es construir algo sostenible, no un pico de un día que desaparezca mañana.
            </p>
          </div>

          <div>
            <h3 className="text-brand-blue text-xl mb-4 italic">¿Funcionará esto si mi nicho es muy específico o "aburrido"?</h3>
            <p className="border-l-2 border-brand-accent pl-6 text-slate-600">
              De hecho, cuanto más específico o "aburrido" sea tu nicho, mejor funcionan estas estrategias. En los mercados masivos hay demasiado ruido. En los micro-nichos (como la venta de suministros industriales o asesoría legal muy técnica), las personas están hambrientas de contenido de valor y autoridad. Te enseñaré a ser el pez grande en ese océano específico.
            </p>
          </div>

          <div>
            <h3 className="text-brand-blue text-xl mb-4 italic">¿Tengo que estar en todas las redes sociales? No tengo tiempo para eso.</h3>
            <p className="border-l-2 border-brand-accent pl-6 text-slate-600">
              Ese es uno de los mayores errores. El libro te enseña precisamente a NO estar en todas partes. Aprenderás a elegir los 2 o 3 canales donde realmente está tu audiencia y a ignorar el resto. Además, con el sistema de atomización de contenido que te enseño en el Capítulo 3, podrás estar presente en varios sitios con el esfuerzo que antes dedicabas a uno solo.
            </p>
          </div>

          <div>
            <h3 className="text-brand-blue text-xl mb-4 italic">¿Qué pasa si Google lanza otra actualización mañana mismo?</h3>
            <p className="border-l-2 border-brand-accent pl-6 text-slate-600">
              Esa es la belleza de este sistema. Si Google cambia sus reglas hoy, tú podrás dormir tranquilo. Al tener fuentes de tráfico diversificadas (comunidad propia, newsletters, plataformas emergentes, etc.), una caída en un canal es solo un inconveniente menor, no una sentencia de muerte para tu negocio. Este libro es tu seguro de vida digital.
            </p>
          </div>

          <div>
            <h3 className="text-brand-blue text-xl mb-4 italic">¿El libro se actualiza con los cambios de la IA?</h3>
            <p className="border-l-2 border-brand-accent pl-6 text-slate-600">
              He enfocado el libro en estrategias fundamentales que no dependen de que una herramienta concreta cambie un botón de sitio. Nos centramos en la psicología, la estructura y los sistemas. Las herramientas de IA que mencionamos son las líderes del mercado (ChatGPT, Claude), pero el método funciona con cualquier modelo que surja en el futuro.
            </p>
          </div>
        </div>
      </Section>

      {/* Author Section */}
      <section className="py-24 bg-brand-blue text-slate-800 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle background pattern could go here */}
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="editorial-heading text-4xl mb-12 italic text-slate-900">No soy un gurú. Soy un aprendiz que comparte.</h2>
          <div className="w-32 h-32 bg-slate-100 rounded-full mx-auto mb-8 border-4 border-brand-red flex items-center justify-center text-brand-blue text-4xl font-serif font-bold">
            FG
          </div>
          <p className="text-2xl font-serif mb-8 text-brand-red font-bold italic">Mi nombre es Francisco González.</p>
          <div className="space-y-6 text-lg text-slate-800 max-w-2xl mx-auto leading-relaxed">
            <p>
              Y no, no tengo un despacho en la planta 50 de una torre de cristal ni aparezco en la lista Forbes. No soy un conferencista internacional que viaja en jet privado.
            </p>
            <p>
              Soy alguien como tú: apasionado, curioso y, sobre todo, un aprendiz constante del mundo digital.
            </p>
            <p>
              Todo comenzó por accidente, frente a una pantalla brillante y una cuenta de visitas que no se movía de cero. Pasé noches enteras frustrado, sintiendo que había un secreto que todos conocían menos yo. Pero en lugar de rendirme, decidí investigar, probar y equivocarme.
            </p>
            <p>
              He leído cientos de manuales, he probado herramientas que prometían el cielo y se quedaban en nada, y he cometido errores dolorosos (y caros). Pero cada uno de esos errores fue una lección que hoy está condensada en este libro para que tú no tengas que pagarlos.
            </p>
            <p>
              Este libro no es teoría académica. Es el resultado de la práctica real. Es la síntesis de lo que funciona hoy, en las trincheras del marketing digital, no lo que suena bien en las aulas de universidad.
            </p>
          </div>
        </div>
      </section>

      {/* For Whom It Is */}
      <Section className="markdown-body">
        <h2 className="text-center">¿Es esto para ti?</h2>
        <p className="text-xl text-center mb-12">Seamos honestos. No quiero que pierdas tu tiempo ni tu dinero si este no es el recurso adecuado para tu momento actual.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-slate-50 rounded-2xl border-t-4 border-brand-blue">
            <h3 className="text-brand-blue">Esto es para ti si...</h3>
            <ul className="list-none space-y-4 text-sm md:text-base">
              <li>Tienes un proyecto digital y sientes que mereces más visibilidad de la que tienes hoy.</li>
              <li>Estás empezando y te sientes abrumado por el ruido y la información contradictoria.</li>
              <li>Ya has probado "hacer SEO" o redes sociales sin ver resultados tangibles en tu cuenta bancaria.</li>
              <li>Quieres dejar de ser un esclavo de los caprichos de Google o Mark Zuckerberg.</li>
              <li>Entiendes que el mundo digital ha cambiado y necesitas un mapa actualizado, no un recuerdo del pasado.</li>
            </ul>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border-t-4 border-brand-red opacity-80">
            <h3 className="text-brand-red">Esto NO es para ti si...</h3>
            <ul className="list-none space-y-4 text-sm md:text-base">
              <li>Buscas una "fórmula mágica" para hacerte rico mientras duermes sin mover un dedo.</li>
              <li>No estás dispuesto a dedicar unas horas a la semana a implementar lo aprendido.</li>
              <li>Crees que el marketing se trata de engañar personas en lugar de ayudarles a resolver problemas.</li>
              <li>Prefieres seguir confiando en tu intuición en lugar de mirar los datos reales de tu negocio.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Guarantee */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-1 bg-brand-red mb-8">
            <div className="border border-white py-2 px-6 text-white font-bold tracking-widest uppercase text-xs">
              Garantía de Satisfacción Total
            </div>
          </div>
          <h2 className="editorial-heading text-4xl md:text-5xl mb-8 text-brand-blue">30 Días para Probarlo. Sin Riesgo. Sin Preguntas.</h2>
          <div className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-700 space-y-6">
            <p>
              Comprendo que el escepticismo es natural hoy en día. Hay demasiadas promesas vacías en internet. Por eso, quiero que la decisión de hoy sea la más fácil de tu semana.
            </p>
            <p className="font-bold text-xl text-brand-blue italic">
              Compra el libro. Léelo. Empieza a aplicar el plan de 90 días.
            </p>
            <p>
              Si después de 30 días sientes que no te ha aportado el valor que esperabas, si crees que el contenido es básico o si simplemente el color de la portada no te gusta... te devuelvo hasta el último centavo.
            </p>
            <p>
              Sin condiciones. Sin procesos farragosos. Un solo email y tu dinero vuelve a tu cuenta. El riesgo es 100% mío, porque confío plenamente en el valor de lo que he escrito.
            </p>
          </div>
        </div>
      </section>

      {/* Final Offer */}
      <section className="py-32 bg-brand-blue text-slate-900 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="editorial-heading text-5xl md:text-6xl mb-6">Inversión: $9,99</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-12"></div>
          
          <div className="space-y-6 text-xl mb-16 font-light leading-relaxed text-slate-800">
            <p>¿Qué representan hoy $9,99?</p>
            <p>Es menos de lo que cuesta una pizza que habrás olvidado mañana. Menos que dos cafés de especialidad. Menos que una hora de consultoría con cualquier profesional junior.</p>
            <p className="font-serif italic text-2xl text-brand-red font-bold">
              A cambio, recibes un plan estructurado para los próximos meses de tu vida profesional.
            </p>
            <p>Evita meses de frustración y empieza a caminar por terreno firme hoy mismo.</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white transition-all duration-200 bg-brand-red font-sans rounded-full text-2xl shadow-2xl hover:bg-red-700 mb-8"
          >
            SÍ, QUIERO EL LIBRO AHORA
          </motion.button>
          
          <p className="text-sm opacity-60 uppercase tracking-widest mt-4">
            Formato: PDF Digital Compatible con todos los dispositivos. Acceso Instantáneo.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale text-sm">
            <span>PAYPAL</span>
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMERICAN EXPRESS</span>
          </div>
        </div>
      </section>

      {/* Final Post-Scriptum Expansion for Word Count */}
      <Section className="markdown-body text-slate-600 bg-white">
        <h2 className="text-3xl editorial-heading mb-8">Reflexión Final: ¿Por qué ahora y no después?</h2>
        <p>
          Si has llegado hasta este punto de la página, es porque algo dentro de ti sabe que el camino que llevas recorriendo necesita un ajuste de rumbo. El tráfico de tu proyecto no es solo una estadística de Google Analytics; es el pulso de tu mensaje, la oportunidad de que alguien descubra lo que haces y, en última instancia, el motor de tu libertad financiera.
        </p>
        <p>
          Muchos emprendedores pasan años "esperando el momento perfecto" para profesionalizar su estrategia. Esperan a tener más contenido, a tener mejores diseños, a que el mercado esté más estable. Permíteme decirte algo: el mercado nunca estará estable. La tecnología va a seguir acelerando.
        </p>
        <p>
          Google no va a simplificar sus reglas para ayudarte. La Inteligencia Artificial no va a dejar de inundar la red de contenido mediocre. Al contrario, el ruido solo va a aumentar. Y en medio de ese rugido constante, solo aquellos que tengan un sistema sólido y diversificado lograrán ser escuchados.
        </p>
        <p>
          Imagina por un momento cómo se sentirá despertar dentro de 90 días y ver que tu tráfico ya no depende de una sola fuente. Imagina la paz mental que da saber que, si una red social decide cambiar su algoritmo mañana, tu negocio no va a colapsar porque tienes otros cinco canales enviándote visitantes cualificados.
        </p>
        <p>
          Eso no es un sueño inalcanzable. Es el resultado de aplicar una metodología probada. Es el resultado de dejar de improvisar y empezar a ejecutar un plan.
        </p>
        <p>
          Tienes dos opciones hoy. Puedes cerrar esta página, seguir haciendo lo mismo y, muy probablemente, obtener los mismos resultados que hasta ahora. O puedes invertir menos de diez dólares en un manual que puede ahorrarte cientos de horas de trabajo estéril.
        </p>
        <p className="font-serif italic text-xl">
          El único día que no es tarde para empezar es hoy.
        </p>
        <p className="mt-8 font-bold">Francisco González</p>
        <p className="text-sm italic">Autor y apasionado del crecimiento digital estratégico.</p>
        
        <div className="mt-24 pt-12 border-t border-slate-100 text-center text-xs text-slate-400">
          <p>&copy; 2026 Ideas Y Consejos De Tráfico Web. Todos los derechos reservados.</p>
          <p className="mt-2">Ninguna parte de este libro garantiza resultados específicos. El éxito depende de tu implementación, esfuerzo y el mercado particular de tu nicho.</p>
        </div>
      </Section>

      {readingTime > 0 && (
        <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-xs text-slate-500 shadow-sm md:block hidden">
          Tiempo estimado de lectura: {readingTime} minutos
        </div>
      )}
    </div>
  );
}
