const timelineData={
  "1953":{kicker:"До официального старта",title:"Спор о темпах распашки",text:"Жумабай Шаяхметов предупреждал о нехватке техники, транспорта, складов и специалистов, а также о риске утраты пастбищ для традиционного животноводства. Центр выбрал ускоренный сценарий.",source:"Основа: исследовательская работа, глава I"},
  "1954":{kicker:"Февраль — март",title:"Курс на массовое освоение",text:"Пленум ЦК КПСС закрепил курс на распашку целинных и залежных земель. Казахстан стал главным направлением кампании; в степь начали прибывать добровольцы, техника и специалисты.",source:"Основа: план урока и исследовательская работа"},
  "1955":{kicker:"Кадры и повседневность",title:"Приехать — не значит остаться",text:"В Павлодарскую область прибыли 15 660 механизаторов, но 4 907 человек уехали. Одной из главных причин текучести были нехватка капитального жилья и тяжёлые бытовые условия.",source:"Архивные данные, приведённые в плане урока"},
  "1956":{kicker:"План и реальность",title:"400 домов в плане — 49 построено",text:"К 20 октября в четырёх колхозах планировали построить 400 домов, фактически возвели 49. В то же время область наращивала производство и искала способы обеспечить новосёлов жильём и медициной.",source:"Архивный контраст из плана урока"},
  "1958":{kicker:"Социальная инфраструктура",title:"Медицина догоняет рост населения",text:"К концу года действовали 11 районных больниц на 505 коек, 76 участковых больниц на 1 130 мест и 190 фельдшерско-акушерских пунктов.",source:"Данные исследовательской работы"},
  "1960":{kicker:"Экономика и образование",title:"Рост производства и сети школ",text:"План по мясу был перевыполнен на 131,4%: сверх плана сдали 9 572 тонны. К 1960/61 учебному году работали 585 школ, где учились более 83 тысяч детей.",source:"Архивная статистика из плана урока"},
  "1963":{kicker:"Экологические последствия",title:"Пределы экстенсивной модели",text:"553 тысячи гектаров требовалось вывести из обработки; ещё 253,8 тысячи гектаров солончаков были распаханы ошибочно. Урожайность упала примерно до 3,9 центнера с гектара.",source:"Экологический блок плана урока"},
  "1967":{kicker:"Поиск решений",title:"Почвозащитные технологии",text:"После остановки масштабной ветровой эрозии к 1966 году в регионе продолжили искать способы закрепления почв. В 1967 году применялась смола «пэрозин».",source:"Материалы группы «Земля и природа»"}
};

const places=[
  {id:"pavlodar",type:"Областной центр",title:"Павлодар",text:"Административный и транспортный узел кампании. Рост населения усилил нагрузку на жильё, медицину, торговлю и образование.",fact:"К концу 1958 года медицинская сеть области значительно расширилась."},
  {id:"aksu",type:"Город на Иртыше",title:"Аксу",text:"В исследовании город фигурирует в связке аграрного освоения, энергетики и индустриального развития Прииртышья.",fact:"В советский период город носил название Ермак; в статистике 1962 года зафиксировано 27 неграмотных взрослых."},
  {id:"ekibastuz",type:"Промышленный центр",title:"Экибастуз",text:"Целинная кампания шла параллельно с развитием угольного бассейна и превращением региона в индустриально-аграрный центр.",fact:"Школа №1 сотрудничала с трестом «Иртышуголь» в рамках политехнического обучения."},
  {id:"zhelezinka",type:"Север области",title:"Железинский район",text:"Один из сельскохозяйственных районов, где освоение новых земель требовало кадров, техники, жилья и дорожной связи.",fact:"Северные районы особенно зависели от устойчивого снабжения и сезонной организации работ."},
  {id:"irtysh",type:"Сельскохозяйственный район",title:"Иртышский район",text:"Район вдоль Иртыша был включён в систему зернового производства и подготовки механизаторских кадров.",fact:"В Иртышском районе действовало профессионально-техническое училище сельскохозяйственного профиля."},
  {id:"sherbakty",type:"Восток области",title:"Щербактинский район",text:"Здесь история целины читается через совхозы, поля и развитие социальной инфраструктуры сельских поселений.",fact:"Щербактинский район вошёл в сеть сельских ПТУ, созданную для подготовки кадров."},
  {id:"maysky",type:"Юго-восток области",title:"Майский район",text:"Район напоминает, что природные условия области неоднородны и единая модель распашки имела разные последствия.",fact:"Майское райпо было одним из двух, выполнивших план товарооборота в 1956 году."},
  {id:"bayanaul",type:"Юг области",title:"Баянаульский район",text:"Горно-степной район показывает границу между земледельческим экспериментом, пастбищами и уязвимыми природными ландшафтами.",fact:"В 1962 году здесь учитывали 97 неграмотных взрослых, из них 63 женщины."}
];

