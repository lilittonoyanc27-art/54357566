import { Question } from './types';

// ==========================================
// ETAPA 1: PREPARACIÓN Y CONVERSACIÓN
// Questions asked one by one with instant feedback
// ==========================================
export const PREP_QUESTIONS: Question[] = [
  // Pregunta 1 inicial requerida por el usuario
  {
    id: 'prep-1',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: 'Madrid es la capital de España. ¿Qué función del lenguaje predomina?',
    questionHy: '«Մադրիդը Իսպանիայի մայրաքաղաքն է։» Լեզվի ո՞ր գործառույթն է գերակշռում։',
    phraseEs: 'Madrid es la capital de España.',
    phraseHy: 'Մադրիդը Իսպանիայի մայրաքաղաքն է։',
    options: [
      { id: 'a', textEs: 'Función referencial o representativa', textHy: 'Տեղեկատվական / ներկայացուցչական' },
      { id: 'b', textEs: 'Función expresiva o emotiva', textHy: 'Զգացմունքային / արտահայտչական' },
      { id: 'c', textEs: 'Función apelativa o conativa', textHy: 'Դիմողական / ազդեցության' },
      { id: 'd', textEs: 'Función fática', textHy: 'Կապ հաստատող կամ պահպանող' },
    ],
    correctAnswerEs: 'Función referencial o representativa',
    correctAnswerHy: 'Տեղեկատվական / ներկայացուցչական գործառույթ',
    explanationEs: 'Da una información objetiva y real sobre el mundo sin expresar sentimientos ni dar órdenes.',
    explanationHy: 'Հաղորդում է օբյեկտիվ իրական փաստ՝ առանց զգացմունքներ կամ հրամաններ արտահայտելու։',
    keywordEs: 'Información objetiva / realidad',
    keywordHy: 'Օբյեկտիվ տեղեկություն / իրականություն',
    keywordsMatch: ['referencial', 'representativa', 'referencial o representativa', 'informacion objetiva']
  },
  {
    id: 'prep-2',
    category: 'funciones',
    type: 'open',
    questionEs: '¿Qué función del lenguaje se utiliza principalmente para expresar sentimientos, emociones y opiniones del emisor?',
    questionHy: 'Ո՞ր գործառույթն է օգտագործվում խոսողի զգացմունքները, հույզերը և կարծիքը արտահայտելու համար։',
    options: [
      { id: 'a', textEs: 'Función expresiva o emotiva', textHy: 'Զգացմունքային / արտահայտչական' },
      { id: 'b', textEs: 'Función apelativa', textHy: 'Դիմողական / ազդեցության' },
      { id: 'c', textEs: 'Función metalingüística', textHy: 'Մետալեզվական' },
      { id: 'd', textEs: 'Función poética', textHy: 'Բանաստեղծական' },
    ],
    correctAnswerEs: 'Función expresiva o emotiva',
    correctAnswerHy: 'Զգացմունքային կամ արտահայտչական գործառույթ (Función expresiva o emotiva)',
    explanationEs: 'Se centra en el emisor. Sirve para comunicar estados de ánimo, sentimientos u opiniones subjetivas (ejemplo: «¡Qué alegría!» o «Me duele la cabeza»).',
    explanationHy: 'Կենտրոնացած է ուղարկողի (խոսողի) վրա։ Ծառայում է տրամադրություն, հույզեր կամ սուբյեկտիվ կարծիք փոխանցելուն (օրինակ՝ «¡Qué alegría!» կամ «Me duele la cabeza»):',
    keywordEs: 'Emisor / sentimientos',
    keywordHy: 'Ուղարկող (խոսող) / զգացմունքներ',
    keywordsMatch: ['expresiva', 'emotiva', 'expresiva o emotiva']
  },
  {
    id: 'prep-3',
    category: 'funciones',
    type: 'trap',
    questionEs: '«¡Qué frío hace aquí!» ¿Cuál es la función PRINCIPAL del lenguaje? ¡Cuidado con la trampa!',
    questionHy: '«¡Qué frío hace aquí!» (Որքա՜ն ցուրտ է այստեղ)։ Ո՞րն է լեզվի ԳԼԽԱՎՈՐ գործառույթը։ Ուշադրություն՝ թակարդային հարց է։',
    phraseEs: '«¡Qué frío hace aquí!»',
    phraseHy: '«Որքա՜ն ցուրտ է այստեղ»',
    options: [
      { id: 'a', textEs: 'Función expresiva o emotiva', textHy: 'Զգացմունքային / արտահայտչական' },
      { id: 'b', textEs: 'Función apelativa o conativa (si busca que cierren la ventana)', textHy: 'Դիմողական / ազդեցության (եթե ակնարկում է փակել պատուհանը)' },
      { id: 'c', textEs: 'Función referencial pura', textHy: 'Զուտ տեղեկատվական' },
      { id: 'd', textEs: 'Función fática', textHy: 'Կապ հաստատող' },
    ],
    correctAnswerEs: 'Función expresiva o emotiva (aunque en contexto puede tener matiz apelativo indirecto)',
    correctAnswerHy: 'Զգացմունքային / արտահայտչական (Función expresiva o emotiva)',
    explanationEs: 'El hablante expresa su sensación subjetiva de frío con entonación exclamativa. ATENCIÓN: No debemos decidir solamente por los signos de exclamación («¡!»), sino por la intención comunicativa. Si la intención principal es manifestar la sensación, es expresiva.',
    explanationHy: 'Խոսողը բացականչական հնչերանգով արտահայտում է ցրտի իր սուբյեկտիվ զգացողությունը։ ՈՒՇԱԴՐՈՒԹՅՈՒՆ․ չպետք է որոշենք միայն բացականչական նշաններով («¡!»), այլ հաղորդակցական նպատակով։ Եթե նպատակը սեփական զգացողությունը փոխանցելն է, ապա այն զգացմունքային (expresiva) է։',
    keywordEs: 'Intención comunicativa / sensación subjetiva',
    keywordHy: 'Հաղորդակցական նպատակ / սուբյեկտիվ զգացողություն',
    trapWarningEs: 'No te guíes solo por los signos de exclamación. ¡Analiza qué quiere transmitir el emisor!',
    trapWarningHy: 'Մի՛ առաջնորդվիր միայն բացականչական նշաններով։ Վերլուծի՛ր, թե ինչ է ուզում փոխանցել խոսողը։',
    keywordsMatch: ['expresiva', 'emotiva', 'expresiva o emotiva']
  },
  {
    id: 'prep-4',
    category: 'funciones',
    type: 'open',
    questionEs: '¿Qué función intenta influir en el receptor para que haga algo o responda (órdenes, ruegos, preguntas)?',
    questionHy: 'Ո՞ր գործառույթն է փորձում ազդել լսողի/ընդունողի վրա, որպեսզի նա ինչ-որ բան անի կամ պատասխանի (հրամաններ, խնդրանքներ, հարցեր)։',
    options: [
      { id: 'a', textEs: 'Función apelativa o conativa', textHy: 'Դիմողական / ազդեցության' },
      { id: 'b', textEs: 'Función poética', textHy: 'Բանաստեղծական' },
      { id: 'c', textEs: 'Función fática', textHy: 'Կապ հաստատող' },
      { id: 'd', textEs: 'Función metalingüística', textHy: 'Մետալեզվական' },
    ],
    correctAnswerEs: 'Función apelativa o conativa',
    correctAnswerHy: 'Դիմողական կամ ազդեցության գործառույթ (Función apelativa o conativa)',
    explanationEs: 'Se orienta hacia el receptor. Busca provocar una reacción en quien escucha o lee (por ejemplo: «¡Ven aquí!», «¿Qué hora tienes?», «Por favor, siéntate»).',
    explanationHy: 'Ուղղված է լսողին/ընդունողին (receptor): Նպատակն է արձագանք առաջացնել (օրինակ՝ «¡Ven aquí!», «¿Qué hora tienes?», «Por favor, siéntate»):',
    keywordEs: 'Receptor / influir / actuar',
    keywordHy: 'Լսող / ազդեցություն / գործողություն',
    keywordsMatch: ['apelativa', 'conativa', 'apelativa o conativa']
  },
  {
    id: 'prep-5',
    category: 'funciones',
    type: 'open',
    questionEs: '¿Qué función habla sobre la propia lengua, su gramática, vocabulario o reglas?',
    questionHy: 'Ո՞ր գործառույթն է խոսում հենց լեզվի, դրա քերականության, բառապաշարի կամ կանոնների մասին։',
    options: [
      { id: 'a', textEs: 'Función metalingüística', textHy: 'Մետալեզվական (Función metalingüística)' },
      { id: 'b', textEs: 'Función referencial', textHy: 'Տեղեկատվական' },
      { id: 'c', textEs: 'Función fática', textHy: 'Կապ հաստատող' },
      { id: 'd', textEs: 'Función poética', textHy: 'Բանաստեղծական' },
    ],
    correctAnswerEs: 'Función metalingüística',
    correctAnswerHy: 'Մետալեզվական գործառույթ (Función metalingüística)',
    explanationEs: 'Se centra en el CÓDIGO lingüístico. Se usa cuando empleamos la lengua para hablar de la propia lengua (ejemplos: «"Casa" es un sustantivo femenino», «"Haber" se escribe con hache»).',
    explanationHy: 'Կենտրոնացած է ԿՈԴԻ (լեզվի) վրա։ Օգտագործվում է, երբ լեզուն օգտագործում ենք հենց լեզվի մասին խոսելու համար (օրինակ՝ «"Casa"-ն իգական գոյական է», «"Haber"-ը գրվում է h տառով»)։',
    keywordEs: 'Código / gramática / la propia lengua',
    keywordHy: 'Կոդ / քերականություն / հենց լեզուն',
    keywordsMatch: ['metalinguistica', 'metalingüística']
  },
  {
    id: 'prep-6',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: '«¿Diga? ¿Me escuchas bien?» ¿Qué función predomina aquí?',
    questionHy: '«¿Diga? ¿Me escuchas bien?» (Ալո՞, ինձ լա՞վ ես լսում)։ Ո՞ր գործառույթն է գերակշռում այստեղ։',
    phraseEs: '«¿Diga? ¿Me escuchas bien?»',
    phraseHy: '«Ալո՞, ինձ լա՞վ ես լսում»',
    options: [
      { id: 'a', textEs: 'Función fática o de contacto', textHy: 'Կապ հաստատող կամ պահպանող (Función fática)' },
      { id: 'b', textEs: 'Función poética', textHy: 'Բանաստեղծական' },
      { id: 'c', textEs: 'Función expresiva', textHy: 'Զգացմունքային' },
      { id: 'd', textEs: 'Función metalingüística', textHy: 'Մետալեզվական' },
    ],
    correctAnswerEs: 'Función fática o de contacto',
    correctAnswerHy: 'Կապ հաստատող կամ պահպանող գործառույթ (Función fática o de contacto)',
    explanationEs: 'Se centra en el CANAL de comunicación. Sirve para iniciar, verificar, mantener o cerrar el contacto comunicativo (ejemplo: «¿Hola?», «Sí, sí, te escucho», «Adiós»).',
    explanationHy: 'Կենտրոնացած է հաղորդակցման ՄԻՋՈՑԻ (ալիքի/canal) վրա։ Ծառայում է կապը սկսելուն, ստուգելուն, պահպանելուն կամ ավարտելուն (օրինակ՝ «¿Hola?», «Ալո՞», «Այո, լսում եմ», «Ցտեսություն»)։',
    keywordEs: 'Canal / verificar contacto',
    keywordHy: 'Կապի միջոց / կապի ստուգում',
    keywordsMatch: ['fatica', 'fática', 'de contacto', 'fatica o de contacto']
  },
  // Modalidades oracionales
  {
    id: 'prep-7',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«Ojalá venga mañana.» ¿Qué modalidad oracional es y qué palabra clave lo indica?',
    questionHy: '«Ojalá venga mañana.» (Երանի վաղը գա)։ Սա նախադասության ո՞ր տեսակն է և ո՞ր բառն է դա հուշում։',
    phraseEs: '«Ojalá venga mañana.»',
    phraseHy: '«Երանի վաղը գա»',
    options: [
      { id: 'a', textEs: 'Desiderativa (palabra clave: «Ojalá»)', textHy: 'Ցանկություն արտահայտող (հիմնաբառ՝ «Ojalá»)' },
      { id: 'b', textEs: 'Dubitativa (palabra clave: «venga»)', textHy: 'Կասկած արտահայտող' },
      { id: 'c', textEs: 'Exhortativa (es un mandato)', textHy: 'Հրամայական' },
      { id: 'd', textEs: 'Enunciativa afirmativa', textHy: 'Պատմողական հաստատական' },
    ],
    correctAnswerEs: 'Desiderativa',
    correctAnswerHy: 'Ցանկություն արտահայտող նախադասություն (Oración desiderativa)',
    explanationEs: 'La palabra «Ojalá» expresa un deseo del emisor. El verbo suele ir en subjuntivo («venga»).',
    explanationHy: '«Ojalá» բառը արտահայտում է խոսողի ցանկությունը (երանի/տա Աստված): Բայն օգտագործվում է subjuntivo եղանակով («venga»):',
    keywordEs: 'Ojalá / deseo',
    keywordHy: 'Ojalá (երանի) / ցանկություն',
    keywordsMatch: ['desiderativa', 'ojala']
  },
  {
    id: 'prep-8',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«Tal vez llegue tarde hoy.» ¿Qué modalidad oracional es?',
    questionHy: '«Tal vez llegue tarde hoy.» (Միգուցե այսօր ուշ հասնի)։ Ո՞ր տեսակն է սա։',
    phraseEs: '«Tal vez llegue tarde hoy.»',
    phraseHy: '«Միգուցե այսօր ուշ հասնի»',
    options: [
      { id: 'a', textEs: 'Dubitativa (expresa duda o probabilidad)', textHy: 'Կասկած կամ հավանականություն արտահայտող (Dubitativa)' },
      { id: 'b', textEs: 'Desiderativa (expresa deseo)', textHy: 'Ցանկություն արտահայտող' },
      { id: 'c', textEs: 'Exclamativa', textHy: 'Բացականչական' },
      { id: 'd', textEs: 'Enunciativa', textHy: 'Պատմողական' },
    ],
    correctAnswerEs: 'Dubitativa',
    correctAnswerHy: 'Կասկած կամ հավանականություն արտահայտող (Dubitativa)',
    explanationEs: 'Locuciones como «Tal vez», «Quizá», «A lo mejor» o «Probablemente» indican duda o probabilidad.',
    explanationHy: '«Tal vez», «Quizá», «A lo mejor» կամ «Probablemente» (գուցե, հավանաբար) արտահայտությունները ցույց են տալիս կասկած կամ հավանականություն։',
    keywordEs: 'Tal vez / Quizá / duda',
    keywordHy: 'Tal vez / Quizá / կասկած',
    keywordsMatch: ['dubitativa', 'duda']
  },
  {
    id: 'prep-9',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«Cierra la ventana, por favor.» ¿Qué modalidad oracional es?',
    questionHy: '«Cierra la ventana, por favor.» (Փակի՛ր պատուհանը, խնդրում եմ)։ Ո՞ր տեսակն է սա։',
    phraseEs: '«Cierra la ventana, por favor.»',
    phraseHy: '«Փակի՛ր պատուհանը, խնդրում եմ»',
    options: [
      { id: 'a', textEs: 'Exhortativa o imperativa', textHy: 'Հրամայական կամ հորդորական (Exhortativa / imperativa)' },
      { id: 'b', textEs: 'Enunciativa afirmativa', textHy: 'Պատմողական հաստատական' },
      { id: 'c', textEs: 'Desiderativa', textHy: 'Ցանկություն արտահայտող' },
      { id: 'd', textEs: 'Dubitativa', textHy: 'Կասկած արտահայտող' },
    ],
    correctAnswerEs: 'Exhortativa o imperativa',
    correctAnswerHy: 'Հրամայական կամ հորդորական նախադասություն (Exhortativa o imperativa)',
    explanationEs: 'Expresa una orden, ruego o petición dirigida a otra persona para que realice una acción («Cierra»).',
    explanationHy: 'Արտահայտում է հրաման, խնդրանք կամ հորդոր՝ ուղղված դիմացինին («Cierra» - փակիր)։',
    keywordEs: 'Orden / ruego / imperativo',
    keywordHy: 'Հրաման / խնդրանք / հրամայական եղանակ',
    keywordsMatch: ['exhortativa', 'imperativa', 'exhortativa o imperativa']
  },
  // Elementos de la comunicación: Situación real
  {
    id: 'prep-10',
    category: 'elementos',
    type: 'situation',
    questionEs: 'Situación: Ana llama por teléfono a Carlos y le dice: «Llegaré a casa a las ocho». ¿Quién es el EMISOR y quién es el RECEPTOR?',
    questionHy: 'Իրավիճակ․ Անան հեռախոսով զանգում է Կառլոսին և ասում. «Ես տուն կհասնեմ ժամը ութին»։ Ո՞վ է ՈՒՂԱՐԿՈՂԸ (emisor) և ո՞վ է ՍՏԱՑՈՂԸ (receptor)։',
    situationEs: 'Ana llama por teléfono a Carlos y dice: «Llegaré a casa a las ocho».',
    situationHy: 'Անան հեռախոսով զանգում է Կառլոսին և ասում. «Ես տուն կհասնեմ ժամը ութին»։',
    options: [
      { id: 'a', textEs: 'Emisor: Ana | Receptor: Carlos', textHy: 'Ուղարկող՝ Անա | Ստացող՝ Կառլոս' },
      { id: 'b', textEs: 'Emisor: Carlos | Receptor: Ana', textHy: 'Ուղարկող՝ Կառլոս | Ստացող՝ Անա' },
      { id: 'c', textEs: 'Emisor: El teléfono | Receptor: Ambos', textHy: 'Ուղարկող՝ Հեռախոս | Ստացող՝ Երկուսն էլ' },
      { id: 'd', textEs: 'Emisor: Ana | Receptor: La casa', textHy: 'Ուղարկող՝ Անա | Ստացող՝ Տունը' },
    ],
    correctAnswerEs: 'Emisor: Ana | Receptor: Carlos',
    correctAnswerHy: 'Ուղարկող (Emisor)՝ Անա | Ստացող (Receptor)՝ Կառլոս',
    explanationEs: 'Ana produce y transmite el mensaje (emisor), y Carlos lo recibe y comprende (receptor).',
    explanationHy: 'Անան ստեղծում և արտասանում է հաղորդագրությունը (emisor), իսկ Կառլոսը ստանում և ընկալում է այն (receptor)։',
    keywordEs: 'Emisor (Ana) / Receptor (Carlos)',
    keywordHy: 'Emisor (Անա) / Receptor (Կառլոս)',
    keywordsMatch: ['ana', 'carlos', 'emisor ana receptor carlos']
  },
  {
    id: 'prep-11',
    category: 'elementos',
    type: 'trap',
    questionEs: 'En la llamada entre Ana y Carlos, ¿cuál es el CANAL y cuál es el CÓDIGO? ¡Distinción clave!',
    questionHy: 'Անայի և Կառլոսի հեռախոսազանգում ո՞րն է ՄԻՋՈՑԸ (canal) և ո՞րն է ԿՈԴԸ (código)։ Կարևորագույն տարբերություն։',
    situationEs: 'Ana llama por teléfono a Carlos y dice en español: «Llegaré a casa a las ocho».',
    situationHy: 'Անան հեռախոսով զանգում է Կառլոսին և իսպաներեն ասում. «Ես տուն կհասնեմ ժամը ութին»։',
    options: [
      { id: 'a', textEs: 'Canal: El teléfono / línea telefónica | Código: La lengua española', textHy: 'Միջոց (Canal)՝ Հեռախոսը / հեռախոսակապը | Կոդ (Código)՝ Իսպաներեն լեզուն' },
      { id: 'b', textEs: 'Canal: La lengua española | Código: El teléfono', textHy: 'Միջոց՝ Իսպաներենը | Կոդ՝ Հեռախոսը' },
      { id: 'c', textEs: 'Canal: El aire | Código: WhatsApp', textHy: 'Միջոց՝ Օդը | Կոդ՝ WhatsApp-ը' },
      { id: 'd', textEs: 'Canal y Código son exactamente lo mismo', textHy: 'Միջոցն ու կոդը նույնն են' },
    ],
    correctAnswerEs: 'Canal: El teléfono / la llamada | Código: El idioma español',
    correctAnswerHy: 'Canal (միջոց)՝ Հեռախոսը / հեռախոսազանգը | Código (կոդ)՝ Իսպաներեն լեզուն',
    explanationEs: '¡REGLA DE ORO! CANAL ≠ CÓDIGO. El CANAL es el medio físico por donde viaja la señal (el teléfono, cable, ondas). El CÓDIGO es el sistema de signos lingüísticos compartido (el idioma español). En WhatsApp, WhatsApp o internet es el canal, y el español es el código.',
    explanationHy: 'ՈՍԿԻ ԿԱՆՈՆ․ CANAL ≠ CÓDIGO։ CANAL-ը ֆիզիկական կամ տեխնիկական միջոցն է, որով անցնում է ազդանշանը (հեռախոս, կապի ալիք, ինտերնետ)։ CÓDIGO-ն նշանային համակարգն է (իսպաներեն լեզուն)։ WhatsApp-ով նամակագրության մեջ WhatsApp-ը/ինտերնետը canal-ն է, իսկ իսպաներենը՝ կոդը։',
    keywordEs: 'Canal = soporte físico / Código = idioma',
    keywordHy: 'Canal = ֆիզիկական միջոց / Código = լեզու',
    trapWarningEs: 'No confundas el medio tecnológico (teléfono/WhatsApp) con el idioma (código).',
    trapWarningHy: 'Մի՛ շփոթիր տեխնիկական միջոցը (հեռախոս/WhatsApp) լեզվական կոդի (իսպաներեն) հետ։',
    keywordsMatch: ['canal telefono', 'codigo espanol', 'telefono espanol']
  },
  // Traducción Armenio -> Español
  {
    id: 'prep-12',
    category: 'traduccion',
    type: 'open',
    questionEs: 'Traduce al español: «Ուսուցիչը աշակերտին ասում է. "Բացիր գիրքը"»։',
    questionHy: 'Թարգմանիր իսպաներեն. «Ուսուցիչը աշակերտին ասում է. "Բացիր գիրքը"»։',
    phraseHy: 'Ուսուցիչը աշակերտին ասում է. «Բացիր գիրքը»։',
    options: [
      { id: 'a', textEs: 'El profesor le dice al alumno: «Abre el libro».', textHy: 'Ճիշտ թարգմանություն' },
      { id: 'b', textEs: 'El profesor dice al alumno: «Abres el libro».', textHy: 'Սխալ՝ պակասում է le դերանունը և բայն ապառնի չէ' },
      { id: 'c', textEs: 'El profesor habla con el alumno: «Abrir el libro».', textHy: 'Սխալ՝ habla con և ինֆինիտիվ' },
      { id: 'd', textEs: 'Un profesor dice para el alumno: «Abre libro».', textHy: 'Սխալ կառուցվածք' },
    ],
    correctAnswerEs: 'El profesor le dice al alumno: «Abre el libro».',
    correctAnswerHy: 'El profesor le dice al alumno: «Abre el libro». (կամ: El profesor le dice al estudiante: «Abre el libro».)',
    explanationEs: 'En español se usa el pronombre redundante de objeto indirecto («le») con «al alumno». «Abre» es el imperativo afirmativo de tú.',
    explanationHy: 'Իսպաներենում անուղղակի խնդրի հետ («al alumno») պարտադիր կրկնվում է «le» դերանունը («le dice al alumno»)։ «Abre»-ն tú դեմքի հրամայականն է (imperativo):',
    keywordEs: 'Le dice al alumno / Abre el libro',
    keywordHy: 'Le dice al alumno / Abre el libro',
    keywordsMatch: ['el profesor le dice al alumno abre el libro', 'el profesor le dice al estudiante abre el libro']
  }
];

