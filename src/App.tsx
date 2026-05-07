import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Check, ShieldCheck, Star } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const MAIN_LINK = "https://fcofrancis.pay.clickbank.net/?cbitems=15";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const CTAButton = ({ text = "ADQUIRIR ACCESO INMEDIATO", isFinal = false }: { text?: string; isFinal?: boolean }) => {
  if (isFinal) {
    return (
      <motion.a
        href={MAIN_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-cta"
      >
        {text}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={() => scrollToSection("oferta")}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="btn-cta"
    >
      {text}
    </motion.button>
  );
};

const AnchorButton = ({ text, target }: { text: string; target: string }) => (
  <button
    onClick={() => scrollToSection(target)}
    className="btn-anchor"
  >
    {text} <ArrowDown className="ml-2 w-4 h-4" />
  </button>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-8 pb-24 px-6 bg-brand-paper overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-3/5 text-center md:text-left"
          >
            <div className="inline-block px-6 py-2 bg-brand-accent/10 border border-brand-accent/30 mb-8 rounded-full">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-brand-secondary uppercase">Estrategia de Crecimiento Avanzada 2026</span>
            </div>
            
            <h1 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1] tracking-tighter">
              IDEAS Y CONSEJOS <br />
              <span className="text-brand-accent italic">DE TRÁFICO WEB</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-8 font-medium leading-tight">
              Existen otras formas de generar tráfico para tu web además de los buscadores que puedes aplicar inmediatamente.
            </p>
            
            <p className="text-lg md:text-xl text-slate-500 mb-10 font-light max-w-2xl">
              DEJA DE PERSEGUIR ALGORITMOS: El Plan de 90 Días para Construir un Sistema Sostenible
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <CTAButton text="QUIERO MI COPIA AHORA" />
              <div className="flex flex-col items-center md:items-start">
                <button 
                  onClick={() => scrollToSection("oferta")}
                  className="text-lg font-bold tracking-tight uppercase underline decoration-brand-accent decoration-2 underline-offset-8 transition-opacity hover:opacity-70 text-brand-primary"
                >
                  Inversión: $9,99
                </button>
                <p className="text-xs text-slate-400 font-medium tracking-widest uppercase italic mt-2">Acceso Instantáneo • PDF</p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-2xl italic border-l-4 border-brand-accent/30 pl-6">
              Descubre por qué el SEO tradicional ya no es suficiente y el método paso a paso para atraer visitantes calificados desde 6 canales diferentes... sin tecnicismos ni promesas falsas.
            </p>
          </motion.div>

          {/* Book Cover Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-accent/20 translate-x-4 translate-y-4 -z-10 blur-2xl group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700" />
              <img 
                src="https://i.ibb.co/r26jfDh4/ideas-y-consejos-de-trafico-web.png" 
                alt="Portada Libro: Ideas y Consejos de Tráfico Web" 
                className="w-full max-w-[320px] md:max-w-sm h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:rotate-1 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Diagnosis Section */}
      <section className="py-16 px-6 bg-brand-paper border-t border-slate-100">
        <div className="max-w-4xl mx-auto prose-editorial">
          <SectionTag text="EL DIAGNÓSTICO" />
          <h2>¿Sientes Que Estás Perdiendo el Tiempo?</h2>
          
          <p>
            Permíteme adivinar: Tienes un blog, una tienda online o un proyecto digital con mucho potencial... pero nadie lo visita. La realidad del contador de visitas es una bofetada diaria que te recuerda que, a pesar de tu esfuerzo, algo no termina de encajar.
          </p>

          <p>
            Has intentado con todas tus fuerzas "hacer SEO", pero entre las actualizaciones core de Google, la irrupción masiva de la IA y los cambios constantes en las políticas de privacidad, te sientes profundamente perdido. Sientes que el suelo que pisas se mueve cada vez que crees haber encontrado estabilidad.
          </p>

          <p>
            Publicas en redes sociales con la esperanza ciega de que "algo viralice"... pero el silencio absoluto te devuelve el eco. Un par de me gusta de cortesía es todo lo que obtienes a cambio de horas de trabajo creativo.
          </p>

          <p className="bg-slate-50 p-6 rounded-sm border-l-4 border-brand-accent italic text-2xl leading-relaxed text-brand-primary">
            "Déjame decirte algo con honestidad brutal: El problema no eres tú. El problema es que te han vendido un mapa de una ciudad que ya no existe."
          </p>

          <p>
            Los supuestos expertos que conoces siguen enseñando los mismos principios de posicionamiento orgánico de 2019. Siguen repitiendo como un mantra que "el contenido es el rey" sin explicarte que la realeza ha cambiado de manos. Siguen hablando de palabras clave cuando el mundo ya está conversando de forma natural con asistentes generativos.
          </p>

          <p>
            Y tú, mientras tanto, te quedas atrás. No por falta de talento, ni por falta de dedicación. Te quedas atrás simplemente por falta de información actualizada y contextualizada a la era de la IA.
          </p>
        </div>
      </section>

      {/* The New Reality */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
        <div className="max-w-4xl mx-auto prose-editorial relative z-10">
          <SectionTag text="LA NUEVA REALIDAD" />
          <h2 className="editorial-heading text-4xl md:text-6xl mb-8">El Tráfico ha Muerto. <br />Larga Vida al Tráfico.</h2>
          
          <p>
            Déjame contarte una historia real, de esas que no solemos inventar para rellenar páginas de manuales de marketing.
          </p>
          
          <p>
            Hace apenas dos años, un blog de cocina saludable disfrutaba de una salud envidiable: 100.000 visitas mensuales. Lo había logrado con recetas impecablemente optimizadas para Google. Era su orgullo, su proyecto de vida y su principal fuente de ingresos.
          </p>
 
          <p>
            De repente, en un suspiro de seis meses, perdió el 70% de su tráfico mensual.
          </p>
 
          <p className="font-semibold text-brand-accent">
            No hizo nada malo. No lo penalizaron por prácticas ilícitas. Simplemente... el mundo a su alrededor cambió.
          </p>
 
          <p>
            Su audiencia ya no buscaba "ensaladas fáciles" en Google de la forma tradicional. Ahora esa misma gente pasaba horas en TikTok viendo a alguien preparar esa misma ensalada en 30 segundos con un ritmo vibrante. Buscaban inspiración visual rápida en Pinterest. O, lo que es aún más revelador, le preguntaban directamente a ChatGPT: "¿qué puedo cenar hoy con lo que tengo en la nevera?".
          </p>
 
          <p>
            El blog seguía siendo excelente. Sus consejos seguían siendo válidos. Pero su audiencia ya no estaba allí esperándole.
          </p>
 
          <div className="my-12 flex flex-col items-center text-center p-12 bg-white border border-slate-200 shadow-sm">
            <span className="text-brand-accent text-6xl md:text-8xl font-serif mb-4 leading-none">68%</span>
            <p className="text-xl md:text-2xl text-brand-primary max-w-sm font-medium">
              del tráfico web actual ya no proviene de los motores de búsqueda tradicionales.
            </p>
          </div>
 
          <p>
            Sí, has leído con total precisión. Más de dos tercios de tus visitantes potenciales están navegando en otros océanos: redes sociales dinámicas, comunidades cerradas, podcasts de nicho, asistentes de voz, boletines personales.
          </p>
 
          <p>
            Si tu estrategia se limita al cansado mantra de "posicionar en Google", estás ignorando deliberadamente dos tercios de tus oportunidades reales de crecimiento.
          </p>

          <div className="mt-12 flex justify-center">
            <CTAButton text="SÍ, QUIERO SALIR DEL SILENCIO DIGITAL" />
          </div>
        </div>
      </section>

      {/* Chapters Walkthrough */}
      <section className="py-16 px-6 bg-brand-bg">
        <div className="max-w-6xl mx-auto">
          <SectionTag text="EL RECORRIDO" />
          <SectionHeading 
            title="Capítulo por Capítulo: Tu Transformación Estratégica" 
            subtitle="Este no es un libro para 'aprender'. Es un sistema diseñado para que actúes desde la primera página."
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <ChapterBlock 
              num={1}
              title="El Nuevo Panorama del Tráfico Web"
              description="No puedes aspirar a ganar un juego cuyas reglas no conoces. Este capítulo es la radiografía cruda del momento actual del marketing digital."
              items={[
                "La revolución de la IA: El 40% de los menores de 30 años ya usa asistentes como ChatGPT como su primer motor de búsqueda.",
                "El colapso del alcance orgánico: Entenderás por qué necesitas generar tres veces más atención para lograr los mismos resultados.",
                "El ascenso del Social Commerce: Plataformas donde el usuario descubre y compra sin salir de la aplicación nativa.",
                "Los 4 Pilares del Tráfico Sostenible: Experiencia, Valor, Presencia y Comunidad activa para un crecimiento a prueba de futuro."
              ]}
            />
            <ChapterBlock 
              num={2}
              title="Psicología del Usuario Moderno"
              description="Los algoritmos son volátiles, pero la naturaleza humana se mantiene constante. Aprende a pensar como tu usuario, no como un vendedor."
              items={[
                "Neurociencia del comportamiento: Diseña estrategias para un ciclo de atención reducido a apenas 8 segundos.",
                "Estructura del scroll vertical: El 73% de los usuarios nunca llegan a la mitad de tu contenido. Aprende a retenerlos.",
                "Psicología de la confianza: Cómo generar autoridad en una era de escepticismo masivo y exceso de información.",
                "Los 6 sesgos cognitivos éticos: Aplicación práctica de la prueba social y la aversión a la pérdida."
              ]}
            />
            <ChapterBlock 
              num={3}
              title="Contenido que Convierte en la Era de IA"
              description="La IA no va a reemplazarte, pero un estratega que sepa dominarla sí lo hará. Este capítulo es el punto de inflexión para tu creatividad."
              items={[
                "Marco ACTS: Autenticidad, Contexto, Transparencia y Sustancia frente al contenido genérico de baja calidad.",
                "SEO Conversacional: Estructuración avanzada para que LLMs como Gemini o Claude te citen como fuente autorizada.",
                "Atomización 2.0: Una matriz para transformar una sola idea en 12 formatos distintos sin perder la esencia.",
                "Flujo de trabajo Híbrido: Dónde aporta valor la IA y dónde es absolutamente vital tu toque humano diferencial."
              ]}
            />
            <ChapterBlock 
              num={4}
              title="SEO Actual: Más Allá de las Palabras Clave"
              description="Para aquellos que todavía creen en el potencial del tráfico orgánico, pero saben que el método tradicional ha caducado por completo."
              items={[
                "EEAT 2.0: Experiencia, Pericia, Autoridad y Confianza llevadas al extremo demostrable ante los buscadores.",
                "Topic Clusters vs Keywords: Por qué agrupar por intención de búsqueda multiplica el tráfico x10 frente a frases aisladas.",
                "SEO Técnico Humano: Optimización de velocidad y Core Web Vitals como un ejercicio de respeto por el usuario.",
                "Búsqueda Semántica: Cómo los buscadores entienden conceptos complejos y no solo cadenas de texto."
              ]}
            />
            <ChapterBlock 
              num={5}
              title="Growth Hacking Aplicado"
              description="Crecer con poco presupuesto no es una fantasía. Es una metodología de ingeniería aplicada al marketing estratégico."
              items={[
                "Adquisición de bajo costo: Técnicas de platform riding y community hijacking explicadas paso a paso.",
                "Viral Loops: Diseño de contenido que la gente necesite compartir por su utilidad intrínseca y valor social.",
                "Framework AARRR: Adquisición, Activación, Retención, Recomendación e Ingresos aplicados a cualquier nicho.",
                "Experimentación como religión: Cómo fallar rápido y barato para encontrar la veta de crecimiento real."
              ]}
            />
            <ChapterBlock 
              num={6}
              title="Plataformas Emergentes y Micro-Nichos"
              description="Competir en mercados masivos es prohibitivo. Aprende a identificar y dominar micro-nichos rentables antes que los demás."
              items={[
                "El poder de los micro-nichos: Por qué 1.000 fans verdaderos valen más que un millón de seguidores pasivos.",
                "Estrategias de entrada temprana: Cómo detectar la próxima plataforma ganadora y posicionarte como referente.",
                "Comunidades verticales: El paso de lo masivo a lo especializado en entornos como Circle o Discord.",
                "Monetización de micro-audiencias: Estrategias de alta rentabilidad incluso con bajo volumen de tráfico web."
              ]}
            />
            <ChapterBlock 
              num={7}
              title="Automatización Inteligente de Tráfico"
              description="El tiempo es tu recurso más valioso. Aprende a delegar las tareas repetitivas en sistemas automatizados y asistentes IA."
              items={[
                "Stack Tecnológico 2026: Herramientas esenciales desde el nivel de ahorro presupuestario hasta el premium.",
                "Distribución Automática: Cómo estar presente en 6 redes sociales dedicando solo 2 horas semanales.",
                "Moderación con IA: Sistemas que gestionan tu comunidad y responden dudas básicas mientras duermes.",
                "Lead Generation Autónoma: Prospección y scoring de clientes potenciales sin intervención manual directa."
              ]}
            />
            <ChapterBlock 
              num={8}
              title="Analítica Avanzada y Mejora Continua"
              description="Lo que no se mide no se puede mejorar. Aprende a interpretar los datos para tomar decisiones quirúrgicas empresariales."
              items={[
                "Tableros Accionables: Cómo construir dashboards que realmente te digan qué acción tomar a continuación.",
                "Interpretación de Mapas de Calor: Entiende dónde mueren tus conversiones y por qué el usuario abandona.",
                "Sprints de Experimentación: Ciclos de 14 días para optimizar cada rincón de tu embudo de tráfico.",
                "Analítica Predictiva: Detecta tendencias de búsqueda antes de que exploten para posicionarte en cabeza."
              ]}
            />
            <ChapterBlock 
              num={9}
              title="Inversión en Tráfico Pagado (Ads)"
              description="No se trata de gastar dinero, sino de invertirlo con precisión científica para escalar lo que ya funciona."
              items={[
                "Mentalidad de Inversión: Cálculo de LTV y ROAS para saber cuánto puedes pagar por cada visita cualificada.",
                "Estrategias de Bidding: CPA vs ROAS objetivo. Cuándo usar cada técnica para no quemar el presupuesto.",
                "Creativos de Alto Impacto: La fórmula de los 3 segundos para detener el scroll y generar el clic inmediato.",
                "Audiencias similares (Lookalikes): Cómo usar tus datos para encontrar gemelos de tus mejores clientes."
              ]}
            />
            <ChapterBlock 
              num={10}
              title="Construcción de Comunidad"
              description="El tráfico más rentable es aquel que posees. Las comunidades son el activo más resistente a los cambios algorítmicos."
              items={[
                "De Audiencia a Comunidad: Rituales y ceremonias que transforman seguidores silenciosos en embajadores activos.",
                "Arquitectura de Comunidades: Selección de plataformas y diseño de espacios de interacción valiosa.",
                "Estrategias de Activación: Cómo mantener el interés a largo plazo sin ser un esclavo del contenido diario.",
                "Membresías Sostenibles: Modelos de negocio basados en la recurrencia y la exclusividad del acceso."
              ]}
            />
            <ChapterBlock 
              num={11}
              title="El Plan Maestro de 90 Días"
              description="La estrategia sin ejecución es solo una alucinación. Este capítulo es tu cronograma de batalla detallado día por día."
              items={[
                "Mes 1: Cimentación. Auditoría profunda, SEO técnico y definición de la propuesta de valor única del proyecto.",
                "Mes 2: Expansión. Lanzamiento de canales secundarios, creación de contenido pilar y primeras automatizaciones.",
                "Mes 3: Optimización. Análisis de datos, escalada de presupuesto en Ads y cierre del sistema de retención.",
                "Listas de Verificación: Tareas semanales críticas para mantener el rumbo sin distracciones ni bloqueos."
              ]}
            />
            <ChapterBlock 
              num={12}
              title="Casos de Estudio y Acción Real"
              description="Aprende de los éxitos y fracasos documentados de otros. Análisis detallado de proyectos reales en marcha."
              items={[
                "De 800 a 25.000 visitas: Caso de éxito de un ecommerce de nicho que dominó su mercado en un solo trimestre.",
                "Estrategia SaaS B2B: Generación de leads cualificados mediante contenido hiper-específico impulsado por IA.",
                "Patrones comunes del éxito: Los 4 elementos que siempre están presentes cuando un proyecto digital despega.",
                "Plantillas Listas para Usar: Recursos descargables y estructuras que puedes adaptar a tu proyecto hoy mismo."
              ]}
            />
          </div>

          <div className="mt-16 flex justify-center">
            <CTAButton text="DESBLOQUEAR EL SISTEMA COMPLETO" />
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <SectionTag text="EL AUTOR" />
             <h2 className="editorial-heading text-4xl mb-4">No Soy Un Gurú. <br />Soy Un Aprendiz Que Comparte.</h2>
             <div className="prose-editorial">
                <p>
                  Me llamo <strong>Francisco González</strong>. No tengo un despacho de cristal en una torre de Nueva York ni aparezco en portadas de revistas de finanzas. Soy alguien como tú: profundamente curioso y comprometido con entender los engranajes de la red.
                </p>
                <p>
                  He leído cientos de volúmenes, he experimentado con decenas de herramientas y, lo más importante, he cometido cientos de errores de los que he aprendido más que de cualquier éxito efímero.
                </p>
                <p>
                  Este libro no es una recopilación de teorías académicas. Es la síntesis refinada de lo que realmente genera atención, retención y crecimiento en el ecosistema digital actual. Cada estrategia aquí presente ha sido validada en la práctica real.
                </p>
             </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
             <motion.div 
               className="relative"
               whileHover={{ scale: 1.05, rotate: 2 }}
               transition={{ type: "spring", stiffness: 300 }}
             >
                <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-2xl -z-10" />
                <img 
                  src="https://i.ibb.co/XkxVB4VJ/6-300x300.jpg" 
                  alt="Francisco González" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-16 px-6 bg-brand-paper">
        <div className="max-w-5xl mx-auto">
          <SectionTag text="AUDIENCIA" centered />
          <SectionHeading title="¿Es Este Libro Para Ti?" centered />
          
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="p-5 bg-white border border-slate-100 shadow-sm relative">
               <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
               <h3 className="font-bold text-xl mb-4 text-brand-primary italic">Esto es para ti si...</h3>
               <ul className="space-y-2">
                  {[
                    "Tienes un proyecto digital (blog, tienda, podcast) y necesitas visitas de alta calidad.",
                    "Sientes saturación por la información contradictoria que abunda en la red.",
                    "Quieres diversificar tus fuentes para no depender nunca más de un solo canal.",
                    "Entiendes que el marketing ha cambiado y necesitas una actualización profunda."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <Check className="w-5 h-5 text-brand-accent mr-3 shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base font-light">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 shadow-sm relative opacity-80">
               <div className="absolute top-0 left-0 w-1 h-full bg-slate-400" />
               <h3 className="font-bold text-xl mb-4 text-slate-500 italic">Esto NO es para ti si...</h3>
               <ul className="space-y-2">
                  {[
                    "Buscas una 'fórmula mágica' para el crecimiento instantáneo sin esfuerzo.",
                    "No estás dispuesto a dedicar tiempo real a la implementación del plan.",
                    "Crees que el marketing se trata de 'engañar' algoritmos en lugar de servir audiencias.",
                    "Prefieres la intuición incierta al análisis riguroso de los datos."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-500">
                      <Check className="w-5 h-5 text-slate-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base font-light">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <CTAButton text="UNIRME A LOS QUE YA ESTÁN CRECIENDO" />
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="py-16 px-6 bg-brand-primary text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <ShieldCheck className="w-16 h-16 text-brand-accent mx-auto mb-4" />
          <h2 className="editorial-heading !text-white text-2xl md:text-4xl italic leading-tight">30 Días de Garantía Absoluta. <br />Sin Riesgo. Sin Excusas.</h2>
          
          <div className="text-xl text-slate-300 font-light leading-relaxed space-y-4">
            <p>
              Sé perfectamente lo que estás pensando: "¿Y si este manual no responde a mis necesidades reales? ¿Y si ya conozco la mayor parte de lo que aquí se expone?"
            </p>
            <p>
               Tu duda es legítima. Por eso quiero que la decisión hoy sea la más fácil de tu trimestre.
            </p>
            <p className="bg-white/10 p-4 text-white italic border-l-2 border-brand-accent">
              "Si tras leerlo y aplicar el plan durante 30 días sientes que no te ha aportado un valor que multiplique tu inversión, te devuelvo el 100% de tu dinero. Sin formularios eternos. Sin preguntas incómodas."
            </p>
            <p>
              El riesgo financiero de esta operación reside exclusivamente en mis hombros.
            </p>
          </div>
        </div>
      </section>

      {/* Final Offer */}
      <section id="oferta" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-brand-primary p-8 md:p-16 text-center shadow-2xl relative">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent text-white flex items-center justify-center translate-x-1/2 -translate-y-1/2 rotate-45 shadow-lg">
               <Star className="w-8 h-8 -rotate-45" />
            </div>

            <SectionTag text="OFERTA FINAL" centered />
            <h2 className="editorial-heading text-5xl md:text-8xl mb-4 leading-none">Inversión: $9,99</h2>
            <h3 className="text-2xl md:text-4xl font-serif italic text-brand-secondary mb-12 leading-tight">¿Qué representan hoy estos $9,99?</h3>
            
            <div className="max-w-2xl mx-auto space-y-8 text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12">
              <p>
                Menos de lo que invertirías en una cena que habrás olvidado la próxima semana. Menos de lo que cuestan dos cafés en cualquier establecimiento de paso.
              </p>
              
              <p className="text-brand-primary font-bold text-2xl md:text-3xl leading-tight">
                Es el mapa detallado para que cada hora que inviertas en tu proyecto a partir de hoy tenga un retorno real.
              </p>

              <p className="italic font-medium">
                ¿Cuánto valor tiene para ti contar con un sistema predecible?
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <CTAButton isFinal />
              
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-40">
                <span className="text-sm font-black tracking-[.2em] italic">VISA</span>
                <span className="text-sm font-black tracking-[.2em] italic">MASTERCARD</span>
                <span className="text-sm font-black tracking-[.2em] italic">PAYPAL</span>
                <span className="text-sm font-black tracking-[.2em] italic">STRIPE</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-400">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">
                  Formato Digital PDF (Acceso Instantáneo tras el pago)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Added for Content Depth and User Trust */}
      <section className="py-16 px-6 border-t border-slate-100 bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <SectionTag text="PREGUNTAS FRECUENTES" />
          <div className="grid gap-6 mt-8">
            <FAQItem 
              q="¿Necesito ser un experto tecnológico para aplicar estas lecciones?"
              a="En absoluto. El manual ha sido redactado con una claridad pedagógica extrema. Si sabes navegar por la red y usar herramientas básicas de oficina, tienes toda la capacidad necesaria para ejecutar el plan de 90 días."
            />
            <FAQItem 
              q="¿Cuánto tiempo diario debo dedicarle al plan?"
              a="La estructura es flexible. Recomendamos una dedicación mínima de entre 5 y 7 horas semanales para ver resultados tangibles dentro del primer trimestre de aplicación."
            />
            <FAQItem 
              q="¿Qué ocurre si cambio de nicho de mercado a mitad del proceso?"
              a="Los principios de este sistema son transversales. Se basan en psicología del consumo y estructuras de red. Funcionan tanto para una tienda de artesanía como para un servicio de consultoría legal avanzada."
            />
          </div>
        </div>
      </section>

      {/* P.D. Section */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto prose-editorial">
          <SectionTag text="EL ÚLTIMO EMPUJÓN" />
          <h2 className="italic text-brand-primary text-2xl md:text-4xl mb-4">P.D.: El momento de actuar es hoy.</h2>
          <p>
            Si has leído hasta este punto, es porque el crecimiento de tu proyecto te importa de forma honesta. Eres de los que buscan soluciones estructurales, no parches efímeros. Entiendes que el conocimiento sin acción es simplemente entretenimiento refinado.
          </p>
          <p>
            Los algoritmos de búsqueda no se volverán más sencillos. La competencia no va a disminuir. La Inteligencia Artificial no va a desaparecer de nuestro ecosistema. Sin embargo, tú puedes aprender a navegar este nuevo orden digital sin necesidad de convertirte en un experto técnico.
          </p>
          <p className="font-bold italic text-brand-primary">
            Haz clic ahora. Obtén tu ejemplar. Inicia tu plan. Nos vemos al otro lado de la barrera del tráfico.
          </p>
          <p className="mt-8 text-brand-accent font-serif text-2xl italic leading-none">Francisco González</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <span className="text-xs text-slate-400 font-bold tracking-[0.3em] uppercase underline decoration-brand-accent/50 underline-offset-4">Ideas Y Consejos De Tráfico Web</span>
          <p className="text-xs text-slate-400 uppercase tracking-widest leading-loose">
            &copy; 2026 Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

const SectionTag = ({ text, centered = false, light = false }: { text: string; centered?: boolean; light?: boolean }) => (
  <div className={`mb-3 ${centered ? "text-center" : ""}`}>
    <span className={`text-xs font-bold tracking-[0.4em] uppercase ${light ? "text-brand-accent" : "text-brand-secondary"}`}>[{text}]</span>
  </div>
);

const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-3 ${centered ? "text-center mx-auto" : ""}`}>
    <h2 className="editorial-heading text-4xl md:text-7xl mb-2">{title}</h2>
    {subtitle && <p className={`text-xl text-slate-500 font-light max-w-3xl leading-relaxed ${centered ? "mx-auto" : ""}`}>{subtitle}</p>}
  </div>
);

const ChapterBlock = ({ num, title, description, items }: { num: number; title: string; description: string; items: string[] }) => (
  <div className="p-8 bg-white border border-slate-200 shadow-2xl shadow-slate-200/40 relative group transition-all duration-500 hover:-translate-y-2">
    <div className="absolute top-0 left-0 w-full h-2 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <span className="block font-serif text-6xl text-brand-secondary/10 mb-2 leading-none">0{num}</span>
    <h3 className="editorial-heading text-3xl md:text-4xl mb-2 leading-tight">{title}</h3>
    <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-3 font-medium">{description}</p>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start text-base md:text-lg text-slate-700 font-semibold leading-relaxed">
          <span className="text-brand-accent mr-2">»</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => (
  <div className="border-b border-slate-200 pb-8 transition-all group">
    <h4 className="editorial-heading text-2xl md:text-3xl mb-3 group-hover:text-brand-secondary transition-colors duration-300">{q}</h4>
    <p className="text-slate-700 text-xl md:text-2xl font-normal leading-relaxed">{a}</p>
  </div>
);
