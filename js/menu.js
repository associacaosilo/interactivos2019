function showMenuMobile() {
  document.getElementById('silo-menu-retratil').classList.remove("menu-hide");
  document.getElementById('silo-menu-retratil').classList.add("menu-show");
}

function hideMenuMobile() {
  document.getElementById('silo-menu-retratil').classList.remove("menu-show");
  document.getElementById('silo-menu-retratil').classList.add("menu-hide");
}

document.getElementById('show-menu-mobile').onclick = showMenuMobile;
document.getElementById('hide-menu-mobile').onclick = hideMenuMobile;

function showMenu() {
  document.getElementById('menu').classList.remove("menu-hide");
  document.getElementById('menu').classList.add("menu-show");

  document.getElementById('menu-button').classList.remove("fa-chevron-down");
  document.getElementById('menu-button').classList.add("fa-chevron-up");
  document.getElementById('menu-button').onclick = hideMenu;
}

function hideMenu() {
  document.getElementById('menu').classList.remove("menu-show");
  document.getElementById('menu').classList.add("menu-hide");

  document.getElementById('menu-button').classList.remove("fa-chevron-up");
  document.getElementById('menu-button').classList.add("fa-chevron-down");
  document.getElementById('menu-button').onclick = showMenu;
}

document.getElementById('menu-button').onclick = showMenu;
