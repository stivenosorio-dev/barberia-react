# Manual comercial y operativo de Agenda Local

Guía práctica para ofrecer, vender, configurar y entregar una landing de Agenda Local a un negocio local. Úsala como procedimiento operativo estándar (SOP): completa las plantillas entre corchetes, confirma cada dato con el negocio y deja por escrito los acuerdos. No reemplaza una propuesta comercial, contrato ni asesoría legal.

## 1. Qué se ofrece y qué no

### Propuesta de valor

Agenda Local es una plantilla de landing mobile-first para que un negocio presente su oferta y facilite que una persona solicite una cita o deje sus datos desde el celular. El formulario envía la solicitud al endpoint del sitio; el servidor la valida y la registra en una hoja de Google del negocio. Después se abre un enlace de WhatsApp con un mensaje preparado para que la persona continúe la conversación. El dueño gestiona las solicitudes desde la hoja y confirma por sus canales habituales.

La propuesta es reducir pasos y ordenar la recepción de solicitudes, no garantizar ventas, citas, posicionamiento, tráfico, disponibilidad ni una cantidad de contactos. El resultado depende, entre otros factores, de que la información sea correcta, el negocio atienda a tiempo y las personas lleguen al sitio.

### Alcance del producto actual

La landing tiene contenido y secciones editables por configuración: presentación, confianza, servicios, pasos, galería, testimonios, formulario, preguntas frecuentes y ubicación. También puede mostrar contacto, horario, enlaces de mapa, tema claro/oscuro y metadatos SEO. El formulario recoge nombre, celular, servicio y, según configuración, fecha/hora preferida y nota. La solicitud se valida en cliente y servidor. El registro del negocio es la hoja de Google; sus estados son nuevo, contactado, confirmado o cancelado.

No presentar como funciones actuales: calendario con disponibilidad o bloqueo de horarios, reserva confirmada automáticamente, recordatorios, pagos, cuenta de usuario, panel propio, CRM, chatbot, analítica incorporada o integración directa del navegador con Google. La hoja no administra disponibilidad: el negocio revisa cada solicitud y confirma manualmente. Un enlace de mapa estático no es rastreo GPS ni detección de ubicación de quien visita.

### Modelo de negocio recomendado

- **Implementación por proyecto:** cobrar por el alcance acordado de personalización, configuración, integración, publicación, pruebas, capacitación y entrega. Determinar el valor después de perfilar el caso y estimar trabajo; este manual no fija tarifas.
- **Servicios opcionales posteriores:** ofrecer soporte, cambios de contenido, mantenimiento o mejoras solo con alcance, tiempos, responsabilidades y precio acordados por separado. No insinuar que son obligatorios ni que incluyen trabajo ilimitado.
- **Costos de terceros:** explicar que la infraestructura prevista no tiene costo de infraestructura por cliente según la especificación del proyecto, pero un dominio propio es aparte. Verificar condiciones, límites y precios vigentes de cada proveedor antes de cotizar; no prometer disponibilidad como SLA ni asumir costos del cliente sin autorización.
- **Propiedad y responsabilidades:** acordar quién es titular y administrador del dominio, hoja, Apps Script y proyecto de hosting; quién suministra y aprueba el contenido; quién atiende las solicitudes; qué se considera entrega aceptada y qué cambios quedan por fuera.

Presenta la oferta como una solución sencilla de presencia y recepción de solicitudes, con manejo manual transparente. Evita “no podrán rechazar”, urgencia inventada, falsos descuentos, testimonios sin autorización y cualquier promesa de ventas.

## 2. Diferenciar prototipo y producción

La configuración incluida en el repositorio es una demostración, no la ficha de un cliente real. Contiene datos marcados como prototipo o de ejemplo, incluido un negocio ficticio, direcciones y coordenadas de demostración, teléfonos de muestra, URLs `.example`, textos, imágenes, servicios, precios y testimonios de muestra. No copiar esos datos a una propuesta como si fueran reales ni publicar el prototipo tal cual.

Antes de publicar para un cliente:

1. Sustituir y verificar cada dato con el propietario o representante autorizado. No inferir dirección, precio, horario, redes, reseñas ni ubicación.
2. Revisar el indicador `addressIsPrototype`: mantener el aviso mientras la ubicación sea de demostración; solo quitarlo después de verificar dirección y enlaces reales. Confirmar el pin del mapa y el contenido del mapa incrustado por separado.
3. Reemplazar toda URL de ejemplo, teléfono, imagen, texto y dato de demostración. No dejar testimonios ficticios, información `.example` ni marcadores en la web publicada.
4. Obtener aprobación escrita del contenido, del formulario y de la versión publicada.

En demos comerciales usa exclusivamente datos ficticios claramente rotulados “DEMO” o un entorno de prueba. No envíes formularios de demostración a una hoja productiva ni presentes los datos del prototipo como clientes, resultados o ubicación real.