const scenarios=[
  {scene:"Павлодарская область · весна 1955",title:"Вы прибыли механизатором. Постоянного жилья пока нет.",text:"Временное место есть в палатке при совхозе. Можно остаться и ждать строительства или уехать в другой регион.",options:[
    {label:"Остаться и вступить в строительную бригаду",delta:[12,3,0],feedback:"Многие новосёлы участвовали в строительстве сами. За 1956–1957 годы в области ввели 460 тыс. м² жилья, но темпы всё равно отставали от миграции."},
    {label:"Потребовать письменные гарантии и ждать",delta:[-2,12,0],feedback:"Формальные льготы распределялись неравномерно. Бесплатное жильё по ряду документов полагалось прежде всего руководителям и главным инженерам МТС."},
    {label:"Уехать",delta:[-8,5,0],feedback:"Это был распространённый выбор: из 15 660 прибывших в 1955 году механизаторов область покинули 4 907 человек."}]},
  {scene:"Целинное поле · засушливый сезон",title:"План требует распахать участок с признаками засоления.",text:"От выполнения нормы зависит отчёт хозяйства. Агроном предупреждает: почва может оказаться малопродуктивной.",options:[
    {label:"Выполнить план без задержки",delta:[6,-8,-15],feedback:"Форсированная распашка дала быстрый рост площадей, но часть земель оказалась низкоплодородной. В 1963 году 807 тыс. га требовали пересмотра использования."},
    {label:"Провести обследование почвы",delta:[-2,10,16],feedback:"Такой выбор снижает темп, но учитывает природные ограничения — именно их игнорирование усилило эрозию и потери плодородия."}]},
  {scene:"Районный клуб · 1956",title:"Перед вами два рассказа о строительстве.",text:"В воспоминании — улица домов за два месяца. В архиве — 49 построенных домов из 400 запланированных.",options:[
    {label:"Довериться яркому воспоминанию",delta:[3,-12,0],feedback:"Воспоминание передаёт личный опыт, но не обязательно отражает ситуацию во всех хозяйствах."},
    {label:"Считать верным только архив",delta:[0,4,0],feedback:"Архивная цифра важна, но и она отражает конкретные хозяйства, дату и административную задачу документа."},
    {label:"Сопоставить оба источника и контекст",delta:[4,16,2],feedback:"Исторический анализ начинается не с выбора «единственно правдивого» текста, а с вопросов об авторе, масштабе, цели и умолчаниях."}]},
  {scene:"Школьный разговор · сегодня",title:"Опрос показывает языковые различия. Как сформулировать вывод?",text:"58,5% чаще говорят дома по-русски, 79,2% — с друзьями и в соцсетях; 70,5% готовы чаще использовать казахский.",options:[
    {label:"Объявить это прямым последствием целины",delta:[0,-15,0],feedback:"Такой вывод слишком категоричен: выборка относится к одной школе и не доказывает причинность."},
    {label:"Назвать связь рабочей гипотезой",delta:[2,15,3],feedback:"Это корректная формулировка. Историческая миграция могла влиять на языковую среду, но гипотеза требует более широкой выборки и дополнительных данных."}]}
];

