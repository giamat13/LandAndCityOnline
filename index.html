/* =================================================================
   אירוע פסח 2026 — event/pesach2026/event.js
   נטען אוטומטית מ-index.html רק לפני 09/04/2026
   ⚠️  אין לשנות כלום ב-index.html בנוגע לאירוע זה!
   כל הלוגיקה, עיצוב ותוכן האירוע נמצאים כאן ובתיקייה זו בלבד.
   ================================================================= */

/* ── פאץ' מוקדם על console.log לתפיסת timer_expired ── */
(function() {
  var _origLog = console.log.bind(console);
  console.log = function() {
    if (arguments[0] === '[GA4] timer_expired' &&
        arguments[1] && arguments[1].submitted === false) {
      if (typeof window._pesachTriggerPlague === 'function') {
        setTimeout(window._pesachTriggerPlague, 350);
      }
    }
    return _origLog.apply(console, arguments);
  };
})();

(function () {

  const EVENT_START = new Date('2026-04-01T00:00:00');
  const EVENT_END   = new Date('2026-04-09T00:00:00');
  const now         = new Date();
  const isPreEvent  = now < EVENT_START;
  const isActive    = !isPreEvent && now < EVENT_END;

  if (!isPreEvent && !isActive) return;

  const GOLD     = '#d4af37';
  const GOLD2    = '#ffd700';
  const GOLD_BRD = 'rgba(212,175,55,0.35)';

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

  /* ══════════════════════════════════════════════════════════════
     🌧️ 10 המכות — גלובלי (רץ תמיד, נגיש מהפאץ' ומהסימולציה)
     ══════════════════════════════════════════════════════════════ */

  var PLAGUES = [
    { id:'dam',    emoji:'🩸', name:'דם',       color:'#c0392b', bg:'rgba(192,57,43,0.18)',  effect:'blood'   },
    { id:'tzfard', emoji:'🐸', name:'צפרדע',    color:'#27ae60', bg:'rgba(39,174,96,0.18)',  effect:'frogs'   },
    { id:'kinim',  emoji:'🦟', name:'כינים',    color:'#8e7434', bg:'rgba(142,116,52,0.18)', effect:'lice'    },
    { id:'arov',   emoji:'🦁', name:'ערוב',     color:'#d35400', bg:'rgba(211,84,0,0.18)',   effect:'beasts'  },
    { id:'dever',  emoji:'🐄', name:'דבר',      color:'#6c3483', bg:'rgba(108,52,131,0.18)', effect:'plague'  },
    { id:'shechin',emoji:'🤒', name:'שחין',     color:'#e67e22', bg:'rgba(230,126,34,0.18)', effect:'boils'   },
    { id:'barad',  emoji:'🌨️', name:'ברד',      color:'#2980b9', bg:'rgba(41,128,185,0.18)', effect:'hail'    },
    { id:'arbeh',  emoji:'🦗', name:'ארבה',     color:'#76b041', bg:'rgba(118,176,65,0.18)', effect:'locusts' },
    { id:'choshech',emoji:'🌑',name:'חושך',     color:'#1a1a2e', bg:'rgba(10,10,20,0.85)',   effect:'dark'    },
    { id:'bechor', emoji:'⚰️', name:'בכורות',   color:'#7f8c8d', bg:'rgba(80,80,80,0.25)',   effect:'death'   }
  ];

  var _plagueIdx = 0;

  function triggerPlague() {
    var plague = PLAGUES[_plagueIdx % PLAGUES.length];
    _plagueIdx++;
    showPlagueEffect(plague);
  }
  window._pesachTriggerPlague = triggerPlague;

  function showPlagueEffect(plague) {
    spawnPlagueParticles(plague);

    // מכת חושך: אם המסך בהיר – מעבר לחושך מוחלט לרגע
    if (plague.effect === 'dark') {
      var bodyBg = window.getComputedStyle(document.body).backgroundColor;
      // בדוק אם הרקע בהיר (ממוצע ערוצי RGB > 100)
      var rgb = bodyBg.match(/\d+/g);
      var isLight = rgb && (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3 > 100;
      if (isLight) {
        var darkOverlay = document.createElement('div');
        darkOverlay.style.cssText =
          'position:fixed;inset:0;z-index:9790;pointer-events:none;background:#000;' +
          'opacity:0;transition:opacity 0.6s ease;';
        document.body.appendChild(darkOverlay);
        // fade in לחושך
        requestAnimationFrame(function(){
          requestAnimationFrame(function(){
            darkOverlay.style.opacity = '1';
          });
        });
        // אחרי 2 שניות – fade out בחזרה לאור
        setTimeout(function(){
          darkOverlay.style.transition = 'opacity 1.2s ease';
          darkOverlay.style.opacity = '0';
          darkOverlay.addEventListener('transitionend', function(){ darkOverlay.remove(); });
        }, 3000);
      }
    }

    var flash = document.createElement('div');
    flash.style.cssText =
      'position:fixed;inset:0;z-index:9800;pointer-events:none;' +
      'background:' + plague.bg + ';' +
      'animation:pesach-plague-flash 0.6s ease forwards;';
    document.body.appendChild(flash);
    flash.addEventListener('animationend', function(){ flash.remove(); });
    var card = document.createElement('div');
    card.style.cssText =
      'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.5);' +
      'z-index:9900;font-family:Heebo,sans-serif;direction:rtl;text-align:center;' +
      'background:linear-gradient(160deg,#1a1408,#0f0c00);' +
      'border:2px solid ' + plague.color + ';' +
      'border-radius:20px;padding:28px 36px;min-width:240px;' +
      'box-shadow:0 0 60px ' + plague.color + '66,0 24px 60px rgba(0,0,0,0.8);' +
      'animation:pesach-plague-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;';
    card.innerHTML =
      '<div style="font-size:3.5rem;margin-bottom:10px;animation:pesach-plague-shake 0.5s 0.3s ease both;">' + plague.emoji + '</div>' +
      '<div style="font-size:.72rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;color:' + plague.color + ';opacity:.8;margin-bottom:6px;">פרעה לקה במכה</div>' +
      '<div style="font-size:2rem;font-weight:900;color:' + plague.color + ';text-shadow:0 0 20px ' + plague.color + '88;">' + plague.name + '</div>' +
      '<div style="font-size:.8rem;color:rgba(234,234,234,.5);margin-top:8px;">⏱️ אזל הזמן!</div>';
    document.body.appendChild(card);
    setTimeout(function(){
      card.style.animation = 'pesach-plague-out 0.35s ease forwards';
      card.addEventListener('animationend', function(){ card.remove(); });
    }, 2200);
  }

  function spawnPlagueParticles(plague) {
    var count = 18;
    var emojis;
    switch(plague.effect) {
      case 'blood':   emojis=['🩸','🩸','💧']; break;
      case 'frogs':   emojis=['🐸','🐸','🐸','🌿']; break;
      case 'lice':    emojis=['🦟','🦟','•']; break;
      case 'beasts':  emojis=['🦁','🐯','🐻']; break;
      case 'plague':  emojis=['💀','🐄','☠️']; break;
      case 'boils':   emojis=['🤒','😷','🔥']; break;
      case 'hail':    emojis=['🌨️','❄️','⚡']; break;
      case 'locusts': emojis=['🦗','🦗','🌿']; break;
      case 'dark':    emojis=['🌑','⭐','🌙']; count=8; break;
      case 'death':   emojis=['⚰️','🕯️','💀']; break;
      default:        emojis=[plague.emoji];
    }
    for (var i=0; i<count; i++) {
      (function(i){
        setTimeout(function(){
          var el = document.createElement('div');
          el.style.cssText =
            'position:fixed;font-size:'+(1.2+Math.random()*1.4)+'rem;' +
            'left:'+Math.random()*100+'vw;top:-30px;' +
            'z-index:9799;pointer-events:none;' +
            'animation:pesach-particle-fall '+(1.5+Math.random()*2.5)+'s linear forwards;';
          el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
          document.body.appendChild(el);
          el.addEventListener('animationend', function(){ el.remove(); });
        }, i * 60);
      })(i);
    }
  }

  /* ══════════════════════════════════════════════════════════════
     PRE-EVENT (לפני 1 באפריל)
     ══════════════════════════════════════════════════════════════ */
  if (isPreEvent) {

    const SEEN_KEY = 'pesach2026_popup_seen';
    const daysLeft = Math.ceil((EVENT_START - now) / (1000 * 60 * 60 * 24));
    const daysText = daysLeft === 1 ? 'מחר!' : `בעוד ${daysLeft} ימים`;

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

    function makeBanner(opts) {
      var el = document.createElement('div');
      el.id = opts.id || '';
      el.style.cssText =
        'display:flex;align-items:center;gap:14px;' +
        'background:linear-gradient(135deg,rgba(26,20,8,0.97) 0%,rgba(20,15,0,0.97) 100%);' +
        'border:1.5px solid ' + GOLD_BRD + ';border-radius:14px;' +
        'padding:' + (opts.small ? '10px 14px' : '14px 18px') + ';margin-bottom:12px;' +
        'box-shadow:0 4px 20px rgba(212,175,55,0.12),inset 0 0 30px rgba(212,175,55,0.04);' +
        'animation:pesach-banner-in 0.4s cubic-bezier(.34,1.56,.64,1) both;' +
        'font-family:Heebo,sans-serif;direction:rtl;';
      el.innerHTML =
        '<div style="font-size:' + (opts.small ? '1.6rem' : '2rem') + ';line-height:1;flex-shrink:0;">' + (opts.emoji||'🎉') + '</div>' +
        '<div style="flex:1;min-width:0;">' +
          '<div style="font-weight:900;font-size:' + (opts.small ? '.85rem' : '.95rem') + ';' +
            'background:linear-gradient(90deg,'+GOLD2+','+GOLD+','+GOLD2+');background-size:200% auto;' +
            '-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;' +
            'animation:pesach-badge-shine 2.5s linear infinite;">' + (opts.title||'') + '</div>' +
          (opts.sub ? '<div style="font-size:'+(opts.small?'.72rem':'.8rem')+';color:rgba(234,234,234,0.6);margin-top:2px;">'+opts.sub+'</div>' : '') +
        '</div>' +
        '<div style="font-size:.65rem;font-weight:800;color:'+GOLD+';background:rgba(212,175,55,0.1);border:1px solid '+GOLD_BRD+';border-radius:100px;padding:3px 9px;white-space:nowrap;flex-shrink:0;">' + daysText + '</div>';
      return el;
    }

    function injectBanners() {
      var s = document.createElement('style');
      s.textContent = '@keyframes pesach-banner-in{from{opacity:0;transform:translateY(-8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}';
      document.head.appendChild(s);
      var profileLogo = document.querySelector('#screen-profile .logo');
      if (profileLogo && profileLogo.nextSibling)
        profileLogo.parentNode.insertBefore(makeBanner({id:'pesach-banner-profile',emoji:'🎊',title:'אירוע פסח מגיע!',sub:'אירוע מיוחד • 1–8 באפריל 2026'}), profileLogo.nextSibling);
      var homeActions = document.querySelector('#screen-home .home-actions');
      if (homeActions)
        homeActions.parentNode.insertBefore(makeBanner({id:'pesach-banner-home',emoji:'🍷',title:'אירוע פסח מיוחד בדרך!',sub:'הישאר מחובר לחגיגה • 1–8 באפריל'}), homeActions);
      var codeBox = document.getElementById('code-box');
      if (codeBox && codeBox.nextSibling)
        codeBox.parentNode.insertBefore(makeBanner({id:'pesach-banner-lobby',emoji:'🌿',title:'פסח מגיע!',sub:'אירוע מיוחד • 1–8 באפריל 2026',small:true}), codeBox.nextSibling);
      var goHomeBtn = document.getElementById('btn-go-home');
      if (goHomeBtn)
        goHomeBtn.parentNode.insertBefore(makeBanner({id:'pesach-banner-final',emoji:'✡️',title:'אירוע פסח מגיע בקרוב!',sub:'שמרו תאריך • 1–8 באפריל 2026'}), goHomeBtn);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { injectBanners(); setTimeout(buildPopup, 800); });
    } else {
      injectBanners(); setTimeout(buildPopup, 800);
    }
  }

  /* ══════════════════════════════════════════════════════════════
     ACTIVE EVENT (1–8 באפריל)
     ══════════════════════════════════════════════════════════════ */
  if (isActive) {




    function spawnAfikoman() {
      if (document.getElementById('pesach-afikoman-btn')) return;
      try { if (localStorage.getItem('pesach2026_afikoman_found')) return; } catch(e){}
      var btn = document.createElement('button');
      btn.id = 'pesach-afikoman-btn';
      var x=10+Math.floor(Math.random()*70), y=20+Math.floor(Math.random()*50);
      btn.style.cssText = 'position:fixed;left:'+x+'vw;top:'+y+'vh;z-index:8000;background:linear-gradient(135deg,#d4af37,#8b6914);border:none;border-radius:12px;padding:8px 14px;cursor:pointer;font-size:1.5rem;box-shadow:0 4px 20px rgba(212,175,55,0.5);animation:pesach-afikoman-pulse 1.2s ease-in-out infinite;';
      btn.textContent = '🫓';
      var s=document.createElement('style'); s.textContent='@keyframes pesach-afikoman-pulse{0%,100%{transform:scale(1) rotate(-5deg)}50%{transform:scale(1.15) rotate(5deg)}}'; document.head.appendChild(s);
      btn.addEventListener('click', function() {
        try { localStorage.setItem('pesach2026_afikoman_found','1'); } catch(e){}
        btn.remove(); showAfikomanWin();
      });
      document.body.appendChild(btn);
      setTimeout(function(){ if(btn.parentNode) btn.remove(); }, 8000);
    }

    function showAfikomanWin() {
      spawnParticles(60);
      var ol = document.createElement('div');
      ol.style.cssText = 'position:fixed;inset:0;z-index:9500;display:flex;align-items:center;justify-content:center;background:rgba(5,4,15,.85);backdrop-filter:blur(10px);padding:20px;animation:pesach-fade-in 0.3s ease;font-family:Heebo,sans-serif;direction:rtl;';
      ol.innerHTML = '<div style="background:linear-gradient(160deg,#1a1408,#0f0c00);border:1.5px solid rgba(212,175,55,0.6);border-radius:24px;padding:36px 28px;max-width:340px;width:100%;text-align:center;box-shadow:0 32px 80px rgba(0,0,0,.7);"><div style="font-size:3rem;margin-bottom:16px;">🫓</div><div style="font-size:1.6rem;font-weight:900;background:linear-gradient(135deg,#ffd700,#d4af37);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:10px;">מצאת את האפיקומן!</div><div style="color:rgba(234,234,234,.75);font-size:.95rem;margin-bottom:20px;">כל הכבוד! 20 נקודות בונוס! 🎉</div><button id="pesach-afikoman-close" style="width:100%;padding:12px;background:linear-gradient(135deg,#d4af37,#b8960c);border:none;border-radius:12px;color:#0f0c00;font-family:Heebo,sans-serif;font-size:1rem;font-weight:900;cursor:pointer;">אחלה! 🎊</button></div>';
      document.body.appendChild(ol);
      document.getElementById('pesach-afikoman-close').addEventListener('click', function(){
        ol.style.opacity='0'; ol.style.transition='opacity .3s'; setTimeout(function(){ ol.remove(); }, 300);
      });
      if (window.S&&S.roomId&&S.pId&&typeof db!=='undefined') {
        (async function(){
          try {
            var snap=await get(ref(db,'rooms/'+S.roomId+'/players/'+S.pId));
            var ups={}; ups['rooms/'+S.roomId+'/players/'+S.pId+'/score']=((snap.val()||{}).score||0)+20;
            ups['rooms/'+S.roomId+'/afikomanFound']={pId:S.pId,name:S.pName,ts:Date.now()};
            await update(ref(db),ups); S.totScores[S.pId]=(S.totScores[S.pId]||0)+20;
            if(typeof toast==='function') toast('🫓 +20 נקודות אפיקומן!');
          } catch(e){}
        })();
      }
    }


  /* ══ סוף ACTIVE EVENT ══ */

    // ── מכות מחוברות דרך pesach:timeup שנזרק מלמעלה ──

    function watchScreens() {
      var lastActive = '';

      new MutationObserver(function() {
        var active = document.querySelector('.screen.active');
        var id = active ? active.id : '';
        if (id === lastActive) return;
        lastActive = id;

        if (id === 'screen-results') {
          setTimeout(spawnAfikoman, 1500 + Math.random() * 2000);
        }
      }).observe(document.getElementById('app') || document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
    }

    function injectActiveBanner() {
      if (document.getElementById('pesach-active-banner-home')) return;
      var s=document.createElement('style'); s.textContent='@keyframes pesach-banner-in{from{opacity:0;transform:translateY(-8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}'; document.head.appendChild(s);
      var homeActions=document.querySelector('#screen-home .home-actions');
      if (!homeActions) return;
      var el=document.createElement('div'); el.id='pesach-active-banner-home';
      el.style.cssText='display:flex;align-items:center;gap:14px;background:linear-gradient(135deg,rgba(26,20,8,0.97),rgba(20,15,0,0.97));border:1.5px solid rgba(212,175,55,0.5);border-radius:14px;padding:14px 18px;margin-bottom:12px;font-family:Heebo,sans-serif;direction:rtl;animation:pesach-banner-in 0.4s cubic-bezier(.34,1.56,.64,1) both;';
      el.innerHTML='<div style="font-size:2rem;line-height:1;">🎉</div><div style="flex:1;"><div style="font-weight:900;font-size:.95rem;background:linear-gradient(90deg,#ffd700,#d4af37,#ffd700);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pesach-badge-shine 2.5s linear infinite;">אירוע פסח פעיל עכשיו!</div><div style="font-size:.8rem;color:rgba(234,234,234,.6);margin-top:2px;">מצה · אפיקומן · קטגוריות פסח</div></div><div style="font-size:.65rem;font-weight:800;color:#0fba81;background:rgba(15,186,129,.1);border:1px solid rgba(15,186,129,.4);border-radius:100px;padding:3px 9px;white-space:nowrap;">✨ פעיל!</div>';
      homeActions.parentNode.insertBefore(el,homeActions);
    }

    if (document.readyState==='loading') {
      document.addEventListener('DOMContentLoaded', function(){ injectActiveBanner(); watchScreens(); });
    } else {
      injectActiveBanner(); watchScreens();
    }
  }

})();

/* ══════════════════════════════════════════════════════════════════
   DEV SIMULATION BUTTON — MutationObserver על admin-panel-btn-wrap
   ══════════════════════════════════════════════════════════════════ */
(function() {

  var GOLD  = '#d4af37';
  var GOLD2 = '#ffd700';

  function addBtn() {
    if (document.getElementById('pesach-dev-sim-btn')) return;
    if (new Date() >= new Date('2026-04-09T00:00:00')) return;
    var wrap = document.getElementById('admin-panel-btn-wrap');
    if (!wrap) return;

    var btn = document.createElement('button');
    btn.id = 'pesach-dev-sim-btn';
    btn.style.cssText =
      'width:100%;margin-top:8px;' +
      'background:linear-gradient(135deg,rgba(212,175,55,0.12),rgba(212,175,55,0.06));' +
      'border:1.5px solid rgba(212,175,55,0.4);color:' + GOLD + ';border-radius:14px;' +
      'padding:11px 16px;font-family:Heebo,sans-serif;font-size:.88rem;font-weight:700;cursor:pointer;transition:all .2s;';
    btn.textContent = '🫓 סימולציית פסח 2026';
    btn.addEventListener('mouseenter', function(){ btn.style.background='linear-gradient(135deg,rgba(212,175,55,0.22),rgba(212,175,55,0.1))'; btn.style.boxShadow='0 4px 16px rgba(212,175,55,0.2)'; });
    btn.addEventListener('mouseleave', function(){ btn.style.background='linear-gradient(135deg,rgba(212,175,55,0.12),rgba(212,175,55,0.06))'; btn.style.boxShadow='none'; });
    btn.addEventListener('click', openSimModal);

    // מוסיף אחרי ה-wrap — גלוי תמיד, ללא תלות ב-display של ה-wrap
    wrap.insertAdjacentElement('afterend', btn);
  }

  function observe() {
    var wrap = document.getElementById('admin-panel-btn-wrap');
    if (!wrap) { setTimeout(observe, 300); return; }
    addBtn();
  }

  /* ── מתג סימולציה ── */
  var _simActive = false;

  function openSimModal() {
    if (!document.querySelector('link[href*="pesach2026/event.css"]')) {
      var lk=document.createElement('link'); lk.rel='stylesheet'; lk.href='event/pesach2026/event.css'; document.head.appendChild(lk);
    }

    // Toggle
    _simActive = !_simActive;

    var btn = document.getElementById('pesach-dev-sim-btn');
    if (_simActive) {
      // הפעל
      runActiveEventSim();
      if (btn) {
        btn.textContent = '🫓 פסח פעיל — לחץ לכיבוי';
        btn.style.background = 'linear-gradient(135deg,rgba(212,175,55,0.35),rgba(212,175,55,0.2))';
        btn.style.borderColor = '#d4af37';
        btn.style.boxShadow = '0 4px 16px rgba(212,175,55,0.3)';
      }
      if (typeof toast==='function') toast('🎉 מצב פסח פעיל!');
    } else {      // כבה
      try{
        localStorage.removeItem('pesach2026_popup_seen');
        localStorage.removeItem('pesach2026_afikoman_found');
      }catch(e){}
      var old=document.getElementById('pesach-active-banner-home'); if(old) old.remove();
      var afikoman=document.getElementById('pesach-afikoman-btn'); if(afikoman) afikoman.remove();
      window._pesachCatPatched = false;
      window._pesachScreenWatch = false;
      if (btn) {
        btn.textContent = '🫓 סימולציית פסח 2026';
        btn.style.background = 'linear-gradient(135deg,rgba(212,175,55,0.12),rgba(212,175,55,0.06))';
        btn.style.borderColor = 'rgba(212,175,55,0.4)';
        btn.style.boxShadow = 'none';
      }
      if (typeof toast==='function') toast('🔄 מצב פסח כובה');
    }
  }

  /* ── Sim helpers ── */
  function simSpawnParticles(count){
    var emojis=['🍷','🫓','🌿','🪬','✡️','🌾','🍃'],colors=['#d4af37','#ffd700','#fffbe6','#f5a623'];
    for(var i=0;i<(count||40);i++){(function(i){setTimeout(function(){
      var el=document.createElement('div');
      if(i%3===0){el.className='pesach-particle';el.textContent=emojis[Math.floor(Math.random()*emojis.length)];el.style.cssText='left:'+Math.random()*100+'vw;top:-40px;animation-duration:'+(3+Math.random()*4)+'s;font-size:'+(1.2+Math.random()*1.2)+'rem;';}
      else{el.className='pesach-confetti';el.style.cssText='left:'+Math.random()*100+'vw;top:-10px;background:'+colors[Math.floor(Math.random()*colors.length)]+';animation-duration:'+(2.5+Math.random()*3)+'s;width:'+(6+Math.random()*6)+'px;height:'+(6+Math.random()*6)+'px;border-radius:'+(Math.random()>.5?'50%':'2px')+';';}
      document.body.appendChild(el); el.addEventListener('animationend',function(){el.remove();});
    },i*80);})(i);}
  }

  function simAfikomanWin(){
    simSpawnParticles(60);
    var ol=document.createElement('div');
    ol.style.cssText='position:fixed;inset:0;z-index:9500;display:flex;align-items:center;justify-content:center;background:rgba(5,4,15,.85);backdrop-filter:blur(10px);padding:20px;animation:pesach-fade-in 0.3s ease;font-family:Heebo,sans-serif;direction:rtl;';
    ol.innerHTML='<div style="background:linear-gradient(160deg,#1a1408,#0f0c00);border:1.5px solid rgba(212,175,55,0.6);border-radius:24px;padding:36px 28px;max-width:340px;width:100%;text-align:center;"><div style="font-size:3rem;margin-bottom:16px;">🫓</div><div style="font-size:1.6rem;font-weight:900;background:linear-gradient(135deg,#ffd700,#d4af37);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:10px;">מצאת את האפיקומן!</div><div style="color:rgba(234,234,234,.75);font-size:.95rem;margin-bottom:6px;">כל הכבוד! 20 נקודות בונוס! 🎉</div><div style="color:rgba(212,175,55,.5);font-size:.7rem;margin-bottom:20px;">[סימולציה — ללא Firebase]</div><button id="sim-afw-close" style="width:100%;padding:12px;background:linear-gradient(135deg,#d4af37,#b8960c);border:none;border-radius:12px;color:#0f0c00;font-family:Heebo,sans-serif;font-size:1rem;font-weight:900;cursor:pointer;">אחלה! 🎊</button></div>';
    document.body.appendChild(ol);
    document.getElementById('sim-afw-close').addEventListener('click',function(){ol.style.opacity='0';ol.style.transition='opacity .3s';setTimeout(function(){ol.remove();},300);});
  }

  function simSpawnAfikoman(){
    var ex=document.getElementById('pesach-afikoman-btn'); if(ex) ex.remove();
    var btn=document.createElement('button'); btn.id='pesach-afikoman-btn';
    var x=10+Math.floor(Math.random()*70),y=20+Math.floor(Math.random()*50);
    btn.style.cssText='position:fixed;left:'+x+'vw;top:'+y+'vh;z-index:8000;background:linear-gradient(135deg,#d4af37,#8b6914);border:none;border-radius:12px;padding:8px 14px;cursor:pointer;font-size:1.5rem;box-shadow:0 4px 20px rgba(212,175,55,0.5);animation:pesach-afikoman-pulse 1.2s ease-in-out infinite;';
    var s=document.createElement('style'); s.textContent='@keyframes pesach-afikoman-pulse{0%,100%{transform:scale(1) rotate(-5deg)}50%{transform:scale(1.15) rotate(5deg)}}'; document.head.appendChild(s);
    btn.textContent='🫓';
    btn.addEventListener('click',function(){ btn.remove(); simAfikomanWin(); });
    document.body.appendChild(btn);
    setTimeout(function(){ if(btn.parentNode) btn.remove(); },8000);
  }

  function simPreEventPopup(){
    var ol=document.createElement('div'); ol.id='pesach-overlay';
    ol.innerHTML='<div id="pesach-modal"><div id="pesach-badge">✨ בקרוב — בעוד 5 ימים</div><div id="pesach-emojis"><span>🍷</span><span>🫓</span><span>🌿</span><span>✡️</span><span>🪬</span></div><div id="pesach-title">אירוע פסח מגיע!</div><div id="pesach-subtitle">בפסח אירוע מיוחד במשחק —<br>תהיו מוכנים 🎉</div><div id="pesach-date">📅 1 באפריל – 8 באפריל 2026</div><button id="pesach-close">אחלה, אני מחכה! 🎊</button></div>';
    document.body.appendChild(ol);
    function closeIt(){ ol.style.opacity='0'; ol.style.transition='opacity .3s'; setTimeout(function(){ ol.remove(); },300); }
    document.getElementById('pesach-close').addEventListener('click',function(){ simSpawnParticles(40); setTimeout(closeIt,400); });
    ol.addEventListener('click',function(e){ if(e.target===ol) closeIt(); });
    setTimeout(function(){ simSpawnParticles(20); },600);
  }

  function simInjectBanner(){
    var homeActions=document.querySelector('#screen-home .home-actions');
    if(!homeActions){ if(typeof toast==='function') toast('עבור למסך הבית קודם'); return; }
    var el=document.createElement('div'); el.id='pesach-active-banner-home';
    el.style.cssText='display:flex;align-items:center;gap:14px;background:linear-gradient(135deg,rgba(26,20,8,0.97),rgba(20,15,0,0.97));border:1.5px solid rgba(212,175,55,0.5);border-radius:14px;padding:14px 18px;margin-bottom:12px;font-family:Heebo,sans-serif;direction:rtl;';
    el.innerHTML='<div style="font-size:2rem;line-height:1;">🎉</div><div style="flex:1;"><div style="font-weight:900;font-size:.95rem;background:linear-gradient(90deg,#ffd700,#d4af37,#ffd700);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">אירוע פסח פעיל עכשיו!</div><div style="font-size:.8rem;color:rgba(234,234,234,.6);margin-top:2px;">מצה · אפיקומן · קטגוריות פסח</div></div><div style="font-size:.65rem;font-weight:800;color:#0fba81;background:rgba(15,186,129,.1);border:1px solid rgba(15,186,129,.4);border-radius:100px;padding:3px 9px;white-space:nowrap;">✨ פעיל!</div>';
    homeActions.parentNode.insertBefore(el,homeActions);
  }

  /* ── הדמת אירוע פעיל ── */
  function runActiveEventSim() {

    // 2. באנר מסך בית
    var old = document.getElementById('pesach-active-banner-home');
    if (old) old.remove();
    var s = document.createElement('style');
    s.textContent = '@keyframes pesach-banner-in{from{opacity:0;transform:translateY(-8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}} @keyframes pesach-badge-shine{from{background-position:0% center}to{background-position:200% center}}';
    document.head.appendChild(s);
    var homeActions = document.querySelector('#screen-home .home-actions');
    if (homeActions) {
      var el = document.createElement('div');
      el.id = 'pesach-active-banner-home';
      el.style.cssText = 'display:flex;align-items:center;gap:14px;background:linear-gradient(135deg,rgba(26,20,8,0.97),rgba(20,15,0,0.97));border:1.5px solid rgba(212,175,55,0.5);border-radius:14px;padding:14px 18px;margin-bottom:12px;font-family:Heebo,sans-serif;direction:rtl;animation:pesach-banner-in 0.4s cubic-bezier(.34,1.56,.64,1) both;';
      el.innerHTML = '<div style="font-size:2rem;line-height:1;">🎉</div><div style="flex:1;"><div style="font-weight:900;font-size:.95rem;background:linear-gradient(90deg,'+GOLD2+','+GOLD+','+GOLD2+');background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pesach-badge-shine 2.5s linear infinite;">אירוע פסח פעיל עכשיו!</div><div style="font-size:.8rem;color:rgba(234,234,234,.6);margin-top:2px;">מצה · אפיקומן · קטגוריות פסח</div></div><div style="font-size:.65rem;font-weight:800;color:#0fba81;background:rgba(15,186,129,.1);border:1px solid rgba(15,186,129,.4);border-radius:100px;padding:3px 9px;white-space:nowrap;">✨ פעיל!</div>';
      homeActions.parentNode.insertBefore(el, homeActions);
    }

    // 3. Watch screens — מצה ואפיקומן
    if (!window._pesachScreenWatch) {
      window._pesachScreenWatch = true;
      var lastActive = '';
      new MutationObserver(function() {
        var active = document.querySelector('.screen.active');
        var id = active ? active.id : '';
        if (id===lastActive) return;
        lastActive = id;
        if (id==='screen-results') setTimeout(simSpawnAfikoman, 1500+Math.random()*2000);
      }).observe(document.getElementById('app')||document.body, {subtree:true,attributes:true,attributeFilter:['class']});
    }

    if (typeof toast==='function') toast('🎉 מצב הדמה פעיל — כאילו עכשיו פסח!');

    // כפתור בדיקת מכה
    if (!document.getElementById('pesach-dev-plague-btn')) {
      var plagueTestBtn = document.createElement('button');
      plagueTestBtn.id = 'pesach-dev-plague-btn';
      plagueTestBtn.style.cssText =
        'width:100%;margin-top:6px;' +
        'background:linear-gradient(135deg,rgba(192,57,43,0.15),rgba(192,57,43,0.08));' +
        'border:1.5px solid rgba(192,57,43,0.45);color:#e74c3c;border-radius:14px;' +
        'padding:10px 16px;font-family:Heebo,sans-serif;font-size:.85rem;font-weight:700;cursor:pointer;transition:all .2s;';
      plagueTestBtn.textContent = '🌧️ בדוק מכה';
      plagueTestBtn.addEventListener('click', function(){
        // טרגר ישיר של מכה
        var PLAGUES_SIM = [
          {id:'dam',emoji:'🩸',name:'דם',color:'#c0392b',bg:'rgba(192,57,43,0.18)',effect:'blood'},
          {id:'tzfard',emoji:'🐸',name:'צפרדע',color:'#27ae60',bg:'rgba(39,174,96,0.18)',effect:'frogs'},
          {id:'kinim',emoji:'🦟',name:'כינים',color:'#8e7434',bg:'rgba(142,116,52,0.18)',effect:'lice'},
          {id:'arov',emoji:'🦁',name:'ערוב',color:'#d35400',bg:'rgba(211,84,0,0.18)',effect:'beasts'},
          {id:'dever',emoji:'🐄',name:'דבר',color:'#6c3483',bg:'rgba(108,52,131,0.18)',effect:'plague'},
          {id:'shechin',emoji:'🤒',name:'שחין',color:'#e67e22',bg:'rgba(230,126,34,0.18)',effect:'boils'},
          {id:'barad',emoji:'🌨️',name:'ברד',color:'#2980b9',bg:'rgba(41,128,185,0.18)',effect:'hail'},
          {id:'arbeh',emoji:'🦗',name:'ארבה',color:'#76b041',bg:'rgba(118,176,65,0.18)',effect:'locusts'},
          {id:'choshech',emoji:'🌑',name:'חושך',color:'#555',bg:'rgba(10,10,20,0.85)',effect:'dark'},
          {id:'bechor',emoji:'⚰️',name:'בכורות',color:'#7f8c8d',bg:'rgba(80,80,80,0.25)',effect:'death'}
        ];
        var _devPlagueIdx = (window._devPlagueIdx || 0);
        window._devPlagueIdx = (_devPlagueIdx + 1) % 10;
        var p = PLAGUES_SIM[_devPlagueIdx];
        // מכת חושך: אם המסך בהיר – כהה לרגע
        if (p.effect === 'dark') {
          var bodyBg2 = window.getComputedStyle(document.body).backgroundColor;
          var rgb2 = bodyBg2.match(/\d+/g);
          var isLight2 = rgb2 && (parseInt(rgb2[0]) + parseInt(rgb2[1]) + parseInt(rgb2[2])) / 3 > 100;
          if (isLight2) {
            var darkOverlay2 = document.createElement('div');
            darkOverlay2.style.cssText = 'position:fixed;inset:0;z-index:9790;pointer-events:none;background:#000;opacity:0;transition:opacity 0.6s ease;';
            document.body.appendChild(darkOverlay2);
            requestAnimationFrame(function(){ requestAnimationFrame(function(){ darkOverlay2.style.opacity='1'; }); });
            setTimeout(function(){ darkOverlay2.style.transition='opacity 1.2s ease'; darkOverlay2.style.opacity='0'; darkOverlay2.addEventListener('transitionend',function(){darkOverlay2.remove();}); }, 3000);
          }
        }
        // Flash
        var flash = document.createElement('div');
        flash.style.cssText = 'position:fixed;inset:0;z-index:9800;pointer-events:none;background:'+p.bg+';animation:pesach-plague-flash 0.6s ease forwards;';
        document.body.appendChild(flash);
        flash.addEventListener('animationend',function(){flash.remove();});
        // Particles
        var emojisMap={blood:['🩸','💧'],frogs:['🐸','🌿'],lice:['🦟','•'],beasts:['🦁','🐯'],plague:['💀','🐄'],boils:['🤒','🔥'],hail:['🌨️','❄️','⚡'],locusts:['🦗','🌿'],dark:['🌑','⭐'],death:['⚰️','🕯️']};
        var ems = emojisMap[p.effect]||[p.emoji];
        for(var i=0;i<16;i++){(function(i){setTimeout(function(){
          var el=document.createElement('div');
          el.style.cssText='position:fixed;font-size:'+(1.1+Math.random()*1.3)+'rem;left:'+Math.random()*100+'vw;top:-30px;z-index:9799;pointer-events:none;animation:pesach-particle-fall '+(1.5+Math.random()*2.5)+'s linear forwards;';
          el.textContent=ems[Math.floor(Math.random()*ems.length)];
          document.body.appendChild(el);
          el.addEventListener('animationend',function(){el.remove();});
        },i*55);})(i);}
        // Card
        var card=document.createElement('div');
        card.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.5);z-index:9900;font-family:Heebo,sans-serif;direction:rtl;text-align:center;background:linear-gradient(160deg,#1a1408,#0f0c00);border:2px solid '+p.color+';border-radius:20px;padding:28px 36px;min-width:240px;box-shadow:0 0 60px '+p.color+'66,0 24px 60px rgba(0,0,0,0.8);animation:pesach-plague-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;';
        card.innerHTML='<div style="font-size:3.5rem;margin-bottom:10px;animation:pesach-plague-shake 0.5s 0.3s ease both;">'+p.emoji+'</div><div style="font-size:.72rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;color:'+p.color+';opacity:.8;margin-bottom:6px;">פרעה לקה במכה</div><div style="font-size:2rem;font-weight:900;color:'+p.color+';text-shadow:0 0 20px '+p.color+'88;">'+p.name+'</div><div style="font-size:.8rem;color:rgba(234,234,234,.5);margin-top:8px;">⏱️ אזל הזמן!</div>';
        document.body.appendChild(card);
        setTimeout(function(){card.style.animation='pesach-plague-out 0.35s ease forwards';card.addEventListener('animationend',function(){card.remove();});},2200);
        plagueTestBtn.textContent='🌧️ מכת '+p.name+' ('+((_devPlagueIdx)+1)+'/10)';
      });
      var devBtn = document.getElementById('pesach-dev-sim-btn');
      if (devBtn) devBtn.insertAdjacentElement('afterend', plagueTestBtn);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }

})();