## 3. Perfilado y calificación de prospectos

### Segmentos prioritarios

Busca negocios locales cuyo proceso de venta o atención dependa de explicar servicios y conversar para acordar una cita: barberías, salones, talleres, clínicas u otros negocios de atención local. El mejor prospecto no es simplemente quien “no tiene web”; es quien reconoce fricción en su canal actual y puede atender las solicitudes que reciba.

### Señales de encaje

- Recibe preguntas repetidas por WhatsApp, redes o teléfono sobre servicios, horarios, precios o ubicación.
- Comparte información dispersa, difícil de encontrar o desactualizada.
- Quiere presentar servicios, imágenes, ubicación y formas de contacto en un solo sitio móvil.
- Tiene una persona responsable de revisar solicitudes y responderlas.
- Puede entregar información veraz, imágenes autorizadas y accesos de administración mediante un canal seguro.
- Acepta que la web recoge solicitudes; la disponibilidad y confirmación siguen a cargo del negocio.

### Calificación rápida: verde, amarillo o rojo

Marca cada criterio en la ficha comercial como **verde** (resuelto), **amarillo** (requiere aclaración) o **rojo** (bloquea la venta):

1. Necesidad concreta y prioridad: ¿qué debe poder entender o solicitar el visitante?
2. Responsable y decisión: ¿quién aprueba alcance, contenido, presupuesto y publicación?
3. Capacidad de atención: ¿quién revisará la hoja y responderá? ¿En qué horario?
4. Materiales y veracidad: ¿puede aportar servicios, contacto, horario, dirección, precios si los publica e imágenes propias/autorizadas?
5. Expectativas: ¿entiende que no hay agenda de disponibilidad, confirmación automática ni garantía de clientes?
6. Operación digital: ¿está dispuesto a usar una hoja y sus cuentas Google/hosting, y a proteger sus accesos?
7. Alcance, fecha y presupuesto: ¿se pueden acordar sin presionar ni omitir dependencias?

Avanza con verdes; resuelve amarillos antes de cotizar. Pausa o declina con respeto ante rojos como exigir garantías de ventas, publicar información no verificada, usar reseñas sin permiso, negar un responsable de atención o solicitar que se compartan claves por chat. No califiques por apariencia, edad u otros atributos personales irrelevantes.

## 4. Abordaje presencial

### Preparación

- Revisa solo información pública del negocio y confirma que realmente es pertinente. Anota una observación específica, no una crítica general.
- Lleva una demo marcada como prototipo, en un celular y con conexión disponible; verifica antes que no exponga datos de clientes ni abra una hoja real.
- Prepara una ficha para tomar notas, el alcance resumido, preguntas de diagnóstico y una forma de contacto profesional.
- Elige una hora razonable. No interrumpas una atención en curso; si el negocio está ocupado, pide permiso para volver o agenda una llamada.

### Apertura y permiso

Preséntate, explica en una frase por qué estás allí y pregunta si puede dedicarte unos minutos. No finjas ser cliente ni digas que conoces problemas que no has comprobado.

**Guion:** “Hola, soy [nombre]. Ayudo a negocios locales a presentar sus servicios y recibir solicitudes desde una landing sencilla para celular, conectada con una hoja y WhatsApp. Vi [observación pública concreta]. ¿Te puedo hacer un par de preguntas para saber si sería útil, o prefieres que coordinemos otro momento?”

### Diagnóstico

Escucha y anota las palabras del prospecto. Pregunta, por ejemplo:

- ¿Por dónde llegan hoy las consultas y qué suele preguntar la gente?
- ¿Qué información debería encontrar alguien antes de escribirles?
- ¿Cómo registran hoy las solicitudes y quién responde?
- ¿Qué pasa si llega una consulta fuera del horario o si no se puede atender el horario solicitado?
- ¿Qué servicios y datos sí quieren mostrar públicamente? ¿Cuáles prefieren confirmar en conversación?
- ¿Qué resultado sería útil para ustedes, sin asumir que una landing por sí sola lo garantiza?
- ¿Quién aprueba contenido y ubicación? ¿Qué canal prefieren para enviar materiales?

Resume lo que entendiste y pide corrección: “Entiendo que [necesidad], y que hoy [proceso]. ¿Lo resumí bien?”. No recojas datos personales de clientes finales durante la visita.

### Demo

Muestra el recorrido en móvil, no una lista de tecnologías: portada → servicio → formulario → explicación del guardado → enlace de WhatsApp → ubicación. Di qué es ficticio y qué es configurable. Deja claro que WhatsApp se abre con un texto preparado; la persona debe enviarlo y el negocio debe confirmar la cita. Muestra la hoja de demostración solo si está aislada y sin registros reales.

### Oferta y cierre

