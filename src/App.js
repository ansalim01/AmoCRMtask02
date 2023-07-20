import React, { useState } from 'react';
import './scss/all.scss'
import logoPlace from "./logos/part1.svg"
import verticalNameLogo from "./logos/part2.svg"
import telegramLogo from "./logos/telegram.svg"
import viberLogo from "./logos/viber.svg"
import whatsappLogo from "./logos/whatsapp.svg"
import Link from './UI/Link';
import BurgerBtn from './UI/BurgerBtn';
import Btn from './UI/Btn';

const menuLists = ["Услуги", "Виджеты", "Интеграция", "Кейсы", "Сертификаты"];
const menuPhoneLists = ["Услуги", "Виджеты", "Интеграция", "Кейсы"]

function App() {
  const [toggleBurgerBtn, setToggleBurgerBtn] = useState(false)


  return (
    <div className="App">
      <div className={toggleBurgerBtn ? "project_container full_height" : "project_container"}>
        <div className="purple_ball"></div>
        <div className="big_red_ball">
        </div>
        <div className="small_red_ball">
        </div>
        <div className="red_light">
        </div>
        <div className="purple_light">
        </div>
        <div className="purple_light_phone phone_element"></div>

        <header className="header_container">
          <div className="half_container">
            <div className="logo_Contaner">
              <div className="logo">
                <img src={logoPlace} alt="logo_place" height="24px" width="35px" />
                <img src={verticalNameLogo} className="vertical_name_logo" alt="logo_place" height="15px" width="97px" />
              </div>
              <div className="logo_discription">
                крупный интегратор CRM <br />
                в Росcии и ещё 8 странах
              </div>
            </div>
            <div className={toggleBurgerBtn ? "burger_element open" : "burger_element"}>
              <ul className="menu_important_container">
                {menuLists.map((item, index) =>
                  <Link key={index}>{item}</Link>
                )}
              </ul>
              <div className="right_side_screen ">
                <div className="right_side_header_contaner">
                  <Link >+7 555 555-55-55</Link>
                  <div className="links_socialNetwork">
                    <Link ><img src={telegramLogo} alt="logo_place" /></Link>
                    <Link ><img src={viberLogo} alt="logo_place" /></Link>
                    <Link ><img src={whatsappLogo} alt="logo_place" /></Link>
                  </div>
                </div>
              </div>
            </div>
            <ul className="menu_important_container phone_element">

              {menuPhoneLists.map((item, index) =>
                <Link key={index}>{item}</Link>
              )}

            </ul>
            <BurgerBtn toggleBurgerBtn={toggleBurgerBtn} setToggleBurgerBtn={setToggleBurgerBtn}></BurgerBtn>
          </div>
        </header>
        <main className="phone_container">
          <div className="main_container">
            <div className="red_light_phone phone_element"></div>
            <div className="phone_noise target_hidden "></div>
            <div className="half_container">
              <div className="left_side_screen">
                <div>
                  <div className="slogan_big_text">Зарабатывайте <br /> больше <br /></div>
                  <div className="yellow_pink_gradient slogan_gradient_text"> c WELBEX</div>
                </div>
                <span className="little_slogan_under_main_slogan">Развиваем и контролируем <br />продажи за вас</span>
              </div>
              <div className="right_side_screen right_screen_padding_t">
                <span className="offer_text">Вместе с
                  <span className="offer_text_gradient">
                    <span className="orange_red_gradient"> БЕСПЛАТНОЙ</span>
                    <br />
                    <span className="yellow_orange_gradient">КОНСУЛЬТАЦИЕЙ </span>
                  </span>
                  мы дарим:</span>
                <div className="target_container">
                  <div className="target hiden_element info_column">
                    <h3>Виджеты</h3>
                    <span className="target_discription">
                      30 готовых <br />решений
                    </span>
                  </div>
                  <div className="target hiden_element  info_column">
                    <h3>Dashboard</h3>
                    <span className="target_discription">
                      с показателями<br />
                      вашего бизнеса
                    </span>
                  </div>
                  <div className="target hiden_element  info_column">
                    <h3>Skype Аудит</h3>
                    <span className="target_discription">
                      отдела продаж <br />
                      и CRM системы
                    </span>
                  </div>
                  <div className="target hiden_element  info_column">
                    <h3>35 дней</h3>
                    <span className="target_discription">
                      использования <br />
                      CRM
                    </span>
                  </div>
                </div>
                <div className="target_hidden info_mobile_container">
                  <div className="target_hidden">
                    <div className="container_target_line">
                      <div className="target_line"></div>
                    </div>
                    <div> Skype аудит</div>
                  </div>
                  <div className="target_hidden">
                    <div className="container_target_line">
                      <div className="target_line"></div>
                    </div>
                    <div>30 виджетов</div>
                  </div>
                  <div className="target_hidden">
                    <div className="container_target_line">
                      <div className="target_line"></div>
                    </div>
                    <div>Dashboard</div>

                  </div>
                  <div className="target_hidden">
                    <div className="container_target_line">
                      <div className="target_line"></div>
                    </div>
                    <div>Месяц аmoCRM</div>
                  </div>
                </div>
                <Btn>Получить консультацию</Btn>

              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer_container">
            <div className="half_container">
              <div className="left_side_screen">
                <div className="target_block">
                  <div className="footer_company_info">
                    <div>
                      <h4 className="footer_header_text">О КОМПАНИИ</h4>
                    </div>
                    <div>
                      <h4 className="footer_header_text">МЕНЮ</h4>
                    </div>
                  </div>
                  <div className="footer_company_info">
                    <ul className="footer_company_description">
                      <li>Партнёрская программа</li>
                      <li>Вакансии</li>
                    </ul>
                    <ul className="footer_company_description">
                      <li>Расчёт стоимости</li>
                      <li>Услуги</li>
                      <li>Виджеты</li>
                      <li>Интеграция</li>
                      <li>Наши клиенты</li>
                    </ul>
                    <ul className="footer_company_description">
                      <li>Кейсы</li>
                      <li>Благодарственные письма</li>
                      <li>Сертификаты</li>
                      <li>Блог на Youtube</li>
                      <li>Вопрос / Ответ</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden_elements">
                  <div>
                    <h4 className="footer_header_text">О КОМПАНИИ</h4>
                  </div>
                  <ul className="footer_company_description">
                    <li>Партнёрская программа</li>
                    <li>Вакансии</li>
                  </ul>
                  <div>
                    <h4 className="footer_header_text">МЕНЮ</h4>
                  </div>
                  <div className="footer_phone_description_container">
                    <ul className="footer_company_description">
                      <li>Расчёт <br /> стоимости</li>
                      <li>Услуги</li>
                      <li>Виджеты</li>
                      <li>Интеграция</li>
                      <li>Наши клиенты</li>
                    </ul>
                    <ul className="footer_company_description">
                      <li className="desktop_element">Благодарственные <br /> письма</li>
                      <li className="hidden_elements">Благодарность клиентов</li>
                      <li>Кейсы</li>
                      <li>Сертификаты</li>
                      <li>Блог на Youtube</li>
                      <li>Вопрос / Ответ</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right_side_screen">
                <h4 className="footer_header_text">КОНТАКТЫ</h4>
                <div className="footer_phoneNumber">+7 555 555-55-55</div>
                <div className="links_socialNetwork_footer">
                  <a><img className="mobile_link" src={telegramLogo} alt="logo_place" height="20px" width="20px" /></a>
                  <a><img className="mobile_link" src={viberLogo} alt="logo_place" height="20px" width="20px" /></a>
                  <a><img className="mobile_link" src={whatsappLogo} alt="logo_place" height="20px" width="20px" /></a>
                </div>
                <div className="company_adress"> Москва, Путевой проезд 3с1, к 902 </div>
                <div className="company_privacy">©WELBEX 2022. Все права защищены. <br />
                  <span className="company_prvacy_border">Политика конфиденциальности</span>
                </div>
              </div>
            </div>
          </div>
        </footer >
      </div >
    </div >
  );
}

export default App;
