/* =================================================================
   אירוע פסח 2026 — event/pesach2026/event.js
   נטען אוטומטית מ-index.html רק לפני 09/04/2026
   ⚠️  אין לשנות כלום ב-index.html בנוגע לאירוע זה!
   כל הלוגיקה, עיצוב ותוכן האירוע נמצאים כאן ובתיקייה זו בלבד.
   ================================================================= */

(function () {

  const EVENT_START = new Date('2026-04-01T00:00:00');
  const EVENT_END   = new Date('2026-04-09T00:00:00');
  const now         = new Date();
  const isPreEvent  = now < EVENT_START;

  if (!isPreEvent) return;

  const SEEN_KEY  = 'pesach2026_popup_seen';
  const GOLD      = '#d4af37';
  const GOLD2     = '#ffd700';
  const GOLD_BRD  = 'rgba(212,175,55,0.35)';

  const daysLeft = Math.ceil((EVENT_START - now) / (1000 * 60 * 60 * 24));
  const daysText = daysLeft === 1 ? 'מחר!' : `בעוד ${daysLeft} ימים`;

  /* ── טען CSS ── */
  (function loadCSS() {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'event/pesach2026/event.css';
    document.head.appendChild(link);
  })();

  /* ── חלקיקים ── */
  function spawnParticles(count) {
    const emojis = ['🍷','🫓','🌿','🪬','✡️','🌾','🍃'];
    const colors = [GOLD, GOLD2, '#fffbe6', '#f5a623', '#fff8dc', '#e6c84a'];
    for (let i = 0; i < (count || 40); i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        if (i % 3 === 0) {
          el.className = 'pesach-particle';
          el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          el.style.cssText = 'left:'+Math.random()*100+'vw;top:-40px;animation-duration:'+(3+Math.random()*4)+'s;font-size:'+(1.2+Math.random()*1.2)+'rem;';
        } else {
          el.className = 'pesach-confetti';
          el.style.cssText = 'left:'+Math.random()*100+'vw;top:-10px;background:'+colors[Math.floor(Math.random()*colors.length)]+';animation-duration:'+(2.5+Math.random()*3)+'s;width:'+(6+Math.random()*6)+'px;height:'+(6+Math.random()*6)+'px;border-radius:'+(Math.random()>.5?'50%':'2px')+';';
        }
        document.body.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
      }, i * 80);
    }
  }

  /* ── פופאפ ── */
  function buildPopup() {
    try { if (localStorage.getItem(SEEN_KEY)) return; } catch(e) {}
    const overlay = document.createElement('div');
    overlay.id = 'pesach-overlay';
    overlay.innerHTML =
      '<div id="pesach-modal">' +
        '<div id="pesach-badge">✨ בקרוב — ' + daysText + '</div>' +
        '<div id="pesach-emojis"><span>🍷</span><span>🫓</span><span>🌿</span><span>✡️</span><span>🪬</span></div>' +
        '<div id="pesach-title">אירוע פסח מגיע!</div>' +
        '<div id="pesach-subtitle">בפסח אירוע מיוחד במשחק —<br>תהיו מוכנים 🎉</div>' +
        '<div id="pesach-date">📅 &nbsp;1 באפריל – 8 באפריל 2026</div>' +
        '<button id="pesach-close">אחלה, אני מחכה! 🎊</button>' +
      '</div>';
    document.body.appendChild(overlay);

    function closePopup() {
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 300);
      try { localStorage.setItem(SEEN_KEY, '1'); } catch(e) {}
    }
    document.getElementById('pesach-close').addEventListener('click', function() {
      spawnParticles(40);
      setTimeout(closePopup, 400);
    });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closePopup(); });
    setTimeout(function() { spawnParticles(20); }, 600);
  }

  /* ── בנה באנר ── */
  function makeBanner(opts) {
    var el = document.createElement('div');
    el.id = opts.id || '';
    el.style.cssText =
      'display:flex;align-items:center;gap:14px;' +
      'background:linear-gradient(135deg,rgba(26,20,8,0.97) 0%,rgba(20,15,0,0.97) 100%);' +
      'border:1.5px solid ' + GOLD_BRD + ';' +
      'border-radius:14px;' +
      'padding:' + (opts.small ? '10px 14px' : '14px 18px') + ';' +
      'margin-bottom:12px;' +
      'box-shadow:0 4px 20px rgba(212,175,55,0.12),inset 0 0 30px rgba(212,175,55,0.04);' +
      'position:relative;overflow:hidden;' +
      'animation:pesach-banner-in 0.4s cubic-bezier(.34,1.56,.64,1) both;' +
      'font-family:Heebo,sans-serif;direction:rtl;';
    el.innerHTML =
      '<div style="font-size:' + (opts.small ? '1.6rem' : '2rem') + ';line-height:1;flex-shrink:0;">' + (opts.emoji || '🎉') + '</div>' +
      '<div style="flex:1;min-width:0;">' +
        '<div style="font-weight:900;font-size:' + (opts.small ? '.85rem' : '.95rem') + ';' +
          'background:linear-gradient(90deg,' + GOLD2 + ',' + GOLD + ',' + GOLD2 + ');' +
          'background-size:200% auto;' +
          '-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;' +
          'animation:pesach-badge-shine 2.5s linear infinite;">' +
          (opts.title || '') +
        '</div>' +
        (opts.sub ? '<div style="font-size:' + (opts.small ? '.72rem' : '.8rem') + ';color:rgba(234,234,234,0.6);margin-top:2px;">' + opts.sub + '</div>' : '') +
      '</div>' +
      '<div style="font-size:.65rem;font-weight:800;color:' + GOLD + ';' +
        'background:rgba(212,175,55,0.1);border:1px solid ' + GOLD_BRD + ';' +
        'border-radius:100px;padding:3px 9px;white-space:nowrap;flex-shrink:0;">' +
        daysText +
      '</div>';
    return el;
  }

  /* ── הזרק באנרים ── */
  function injectBanners() {
    var s = document.createElement('style');
    s.textContent = '@keyframes pesach-banner-in{from{opacity:0;transform:translateY(-8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}';
    document.head.appendChild(s);

    /* מסך פרופיל — אחרי הלוגו */
    var profileLogo = document.querySelector('#screen-profile .logo');
    if (profileLogo && profileLogo.nextSibling) {
      profileLogo.parentNode.insertBefore(makeBanner({
        id: 'pesach-banner-profile',
        emoji: '🎊',
        title: 'אירוע פסח מגיע!',
        sub: 'אירוע מיוחד במשחק • 1–8 באפריל 2026'
      }), profileLogo.nextSibling);
    }

    /* מסך בית — לפני home-actions */
    var homeActions = document.querySelector('#screen-home .home-actions');
    if (homeActions) {
      homeActions.parentNode.insertBefore(makeBanner({
        id: 'pesach-banner-home',
        emoji: '🍷',
        title: 'אירוע פסח מיוחד בדרך!',
        sub: 'הישאר מחובר לחגיגה • 1–8 באפריל'
      }), homeActions);
    }

    /* לובי — אחרי code-box */
    var codeBox = document.getElementById('code-box');
    if (codeBox && codeBox.nextSibling) {
      codeBox.parentNode.insertBefore(makeBanner({
        id: 'pesach-banner-lobby',
        emoji: '🌿',
        title: 'פסח מגיע!',
        sub: 'אירוע מיוחד • 1–8 באפריל 2026',
        small: true
      }), codeBox.nextSibling);
    }

    /* תוצאות סופיות — לפני כפתור חזור הביתה */
    var goHomeBtn = document.getElementById('btn-go-home');
    if (goHomeBtn) {
      goHomeBtn.parentNode.insertBefore(makeBanner({
        id: 'pesach-banner-final',
        emoji: '✡️',
        title: 'אירוע פסח מגיע בקרוב!',
        sub: 'שמרו תאריך • 1–8 באפריל 2026'
      }), goHomeBtn);
    }
  }

  /* ── INIT ── */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        injectBanners();
        setTimeout(buildPopup, 800);
      });
    } else {
      injectBanners();
      setTimeout(buildPopup, 800);
    }
  }

  init();

})();