Relaciona cada entregable con un problema expresado. Presenta alcance, exclusiones, responsabilidades, dependencias, precio y forma de pago en una propuesta escrita; no inventes precio ni presiones para firmar en el momento. Invita a corregir el alcance y acuerda una fecha para responder.

**Cierre respetuoso:** “Por lo que me cuentas, podría servirles [beneficio concreto, sin promesa]. La propuesta incluiría [entregables] y dejaría por fuera [exclusiones]. ¿Te la envío para que la revisen con [decisor]? Si no es prioridad, no hay problema; ¿te parece que cierre el seguimiento por ahora?”

### Objeciones frecuentes

- **“Ya tenemos Instagram/WhatsApp.”** “Perfecto; no se trata de reemplazarlos. La landing puede ordenar datos y solicitudes, y dirigir a WhatsApp. Revisemos si resuelve una fricción que ustedes sí tengan.”
- **“¿Me garantiza más clientes?”** “No. Puedo comprometerme con los entregables y las pruebas acordadas; el tráfico, la decisión del visitante y la atención del negocio no dependen solo del sitio.”
- **“¿Queda la cita confirmada?”** “No automáticamente. La solicitud se registra si el flujo termina bien; luego ustedes revisan disponibilidad y confirman por WhatsApp o su canal.”
- **“No tengo fotos ni textos.”** “Podemos definir qué hace falta y quién lo producirá. No publicaré imágenes, precios o afirmaciones sin aprobación y derechos de uso.”
- **“Mándame todo por WhatsApp.”** “Con gusto te envío un resumen y la propuesta. Para claves usaré un canal seguro o configuración compartida; no las mandes por el chat.”
- **“Está caro / no es el momento.”** “Gracias por decírmelo. Podemos revisar el alcance sin sacrificar los requisitos esenciales, o dejarlo para otro momento. No reduciré el precio fingiendo una oferta o quitando una obligación de seguridad.”

## 5. Prospección virtual y seguimiento

Contacta negocios de manera individual, relevante y respetuosa. Prioriza una presentación cálida o un canal que el negocio indique para propuestas comerciales. No compres listas, automatices mensajes masivos ni sigas escribiendo a quien pidió no ser contactado. Identifícate, explica por qué escribes y facilita cerrar la conversación.

### Plantillas editables

**WhatsApp inicial, con contexto legítimo**

> Hola, [nombre]. Soy [tu nombre], de [marca/actividad]. Vi [detalle público y específico del negocio]. Estoy ofreciendo una landing móvil que organiza servicios y ubicación y permite enviar solicitudes que se registran en una hoja; después la persona puede continuar por WhatsApp. No confirma disponibilidad ni garantiza ventas. ¿Te sirve que te envíe un ejemplo de demostración? Si no es relevante, me dices y no te escribo de nuevo.

**Correo inicial**

**Asunto:** Idea para ordenar las solicitudes de [negocio]

> Hola, [nombre]:
>
> Soy [nombre] y trabajo con [descripción breve]. Noté [observación verificable]. Agenda Local permite presentar [servicios/ubicación/contacto, según el caso] en una landing para celular y recibir solicitudes en una hoja de Google; el negocio sigue confirmando cada cita.
>
> Si están revisando ese proceso, puedo mostrarte una demo ficticia y entender primero cómo lo manejan hoy. ¿Te interesa coordinar [opción de horario]? Si no deseas recibir otro mensaje, respóndeme y cierro el contacto.
>
> [Nombre] · [medio de contacto profesional]

**Redes sociales, primer contacto**

> Hola, [negocio]. Soy [nombre]. Vi [detalle específico] y estoy contactando negocios a los que podría servirles ordenar servicios, ubicación y solicitudes desde el celular. ¿Cuál es el canal apropiado para enviarles una breve propuesta? Si no están interesados, todo bien.

**Seguimiento único si no hubo respuesta**

> Hola, [nombre]. Retomo una sola vez mi mensaje sobre [tema] por si se perdió. Puedo enviarte una demo ficticia; no incluye agenda automática ni promesas de ventas. Si no es prioridad o prefieres que no te contacte, lo dejo aquí. Gracias.

Como pauta, espera unos días hábiles antes de un único seguimiento y cierra el contacto si no hay respuesta. Si la persona dice que no, no hagas otro seguimiento comercial. Anota fecha, canal, contexto, resultado y preferencia de contacto; guarda solo lo necesario y restringe el acceso a esa ficha.

## 6. Contenidos y piezas de demostración

El contenido debe mostrar el problema y el recorrido con honestidad. No uses capturas con datos personales, marcas ajenas sin permiso, reseñas inventadas ni resultados no medidos. Toda demo debe indicar que es demostración y usar datos y contactos ficticios.

### Plan editorial reutilizable

Rota estos temas según disponibilidad; no es una promesa de alcance ni una obligación de publicar a una frecuencia fija:

