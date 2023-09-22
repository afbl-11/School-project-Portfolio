//namefield
const input = document.getElementById('fullname');

input.addEventListener('input', function() {
  if (this.value !== '') {
    this.classList.add('filled');
  } else {
    this.classList.remove('filled');
  }
});

input.addEventListener('focus', function() {
  this.classList.add('filled');
});

input.addEventListener('blur', function() {
  if (this.value === '') {
    this.classList.remove('filled');
  }
});

// email
const emailInput = document.getElementById('submitEmail');
const emailLabel = document.querySelector('.email-form label[for="submitEmail"]');

emailInput.addEventListener('input', function() {
  if (this.value !== '') {
    this.classList.add('filled');
    emailLabel.style.display = 'none';
  } else {
    this.classList.remove('filled');
    emailLabel.style.display = 'block';
  }
});

emailInput.addEventListener('focus', function() {
  this.classList.add('filled');
  emailLabel.style.display = 'none';
});

emailInput.addEventListener('blur', function() {
  if (this.value === '') {
    this.classList.remove('filled');
    emailLabel.style.display = 'block';
  }
});

//subject
const subjectInput = document.getElementById('subject');
const subjectLabel = document.querySelector('.subject-form label[for="subject"]');

subjectInput.addEventListener('input', function() {
  if (this.value !== '') {
    this.classList.add('filled');
    subjectLabel.style.display = 'none';
  } else {
    this.classList.remove('filled');
    subjectLabel.style.display = 'block';
  }
});

subjectInput.addEventListener('focus', function() {
  this.classList.add('filled');
  subjectLabel.style.display = 'none';
});

subjectInput.addEventListener('blur', function() {
  if (this.value === '') {
    this.classList.remove('filled');
    subjectLabel.style.display = 'block';
  }
});


// message

const messageInput = document.getElementById('message');
const messageLabel = document.querySelector('.message-area label[for="message"]');

messageInput.addEventListener('input', function() {
  if (this.value !== '') {
    this.classList.add('filled');
    messageLabel.style.display = 'none';
  } else {
    this.classList.remove('filled');
    messageLabel.style.display = 'block';
  }
});

messageInput.addEventListener('focus', function() {
  this.classList.add('filled');
  messageLabel.style.display = 'none';
});

messageInput.addEventListener('blur', function() {
  if (this.value === '') {
    this.classList.remove('filled');
    messageLabel.style.display = 'block';
  }
});

function copyText(element) {
  var text = element.textContent || element.innerText; 

  var textarea = document.createElement('textarea');
  textarea.value = text;

  document.body.appendChild(textarea);

  textarea.select();

  document.execCommand('copy');

  document.body.removeChild(textarea);

  alert('Copied: ' + text);
}



