function displayMenu() {
  const menu = document.querySelector('.hook');
  menu.textContent = '';
  menu.style.cssText = `background-image: url(src/menu.jpg);
  height: 90%;
  background-size: contain;
  background-position: center;
  background-color: #FFE569;
  background-repeat: no-repeat`
  ;
}
export { displayMenu };