const lessonStages=[
  {time:"0–5 минут",title:"Почему источники противоречат друг другу?",html:"<p>Сопоставьте воспоминание о готовой улице домов и архивную справку: из 400 запланированных домов к 20 октября 1956 года построили 49.</p><h4>Вопрос классу</h4><p>Кто создал каждый источник, какую цель он мог преследовать и что осталось «за кадром»?</p>"},
  {time:"5–10 минут",title:"Коротко о начале кампании",html:"<p>Покажите на ленте времени Пленум ЦК КПСС 1954 года и позицию Жумабая Шаяхметова.</p><h4>Проверка понимания</h4><p>Чего опасались республиканские руководители перед массовой распашкой?</p>"},
  {time:"10–22 минут",title:"Четыре пакета источников",html:"<p>Разделите класс на группы: «Достижения», «Жильё и быт», «Земля и природа», «Люди и язык».</p><h4>Таблица анализа</h4><p>Факт → тип источника → чья позиция → что осталось за кадром.</p>"},
  {time:"22–32 минуты",title:"Что получил регион — и какой ценой?",html:"<p>Каждая группа выступает две минуты. На доске два столбца: «Что получил регион» и «Какой ценой».</p><h4>Задача слушателей</h4><p>Записать по одному уточняющему вопросу каждой группе.</p>"},
  {time:"32–38 минут",title:"Можно ли дать целине одну оценку?",html:"<p>Ответ строится по схеме: «Я считаю… потому что… (факт)… но стоит учесть…».</p><h4>Мини-викторина</h4><p>Перейдите к пяти вопросам ниже и обсудите пояснение после каждого ответа.</p>"},
  {time:"38–45 минут",title:"Личный вывод и рефлексия",html:"<p>Ученики пишут 2–3 предложения: «Целина для Прииртышья стала…».</p><h4>Домашнее задание</h4><p>Короткое интервью со старожилом или эссе «Что я узнал(а) о регионе впервые».</p>"}
];

const quizQuestions=[
  {q:"В каком году началась массовая кампания освоения целинных и залежных земель?",a:["1951","1954","1957","1960"],correct:1,why:"Февральско-мартовский Пленум ЦК КПСС 1954 года закрепил курс на массовую распашку."},
  {q:"Сколько гектаров требовалось вывести из обработки в 1963 году?",a:["49 тыс. га","253,8 тыс. га","553 тыс. га","807 тыс. га"],correct:2,why:"553 тыс. га требовали вывода из обработки; вместе с ошибочно распаханными солончаками проблемная площадь достигала 807 тыс. га."},
  {q:"Сколько школ работало в области к 1960/61 учебному году?",a:["190","334","505","585"],correct:3,why:"В 585 школах Павлодарской области обучалось более 83 тысяч детей."},
  {q:"Что показывает контраст: 400 домов в плане и 49 построенных?",a:["План был перевыполнен","Инфраструктура отставала от темпов кампании","Люди не нуждались в жилье","Строительство не планировалось"],correct:1,why:"Архивные данные показывают разрыв между планами и реальными возможностями строительства."},
  {q:"Как корректно использовать данные школьного языкового опроса?",a:["Как доказательство прямой причинности","Как данные обо всём Казахстане","Как иллюстрацию и основу для гипотезы","Их нельзя обсуждать"],correct:2,why:"Выборка одной школы иллюстративна. Связь с историческими изменениями можно обсуждать как рабочую гипотезу."}
];

