function displayContact() {
  const contact = document.querySelector('.hook');
  contact.innerHTML = `<h1> contact us</h1>
  <p> <b>location:</b> 1024 Oakwood Ave
      San Diego, CA 22434</p>
   <p> <b>open: </b> Mon-Thurs:8am-8pm,
Fri-Sun:8am-11pm</p>
<p> <b>tel:</b>  (222)-888 5555</p>`;

  contact.style.cssText = `display: flex;
  height: 90%;
  background-color: #FFE569;
  flex-direction: column;
  align-items: center;`;
}
export { displayContact };