// ==========================================
// ETAPA 2: EXAMEN REAL (30 PREGUNTAS)
// Exactly:
// - 10 preguntas: FUNCIONES DEL LENGUAJE
// - 8 preguntas: MODALIDADES ORACIONALES
// - 8 preguntas: ELEMENTOS DE LA COMUNICACIÓN
// - 4 preguntas: ARMENIO → ESPAÑOL
// ==========================================
export const REAL_EXAM_QUESTIONS: Question[] = [
  // ------------------------------------------
  // PARTE 1: FUNCIONES DEL LENGUAJE (10 preguntas)
  // ------------------------------------------
  {
    id: 'exam-1',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: '«El agua hierve a 100 grados Celsius a nivel del mar.» ¿Qué función del lenguaje predomina en este enunciado?',
    questionHy: '«Ջուրը ծովի մակարդակում եռում է 100 աստիճան Ցելսիուսում»։ Ո՞ր գործառույթն է գերակշռում այս նախադասության մեջ։',
    options: [
      { id: 'a', textEs: 'Función referencial o representativa', textHy: 'Տեղեկատվական / ներկայացուցչական' },
      { id: 'b', textEs: 'Función expresiva o emotiva', textHy: 'Զգացմունքային / արտահայտչական' },
      { id: 'c', textEs: 'Función metalingüística', textHy: 'Մետալեզվական' },
      { id: 'd', textEs: 'Función fática', textHy: 'Կապ հաստատող' },
    ],
    correctAnswerEs: 'Función referencial o representativa',
    correctAnswerHy: 'Տեղեկատվական / ներկայացուցչական գործառույթ (Función referencial o representativa)',
    explanationEs: 'Comunica un hecho científico comprobable de forma objetiva, centrándose en el contexto o referente.',
    explanationHy: 'Օբյեկտիվորեն հաղորդում է գիտական փաստ՝ կենտրոնանալով իրականության/համատեքստի վրա։',
    keywordEs: 'Dato científico objetivo / referente',
    keywordHy: 'Օբյեկտիվ գիտական փաստ / իրականություն',
    keywordsMatch: ['referencial', 'representativa']
  },
  {
    id: 'exam-2',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: '«¡Me encanta esta canción, me hace sentir una felicidad inmensa!» ¿Qué función destaca aquí?',
    questionHy: '«Հիանում եմ այս երգով, այն ինձ անսահման երջանկություն է պարգևում»։ Լեզվի ո՞ր գործառույթն է առանձնանում այստեղ։',
    options: [
      { id: 'a', textEs: 'Función expresiva o emotiva', textHy: 'Զգացմունքային / արտահայտչական (Función expresiva)' },
      { id: 'b', textEs: 'Función apelativa o conativa', textHy: 'Դիմողական' },
      { id: 'c', textEs: 'Función poética', textHy: 'Բանաստեղծական' },
      { id: 'd', textEs: 'Función fática', textHy: 'Կապ հաստատող' },
    ],
    correctAnswerEs: 'Función expresiva o emotiva',
    correctAnswerHy: 'Զգացմունքային կամ արտահայտչական գործառույթ (Función expresiva o emotiva)',
    explanationEs: 'El hablante exterioriza su propia emoción y estado afectivo personal («me encanta», «me hace sentir felicidad»).',
    explanationHy: 'Խոսողն արտահայտում է իր անձնական զգացմունքներն ու հուզական վիճակը («me encanta»):',
    keywordEs: 'Emoción personal / emisor',
    keywordHy: 'Անձնական զգացմունք / խոսող',
    keywordsMatch: ['expresiva', 'emotiva']
  },
  {
    id: 'exam-3',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: '«¡Por favor, siéntate y calla un momento!» ¿Qué función del lenguaje se está empleando primordialmente?',
    questionHy: '«Խնդրում եմ, նստի՛ր և մի պահ լռի՛ր»։ Լեզվի ո՞ր գործառույթն է գլխավորապես կիրառվում։',
    options: [
      { id: 'a', textEs: 'Función apelativa o conativa', textHy: 'Դիմողական կամ ազդեցության (Función apelativa)' },
      { id: 'b', textEs: 'Función referencial', textHy: 'Տեղեկատվական' },
      { id: 'c', textEs: 'Función metalingüística', textHy: 'Մետալեզվական' },
      { id: 'd', textEs: 'Función fática', textHy: 'Կապ հաստատող' },
    ],
    correctAnswerEs: 'Función apelativa o conativa',
    correctAnswerHy: 'Դիմողական կամ ազդեցության գործառույթ (Función apelativa o conativa)',
    explanationEs: 'El emisor busca modificar la conducta del receptor mediante mandatos e imperativos («siéntate», «calla»).',
    explanationHy: 'Խոսողը փորձում է ազդել լսողի վարքի վրա հրամանների միջոցով («siéntate», «calla»)։',
    keywordEs: 'Receptor / imperativo / orden',
    keywordHy: 'Լսող / հրամայական / կարգադրություն',
    keywordsMatch: ['apelativa', 'conativa']
  },
  {
    id: 'exam-4',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: 'En una llamada: «¿Sí? ¿Hola? ¿Me oyes bien?». ¿Qué función del lenguaje predomina?',
    questionHy: 'Հեռախոսազանգում․ «Ալո՞, լսո՞ւմ ես ինձ»։ Լեզվի ո՞ր գործառույթն է գերակշռում։',
    options: [
      { id: 'a', textEs: 'Función fática o de contacto', textHy: 'Կապ հաստատող կամ պահպանող (Función fática)' },
      { id: 'b', textEs: 'Función poética', textHy: 'Բանաստեղծական' },
      { id: 'c', textEs: 'Función referencial', textHy: 'Տեղեկատվական' },
      { id: 'd', textEs: 'Función metalingüística', textHy: 'Մետալեզվական' },
    ],
    correctAnswerEs: 'Función fática o de contacto',
    correctAnswerHy: 'Կապ հաստատող կամ պահպանող գործառույթ (Función fática)',
    explanationEs: 'Su única finalidad es verificar que el canal físico de comunicación está abierto y funcionando correctamente.',
    explanationHy: 'Նպատակն է ստուգել կամ պահպանել հաղորդակցության ալիքի/միջոցի աշխատանքը։',
    keywordEs: 'Canal / verificar enlace',
    keywordHy: 'Ալիք / կապի ստուգում',
    keywordsMatch: ['fatica', 'fática', 'de contacto']
  },
  {
    id: 'exam-5',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: '«Las palabras esdrújulas siempre llevan tilde en la antepenúltima sílaba.» ¿Qué función del lenguaje es?',
    questionHy: '«Esdrújula բառերը միշտ շեշտ են կրում վերջից երրորդ վանկի վրա»։ Լեզվի ո՞ր գործառույթն է սա։',
    options: [
      { id: 'a', textEs: 'Función metalingüística', textHy: 'Մետալեզվական (Función metalingüística)' },
      { id: 'b', textEs: 'Función poética', textHy: 'Գեղարվեստական' },
      { id: 'c', textEs: 'Función expresiva', textHy: 'Զգացմունքային' },
      { id: 'd', textEs: 'Función apelativa', textHy: 'Դիմողական' },
    ],
    correctAnswerEs: 'Función metalingüística',
    correctAnswerHy: 'Մետալեզվական գործառույթ (Función metalingüística)',
    explanationEs: 'Utiliza el código lingüístico (el español) para explicar las propias reglas gramaticales y ortográficas del código.',
    explanationHy: 'Օգտագործում է լեզուն՝ հենց լեզվի ուղղագրական և քերականական կանոնները բացատրելու համար։',
    keywordEs: 'Código / regla ortográfica',
    keywordHy: 'Կոդ / ուղղագրական կանոն',
    keywordsMatch: ['metalinguistica', 'metalingüística']
  },
  {
    id: 'exam-6',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: '«Caminante, no hay camino, se hace camino al andar.» (Antonio Machado). ¿Qué función del lenguaje sobresale?',
    questionHy: '«Ճամփորդ, ճանապարհ չկա, ճանապարհը հարթվում է քայլելիս»։ Լեզվի ո՞ր գործառույթն է առաջնային։',
    options: [
      { id: 'a', textEs: 'Función poética o estética', textHy: 'Գեղարվեստական կամ բանաստեղծական (Función poética)' },
      { id: 'b', textEs: 'Función apelativa', textHy: 'Դիմողական' },
      { id: 'c', textEs: 'Función fática', textHy: 'Կապ հաստատող' },
      { id: 'd', textEs: 'Función metalingüística', textHy: 'Մետալեզվական' },
    ],
    correctAnswerEs: 'Función poética o estética',
    correctAnswerHy: 'Գեղարվեստական կամ բանաստեղծական գործառույթ (Función poética o estética)',
    explanationEs: 'Se centra en la forma y belleza del MENSAJE mediante recursos literarios, ritmo y metáfora.',
    explanationHy: 'Կենտրոնացած է ՀԱՂՈՐԴԱԳՐՈՒԹՅԱՆ ձևի և գեղեցկության վրա՝ ռիթմի, փոխաբերության և գրական հնարքների միջոցով։',
    keywordEs: 'Mensaje / belleza / literatura',
    keywordHy: 'Հաղորդագրություն / գեղեցկություն / գրականություն',
    keywordsMatch: ['poetica', 'poética', 'estetica', 'estética']
  },
  {
    id: 'exam-7',
    category: 'funciones',
    type: 'trap',
    questionEs: 'PREGUNTA CON TRAMPA: «¡Qué calor tan insoportable!» ¿Por qué NO es apelativa si lleva signos de admiración?',
    questionHy: 'ԹԱԿԱՐԴԱՅԻՆ ՀԱՐՑ․ «¡Qué calor tan insoportable!» (Ինչպիսի՜ անտանելի շոգ է)։ Ինչո՞ւ սա apelativa (դիմողական) ՉԷ, չնայած բացականչական նշաններին։',
    options: [
      { id: 'a', textEs: 'Porque no ordena nada al receptor; expresa el sufrimiento subjetivo del emisor (función expresiva).', textHy: 'Որովհետև լսողին ոչինչ չի պատվիրում, այլ արտահայտում է խոսողի սուբյեկտիվ զգացողությունը (էքսպրեսիվ գործառույթ)։' },
      { id: 'b', textEs: 'Porque toda frase con signos de exclamación es obligatoriamente poética.', textHy: 'Որովհետև բացականչական նշաններով ամեն նախադասություն բանաստեղծական է։' },
      { id: 'c', textEs: 'Porque habla del tiempo y por eso es siempre metalingüística.', textHy: 'Որովհետև եղանակից է խոսում։' },
      { id: 'd', textEs: 'Porque el emisor no está hablando con nadie.', textHy: 'Որովհետև ոչ ոքի հետ չի խոսում։' },
    ],
    correctAnswerEs: 'Porque no ordena nada al receptor; expresa el sufrimiento subjetivo del emisor (función expresiva).',
    correctAnswerHy: 'Որովհետև լսողին որևէ հրաման չի տալիս, այլ արտահայտում է խոսողի անձնական զգացողությունը (expresiva/զգացմունքային)։',
    explanationEs: 'Los signos «¡!» no determinan la función por sí solos. La intención comunicativa aquí es expresar el sentimiento de agobio del emisor, por lo que es función EXPRESIVA.',
    explanationHy: 'Բացականչական նշանները ինքնին չեն որոշում գործառույթը։ Այստեղ հաղորդակցական նպատակը սեփական անտանելի զգացողությունը փոխանցելն է (EXPRESIVA)։',
    keywordEs: 'Intención comunicativa vs signos ortográficos',
    keywordHy: 'Հաղորդակցական նպատակն ընդդեմ կետադրական նշանների',
    trapWarningEs: 'No confundas entonación exclamativa con función apelativa.',
    trapWarningHy: 'Մի՛ շփոթիր բացականչական հնչերանգը դիմողական (հրամայական) գործառույթի հետ։',
    keywordsMatch: ['expresiva', 'no ordena', 'subjetivo']
  },
  {
    id: 'exam-8',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: '¿A qué elemento de la comunicación se asocia directamente la función METALINGÜÍSTICA?',
    questionHy: 'Հաղորդակցության ո՞ր տարրի հետ է անմիջականորեն կապված ՄԵՏԱԼԵԶՎԱԿԱՆ (metalingüística) գործառույթը։',
    options: [
      { id: 'a', textEs: 'Al Código', textHy: 'Կոդի (լեզվական համակարգի) հետ' },
      { id: 'b', textEs: 'Al Canal', textHy: 'Ալիքի/միջոցի հետ' },
      { id: 'c', textEs: 'Al Receptor', textHy: 'Լսողի հետ' },
      { id: 'd', textEs: 'Al Emisor', textHy: 'Ուղարկողի հետ' },
    ],
    correctAnswerEs: 'Al Código',
    correctAnswerHy: 'Կոդի (Código) հետ',
    explanationEs: 'Roman Jakobson demostró que la función metalingüística tiene como foco exclusivo el CÓDIGO (la lengua que se analiza).',
    explanationHy: 'Ռոման Յակոբսոնի տեսության համաձայն՝ մետալեզվական գործառույթը կենտրոնացած է բացառապես ԿՈԴԻ (Código) վրա։',
    keywordEs: 'Código / Jakobson',
    keywordHy: 'Կոդ / Յակոբսոն',
    keywordsMatch: ['codigo', 'código']
  },
  {
    id: 'exam-9',
    category: 'funciones',
    type: 'multiple_choice',
    questionEs: '«Buenas tardes a todos los presentes.» ¿Qué función del lenguaje se activa en esta fórmula de saludo social?',
    questionHy: '«Բարի կեսօր բոլոր ներկաներին»։ Ողջույնի այս սոցիալական ձևակերպման մեջ ո՞ր գործառույթն է ակտիվանում։',
    options: [
      { id: 'a', textEs: 'Función fática (inicia el contacto comunicativo)', textHy: 'Կապ հաստատող գործառույթ (Función fática)' },
      { id: 'b', textEs: 'Función referencial pura', textHy: 'Զուտ տեղեկատվական' },
      { id: 'c', textEs: 'Función metalingüística', textHy: 'Մետալեզվական' },
      { id: 'd', textEs: 'Función poética', textHy: 'Բանաստեղծական' },
    ],
    correctAnswerEs: 'Función fática',
    correctAnswerHy: 'Կապ հաստատող գործառույթ (Función fática)',
    explanationEs: 'Los saludos, despedidas y fórmulas de cortesía pertenecen a la función fática porque abren y mantienen el canal social de comunicación.',
    explanationHy: 'Ողջույնները, հրաժեշտի խոսքերը պատկանում են ֆատիկ (fática) գործառույթին, քանի որ բացում են հաղորդակցման ալիքը։',
    keywordEs: 'Saludo / abrir canal',
    keywordHy: 'Ողջույն / կապի բացում',
    keywordsMatch: ['fatica', 'fática']
  },
  {
    id: 'exam-10',
    category: 'funciones',
    type: 'true_false',
    questionEs: 'Verdadero o Falso: «Una misma oración NUNCA puede tener más de una función del lenguaje a la vez.»',
    questionHy: 'Ճիշտ է, թե՞ Սխալ․ «Միևնույն նախադասությունը ԵՐԲԵՔ չի կարող միաժամանակ ունենալ մեկից ավելի լեզվական գործառույթ»։',
    options: [
      { id: 'a', textEs: 'FALSO: En un mensaje suelen coexistir varias funciones, aunque casi siempre una es la PREDOMINANTE.', textHy: 'ՍԽԱԼ․ նախադասության մեջ կարող են համատեղվել մի քանի գործառույթներ, սակայն մեկը սովորաբար ԳԵՐԱԿՇՌՈՂՆ է։' },
      { id: 'b', textEs: 'VERDADERO: Cada frase solo puede tener una única función matemática estricta.', textHy: 'ՃԻՇՏ․ յուրաքանչյուր նախադասություն կարող է ունենալ միայն մեկ խիստ գործառույթ։' },
    ],
    correctAnswerEs: 'FALSO: En un mensaje suelen coexistir varias funciones, aunque casi siempre una es la PREDOMINANTE.',
    correctAnswerHy: 'ՍԽԱԼ (Falso)․ Միևնույն նախադասության մեջ կարող են հանդիպել տարբեր գործառույթներ, բայց մենք որոշում ենք ԳԵՐԱԿՇՌՈՂԸ (predominante)։',
    explanationEs: 'En la comunicación real conviven varias funciones simultáneamente. Por eso en los exámenes siempre se pregunta: «¿Qué función PREDOMINA?».',
    explanationHy: 'Իրական խոսքում միաժամանակ գործում են տարբեր գործառույթներ, ուստի քննություններում հարցնում են՝ «ո՞ր գործառույթն է ԳԵՐԱԿՇՌՈՒՄ (predomina)»։',
    keywordEs: 'Coexistencia / función predominante',
    keywordHy: 'Համատեղում / գերակշռող գործառույթ',
    keywordsMatch: ['falso', 'coexistir', 'predominante']
  },

  // ------------------------------------------
  // PARTE 2: MODALIDADES ORACIONALES (8 preguntas)
  // ------------------------------------------
  {
    id: 'exam-11',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«La conferencia empezará puntualmente a las diez de la mañana.» ¿Qué modalidad oracional es?',
    questionHy: '«Համաժողովը կսկսվի ճիշտ առավոտյան ժամը տասին»։ Նախադասության ո՞ր տեսակն է ըստ խոսողի նպատակի։',
    options: [
      { id: 'a', textEs: 'Enunciativa afirmativa', textHy: 'Պատմողական հաստատական (Enunciativa afirmativa)' },
      { id: 'b', textEs: 'Exhortativa', textHy: 'Հրամայական' },
      { id: 'c', textEs: 'Dubitativa', textHy: 'Կասկած արտահայտող' },
      { id: 'd', textEs: 'Desiderativa', textHy: 'Ցանկություն արտահայտող' },
    ],
    correctAnswerEs: 'Enunciativa afirmativa',
    correctAnswerHy: 'Պատմողական հաստատական (Enunciativa afirmativa)',
    explanationEs: 'Se limita a afirmar objetivamente un hecho o acontecimiento.',
    explanationHy: 'Պարզապես հաստատում է փաստ կամ իրադարձություն։',
    keywordEs: 'Afirmar un hecho / enunciativa',
    keywordHy: 'Փաստի հաստատում / պատմողական',
    keywordsMatch: ['enunciativa', 'enunciativa afirmativa']
  },
  {
    id: 'exam-12',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«¿Cuántos años llevas estudiando en esta universidad?» ¿Qué modalidad oracional es?',
    questionHy: '«Քանի՞ տարի ես սովորում այս համալսարանում»։ Նախադասության ո՞ր տեսակն է։',
    options: [
      { id: 'a', textEs: 'Interrogativa directa parcial', textHy: 'Հարցական ուղղակի մասնակի (Interrogativa directa)' },
      { id: 'b', textEs: 'Exclamativa', textHy: 'Բացականչական' },
      { id: 'c', textEs: 'Dubitativa', textHy: 'Կասկած արտահայտող' },
      { id: 'd', textEs: 'Desiderativa', textHy: 'Ցանկություն արտահայտող' },
    ],
    correctAnswerEs: 'Interrogativa directa',
    correctAnswerHy: 'Հարցական նախադասություն (Interrogativa directa)',
    explanationEs: 'Formula una pregunta directa mediante signos interrogativos («¿?») y el pronombre «cuántos» para obtener información.',
    explanationHy: 'Ուղղակի հարց է տալիս հարցական նշաններով և «cuántos» բառով՝ տեղեկություն ստանալու նպատակով։',
    keywordEs: 'Pregunta directa / ¿?',
    keywordHy: 'Ուղղակի հարց / ¿?',
    keywordsMatch: ['interrogativa', 'interrogativa directa']
  },
  {
    id: 'exam-13',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«¡Ojalá apruebe el examen de español con la máxima nota!» ¿Qué modalidad oracional representa?',
    questionHy: '«Երանի իսպաներենի քննությունը հանձնեմ առավելագույն գնահատականով»։ Ի՞նչ տեսակ է սա։',
    options: [
      { id: 'a', textEs: 'Desiderativa (u optativa)', textHy: 'Ցանկություն արտահայտող (Desiderativa)' },
      { id: 'b', textEs: 'Dubitativa', textHy: 'Կասկած արտահայտող' },
      { id: 'c', textEs: 'Exhortativa', textHy: 'Հորդորական' },
      { id: 'd', textEs: 'Enunciativa negativa', textHy: 'Պատմողական ժխտական' },
    ],
    correctAnswerEs: 'Desiderativa',
    correctAnswerHy: 'Ցանկություն արտահայտող (Desiderativa)',
    explanationEs: '«Ojalá» es el marcador por excelencia del anhelo o deseo del hablante, seguido de verbo en subjuntivo («apruebe»).',
    explanationHy: '«Ojalá»-ն խոսողի ցանկության ու երազանքի գլխավոր ցուցիչն է, որին հետևում է subjuntivo-ն («apruebe»):',
    keywordEs: 'Ojalá / deseo',
    keywordHy: 'Ojalá / ցանկություն',
    keywordsMatch: ['desiderativa']
  },
  {
    id: 'exam-14',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«Quizás ellos no hayan recibido todavía la carta.» ¿Qué modalidad oracional es y qué expresa?',
    questionHy: '«Գուցե նրանք դեռ չեն ստացել նամակը»։ Ո՞ր տեսակն է և ի՞նչ է արտահայտում։',
    options: [
      { id: 'a', textEs: 'Dubitativa: expresa incertidumbre o suposición.', textHy: 'Dubitativa (կասկած արտահայտող)՝ արտահայտում է անորոշություն կամ ենթադրություն։' },
      { id: 'b', textEs: 'Exhortativa: expresa una prohibición estricta.', textHy: 'Հրամայական՝ արտահայտում է արգելք։' },
      { id: 'c', textEs: 'Desiderativa: expresa un deseo ferviente.', textHy: 'Ցանկություն արտահայտող։' },
      { id: 'd', textEs: 'Enunciativa afirmativa de certeza.', textHy: 'Պատմողական վստահ հաստատում։' },
    ],
    correctAnswerEs: 'Dubitativa: expresa incertidumbre o suposición.',
    correctAnswerHy: 'Կասկած կամ հավանականություն արտահայտող (Dubitativa)․ արտահայտում է անորոշություն։',
    explanationEs: 'El adverbio «quizás» introduce una duda o conjetura sobre la realidad del hecho.',
    explanationHy: '«Quizás» (գուցե) մակբայը ցույց է տալիս խոսողի կասկածը կամ ենթադրությունը։',
    keywordEs: 'Quizás / duda',
    keywordHy: 'Quizás / կասկած',
    keywordsMatch: ['dubitativa', 'duda']
  },
  {
    id: 'exam-15',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«No tires papeles al suelo.» ¿A qué modalidad oracional corresponde esta prohibición?',
    questionHy: '«Թղթերը գետնին չգցե՛ս»։ Այս արգելքը նախադասության ո՞ր տեսակին է համապատասխանում։',
    options: [
      { id: 'a', textEs: 'Exhortativa o imperativa', textHy: 'Հրամայական կամ հորդորական (Exhortativa / imperativa)' },
      { id: 'b', textEs: 'Enunciativa negativa neutra', textHy: 'Չեզոք պատմողական ժխտական' },
      { id: 'c', textEs: 'Desiderativa', textHy: 'Ցանկություն արտահայտող' },
      { id: 'd', textEs: 'Dubitativa', textHy: 'Կասկած արտահայտող' },
    ],
    correctAnswerEs: 'Exhortativa o imperativa',
    correctAnswerHy: 'Հրամայական կամ հորդորական (Exhortativa o imperativa)',
    explanationEs: 'Las órdenes negativas o prohibiciones se construyen con «no + subjuntivo» («no tires») y constituyen una modalidad exhortativa clara.',
    explanationHy: 'Ժխտական հրամաններն ու արգելքները («no + subjuntivo») պատկանում են հրամայական/հորդորական (exhortativa) տեսակին։',
    keywordEs: 'Prohibición / imperativo negativo',
    keywordHy: 'Արգելք / ժխտական հրաման',
    keywordsMatch: ['exhortativa', 'imperativa']
  },
  {
    id: 'exam-16',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«¡Qué paisaje tan maravilloso!» ¿Qué modalidad oracional es y cómo se reconoce?',
    questionHy: '«Ինչպիսի՜ հրաշալի բնապատկեր»։ Նախադասության ո՞ր տեսակն է և ինչպե՞ս է ճանաչվում։',
    options: [
      { id: 'a', textEs: 'Exclamativa: expresa admiración y sorpresa con entonación enfática y signos ¡!.', textHy: 'Բացականչական (Exclamativa)՝ արտահայտում է հիացմունք և զարմանք ¡! նշաններով։' },
      { id: 'b', textEs: 'Desiderativa: pide que cambie el paisaje.', textHy: 'Ցանկություն արտահայտող։' },
      { id: 'c', textEs: 'Dubitativa: duda de la belleza.', textHy: 'Կասկած արտահայտող։' },
      { id: 'd', textEs: 'Interrogativa indirecta.', textHy: 'Անուղղակի հարցական։' },
    ],
    correctAnswerEs: 'Exclamativa',
    correctAnswerHy: 'Բացականչական նախադասություն (Exclamativa)',
    explanationEs: 'Manifiesta emoción intensa, admiración o sorpresa ante la realidad con curva entonativa exclamativa.',
    explanationHy: 'Արտահայտում է խորը հիացմունք կամ զարմանք՝ բացականչական հնչերանգով։',
    keywordEs: 'Exclamativa / admiración',
    keywordHy: 'Բացականչական / հիացմունք',
    keywordsMatch: ['exclamativa']
  },
  {
    id: 'exam-17',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '«Me pregunto a qué hora saldrá el tren.» ¿Qué tipo de oración es esta?',
    questionHy: '«Հետաքրքիր է՝ գնացքը ժամը քանիսի՞ն կմեկնի» (Me pregunto a qué hora...)։ Սա ի՞նչ տեսակի նախադասություն է։',
    options: [
      { id: 'a', textEs: 'Interrogativa indirecta', textHy: 'Անուղղակի հարցական (Interrogativa indirecta)' },
      { id: 'b', textEs: 'Interrogativa directa', textHy: 'Ուղղակի հարցական' },
      { id: 'c', textEs: 'Exhortativa', textHy: 'Հրամայական' },
      { id: 'd', textEs: 'Dubitativa pura', textHy: 'Զուտ կասկած' },
    ],
    correctAnswerEs: 'Interrogativa indirecta',
    correctAnswerHy: 'Անուղղակի հարցական նախադասություն (Interrogativa indirecta)',
    explanationEs: 'Plantea una pregunta subordinada sin signos de interrogación («¿?») a través del verbo «me pregunto» y la palabra interrogativa con tilde «qué».',
    explanationHy: 'Հարց է տալիս առանց հարցական նշանների («¿?»), «me pregunto» կառույցի և շեշտված «qué» բառի միջոցով (անուղղակի հարցական)։',
    keywordEs: 'Interrogativa indirecta / sin signos ¿?',
    keywordHy: 'Անուղղակի հարցական / առանց ¿? նշանի',
    keywordsMatch: ['interrogativa indirecta', 'interrogativa']
  },
  {
    id: 'exam-18',
    category: 'modalidades',
    type: 'multiple_choice',
    questionEs: '¿Qué palabra en la frase «A lo mejor viene luego» es la clave para clasificarla como DUBITATIVA?',
    questionHy: '«A lo mejor viene luego» նախադասության մեջ ո՞ր արտահայտությունն է հիմնական բանալին այն որպես ԿԱՍԿԱԾ ԱՐՏԱՀԱՅՏՈՂ (dubitativa) որակելու համար։',
    options: [
      { id: 'a', textEs: '«A lo mejor» (equivale a «quizás» o «tal vez»)', textHy: '«A lo mejor» (համարժեք է «quizás» կամ «tal vez»՝ միգուցե)' },
      { id: 'b', textEs: '«viene»', textHy: '«viene» (գալիս է)' },
      { id: 'c', textEs: '«luego»', textHy: '«luego» (հետո)' },
      { id: 'd', textEs: 'El sujeto elíptico', textHy: 'Զեղչված ենթական' },
    ],
    correctAnswerEs: '«A lo mejor»',
    correctAnswerHy: '«A lo mejor» (նշանակում է՝ «միգուցե / երևի»)',
    explanationEs: 'La locución adverbial «a lo mejor» expresa probabilidad o suposición (modalidad dubitativa).',
    explanationHy: '«A lo mejor» արտահայտությունը ցույց է տալիս հավանականություն կամ ենթադրություն (dubitativa):',
    keywordEs: 'A lo mejor = quizás',
    keywordHy: 'A lo mejor = գուցե',
    keywordsMatch: ['a lo mejor']
  },

  // ------------------------------------------
  // PARTE 3: ELEMENTOS DE LA COMUNICACIÓN (8 preguntas)
  // ------------------------------------------
  {
    id: 'exam-19',
    category: 'elementos',
    type: 'multiple_choice',
    questionEs: '¿Quién es el EMISOR en el proceso comunicativo?',
    questionHy: 'Ո՞վ է ՈՒՂԱՐԿՈՂԸ (emisor) հաղորդակցման գործընթացում։',
    options: [
      { id: 'a', textEs: 'La persona o entidad que codifica, produce y transmite el mensaje.', textHy: 'Այն անձը կամ միավորը, ով կոդավորում, ստեղծում և հաղորդում է հաղորդագրությունը։' },
      { id: 'b', textEs: 'El aparato físico a través del cual viaja la señal.', textHy: 'Ֆիզիկական սարքը, որով անցնում է ազդանշանը։' },
      { id: 'c', textEs: 'El idioma en el que está escrito el texto.', textHy: 'Լեզուն, որով գրված է տեքստը։' },
      { id: 'd', textEs: 'La persona que recibe y decodifica la información.', textHy: 'Այն անձը, ով ստանում է տեղեկությունը։' },
    ],
    correctAnswerEs: 'La persona o entidad que codifica, produce y transmite el mensaje.',
    correctAnswerHy: 'Այն անձը կամ միավորը, ով կոդավորում, ստեղծում և հաղորդում է հաղորդագրությունը (Emisor):',
    explanationEs: 'El emisor es el punto de origen de la comunicación: concibe la idea, la codifica en signos y la emite.',
    explanationHy: 'Emisor-ը հաղորդակցության սկզբնաղբյուրն է՝ ստեղծում է միտքը, կոդավորում նշաններով և ուղարկում։',
    keywordEs: 'Emisor = produce y emite el mensaje',
    keywordHy: 'Emisor = ստեղծում և հաղորդում է հաղորդագրությունը',
    keywordsMatch: ['emisor', 'produce y transmite', 'codifica']
  },
  {
    id: 'exam-20',
    category: 'elementos',
    type: 'situation',
    questionEs: 'Situación: En un cartel del metro de Madrid se lee: «PROHIBIDO FUMAR». ¿Cuál es el CANAL en este acto comunicativo?',
    questionHy: 'Իրավիճակ․ Մադրիդի մետրոյի պաստառին գրված է. «PROHIBIDO FUMAR» (Ծխելն արգելվում է)։ Ո՞րն է ՄԻՋՈՑԸ (canal) այս հաղորդակցության մեջ։',
    situationEs: 'Cartel en el metro: «PROHIBIDO FUMAR»',
    situationHy: 'Պաստառ մետրոյում․ «PROHIBIDO FUMAR»',
    options: [
      { id: 'a', textEs: 'El cartel físico / soporte de papel o plástico', textHy: 'Ֆիզիկական պաստառը / թուղթը կամ վահանակը (El cartel)' },
      { id: 'b', textEs: 'El idioma español', textHy: 'Իսպաներեն լեզուն' },
      { id: 'c', textEs: 'Los pasajeros del metro', textHy: 'Մետրոյի ուղևորները' },
      { id: 'd', textEs: 'La empresa del metro', textHy: 'Մետրոյի ղեկավարությունը' },
    ],
    correctAnswerEs: 'El cartel físico / soporte impreso',
    correctAnswerHy: 'Ֆիզիկական պաստառը / վահանակը (El cartel / soporte impreso)',
    explanationEs: 'El CANAL es el medio físico que transporta el mensaje (el cartel). El idioma español es el CÓDIGO.',
    explanationHy: 'CANAL-ը ֆիզիկական կրիչն է (պաստառը)։ Իսպաներենը CÓDIGO-ն է։',
    keywordEs: 'Canal = cartel físico',
    keywordHy: 'Canal = ֆիզիկական պաստառ',
    keywordsMatch: ['cartel', 'soporte impreso', 'papel']
  },
  {
    id: 'exam-21',
    category: 'elementos',
    type: 'situation',
    questionEs: 'Situación: María le envía un mensaje de WhatsApp a su hermano Pablo: «¿Compraste el pan?». ¿Cuál es el CÓDIGO?',
    questionHy: 'Իրավիճակ․ Մարիան WhatsApp-ով նամակ է ուղարկում եղբորը՝ Պաբլոյին․ «¿Compraste el pan?» (Հացը գնեցի՞ր)։ Ո՞րն է ԿՈԴԸ (código)։',
    situationEs: 'María le envía un mensaje por WhatsApp a Pablo: «¿Compraste el pan?».',
    situationHy: 'Մարիան WhatsApp-ով նամակ է ուղարկում Պաբլոյին․ «¿Compraste el pan?»: ',
    options: [
      { id: 'a', textEs: 'La lengua española (código lingüístico escrito)', textHy: 'Իսպաներեն լեզուն (գրավոր լեզվական կոդ)' },
      { id: 'b', textEs: 'La aplicación WhatsApp', textHy: 'WhatsApp հավելվածը' },
      { id: 'c', textEs: 'El teléfono móvil de Pablo', textHy: 'Պաբլոյի հեռախոսը' },
      { id: 'd', textEs: 'La panadería', textHy: 'Հացի փուռը' },
    ],
    correctAnswerEs: 'La lengua española (código lingüístico)',
    correctAnswerHy: 'Իսպաներեն լեզուն (գրավոր լեզվական կոդ՝ el idioma español)',
    explanationEs: 'WhatsApp e internet son el CANAL. El idioma español es el CÓDIGO (sistema de signos compartidos).',
    explanationHy: 'WhatsApp-ն ու ինտերնետը CANAL-ն են (միջոցը)։ Իսպաներեն լեզուն CÓDIGO-ն է (նշանային համակարգը)։',
    keywordEs: 'Código = idioma español (WhatsApp es canal)',
    keywordHy: 'Código = իսպաներեն (WhatsApp-ը canal է)',
    keywordsMatch: ['espanol', 'español', 'idioma', 'lengua']
  },
  {
    id: 'exam-22',
    category: 'elementos',
    type: 'situation',
    questionEs: 'Situación: En el aula, el profesor dice en voz alta a los estudiantes: «Abran el libro en la página 45». ¿Cuál es el CANAL?',
    questionHy: 'Իրավիճակ․ Դասարանում ուսուցիչը բարձրաձայն ասում է աշակերտներին. «Բացե՛ք գիրքը 45-րդ էջում»։ Ո՞րն է ՄԻՋՈՑԸ (canal)։',
    situationEs: 'En clase, el profesor dice en voz alta cara a cara: «Abran el libro en la página 45».',
    situationHy: 'Դասարանում ուսուցիչն ասում է․ «Abran el libro en la página 45»։',
    options: [
      { id: 'a', textEs: 'El aire y las ondas sonoras', textHy: 'Օդը և ձայնային ալիքները (El aire / ondas sonoras)' },
      { id: 'b', textEs: 'El libro de texto', textHy: 'Դասագիրքը' },
      { id: 'c', textEs: 'El profesor', textHy: 'Ուսուցիչը' },
      { id: 'd', textEs: 'La página 45', textHy: '45-րդ էջը' },
    ],
    correctAnswerEs: 'El aire y las ondas sonoras',
    correctAnswerHy: 'Օդը և ձայնային ալիքները (El aire / ondas sonoras)',
    explanationEs: 'En la comunicación oral cara a cara, el canal físico natural es el aire por donde se propagan las ondas sonoras.',
    explanationHy: 'Դեմ առ դեմ բանավոր խոսքում բնական ֆիզիկական միջոցը (canal) օդն է, որի միջով տարածվում են ձայնային ալիքները։',
    keywordEs: 'Canal oral = aire / ondas sonoras',
    keywordHy: 'Բանավոր կապի միջոց = օդ / ձայնային ալիքներ',
    keywordsMatch: ['aire', 'ondas sonoras', 'el aire']
  },
  {
    id: 'exam-23',
    category: 'elementos',
    type: 'multiple_choice',
    questionEs: '¿Qué es el CONTEXTO o SITUACIÓN en la comunicación?',
    questionHy: 'Ի՞նչ է ՀԱՄԱՏԵՔՍՏԸ կամ ԻՐԱՎԻՃԱԿԸ (contexto o situación) հաղորդակցության մեջ։',
    options: [
      { id: 'a', textEs: 'El conjunto de circunstancias espaciales, temporales y sociales que rodean el acto comunicativo y permiten interpretar el mensaje.', textHy: 'Տարածական, ժամանակային և սոցիալական հանգամանքների ամբողջությունը, որոնք շրջապատում են հաղորդակցությունը և թույլ տալիս ճիշտ հասկանալ միտքը։' },
      { id: 'b', textEs: 'El diccionario que explica el significado de las palabras.', textHy: 'Բառարանը, որը բացատրում է բառերը։' },
      { id: 'c', textEs: 'El satélite que transmite la señal de televisión.', textHy: 'Արբանյակը, որը փոխանցում է ազդանշանը։' },
      { id: 'd', textEs: 'El tono de voz con el que habla el emisor.', textHy: 'Խոսողի ձայնի տոնայնությունը։' },
    ],
    correctAnswerEs: 'El conjunto de circunstancias espaciales, temporales y sociales que rodean el acto comunicativo.',
    correctAnswerHy: 'Հաղորդակցությունն ընդգրկող տարածական, ժամանակային և սոցիալական իրավիճակը (Contexto):',
    explanationEs: 'El contexto incluye el lugar, la hora, la relación entre los interlocutores y la situación pragmática, sin los cuales el mensaje podría tener otro sentido.',
    explanationHy: 'Համատեքստը ներառում է վայրը, ժամանակը, մասնակիցների հարաբերությունները և իրավիճակը, առանց որոնց հաղորդագրությունը կարող էր այլ իմաստ ունենալ։',
    keywordEs: 'Circunstancias de tiempo y lugar',
    keywordHy: 'Տեղի և ժամանակի հանգամանքներ',
    keywordsMatch: ['circunstancias', 'lugar', 'tiempo', 'contexto']
  },
  {
    id: 'exam-24',
    category: 'elementos',
    type: 'situation',
    questionEs: 'Un semáforo se pone en ROJO delante de un conductor. ¿Cuál es el CÓDIGO en esta situación?',
    questionHy: 'Լուսացույցը վարորդի առջև վառվում է ԿԱՐՄԻՐ գույնով։ Ո՞րն է ԿՈԴԸ (código) այս իրավիճակում։',
    situationEs: 'Un semáforo se pone en rojo frente a un conductor en la calle.',
    situationHy: 'Լուսացույցը կարմիր է վառվում վարորդի առջև։',
    options: [
      { id: 'a', textEs: 'El código de señales luminosas de tráfico (donde rojo = detenerse)', textHy: 'Ճանապարհային լուսային նշանների կոդը (որտեղ կարմիր = կանգ առնել)' },
      { id: 'b', textEs: 'El coche del conductor', textHy: 'Վարորդի մեքենան' },
      { id: 'c', textEs: 'La bombilla del semáforo', textHy: 'Լուսացույցի լամպը' },
      { id: 'd', textEs: 'El asfalto de la carretera', textHy: 'Ճանապարհի ասֆալտը' },
    ],
    correctAnswerEs: 'El código visual de señales de tráfico (rojo = stop)',
    correctAnswerHy: 'Ճանապարհային երթևեկության լուսային նշանների կոդը (Código visual de tráfico)',
    explanationEs: 'No todos los códigos son idiomas hablados: los colores de un semáforo forman un CÓDIGO visual no lingüístico convencional que todos los conductores conocen.',
    explanationHy: 'Ոչ բոլոր կոդերն են խոսակցական լեզուներ. լուսացույցի գույները ոչ լեզվական տեսողական ԿՈԴ են (կարմիր = կանգ առնել)։',
    keywordEs: 'Código no lingüístico / señales de tráfico',
    keywordHy: 'Ոչ լեզվական կոդ / երթևեկության նշաններ',
    keywordsMatch: ['codigo de senales', 'señales de tráfico', 'luz roja']
  },
  {
    id: 'exam-25',
    category: 'elementos',
    type: 'multiple_choice',
    questionEs: '¿Cuál es la diferencia fundamental entre el CANAL y el CÓDIGO?',
    questionHy: 'Ո՞րն է հիմնարար տարբերությունը ՄԻՋՈՑԻ (canal) և ԿՈԴԻ (código) միջև։',
    options: [
      { id: 'a', textEs: 'El canal es el soporte material o físico; el código es el sistema abstracto de signos y reglas.', textHy: 'Canal-ը նյութական/ֆիզիկական միջոցն է, իսկ Código-ն նշանների և կանոնների համակարգը (լեզուն)։' },
      { id: 'b', textEs: 'El canal es la persona que habla y el código es quien escucha.', textHy: 'Canal-ը խոսողն է, իսկ Código-ն՝ լսողը։' },
      { id: 'c', textEs: 'Canal y código son términos sinónimos e intercambiables.', textHy: 'Դրանք հոմանիշներ են։' },
      { id: 'd', textEs: 'El canal solo existe en internet y el código solo en libros.', textHy: 'Canal-ը միայն ինտերնետում է, իսկ կոդը՝ գրքերում։' },
    ],
    correctAnswerEs: 'El canal es el soporte material/físico; el código es el sistema de signos y reglas.',
    correctAnswerHy: 'Canal-ը նյութական միջոցն է (օդ, լար, թուղթ, ցանց), իսկ Código-ն նշանների համակարգն է (լեզուն):',
    explanationEs: 'El CANAL transporta (soporte físico: ondas, cable, papel), mientras que el CÓDIGO codifica y descodifica el mensaje (idioma español, morse, etc.).',
    explanationHy: 'CANAL-ը ֆիզիկապես տեղափոխում է (օդ, մալուխ, թուղթ), իսկ CÓDIGO-ն կոդավորում է հաղորդագրությունը (իսպաներեն, հայերեն և այլն)։',
    keywordEs: 'Canal (soporte) vs Código (sistema de signos)',
    keywordHy: 'Canal (կրիչ/միջոց) ընդդեմ Código (նշանային համակարգ)',
    keywordsMatch: ['canal soporte', 'codigo sistema']
  },
  {
    id: 'exam-26',
    category: 'elementos',
    type: 'situation',
    questionEs: 'Un locutor de radio retransmite en directo el partido de fútbol para miles de oyentes. ¿Quién es el RECEPTOR?',
    questionHy: 'Ռադիոհաղորդավարը ուղիղ եթերում ֆուտբոլային խաղ է մեկնաբանում հազարավոր ունկնդիրների համար։ Ո՞վ է ՍՏԱՑՈՂԸ (receptor)։',
    situationEs: 'El locutor habla por la radio; miles de personas escuchan en sus casas y coches.',
    situationHy: 'Ռադիոհաղորդավարը խոսում է ռադիոյով, մարդիկ լսում են տներում։',
    options: [
      { id: 'a', textEs: 'Los oyentes que sintonizan la emisora', textHy: 'Ունկնդիրները / ռադիոլսողները (Los oyentes)' },
      { id: 'b', textEs: 'El aparato de radio', textHy: 'Ռադիոընդունիչը' },
      { id: 'c', textEs: 'El locutor deportivo', textHy: 'Հաղորդավարը' },
      { id: 'd', textEs: 'Los jugadores en el campo', textHy: 'Դաշտի ֆուտբոլիստները' },
    ],
    correctAnswerEs: 'Los oyentes (audiencia)',
    correctAnswerHy: 'Ունկնդիրները / լսարանը (Los oyentes)',
    explanationEs: 'Los receptores son el público colectivo que recibe y comprende el mensaje a través de sus receptores de radio.',
    explanationHy: 'Ստացողները (receptor) ունկնդիրներն են, ովքեր ընկալում են հաղորդագրությունը։',
    keywordEs: 'Receptor = los oyentes',
    keywordHy: 'Receptor = ունկնդիրներ',
    keywordsMatch: ['oyentes', 'publico', 'audiencia']
  },

  // ------------------------------------------
  // PARTE 4: TRADUCCIÓN ARMENIO → ESPAÑOL (4 preguntas)
  // ------------------------------------------
  {
    id: 'exam-27',
    category: 'traduccion',
    type: 'open',
    questionEs: 'Traduce al español: «"Ես շատ ուրախ եմ" նախադասության մեջ գերակշռում է զգացմունքային գործառույթը»։',
    questionHy: 'Թարգմանիր իսպաներեն. «"Ես շատ ուրախ եմ" նախադասության մեջ գերակշռում է զգացմունքային գործառույթը»։',
    phraseHy: '«Ես շատ ուրախ եմ» նախադասության մեջ գերակշռում է զգացմունքային գործառույթը։',
    options: [
      { id: 'a', textEs: 'En la oración «Estoy muy feliz» predomina la función expresiva o emotiva.', textHy: 'En la oración «Estoy muy feliz» predomina la función expresiva o emotiva.' },
      { id: 'b', textEs: 'En la frase «Soy muy feliz» domina función de emoción.', textHy: 'Սխալ՝ soy muy feliz և բառային անճշտություն' },
      { id: 'c', textEs: 'Para decir «Estoy muy contento» la función es apelativa.', textHy: 'Սխալ տեսակ' },
      { id: 'd', textEs: '«Estoy feliz» tiene la función poética.', textHy: 'Սխալ' },
    ],
    correctAnswerEs: 'En la oración «Estoy muy feliz» predomina la función expresiva o emotiva.',
    correctAnswerHy: 'En la oración «Estoy muy feliz» predomina la función expresiva o emotiva. (կամ: En la frase «Estoy muy contento/alegre»...)',
    explanationEs: '«Predomina» (գերակշռում է) se combina con «la función expresiva o emotiva» (զգացմունքային գործառույթ). Para estados emocionales temporales se usa el verbo «estar» («estoy muy feliz»).',
    explanationHy: '«Գերակշռում է» թարգմանվում է «predomina», «զգացմունքային գործառույթ»՝ «la función expresiva o emotiva»: Զգացմունքային վիճակների համար օգտագործվում է «estar» բայը («estoy muy feliz/alegre»)։',
    keywordEs: 'predomina la función expresiva',
    keywordHy: 'predomina la función expresiva',
    keywordsMatch: ['en la oracion estoy muy feliz predomina la funcion expresiva', 'estoy muy feliz predomina la funcion expresiva o emotiva']
  },
  {
    id: 'exam-28',
    category: 'traduccion',
    type: 'open',
    questionEs: 'Traduce al español: «"Միգուցե նա տանն է" կասկած արտահայտող նախադասություն է»։',
    questionHy: 'Թարգմանիր իսպաներեն. «"Միգուցե նա տանն է" կասկած արտահայտող նախադասություն է»։',
    phraseHy: '«Միգուցե նա տանն է» կասկած արտահայտող նախադասություն է։',
    options: [
      { id: 'a', textEs: '«Quizá esté en casa» es una oración dubitativa.', textHy: '«Quizá esté en casa» es una oración dubitativa. (կամ «Tal vez esté en casa»)' },
      { id: 'b', textEs: '«Puede ser él está en casa» es oración de duda.', textHy: 'Քերականորեն սխալ ձևակերպում' },
      { id: 'c', textEs: '«Ojalá esté en casa» es dubitativa.', textHy: 'Սխալ՝ ojalá նշանակում է երանի (desiderativa)' },
      { id: 'd', textEs: '«Quizás está casa» es desiderativa.', textHy: 'Սխալ' },
    ],
    correctAnswerEs: '«Quizá esté en casa» es una oración dubitativa.',
    correctAnswerHy: '«Quizá esté en casa» es una oración dubitativa. (կամ: «Tal vez esté en casa» es una oración dubitativa.)',
    explanationEs: '«Միգուցե նա տանն է» = «Quizá esté en casa». «Կասկած արտահայտող նախադասություն» = «oración dubitativa».',
    explanationHy: '«Միգուցե նա տանն է» թարգմանվում է «Quizá/Tal vez esté en casa» (subjuntivo-ով): «Կասկած արտահայտող նախադասություն» տերմինն է «oración dubitativa»: ',
    keywordEs: 'oración dubitativa / Quizá esté en casa',
    keywordHy: 'oración dubitativa / Quizá esté en casa',
    keywordsMatch: ['quiza este en casa es una oracion dubitativa', 'tal vez este en casa es una oracion dubitativa']
  },
  {
    id: 'exam-29',
    category: 'traduccion',
    type: 'open',
    questionEs: 'Traduce al español: «Հաղորդագրություն ստացող մարդը կոչվում է receptor»։',
    questionHy: 'Թարգմանիր իսպաներեն. «Հաղորդագրություն ստացող մարդը կոչվում է receptor»։',
    phraseHy: 'Հաղորդագրություն ստացող մարդը կոչվում է receptor։',
    options: [
      { id: 'a', textEs: 'La persona que recibe el mensaje se llama receptor.', textHy: 'La persona que recibe el mensaje se llama receptor.' },
      { id: 'b', textEs: 'El hombre que toma la carta es receptor.', textHy: 'Սխալ բառապաշար' },
      { id: 'c', textEs: 'Persona recibiendo mensaje llamada emisor.', textHy: 'Սխալ հասկացություն (emisor)' },
      { id: 'd', textEs: 'Quien envía el mensaje es el receptor.', textHy: 'Սխալ՝ ուղարկողը emisor-ն է' },
    ],
    correctAnswerEs: 'La persona que recibe el mensaje se llama receptor.',
    correctAnswerHy: 'La persona que recibe el mensaje se llama receptor.',
    explanationEs: '«Հաղորդագրություն ստացող մարդը» = «La persona que recibe el mensaje». «Կոչվում է» = «se llama».',
    explanationHy: '«Հաղորդագրություն ստացող մարդը» = «La persona que recibe el mensaje», «կոչվում է» = «se llama receptor»: ',
    keywordEs: 'La persona que recibe el mensaje se llama receptor',
    keywordHy: 'La persona que recibe el mensaje se llama receptor',
    keywordsMatch: ['la persona que recibe el mensaje se llama receptor']
  },
  {
    id: 'exam-30',
    category: 'traduccion',
    type: 'open',
    questionEs: 'Traduce al español: «WhatsApp-ը հաղորդակցման միջոց է (canal), իսկ իսպաներենը՝ կոդ (código)»։',
    questionHy: 'Թարգմանիր իսպաներեն. «WhatsApp-ը հաղորդակցման միջոց է (canal), իսկ իսպաներենը՝ կոդ (código)»։',
    phraseHy: 'WhatsApp-ը հաղորդակցման միջոց է (canal), իսկ իսպաներենը՝ կոդ (código)։',
    options: [
      { id: 'a', textEs: 'WhatsApp es el canal de comunicación y el español es el código.', textHy: 'WhatsApp es el canal de comunicación y el español es el código.' },
      { id: 'b', textEs: 'WhatsApp es código y español es canal.', textHy: 'Սխալ՝ շփոթված են տերմինները' },
      { id: 'c', textEs: 'WhatsApp es el mensaje y español el receptor.', textHy: 'Սխալ' },
      { id: 'd', textEs: 'WhatsApp es el contexto y español el emisor.', textHy: 'Սխալ' },
    ],
    correctAnswerEs: 'WhatsApp es el canal de comunicación y el español es el código.',
    correctAnswerHy: 'WhatsApp es el canal de comunicación y el español es el código. (կամ: WhatsApp es el canal y el español es el código.)',
    explanationEs: 'Distingue claramente el medio técnico de transporte (canal) del sistema lingüístico de signos (código).',
    explanationHy: 'Հստակ տարբերակում է տեխնիկական փոխանցման միջոցը (canal) նշանային համակարգից (código)։',
    keywordEs: 'WhatsApp es el canal y el español es el código',
    keywordHy: 'WhatsApp-ը canal է, իսպաներենը՝ código',
    keywordsMatch: ['whatsapp es el canal y el espanol es el codigo', 'whatsapp es el canal y el español es el código']
  }
];

