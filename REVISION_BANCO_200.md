# Banco de 200 preguntas — revisión editorial

Fuente por bloque: manual PDF y página; todas las respuestas están en el JavaScript del sitio.

## 001. Un operador utiliza Mode 2. ¿Qué asignación permite conservar el esquema habitual de ejes?
Producto: SimDron VR · Página PDF: 45 · Dificultad: 4 · Tema: Control HID
- A. Stick izquierdo: throttle/yaw; derecho: pitch/roll
- B. Stick izquierdo: pitch/roll; derecho: throttle/yaw
- C. Stick izquierdo: throttle/roll; derecho: pitch/yaw
- D. Stick izquierdo: pitch/yaw; derecho: throttle/roll
**Respuesta:** A. Stick izquierdo: throttle/yaw; derecho: pitch/roll
**Explicación:** En Mode 2, el stick izquierdo controla throttle y yaw; el derecho controla pitch y roll.
**Capítulo:** `simdron/gamepad-hid.html#p45`

## 002. El gamepad no aparece correctamente al iniciar SimDron. ¿Qué orden recomienda el manual?
Producto: SimDron VR · Página PDF: 46 · Dificultad: 3 · Tema: Preparación
- A. Iniciar SimDron y activar Bluetooth después
- B. Conectar el gamepad por Bluetooth antes de iniciar la aplicación
- C. Esperar hasta la escena de vuelo para emparejarlo
- D. Cambiar de escena antes de emparejarlo
**Respuesta:** B. Conectar el gamepad por Bluetooth antes de iniciar la aplicación
**Explicación:** El manual advierte expresamente que el gamepad debe estar conectado por Bluetooth antes de iniciar la aplicación.
**Capítulo:** `simdron/configurar-hid.html#p46`

## 003. Querés reasignar una acción del gamepad sin cambiar el dispositivo. ¿Qué capacidad describe el panel HID?
Producto: SimDron VR · Página PDF: 49 · Dificultad: 4 · Tema: Control HID
- A. Elegir uno de 16 ejes por acción
- B. Elegir únicamente entre dos perfiles fijos
- C. Asignar una acción solo a gatillos
- D. Reprogramar el firmware del control
**Respuesta:** A. Elegir uno de 16 ejes por acción
**Explicación:** Cada acción admite seleccionar uno de 16 ejes mediante menús desplegables.
**Capítulo:** `simdron/configurar-hid.html#p49`

## 004. Un alumno quiere alternar entre ajustes de control guardados. ¿Cuántos perfiles admite el selector descrito en el manual?
Producto: SimDron VR · Página PDF: 51 · Dificultad: 3 · Tema: Control HID
- A. 2
- B. 3
- C. 4
- D. 8
**Respuesta:** C. 4
**Explicación:** El menú Template permite guardar hasta cuatro perfiles de configuración.
**Capítulo:** `simdron/configurar-hid.html#p51`

## 005. ¿Qué caracteriza específicamente al modo HORIZON según el manual?
Producto: SimDron VR · Página PDF: 55 · Dificultad: 4 · Tema: Modos de vuelo
- A. Throttle es empuje directo sin control de altura
- B. Mantiene la altura como prioridad mediante estabilización
- C. Elimina el control de yaw
- D. Permite rotación libre ilimitada
**Respuesta:** B. Mantiene la altura como prioridad mediante estabilización
**Explicación:** HORIZON prioriza mantener la altura y utiliza throttle como control de altitud.
**Capítulo:** `simdron/modos-vuelo.html#p55`

## 006. En ANGLE, el alumno inclina el dron hacia adelante. ¿Por qué la altitud puede variar aunque conserve autoestabilización?
Producto: SimDron VR · Página PDF: 56 · Dificultad: 5 · Tema: Modos de vuelo
- A. Porque el yaw reemplaza al throttle
- B. Porque el ángulo de inclinación modifica la componente vertical del empuje
- C. Porque ANGLE obliga a usar seguimiento de terreno
- D. Porque desactiva todos los límites de ángulo
**Respuesta:** B. Porque el ángulo de inclinación modifica la componente vertical del empuje
**Explicación:** En ANGLE el throttle se aplica como fuerza de empuje y la inclinación cambia su componente vertical; el ángulo máximo está limitado.
**Capítulo:** `simdron/modos-vuelo.html#p56`

## 007. ¿Cuál de estas afirmaciones describe correctamente ACRO?
Producto: SimDron VR · Página PDF: 57 · Dificultad: 4 · Tema: Modos de vuelo
- A. Mantiene el horizonte nivelado por PID
- B. Tiene un límite de inclinación fijo
- C. Permite rotación libre en los tres ejes sin autoestabilización
- D. Mantiene altura aunque se invierta el dron
**Respuesta:** C. Permite rotación libre en los tres ejes sin autoestabilización
**Explicación:** ACRO no autoestabiliza ni limita el ángulo; el piloto debe administrar empuje y orientación.
**Capítulo:** `simdron/modos-vuelo.html#p57`

## 008. Dos alumnos aplican el mismo valor de throttle. Uno usa HORIZON y otro ANGLE. ¿Qué diferencia fundamental hay?
Producto: SimDron VR · Página PDF: 55 · Dificultad: 5 · Tema: Modos de vuelo
- A. En HORIZON controla altura; en ANGLE representa empuje
- B. En ambos modos siempre ordena una altitud exacta
- C. En ANGLE controla únicamente yaw
- D. En HORIZON controla el FOV
**Respuesta:** A. En HORIZON controla altura; en ANGLE representa empuje
**Explicación:** El manual diferencia claramente el control de altitud de HORIZON del empuje de ANGLE.
**Capítulo:** `simdron/modos-vuelo.html#p55`

## 009. La aeronave sobrevuela una estructura alta. ¿Qué medición corresponde a la distancia vertical obtenida mediante un sensor hasta el objeto o terreno inferior?
Producto: SimDron VR · Página PDF: 103 · Dificultad: 4 · Tema: HUD / OSD
- A. MSL
- B. AGL
- C. FOV
- D. FPS
**Respuesta:** B. AGL
**Explicación:** AGL se obtiene mediante un rayo sensor hasta una colisión o el terreno; MSL utiliza la referencia de altitud de mundo.
**Capítulo:** `simdron/osd.html#p103`

## 010. ¿Cuál es la diferencia más precisa entre MSL y AGL en el HUD del manual?
Producto: SimDron VR · Página PDF: 103 · Dificultad: 4 · Tema: HUD / OSD
- A. MSL refiere a un origen vertical del mundo; AGL mide hasta la superficie inferior
- B. MSL muestra la distancia al piloto; AGL la distancia al instructor
- C. MSL es velocidad; AGL es rumbo
- D. Son dos unidades intercambiables para el mismo dato
**Respuesta:** A. MSL refiere a un origen vertical del mundo; AGL mide hasta la superficie inferior
**Explicación:** El documento define MSL desde el origen Y de mundo y AGL por detección de superficie con colisión.
**Capítulo:** `simdron/osd.html#p103`

## 011. El indicador FPS baja de 72 a 60. ¿Cómo lo interpreta el manual?
Producto: SimDron VR · Página PDF: 102 · Dificultad: 3 · Tema: HUD / OSD
- A. 72 es lo ideal y puede descender a 60
- B. 60 es siempre el máximo permitido
- C. FPS mide la radiofrecuencia, no el rendimiento visual
- D. 72 corresponde al número de satélites
**Respuesta:** A. 72 es lo ideal y puede descender a 60
**Explicación:** En el esquema de OSD se indica que el rendimiento ideal son 72 FPS, aunque puede descender a 60.
**Capítulo:** `simdron/osd.html#p102`

## 012. ¿Qué diferencia al perfil Custom frente a los perfiles gráficos predefinidos?
Producto: SimDron VR · Página PDF: 38 · Dificultad: 3 · Tema: Configuración gráfica
- A. Impide ajustar sombras y vegetación
- B. Permite ajuste manual de parámetros específicos
- C. Bloquea el cambio de nivel de detalle
- D. Solo sirve para transmitir video
**Respuesta:** B. Permite ajuste manual de parámetros específicos
**Explicación:** Custom permite ajustar parámetros visuales en vez de aplicar únicamente un preset automático.
**Capítulo:** `simdron/manual-y-calidad.html#p38`

## 013. Querés reducir lo brusco de los giros sin modificar directamente la masa. ¿Qué parámetro corresponde revisar?
Producto: SimDron VR · Página PDF: 118 · Dificultad: 4 · Tema: Física
- A. Angular Drag
- B. FOV
- C. MSL
- D. RF Link
**Respuesta:** A. Angular Drag
**Explicación:** Angular Drag controla la resistencia al giro; Drag lineal frena el desplazamiento.
**Capítulo:** `simdron/fisicas-presets.html#p118`

## 014. ¿Qué efecto tiene aumentar la inercia de entrada (input spool) según la documentación?
Producto: SimDron VR · Página PDF: 118 · Dificultad: 5 · Tema: Física
- A. Hace las órdenes más instantáneas
- B. Suaviza los cambios y produce una respuesta más progresiva
- C. Duplica el número de hélices
- D. Desactiva el controlador PID
**Respuesta:** B. Suaviza los cambios y produce una respuesta más progresiva
**Explicación:** La inercia de entrada suaviza las órdenes; 0 ms implica respuesta instantánea y más nerviosa.
**Capítulo:** `simdron/fisicas-presets.html#p118`

## 015. ¿Qué describe Drag en el panel de sensación de vuelo?
Producto: SimDron VR · Página PDF: 118 · Dificultad: 4 · Tema: Física
- A. Resistencia al movimiento lineal
- B. Cantidad de datos enviados por radio
- C. Altura de referencia de mundo
- D. Velocidad del zoom
**Respuesta:** A. Resistencia al movimiento lineal
**Explicación:** Drag se refiere al frenado lineal del dron; Angular Drag al frenado de su rotación.
**Capítulo:** `simdron/fisicas-presets.html#p118`

## 016. En la escena de montaje, ¿qué combinación de interacciones se usa para manipular objetos y operar paneles?
Producto: SimDron VR · Página PDF: 64 · Dificultad: 3 · Tema: Interacciones VR
- A. Grab para objetos; poke/ray para paneles
- B. Solo teclado USB para todo
- C. Joystick derecho para ensamblar todas las piezas
- D. Exclusivamente el panel de Mission Control
**Respuesta:** A. Grab para objetos; poke/ray para paneles
**Explicación:** La escena utiliza hand tracking con grab y controles poke/ray para paneles y botones.
**Capítulo:** `simdron/adaptacion-montaje.html#p64`

## 017. ¿Cómo describe el manual el cambio entre vista inmersiva y passthrough?
Producto: SimDron VR · Página PDF: 29 · Dificultad: 3 · Tema: Meta Quest
- A. Solo al reiniciar el dispositivo
- B. Mediante botón de acción o doble toque ligero en el visor
- C. Desconectando el Wi-Fi
- D. Cambiando manualmente el perfil de dron
**Respuesta:** B. Mediante botón de acción o doble toque ligero en el visor
**Explicación:** Se mencionan el botón de acción y dos golpes leves en la sujeción lateral del visor.
**Capítulo:** `simdron/sistema-operativo.html#p29`

## 018. ¿Qué tipo de archivo utiliza FlightLogs para registrar resultados de vuelo?
Producto: SimDron VR · Página PDF: 33 · Dificultad: 3 · Tema: Reportes
- A. CSV
- B. GLB
- C. APK
- D. FBX
**Respuesta:** A. CSV
**Explicación:** El manual describe FlightLogs como archivos CSV con datos de vuelo.
**Capítulo:** `simdron/cuenta-chat-casting.html#p33`

## 019. ¿Cómo se distribuye la planificación básica de 30 horas?
Producto: SimDron VR · Página PDF: 176 · Dificultad: 4 · Tema: Entrenamiento
- A. Tres semanas de cinco días y dos horas por día
- B. Diez días de tres horas todos los días
- C. Una semana de seis horas diarias
- D. Tres jornadas de diez horas
**Respuesta:** A. Tres semanas de cinco días y dos horas por día
**Explicación:** El plan propone tres semanas, cinco días por semana, dos horas diarias y dos módulos de una hora.
**Capítulo:** `simdron/plan-30-horas.html#p176`

## 020. El usuario está perdido en un escenario y utiliza el teclado Bluetooth. ¿Qué tecla vuelve a la escena principal?
Producto: SimDron VR · Página PDF: 96 · Dificultad: 4 · Tema: Controles adicionales
- A. N
- B. B
- C. L
- D. F
**Respuesta:** C. L
**Explicación:** La tecla L vuelve a la escena principal, según la tabla de interacciones por teclado.
**Capítulo:** `simdron/teclado-durante.html#p96`

## 021. Una interfaz movida temporalmente pierde interacción. ¿Qué tecla indica el manual para reiniciar la pantalla del control?
Producto: SimDron VR · Página PDF: 96 · Dificultad: 4 · Tema: Controles adicionales
- A. B
- B. L
- C. N
- D. P
**Respuesta:** A. B
**Explicación:** B reinicia la pantalla del control; L regresa a la escena principal y P reinicia la escena.
**Capítulo:** `simdron/teclado-durante.html#p96`

## 022. Para extraer los registros y capturas generados por SimDron, ¿qué conexión describe el manual?
Producto: SimDron VR · Página PDF: 33 · Dificultad: 3 · Tema: Fotografía
- A. USB-C del Quest a una PC
- B. HDMI directo desde el visor
- C. Cable Ethernet en el mando
- D. Solo impresión desde C2
**Respuesta:** A. USB-C del Quest a una PC
**Explicación:** Se indica conectar Meta Quest a una PC por USB-C para acceder a los archivos almacenados.
**Capítulo:** `simdron/cuenta-chat-casting.html#p33`

## 023. En el panel Gates, ¿qué hace Distributor?
Producto: SimDron VR · Página PDF: 155 · Dificultad: 4 · Tema: Gates
- A. Redistribuye portales por todo el terreno
- B. Exporta un archivo CSV
- C. Cambia el tipo de cámara
- D. Resetea la batería virtual
**Respuesta:** A. Redistribuye portales por todo el terreno
**Explicación:** Distributor redistribuye los portales; Path Gen genera una ruta sugerida.
**Capítulo:** `simdron/gates.html#p155`

