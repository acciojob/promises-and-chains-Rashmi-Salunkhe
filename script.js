//your JS code here. If required.
const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);

  if (name === '' || age === '') {
    alert('Please fill in all fields.');
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  promise
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
  alert(`Oh sorry ${name}. You aren't old enough.`); // No need to escape here
});