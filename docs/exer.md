стили кнопок где номер теоефона и адрес width: 237;
height: 48;
top: 43px;
left: 881px;
angle: 0 deg;
opacity: 1;
border-radius: 15px;
padding-top: 14px;
padding-right: 30px;
padding-bottom: 14px;
padding-left: 30px;
gap: 14px;
background: hsla(192, 100%, 99%, 0.36);
.panel-glass {
position: relative;
border-radius: 14px;
border: 1px solid var(--glass-stroke);

background:
linear-gradient(180deg, var(--glass-bg-top), var(--glass-bg-bottom)),
rgb(255 255 255 / 0.03);

backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));
-webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));

box-shadow:
inset 0 1px 0 var(--glass-highlight),
inset 0 -1px 0 rgb(0 0 0 / 0.16),
0 12px 28px var(--glass-shadow);
}

.panel-glass::before {
content: "";
position: absolute;
inset: 1px;
border-radius: inherit;
pointer-events: none;
background:
linear-gradient(
180deg,
rgb(255 255 255 / 0.12) 0%,
rgb(255 255 255 / 0.04) 30%,
transparent 65%
);
}