// ==========================================
// RESUMEN TEÓRICO COMPLETO (BILINGÜE ES / HY)
// Quick reference cards with click-to-translate
// ==========================================
export interface TheoryItem {
  nameEs: string;
  nameHy: string;
  focusEs: string;
  focusHy: string;
  descEs: string;
  descHy: string;
  examplesEs: string[];
  examplesHy: string[];
  keywords: string[];
}

export const TEORIA_FUNCIONES: TheoryItem[] = [
  {
    nameEs: '1. Función referencial o representativa',
    nameHy: '1. Տեղեկատվական / ներկայացուցչական գործառույթ',
    focusEs: 'Contexto o Referente (la realidad objetiva)',
    focusHy: 'Համատեքստ կամ իրականություն (օբյեկտիվ փաստ)',
    descEs: 'Transmite información objetiva sobre hechos comprobables, datos de la realidad o conocimientos científicos sin emitir juicios de valor ni sentimientos.',
    descHy: 'Հաղորդում է օբյեկտիվ տեղեկատվություն փաստերի, իրականության կամ գիտական գիտելիքների մասին՝ առանց անձնական գնահատականների կամ զգացմունքների։',
    examplesEs: ['Madrid es la capital de España.', 'El agua hierve a 100°C.', 'Hoy es jueves 1 de octubre.'],
    examplesHy: ['Մադրիդը Իսպանիայի մայրաքաղաքն է։', 'Ջուրը եռում է 100°C-ում։', 'Այսօր հինգշաբթի է, հոկտեմբերի 1-ը։'],
    keywords: ['Objetividad', 'Datos reales', 'Modo indicativo']
  },
  {
    nameEs: '2. Función expresiva o emotiva',
    nameHy: '2. Զգացմունքային / արտահայտչական գործառույթ',
    focusEs: 'Emisor (quien habla)',
    focusHy: 'Ուղարկող / խոսող (ով խոսում է)',
    descEs: 'Expresa los sentimientos, emociones, dolor, alegría o la opinión subjetiva del hablante.',
    descHy: 'Արտահայտում է խոսողի զգացմունքները, հույզերը, ցավը, ուրախությունը կամ սուբյեկտիվ կարծիքը։',
    examplesEs: ['¡Qué alegría verte!', 'Me duele muchísimo la cabeza.', '¡Qué frío hace aquí! (sensación propia)'],
    examplesHy: ['Որքա՜ն ուրախ եմ քեզ տեսնել։', 'Գլուխս սաստիկ ցավում է։', 'Ինչպիսի՜ ցուրտ է այստեղ (անձնական զգացողություն)։'],
    keywords: ['Subjetividad', 'Entonación exclamativa', 'Interjecciones']
  },
  {
    nameEs: '3. Función apelativa o conativa',
    nameHy: '3. Դիմողական / ազդեցության գործառույթ',
    focusEs: 'Receptor (a quien se dirige)',
    focusHy: 'Ստացող / լսող (ում ուղղված է խոսքը)',
    descEs: 'Pretende influir en el receptor para que actúe, responda, haga algo o cambie de conducta mediante órdenes, ruegos, preguntas o llamadas.',
    descHy: 'Նպատակ ունի ազդել լսողի վրա, որպեսզի նա գործի, պատասխանի, ինչ-որ բան անի կամ փոխի վարքը՝ հրամանների, խնդրանքների կամ հարցերի միջոցով։',
    examplesEs: ['¡Cierra la puerta!', 'Carlos, ven aquí un momento.', '¿Me pasas la sal, por favor?'],
    examplesHy: ['Փակի՛ր դուռը։', 'Կառլոս, արի այստեղ մի պահ։', 'Խնդրում եմ, կփոխանցե՞ս աղը։'],
    keywords: ['Imperativo', 'Vocativos', 'Preguntas exhortativas']
  },
  {
    nameEs: '4. Función fática o de contacto',
    nameHy: '4. Կապ հաստատող կամ պահպանող գործառույթ',
    focusEs: 'Canal (el medio de transmisión)',
    focusHy: 'Ալիք / կապի միջոց (փոխանցման միջոցը)',
    descEs: 'Sirve para iniciar, verificar, mantener o interrumpir el canal de comunicación entre los interlocutores.',
    descHy: 'Ծառայում է հաղորդակցման ալիքը սկսելուն, ստուգելուն, պահպանելուն կամ ընդհատելուն։',
    examplesEs: ['¿Diga? ¿Hola?', '¿Me escuchas bien?', 'Buenas tardes a todos.', 'Adiós, hasta mañana.'],
    examplesHy: ['Ալո՞, բարև՞։', 'Լա՞վ ես ինձ լսում։', 'Բարի կեսօր բոլորին։', 'Ցտեսություն, մինչ վաղը։'],
    keywords: ['Saludos', 'Despedidas', 'Verificar si se oye']
  },
  {
    nameEs: '5. Función metalingüística',
    nameHy: '5. Մետալեզվական գործառույթ',
    focusEs: 'Código (el propio idioma)',
    focusHy: 'Կոդ (հենց լեզուն)',
    descEs: 'Se utiliza el lenguaje para hablar sobre el propio lenguaje: definir palabras, explicar gramática, reglas de acentuación o significado.',
    descHy: 'Լեզուն օգտագործվում է հենց լեզվի մասին խոսելու համար՝ բառերի բացատրություն, քերականություն, շեշտադրության կանոններ կամ իմաստ։',
    examplesEs: ['"Perro" es un sustantivo masculino.', 'La palabra "árbol" lleva tilde porque es llana terminada en l.', '¿Qué significa "efímero"?'],
    examplesHy: ['«Perro»-ն արական գոյական է։', '«Árbol» բառը շեշտ ունի, քանի որ l-ով ավարտվող llana բառ է։', 'Ի՞նչ է նշանակում «efímero»:'],
    keywords: ['Gramática', 'Diccionario', 'Ortografía']
  },
  {
    nameEs: '6. Función poética o estética',
    nameHy: '6. Գեղարվեստական / բանաստեղծական գործառույթ',
    focusEs: 'Mensaje (la forma del texto)',
    focusHy: 'Հաղորդագրություն (խոսքի գեղագիտական ձևը)',
    descEs: 'Llama la atención sobre la propia forma y belleza estética del mensaje a través de recursos literarios, rima, metáforas, ritmo y juegos de palabras.',
    descHy: 'Ուշադրություն է հրավիրում հաղորդագրության գեղագիտական ձևի ու գեղեցկության վրա՝ գրական հնարքների, հանգի, փոխաբերությունների և ռիթմի միջոցով։',
    examplesEs: ['Caminante, no hay camino, se hace camino al andar.', 'Sus labios eran rojos como rubíes.', 'A quien madruga, Dios le ayuda.'],
    examplesHy: ['Ճամփորդ, ճանապարհ չկա, ճանապարհը հարթվում է քայլելիս։', 'Նրա շուրթերը սուտակի պես կարմիր էին։', 'Վաղ արթնացողին Աստված է օգնում։'],
    keywords: ['Metáforas', 'Rima', 'Literatura', 'Refranes']
  }
];

