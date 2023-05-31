function initialize() {
  const header = document.createElement('header');
  const ul = document.createElement('ul');
  const liHome = document.createElement('li');
  const liMenu = document.createElement('li');
  const liContact = document.createElement('li');
  const home = document.createElement('div');
  home.classList.add('hook');

  liHome.textContent = 'Home';
  liHome.classList.add('home');
  liMenu.textContent = 'Menu';
  liMenu.classList.add('menu');
  liContact.textContent = 'Contact';
  liContact.classList.add('contact');
  home.textContent =
    'our restaurant serves wonderous dishes from all around the world';

  home.style.cssText = `background-image: url(./src/image.jpg);
  height: 90%;
  font-size: 60px;
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10%;
  overflow: hidden;
  box-sizing: border-box;
  color: #B70404;
  font-weight: 600;
  text-shadow: 2px 2px 10px black, 0 0 1px grey, 0 0 0.2px grey;`;
  const content = document.getElementById('content');
  content.appendChild(header);
  header.appendChild(ul);
  ul.appendChild(liHome);
  ul.appendChild(liMenu);
  ul.appendChild(liContact);
  content.appendChild(home);
}

export { initialize };