const translations={ru:{menu:"Меню",'nav.chronicle':"Лента времени",'nav.archive':"Архив",'nav.map':"Карта",'nav.story':"Сценарий",'nav.lesson':"Урок",'nav.quiz':"Викторина",'hero.eyebrow':"Интерактивное учебное пособие · 1954–1960-е",'hero.title':"Степь, которая<br><em>изменила регион</em>",'hero.lead':"История освоения целины в Павлодарском Прииртышье — через даты, архивные документы, географию и судьбы людей.",'hero.start':"Начать исследование ", 'hero.about':"О проекте ",'results.title':"Главные выводы",'results.lead':"Целина в Прииртышье — не только история успеха, но и история выбора, условий и последствий, которые формируют регион сегодня.",'results.card1.title':"Масштаб",'results.card1.text':"Кампания изменила структуру земледелия, миграции, инфраструктуры и темпы роста региона за несколько лет.",'results.card2.title':"Цена",'results.card2.text':"Нарастали нагрузки на почву, жильё, образование и здоровье, а часть решений оказалась слишком жёсткой для местных условий.",'results.card3.title':"Память",'results.card3.text':"История сохраняется в архиве, воспоминаниях и языковых практиках, поэтому важно читать её не одной оценкой, а в контексте.",'results.cta.label':"Весь комплект материалов",'results.cta.title':"Подготовьте урок, лекцию или исследовательский проект.",'results.cta.button':"Скачать материалы"},kz:{menu:"Мәзір",'nav.chronicle':"Уақыт сызығы",'nav.archive':"Архив",'nav.map':"Карта",'nav.story':"Сценарий",'nav.lesson':"Сабақ",'nav.quiz':"Викторина",'hero.eyebrow':"Интерактивті оқу құралы · 1954–1960 жж.",'hero.title':"Дала, ол <em>аймақты өзгертті</em>",'hero.lead':"Павлодар Приіртышындағы тың игеру тарихы — күндер, мұрағат құжаттары, география және адамдардың тағдыры арқылы.",'hero.start':"Зерттеуді бастау ", 'hero.about':"Жоба туралы ",'results.title':"Негізгі қорытындылар",'results.lead':"Приіртыштағы целина — тек табыс тарихы ғана емес, ол аймақтың бүгінгі қалыптасуын анықтайтын таңдау, жағдайлар мен салдарлар тарихы.",'results.card1.title':"Масштаб",'results.card1.text':"Кампания бірнеше жыл ішінде өңірдің жер өңдеу, көші-қон, инфрақұрылым және даму қарқынын өзгертті.",'results.card2.title':"Құны",'results.card2.text':"Топырақ, тұрғын үй, білім және денсаулыққа жүктемелер өсті, ал кейбір шешімдер жергілікті жағдайға тым қатал болды.",'results.card3.title':"Естелік",'results.card3.text':"Тарих мұрағатта, естеліктерде және тілдік тәжірибеде сақталады, сондықтан оны бір көзқараспен емес, контекстпен оқу керек.",'results.cta.label':"Материалдардың барлығы",'results.cta.title':"Сабақ, лекция немесе зерттеу жобасын дайындаңыз.",'results.cta.button':"Материалдарды жүктеу"}};

const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('nav');
const langButtons=document.querySelectorAll('.language-switcher button');
function applyLanguage(lang){
  const current=translations[lang]||translations.ru;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(current[key]) {
      el.innerHTML=current[key];
    }
  });
  langButtons.forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
  document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru';
  try { localStorage.setItem('siteLanguage', lang); } catch (error) {}
}
langButtons.forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));
applyLanguage(localStorage.getItem('siteLanguage') || 'ru');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});nav.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')});

document.querySelectorAll('.timeline-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.timeline-tab').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');const d=timelineData[btn.dataset.year];document.querySelector('#timeline-year').textContent=btn.dataset.year;document.querySelector('#timeline-kicker').textContent=d.kicker;document.querySelector('#timeline-title').textContent=d.title;document.querySelector('#timeline-text').textContent=d.text;document.querySelector('#timeline-source').textContent=d.source}));

const docData={lesson:{type:"МЕТОДИЧЕСКИЙ МАТЕРИАЛ / PDF",title:"План урока краеведения",quote:"«Историка интересует не только что произошло, но и кто это написал и зачем».",pages:"5 страниц",src:"docs/lesson-plan.pdf"},stories:{type:"УСТНАЯ ИСТОРИЯ / PDF",title:"Глазами первоцелинников",quote:"Люди, труд и память об освоении целинных земель Казахстана.",pages:"6 страниц",src:"docs/stories.pdf"}};
document.querySelectorAll('button.archive-item').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('button.archive-item').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=docData[btn.dataset.doc];document.querySelector('#doc-type').textContent=d.type;document.querySelector('#doc-title').textContent=d.title;document.querySelector('#doc-quote').textContent=d.quote;document.querySelector('#doc-pages').textContent=d.pages;document.querySelector('#open-document').dataset.src=d.src}));
const dialog=document.querySelector('#document-dialog');document.querySelector('#open-document').addEventListener('click',e=>{document.querySelector('#document-frame').src=e.currentTarget.dataset.src;document.querySelector('#dialog-title').textContent=document.querySelector('#doc-title').textContent;dialog.showModal()});document.querySelector('#close-dialog').addEventListener('click',()=>{dialog.close();document.querySelector('#document-frame').src=''});dialog.addEventListener('click',e=>{if(e.target===dialog){dialog.close();document.querySelector('#document-frame').src=''}});