1. **Problema reconocible:** información de servicios dispersa, consultas repetidas o dificultad para encontrar dirección. Habla de situaciones posibles, no atribuyas un problema a un negocio específico sin confirmación.
2. **Explicación del flujo:** mostrar formulario, hoja de solicitudes y continuación a WhatsApp; enfatizar qué es manual y qué ocurre si falla el envío.
3. **Consejo práctico para el negocio:** qué datos, horarios, fotos y responsable conviene tener listos antes de publicar una landing.
4. **Demo / invitación:** recorrido breve de una instancia ficticia y CTA para conversar o solicitar una demostración.

Adapta el formato a poster, video corto o demo grabada. Revisa legibilidad en teléfono, contraste, subtítulos cuando sean pertinentes, ortografía, enlaces y CTA. No publiques rostros, voces, interiores privados, conversaciones, logos o testimonios sin autorización explícita de quien tenga derechos.

### Poster: secuencia de producción

1. Elige una sola idea: “Solicitudes claras desde el celular” o “Cómo se registra una solicitud”, sin afirmar resultados garantizados.
2. Jerarquía sugerida: problema o beneficio concreto → tres pasos resumidos → límite importante (“el negocio confirma disponibilidad”) → CTA → identificación del proveedor.
3. Usa una imagen propia, licenciada o autorizada; si la pieza muestra la demo, rotúlala. No uses precios o descuentos no acordados.
4. Verifica lectura a tamaño móvil, datos de contacto, CTA y que no haya información real de otra persona. Exporta una versión revisada y conserva la autorización de recursos.

**Texto editable:** “¿Tus servicios y datos de contacto están en muchos lugares? [Nombre de la solución] reúne información del negocio y facilita enviar una solicitud desde el celular. El negocio revisa y confirma cada cita. Mira una demo: [CTA/enlace].”

### Video corto: guion y storyboard

Recomendación de edición: una idea, planos cortos, subtítulos legibles y duración breve (por ejemplo, 20–40 segundos, ajustable al canal). No atribuyas la duración a una capacidad técnica del producto.

| Tiempo orientativo | Imagen / pantalla | Voz o texto |
|---|---|---|
| 0–3 s | Título: “¿Cómo pasa una solicitud de cita?” | “Mira el recorrido, sin promesas mágicas.” |
| 3–9 s | Landing DEMO en celular; elegir un servicio ficticio | “La persona consulta servicios y completa sus datos.” |
| 9–16 s | Confirmación de envío y fila de prueba en hoja | “Si el servidor confirma el registro, la solicitud queda en la hoja del negocio.” |
| 16–23 s | Enlace abre WhatsApp con texto prellenado, sin enviarlo | “WhatsApp abre un mensaje preparado; la persona todavía debe enviarlo.” |
| 23–29 s | Hoja, dueño revisa y cambia estado manualmente | “El negocio revisa disponibilidad y confirma por su cuenta.” |
| 29–35 s | Pantalla final con CTA y aviso DEMO | “¿Quieres revisar si encaja con tu proceso? Escríbeme: [CTA].” |

Graba una sesión con datos ficticios; no simules que el cliente ya confirmó. Si se muestra ubicación, usa una de demostración señalada como tal. Haz revisión final con sonido apagado para validar subtítulos y verifica que no aparezcan pestañas, correos, claves, notificaciones o identificadores reales.

### Demo grabada: guion operativo

**Antes de grabar:** instancia aislada de prueba, formulario con nombre y contacto ficticios, mapa marcado como demostración, hoja de prueba, navegador limpio y notificaciones desactivadas. Confirma que el destino de WhatsApp es ficticio o muestra el enlace sin abrir una conversación real.

**Narración:** “Esta es una demostración. El visitante puede consultar la información, elegir un servicio y enviar una solicitud. El sitio intenta guardarla mediante el servidor. Cuando el registro se confirma, abre un mensaje preparado en WhatsApp, pero la persona debe tocar enviar. El dueño revisa la solicitud en la hoja y confirma la disponibilidad manualmente. No hay calendario de cupos ni confirmación automática.”

**Cierre:** “Si este flujo corresponde a cómo atienden en [negocio], revisamos sus datos y definimos alcance. La demo no representa resultados de un cliente.”

### Consentimiento para contenidos

Obtén autorización antes de grabar o publicar personas identificables, voces, testimonios, instalaciones privadas o material de terceros. Registra quién autoriza, qué material, canales, propósito, edición permitida, periodo de uso y cómo pedir que se deje de usar hacia adelante. Da una alternativa sin aparecer en cámara. Si no hay autorización clara o derechos verificables, no lo publiques. Para datos personales de prospectos o usuarios, usa solo lo necesario para el propósito informado y acuerda con el cliente su tratamiento y retención.

## 7. Proceso de prospecto a venta y onboarding

### Etapa A — Registro del prospecto