## 024. En Gates, ¿qué acción corresponde a Path Gen?
Producto: SimDron VR · Página PDF: 155 · Dificultad: 4 · Tema: Gates
- A. Generar un camino sugerido de entrenamiento
- B. Establecer las coordenadas del alumno
- C. Asignar una estación Qxx
- D. Cambiar el mapa a ortofoto
**Respuesta:** A. Generar un camino sugerido de entrenamiento
**Explicación:** Path Gen genera la ruta sugerida para un recorrido desafiante y puede apagarse volviendo a pulsarlo.
**Capítulo:** `simdron/gates.html#p155`

## 025. ¿Qué dos referencias distingue el manual para el licenciamiento de SimDron?
Producto: SimDron VR · Página PDF: 62 · Dificultad: 4 · Tema: Licenciamiento
- A. Usuario y dispositivo
- B. Solo IP y router
- C. Solo correo del docente y resolución
- D. Fecha y número de escenario
**Respuesta:** A. Usuario y dispositivo
**Explicación:** El manual diferencia la cuenta de Meta del usuario y el fingerprint del dispositivo.
**Capítulo:** `simdron/primer-inicio.html#p62`

## 026. ¿Qué control realiza un ajuste fino que resulta especialmente útil cuando el eje es analógico?
Producto: SimDron VR · Página PDF: 50 · Dificultad: 4 · Tema: Control HID
- A. Sliders de sensibilidad/zonas del panel HID
- B. Selector de misiones de C2
- C. Pantalla de telemetría del instructor
- D. Generador de calcos
**Respuesta:** A. Sliders de sensibilidad/zonas del panel HID
**Explicación:** El manual describe sliders de ajuste fino para ejes, aprovechables especialmente en ejes analógicos.
**Capítulo:** `simdron/configurar-hid.html#p50`

## 027. Para reducir latencia entre el Hub docente y el router del aula, ¿qué conexión se recomienda?
Producto: Mission Control · Página PDF: 5 · Dificultad: 4 · Tema: Topología
- A. Ethernet por cable
- B. Bluetooth directo
- C. USB-C entre los visores
- D. Compartir Internet desde cada Quest
**Respuesta:** A. Ethernet por cable
**Explicación:** El manual recomienda conectar el router Wi-Fi al Hub docente mediante cable de red.
**Capítulo:** `mission-control/topologia.html#p5`

## 028. ¿Qué sucede si se cierra la ventana del navegador donde se usa Mission Control?
Producto: Mission Control · Página PDF: 6 · Dificultad: 4 · Tema: Arquitectura
- A. El servicio puede continuar ejecutándose en Windows
- B. Todos los datos del aula se borran siempre
- C. Todas las Quest se formatean
- D. Se apaga físicamente el router
**Respuesta:** A. El servicio puede continuar ejecutándose en Windows
**Explicación:** Mission Control se ejecuta como servicio y el frontend se abre en navegador; cerrar la ventana no equivale a finalizar el ejercicio.
**Capítulo:** `mission-control/instalacion.html#p6`

## 029. El instructor carga una ortofoto GIS en Mission Control. ¿Qué limitación aclara expresamente el manual?
Producto: Mission Control · Página PDF: 13 · Dificultad: 5 · Tema: Cartografía
- A. La capa cartográfica no se proyecta automáticamente sobre el terrain del Quest
- B. La ortofoto reemplaza el terreno físico del Quest
- C. Solo admite imágenes capturadas con el Quest
- D. Obliga a activar Internet durante cada clase
**Respuesta:** A. La capa cartográfica no se proyecta automáticamente sobre el terrain del Quest
**Explicación:** Las capas GIS se usan como fondo contextual de Mission Control; no se proyectan automáticamente en el terreno 3D de SimDron.
**Capítulo:** `mission-control/cartografia.html#p13`

## 030. Querés trabajar en un aula sin salida a Internet con cartografía ya instalada. ¿Qué opción se describe?
Producto: Mission Control · Página PDF: 13 · Dificultad: 4 · Tema: Cartografía
- A. Solo offline / ahorro de datos
- B. Forzar streaming remoto
- C. Borrar paquetes locales
- D. Desactivar el Hub
**Respuesta:** A. Solo offline / ahorro de datos
**Explicación:** La opción solo offline evita descargas y emplea recursos cartográficos locales.
**Capítulo:** `mission-control/cartografia.html#p13`

## 031. ¿Qué área de Mission Control permite guardar configuraciones de ejercicios para reutilizarlas después?
Producto: Mission Control · Página PDF: 31 · Dificultad: 3 · Tema: Organización
- A. Clases
- B. C2 Wall
- C. VFX
- D. QA Aula
**Respuesta:** A. Clases
**Explicación:** Clases almacena planificaciones localmente para repetir ejercicios sin reconstruirlos.
**Capítulo:** `mission-control/clases.html#p31`

## 032. Antes de aplicar una acción a un alumno concreto, ¿qué selección reduce el riesgo de afectar a todo el curso?
Producto: Mission Control · Página PDF: 12 · Dificultad: 4 · Tema: Operación del aula
- A. Elegir la estación Qxx correspondiente y no TODOS
- B. Cambiar el color del mapa
- C. Salir del modo claro
- D. Cerrar la vista C2
**Respuesta:** A. Elegir la estación Qxx correspondiente y no TODOS
**Explicación:** AULA sirve para delimitar contexto. La diferencia entre Q03 y TODOS se menciona para evitar órdenes con alcance equivocado.
**Capítulo:** `mission-control/aula.html#p12`

## 033. Un instructor aplica un preset de física remoto y luego el alumno selecciona otro preset desde Quest. ¿Qué prioridad describe el manual?
Producto: Mission Control · Página PDF: 38 · Dificultad: 5 · Tema: Dron Lab
- A. El cambio local vuelve a tener prioridad hasta otro envío remoto
- B. El preset remoto bloquea permanentemente el Quest
- C. Se eliminan ambos presets
- D. Se reinicia Mission Control automáticamente
**Respuesta:** A. El cambio local vuelve a tener prioridad hasta otro envío remoto
**Explicación:** El preset remoto no sobrescribe permanentemente las preferencias; un cambio local posterior prima hasta recibir una nueva revisión remota.
**Capítulo:** `mission-control/dronlab.html#p38`

## 034. ¿Qué modo autónomo utiliza los waypoints previamente definidos en TÁCTICO?
Producto: Mission Control · Página PDF: 39 · Dificultad: 4 · Tema: Auto/AI
- A. WAYPOINT ROUTE
- B. EXPO
- C. VFX
- D. OFF
**Respuesta:** A. WAYPOINT ROUTE
**Explicación:** WAYPOINT ROUTE consume los waypoints creados en el módulo TÁCTICO.
**Capítulo:** `mission-control/auto-ai.html#p39`

## 035. Una Quest recién conectada aparece como UNASSIGNED. ¿Cuál es la operación prevista?
Producto: Mission Control · Página PDF: 43 · Dificultad: 4 · Tema: Dispositivos
- A. Asignarle una estación Q01–Q10
- B. Cambiarla obligatoriamente por otra
- C. Eliminar todos los datos de telemetría
- D. Conectarla por HDMI
**Respuesta:** A. Asignarle una estación Q01–Q10
**Explicación:** Desde Dispositivos el instructor puede identificar y asignar una estación Qxx a una Quest nueva.
**Capítulo:** `mission-control/dispositivos.html#p43`

## 036. ¿Qué formato permite incorporar datos de un ejercicio individual anterior al mapa de Mission Control?
Producto: Mission Control · Página PDF: 50 · Dificultad: 4 · Tema: Datos de vuelo
- A. CSV
- B. OBJ
- C. WAV
- D. HDR
**Respuesta:** A. CSV
**Explicación:** Además del seguimiento en vivo, Mission Control puede cargar archivos CSV de vuelos anteriores.
**Capítulo:** `mission-control/config-mapas.html#p50`

## 037. ¿Cuál es la diferencia entre las vistas C2 Mixto y Foco?
Producto: Mission Control · Página PDF: 55 · Dificultad: 4 · Tema: Vista C2
- A. Mixto combina mapa y cámaras; Foco se concentra en un alumno y su dron SRR
- B. Mixto borra la telemetría; Foco apaga el Hub
- C. Mixto solo sirve sin Quest; Foco exige Internet
- D. Son modos idénticos de impresión
**Respuesta:** A. Mixto combina mapa y cámaras; Foco se concentra en un alumno y su dron SRR
**Explicación:** Mixto visualiza mapa y cámaras principales; Foco concentra el mapa y las vistas del dron principal y SRR de una Quest.
**Capítulo:** `mission-control/c2.html#p55`

## 038. ¿Por qué C2 Wall evita actualizar las diez cámaras a 72 FPS?
Producto: Mission Control · Página PDF: 56 · Dificultad: 5 · Tema: Vista C2
- A. Para reducir la carga de streaming y preservar la fluidez de los Quest
- B. Porque los Quest solo funcionan a 3 FPS
- C. Porque solo muestra fotografías estáticas
- D. Para mejorar el GPS del simulador
**Respuesta:** A. Para reducir la carga de streaming y preservar la fluidez de los Quest
**Explicación:** El manual indica una actualización aproximada de 3 imágenes por segundo para Wall, priorizando la experiencia del alumno en Quest.
**Capítulo:** `mission-control/c2.html#p56`

## 039. En el modo de asistencia al alumno de Tablet, ¿qué alternativa permite obtener una imagen estable en vez de la vista Live?
Producto: Mission Control · Página PDF: 58 · Dificultad: 4 · Tema: Tablet
- A. Modo captura
- B. Modo MGRS
- C. Modo Prowl
- D. Modo Dron Lab
**Respuesta:** A. Modo captura
**Explicación:** Tablet ofrece Live, descrito a unos 8 FPS, y un modo de captura para congelar una imagen estable.
**Capítulo:** `mission-control/tablet.html#p58`

## 040. El instructor cambia a White Hot desde C2. ¿Qué alcance tiene ese ajuste según el manual?
Producto: Mission Control · Página PDF: 57 · Dificultad: 4 · Tema: C2 / VFX
- A. Afecta la visualización en C2, no sustituye automáticamente la configuración visual de Quest
- B. Reemplaza el firmware de los Quest
- C. Cambia la vegetación del terrain en todos los Quest
- D. Modifica el PID del dron
**Respuesta:** A. Afecta la visualización en C2, no sustituye automáticamente la configuración visual de Quest
**Explicación:** Los ajustes de brillo, contraste y visualización VIS/térmica descritos en VFX afectan C2; cada Quest mantiene su configuración.
**Capítulo:** `mission-control/vfx-c2.html#p57`

## 041. ¿Por qué QA Aula está separado de la vista de uso normal del docente?
Producto: Mission Control · Página PDF: 44 · Dificultad: 4 · Tema: QA Aula
- A. Para concentrar diagnósticos y no saturar la interfaz operativa
- B. Porque no funciona sin Internet
- C. Porque solo admite controles de vuelo
- D. Porque elimina registros de ejercicios
**Respuesta:** A. Para concentrar diagnósticos y no saturar la interfaz operativa
**Explicación:** El manual separa diagnóstico y soporte técnico para evitar advertencias innecesarias durante una clase.
**Capítulo:** `mission-control/qa-aula.html#p44`

## 042. ¿Qué produce el generador de Misiones además de las capas de planificación?
Producto: Mission Control · Página PDF: 52 · Dificultad: 3 · Tema: Misiones
- A. Briefing y debriefing imprimibles
- B. Una APK nueva
- C. Los archivos fuente de Unity
- D. El instalador del Hub
**Respuesta:** A. Briefing y debriefing imprimibles
**Explicación:** El generador prepara briefing y debriefing en pestañas, con posibilidad de imprimirlos.
**Capítulo:** `mission-control/misiones.html#p52`

## 043. ¿Qué distingue Calcos del módulo TÁCTICO?
Producto: Mission Control · Página PDF: 18 · Dificultad: 4 · Tema: Calcos
- A. Calcos permite dibujo libre sobre el mapa; TÁCTICO contiene información estructurada
- B. Calcos administra licencias de Quest
- C. Calcos sirve solo para configurar el gamepad
- D. TÁCTICO se usa exclusivamente para cambiar resolución
**Respuesta:** A. Calcos permite dibujo libre sobre el mapa; TÁCTICO contiene información estructurada
**Explicación:** Calcos crea anotaciones y geometrías libres, mientras que TÁCTICO organiza símbolos, puntos y rutas.
**Capítulo:** `mission-control/calcos.html#p18`

## 044. Si el pad de despegue quedó lejos del usuario, ¿qué control lo aproxima?
Producto: SimDron VR · Página PDF: 114 · Dificultad: 5 · Tema: Inicialización
- A. Origin H
- B. Cube
- C. Respawn
- D. MENU Return
**Respuesta:** A. Origin H
**Explicación:** Origin H devuelve el pad de inicio frente al usuario.
**Capítulo:** `simdron/init-loadout.html#p114`

## 045. ¿Qué sucede cuando el filamento simulado FO se agota?
Producto: SimDron VR · Página PDF: 128 · Dificultad: 5 · Tema: Enlaces
- A. Se corta la transmisión y se pierde el control
- B. Se conmuta automáticamente a RF
- C. Solo desaparece la traza visual del cable
- D. El dron sigue por inercia con control normal
**Respuesta:** A. Se corta la transmisión y se pierde el control
**Explicación:** El manual indica pérdida del enlace al llegar a cero el recorrido de fibra.
**Capítulo:** `simdron/hardware.html#p128`

## 046. Si el viento supera la velocidad del dron en el sentido contrario, ¿qué puede pasar?
Producto: SimDron VR · Página PDF: 134 · Dificultad: 5 · Tema: Viento
- A. Que deje de avanzar respecto al terreno
- B. Que avance más lento pero sin poder detenerse
- C. Que el efecto solo se note en la cámara
- D. Que el viento se compense elevando FOV
**Respuesta:** A. Que deje de avanzar respecto al terreno
**Explicación:** El manual explica que una combinación adversa puede anular avance efectivo.
**Capítulo:** `simdron/wind.html#p134`