let placeIndex=0;function showPlace(i){placeIndex=(i+places.length)%places.length;const p=places[placeIndex];document.querySelector('#place-count').textContent=String(placeIndex+1).padStart(2,'0')+' / '+String(places.length).padStart(2,'0');document.querySelector('#place-type').textContent=p.type;document.querySelector('#place-title').textContent=p.title;document.querySelector('#place-text').textContent=p.text;document.querySelector('#place-fact').textContent=p.fact;document.querySelectorAll('.map-point').forEach(x=>x.classList.toggle('active',x.dataset.place===p.id))}document.querySelectorAll('.map-point').forEach(btn=>btn.addEventListener('click',()=>showPlace(places.findIndex(p=>p.id===btn.dataset.place))));document.querySelector('#place-prev').addEventListener('click',()=>showPlace(placeIndex-1));document.querySelector('#place-next').addEventListener('click',()=>showPlace(placeIndex+1));showPlace(0);

let scenarioIndex=0,stats=[50,50,50];function renderScenario(){const s=scenarios[scenarioIndex];document.querySelector('#scenario-step').textContent=`Ситуация ${scenarioIndex+1} из ${scenarios.length}`;document.querySelector('#scenario-progress').style.width=`${(scenarioIndex+1)/scenarios.length*100}%`;document.querySelector('#scenario-scene').textContent=s.scene;document.querySelector('#scenario-title').textContent=s.title;document.querySelector('#scenario-text').textContent=s.text;const wrap=document.querySelector('#scenario-options');wrap.innerHTML='';document.querySelector('#scenario-feedback').hidden=true;s.options.forEach((o,i)=>{const b=document.createElement('button');b.className='scenario-option';b.innerHTML=`<span>${o.label}</span><span>→</span>`;b.addEventListener('click',()=>chooseScenario(i));wrap.appendChild(b)})}function chooseScenario(i){const o=scenarios[scenarioIndex].options[i];stats=stats.map((v,j)=>Math.max(0,Math.min(99,v+o.delta[j])));['resilience','critical','land'].forEach((id,j)=>document.querySelector('#stat-'+id).textContent=stats[j]);document.querySelectorAll('.scenario-option').forEach(x=>x.disabled=true);const f=document.querySelector('#scenario-feedback');f.hidden=false;f.innerHTML=`<strong>Исторический контекст</strong>${o.feedback}<br><button class="button button-dark scenario-next" type="button">${scenarioIndex===scenarios.length-1?'Завершить сценарий':'Следующая ситуация →'}</button>`;f.querySelector('button').addEventListener('click',()=>{if(scenarioIndex<scenarios.length-1){scenarioIndex++;renderScenario()}else{document.querySelector('#scenario-card').innerHTML=`<div class="scenario-scene">Сценарий завершён</div><h3>История требует объёмного взгляда</h3><p>Ваши решения показали: хозяйственный результат, человеческая выносливость, критика источников и забота о земле постоянно вступали в сложные отношения.</p><button class="button button-dark" id="restart-scenario" type="button">Пройти заново</button>`;document.querySelector('#restart-scenario').addEventListener('click',()=>location.reload())}})}renderScenario();

document.querySelectorAll('.lesson-stage').forEach((btn,i)=>btn.addEventListener('click',()=>{document.querySelectorAll('.lesson-stage').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=lessonStages[i];document.querySelector('#lesson-time').textContent=d.time;document.querySelector('#lesson-title').textContent=d.title;document.querySelector('#lesson-content').innerHTML=d.html}));document.querySelector('.print-button').addEventListener('click',()=>window.print());