Mantén un registro comercial separado de la hoja de solicitudes de citas del cliente. Campos recomendados: negocio, canal y URL pública, nombre/rol del contacto si fue compartido, fecha y contexto del primer contacto, necesidad expresada, estado (por contactar, conversando, calificado, propuesta enviada, ganado, perdido/no contactar), siguiente acción y permiso/preferencia de contacto. No guardes listas de clientes finales del negocio en el pipeline de ventas.

### Etapa B — Diagnóstico y calificación

Completa la ficha verde/amarillo/rojo, identifica al decisor y a la persona que atenderá las solicitudes. Aclara horarios, materiales, responsable de datos y expectativas. Si esperan agenda de disponibilidad, pago, confirmación automática u otra función fuera del alcance, aclara el límite antes de preparar la propuesta.

### Etapa C — Propuesta y aceptación

La propuesta debe especificar:

- Objetivo y entregables concretos (configuración, adaptación visual dentro del sistema disponible, publicación, integración, pruebas, capacitación y entrega, según lo acordado).
- Materiales y aprobaciones que aporta el cliente, fechas y dependencias.
- Configuración de hoja/Apps Script/hosting y titularidad de las cuentas.
- Precio, pagos, vigencia de la propuesta y condiciones, definidos para ese caso.
- Exclusiones expresas: funciones no disponibles, producción de fotos/copy si no se incluyó, dominio, publicidad, disponibilidad de citas, SLA y resultados comerciales.
- Qué significa aceptación; proceso y precio de cambios posteriores; soporte incluido, si lo hay.

No empieces a usar datos o accesos reales antes de contar con aceptación y autorización para hacerlo.

### Etapa D — Reunión de onboarding

1. Confirma persona responsable, contacto operativo y decisor.
2. Completa el checklist de la sección 8 con el cliente; marca “pendiente” en vez de completar por suposición.
3. Acuerda la hoja de registros, quién puede verla, quién atenderá solicitudes y el procedimiento de respuesta.
4. El cliente valida textos, servicios, precios, horarios, teléfono, ubicación, privacidad y recursos visuales antes de configuración.
5. Recibe accesos por mecanismo seguro. Si es viable, que el cliente cree o administre recursos en sus propias cuentas y conceda el permiso mínimo necesario; no pidas una contraseña personal.
6. Confirma plan de pruebas, datos ficticios y quién autoriza la publicación.

## 8. Checklist de datos y configuración por cliente

Solicita solo información necesaria para configurar y operar la landing. Confirma todo por escrito con el responsable autorizado.

### Identidad y contenido

- [ ] Nombre público, tipo de negocio, ciudad, barrio si aplica y variante de español aprobada.
- [ ] Logo y versiones para fondos claros/oscuros; permiso de uso y archivos originales cuando estén disponibles.
- [ ] Texto de portada, descripción, CTA, beneficios verificables, pasos, preguntas frecuentes y pie de página.
- [ ] Servicios: identificador interno, nombre, descripción, duración y precio vigente si se publicará; confirmar moneda y condiciones del precio.
- [ ] Fotos de servicios/local, textos alternativos descriptivos y derechos/autorizaciones. Confirmar que corresponden al negocio.
- [ ] Testimonios reales solo con permiso y texto aprobado; si no hay autorización, desactivar/no incluir testimonios.
- [ ] Secciones que se mostrarán y orden. No dejar secciones de prueba o vacías.

### Contacto, operación y ubicación

- [ ] Celular de contacto: número colombiano de 10 dígitos que empieza por 3, confirmado por una llamada o canal acordado.
- [ ] WhatsApp con indicativo de Colombia en el formato configurado; verificar que corresponde a la cuenta atendida por el negocio.
- [ ] Correo y perfiles sociales públicos que el cliente aprueba enlazar.
- [ ] Dirección real exacta, ciudad, barrio, enlace a Maps y URL de mapa incrustado si aplica; comprobar pin y ruta en otra sesión/dispositivo.
- [ ] Horario semanal por día, días cerrados, nota de atención/cita previa y zona horaria correcta. No insinuar calendario de festivos o cupos si no existe.
- [ ] Persona responsable de revisar la hoja y canal de escalamiento cuando no pueda atender.

### Formulario, textos y privacidad

- [ ] Confirmar si se solicita fecha/hora preferida y nota opcional; la fecha se valida como futura según la zona horaria del negocio.
- [ ] Revisar que cada servicio esté disponible y que los campos del formulario correspondan a la operación real.
- [ ] Revisar plantilla de WhatsApp, nombre del negocio, variables de nombre/servicio/fecha y texto “sin preferencia” si no se pide fecha.
- [ ] Acordar el aviso informativo de uso de los datos y quién responde a consultas sobre ellos. El texto del prototipo no sustituye revisión de privacidad del negocio.
- [ ] Revisar mensajes de éxito y error para que no prometan una cita confirmada.

