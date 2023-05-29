function displayHome() {
  const home = document.querySelector('.hook');
  home.innerHTML = '';
  home.textContent = 'our restaurant serves wonderous dishes from all around the world';
  home.style.cssText = `background-image: url(/src/image.jpg);
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
  text-shadow: 2px 2px 10px black, 0 0 1px grey, 0 0 0.2px grey;`
}
export { displayHome };