let questionIndex=0,score=0;function renderQuestion(){const q=quizQuestions[questionIndex];document.querySelector('#quiz-current').textContent=String(questionIndex+1).padStart(2,'0');document.querySelector('#question-number').textContent=questionIndex+1;document.querySelector('#question-text').textContent=q.q;const list=document.querySelector('#answer-list');list.innerHTML='';q.a.forEach((a,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=a;b.addEventListener('click',()=>answerQuestion(i));list.appendChild(b)});document.querySelector('#quiz-feedback').hidden=true;document.querySelector('#next-question').hidden=true}function answerQuestion(i){const q=quizQuestions[questionIndex];const buttons=[...document.querySelectorAll('.answer')];buttons.forEach((b,j)=>{b.disabled=true;if(j===q.correct)b.classList.add('correct');if(j===i&&i!==q.correct)b.classList.add('wrong')});if(i===q.correct)score++;const f=document.querySelector('#quiz-feedback');f.hidden=false;f.innerHTML=`<strong>${i===q.correct?'Верно':'Не совсем'}</strong>${q.why}`;const next=document.querySelector('#next-question');next.hidden=false;next.textContent=questionIndex===quizQuestions.length-1?'Узнать результат →':'Следующий вопрос →'}document.querySelector('#next-question').addEventListener('click',()=>{if(questionIndex<quizQuestions.length-1){questionIndex++;renderQuestion()}else{document.querySelector('#quiz-card').innerHTML=`<p class="question-label">Результат</p><div class="result-score">${score}/5</div><h3>${score===5?'Отличная работа!':score>=3?'Хорошая основа':'Стоит вернуться к материалам'}</h3><p>${score===5?'Вы уверенно сопоставляете даты, факты и исследовательские оговорки.':score>=3?'Вы уловили главные связи. Лента времени и архив помогут закрепить детали.':'Попробуйте ещё раз после просмотра ленты времени и раздела об исследовании.'}</p><button class="button button-dark" type="button" onclick="location.reload()">Пройти ещё раз</button>`}});renderQuestion();

let cardIndex=0;
const cardsPanel=document.querySelector('#quiz-cards-panel');
const testPanel=document.querySelector('#quiz-test-panel');
function renderFlashcard(){
  const card=quizQuestions[cardIndex];
  document.querySelector('#card-number').textContent=cardIndex+1;
  document.querySelector('#quiz-current').textContent=String(cardIndex+1).padStart(2,'0');
  document.querySelector('#card-question').textContent=card.q;
  document.querySelector('#card-answer').innerHTML=`<strong>${card.a[card.correct]}</strong><p>${card.why}</p>`;
  document.querySelector('#card-answer').hidden=true;
  document.querySelector('#card-reveal').textContent='Показать ответ';
}
document.querySelectorAll('[data-quiz-mode]').forEach(button=>button.addEventListener('click',()=>{
  const cardsMode=button.dataset.quizMode==='cards';
  document.querySelectorAll('[data-quiz-mode]').forEach(mode=>{
    const active=mode===button;
    mode.classList.toggle('active',active);
    mode.setAttribute('aria-pressed',String(active));
  });
  testPanel.hidden=cardsMode;
  cardsPanel.hidden=!cardsMode;
  if(cardsMode)renderFlashcard();
  else document.querySelector('#quiz-current').textContent=String(questionIndex+1).padStart(2,'0');
}));
document.querySelector('#card-reveal').addEventListener('click',()=>{
  const answer=document.querySelector('#card-answer');
  answer.hidden=!answer.hidden;
  document.querySelector('#card-reveal').textContent=answer.hidden?'Показать ответ':'Скрыть ответ';
});
document.querySelector('#card-prev').addEventListener('click',()=>{
  cardIndex=(cardIndex+quizQuestions.length-1)%quizQuestions.length;
  renderFlashcard();
});
document.querySelector('#card-next').addEventListener('click',()=>{
  cardIndex=(cardIndex+1)%quizQuestions.length;
  renderFlashcard();
});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