export const TEORIA_MODALIDADES: TheoryItem[] = [
  {
    nameEs: '1. Enunciativa (Afirmativa / Negativa)',
    nameHy: '1. Պատմողական (հաստատական / ժխտական)',
    focusEs: 'Transmisión neutra de hechos',
    focusHy: 'Փաստերի չեզոք հաղորդում',
    descEs: 'El hablante informa de un hecho de manera objetiva afirmándolo o negándolo sin marcas subjetivas.',
    descHy: 'Խոսողն օբյեկտիվորեն տեղեկացնում է փաստի մասին՝ հաստատելով կամ ժխտելով այն։',
    examplesEs: ['Hoy hace frío. (afirmativa)', 'No ha llegado el paquete todavía. (negativa)'],
    examplesHy: ['Այսօր ցուրտ է։ (հաստատական)', 'Ծանրոցը դեռ չի հասել։ (ժխտական)'],
    keywords: ['Indicativo', 'No', 'Nunca', 'Tampoco']
  },
  {
    nameEs: '2. Interrogativa (Directa / Indirecta)',
    nameHy: '2. Հարցական (ուղղակի / անուղղակի)',
    focusEs: 'Búsqueda de información',
    focusHy: 'Տեղեկության որոնում',
    descEs: 'El hablante solicita información al oyente. Directa: con signos ¿?...? Indirecta: subordinada sin signos (ej. «Me pregunto dónde vives»).',
    descHy: 'Խոսողը տեղեկություն է ակնկալում լսողից։ Ուղղակի՝ ¿?...? նշաններով։ Անուղղակի՝ ստորադաս նախադասությամբ առանց հարցական նշանների։',
    examplesEs: ['¿Dónde vives? (directa)', 'Me pregunto a qué hora llega el tren. (indirecta)'],
    examplesHy: ['Որտե՞ղ ես ապրում։ (ուղղակի)', 'Հետաքրքիր է՝ երբ կհասնի գնացքը։ (անուղղակի)'],
    keywords: ['¿Qué?', '¿Quién?', '¿Dónde?', '¿Cuándo?']
  },
  {
    nameEs: '3. Exclamativa',
    nameHy: '3. Բացականչական',
    focusEs: 'Intensidad afectiva',
    focusHy: 'Զգացմունքային լարվածություն',
    descEs: 'Expresa sorpresa, emoción, entusiasmo o asombro con entonación marcada y signos ¡!...!',
    descHy: 'Արտահայտում է զարմանք, ոգևորություն, հիացմունք կամ ապշանք՝ բացականչական նշաններով ¡!...!',
    examplesEs: ['¡Qué bonito!', '¡Vaya susto que nos dimos!', '¡Qué alegría tenerte aquí!'],
    examplesHy: ['Որքա՜ն գեղեցիկ է։', 'Ի՜նչ վախեցանք։', 'Ի՜նչ մեծ ուրախություն է քեզ տեսնելը։'],
    keywords: ['¡Qué...!', '¡Cuánto...!', 'Signos ¡!']
  },
  {
    nameEs: '4. Exhortativa o imperativa',
    nameHy: '4. Հրամայական կամ հորդորական',
    focusEs: 'Mandato, ruego o prohibición',
    focusHy: 'Հրաման, խնդրանք կամ արգելք',
    descEs: 'El emisor ordena, ruega, aconseja o prohíbe algo al receptor. Utiliza imperativo (afirmativo) o subjuntivo (negativo).',
    descHy: 'Խոսողը հրամայում, խնդրում, խորհուրդ է տալիս կամ արգելում է դիմացինին։ Օգտագործվում է imperativo կամ subjuntivo:',
    examplesEs: ['Cierra la puerta.', 'Por favor, siéntate.', 'No toques eso.'],
    examplesHy: ['Փակի՛ր դուռը։', 'Խնդրում եմ, նստի՛ր։', 'Ձեռք մի՛ տուր դրան։'],
    keywords: ['Imperativo', 'Por favor', 'No + subjuntivo']
  },
  {
    nameEs: '5. Desiderativa (Optativa)',
    nameHy: '5. Ցանկություն արտահայտող',
    focusEs: 'Deseo o anhelo del emisor',
    focusHy: 'Խոսողի ցանկությունը կամ իղձը',
    descEs: 'Expresa el deseo ferviente de que ocurra algo. Va siempre en subjuntivo.',
    descHy: 'Արտահայտում է ինչ-որ բանի կատարման սրտանց ցանկություն։ Բայը միշտ subjuntivo-ով է։',
    examplesEs: ['Ojalá venga mañana.', 'Ojalá tengamos vacaciones.', '¡Que tengas buen viaje!'],
    examplesHy: ['Երանի վաղը գա։', 'Տա Աստված արձակուրդ ունենանք։', 'Բարի՛ ճանապարհ։'],
    keywords: ['Ojalá', 'Que + subjuntivo', 'Así Dios quiera']
  },
  {
    nameEs: '6. Dubitativa',
    nameHy: '6. Կասկած կամ հավանականություն արտահայտող',
    focusEs: 'Duda, conjetura o probabilidad',
    focusHy: 'Կասկած, ենթադրություն կամ հավանականություն',
    descEs: 'Manifiesta incertidumbre, suposición o probabilidad sobre un hecho.',
    descHy: 'Ցույց է տալիս անորոշություն, ենթադրություն կամ հավանականություն։',
    examplesEs: ['Quizá esté en casa.', 'Tal vez venga después.', 'A lo mejor ya han llegado.'],
    examplesHy: ['Գուցե նա տանն է։', 'Միգուցե հետո գա։', 'Երևի նրանք արդեն հասել են։'],
    keywords: ['Quizá(s)', 'Tal vez', 'A lo mejor', 'Probablemente']
  }
];