## 047. Si aumenta la masa de la carga suspendida, ¿qué efecto espera el manual?
Producto: SimDron VR · Página PDF: 137 · Dificultad: 5 · Tema: Payload
- A. Respuesta más lenta y mayor influencia pendular
- B. Respuesta más rápida y menor oscilación de la carga
- C. Solo más arrastre visual sin efecto físico
- D. Menor momento pendular al acelerar
**Respuesta:** A. Respuesta más lenta y mayor influencia pendular
**Explicación:** El panel advierte más lentitud y tirones con masa adicional.
**Capítulo:** `simdron/payload.html#p137`

## 048. ¿Qué perfil está concebido para transición de despegue vertical a vuelo rápido casi horizontal?
Producto: SimDron VR · Página PDF: 59 · Dificultad: 4 · Tema: Modelos de dron
- A. High Speed
- B. SRR
- C. RTF
- D. Mini
**Respuesta:** A. High Speed
**Explicación:** El texto del High Speed explica despegue vertical y posterior avance casi horizontal.
**Capítulo:** `simdron/modelos-pid.html#p59`

## 049. ¿Por qué el OSD muestra batería de sistema y batería de motores por separado?
Producto: SimDron VR · Página PDF: 104 · Dificultad: 4 · Tema: OSD
- A. Representan subsistemas con consumo y autonomía propios
- B. Una es la batería del teclado de instructor
- C. Una siempre refleja la carga de la tablet externa
- D. Son duplicados visuales sin función
**Respuesta:** A. Representan subsistemas con consumo y autonomía propios
**Explicación:** El manual distingue alimentación de cámara/control y la destinada a motores.
**Capítulo:** `simdron/osd.html#p104`

## 050. ¿Qué control ajusta el umbral o valor por defecto del recorrido de un eje?
Producto: SimDron VR · Página PDF: 50 · Dificultad: 5 · Tema: Configuración HID
- A. Trimming
- B. Dead Zone
- C. Sensitivity
- D. Invert
**Respuesta:** A. Trimming
**Explicación:** Trimming cambia el umbral/rango y el valor por defecto del eje.
**Capítulo:** `simdron/configurar-hid.html#p50`

## 051. Para practicar inversión de actitud y rotaciones sin límites automáticos, ¿qué modo corresponde?
Producto: SimDron VR · Página PDF: 57 · Dificultad: 5 · Tema: Modos de vuelo
- A. ACRO
- B. ANGLE
- C. HORIZON
- D. RTH
**Respuesta:** A. ACRO
**Explicación:** ACRO permite control sin autoestabilización ni límite angular.
**Capítulo:** `simdron/modos-vuelo.html#p57`

## 052. Ante rebotes tras corregir la actitud, ¿qué componente del PID se ajusta para amortiguarlos?
Producto: SimDron VR · Página PDF: 60 · Dificultad: 5 · Tema: Control PID
- A. D
- B. P proporcional
- C. I integral
- D. Max Angle
**Respuesta:** A. D
**Explicación:** La guía de PID explica que D ayuda a amortiguar y reducir sobreoscilaciones.
**Capítulo:** `simdron/modelos-pid.html#p60`

## 053. ¿Qué parte de la vegetación detiene con mayor probabilidad al dron?
Producto: SimDron VR · Página PDF: 70 · Dificultad: 5 · Tema: Colisiones y vegetación
- A. Las zonas rígidas como troncos o centros del árbol
- B. Las puntas de hojas y ramas flexibles
- C. Todas las hojas sin distinción
- D. Solo la sombra proyectada sobre el suelo
**Respuesta:** A. Las zonas rígidas como troncos o centros del árbol
**Explicación:** La vegetación implementa colisiones principalmente en partes duras; extremos blandos pueden carecer de hitbox.
**Capítulo:** `simdron/catalogo-escenarios.html#p70`

## 054. ¿Qué precisión alternativa ofrece el panel de coordenadas del SRR?
Producto: SimDron VR · Página PDF: 95 · Dificultad: 5 · Tema: SRR
- A. Seis u ocho dígitos
- B. Cuatro u ocho dígitos
- C. Ocho o diez dígitos
- D. Solo diez dígitos
**Respuesta:** A. Seis u ocho dígitos
**Explicación:** El HUD permite alternar coordenadas de seis u ocho dígitos.
**Capítulo:** `simdron/srr.html#p95`

## 055. ¿Cuáles son las tres modalidades de enlace señaladas en el OSD?
Producto: SimDron VR · Página PDF: 102 · Dificultad: 5 · Tema: OSD
- A. SAT, RF y FO
- B. SAT, RF y Wi-Fi
- C. RF, FO y Bluetooth
- D. SAT, HDMI y RF
**Respuesta:** A. SAT, RF y FO
**Explicación:** El OSD diferencia señales satelital, radiofrecuencia y fibra óptica.
**Capítulo:** `simdron/osd.html#p102`

## 056. Según el esquema del filtro analógico, ¿qué región representa pérdida de control del dron?
Producto: SimDron VR · Página PDF: 107 · Dificultad: 5 · Tema: ECM
- A. Blanca
- B. Violeta
- C. Turquesa
- D. Verde
**Respuesta:** A. Blanca
**Explicación:** El esquema distingue interferencia intermitente, blackout de video y pérdida de mando.
**Capítulo:** `simdron/capas-senal.html#p107`

## 057. ¿Sobre qué elementos se aplica el efecto térmico procedural descrito?
Producto: SimDron VR · Página PDF: 110 · Dificultad: 5 · Tema: Visión térmica
- A. Objetos del entorno y entidades, no todo el terreno y vegetación
- B. Toda la vegetación y el terrain por igual
- C. Únicamente el skybox y nubes
- D. Solo el texto OSD, sin materiales del mundo
**Respuesta:** A. Objetos del entorno y entidades, no todo el terreno y vegetación
**Explicación:** El documento limita el efecto térmico a objetos y enemigos, no al terreno y vegetación.
**Capítulo:** `simdron/fpv-sensores.html#p110`

## 058. ¿Qué control del panel altera la secuencia de inicio de motores?
Producto: SimDron VR · Página PDF: 115 · Dificultad: 5 · Tema: Configuración del dron
- A. CSC
- B. HOVER DRON
- C. MODE
- D. INIT Respawn
**Respuesta:** A. CSC
**Explicación:** La sección Dron describe un selector CSC de armado de motores.
**Capítulo:** `simdron/init-loadout.html#p115`

## 059. ¿Qué condición de plataforma impone el manual para activar un FPV Loadout?
Producto: SimDron VR · Página PDF: 117 · Dificultad: 5 · Tema: Carga FPV
- A. Dron FPV seleccionado
- B. Dron RTF con Rack
- C. Cualquier modelo con payload habilitado
- D. Dron Mini con cámaras FLIR
**Respuesta:** A. Dron FPV seleccionado
**Explicación:** Aunque haya visualización en otros drones, la activación corresponde al FPV.
**Capítulo:** `simdron/init-loadout.html#p117`

## 060. ¿En qué modo se utiliza específicamente el PID de altitud según el manual?
Producto: SimDron VR · Página PDF: 123 · Dificultad: 5 · Tema: Auto Feedback
- A. HORIZON
- B. ANGLE
- C. ACRO
- D. Todos por igual
**Respuesta:** A. HORIZON
**Explicación:** El panel Auto Feedback especifica estabilización de altura en HORIZON.
**Capítulo:** `simdron/auto-feedback.html#p123`

## 061. Un dron oscila lentamente alrededor de la altitud objetivo tras subir I. ¿Qué sospechás?
Producto: SimDron VR · Página PDF: 124 · Dificultad: 5 · Tema: Control PID
- A. Ganancia integral excesiva
- B. P de altitud demasiado alto
- C. D de altitud excesivo
- D. Dead Zone insuficiente
**Respuesta:** A. Ganancia integral excesiva
**Explicación:** El documento asocia demasiada integral con oscilación vertical lenta.
**Capítulo:** `simdron/auto-feedback.html#p124`

## 062. ¿Qué valor permite fijar una dirección de viento no cardinal?
Producto: SimDron VR · Página PDF: 135 · Dificultad: 5 · Tema: Viento
- A. Ángulo customizado de 0 a 360 grados
- B. Selector cardinal Norte/Sur/Este/Oeste
- C. Giro del gimbal entre 0 y 120°
- D. Max Angle de los modos asistidos
**Respuesta:** A. Ángulo customizado de 0 a 360 grados
**Explicación:** El panel Wind admite dirección personalizada por ángulo.
**Capítulo:** `simdron/wind.html#p135`

## 063. ¿Qué hace Path en el panel de enjambre?
Producto: SimDron VR · Página PDF: 142 · Dificultad: 5 · Tema: Swarm
- A. Activa una trayectoria para que los drones acompañen al principal
- B. Invierte el orden de lanzamiento
- C. Fija los drones a las mismas coordenadas sin seguimiento
- D. Pausa la IA de las aeronaves secundarias
**Respuesta:** A. Activa una trayectoria para que los drones acompañen al principal
**Explicación:** Path habilita que el grupo siga al dron principal.
**Capítulo:** `simdron/ai.html#p142`

## 064. En la línea de coordenadas de la radio 9-Line, ¿qué cambia la selección A/B?
Producto: SimDron VR · Página PDF: 146 · Dificultad: 5 · Tema: Radio MEDEVAC
- A. Precisión de seis u ocho dígitos MGRS
- B. Precisión de cuatro u ocho dígitos MGRS
- C. Precisión de seis o diez dígitos MGRS
- D. Selección de canal de radio A o B
**Respuesta:** A. Precisión de seis u ocho dígitos MGRS
**Explicación:** A selecciona 6 dígitos y B 8 en la entrada de coordenadas.
**Capítulo:** `simdron/9-line-gps.html#p146`

## 065. ¿Qué método de movimiento de la guía requiere controladores Quest?
Producto: SimDron VR · Página PDF: 40 · Dificultad: 4 · Tema: Interacción VR
- A. Teleport
- B. MGRS
- C. FLIR
- D. PID
**Respuesta:** A. Teleport
**Explicación:** La sección de tipos de interacción indica que teleport se realiza con los controladores.
**Capítulo:** `simdron/teclado-vr.html#p40`

## 066. ¿Qué control se conserva como giro alrededor del eje vertical en HORIZON?
Producto: SimDron VR · Página PDF: 55 · Dificultad: 4 · Tema: Vuelo asistido
- A. Yaw
- B. Roll
- C. FOV
- D. Drag
**Respuesta:** A. Yaw
**Explicación:** Yaw continúa representando rotación sobre el eje vertical.
**Capítulo:** `simdron/modos-vuelo.html#p55`

## 067. ¿Qué característica tiene ANGLE que ACRO no impone?
Producto: SimDron VR · Página PDF: 56 · Dificultad: 4 · Tema: Modos de vuelo
- A. Límite de inclinación con autoestabilización
- B. Vuelo libre ilimitado sin asistencia
- C. Prohibición absoluta de yaw
- D. Ausencia de throttle
**Respuesta:** A. Límite de inclinación con autoestabilización
**Explicación:** ANGLE limita inclinación y estabiliza; ACRO permite rotación libre.
**Capítulo:** `simdron/modos-vuelo.html#p56`

## 068. ¿Qué modelo del manual se asemeja a un quad FPV competitivo de siete pulgadas?
Producto: SimDron VR · Página PDF: 58 · Dificultad: 4 · Tema: Modelos de dron
- A. FPV
- B. SRR
- C. Mini
- D. RTF
**Respuesta:** A. FPV
**Explicación:** El modelo FPV está descrito como 7 pulgadas y orientado a vuelo FPV.
**Capítulo:** `simdron/modelos-pid.html#p58`

## 069. ¿Con qué dispositivo se controla manualmente el dron SRR según el manual?
Producto: SimDron VR · Página PDF: 94 · Dificultad: 4 · Tema: SRR
- A. Teclado Bluetooth
- B. Sensor de temperatura del visor
- C. El mouse del instructor únicamente
- D. Los botones de volumen del Quest
**Respuesta:** A. Teclado Bluetooth
**Explicación:** El dron observador SRR admite operación mediante teclado Bluetooth.
**Capítulo:** `simdron/srr.html#p94`

## 070. ¿Qué dato describe el ancho de encuadre de la cámara del dron?
Producto: SimDron VR · Página PDF: 103 · Dificultad: 4 · Tema: OSD
- A. FOV
- B. AGL
- C. MSL
- D. Drag
**Respuesta:** A. FOV
**Explicación:** FOV es el campo de visión de la cámara.
**Capítulo:** `simdron/osd.html#p103`

## 071. ¿Con qué mecanismo se obtiene la distancia del telémetro a un objeto?
Producto: SimDron VR · Página PDF: 105 · Dificultad: 4 · Tema: OSD
- A. Rayo sensor hacia una superficie con colisión
- B. Lectura del micrófono del Quest
- C. Estimación por número de FPS
- D. Código de licencia del visor
**Respuesta:** A. Rayo sensor hacia una superficie con colisión
**Explicación:** El telémetro calcula distancia métrica hasta terreno u objetos detectables por colisión.
**Capítulo:** `simdron/osd.html#p105`

## 072. ¿Qué modo superpone lluvia en lente e interferencia analógica?
Producto: SimDron VR · Página PDF: 106 · Dificultad: 4 · Tema: Degradación visual
- A. Combined
- B. Clean
- C. Only GPS
- D. HORIZON
**Respuesta:** A. Combined
**Explicación:** Combined combina las dos capas de degradación visual descritas.
**Capítulo:** `simdron/capas-senal.html#p106`

## 073. ¿Qué efecto tiene subir el límite Max Angle en modos asistidos?
Producto: SimDron VR · Página PDF: 119 · Dificultad: 4 · Tema: Rates
- A. Permitir mayor inclinación y desplazamiento lateral
- B. Reducir a cero el FOV
- C. Bloquear todo el giro yaw
- D. Duplicar la batería
**Respuesta:** A. Permitir mayor inclinación y desplazamiento lateral
**Explicación:** El capítulo de física indica mayor agilidad con límites angulares superiores.
**Capítulo:** `simdron/fisicas-presets.html#p119`

