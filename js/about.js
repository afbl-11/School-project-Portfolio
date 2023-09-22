window.addEventListener('scroll', function() {
    var header = document.getElementById('myHeader');
    var h3 = header.querySelector('h3');
    
    if (window.pageYOffset >= h3.offsetTop) {
      h3.classList.add('sticky');
      h3.style.marginLeft = '0rem';
    } else {
      h3.classList.remove('sticky');
    }
  });
  