export const TEORIA_ELEMENTOS: TheoryItem[] = [
  {
    nameEs: '1. Emisor',
    nameHy: '1. Ուղարկող (Emisor)',
    focusEs: 'Origen del mensaje',
    focusHy: 'Հաղորդագրության աղբյուրը',
    descEs: 'Sujeto que codifica, produce y emite el mensaje.',
    descHy: 'Անձը կամ սուբյեկտը, ով կոդավորում, ստեղծում և հաղորդում է հաղորդագրությունը։',
    examplesEs: ['Ana llamando por teléfono.', 'El locutor en la radio.', 'El profesor en clase.'],
    examplesHy: ['Անան, երբ զանգում է հեռախոսով։', 'Ռադիոհաղորդավարը։', 'Ուսուցիչը դասարանում։'],
    keywords: ['Produce', 'Codifica', 'Transmite']
  },
  {
    nameEs: '2. Receptor',
    nameHy: '2. Ստացող (Receptor)',
    focusEs: 'Destinatario del mensaje',
    focusHy: 'Հաղորդագրության հասցեատերը',
    descEs: 'Sujeto que recibe y descodifica el mensaje para interpretarlo.',
    descHy: 'Անձը կամ սուբյեկտը, ով ընդունում և վերծանում է հաղորդագրությունը։',
    examplesEs: ['Carlos al escuchar a Ana.', 'Los oyentes de la radio.', 'Los alumnos del aula.'],
    examplesHy: ['Կառլոսը, երբ լսում է Անային։', 'Ռադիոլսողները։', 'Դասարանի աշակերտները։'],
    keywords: ['Recibe', 'Descodifica', 'Interpreta']
  },
  {
    nameEs: '3. Mensaje',
    nameHy: '3. Հաղորդագրություն (Mensaje)',
    focusEs: 'Contenido informativo',
    focusHy: 'Տեղեկատվական բովանդակությունը',
    descEs: 'La información, idea, emoción o dato concreto que se transmite.',
    descHy: 'Տեղեկությունը, միտքը, հույզը կամ փաստը, որը փոխանցվում է։',
    examplesEs: ['«Llegaré a casa a las ocho».', '«Prohibido fumar».', '«¿Compraste el pan?».'],
    examplesHy: ['«Ես տուն կհասնեմ ժամը ութին»։', '«Ծխելն արգելվում է»։', '«Հացը գնեցի՞ր»։'],
    keywords: ['Contenido', 'Texto', 'Idea']
  },
  {
    nameEs: '4. Canal (¡Soporte físico!)',
    nameHy: '4. Ալիք / Կապի միջոց (Canal - ֆիզիկական կրիչ)',
    focusEs: 'Medio físico / material',
    focusHy: 'Ֆիզիկական / նյութական միջոց',
    descEs: 'El soporte material o técnico por el que viaja la señal: teléfono, ondas sonoras, aire, papel, internet, WhatsApp.',
    descHy: 'Նյութական կամ տեխնիկական միջոցը, որով շարժվում է ազդանշանը՝ հեռախոս, ձայնային ալիքներ, օդ, թուղթ, ինտերնետ, WhatsApp:',
    examplesEs: ['Línea telefónica en una llamada.', 'El aire en una conversación cara a cara.', 'El cartel impreso.', 'La red / WhatsApp.'],
    examplesHy: ['Հեռախոսակապը զանգի ժամանակ։', 'Օդը դեմ առ դեմ խոսելիս։', 'Տպագիր պաստառը։', 'Համացանցը / WhatsApp-ը։'],
    keywords: ['Aire', 'Teléfono', 'Papel', 'Cable', 'Internet']
  },
  {
    nameEs: '5. Código (¡Sistema de signos!)',
    nameHy: '5. Կոդ (Código - նշանների համակարգ / լեզու)',
    focusEs: 'Idioma o signos convencionales',
    focusHy: 'Լեզու կամ պայմանական նշաններ',
    descEs: 'El sistema de signos y reglas gramaticales conocido por emisor y receptor: español, armenio, código morse, señales de tráfico.',
    descHy: 'Նշանների և քերականական կանոնների համակարգը, որը հայտնի է ուղարկողին և ստացողին՝ իսպաներեն, հայերեն, մորզեի կոդ, ճանապարհային նշաններ։',
    examplesEs: ['El idioma español.', 'El idioma armenio.', 'Los colores del semáforo (rojo/verde).'],
    examplesHy: ['Իսպաներեն լեզուն։', 'Հայերեն լեզուն։', 'Լուսացույցի գույները (կարմիր/կանաչ)։'],
    keywords: ['Español', 'Armenio', 'Signos', 'Gramática']
  },
  {
    nameEs: '6. Contexto o Situación',
    nameHy: '6. Համատեքստ կամ Իրավիճակ (Contexto)',
    focusEs: 'Circunstancias espacio-temporales',
    focusHy: 'Տարածաժամանակային հանգամանքներ',
    descEs: 'El entorno temporal, geográfico, cultural y situacional que rodea la comunicación y permite entender el verdadero sentido del mensaje.',
    descHy: 'Ժամանակային, աշխարհագրական, մշակութային և իրավիճակային միջավայրը, որը շրջապատում է խոսքը և թույլ տալիս հասկանալ դրա բուն իմաստը։',
    examplesEs: ['Llamada telefónica a última hora del día.', 'Una clase en un instituto de Madrid.', 'Un andén del metro lleno de viajeros.'],
    examplesHy: ['Հեռախոսազանգ օրվա վերջում։', 'Դաս Մադրիդի ավագ դպրոցում։', 'Մետրոյի կառամատույց՝ լի ուղևորներով։'],
    keywords: ['Lugar', 'Momento', 'Relación social']
  }
];