## 074. ¿Para qué sirve HDMI dentro del simulador según la guía?
Producto: SimDron VR · Página PDF: 126 · Dificultad: 4 · Tema: Sistema de cámara
- A. Reproducir la señal del dron en otras pantallas virtuales
- B. Cambiar el firmware del visor
- C. Grabar directamente la memoria del router
- D. Activar los sticks Bluetooth
**Respuesta:** A. Reproducir la señal del dron en otras pantallas virtuales
**Explicación:** El panel System permite mostrar video en pantallas dentro del entorno virtual.
**Capítulo:** `simdron/system.html#p126`

## 075. ¿Qué entrena el enjambre respecto al vuelo del alumno?
Producto: SimDron VR · Página PDF: 141 · Dificultad: 4 · Tema: Swarm
- A. Convivir con otras aeronaves y evitar colisiones
- B. Configurar impresoras de red
- C. Cambiar la cuenta de Meta
- D. Eliminar los obstáculos del terreno
**Respuesta:** A. Convivir con otras aeronaves y evitar colisiones
**Explicación:** El texto describe múltiples drones próximos que exigen atención espacial.
**Capítulo:** `simdron/ai.html#p141`

## 076. ¿Qué subsistemas del dron puede degradar una contramedida simulada?
Producto: SimDron VR · Página PDF: 149 · Dificultad: 4 · Tema: ECM
- A. Video y control de enlace
- B. La contraseña de la cuenta Meta
- C. El modelo 3D del controlador
- D. El tamaño del archivo CSV
**Respuesta:** A. Video y control de enlace
**Explicación:** La documentación de ECM describe interferencia de transmisión y mando.
**Capítulo:** `simdron/enemies-ecm.html#p149`

## 077. ¿Qué se incorpora en la etapa 2 respecto a la anterior?
Producto: SimDron VR · Página PDF: 169 · Dificultad: 4 · Tema: Formación
- A. Mapas, modelos, cámara, sensores y telemetría
- B. Programación nativa de aplicaciones Android
- C. Instalación de servidores Linux
- D. Edición de hardware del Meta Quest
**Respuesta:** A. Mapas, modelos, cámara, sensores y telemetría
**Explicación:** La etapa 2 amplía exploración, observación y comprensión del entorno.
**Capítulo:** `simdron/etapas-formacion.html#p169`

## 078. ¿Qué integra principalmente la etapa 3?
Producto: SimDron VR · Página PDF: 170 · Dificultad: 4 · Tema: Formación
- A. Destreza, navegación, degradación y evaluación en misiones simuladas
- B. Solo primeras nociones del visor
- C. Únicamente cambio de strap
- D. Solo emparejamiento Bluetooth
**Respuesta:** A. Destreza, navegación, degradación y evaluación en misiones simuladas
**Explicación:** La etapa 3 integra tareas complejas siempre como simulación educativa.
**Capítulo:** `simdron/etapas-formacion.html#p170`

## 079. ¿Cuántos módulos de una hora comprende el plan básico de 30 horas?
Producto: SimDron VR · Página PDF: 176 · Dificultad: 4 · Tema: Planificación
- A. Treinta
- B. Diez
- C. Quince
- D. Sesenta
**Respuesta:** A. Treinta
**Explicación:** Tres semanas de cinco días con dos módulos diarios suman 30 módulos.
**Capítulo:** `simdron/plan-30-horas.html#p176`

## 080. ¿Cuántos esquemas de control de ejes emula el simulador?
Producto: SimDron VR · Página PDF: 45 · Dificultad: 3 · Tema: Modo de sticks
- A. Cuatro
- B. Dos
- C. Seis
- D. Dieciséis
**Respuesta:** A. Cuatro
**Explicación:** El manual muestra los modos de control 1, 2, 3 y 4.
**Capítulo:** `simdron/gamepad-hid.html#p45`

## 081. ¿Por qué existen varios perfiles de calidad en Quest?
Producto: SimDron VR · Página PDF: 38 · Dificultad: 4 · Tema: Calidad gráfica
- A. Para adaptar el coste gráfico al rendimiento disponible
- B. Para cambiar el modo de radio del dron
- C. Para activar la cuenta de Meta
- D. Para escoger las coordenadas de un blanco
**Respuesta:** A. Para adaptar el coste gráfico al rendimiento disponible
**Explicación:** Los presets gráficos ajustan sombras, detalle y otras cargas de renderizado.
**Capítulo:** `simdron/manual-y-calidad.html#p38`

## 082. ¿Por qué se eligió un gamepad estándar como entrada de vuelo?
Producto: SimDron VR · Página PDF: 42 · Dificultad: 4 · Tema: HID
- A. Por su disponibilidad, durabilidad y posibilidad de remapear ejes
- B. Porque elimina la necesidad de configurar sticks
- C. Porque garantiza control satelital real
- D. Porque tiene GPS integrado
**Respuesta:** A. Por su disponibilidad, durabilidad y posibilidad de remapear ejes
**Explicación:** El manual prioriza un HID común, reemplazable y configurable.
**Capítulo:** `simdron/gamepad-hid.html#p42`

## 083. ¿Cómo se verifica si un botón o stick envía señal al juego?
Producto: SimDron VR · Página PDF: 48 · Dificultad: 4 · Tema: Diagnóstico HID
- A. Observando los valores numéricos de sus axis al accionarlo
- B. Tomando una foto con el dron
- C. Midiendo la altura MSL
- D. Activando tormentas eléctricas
**Respuesta:** A. Observando los valores numéricos de sus axis al accionarlo
**Explicación:** El panel muestra en tiempo real los valores individuales de los ejes.
**Capítulo:** `simdron/configurar-hid.html#p48`

## 084. ¿Por qué el punto de despliegue puede estar en un espacio restringido?
Producto: SimDron VR · Página PDF: 61 · Dificultad: 4 · Tema: Preparación del vuelo
- A. Para obligar a buscar mejor línea de visión y posición de lanzamiento
- B. Para simular que no existen obstáculos
- C. Para impedir cambiar el dron
- D. Para representar una pista aeroportuaria siempre
**Respuesta:** A. Para obligar a buscar mejor línea de visión y posición de lanzamiento
**Explicación:** La escena común introduce restricciones espaciales y necesidad de evaluar LOS.
**Capítulo:** `simdron/primer-inicio.html#p61`

## 085. ¿Qué sucede al finalizar la colocación de piezas según la interfaz de montaje?
Producto: SimDron VR · Página PDF: 65 · Dificultad: 4 · Tema: Montaje inmersivo
- A. Se completa la secuencia conectando USB y luego RTx
- B. Se publica un archivo CSV automáticamente
- C. Se inicia un ataque virtual sin armado
- D. Se cambian los permisos de Meta Quest
**Respuesta:** A. Se completa la secuencia conectando USB y luego RTx
**Explicación:** La pantalla de montaje describe una secuencia de terminación con USB y RTx.
**Capítulo:** `simdron/adaptacion-montaje.html#p65`

## 086. ¿Cómo se selecciona el siguiente elemento del panel de UI con teclado?
Producto: SimDron VR · Página PDF: 97 · Dificultad: 4 · Tema: Navegación con teclado
- A. Tab
- B. Ctrl + N
- C. Alt + F4
- D. Shift + F12
**Respuesta:** A. Tab
**Explicación:** Tab mueve el foco hacia el siguiente control interactivo.
**Capítulo:** `simdron/teclado-durante.html#p97`

## 087. Si el avatar queda accidentalmente parcialmente bajo el suelo tras teleportarse, ¿qué control recomienda el manual?
Producto: SimDron VR · Página PDF: 98 · Dificultad: 4 · Tema: Movimiento en VR
- A. Botón A para saltar
- B. Desactivar el antivirus
- C. Subir el PID P
- D. Cambiar el mapa MGRS
**Respuesta:** A. Botón A para saltar
**Explicación:** La sección de locomoción recomienda saltar con A para corregir esa posición.
**Capítulo:** `simdron/teclado-durante.html#p98`

## 088. ¿Por qué el manual recomienda prudencia al usar luces del dron?
Producto: SimDron VR · Página PDF: 127 · Dificultad: 4 · Tema: Hardware
- A. Pueden incrementar el coste de recursos de renderizado
- B. Desactivan los controladores Meta
- C. Cambian el modo de licenciamiento
- D. Eliminan el telemetro
**Respuesta:** A. Pueden incrementar el coste de recursos de renderizado
**Explicación:** Las luces suman carga gráfica aunque mejoran el realismo.
**Capítulo:** `simdron/hardware.html#p127`

## 089. ¿Por qué la lluvia ambiental se limita espacialmente en Quest?
Producto: SimDron VR · Página PDF: 129 · Dificultad: 4 · Tema: Clima
- A. Para reducir carga de procesamiento y conservar rendimiento
- B. Porque la lluvia solo existe en una textura estática
- C. Porque el sistema no tiene efectos de gotas
- D. Para desactivar las nubes
**Respuesta:** A. Para reducir carga de procesamiento y conservar rendimiento
**Explicación:** El apartado Climatic explica que la lluvia no se procesa sobre todo el mapa por su coste.
**Capítulo:** `simdron/climatic.html#p129`

## 090. Si Rain está activado pero su intensidad se fija en cero, ¿qué se verá?
Producto: SimDron VR · Página PDF: 130 · Dificultad: 4 · Tema: Clima
- A. Sin precipitación efectiva
- B. Lluvia máxima
- C. Tormenta eléctrica automática
- D. Nieve constante
**Respuesta:** A. Sin precipitación efectiva
**Explicación:** Rain con intensidad cero equivale a lluvia nula.
**Capítulo:** `simdron/climatic.html#p130`

## 091. ¿Por qué el panel limita la cantidad de fotografías?
Producto: SimDron VR · Página PDF: 156 · Dificultad: 4 · Tema: Photo Manager
- A. Para simular una memoria de almacenamiento finita y fomentar selección
- B. Porque Quest no admite imágenes
- C. Para forzar siempre modo ACRO
- D. Porque el instructor controla cada captura
**Respuesta:** A. Para simular una memoria de almacenamiento finita y fomentar selección
**Explicación:** La limitación simula memoria SD y enseña criterio al tomar fotos.
**Capítulo:** `simdron/photo-manager.html#p156`

## 092. ¿Por qué se recomienda progresión por etapas?
Producto: SimDron VR · Página PDF: 167 · Dificultad: 4 · Tema: Formación
- A. Para dominar VR y control antes de situaciones complejas
- B. Porque se debe comenzar siempre con máximo viento
- C. Para evitar usar la navegación por coordenadas
- D. Para impedir cualquier evaluación
**Respuesta:** A. Para dominar VR y control antes de situaciones complejas
**Explicación:** La planificación propone una curva gradual que reduce errores de iniciación.
**Capítulo:** `simdron/etapas-formacion.html#p167`

## 093. ¿Cuál de estos factores puede aumentar la cinetosis en el simulador?
Producto: SimDron VR · Página PDF: 99 · Dificultad: 5 · Tema: Confort VR
- A. Caídas de FPS durante movimiento inmersivo
- B. Cambiar entre 2D y 3D con la cabeza quieta
- C. Mantener vista fija de un panel sin locomoción
- D. Apoyar el gamepad durante una pausa
**Respuesta:** A. Caídas de FPS durante movimiento inmersivo
**Explicación:** El manual enumera movimientos visuales y baja tasa de cuadros entre los desencadenantes.
**Capítulo:** `simdron/cinetosis.html#p99`

## 094. ¿Qué limitación operativa destaca el panel FX del visor?
Producto: SimDron VR · Página PDF: 150 · Dificultad: 5 · Tema: FX
- A. Solo un efecto activo a la vez
- B. Hasta cinco efectos activos por ECM
- C. Dos FX simultáneos si son one-shot
- D. Cantidad ilimitada mientras el FPS sea estable
**Respuesta:** A. Solo un efecto activo a la vez
**Explicación:** El documento indica un efecto activo por vez en este panel.
**Capítulo:** `simdron/fx.html#p150`

## 095. Según las estimaciones de clase del manual, ¿cuánto dura Quest 3S con casting activo?
Producto: SimDron VR · Página PDF: 174 · Dificultad: 5 · Tema: Autonomía
- A. Alrededor de 0,9 horas
- B. Alrededor de 1,9 horas
- C. Alrededor de 2,5 horas
- D. Alrededor de 3,5 horas
**Respuesta:** A. Alrededor de 0,9 horas
**Explicación:** El apartado rendimiento estima 0,9 horas con casting y 1,9 sin él.
**Capítulo:** `simdron/aula-autonomia.html#p174`

## 096. ¿Qué contenidos corresponden al módulo 9 del plan básico?
Producto: SimDron VR · Página PDF: 178 · Dificultad: 5 · Tema: Planificación
- A. Coordenadas MGRS
- B. Control del dron SRR
- C. Lectura de Flight Log
- D. Preflight Check-In
**Respuesta:** A. Coordenadas MGRS
**Explicación:** El módulo 9 aborda grilla y precisión MGRS.
**Capítulo:** `simdron/plan-30-horas.html#p178`

## 097. ¿Cómo recomienda apoyar el visor mientras se carga?
Producto: SimDron VR · Página PDF: 12 · Dificultad: 3 · Tema: Cuidados del visor
- A. En posición normal sobre una superficie plana
- B. Con las lentes contra la mesa
- C. Colgado del cable USB-C
- D. Inclinado con la batería hacia abajo
**Respuesta:** A. En posición normal sobre una superficie plana
**Explicación:** El capítulo de cuidados indica apoyarlo normalmente sobre una superficie plana.
**Capítulo:** `simdron/quest-3s.html#p12`

## 098. ¿Cómo se recomienda transportar un kit Quest entre jornadas?
Producto: SimDron VR · Página PDF: 13 · Dificultad: 3 · Tema: Transporte
- A. Apagado y desconectado, en caja original o robustizada
- B. Encendido para conservar la sincronización
- C. Con los controles sueltos en una mochila sin protección
- D. Con las cámaras destapadas y el cable tirante
**Respuesta:** A. Apagado y desconectado, en caja original o robustizada
**Explicación:** El capítulo de transporte indica apagar y desconectar los equipos y usar protección adecuada.
**Capítulo:** `simdron/quest-3s.html#p13`