### SEO, marca y publicación

- [ ] Título y descripción del sitio aprobados, URL canónica final, imagen Open Graph y tipo de negocio estructurado adecuado.
- [ ] Paleta clara/oscura con contraste revisado; tipografías y logo según identidad y legibilidad.
- [ ] Dominio: titular, registrador, acceso y renovación definidos. No registrar ni transferir sin autorización expresa.
- [ ] Revisión en celular y desktop, enlaces de contacto, CTA, mapa, metadatos y contenido final.
- [ ] Aprobación escrita de la versión de staging o prepublicación por la persona designada.

### Matriz de configuración

Al implementar, usa `src/config/site.config.ts` como única fuente de datos variables; las imágenes aprobadas viven bajo `public/images/`. Los componentes existentes no deben modificarse para cambiar textos, colores, fuentes, imágenes, servicios o secciones. Si el esquema no permite un requerimiento, no improvises una función ni cambies componentes como parte de una configuración: cotiza y solicita aprobación para un bloque técnico aparte.

Verifica al menos estos grupos de configuración: `business`, `brand`, `contact`, `schedule`, `seo`, `theme`, `fonts`, `sections`, `copy`, `services`, `gallery`, `testimonials`, `faq` y `booking`. El orden de `sections` determina el orden mostrado; `booking.fields` controla fecha/hora y nota; la plantilla usa `{negocio}`, `{nombre}`, `{servicio}` y `{fecha}`. No coloques secretos en este archivo ni en código de navegador.

## 9. Registro de solicitudes y prueba del flujo

### Configurar la operación de registro

La hoja del cliente funciona como registro operativo, no como panel propio. Acordar con el negocio quién es propietario, quién puede consultar/editar, cómo se protege y cuánto tiempo conserva registros. La pestaña esperada `Leads` contiene fecha, nombre, teléfono, servicio, fecha/hora preferida, nota, estado, origen y enlace “Escribir”; el negocio revisa y cambia manualmente el estado (nuevo/contactado/confirmado/cancelado). La fuente de origen prevista incluye web, Maps o Instagram cuando se implemente el enlace correspondiente; los envíos web usan `web` como valor predeterminado.

La integración pasa por `POST /api/lead`, que revalida en el servidor y llama al Apps Script con un token. El navegador no debe llamar a Google directamente. Configura la integración usando cuentas del cliente cuando sea posible, con permisos mínimos. En Apps Script, guardar el código no actualiza por sí solo la versión desplegada: tras un cambio autorizado, publica una nueva versión de la implementación existente y conserva la URL `/exec`; crear una implementación nueva puede cambiar la URL. No compartas el token ni lo incluyas en el cliente.

### Pruebas antes de publicar

Hazlas en entorno de prueba o con autorización explícita y datos ficticios claramente identificados. Confirma con el cliente cómo retirar o marcar cada registro de prueba.

- [ ] Datos inválidos no se envían; nombre/celular/servicio y fecha futura se validan conforme a la configuración.
- [ ] Un envío válido llega a `/api/lead`; la respuesta confirmada crea una sola fila con campos, origen y estado correctos.
- [ ] La hoja conserva teléfonos y campos de texto como texto; entradas que podrían interpretarse como fórmulas no se ejecutan.
- [ ] La persona recibe una confirmación de solicitud, no de cita confirmada.
- [ ] Después del guardado se intenta abrir WhatsApp con el destinatario y mensaje correctos. No se envía el mensaje automáticamente; la persona debe tocar “Enviar”.
- [ ] Si el navegador bloquea la apertura automática, funciona el botón permanente “Abrir WhatsApp”. Verifica además el enlace de llamada de respaldo.
- [ ] Simula una falla de red/servidor sin datos reales: el mensaje informa que no se guardó y ofrece WhatsApp o llamada. No le digas al usuario que su solicitud está registrada.
- [ ] Verifica que el dueño encuentre la fila, cambie estado, use “Escribir” y entienda que debe confirmar disponibilidad.
- [ ] Confirma ubicación real, enlace de Maps, número, horario, textos, campos opcionales y todas las secciones en móvil.
- [ ] Comprueba acceso a la hoja con los usuarios autorizados, acceso no previsto y que secretos no aparecen en archivos publicados ni código del navegador.

En el backend, un Apps Script frío puede tardar más; se prevé timeout y un solo reintento con el mismo identificador de envío. No interpretes una demora de WhatsApp como falla del guardado: revisa primero el resultado del registro. Existe un riesgo operativo abierto de duplicación si el registro se guarda y falla una operación auxiliar de caché; por eso, ante una duda, inspecciona la hoja antes de pedir al usuario repetir el envío.

### Explicación sencilla al cliente final