// Helper to provide 5 targeted follow-up questions after the exam based on weak areas
export const TARGETED_PRACTICE_QUESTIONS: Record<string, Question[]> = {
  funciones: [
    {
      id: 'target-func-1',
      category: 'funciones',
      type: 'multiple_choice',
      questionEs: '«¡Qué calor insoportable!» ¿Cuál es la función principal y por qué no es referencial ni apelativa?',
      questionHy: '«¡Qué calor insoportable!» (Ինչպիսի՜ անտանելի շոգ)։ Ո՞րն է գլխավոր գործառույթը և ինչո՞ւ չէ տեղեկատվական կամ դիմողական։',
      options: [
        { id: 'a', textEs: 'Expresiva: el emisor comparte su vivencia subjetiva y agobio.', textHy: 'Expresiva (զգացմունքային)՝ խոսողը կիսվում է իր սուբյեկտիվ զգացողությամբ։' },
        { id: 'b', textEs: 'Apelativa: porque lleva signos de admiración.', textHy: 'Apelativa՝ որովհետև բացականչական նշաններ ունի։' },
        { id: 'c', textEs: 'Referencial: porque habla del clima.', textHy: 'Referencial՝ որովհետև եղանակից է խոսում։' },
        { id: 'd', textEs: 'Metalingüística: analiza la palabra calor.', textHy: 'Մետալեզվական' },
      ],
      correctAnswerEs: 'Expresiva: el emisor comparte su vivencia subjetiva y agobio.',
      correctAnswerHy: 'Expresiva (զգացմունքային)՝ խոսողը կիսվում է իր սուբյեկտիվ զգացողությամբ։',
      explanationEs: 'La función expresiva pone el foco en el emisor. El adjetivo valorativo «insoportable» refleja una vivencia personal subjetiva.',
      explanationHy: 'Զգացմունքային (expresiva) գործառույթը կենտրոնանում է խոսողի վրա։ «Insoportable» (անտանելի) բառը ցույց է տալիս սուբյեկտիվ վերաբերմունք։',
      keywordEs: 'Expresiva / Adjetivo valorativo',
      keywordHy: 'Expresiva / գնահատողական ածական'
    },
    {
      id: 'target-func-2',
      category: 'funciones',
      type: 'multiple_choice',
      questionEs: '«La palabra "murciélago" contiene las cinco vocales.» ¿Qué función del lenguaje es?',
      questionHy: '«"Murciélago" բառը պարունակում է բոլոր հինգ ձայնավորները»։ Լեզվի ո՞ր գործառույթն է։',
      options: [
        { id: 'a', textEs: 'Función metalingüística (analiza la palabra como signo)', textHy: 'Մետալեզվական (Función metalingüística)' },
        { id: 'b', textEs: 'Función referencial sobre zoología', textHy: 'Կենդանաբանական տեղեկություն' },
        { id: 'c', textEs: 'Función poética', textHy: 'Բանաստեղծական' },
        { id: 'd', textEs: 'Función fática', textHy: 'Կապ հաստատող' },
      ],
      correctAnswerEs: 'Función metalingüística (analiza la palabra como signo)',
      correctAnswerHy: 'Մետալեզվական գործառույթ (Función metalingüística)',
      explanationEs: 'Se habla de las letras que componen una palabra de la propia lengua española (el código).',
      explanationHy: 'Խոսվում է հենց լեզվի (կոդի) բառի կազմության մասին։',
      keywordEs: 'Metalingüística / Código',
      keywordHy: 'Մետալեզվական / Կոդ'
    }
  ],
  modalidades: [
    {
      id: 'target-mod-1',
      category: 'modalidades',
      type: 'multiple_choice',
      questionEs: '«Ojalá apruebe el examen.» ¿Qué modo verbal exige la modalidad desiderativa con «Ojalá»?',
      questionHy: '«Ojalá apruebe el examen»։ Ի՞նչ բայական եղանակ է պահանջում ցանկություն արտահայտող (desiderativa) տեսակը «Ojalá»-ի հետ։',
      options: [
        { id: 'a', textEs: 'Modo Subjuntivo (apruebe)', textHy: 'Subjuntivo եղանակ (apruebe)' },
        { id: 'b', textEs: 'Modo Indicativo (aprueba)', textHy: 'Indicativo եղանակ' },
        { id: 'c', textEs: 'Modo Imperativo directo', textHy: 'Հրամայական եղանակ' },
        { id: 'd', textEs: 'Infinitivo simple', textHy: 'Անորոշ ձև' },
      ],
      correctAnswerEs: 'Modo Subjuntivo (apruebe)',
      correctAnswerHy: 'Modo Subjuntivo (apruebe)',
      explanationEs: '«Ojalá» siempre rige verbos en modo subjuntivo para denotar anhelo o deseo.',
      explanationHy: '«Ojalá»-ն միշտ պահանջում է subjuntivo եղանակ՝ ցանկություն արտահայտելու համար։',
      keywordEs: 'Ojalá + subjuntivo',
      keywordHy: 'Ojalá + subjuntivo'
    },
    {
      id: 'target-mod-2',
      category: 'modalidades',
      type: 'multiple_choice',
      questionEs: '«Quizás vengan mañana» frente a «Ven mañana». ¿Cuál es la diferencia de modalidad?',
      questionHy: '«Quizás vengan mañana» ընդդեմ «Ven mañana»։ Ո՞րն է նախադասությունների տեսակի տարբերությունը։',
      options: [
        { id: 'a', textEs: '«Quizás vengan» es Dubitativa (duda) y «Ven» es Exhortativa (orden).', textHy: '«Quizás vengan»-ը Dubitativa է (կասկած), իսկ «Ven»-ը՝ Exhortativa (հրաման)։' },
        { id: 'b', textEs: 'Ambas son Desiderativas.', textHy: 'Երկուսն էլ desiderativa են։' },
        { id: 'c', textEs: 'Ambas son Enunciativas.', textHy: 'Երկուսն էլ enunciativa են։' },
        { id: 'd', textEs: '«Quizás vengan» es Exhortativa y «Ven» es Dubitativa.', textHy: 'Հակառակն է։' },
      ],
      correctAnswerEs: '«Quizás vengan» es Dubitativa (duda) y «Ven» es Exhortativa (orden).',
      correctAnswerHy: '«Quizás vengan»-ը Dubitativa է (կասկած), իսկ «Ven»-ը՝ Exhortativa (հրաման)։',
      explanationEs: '«Quizás» introduce conjetura o probabilidad (dubitativa), mientras que «Ven» es un mandato directo al receptor (exhortativa).',
      explanationHy: '«Quizás»-ը կասկած է մտցնում (dubitativa), իսկ «Ven»-ը ուղիղ հրաման է լսողին (exhortativa)։',
      keywordEs: 'Dubitativa vs Exhortativa',
      keywordHy: 'Կասկած ընդդեմ Հրամանի'
    }
  ],
  elementos: [
    {
      id: 'target-elem-1',
      category: 'elementos',
      type: 'multiple_choice',
      questionEs: 'En una videollamada por Zoom entre un profesor y sus alumnos, ¿cuál es el CANAL?',
      questionHy: 'Ուսուցչի և աշակերտների միջև Zoom-ով տեսադասի ժամանակ ո՞րն է ՄԻՋՈՑԸ (canal)։',
      options: [
        { id: 'a', textEs: 'La red de internet, los dispositivos y la plataforma Zoom', textHy: 'Համացանցը, սարքավորումները և Zoom հարթակը (Canal)' },
        { id: 'b', textEs: 'La lengua española', textHy: 'Իսպաներեն լեզուն' },
        { id: 'c', textEs: 'El tema de la clase', textHy: 'Դասի թեման' },
        { id: 'd', textEs: 'Los apuntes de los estudiantes', textHy: 'Աշակերտների գրառումները' },
      ],
      correctAnswerEs: 'La red de internet, los dispositivos y la plataforma Zoom',
      correctAnswerHy: 'Համացանցը, էլեկտրոնային սարքերը և Zoom-ը (Canal)',
      explanationEs: 'El soporte técnico y tecnológico por el que viajan imagen y sonido es el canal. El idioma es el código.',
      explanationHy: 'Տեխնիկական միջոցը, որով փոխանցվում են պատկերն ու ձայնը, canal-ն է։ Իսպաներենը código-ն է։',
      keywordEs: 'Canal técnico vs Código lingüístico',
      keywordHy: 'Տեխնիկական միջոց (canal) vs Լեզու (código)'
    }
  ]
};
