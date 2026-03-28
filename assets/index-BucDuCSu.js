(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=null,t={email:!1,password:!1,confirmPassword:!1,name:!1,surname:!0,phoneNumber:!0,country:!1,dateBirthday:!1,tags:!1,price:!1,description:!1};function n(){let t=document.querySelector(`#appRoot`);if(!e){t.innerHTML=o(),c(),l();return}i()}function r(){document.querySelector(`#appRoot`).insertAdjacentHTML(`beforeend`,a()),document.querySelector(`#logoutBtn`)?.addEventListener(`click`,b),e.avatar&&(document.querySelector(`#headerAvatar`).src=e.avatar,document.querySelector(`#headerAvatar`).style.display=`block`,document.querySelector(`.user-icon`).style.display=`none`)}function i(){let t=document.querySelector(`#appRoot`);t.innerHTML=``,r(),t.insertAdjacentHTML(`beforeend`,s()),e.role===`caller`?document.querySelector(`#callerDashboard`).style.display=`block`:document.querySelector(`#friendDashboard`).style.display=`block`,y()}function a(){let t=(JSON.parse(localStorage.getItem(`users`))||[]).find(t=>t.email===e.email);return`<div class="header-content">
            <div class="logo">⏱️ Минуты Общения</div>
            <nav class="nav-menu" id="userMenu">
              <a class="nav-link" onclick="showDashboard()">Дашборд</a>
              <a class="nav-link" onclick="showCatalogPage()">Каталог</a>
              <a class="nav-link" onclick="showEditProfilePage()">Профиль</a>
              <div class="user-info">
                <div class="header__avatar">
                  <span class="user-icon">👤</span>
                  <img alt="User" class="user-avatar" id="headerAvatar">
                </div>
                <span class="user-name" id="headerUsername">${`${t.name}${t.surname?` `+t.surname[0].toUpperCase()+`.`:``}`}</span>
                <button class="btn-primary" id="logoutBtn" style="margin-left: 10px;">Выйти</button>
              </div>
            </nav>
          </div>`}function o(){return`
        <div class="auth-container">
          <div class="card">
            <h2 style="text-align: center; margin-bottom: 24px;">
              <i class="fas fa-comments"></i> Минуты Общения
            </h2>

            <div class="register-container">
              <div class="role-selector" id="roleSelector">
                <div class="role-option selected" data-role="caller">
                  <i class="fas fa-phone-alt"></i>
                  <strong>Звонящий</strong>
                  <small style="display: block;">Ищу общение</small>
                </div>

                <div class="role-option" data-role="friend">
                  <i class="fas fa-handshake"></i>
                  <strong>Интернет-друг</strong>
                  <small style="display: block;">Зарабатываю</small>
                </div>
              </div>

              <div style="margin-bottom: 24px;">
                <h3 style="margin-bottom: 16px;">📝 Регистрация</h3>
                
                <div class="form-group">
                  <label>👤 Имя</label>
                  <input type="text" id="regName" placeholder="Введите ваше имя" autocomplete="off">
                  <div class="validation-message"></div>
                </div>
                
                <div class="form-group">
                  <label>📧 Email</label>
                  <input type="email" id="regEmail" placeholder="example@mail.com" autocomplete="off">
                  <div class="validation-message"></div>
                </div>
                
                <div class="form-group">
                  <label>🔒 Пароль</label>
                  <input type="password" id="regPass" placeholder="Минимум 8 символов">
                  <div class="password-strength">
                      <div class="strength-bar"></div>
                  </div>
                  <span class="strength-text"></span>
                  <div class="validation-message"></div>
                </div>
                
                <div class="form-group">
                  <label>🔒 Подтверждение пароля</label>
                  <input type="password" id="regConfirmPass" placeholder="Повторите пароль">
                  <div class="validation-message"></div>
                </div>
                
                <button id="registerBtn" class="btn-primary" disabled>Создать аккаунт</button>
              </div>

              <div class="switch-auth">
                <p>Уже есть аккаунт? <a href="#" id="switchToLogin">Войти</a></p>
              </div>

            </div>

            <div class="login-container" style="display: none;">
              <div>
                <h3 style="margin-bottom: 16px;">🔑 Вход</h3>
                <div class="form-group">
                    <input type="email" id="loginEmail" placeholder="Email">
                </div>
                <div class="form-group">
                    <input type="password" id="loginPass" placeholder="Пароль">
                </div>
                <button id="loginBtn" class="btn-primary">Войти</button>
              </div>
            </div>

          </div>
        </div>`}function s(){return`
    <div id="dashboard">
      <h1 style="margin-bottom: 2rem;">Дашборд</h1>
      <div id="callerDashboard" style="display: none;">
        <div class="dashboard-grid">
          <div class="stat-card">
              <div class="stat-icon">💰</div>
              <div class="stat-value" id="callerBalance">1,500 ₽</div>
              <div class="stat-label">Баланс счета</div>
          </div>
          <div class="stat-card">
              <div class="stat-icon">📞</div>
              <div class="stat-value" id="callerCalls">24</div>
              <div class="stat-label">Всего звонков</div>
          </div>
          <div class="stat-card">
              <div class="stat-icon">⏱️</div>
              <div class="stat-value" id="callerMinutes">340 мин</div>
              <div class="stat-label">Время общения</div>
          </div>
          <div class="stat-card">
              <div class="stat-icon">❤️</div>
              <div class="stat-value" id="callerFavorites">7</div>
              <div class="stat-label">Избранных друзей</div>
          </div>
        </div>

        <div class="analytics-container">
          <h2 style="margin-bottom: 1.5rem;">История звонков</h2>
          <button class="load-data" onclick="exportChartToCSV()">
            📥 Экспорт в Excel
          </button>
          <div class="chart-placeholder">
            <canvas id="dummyChart"></canvas>
          </div>
        </div>

        <div class="analytics-container">
            <h2 style="margin-bottom: 1.5rem;">Последние разговоры</h2>
            <div style="display: grid; gap: 1rem;">
              <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: white; border-radius: 12px;">
                <img src="https://avatars.mds.yandex.net/i?id=697db948a2e77c28bcc97934ebde050d39a3700b-12634740-images-thumbs&n=13" alt="Friend" style="object-fit: cover; width: 60px; height: 60px; border-radius: 50%;">
                <div style="flex: 1;">
                  <div style="font-weight: bold;">Анна Смирнова</div>
                  <div style="font-size: 0.9rem;">45 минут • Вчера в 18:30</div>
                </div>
                <div style="text-align: right;">
                  <div style="font-weight: bold; color: #667eea;">450 ₽</div>
                  <div style="color: #f59e0b;">★★★★★</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: white; border-radius: 12px;">
                <img src="https://avatars.mds.yandex.net/i?id=26b8b15c4672a271838a9256d2616a65e342ffea-5215694-images-thumbs&n=13" alt="Friend" style="object-fit: cover; width: 60px; height: 60px; border-radius: 50%;">
                <div style="flex: 1;">
                  <div style="font-weight: bold;">Дмитрий Петров</div>
                  <div style="font-size: 0.9rem;">30 минут • 2 дня назад</div>
                </div>
                <div style="text-align: right;">
                  <div style="font-weight: bold; color: #667eea;">300 ₽</div>
                  <div style="color: #f59e0b;">★★★★☆</div>
                </div>
              </div>
            </div>
        </div>
      </div>


      <div id="friendDashboard" style="display: none;">
        <div class="dashboard-grid">
          <div class="stat-card">
            <div class="stat-icon">💵</div>
            <div class="stat-value" id="friendEarnings">12,450 ₽</div>
            <div class="stat-label">Заработано за неделю</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📞</div>
            <div class="stat-value" id="friendCalls">48</div>
            <div class="stat-label">Проведено звонков</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⏱️</div>
            <div class="stat-value" id="friendMinutes">830 мин</div>
            <div class="stat-label">Время на связи</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⭐</div>
            <div class="stat-value" id="friendRating">4.8</div>
            <div class="stat-label">Средний рейтинг</div>
          </div>
        </div>

        <div class="analytics-container">
          <h2 style="margin-bottom: 1.5rem;">Аналитика заработка</h2>
          <button class="load-data" onclick="exportChartToCSV()">
            📥 Экспорт в Excel
          </button>
          <div class="chart-placeholder">
            <canvas id="dummyChart"></canvas>
          </div>
        </div>

        <div class="analytics-container">
          <h2 style="margin-bottom: 1.5rem;">Запланированные звонки</h2>
          <div style="display: grid; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 12px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem; border-radius: 12px; text-align: center; min-width: 80px;">
                <div style="font-size: 1.5rem; font-weight: bold;">18:00</div>
                <div style="font-size: 0.85rem;">Сегодня</div>
              </div>
              <div style="flex: 1;">
                <div style="font-weight: bold;">Встреча с Иваном</div>
                <div style="font-size: 0.9rem;">Тема: Карьерное консультирование</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: bold; color: #667eea;">60 мин</div>
                <div>600 ₽</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 12px;">
              <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 1rem; border-radius: 12px; text-align: center; min-width: 80px;">
                <div style="font-size: 1.5rem; font-weight: bold;">20:30</div>
                <div style="font-size: 0.85rem;">Завтра</div>
              </div>
              <div style="flex: 1;">
                <div style="font-weight: bold;">Беседа с Марией</div>
                <div style="font-size: 0.9rem;">Тема: Путешествия и хобби</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: bold; color: #667eea;">30 мин</div>
                <div>300 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function c(){let e=document.querySelectorAll(`.role-option`);e.forEach(t=>{t.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`)})});let t=document.getElementById(`switchToLogin`);t&&t.addEventListener(`click`,e=>{e.preventDefault(),document.querySelector(`.register-container`).style.display=`none`,document.querySelector(`.login-container`).style.display=`block`}),document.getElementById(`registerBtn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`regName`).value,t=document.getElementById(`regEmail`).value,n=document.getElementById(`regPass`).value,r=document.getElementById(`regConfirmPass`).value,i=document.querySelector(`.role-option.selected`),a=i?i.dataset.role:`caller`;if(n!==r){S(`Пароли не совпадают`,!0);return}_(t,n,e,a)}),document.getElementById(`loginBtn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`loginEmail`).value,t=document.getElementById(`loginPass`).value;v(e,t)})}function l(){let e=document.getElementById(`regName`);e&&e.addEventListener(`input`,n=>{let r=u(n.target.value);t.name=r,g(e,r,r?`Имя корректно`:`Имя должно содержать 2-50 букв`)});let n=document.getElementById(`regSurname`);n&&n.addEventListener(`input`,e=>{let r=d(e.target.value);t.surname=r,g(n,r,r?`Фамилия корректна`:`Фамилия должно содержать 2-50 букв`)});let r=document.getElementById(`regEmail`);r&&r.addEventListener(`input`,e=>{let n=e.target.value,i=p(n);t.email=i,g(r,i,i?`Email корректен`:`Введите корректный email`)});let i=document.getElementById(`regTel`);i&&i.addEventListener(`input`,e=>{let n=i.validity.valid;t.phoneNumber=n,g(i,n,n?`Номер телефона корректен`:`Номер телефона должен содержать только цифры`)});let a=document.getElementById(`regDateBirthday`);a&&a.addEventListener(`input`,e=>{let n=f(a.value);t.dateBirthday=n,g(a,n,n?`Дата рождения корректна`:`Дата рождения не корректна`)});let o=document.getElementById(`regPass`);o&&o.addEventListener(`input`,e=>{let n=e.target.value,r=m(n);t.password=r.isValid,g(o,r.isValid,``);let i=document.querySelector(`.strength-bar`),a=document.querySelector(`.strength-text`);if(i&&a){let e=r.strength/5*100;i.style.width=`${e}%`,i.style.background=r.strength<=1?`#f56565`:r.strength<=2?`#ed8936`:r.strength<=3?`#ecc94b`:`#48bb78`,a.textContent=`Сложность: ${r.message}`}let s=document.getElementById(`regConfirmPass`);s&&s.value&&h(s.value,n)});let s=document.getElementById(`regConfirmPass`);s&&s.addEventListener(`input`,e=>{let t=document.getElementById(`regPass`)?.value||``;h(e.target.value,t)});let c=document.getElementById(`registerBtn`);c&&setInterval(()=>{c.disabled=!(t.email&&t.password&&t.confirmPassword&&t.name)},100);let l=document.querySelector(`.saveProfileInfo`);l&&setInterval(()=>{l.disabled=!(t.name&&t.email&&t.surname&&t.dateBirthday&&t.phoneNumber)},100)}function u(e){return e.trim().length>=2&&e.trim().length<=50&&/^[a-zA-Zа-яА-Я\s]+$/.test(e)}function d(e){return e.trim().length===0||e.trim().length>=2&&e.trim().length<=50&&/^[a-zA-Zа-яА-Я\s]+$/.test(e)}function f(e){let t=parseInt(e.split(`-`)[0]);return t>=1900&&t<=new Date().getFullYear()}function p(e){return/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(e)}function m(e){let t=0;return e.length>=8&&t++,e.match(/[a-z]+/)&&t++,e.match(/[A-Z]+/)&&t++,e.match(/[0-9]+/)&&t++,e.match(/[!@#$%^&*(),.?":{}|<>]+/)&&t++,{isValid:e.length>=8&&t>=3,strength:t,message:t===0?`Очень слабый`:t===1?`Слабый`:t===2?`Средний`:t===3?`Хороший`:`Отличный`}}function h(e,n){let r=e===n&&n.length>0;t.confirmPassword=r;let i=document.getElementById(`regConfirmPass`);return i&&g(i,r,r?`Пароли совпадают`:`Пароли не совпадают`),r}function g(e,t,n){if(!e)return;t?(e.classList.add(`valid`),e.classList.remove(`invalid`)):(e.classList.add(`invalid`),e.classList.remove(`valid`));let r=e.parentElement.querySelector(`.validation-message`);!r&&n&&(r=document.createElement(`div`),r.className=`validation-message`,e.parentElement.appendChild(r)),r&&n&&(r.className=`validation-message ${t?`success`:`error`}`,r.innerHTML=`<i class="fas ${t?`fa-check-circle`:`fa-exclamation-circle`}"></i> ${n}`)}function _(t,r,i,a){let o=JSON.parse(localStorage.getItem(`users`)||`[]`);if(o.find(e=>e.email===t))return S(`Пользователь с таким email уже существует`,!0),!1;let s={id:Date.now(),email:t,password:r,role:a,name:i,surname:``,balance:a===`caller`?50:0,description:``,tags:[],pricePerMinute:a===`friend`?2:null};if(o.push(s),localStorage.setItem(`users`,JSON.stringify(o)),e={...s},a===`friend`){let e=JSON.parse(localStorage.getItem(`internetFriends`)||`[]`);e.push({id:s.id,name:s.name,tags:[],pricePerMinute:2,rating:5,status:`online`,description:``}),localStorage.setItem(`internetFriends`,JSON.stringify(e))}document.querySelector(`.auth-container`)?.remove(),S(`Добро пожаловать, ${i}! Регистрация успешна.`),n()}function v(t,r){let i=JSON.parse(localStorage.getItem(`users`)||`[]`).find(e=>e.email===t),a=i&&i.password===r;if(!i){S(`Пользователя с таким email не существует`,!0);return}else if(!a){S(`Неверный пароль`,!0);return}e={...i},document.querySelector(`.auth-container`)?.remove(),S(`С возвращением, ${e.name}!`),n()}function y(){document.querySelectorAll(`#dummyChart`).forEach(e=>{let t=e.getContext(`2d`);new Chart(t,{type:`line`,data:{labels:[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`],datasets:[{label:`Минуты`,data:[12,19,15,27,22,35,42],borderColor:`#8b5cf6`,tension:.3,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:`top`}}}})})}function b(){document.querySelector(`.exitModal`).classList.add(`active`)}function x(){document.querySelector(`.exitModal`).classList.remove(`active`)}function S(e,t=!1){let n=document.createElement(`div`);n.className=`toast-msg`,n.style.background=t?`#f56565`:`#48bb78`,n.innerText=e,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}var C=document.querySelector(`.exitModal`);C.addEventListener(`click`,e=>{e.target===C&&x()}),n();