## 099. Una clase prolongada incluye casting. ¿Qué accesorio recomienda el manual?
Producto: SimDron VR · Página PDF: 15 · Dificultad: 4 · Tema: Autonomía
- A. Strap con al menos una batería extendida
- B. Una antena RF externa
- C. Un segundo gamepad para cada alumno
- D. Un cable HDMI conectado al visor
**Respuesta:** A. Strap con al menos una batería extendida
**Explicación:** El manual aconseja una batería adicional cuando las sesiones son largas o incluyen casting.
**Capítulo:** `simdron/bateria.html#p15`

## 100. Para un alumno nuevo en VR, ¿qué postura de inicio prioriza el manual?
Producto: SimDron VR · Página PDF: 17 · Dificultad: 4 · Tema: Ergonomía
- A. Sentado, con el frente despejado
- B. Parado sobre una plataforma elevada
- C. Caminando mientras mira el suelo
- D. De espaldas al área de entrenamiento
**Respuesta:** A. Sentado, con el frente despejado
**Explicación:** El capítulo de ergonomía prioriza una posición cómoda y un espacio frontal libre.
**Capítulo:** `simdron/ergonomia.html#p17`

## 101. ¿Qué sistema permite utilizar las manos como entrada sin sujetar controladores?
Producto: SimDron VR · Página PDF: 20 · Dificultad: 4 · Tema: Interacción VR
- A. Hand Tracking
- B. GPS MGRS
- C. RF Telemetry
- D. Control PID de altitud
**Respuesta:** A. Hand Tracking
**Explicación:** Hand Tracking convierte gestos y posiciones detectadas por cámaras en entrada de usuario.
**Capítulo:** `simdron/controles-meta.html#p20`

## 102. Al conectar Quest por USB-C a una PC, ¿qué debe atender el alumno dentro del visor?
Producto: SimDron VR · Página PDF: 25 · Dificultad: 4 · Tema: Transferencia de archivos
- A. La notificación para autorizar el acceso a archivos
- B. La selección del modo ACRO
- C. La calibración del viento
- D. La activación de una misión aleatoria
**Respuesta:** A. La notificación para autorizar el acceso a archivos
**Explicación:** El capítulo de transferencia describe la notificación del sistema al conectar el visor.
**Capítulo:** `simdron/sistema-operativo.html#p25`

## 103. ¿Qué dos actualizaciones distingue el manual para mantener operativo el kit?
Producto: SimDron VR · Página PDF: 26 · Dificultad: 4 · Tema: Actualizaciones
- A. Meta Horizon OS y la aplicación SimDron
- B. Unity Editor y SteamVR de la PC
- C. El firmware del router y los mapas de Google únicamente
- D. Los controladores gráficos de Windows y Unreal Engine
**Respuesta:** A. Meta Horizon OS y la aplicación SimDron
**Explicación:** La documentación diferencia la actualización del sistema y la de SimDron.
**Capítulo:** `simdron/sistema-operativo.html#p26`

## 104. ¿Para qué sirven los límites espaciales del visor?
Producto: SimDron VR · Página PDF: 28 · Dificultad: 4 · Tema: Seguridad VR
- A. Para definir un área segura y reducir golpes o tropiezos
- B. Para restringir el máximo de AGL
- C. Para limitar los drones de una misión
- D. Para bloquear señales de radio externas
**Respuesta:** A. Para definir un área segura y reducir golpes o tropiezos
**Explicación:** El sistema de espacios detecta el entorno y permite definir límites de seguridad.
**Capítulo:** `simdron/sistema-operativo.html#p28`

## 105. Para transmitir del Quest a una tablet mediante Meta Horizon App, ¿qué condición de conectividad recomienda el manual?
Producto: SimDron VR · Página PDF: 32 · Dificultad: 4 · Tema: Casting
- A. Que Quest y tablet estén conectados por Wi-Fi compatible
- B. Conectar siempre el visor por HDMI a la tablet
- C. Desactivar toda red en ambos dispositivos
- D. Instalar Mission Control obligatoriamente
**Respuesta:** A. Que Quest y tablet estén conectados por Wi-Fi compatible
**Explicación:** La guía describe transmisión mediante Wi-Fi y Meta Horizon App.
**Capítulo:** `simdron/cuenta-chat-casting.html#p32`

## 106. ¿Qué opciones agrupa el menú renovado de capturas del Quest?
Producto: SimDron VR · Página PDF: 35 · Dificultad: 4 · Tema: Captura y video
- A. Capturas, grabación y transmisión
- B. Únicamente ajuste de PID
- C. Solo calibración del joystick
- D. Solo compra de aplicaciones
**Respuesta:** A. Capturas, grabación y transmisión
**Explicación:** El manual enumera fotografía, grabación y casting/streaming en el sistema.
**Capítulo:** `simdron/nueva-interfaz.html#p35`

## 107. En la biblioteca renovada, ¿cómo se accede a opciones adicionales de una aplicación?
Producto: SimDron VR · Página PDF: 36 · Dificultad: 3 · Tema: Biblioteca de aplicaciones
- A. Manteniendo presionado su icono
- B. Moviendo el stick de throttle al máximo
- C. Reiniciando el router
- D. Pulsando Reset de físicas
**Respuesta:** A. Manteniendo presionado su icono
**Explicación:** El manual explica el menú contextual mediante pulsación prolongada del icono.
**Capítulo:** `simdron/nueva-interfaz.html#p36`

## 108. ¿Cómo se accede al manual integrado desde SimDron?
Producto: SimDron VR · Página PDF: 37 · Dificultad: 3 · Tema: Manual en VR
- A. Desde el icono correspondiente de la pantalla principal
- B. Solo desde un documento físico impreso
- C. Desde el panel de ECM del dron
- D. Desde la carpeta Windows de Mission Control
**Respuesta:** A. Desde el icono correspondiente de la pantalla principal
**Explicación:** La guía muestra el acceso a una escena de manual desde la pantalla principal.
**Capítulo:** `simdron/manual-y-calidad.html#p37`

## 109. En el primer emparejamiento del teclado, ¿qué intervención puede pedir Horizon OS?
Producto: SimDron VR · Página PDF: 39 · Dificultad: 4 · Tema: Teclado Bluetooth
- A. Introducir un código desde el teclado
- B. Reprogramar el ESP32
- C. Desbloquear el PID de altitud
- D. Cambiar el FOV a 120 grados
**Respuesta:** A. Introducir un código desde el teclado
**Explicación:** El manual advierte que en la sincronización inicial puede solicitar un código.
**Capítulo:** `simdron/teclado-vr.html#p39`

## 110. ¿Cómo se fijan los prolongadores impresos en 3D para los sticks?
Producto: SimDron VR · Página PDF: 43 · Dificultad: 3 · Tema: Accesorios HID
- A. A presión, sin modificar el control
- B. Con soldadura sobre el circuito
- C. Por pegado permanente de los potenciómetros
- D. Con un adaptador HDMI
**Respuesta:** A. A presión, sin modificar el control
**Explicación:** La guía describe piezas que se colocan a presión y no requieren pegamento.
**Capítulo:** `simdron/gamepad-hid.html#p43`

## 111. ¿Qué modalidad de vuelo utiliza el dron de prueba del panel HID?
Producto: SimDron VR · Página PDF: 44 · Dificultad: 4 · Tema: HID Test
- A. ACRO
- B. Solo RTH
- C. Solo vuelo autónomo SAR
- D. Modo de cámara NIR
**Respuesta:** A. ACRO
**Explicación:** El test HID permite apreciar el control directo de los ejes en ACRO.
**Capítulo:** `simdron/gamepad-hid.html#p44`

## 112. Tras calibrar un gamepad, ¿hay que repetir todo al iniciar cada vez?
Producto: SimDron VR · Página PDF: 46 · Dificultad: 4 · Tema: Configuración HID
- A. No, los ajustes se guardan automáticamente
- B. Sí, siempre desde cero
- C. Solo si está conectado por USB-C
- D. Sí, después de cada respawn del dron
**Respuesta:** A. No, los ajustes se guardan automáticamente
**Explicación:** La escena de configuración cuenta con guardado automático.
**Capítulo:** `simdron/configurar-hid.html#p46`

## 113. ¿Qué finalidad pedagógica tiene la escena de montaje?
Producto: SimDron VR · Página PDF: 64 · Dificultad: 4 · Tema: Montaje inmersivo
- A. Familiarizar con interacciones VR y componentes antes de volar
- B. Calibrar únicamente la brújula real
- C. Sustituir la evaluación de instructor
- D. Generar terrenos nuevos automáticamente
**Respuesta:** A. Familiarizar con interacciones VR y componentes antes de volar
**Explicación:** El montaje es una etapa didáctica previa al pilotaje.
**Capítulo:** `simdron/adaptacion-montaje.html#p64`

## 114. ¿Qué región argentina inspira el escenario Forest según el manual?
Producto: SimDron VR · Página PDF: 69 · Dificultad: 4 · Tema: Escenarios nacionales
- A. Bosques tropicales del noreste
- B. Altiplano árido de la Puna
- C. Mar abierto de Patagonia
- D. Glaciares antárticos
**Respuesta:** A. Bosques tropicales del noreste
**Explicación:** La tabla de similitudes geográficas asocia Forest con bosques tropicales del noreste.
**Capítulo:** `simdron/catalogo-escenarios.html#p69`

## 115. Para calibrar escalas con referencias métricas visibles y piso plano, ¿qué escenario conviene?
Producto: SimDron VR · Página PDF: 72 · Dificultad: 4 · Tema: Entrenamiento en escenarios
- A. Deck
- B. Forest
- C. Coast
- D. Trench
**Respuesta:** A. Deck
**Explicación:** Deck está descrito como laboratorio de calibración con reglajes métricos.
**Capítulo:** `simdron/escenarios-basicos.html#p72`

## 116. ¿Qué escenario ofrece volúmenes geométricos urbanos simplificados sin distracción visual?
Producto: SimDron VR · Página PDF: 73 · Dificultad: 4 · Tema: Entrenamiento en escenarios
- A. Polygon
- B. Mountain
- C. AirBase
- D. FOB
**Respuesta:** A. Polygon
**Explicación:** Polygon se diseñó como entorno urbano esquemático para navegación espacial.
**Capítulo:** `simdron/escenarios-basicos.html#p73`

## 117. Para practicar transición interior-exterior en un volumen cerrado, ¿qué mapa corresponde?
Producto: SimDron VR · Página PDF: 74 · Dificultad: 4 · Tema: Entrenamiento en escenarios
- A. Hangar
- B. Coast
- C. Mountain
- D. Field
**Respuesta:** A. Hangar
**Explicación:** Hangar permite entrenar maniobras interiores y transición hacia el exterior.
**Capítulo:** `simdron/escenarios-basicos.html#p74`

## 118. ¿Qué escenario combina campo abierto con franjas de árboles y arbustos para orientar el vuelo?
Producto: SimDron VR · Página PDF: 76 · Dificultad: 4 · Tema: Entrenamiento en escenarios
- A. Field
- B. Polygon
- C. Deck
- D. Industrial
**Respuesta:** A. Field
**Explicación:** Field añade referencias naturales sin saturar el espacio de vuelo.
**Capítulo:** `simdron/escenarios-basicos.html#p76`

## 119. ¿Qué escenario es idóneo para maniobras entre tubos, estructuras metálicas y pasarelas?
Producto: SimDron VR · Página PDF: 77 · Dificultad: 4 · Tema: Entrenamiento en escenarios
- A. Industrial
- B. Deck
- C. Desert
- D. Field
**Respuesta:** A. Industrial
**Explicación:** Industrial concentra obstáculos verticales y estructuras técnicas.
**Capítulo:** `simdron/escenarios-intermedios.html#p77`

## 120. Para practicar paso por claros entre ramas con visibilidad restringida, ¿qué escenario elegirías?
Producto: SimDron VR · Página PDF: 78 · Dificultad: 4 · Tema: Entrenamiento en escenarios
- A. Forest
- B. Deck
- C. AirBase
- D. Desert
**Respuesta:** A. Forest
**Explicación:** Forest presenta vegetación densa y claros irregulares.
**Capítulo:** `simdron/escenarios-intermedios.html#p78`

## 121. Para practicar corredores urbanos, esquinas y terrazas, ¿qué escenario encaja mejor?
Producto: SimDron VR · Página PDF: 79 · Dificultad: 4 · Tema: Entrenamiento en escenarios
- A. Urban
- B. Desert
- C. Field
- D. Deck
**Respuesta:** A. Urban
**Explicación:** Urban se estructura en calles y edificaciones con referencias de arquitectura.
**Capítulo:** `simdron/escenarios-intermedios.html#p79`

## 122. Si querés volver al menú principal desde un escenario, ¿qué tecla indica el manual?
Producto: SimDron VR · Página PDF: 96 · Dificultad: 3 · Tema: Atajos de teclado
- A. L
- B. N
- C. F
- D. P
**Respuesta:** A. L
**Explicación:** El listado de atajos asigna L al regreso a la escena principal.
**Capítulo:** `simdron/teclado-durante.html#p96`

## 123. ¿Qué característica tiene la presentación OSD en el modo inmersivo FPV?
Producto: SimDron VR · Página PDF: 108 · Dificultad: 4 · Tema: FPV
- A. Información reducida y pantalla de proporción 1:1
- B. Siempre cuatro pantallas simultáneas
- C. Una pantalla externa obligatoria
- D. Únicamente información de la batería de la PC
**Respuesta:** A. Información reducida y pantalla de proporción 1:1
**Explicación:** El manual describe vista FPV anclada a cabeza con OSD reducido.
**Capítulo:** `simdron/fpv-sensores.html#p108`

## 124. ¿Dónde está ubicada la tableta de ajustes de los sistemas de vuelo?
Producto: SimDron VR · Página PDF: 113 · Dificultad: 4 · Tema: Interfaz de configuración
- A. Debajo del controlador virtual y unida a él
- B. Detrás del router físico
- C. En la pantalla de Windows obligatoriamente
- D. En la biblioteca de Meta Horizon
**Respuesta:** A. Debajo del controlador virtual y unida a él
**Explicación:** La configuración se presenta en una tableta anclada bajo el controlador.
**Capítulo:** `simdron/introduccion-config.html#p113`

