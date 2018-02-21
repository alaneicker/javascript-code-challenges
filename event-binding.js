/* SAMPLE MARKUP

<ul id="fruit-list" class="fruit-list">
  <li>
    <button
      class="c-btn c-btn--blue c-btn--sm"
      type="button">Apple</button>
  </li>
  <li>
    <button
      class="c-btn c-btn--blue c-btn--sm"
      type="button">Banana</button>
  </li>
  <li>
    <button
      class="c-btn c-btn--blue c-btn--sm"
      type="button">Orange</button>
  </li>
  <li>
    <button
      class="c-btn c-btn--blue c-btn--sm"
      type="button">Mango</button>
  </li>
  <li>
    <button
      class="c-btn c-btn--blue c-btn--sm"
      type="button">Papaya</button>
  </li>
</ul>

<br>

<button
  class="alert"
  href="#"
  type="button">Click Me</button>

*/

// SOLUTION
document.addEventListener("DOMContentLoaded", () => {

  const todos = document.querySelector('#fruit-list');

  // This will bind a click event to all list
  // items inside of the #todos ul element
  todos.addEventListener('click', e => {
    if (e.target && e.target.nodeName === 'BUTTON') {
      alert(`You selected: ${e.target.innerHTML}`);
    }
  });

  // This will bind a click event to all
  // elments with the class name ".alert"
  document.body.addEventListener('click', e => {
    if (e.target && e.target.classList.contains('alert')) {
      alert('You clikced an alert!');
    }
  });

});
