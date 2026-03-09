/* =================================================================
   אירוע פסח 2026 — event/pesach2026/event.js
   נטען אוטומטית מ-index.html רק לפני 09/04/2026
   לא לשנות כלום ב-index.html בנוגע לאירוע זה!
   ================================================================= */

(function () {
  /* ── תאריכי האירוע ── */
  const EVENT_START = new Date('2026-04-01T00:00:00');
  const EVENT_END   = new Date('2026-04-09T00:00:00');
  const now         = new Date();

  const isPreEvent  = now < EVENT_START;
  const isActive    = now >= EVENT_START && now < EVENT_END;

  /* ── localStorage key — מוצג רק פעם אחת ── */
  const SEEN_KEY = 'pesach2026_popup_seen';

  /* ── טען CSS ── */
  function loadCSS() {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'event/pesach2026/event.css';
    document.head.appendChild(link);
  }

  /* ── צור חלקיקים נופלים ── */
  function spawnParticles() {
    const emojis   = ['🍷','🫓','🌿','🪬','✡️','🍃','🌾'];
    const colors   = ['#ffd700','#d4af37','#fffbe6','#f5a623','#fff8dc','#e6c84a'];
    const total    = 40;

    for (let i = 0; i < total; i++) {
      setTimeout(() => {
        /* אימוג'י */
        if (i % 3 === 0) {
          const el = document.createElement('div');
          el.className = 'pesach-particle';
          el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          el.style.cssText = `
            left: ${Math.random() * 100}vw;
            top: -40px;
            animation-duration: ${3 + Math.random() * 4}s;
            animation-delay: 0s;
            font-size: ${1.2 + Math.random() * 1.2}rem;
          `;
          document.body.appendChild(el);
          el.addEventListener('animationend', () => el.remove());
        } else {
          /* קונפטי */
          const el = document.createElement('div');
          el.className = 'pesach-confetti';
          el.style.cssText = `
            left: ${Math.random() * 100}vw;
            top: -10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation-duration: ${2.5 + Math.random() * 3}s;
            animation-delay: 0s;
            width: ${6 + Math.random() * 6}px;
            height: ${6 + Math.random() * 6}px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
          `;
          document.body.appendChild(el);
          el.addEventListener('animationend', () => el.remove());
        }
      }, i * 80);
    }
  }

  /* ── בנה פופאפ ── */
  function buildPopup() {
    const overlay = document.createElement('div');
    overlay.id = 'pesach-overlay';

    overlay.innerHTML = `
      <div id="pesach-modal">
        <div id="pesach-badge">✨ בקרוב</div>
        <div id="pesach-emojis">
          <span>🍷</span><span>🫓</span><span>🌿</span><span>✡️</span><span>🪬</span>
        </div>
        <div id="pesach-title">אירוע פסח מגיע!</div>
        <div id="pesach-subtitle">בפסח אירוע מיוחד במשחק —<br>תהיו מוכנים 🎉</div>
        <div id="pesach-date">📅 &nbsp;1 באפריל – 8 באפריל 2026</div>
        <button id="pesach-close">אחלה, אני מחכה! 🎊</button>
      </div>
    `;

    document.body.appendChild(overlay);

    /* סגור */
    function close() {
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 300);
      try { localStorage.setItem(SEEN_KEY, '1'); } catch(e) {}
    }

    document.getElementById('pesach-close').addEventListener('click', () => {
      spawnParticles();
      setTimeout(close, 400);
    });

    overlay.addEventListener('click', e => {
      if (e.target === overlay) close();
    });

    /* חלקיקים קלים בכניסה */
    setTimeout(spawnParticles, 600);
  }

  /* ── הפעלה ── */
  function init() {
    if (!isPreEvent) return; // הפופאפ רק לפני האירוע

    try {
      if (localStorage.getItem(SEEN_KEY)) return; // כבר ראה
    } catch(e) {}

    loadCSS();

    /* מחכה ש-DOM יהיה מוכן */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', buildPopup);
    } else {
      /* DOM מוכן — מחכה רגע קצר שהדף יסיים להיטען */
      setTimeout(buildPopup, 800);
    }
  }

  init();
})();