## 125. ¿Qué módulo agrupa estabilización, telemetría visual y tipos de cámara?
Producto: SimDron VR · Página PDF: 125 · Dificultad: 4 · Tema: Sistema de cámara
- A. System
- B. Payload
- C. Gates
- D. Contactos
**Respuesta:** A. System
**Explicación:** System reúne controles de cámara y de presentación del OSD.
**Capítulo:** `simdron/system.html#p125`

## 126. ¿Qué parámetro cambia la hora simulada y por tanto iluminación y HDRI del cielo?
Producto: SimDron VR · Página PDF: 131 · Dificultad: 4 · Tema: Clima
- A. Hour
- B. Drag
- C. P Gain
- D. Channel
**Respuesta:** A. Hour
**Explicación:** El selector Hour modifica la luminosidad ambiental y exposición de cielo.
**Capítulo:** `simdron/climatic.html#p131`

## 127. ¿Cuántas cargas pueden estar activas simultáneamente en el sistema Payload descrito?
Producto: SimDron VR · Página PDF: 136 · Dificultad: 4 · Tema: Payload
- A. Una
- B. Cuatro
- C. Diez
- D. Ilimitadas
**Respuesta:** A. Una
**Explicación:** El panel exige limpiar una carga antes de activar otra.
**Capítulo:** `simdron/payload.html#p136`

## 128. ¿Qué objeto permite guardar referencias de coordenadas como ayuda de campo?
Producto: SimDron VR · Página PDF: 140 · Dificultad: 4 · Tema: Items
- A. Radio GPS simulada
- B. Control de calidad QA
- C. Skybox
- D. Filtro TV analógico
**Respuesta:** A. Radio GPS simulada
**Explicación:** El apartado Items menciona la radio para marcar coordenadas.
**Capítulo:** `simdron/general-items.html#p140`

## 129. ¿Qué intenta reducir el presentador aleatorio de misiones?
Producto: SimDron VR · Página PDF: 143 · Dificultad: 4 · Tema: Misiones
- A. La intervención necesaria del instructor en prácticas autogestionadas
- B. El alcance máximo de RF
- C. El tamaño del PDF
- D. La calidad del cielo HDRI
**Respuesta:** A. La intervención necesaria del instructor en prácticas autogestionadas
**Explicación:** El presentador ofrece briefing y objetivos sin planificar cada ejercicio a mano.
**Capítulo:** `simdron/mission-presenter.html#p143`

## 130. Antes de aceptar una misión, ¿qué conjunto puede revisar el alumno?
Producto: SimDron VR · Página PDF: 144 · Dificultad: 4 · Tema: Misiones
- A. Escenario, clima, hora, viento, tiempo y parámetros de vuelo
- B. Solo el número de serie del visor
- C. Únicamente temperatura de la GPU
- D. Solo nombre de la red Wi-Fi
**Respuesta:** A. Escenario, clima, hora, viento, tiempo y parámetros de vuelo
**Explicación:** La pantalla de briefing reúne condiciones y parámetros del ejercicio.
**Capítulo:** `simdron/mission-presenter.html#p144`

## 131. ¿Para qué sirve el historial de la radio GPS interna?
Producto: SimDron VR · Página PDF: 147 · Dificultad: 4 · Tema: GPS simulado
- A. Guardar coordenadas relevantes para una posterior consulta
- B. Cambiar el firmware del Quest
- C. Editar un PDF del manual
- D. Controlar la temperatura real del equipo
**Respuesta:** A. Guardar coordenadas relevantes para una posterior consulta
**Explicación:** La radio permite marcar y recuperar referencias de posición.
**Capítulo:** `simdron/9-line-gps.html#p147`

## 132. ¿Qué caracteriza a algunos sistemas enemigos del panel Enemy?
Producto: SimDron VR · Página PDF: 148 · Dificultad: 4 · Tema: Enemigos simulados
- A. Tienen máquina de estados e IA para desplazarse en el mapa
- B. Son únicamente iconos estáticos en la UI
- C. Necesitan siempre conexión real a Internet
- D. No interactúan con el terreno
**Respuesta:** A. Tienen máquina de estados e IA para desplazarse en el mapa
**Explicación:** El manual describe entidades autónomas y distribución por el escenario.
**Capítulo:** `simdron/enemies-ecm.html#p148`

## 133. ¿Cuánto mide cada puerta del entrenamiento de Gates según el manual?
Producto: SimDron VR · Página PDF: 154 · Dificultad: 4 · Tema: Gates
- A. Dos por dos metros
- B. Un metro por diez
- C. Cinco por veinte
- D. Diez por diez
**Respuesta:** A. Dos por dos metros
**Explicación:** Las puertas verdes se describen con medida de 2 × 2 metros.
**Capítulo:** `simdron/gates.html#p154`

## 134. ¿Qué habilidad adicional considera la formación además de pilotar?
Producto: SimDron VR · Página PDF: 164 · Dificultad: 4 · Tema: Formación
- A. Lectura de telemetría, sensores y decisiones de misión
- B. Solo velocidad de los sticks
- C. Únicamente movimiento del joystick izquierdo
- D. Solo cambiar el fondo del manual
**Respuesta:** A. Lectura de telemetría, sensores y decisiones de misión
**Explicación:** El capítulo formativo incluye interpretación, observación y criterios de misión.
**Capítulo:** `simdron/implementacion.html#p164`

## 135. ¿Cuál es el equipamiento mínimo de un puesto standalone descrito?
Producto: SimDron VR · Página PDF: 171 · Dificultad: 4 · Tema: Diseño de aula
- A. Quest, gamepad, controladores y teclado Bluetooth
- B. Diez servidores dedicados
- C. Pantalla 65 pulgadas obligatoria
- D. Router de fibra óptica de alcance militar
**Respuesta:** A. Quest, gamepad, controladores y teclado Bluetooth
**Explicación:** El aula mínima funciona autónomamente sin instructor PC ni router dedicado.
**Capítulo:** `simdron/aula-autonomia.html#p171`

## 136. ¿Qué aporta una tablet y router a la configuración mínima?
Producto: SimDron VR · Página PDF: 172 · Dificultad: 4 · Tema: Diseño de aula
- A. Casting y posibilidad de observación/asistencia
- B. Sustituir completamente la aplicación de Quest
- C. Cambiar el motor de físicas desde fuera
- D. Eliminar la necesidad de un visor
**Respuesta:** A. Casting y posibilidad de observación/asistencia
**Explicación:** El diseño de aula 2 añade pantalla externa y red para asistencia.
**Capítulo:** `simdron/aula-autonomia.html#p172`

## 137. ¿Qué se trabaja al inicio del programa antes de pilotaje avanzado?
Producto: SimDron VR · Página PDF: 177 · Dificultad: 4 · Tema: Planificación
- A. Seguridad del aula y Meta Horizon OS
- B. Solo vuelos con ECM máxima
- C. Solo interceptores rápidos
- D. Solo payload de fibra óptica
**Respuesta:** A. Seguridad del aula y Meta Horizon OS
**Explicación:** Los primeros módulos cubren introducción al visor y sistema operativo.
**Capítulo:** `simdron/plan-30-horas.html#p177`

## 138. ¿Qué se evalúa al interpretar el Flight Log de un ejercicio?
Producto: SimDron VR · Página PDF: 179 · Dificultad: 4 · Tema: Planificación
- A. Duración, velocidad, coordenadas y métricas de vuelo
- B. Solo la marca del gamepad
- C. El número de imágenes del manual
- D. La contraseña Wi-Fi
**Respuesta:** A. Duración, velocidad, coordenadas y métricas de vuelo
**Explicación:** El módulo de métricas enseña a interpretar resultados registrados.
**Capítulo:** `simdron/plan-30-horas.html#p179`

## 139. ¿Qué debe producir el módulo de misión de reconocimiento?
Producto: SimDron VR · Página PDF: 180 · Dificultad: 4 · Tema: Planificación
- A. Un reporte breve y ordenado
- B. Un firmware nuevo
- C. Una aplicación instalada en cada alumno
- D. Un material de Blender
**Respuesta:** A. Un reporte breve y ordenado
**Explicación:** La actividad de reconocimiento se vincula a documentación de observaciones.
**Capítulo:** `simdron/plan-30-horas.html#p180`

## 140. ¿Qué formato usa el Check-In de la escena de montaje?
Producto: SimDron VR · Página PDF: 183 · Dificultad: 4 · Tema: Preflight
- A. Preguntas de opción múltiple con validación y exportación
- B. Solo examen oral sin guardar nada
- C. Simulación de balística real
- D. Gestor de correo electrónico
**Respuesta:** A. Preguntas de opción múltiple con validación y exportación
**Explicación:** La herramienta de Preflight genera preguntas aleatorias que pueden validarse y exportarse.
**Capítulo:** `simdron/preflight-debrief.html#p183`

## 141. ¿Qué finalidad tiene el informe de Debriefing interno?
Producto: SimDron VR · Página PDF: 184 · Dificultad: 4 · Tema: Debriefing
- A. Documentar y evaluar el ejercicio una vez concluido
- B. Cambiar la licencia del Quest
- C. Eliminar todas las métricas sin revisión
- D. Actualizar el firmware del gamepad
**Respuesta:** A. Documentar y evaluar el ejercicio una vez concluido
**Explicación:** Debriefing cierra la estrategia educativa de simulación con un reporte posterior.
**Capítulo:** `simdron/preflight-debrief.html#p184`

## 142. ¿Qué significa que SimDron sea standalone en Quest?
Producto: SimDron VR · Página PDF: 16 · Dificultad: 3 · Tema: Arquitectura
- A. Se ejecuta en el propio visor sin depender de una PC
- B. Exige una PC con Unity abierta
- C. Solo puede iniciarse con cable USB
- D. Funciona únicamente con conexión a Steam
**Respuesta:** A. Se ejecuta en el propio visor sin depender de una PC
**Explicación:** El programa reside y se ejecuta en el Quest con Meta Horizon OS.
**Capítulo:** `simdron/bateria.html#p16`

## 143. ¿Qué ajuste del visor debe adaptarse a la separación entre los ojos?
Producto: SimDron VR · Página PDF: 18 · Dificultad: 3 · Tema: Ergonomía
- A. Distancia interpupilar
- B. Tasa de refresco de Mission Control
- C. Frecuencia del Wi-Fi
- D. Parámetro Drag del dron
**Respuesta:** A. Distancia interpupilar
**Explicación:** El ajuste de la distancia interpupilar ayuda a acomodar la visión al usuario.
**Capítulo:** `simdron/ergonomia.html#p18`

## 144. ¿Son imprescindibles los controladores Quest para todas las interacciones?
Producto: SimDron VR · Página PDF: 19 · Dificultad: 3 · Tema: Controles Quest
- A. No, algunas interacciones pueden hacerse con seguimiento de manos
- B. Sí, incluso para cualquier gesto de pinch
- C. No, porque SimDron no utiliza controles Quest
- D. Solo si Mission Control está apagado
**Respuesta:** A. No, algunas interacciones pueden hacerse con seguimiento de manos
**Explicación:** El manual distingue funciones de controladores y acciones reemplazables mediante hand tracking.
**Capítulo:** `simdron/controles-meta.html#p19`

## 145. ¿Cuál es el sistema operativo integrado en los visores del manual?
Producto: SimDron VR · Página PDF: 23 · Dificultad: 3 · Tema: Meta Horizon OS
- A. Meta Horizon OS
- B. Windows 11
- C. SteamOS
- D. Ubuntu Server
**Respuesta:** A. Meta Horizon OS
**Explicación:** Los Quest ejecutan Meta Horizon OS, con escritorio, aplicaciones y herramientas propias.
**Capítulo:** `simdron/sistema-operativo.html#p23`

## 146. ¿Dónde se consultan controles como brillo, volumen y batería del visor?
Producto: SimDron VR · Página PDF: 24 · Dificultad: 3 · Tema: Meta Horizon OS
- A. En el panel de configuración del sistema operativo
- B. En el PID de rotación del dron
- C. En la pestaña OPFOR/EW del instructor
- D. En el formato de exportación CSV
**Respuesta:** A. En el panel de configuración del sistema operativo
**Explicación:** El panel de Horizon OS agrupa controles del propio dispositivo.
**Capítulo:** `simdron/sistema-operativo.html#p24`

## 147. ¿Qué acción permite salir de la aplicación y acceder al sistema de Quest?
Producto: SimDron VR · Página PDF: 27 · Dificultad: 3 · Tema: Meta Horizon OS
- A. Pulsar el botón Meta del controlador
- B. Pulsar simultáneamente ambos gatillos de vuelo
- C. Desactivar el router del aula
- D. Cambiar el modo de vuelo a HORIZON
**Respuesta:** A. Pulsar el botón Meta del controlador
**Explicación:** El botón Meta abre la interfaz del sistema operativo desde la aplicación.
**Capítulo:** `simdron/sistema-operativo.html#p27`

## 148. Si una orden debe aplicarse solo al puesto Q03, ¿qué se configura antes?
Producto: Mission Control · Página PDF: 12 · Dificultad: 5 · Tema: Selección de aula
- A. La estación Q03 en el contexto Aula
- B. La opción TODOS del contexto Aula
- C. La cámara FPV de Q03 en C2 Wall
- D. El filtro de cartografía Q03
**Respuesta:** A. La estación Q03 en el contexto Aula
**Explicación:** El selector AULA/estación define a qué puesto se dirige una operación.
**Capítulo:** `mission-control/aula.html#p12`

## 149. Después de cargar una planificación, ¿por qué se restaura primero localmente?
Producto: Mission Control · Página PDF: 31 · Dificultad: 5 · Tema: Clases
- A. Para que el instructor la revise antes de publicar
- B. Para publicarla simultáneamente a todas las Quest
- C. Para transformar la telemetría histórica en un preset
- D. Para convertir automáticamente la clase en CSV
**Respuesta:** A. Para que el instructor la revise antes de publicar
**Explicación:** CARGAR recupera el estado en PC antes de su utilización operativa.
**Capítulo:** `mission-control/clases.html#p31`