“Al enviar, el sitio intenta registrar tu solicitud. Si se confirma, verás una confirmación y se abrirá WhatsApp con un mensaje preparado; debes enviarlo para continuar. El negocio revisará la disponibilidad y te confirmará. Si aparece un error indicando que no se guardó, usa WhatsApp o llama; no asumas que recibimos la solicitud.”

## 10. Privacidad y manejo seguro de accesos

- Nunca pidas ni publiques contraseñas personales, tokens, claves de Apps Script, secretos de Cloudflare o valores de `.env`. No los guardes en `site.config.ts`, frontend, capturas, correos abiertos, repositorio, documentación ni plantillas.
- No uses variables con prefijo `VITE_` para secretos: lo que se envía al navegador no es secreto. Configura credenciales de servidor en el panel de Pages y propiedades de script donde corresponde. No leas ni copies archivos `.env` durante la entrega.
- Prefiere que el cliente conserve la titularidad de sus cuentas y otorgue acceso temporal/mínimo por un canal aprobado. Activa autenticación y recuperación bajo control del cliente. Al terminar, revoca accesos de implementación que ya no se necesiten y confirma responsables.
- Comparte la hoja solo con personas que gestionan solicitudes. Evita enlaces de acceso público. No uses datos reales en pruebas, grabaciones o demos.
- Recoge nombre, celular, servicio, fecha/hora y nota porque el formulario los requiere/configura; no solicites datos sensibles innecesarios. La nota libre puede incluir información personal: advierte al usuario que escriba solo lo necesario y acuerda manejo con el negocio.
- Informa al visitante el propósito de uso de sus datos; no reutilices solicitudes para publicidad ni agregues personas a listas de marketing sin permiso aparte. Define con el cliente quién responde consultas, controla accesos, atiende solicitudes de privacidad y elimina datos cuando corresponda.
- No prometas cumplimiento legal solo por desplegar el texto de privacidad. El negocio debe aprobar aviso, base de tratamiento, conservación y responsabilidades aplicables, y pedir asesoría competente si tiene dudas.
- En material público elimina nombres, teléfonos, notas, URLs privadas, filas y notificaciones visibles. Revisa exports y capturas antes de compartir.

## 11. Entrega, capacitación y soporte

### Checklist de entrega

- [ ] Sitio publicado en dominio aprobado, HTTPS y enlaces revisados.
- [ ] Datos de prototipo sustituidos; ubicación verificada y aviso de prototipo retirado solo cuando corresponde.
- [ ] Formulario y hoja probados, registro de prueba identificado/retirado y responsable operativo confirmado.
- [ ] Cuenta, hoja, implementación Apps Script y proyecto Pages bajo titularidad y accesos acordados.
- [ ] Cliente recibe URL pública, resumen de qué se configuró, instrucciones de operación y canal de soporte acordado; nunca se adjuntan secretos.
- [ ] Cliente aprobó versión final y límites por escrito; cambios fuera de alcance quedan registrados para cotización.

### Capacitación breve al responsable

Haz que la persona realice el recorrido, no solo lo vea:

1. Abrir la hoja y localizar una solicitud nueva; reconocer fecha, contacto, servicio, preferencia, nota y origen.
2. Cambiar manualmente el estado según la atención; explicar que el sitio no agenda cupos ni cambia el estado por la conversación de WhatsApp.
3. Usar “Escribir” para contactar y confirmar disponibilidad, precio y hora antes de prometer una cita.
4. Distinguir solicitud guardada, mensaje de WhatsApp abierto y mensaje enviado. Son acciones diferentes.
5. Ante error de envío, indicar al visitante que no se guardó y pedir que contacte por WhatsApp o teléfono; inspeccionar la hoja antes de solicitar otro envío para evitar duplicados.
6. No reenviar la hoja ni capturas con datos a terceros. Contactar al responsable acordado si hay acceso desconocido o exposición.

Pide al responsable que explique de vuelta el proceso y deja a la vista quién atiende consultas, en qué horario y qué texto usa si no hay disponibilidad. La capacitación no sustituye el soporte contratado.

### Soporte y mantenimiento

Define por escrito canal, horario de atención, alcance, tiempos de respuesta acordados y qué constituye una urgencia; no uses “24/7” o SLA si no se contrató. Diferencia incidencias de la configuración entregada de cambios de contenido, nuevos servicios, rediseño, dominio, campañas, cambios del proveedor y nuevas funciones. Antes de cambiar Apps Script, Cloudflare, formularios, textos legales o estructura de datos, evalúa alcance y pide autorización.

En una revisión de mantenimiento acuerda: exactitud de datos, funcionamiento del formulario, accesos, enlaces, horarios/servicios, recursos y permisos, comportamiento de la hoja, copias/exportación que el cliente necesite y políticas vigentes de los proveedores. Evita garantizar uptime: es un objetivo del proyecto, no SLA.

## 12. Indicadores y mejora continua

