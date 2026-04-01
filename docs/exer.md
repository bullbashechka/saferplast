теперь переходим к hero блоку, как бы тебе объяснить теперь его.

у меня есть на фоне 2 фрейма 1й слева public\images\original\fontheroleftside.png (width: 811;
height: 759;
top: 10px;
left: 21px;
angle: 0 deg;
opacity: 1;
border-radius: 30px;
)

2й правее public\images\original\fontherorightside.png (width: 588;
height: 759;
top: 10px;
left: 832px;
angle: 0 deg;
opacity: 1;
border-radius: 30px;
)

отступ у левого блока от полной ширины экрана для пк 21px и блока который правее 20px. эти блоки расположены впритык к друг другу.

эти 2 блока от самой верхней точки дисплея имеют 10px. и еще такой момент что логотип и пункты меню находятся поверх public\images\original\fontheroleftside.png а кнопки номер телефона и адрес находятся поверх фото public\images\original\fontherorightside.png

внутри 1го блока с public\images\original\fontheroleftside.png есть текст Окна, двери и балконы из ПВХ и алюминия напрямую от производителя (font-family: Sansation;
font-weight: 400;
font-style: Regular;
font-size: 48px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
background: hsla(194, 100%, 19%, 1);
)

под текстом в этом же блоке идут 2 мини блока они одиннаковы(width: 285;
height: 179;
top: 561px;
left: 119px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
gap: 8px;
border-width: 1px;
padding: 10px;
)

внутри левого мини блока есть 3 блока
1 - width: 222;
height: 48;
angle: 0 deg;
opacity: 1;
gap: 10px;
padding: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
внутри него текст width: 207;
height: 28;
angle: 0 deg;
opacity: 1;
Мы на связи 09:00 до 18:00 ежедневноfont-family: Montserrat;
font-weight: 400;
font-style: Regular;
font-size: 14px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;

чуть ниже от него текст Шамиль и Хусейн (font-family: Montserrat;
font-weight: 400;
font-style: Regular;
font-size: 14px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
) Слева от этого текст находится 2 svg public\icons\gray.svg и public\icons\moregray.svg gray находится поверх moregray.

чуть ниже еще есть кнопка (/_ Frame 943 _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px 53px;
gap: 14px;

width: 265px;
height: 68px;

background: #FFFFFF;
border-radius: 10px;

/_ Inside auto layout _/
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

/_ Получить расчет _/

margin: 0 auto;
width: 178px;
height: 20px;

/_ text medium _/
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 100%;
/_ identical to box height, or 20px _/

/_ акцент 1 _/
color: #004B62;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;
)

теперь правым мини блок, он находится на расстоянии 21px от левого мини блока.
(width: 305;
height: 178;
top: 561px;
left: 425px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
gap: 26px;
padding: 10px;
background: hsla(0, 0%, 100%, 1);
)
внутри него есть текст - Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде. Бесплатный замер и предварительный расчет.(font-family: Montserrat;
font-weight: 400;
font-style: Regular;
font-size: 16px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
background: hsla(0, 0%, 14%, 1);
)

ниже текста кнопка(/_ Frame 942 _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 24px 42px;
gap: 14px;

width: 285px;
height: 68px;

/_ акцент 1 _/
background: #004B62;
border-radius: 10px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Бесплатный замер _/

width: 201px;
height: 20px;

/_ text medium _/
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 100%;
/_ identical to box height, or 20px _/

color: #FFFFFF;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;
)

на мобильном устройстве будет шапка, под низом шапки public\images\original\fontheroleftside.png затем заголовок "Окна, двери и балконы из ПВХ и алюминия напрямую от производителя" ниже идет 1й мини блок где текст мы на связи иконки и т.п. с кнопкой получить расчет. ниже идет след мини блок "Изготовление, монтаж и ремонт окон, дверей и балконов в Караганде. Бесплатный замер и примерный расчет." и кнопка бесплатный замер. после мини блоков идет закругдение у public\images\original\fontheroleftside.png (border-bottom-right-radius: 30px; border-bottom-left-radius: 30px;). потом идет фото public\images\original\fontherorightside.png оно находится под public\images\original\fontheroleftside.png