## 150. ¿Qué ocurre con el preset local si el instructor aplica uno remoto?
Producto: Mission Control · Página PDF: 38 · Dificultad: 5 · Tema: Dron Lab
- A. Se aplica en Quest sin sobrescribir permanentemente las preferencias locales
- B. Se eliminan para siempre todas las preferencias del alumno
- C. Solo cambia el PDF del manual
- D. El Quest queda desconectado hasta reiniciar
**Respuesta:** A. Se aplica en Quest sin sobrescribir permanentemente las preferencias locales
**Explicación:** Los presets remotos no modifican de forma permanente el perfil del usuario.
**Capítulo:** `mission-control/dronlab.html#p38`

## 151. ¿Por qué existe una ventana temporal de incorporación de hardware?
Producto: Mission Control · Página PDF: 43 · Dificultad: 5 · Tema: Dispositivos
- A. Para evitar altas indefinidas de dispositivos no autorizados
- B. Para conservar la lista de dispositivos por orden alfabético
- C. Para evitar cambiar estaciones durante un ejercicio
- D. Para limitar la cantidad de cámaras C2 Wall
**Respuesta:** A. Para evitar altas indefinidas de dispositivos no autorizados
**Explicación:** La incorporación de nuevos equipos se controla por una ventana temporal.
**Capítulo:** `mission-control/dispositivos.html#p43`

## 152. ¿Cómo se mide una distancia en Táctico?
Producto: Mission Control · Página PDF: 17 · Dificultad: 4 · Tema: Mediciones
- A. Marcando dos puntos del mapa con la herramienta de medir
- B. Ingresando el nombre del alumno
- C. Contando imágenes por segundo
- D. Cambiando el zoom del Quest
**Respuesta:** A. Marcando dos puntos del mapa con la herramienta de medir
**Explicación:** El módulo calcula en metros la distancia entre dos puntos marcados.
**Capítulo:** `mission-control/tactico.html#p17`

## 153. ¿Qué ocurre al publicar contactos preparados en Mission Control?
Producto: Mission Control · Página PDF: 19 · Dificultad: 4 · Tema: Contactos
- A. Se instancian en los Quest del aula correspondiente
- B. Se crean archivos FBX en la notebook
- C. Se reemplaza el terreno de todos los escenarios
- D. Se envían automáticamente correos al instructor
**Respuesta:** A. Se instancian en los Quest del aula correspondiente
**Explicación:** La publicación crea entidades de escenario en los simuladores conectados.
**Capítulo:** `mission-control/contactos.html#p19`

## 154. ¿Qué ventaja operativa aporta que MC funcione como servicio de Windows?
Producto: Mission Control · Página PDF: 6 · Dificultad: 5 · Tema: Arquitectura
- A. Separar el servidor de los clientes de interfaz
- B. Ejecutar el backend sin depender de que una vista cliente esté abierta
- C. Transmitir todo el video por HDMI en lugar de red
- D. Sustituir el proceso de instalación Full
**Respuesta:** A. Separar el servidor de los clientes de interfaz
**Explicación:** La arquitectura de servicio permite un PC servidor con terminales adicionales.
**Capítulo:** `mission-control/instalacion.html#p6`

## 155. ¿Qué muestra el botón Actualizar estado de Táctico en los Quest?
Producto: Mission Control · Página PDF: 15 · Dificultad: 5 · Tema: Táctico
- A. Símbolos publicados en la pantalla virtual de 65 pulgadas
- B. Los log de Firewall de Windows
- C. Los ajustes de fábrica del visor
- D. Las cámaras IR del router
**Respuesta:** A. Símbolos publicados en la pantalla virtual de 65 pulgadas
**Explicación:** La actualización se refleja en la pantalla interactiva virtual del simulador.
**Capítulo:** `mission-control/tactico.html#p15`

## 156. ¿Qué aporta OPFOR/EW al ejercicio?
Producto: Mission Control · Página PDF: 34 · Dificultad: 5 · Tema: OPFOR/EW
- A. Oposición y degradación de señales para exigir adaptación del alumno
- B. Símbolos solo en el mapa de la PC, sin publicar
- C. Objetos físicos instanciados como Contactos
- D. Un nuevo mapa GLB para todas las estaciones
**Respuesta:** A. Oposición y degradación de señales para exigir adaptación del alumno
**Explicación:** El módulo representa fuerza oponente y guerra electrónica simuladas.
**Capítulo:** `mission-control/opfor-ew.html#p34`

## 157. Para relevamiento sistemático del terreno, ¿qué modo de MC se describe?
Producto: Mission Control · Página PDF: 39 · Dificultad: 5 · Tema: Auto/AI
- A. SURVEY
- B. Solo incrementar el número de enemigos visibles, sin efectos de señal
- C. Reemplazar el módulo Táctico por una cartografía diferente
- D. Cambiar exclusivamente los iconos de la interfaz del Hub
**Respuesta:** A. SURVEY
**Explicación:** SURVEY propone un recorrido sistemático de relevamiento.
**Capítulo:** `mission-control/auto-ai.html#p39`

## 158. ¿Qué puerto TCP se menciona en el diagnóstico avanzado?
Producto: Mission Control · Página PDF: 44 · Dificultad: 5 · Tema: QA Aula
- A. 8765
- B. RECON
- C. PROWL
- D. SAR
**Respuesta:** A. 8765
**Explicación:** El manual lista TCP 8765 entre los datos de conectividad.
**Capítulo:** `mission-control/qa-aula.html#p44`

## 159. ¿Qué formatos se citan para agregar mapas a MC además de los precargados?
Producto: Mission Control · Página PDF: 47 · Dificultad: 5 · Tema: Mapas
- A. PNG y GLB
- B. 42100
- C. 42101
- D. 8766
**Respuesta:** A. PNG y GLB
**Explicación:** El manual acepta importar mapas en PNG y modelos 3D GLB.
**Capítulo:** `mission-control/config-mapas.html#p47`

## 160. ¿Qué opción conviene en un aula sin acceso externo a Internet?
Producto: Mission Control · Página PDF: 13 · Dificultad: 4 · Tema: Cartografía
- A. Solo offline o ahorro de datos
- B. PNG y CSV
- C. GLB y WAV
- D. SIMMAP y MP4
**Respuesta:** A. Solo offline o ahorro de datos
**Explicación:** La opción offline prioriza recursos locales cuando no hay salida a Internet.
**Capítulo:** `mission-control/cartografia.html#p13`

## 161. ¿Qué herramienta de C2 permite una captura rápida de pantalla?
Producto: Mission Control · Página PDF: 54 · Dificultad: 4 · Tema: C2
- A. Snap
- B. Aula
- C. QA
- D. Upgrade
**Respuesta:** A. Snap
**Explicación:** Snap ofrece una captura rápida sin herramienta externa.
**Capítulo:** `mission-control/c2.html#p54`

## 162. Al activar la vista SRR de Wall, ¿qué se puede supervisar?
Producto: Mission Control · Página PDF: 56 · Dificultad: 4 · Tema: C2 Wall
- A. Los drones observadores SRR de los diez puestos
- B. Solo el equipo del administrador de Windows
- C. Únicamente el clima global
- D. Exclusivamente el fondo de OpenStreetMap
**Respuesta:** A. Los drones observadores SRR de los diez puestos
**Explicación:** Wall permite alternar a las cámaras SRR de los Quest conectados.
**Capítulo:** `mission-control/c2.html#p56`

## 163. ¿Cuál de estos gradientes térmicos puede seleccionarse en C2?
Producto: Mission Control · Página PDF: 57 · Dificultad: 4 · Tema: Video C2
- A. Iron
- B. JPEG
- C. HORIZON
- D. MGRS
**Respuesta:** A. Iron
**Explicación:** La lista de VFX incluye Iron y Rainbow, además de White/Black Hot.
**Capítulo:** `mission-control/vfx-c2.html#p57`

## 164. ¿Qué ventaja tiene el modo Captura de Tablet frente a Live?
Producto: Mission Control · Página PDF: 58 · Dificultad: 4 · Tema: Tablet
- A. Congelar una imagen estable para revisar
- B. Hacer más rápida la física del Quest
- C. Cambiar el joystick Mode 2
- D. Desactivar todos los sensores FLIR
**Respuesta:** A. Congelar una imagen estable para revisar
**Explicación:** La vista Captura evita movimiento continuo y sirve para observar detalles.
**Capítulo:** `mission-control/tablet.html#p58`

## 165. ¿Por qué se recomienda conectar el Hub al router mediante Ethernet?
Producto: Mission Control · Página PDF: 5 · Dificultad: 4 · Tema: Topología
- A. Para reducir latencia entre estación de instructor y red
- B. Para impedir que las Quest utilicen Wi-Fi
- C. Para eliminar el streaming de cámaras
- D. Para sustituir el panel de telemetría
**Respuesta:** A. Para reducir latencia entre estación de instructor y red
**Explicación:** El manual recomienda conexión por cable entre notebook y router para bajar latencia.
**Capítulo:** `mission-control/topologia.html#p5`

## 166. ¿Qué ocurre con las capas gráficas de una misión generada automáticamente?
Producto: Mission Control · Página PDF: 51 · Dificultad: 4 · Tema: Misiones
- A. Se generan y después pueden seguir editándose
- B. Quedan bloqueadas para siempre
- C. Se guardan exclusivamente como MP3
- D. Solo funcionan sin Hub
**Respuesta:** A. Se generan y después pueden seguir editándose
**Explicación:** El generador crea capas editables junto con la misión.
**Capítulo:** `mission-control/misiones.html#p51`

## 167. Al modificar el alcance ECM desde MC, ¿qué particularidad sigue existiendo en cada Quest?
Producto: Mission Control · Página PDF: 35 · Dificultad: 5 · Tema: OPFOR/EW
- A. Cada sistema ECM conserva su propia forma de lóbulo de acción
- B. Todos los lóbulos se vuelven esféricos e idénticos
- C. Solo queda activo el lóbulo con mayor alcance
- D. Los cinco ECM pasan a ser exclusivamente marcadores gráficos
**Respuesta:** A. Cada sistema ECM conserva su propia forma de lóbulo de acción
**Explicación:** El manual recuerda propiedades individuales de los lóbulos en cada instancia.
**Capítulo:** `mission-control/opfor-ew.html#p35`

## 168. ¿Qué diferencia hay entre un looping persistente y un One Shot?
Producto: Mission Control · Página PDF: 36 · Dificultad: 5 · Tema: FX
- A. Uno permanece/repite y el otro se dispara como evento puntual
- B. Ambos requieren disparo manual para cada cuadro
- C. One Shot nunca puede limpiarse después de ejecutarse
- D. Looping solo cambia la posición del efecto sin repetirlo
**Respuesta:** A. Uno permanece/repite y el otro se dispara como evento puntual
**Explicación:** El módulo distingue efectos continuos de eventos disparados.
**Capítulo:** `mission-control/fx.html#p36`

## 169. En la vista 3D rotada, ¿qué control conviene usar para mantener coherencia con elementos gráficos?
Producto: Mission Control · Página PDF: 49 · Dificultad: 5 · Tema: Mapas
- A. Slider de giro
- B. Rotación libre con la mano sin compensación
- C. Control de elevación del dron
- D. Cambio automático de mapa 2D
**Respuesta:** A. Slider de giro
**Explicación:** El capítulo advierte que rotar libremente puede desincronizar capas y propone giro mediante slider.
**Capítulo:** `mission-control/config-mapas.html#p49`

## 170. ¿Qué puede producir el muestreo de un vuelo de un dispositivo dentro de Expo?
Producto: Mission Control · Página PDF: 53 · Dificultad: 5 · Tema: Expo
- A. Rutas basadas en el patrón de vuelo observado
- B. Un preset PID calculado por la cámara
- C. Un mapa GIS offline generado por triangulación
- D. La grabación de todas las cámaras al FPS del Quest
**Respuesta:** A. Rutas basadas en el patrón de vuelo observado
**Explicación:** El modo Expo admite samplear vuelos para producir trazas de demostración.
**Capítulo:** `mission-control/expo.html#p53`

## 171. ¿Qué dispositivo de red se muestra en la topología de aula recomendada?
Producto: Mission Control · Página PDF: 4 · Dificultad: 4 · Tema: Topología
- A. Router TP-Link AX1800
- B. Switch HDMI de cuatro puertos
- C. Modem 3G obligatorio
- D. Antena parabólica real de seguimiento
**Respuesta:** A. Router TP-Link AX1800
**Explicación:** La topología ilustrada incluye un router TP-Link AX1800.
**Capítulo:** `mission-control/topologia.html#p4`

## 172. ¿Qué función tiene LIVE en la barra superior?
Producto: Mission Control · Página PDF: 8 · Dificultad: 4 · Tema: Barra superior
- A. Controlar el modo de publicación y operación en vivo
- B. Aumentar automáticamente el FPS del Quest
- C. Editar el modelo 3D del dron
- D. Restablecer la licencia del usuario
**Respuesta:** A. Controlar el modo de publicación y operación en vivo
**Explicación:** LIVE gobierna la publicación hacia el aula y dispositivos asociados.
**Capítulo:** `mission-control/barra-superior.html#p8`

## 173. ¿Qué efecto tiene contraer la barra lateral izquierda?
Producto: Mission Control · Página PDF: 9 · Dificultad: 4 · Tema: Navegación
- A. Priorizar iconos en lugar de etiquetas de texto
- B. Desactivar el mapa por completo
- C. Eliminar la telemetría histórica
- D. Cambiar el modo C2 a Foco
**Respuesta:** A. Priorizar iconos en lugar de etiquetas de texto
**Explicación:** El panel izquierdo puede mostrarse extendido o resumido en iconos.
**Capítulo:** `mission-control/panel-izquierdo.html#p9`

## 174. ¿Qué puede ocupar la franja inferior de trabajo del mapa?
Producto: Mission Control · Página PDF: 10 · Dificultad: 4 · Tema: Área central
- A. Gráfico, timeline o información auxiliar
- B. Únicamente la contraseña del Hub
- C. El asistente de compra de hardware
- D. Solo la cámara del casco
**Respuesta:** A. Gráfico, timeline o información auxiliar
**Explicación:** La franja inferior cambia según el módulo y puede mostrar series y línea temporal.
**Capítulo:** `mission-control/mapa-central.html#p10`