Registra indicadores con periodo, fuente y definición. No atribuyas resultados al sitio si no hay medición confiable ni presentes objetivos internos como rendimiento logrado.

### Gestión comercial

- Prospectos identificados, contactados con contexto, calificados, propuestas enviadas, ganados y declinados.
- Conversión de etapa = casos que avanzaron / casos que estaban en la etapa, indicando periodo y tamaño de muestra.
- Tiempo invertido por etapa y motivos de pérdida, recogidos sin datos personales innecesarios.

### Operación del cliente

- Solicitudes registradas por periodo, origen disponible en cada registro, tiempo hasta el primer contacto si el negocio lo anota y estados finales que el negocio efectivamente actualiza.
- Solicitudes duplicadas, incidencias de guardado, errores reportados y dudas de uso.
- Si no existe analítica de visitas implementada, no inventes visitantes, tasas de conversión ni atribución. Los registros de la hoja cuentan solicitudes guardadas, no todas las visitas ni necesariamente ventas.

Revisa periódicamente con el cliente: ¿la información sigue correcta?, ¿qué consultas se repiten?, ¿hay solicitudes sin responder?, ¿qué parte del formulario genera confusión? Propón cambios dentro de la configuración disponible. Si la mejora exige una función nueva, descríbela como una propuesta separada; no la prometas como existente.

## Anexo A. Ficha editable de descubrimiento

```text
Negocio:
Nombre y rol del contacto:
Fecha / canal:
Necesidad expresada con palabras del negocio:
Cómo recibe y atiende consultas hoy:
Quién responderá las solicitudes de la landing:
Servicios y datos que desea mostrar:
Qué espera que ocurra al enviar el formulario:
Expectativas que requieren aclaración:
Materiales disponibles / pendientes:
Ubicación y canales públicos por verificar:
Decisor y proceso de aprobación:
Presupuesto / alcance a proponer (sin estimar antes de calificar):
Semáforo (verde / amarillo / rojo) y razones:
Siguiente acción y fecha acordada:
Preferencia de contacto / no contactar:
```

## Anexo B. Checklist editable por cliente

```text
[ ] Alcance aprobado y responsable designado
[ ] Nombre, ciudad, barrio y tipo de negocio confirmados
[ ] Teléfono, WhatsApp, correo y redes probados
[ ] Dirección, pin de Maps y enlace incrustado verificados
[ ] Horarios, zona horaria y nota de atención confirmados
[ ] Servicios, duración, precios y condiciones aprobados
[ ] Copy, preguntas frecuentes y CTA aprobados
[ ] Fotos, logo, testimonios y autorizaciones verificados
[ ] Campos opcionales y texto de privacidad aprobados
[ ] SEO, dominio, URL canónica e imagen social revisados
[ ] Hoja y Apps Script pertenecen a cuenta/responsable acordado
[ ] Accesos mínimos configurados; secretos fuera de código y cliente
[ ] Prueba de guardado, fila, WhatsApp, fallas y llamada completada
[ ] Prueba en móvil; datos de prototipo eliminados o señalados
[ ] Cliente aprobó la publicación y completó capacitación
[ ] Entrega y soporte acordados por escrito
```

## Anexo C. Propuesta comercial editable

```text
Para: [negocio / responsable]
Fecha:
Necesidad entendida:
Objetivo acordado:
Entregables incluidos:
Materiales y aprobaciones a cargo del cliente:
Dependencias (cuentas, dominio, hoja, Apps Script):
Fuera de alcance:
Pruebas y criterio de aceptación:
Capacitación / entrega:
Soporte incluido y periodo (si aplica):
Precio y condiciones de pago:
Dominio y otros costos de terceros:
Vigencia de la propuesta:
Aprobación de la persona autorizada:
```

## Anexo D. Resumen para prospecto / llamada de seguimiento

```text
Hola, [nombre]. Gracias por contarme cómo reciben hoy las solicitudes.
Entendí que [problema y prioridad]. La propuesta sería [entregables], con [responsabilidad del negocio] para revisar y confirmar cada solicitud.
Importante: la landing no bloquea horarios ni confirma citas automáticamente; después de guardar, WhatsApp abre un mensaje preparado que la persona debe enviar.
Te comparto [propuesta/demo ficticia] para revisión. ¿Qué dato o alcance debo corregir? Si no es prioridad, cierro el seguimiento sin problema.
```

## Anexo E. Acta simple de aprobación y entrega

```text
Negocio / proyecto:
Persona que aprueba:
URL y versión revisadas:
Contenido, ubicación y contactos aprobados: sí / no
Prueba de formulario y registro realizada: sí / no
Responsable de revisar solicitudes:
Confirmación manual de disponibilidad explicada: sí / no
Accesos y titularidad acordados:
Pendientes / exclusiones:
Fecha de entrega:
Soporte acordado:
Aprobación / observaciones:
```
