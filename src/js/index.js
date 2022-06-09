import * as Todo from './modules/todo.js';

const nav = document.querySelector('#nav');
const cover = document.querySelector('#cover');
const appNames = ['todo', 'typing', 'slide-puzzle', 'memory-card', 'life'];

appNames.forEach((appName) => {
  const menu = document.createElement('a');
  // menuにnav-menuクラスを付加
  menu.classList.add('nav-menu');
  // menuの文字をappNameに置き換えた
  menu.textContent = appName.toUpperCase();

  // menuにクリックイベントを付加
  menu.addEventListener('click', () => {
    //coverからactiveクラスを除外
    cover.classList.remove('active');
    
    //appElsからactiveクラスを除外(sectionの部分)
    const appEls = document.querySelectorAll('.app');
    appEls.forEach((appEl) => {
      appEl.classList.remove('active');
    })
    //appElにactiveクラスを付加する
    const appE1 = document.getElementById(appName);
    appE1.classList.add('active');

    //全てのnav-menuを取得し、先に全ての要素からactiveクラスを除外する
    const navMenus = document.querySelectorAll('.nav-menu');
    navMenus.forEach((navMenu) => {
      navMenu.classList.remove('active');
    })
    menu.classList.add('active');
  });
  //menuをnavの子要素に追加する
  nav.appendChild(menu);
});