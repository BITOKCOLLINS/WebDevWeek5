// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
    } else {
      // Here, you can add code to send the form data to a server or do any other desired action
      alert('Thank you for your message!');
      form.reset();
    }
  });