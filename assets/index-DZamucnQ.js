(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=null,t={email:!1,password:!1,confirmPassword:!1,name:!1,surname:!0,phoneNumber:!0,country:!1,dateBirthday:!1,tags:!1,price:!1,description:!1};function n(){let t=document.querySelector(`#appRoot`);if(!e){t.innerHTML=c(),p(),m();return}i()}function r(){document.querySelector(`#appRoot`).insertAdjacentHTML(`beforeend`,s()),document.querySelector(`#logoutBtn`)?.addEventListener(`click`,k),document.querySelector(`.nav-link_dashboard`).addEventListener(`click`,i),document.querySelector(`.nav-link_catalog`).addEventListener(`click`,a),document.querySelector(`.nav-link_editProfile`).addEventListener(`click`,o),e.avatar&&(document.querySelector(`#headerAvatar`).src=e.avatar,document.querySelector(`#headerAvatar`).style.display=`block`,document.querySelector(`.user-icon`).style.display=`none`)}function i(){let t=document.querySelector(`#appRoot`);t.innerHTML=``,r(),t.insertAdjacentHTML(`beforeend`,l()),document.querySelectorAll(`.analytics-container .load-data`).forEach(e=>{e.addEventListener(`click`,D)}),e.role===`caller`?document.querySelector(`#callerDashboard`).style.display=`block`:document.querySelector(`#friendDashboard`).style.display=`block`,E()}function a(){let e=document.querySelector(`#appRoot`);e.innerHTML=``,r(),e.insertAdjacentHTML(`beforeend`,d()),document.querySelectorAll(`.filters-grid .filter-select`).forEach(e=>{e.addEventListener(`change`,O)})}function o(){let n=document.querySelector(`#appRoot`);n.innerHTML=``,r(),n.insertAdjacentHTML(`beforeend`,u()),m(),f(),document.querySelector(`.profile-form__avatar`).addEventListener(`click`,()=>{document.querySelector(`#avatarInput`).click()}),document.querySelector(`#avatarInput`).addEventListener(`change`,e=>{T(e)}),e.avatar&&(document.querySelector(`#profileAvatar`).src=e.avatar,document.querySelector(`#profileAvatar`).style.display=`block`,document.querySelector(`.commonAvatar`).style.display=`none`),document.getElementById(`regName`).value=e.name,document.getElementById(`regSurname`).value=e.surname||``,document.getElementById(`regEmail`).value=e.email,document.getElementById(`phoneNumberCode`).value=e.phoneNumber?.code||`+1`,document.getElementById(`regTel`).value=e.phoneNumber?.number||``,document.getElementById(`regCountry`).value=e.country||`ru`,document.getElementById(`regDateBirthday`).value=e.dateBirthday||``,document.getElementById(`regBio`).value=e.description||``,e.role===`caller`&&document.querySelector(`.role-option_caller`).classList.add(`selected`),e.role===`friend`&&document.querySelector(`.role-option_friend`).classList.add(`selected`),t.name=!0,t.email=!0,t.dateBirthday=!!e.dateBirthday}function s(){let t=(JSON.parse(localStorage.getItem(`users`))||[]).find(t=>t.email===e.email);return`<div class="header-content">
            <div class="logo">⏱️ Минуты Общения</div>
            <nav class="nav-menu" id="userMenu">
              <a class="nav-link nav-link_dashboard">Дашборд</a>
              <a class="nav-link nav-link_catalog">Каталог</a>
              <a class="nav-link nav-link_editProfile">Профиль</a>
              <div class="user-info">
                <div class="header__avatar">
                  <span class="user-icon">👤</span>
                  <img alt="User" class="user-avatar" id="headerAvatar">
                </div>
                <span class="user-name" id="headerUsername">${`${t.name}${t.surname?` `+t.surname[0].toUpperCase()+`.`:``}`}</span>
                <button class="btn-primary" id="logoutBtn" style="margin-left: 10px;">Выйти</button>
              </div>
            </nav>
          </div>`}function c(){return`
        <div class="auth-container">
          <div class="card">
            <h2 style="text-align: center; margin-bottom: 24px;">
              <i class="fas fa-comments"></i> Минуты Общения
            </h2>

            <div class="register-container">
              <div class="role-selector" id="roleSelector">
                <button class="role-option selected" type="button" data-role="caller">
                  <i class="fas fa-phone-alt"></i>
                  <strong>Звонящий</strong>
                  <small style="display: block;">Ищу общение</small>
                </button>

                <button class="role-option" type="button" data-role="friend">
                  <i class="fas fa-handshake"></i>
                  <strong>Интернет-друг</strong>
                  <small style="display: block;">Зарабатываю</small>
                </button>
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
        </div>`}function l(){return`
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
          <button class="load-data">
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
          <button class="load-data">
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
  `}function u(){return`<form class="editProfileForm">
            <div class="profile-form__heading">
              <div class="profile-form__avatar">
                <img alt="User" class="profile-form__avatar-image" id="profileAvatar">
                <span class="commonAvatar">👤</span>
                <input type="file" id="avatarInput" accept="image/*" style="display: none;">
              </div>
              <div class="profile-form__info">
                <h2 class="profile-form__title">Настройки профиля</h2>
                <p class="profile-form__description">Управляйте своей личной информацией и настройками</p>
              </div>
            </div>
            <div class="profile-form__content">
              <div class="form-group">
                <label class="label required">Имя</label>
                <input type="text" id="regName" placeholder="Введите имя" autocomplete="off">
                <div class="validation-message"></div>
              </div>
              <div class="form-group">
                <label>Фамилия</label>
                <input type="text" id="regSurname" placeholder="Введите фамилию" autocomplete="off">
                <div class="validation-message"></div>
              </div>
              <div class="form-group">
                <label class="label required">Email</label>
                <input type="email" id="regEmail" placeholder="example@mail.com" autocomplete="off">
                <div class="validation-message"></div>
              </div>
              <div class="form-group">
                <label>Телефон</label>
                <div class="phone-group">
                  <select name="phone-number-code" id="phoneNumberCode">
                    <option value="+1">+1</option>
                    <option value="+7">+7</option>
                    <option value="+20">+20</option>
                    <option value="+27">+27</option>
                  </select>
                  <input type="text" id="regTel" maxlength="20" pattern="[0-9]*" placeholder="Введите номер телефона" autocomplete="off">
                  <div class="validation-message"></div>
                </div>
              </div>
              <div class="form-group">
                <label>Страна</label>
                <select name="country" id="regCountry">
                  <option value="ar">Аргентина</option>
                  <option value="by">Беларусь</option>
                  <option value="hu">Венгрия</option>
                  <option value="gh">Гана</option>
                  <option value="dk">Дания</option>
                  <option value="pl">Польша</option>
                  <option value="ru" selected>Россия</option>
                </select>
                <div class="validation-message"></div>
              </div>
              <div class="form-group">
                <label class="label required">Дата рождения</label>
                <input type="date" id="regDateBirthday" autocomplete="off">
                <div class="validation-message"></div>
              </div>
              <div class="form-group full-width">
                <label>О себе</label>
                <textarea id="regBio" rows="4" placeholder="Расскажите о себе, своих интересах и опыте..."></textarea>
                <div class="validation-message"></div>
              </div>
            </div>
            <div class="profile-form__footer">
              <div class="profile-form__roles">
                <h3 class="profile-form__roles-title">Смена роли</h3>
                <div class="role-selector" id="roleSelector">
                  <button class="role-option role-option_caller" type="button" data-role="caller">
                    <i class="fas fa-phone-alt"></i>
                    <strong>Звонящий</strong>
                    <small style="display: block;">Ищу общение</small>
                  </button>

                  <button class="role-option role-option_friend" type="button" data-role="friend">
                    <i class="fas fa-handshake"></i>
                    <strong>Интернет-друг</strong>
                    <small style="display: block;">Зарабатываю</small>
                  </button>
                </div>
              </div>
              <button class="saveProfileInfo btn-primary" type="submit">Сохранить измения</button>
            </div>
          </form>`}function d(){return`
    <div id="catalog">
      <h1 style="margin-bottom: 2rem;">Каталог интернет-друзей</h1>

      <div class="filters">
        <h3 style="margin-bottom: 1rem">Фильтры</h3>
        <div class="filters-grid">
          <select
            class="filter-select"
            id="filterStatus"
          >
            <option value="">Все статусы</option>
            <option value="online">Онлайн</option>
            <option value="offline">Офлайн</option>
          </select>
          <select
            class="filter-select"
            id="filterTag"
          >
            <option value="">Все интересы</option>
            <option value="travel">Путешествия</option>
            <option value="career">Карьера</option>
            <option value="psychology">Психология</option>
            <option value="hobby">Хобби</option>
            <option value="language">Языки</option>
          </select>
          <select
            class="filter-select"
            id="filterPrice"
          >
            <option value="">Любая цена</option>
            <option value="0-10">До 10 ₽/мин</option>
            <option value="10-15">10-15 ₽/мин</option>
            <option value="15+">От 15 ₽/мин</option>
          </select>
          <select
            class="filter-select"
            id="filterRating"
          >
            <option value="">Любой рейтинг</option>
            <option value="4.5">От 4.5 ⭐</option>
            <option value="4.0">От 4.0 ⭐</option>
            <option value="3.5">От 3.5 ⭐</option>
          </select>
        </div>
      </div>

      <div class="friends-grid" id="friendsGrid">

        <!-- Friend Card 1 -->
        <div
          class="friend-card"
          data-status="online"
          data-tags="travel,hobby"
          data-price="10"
          data-rating="4.9"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=46175a66e207cff338b9b2e8d36df15471f7dc89-8087945-images-thumbs&n=13"
            alt="Friend"
            class="friend-image"
          />
          <div class="friend-content">
            <div class="friend-header">
              <div>
                <div class="friend-name">Анна Смирнова</div>
                <div class="friend-rating">
                  ⭐ 4.9
                  <span>(127 отзывов)</span
                  >
                </div>
              </div>
              <span class="friend-status online">Онлайн</span>
            </div>
            <div class="friend-tags">
              <span class="tag">Путешествия</span>
              <span class="tag">Фотография</span>
              <span class="tag">Психология</span>
            </div>
            <p
              class="friend-description"
              style="
                margin-bottom: 1rem;
                font-size: 0.95rem;
              "
            >
              Люблю делиться историями о путешествиях и помогать в выборе
              направлений
            </p>
            <div class="friend-price">10 ₽ <span>/минута</span></div>
            <button
              class="btn-primary"
              style="width: 100%"
            >
              Начать разговор
            </button>
          </div>
        </div>

        <!-- Friend Card 2 -->
        <div
          class="friend-card"
          data-status="online"
          data-tags="career,psychology"
          data-price="15"
          data-rating="4.0"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=c04e1b4008ec9a3c52fa8b807122528b14158e78-5858314-images-thumbs&n=13"
            alt="Friend"
            class="friend-image"
          />
          <div class="friend-content">
            <div class="friend-header">
              <div>
                <div class="friend-name">Дмитрий Петров</div>
                <div class="friend-rating">
                  ⭐ 4.0
                  <span>(93 отзыва)</span
                  >
                </div>
              </div>
              <span class="friend-status online">Онлайн</span>
            </div>
            <div class="friend-tags">
              <span class="tag">Карьера</span>
              <span class="tag">IT</span>
              <span class="tag">Саморазвитие</span>
            </div>
            <p
              style="
                margin-bottom: 1rem;
                font-size: 0.95rem;
              "
            >
              Карьерный консультант с 10-летним опытом в IT-сфере
            </p>
            <div class="friend-price">15 ₽ <span>/минута</span></div>
            <button
              class="btn-primary"
              style="width: 100%"
            >
              Начать разговор
            </button>
          </div>
        </div>

        <!-- Friend Card 3 -->
        <div
          class="friend-card"
          data-status="offline"
          data-tags="language,hobby"
          data-price="12"
          data-rating="4.7"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=1bfc0f7863a31f3d846207f12011abef0242b21c-5233110-images-thumbs&n=13"
            alt="Friend"
            class="friend-image"
          />
          <div class="friend-content">
            <div class="friend-header">
              <div>
                <div class="friend-name">Елена Кузнецова</div>
                <div class="friend-rating">
                  ⭐ 4.7
                  <span>(85 отзывов)</span
                  >
                </div>
              </div>
              <span class="friend-status offline">Офлайн</span>
            </div>
            <div class="friend-tags">
              <span class="tag">Языки</span>
              <span class="tag">Литература</span>
              <span class="tag">Кулинария</span>
            </div>
            <p
              style="
                margin-bottom: 1rem;
                font-size: 0.95rem;
              "
            >
              Преподаватель английского языка, люблю обсуждать книги и рецепты
            </p>
            <div class="friend-price">12 ₽ <span>/минута</span></div>
            <button
              class="btn-primary"
              style="width: 100%"
            >
              Начать разговор
            </button>
          </div>
        </div>

        <!-- Friend Card 4 -->
        <div
          class="friend-card"
          data-status="online"
          data-tags="psychology,career"
          data-price="20"
          data-rating="5.0"
        >
          <img
            src="https://avatars.mds.yandex.net/i?id=8eb852741563cd4848944d35e95f35119bea7eb5-5887026-images-thumbs&n=13"
            alt="Friend"
            class="friend-image"
          />
          <div class="friend-content">
            <div class="friend-header">
              <div>
                <div class="friend-name">Михаил Лебедев</div>
                <div class="friend-rating">
                  ⭐ 5.0
                  <span>(156 отзывов)</span
                  >
                </div>
              </div>
              <span class="friend-status online">Онлайн</span>
            </div>
            <div class="friend-tags">
              <span class="tag">Психология</span>
              <span class="tag">Коучинг</span>
              <span class="tag">Медитация</span>
            </div>
            <p
              style="
                margin-bottom: 1rem;
                font-size: 0.95rem;
              "
            >
              Сертифицированный психолог и коуч, помогу разобраться в себе
            </p>
            <div class="friend-price">20 ₽ <span>/минута</span></div>
            <button
              class="btn-primary"
              style="width: 100%"
            >
              Начать разговор
            </button>
          </div>
        </div>

      </div>
    </div>
  `}function f(){let t=document.querySelectorAll(`.role-option`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`)})}),document.querySelector(`.saveProfileInfo`).addEventListener(`click`,t=>{t.preventDefault();let n=JSON.parse(localStorage.getItem(`users`))||[],r=n.find(t=>t.email===e.email);r&&(r.name=document.getElementById(`regName`).value,r.surname=document.getElementById(`regSurname`).value,r.email=document.getElementById(`regEmail`).value,r.country=document.getElementById(`regCountry`).value,r.description=document.getElementById(`regBio`).value,r.role=document.querySelector(`.role-option.selected`).dataset.role,r.dateBirthday=document.getElementById(`regDateBirthday`).value||``,r.avatar=e.avatar||``,r.phoneNumber={code:document.getElementById(`phoneNumberCode`).value,number:document.getElementById(`regTel`).value}),localStorage.setItem(`users`,JSON.stringify(n)),e.name=r.name,e.surname=r.surname,e.email=r.email,e.country=r.country,e.description=r.description,e.role=r.role,e.avatar=r.avatar,e.dateBirthday=r.dateBirthday,e.phoneNumber=r.phoneNumber,e.avatar&&(document.getElementById(`headerAvatar`).src=e.avatar,document.getElementById(`headerAvatar`).style.display=`block`,document.querySelector(`.user-icon`).style.display=`none`,document.getElementById(`headerUsername`).textContent=`${r.name}${r.surname?` `+r.surname[0].toUpperCase()+`.`:``}`),document.querySelector(`#headerUsername`).textContent=e.name||`Пользователь`,j(`Данные сохранены`),o()})}function p(){let e=document.querySelectorAll(`.role-option`);e.forEach(t=>{t.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`)})});let t=document.getElementById(`switchToLogin`);t&&t.addEventListener(`click`,e=>{e.preventDefault(),document.querySelector(`.register-container`).style.display=`none`,document.querySelector(`.login-container`).style.display=`block`}),document.getElementById(`registerBtn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`regName`).value,t=document.getElementById(`regEmail`).value,n=document.getElementById(`regPass`).value,r=document.getElementById(`regConfirmPass`).value,i=document.querySelector(`.role-option.selected`),a=i?i.dataset.role:`caller`;if(n!==r){j(`Пароли не совпадают`,!0);return}S(t,n,e,a)}),document.getElementById(`loginBtn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`loginEmail`).value,t=document.getElementById(`loginPass`).value;C(e,t)})}function m(){let e=document.getElementById(`regName`);e&&e.addEventListener(`input`,n=>{let r=h(n.target.value);t.name=r,x(e,r,r?`Имя корректно`:`Имя должно содержать 2-50 букв`)});let n=document.getElementById(`regSurname`);n&&n.addEventListener(`input`,e=>{let r=g(e.target.value);t.surname=r,x(n,r,r?`Фамилия корректна`:`Фамилия должно содержать 2-50 букв`)});let r=document.getElementById(`regEmail`);r&&r.addEventListener(`input`,e=>{let n=e.target.value,i=v(n);t.email=i,x(r,i,i?`Email корректен`:`Введите корректный email`)});let i=document.getElementById(`regTel`);i&&i.addEventListener(`input`,e=>{let n=i.validity.valid;t.phoneNumber=n,x(i,n,n?`Номер телефона корректен`:`Номер телефона должен содержать только цифры`)});let a=document.getElementById(`regDateBirthday`);a&&a.addEventListener(`input`,e=>{let n=_(a.value);t.dateBirthday=n,x(a,n,n?`Дата рождения корректна`:`Дата рождения не корректна`)});let o=document.getElementById(`regPass`);o&&o.addEventListener(`input`,e=>{let n=e.target.value,r=y(n);t.password=r.isValid,x(o,r.isValid,``);let i=document.querySelector(`.strength-bar`),a=document.querySelector(`.strength-text`);if(i&&a){let e=r.strength/5*100;i.style.width=`${e}%`,i.style.background=r.strength<=1?`#f56565`:r.strength<=2?`#ed8936`:r.strength<=3?`#ecc94b`:`#48bb78`,a.textContent=`Сложность: ${r.message}`}let s=document.getElementById(`regConfirmPass`);s&&s.value&&b(s.value,n)});let s=document.getElementById(`regConfirmPass`);s&&s.addEventListener(`input`,e=>{let t=document.getElementById(`regPass`)?.value||``;b(e.target.value,t)});let c=document.getElementById(`registerBtn`);c&&setInterval(()=>{c.disabled=!(t.email&&t.password&&t.confirmPassword&&t.name)},100);let l=document.querySelector(`.saveProfileInfo`);l&&setInterval(()=>{l.disabled=!(t.name&&t.email&&t.surname&&t.dateBirthday&&t.phoneNumber)},100)}function h(e){return e.trim().length>=2&&e.trim().length<=50&&/^[a-zA-Zа-яА-Я\s]+$/.test(e)}function g(e){return e.trim().length===0||e.trim().length>=2&&e.trim().length<=50&&/^[a-zA-Zа-яА-Я\s]+$/.test(e)}function _(e){let t=parseInt(e.split(`-`)[0]);return t>=1900&&t<=new Date().getFullYear()}function v(e){return/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(e)}function y(e){let t=0;return e.length>=8&&t++,e.match(/[a-z]+/)&&t++,e.match(/[A-Z]+/)&&t++,e.match(/[0-9]+/)&&t++,e.match(/[!@#$%^&*(),.?":{}|<>]+/)&&t++,{isValid:e.length>=8&&t>=3,strength:t,message:t===0?`Очень слабый`:t===1?`Слабый`:t===2?`Средний`:t===3?`Хороший`:`Отличный`}}function b(e,n){let r=e===n&&n.length>0;t.confirmPassword=r;let i=document.getElementById(`regConfirmPass`);return i&&x(i,r,r?`Пароли совпадают`:`Пароли не совпадают`),r}function x(e,t,n){if(!e)return;t?(e.classList.add(`valid`),e.classList.remove(`invalid`)):(e.classList.add(`invalid`),e.classList.remove(`valid`));let r=e.parentElement.querySelector(`.validation-message`);!r&&n&&(r=document.createElement(`div`),r.className=`validation-message`,e.parentElement.appendChild(r)),r&&n&&(r.className=`validation-message ${t?`success`:`error`}`,r.innerHTML=`<i class="fas ${t?`fa-check-circle`:`fa-exclamation-circle`}"></i> ${n}`)}function S(t,r,i,a){let o=JSON.parse(localStorage.getItem(`users`)||`[]`);if(o.find(e=>e.email===t))return j(`Пользователь с таким email уже существует`,!0),!1;let s={id:Date.now(),email:t,password:r,role:a,name:i,surname:``,balance:a===`caller`?50:0,description:``,tags:[],pricePerMinute:a===`friend`?2:null};if(o.push(s),localStorage.setItem(`users`,JSON.stringify(o)),e={...s},a===`friend`){let e=JSON.parse(localStorage.getItem(`internetFriends`)||`[]`);e.push({id:s.id,name:s.name,tags:[],pricePerMinute:2,rating:5,status:`online`,description:``}),localStorage.setItem(`internetFriends`,JSON.stringify(e))}document.querySelector(`.auth-container`)?.remove(),j(`Добро пожаловать, ${i}! Регистрация успешна.`),n()}function C(t,r){let i=JSON.parse(localStorage.getItem(`users`)||`[]`).find(e=>e.email===t),a=i&&i.password===r;if(!i){j(`Пользователя с таким email не существует`,!0);return}else if(!a){j(`Неверный пароль`,!0);return}e={...i},document.querySelector(`.auth-container`)?.remove(),j(`С возвращением, ${e.name}!`),n()}function w(){e=null,A(),n()}function T(t){let n=t.target.files[0];if(n){let t=new FileReader;t.onload=function(t){document.getElementById(`profileAvatar`).src=t.target.result,document.getElementById(`profileAvatar`).style.display=`block`,document.querySelector(`.commonAvatar`).style.display=`none`,e&&(e.avatar=t.target.result)},t.readAsDataURL(n)}}function E(){document.querySelectorAll(`#dummyChart`).forEach(e=>{let t=e.getContext(`2d`);new Chart(t,{type:`line`,data:{labels:[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`],datasets:[{label:`Минуты`,data:[12,19,15,27,22,35,42],borderColor:`#8b5cf6`,tension:.3,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:`top`}}}})})}function D(){let e=[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`],t=[12,19,15,27,22,35,42],n=`День,Минуты
`+e.map((e,n)=>`${e},${t[n]}`).join(`
`),r=new Blob([`\uFEFF${n}`],{type:`text/csv;charset=utf-8;`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.setAttribute(`href`,i),a.setAttribute(`download`,`Данные-графика.csv`),a.style.visibility=`hidden`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}function O(){let e=document.getElementById(`filterStatus`).value,t=document.getElementById(`filterTag`).value,n=document.getElementById(`filterPrice`).value,r=document.getElementById(`filterRating`).value;document.querySelectorAll(`.friend-card`).forEach(i=>{let a=!0;if(e&&i.dataset.status!==e&&(a=!1),t&&!i.dataset.tags.includes(t)&&(a=!1),n){let e=parseFloat(i.dataset.price);n===`0-10`&&e>10&&(a=!1),n===`10-15`&&(e<10||e>15)&&(a=!1),n===`15+`&&e<15&&(a=!1)}r&&parseFloat(i.dataset.rating)<parseFloat(r)&&(a=!1),i.style.display=a?`flex`:`none`})}function k(){document.querySelector(`.exitModal`).classList.add(`active`)}function A(){document.querySelector(`.exitModal`).classList.remove(`active`)}function j(e,t=!1){let n=document.createElement(`div`);n.className=`toast-msg`,n.style.background=t?`#f56565`:`#48bb78`,n.innerText=e,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}function M(){let e=document.querySelector(`.exitModal`);e.addEventListener(`click`,t=>{t.target===e&&A()}),document.querySelector(`.exitModal__close-modal`).addEventListener(`click`,A),document.querySelector(`.exitModal__confirm-exit`).addEventListener(`click`,w)}M(),n();