## 175. ¿Cuál de estas métricas aparece en el resumen por dron?
Producto: Mission Control · Página PDF: 11 · Dificultad: 4 · Tema: Resumen docente
- A. Distancia, velocidad máxima y AGL máxima
- B. Temperatura del CPU y marca de GPU
- C. Número de dedos visibles en hand tracking
- D. Cantidad de materiales de Blender
**Respuesta:** A. Distancia, velocidad máxima y AGL máxima
**Explicación:** El resumen de MC muestra métricas de vuelo por puesto o aeronave.
**Capítulo:** `mission-control/panel-derecho.html#p11`

## 176. ¿Qué tarea es apropiada para Calcos y no exige crear un objeto táctico estructurado?
Producto: Mission Control · Página PDF: 18 · Dificultad: 4 · Tema: Calcos
- A. Dibujar un corredor de búsqueda sobre el mapa
- B. Cambiar la cuenta de Meta del alumno
- C. Instalar un parche de Windows
- D. Configurar la batería 6S de un dron
**Respuesta:** A. Dibujar un corredor de búsqueda sobre el mapa
**Explicación:** Calcos es una capa gráfica libre para briefing y planificación.
**Capítulo:** `mission-control/calcos.html#p18`

## 177. ¿Qué información adicional puede mostrarse al posicionar el cursor sobre un contacto destruido?
Producto: Mission Control · Página PDF: 20 · Dificultad: 4 · Tema: Contactos
- A. Información del impacto/estado del contacto
- B. El código fuente de Unity
- C. La contraseña de la cuenta Meta
- D. El número de serie del router
**Respuesta:** A. Información del impacto/estado del contacto
**Explicación:** La ficha de contactos puede presentar información contextual tras un impacto.
**Capítulo:** `mission-control/contactos.html#p20`

## 178. ¿Qué distingue a Escenarios frente a Contactos en MC?
Producto: Mission Control · Página PDF: 30 · Dificultad: 4 · Tema: Escenarios
- A. Gestiona infraestructura y elementos físicos del ambiente
- B. Solo presenta entidades para identificación de blancos
- C. Únicamente registra capturas de vídeo
- D. No permite colocar objetos en el mapa
**Respuesta:** A. Gestiona infraestructura y elementos físicos del ambiente
**Explicación:** Escenarios está orientado a elementos de infraestructura, separado conceptualmente de Contactos.
**Capítulo:** `mission-control/escenarios.html#p30`

## 179. ¿Qué acción envía las condiciones de clima y cielo actuales a los dispositivos?
Producto: Mission Control · Página PDF: 32 · Dificultad: 4 · Tema: Ambiente
- A. Aplicar a aula
- B. Guardar Flight Log
- C. Reset de HID
- D. C2 Foco
**Respuesta:** A. Aplicar a aula
**Explicación:** Aplicar a aula publica la configuración ambiental correspondiente.
**Capítulo:** `mission-control/ambiente.html#p32`

## 180. ¿Qué control asigna la guía al zoom/FOV del dron del instructor?
Producto: Mission Control · Página PDF: 40 · Dificultad: 4 · Tema: Dron Instructor
- A. LB/RB
- B. Start/Select
- C. D-Pad vertical
- D. Botón Meta
**Respuesta:** A. LB/RB
**Explicación:** La sección de controles docente asigna zoom a LB/RB.
**Capítulo:** `mission-control/instructor.html#p40`

## 181. ¿Qué aporta la vista en tercera persona de Aula de Pre-vuelo?
Producto: Mission Control · Página PDF: 41 · Dificultad: 4 · Tema: Pre-vuelo
- A. Referencia de trayectoria y orientación espacial del dron
- B. Desactivar todos los sensores del Quest
- C. Una licencia independiente
- D. Cambiar el terreno de todos los alumnos
**Respuesta:** A. Referencia de trayectoria y orientación espacial del dron
**Explicación:** La vista externa es un apoyo pedagógico de posición y desplazamiento.
**Capítulo:** `mission-control/instructor.html#p41`

## 182. ¿Qué dato puede enviar el docente con Mensajes además de texto?
Producto: Mission Control · Página PDF: 42 · Dificultad: 4 · Tema: Mensajes
- A. Coordenadas seleccionadas desde el mapa
- B. El instalador EXE del Hub
- C. Un proyecto entero de Unity
- D. El historial de licencias
**Respuesta:** A. Coordenadas seleccionadas desde el mapa
**Explicación:** El módulo permite transmitir referencias de mapa y coordenadas.
**Capítulo:** `mission-control/mensajes.html#p42`

## 183. ¿Qué tipo de actualización soporta el panel Upgrade para terminales ESP?
Producto: Mission Control · Página PDF: 46 · Dificultad: 4 · Tema: Upgrade
- A. OTA A/B
- B. CD-ROM
- C. Bluetooth de audio solamente
- D. Reinstalación de Windows en el visor
**Respuesta:** A. OTA A/B
**Explicación:** El módulo Upgrade está destinado a OTA A/B de dispositivos ESP.
**Capítulo:** `mission-control/input-upgrade.html#p46`

## 184. ¿Qué slider cambia la proporción de altura en una visualización tridimensional?
Producto: Mission Control · Página PDF: 50 · Dificultad: 4 · Tema: Datos históricos
- A. Altura
- B. Aula
- C. Rain
- D. Brightness
**Respuesta:** A. Altura
**Explicación:** El visor 3D dispone de control de altura de las trayectorias.
**Capítulo:** `mission-control/config-mapas.html#p50`

## 185. ¿Cuál es el papel de Mission Control respecto a SimDron VR?
Producto: Mission Control · Página PDF: 3 · Dificultad: 3 · Tema: Aula híbrida
- A. Coordinar dispositivos, telemetría y cámaras en un ejercicio de aula
- B. Reemplazar el simulador de cada Quest
- C. Fabricar drones físicos en tiempo real
- D. Editar terrenos de Unity desde un navegador
**Respuesta:** A. Coordinar dispositivos, telemetría y cámaras en un ejercicio de aula
**Explicación:** Mission Control actúa como Hub del aula, no como sustituto del simulador VR.
**Capítulo:** `mission-control/introduccion.html#p3`

## 186. ¿Cuántas zonas estables principales describe la interfaz de MC?
Producto: Mission Control · Página PDF: 7 · Dificultad: 3 · Tema: Interfaz
- A. Cuatro
- B. Dos
- C. Seis
- D. Ocho
**Respuesta:** A. Cuatro
**Explicación:** La interfaz se organiza en barra superior, panel izquierdo, mapa central y panel derecho.
**Capítulo:** `mission-control/vista-general.html#p7`

## 187. ¿Qué norma de referencia se cita para los símbolos tácticos?
Producto: Mission Control · Página PDF: 16 · Dificultad: 3 · Tema: Simbología
- A. MIL-STD-2525D
- B. USB 3.2
- C. IEEE 802.11ax
- D. MPEG-4
**Respuesta:** A. MIL-STD-2525D
**Explicación:** El manual indica que el catálogo de símbolos se basa en MIL-STD-2525D.
**Capítulo:** `mission-control/tactico.html#p16`

## 188. ¿Cuál de estos nombres está listado en los efectos FX de MC?
Producto: Mission Control · Página PDF: 37 · Dificultad: 3 · Tema: Catálogo FX
- A. Rocket Trail
- B. Meta Horizon Store
- C. Waypoint Editor.exe
- D. Controller Firmware
**Respuesta:** A. Rocket Trail
**Explicación:** La página de catálogo incluye Rocket Trail entre sus efectos.
**Capítulo:** `mission-control/fx.html#p37`

## 189. ¿Para qué está destinado el panel Input experimental?
Producto: Mission Control · Página PDF: 45 · Dificultad: 3 · Tema: Input
- A. Probar conexión de terminales ESP con gamepads remotos
- B. Crear perfiles de color de impresoras
- C. Editar vídeos institucionales
- D. Agregar mapas de Google Earth directamente al Quest
**Respuesta:** A. Probar conexión de terminales ESP con gamepads remotos
**Explicación:** El panel Input se describe como prueba de terminales ESP.
**Capítulo:** `mission-control/input-upgrade.html#p45`

## 190. El lóbulo de EW dibujado en Táctico, ¿equivale automáticamente a cambiar los ECM activos del escenario?
Producto: Mission Control · Página PDF: 17 · Dificultad: 5 · Tema: EW
- A. No; esa indicación gráfica no se sincroniza con los ECM simulados
- B. Sustituye en forma permanente el perfil local del Quest
- C. Solo cambia los controles visuales de Mission Control
- D. Exige reinstalar la APK para restaurar el perfil anterior
**Respuesta:** A. No; esa indicación gráfica no se sincroniza con los ECM simulados
**Explicación:** La anotación EW es visual; los sistemas ECM se manejan en OPFOR/EW.
**Capítulo:** `mission-control/tactico.html#p17`

## 191. ¿Qué tipo de datos no deberían estar dentro de una plantilla de clase guardada?
Producto: Mission Control · Página PDF: 31 · Dificultad: 5 · Tema: Clases
- A. Telemetría histórica y dispositivos conectados del momento
- B. Sí, al dibujar el área se sincronizan las cinco ECM
- C. Solo cuando el contacto se marca como Enemy
- D. Sí, pero únicamente en el modo C2 Wall
**Respuesta:** A. Telemetría histórica y dispositivos conectados del momento
**Explicación:** El guardado se orienta a planificación, no a estados efímeros de hardware y vuelo.
**Capítulo:** `mission-control/clases.html#p31`

## 192. ¿Para qué existe el límite al publicar grandes cantidades de contactos?
Producto: Mission Control · Página PDF: 19 · Dificultad: 5 · Tema: Contactos
- A. Para evitar sobrecargar el sistema con GameObjects
- B. El conjunto de capas de planificación editables
- C. La distribución de símbolos para briefing
- D. El ambiente preparado para una clase recurrente
**Respuesta:** A. Para evitar sobrecargar el sistema con GameObjects
**Explicación:** El manual lo presenta como control defensivo de rendimiento.
**Capítulo:** `mission-control/contactos.html#p19`

## 193. ¿Qué acción publica en los Quest la ruta de waypoints creada en MC?
Producto: Mission Control · Página PDF: 17 · Dificultad: 5 · Tema: Waypoints
- A. Actualizar ruta
- B. Para impedir más de diez clases guardadas
- C. Para limitar la longitud de los archivos CSV
- D. Para evitar un exceso de cambios de vista C2
**Respuesta:** A. Actualizar ruta
**Explicación:** El instructor publica la traza mediante la opción de actualización de ruta.
**Capítulo:** `mission-control/tactico.html#p17`

## 194. ¿Qué paquete se recomienda para una primera instalación de Mission Control?
Producto: Mission Control · Página PDF: 6 · Dificultad: 4 · Tema: Instalación
- A. Full
- B. Guardar clase
- C. Actualizar estado de símbolos
- D. Aplicar a aula desde Ambiente
**Respuesta:** A. Full
**Explicación:** El instalador Full corresponde a la instalación inicial o cambios grandes.
**Capítulo:** `mission-control/instalacion.html#p6`

## 195. ¿Dónde se aplican los cambios VFX de brillo, contraste y gradiente térmico?
Producto: Mission Control · Página PDF: 57 · Dificultad: 4 · Tema: Video C2
- A. En la presentación de C2, no en la configuración propia de cada Quest
- B. En los sensores reales del router
- C. En el modo de radio del dron
- D. En todos los Quest forzosamente
**Respuesta:** A. En la presentación de C2, no en la configuración propia de cada Quest
**Explicación:** El manual separa VFX de C2 de la visualización local del alumno.
**Capítulo:** `mission-control/vfx-c2.html#p57`

## 196. ¿Qué frecuencia menciona el modo Live de Tablet para asistencia al alumno?
Producto: Mission Control · Página PDF: 58 · Dificultad: 4 · Tema: Tablet
- A. Aproximadamente ocho FPS
- B. Exactamente 72 FPS
- C. Una imagen por minuto
- D. 240 FPS
**Respuesta:** A. Aproximadamente ocho FPS
**Explicación:** El modo Live de la tablet transmite a unos ocho cuadros por segundo.
**Capítulo:** `mission-control/tablet.html#p58`

## 197. ¿Qué modo de AI mantiene una trayectoria circular alrededor de un punto?
Producto: Mission Control · Página PDF: 39 · Dificultad: 4 · Tema: Auto/AI
- A. ORBIT
- B. SURVEY
- C. RTH
- D. OFF
**Respuesta:** A. ORBIT
**Explicación:** ORBIT mantiene la órbita sobre un objetivo o punto indicado.
**Capítulo:** `mission-control/auto-ai.html#p39`

## 198. Para insertar un símbolo en Táctico, ¿qué secuencia describe el manual?
Producto: Mission Control · Página PDF: 15 · Dificultad: 4 · Tema: Táctico
- A. Elegir símbolo y hacer clic en el mapa
- B. Desconectar el Hub y reiniciar Windows
- C. Abrir el PID y aumentar P
- D. Crear un mapa GLB nuevo
**Respuesta:** A. Elegir símbolo y hacer clic en el mapa
**Explicación:** La sección Táctico añade simbología seleccionándola y posicionándola en el mapa.
**Capítulo:** `mission-control/tactico.html#p15`

## 199. ¿Dónde se guardan las capturas de soporte realizadas desde QA Aula?
Producto: Mission Control · Página PDF: 44 · Dificultad: 4 · Tema: QA Aula
- A. Imágenes/SimDron
- B. Descargas/Steam
- C. Documentos/UnityPackages
- D. Windows/System32/Meta
**Respuesta:** A. Imágenes/SimDron
**Explicación:** La sección indica un directorio de imágenes SimDron.
**Capítulo:** `mission-control/qa-aula.html#p44`

## 200. ¿Dónde se guardan las planificaciones de clases del instructor?
Producto: Mission Control · Página PDF: 31 · Dificultad: 4 · Tema: Clases
- A. En la PC/Hub local
- B. En cada control DualSense
- C. En el firmware del router
- D. Solo en los cascos de todos los alumnos
**Respuesta:** A. En la PC/Hub local
**Explicación:** El capítulo describe persistencia local en el equipo instructor.
**Capítulo:** `mission-control/clases.html#p31`

