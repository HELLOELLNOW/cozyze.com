document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('signup-form');
const note = document.getElementById('signup-note');

form.addEventListener('submit', function (e) {
  // This is a static site, so there's no server to receive the email yet.
  // See README.md for how to wire this form up to Formspree (free) in ~2 minutes
  // by adding an `action="https://formspree.io/f/yourFormId"` to the <form> tag.
  // Once that's set, remove this preventDefault() and the form will submit for real.
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  if (!email) return;

  note.textContent = "Thanks — we'll let you know when we drop.";
  form.reset();
});
