const hamburgerIcon = document.querySelector('.hamburger-icon');
       const menuItemsContainer = document.querySelector('.nav-container ul');

       hamburgerIcon.addEventListener('click', function() {
           // Step 2: Function to toggle menu items visibility
           menuItemsContainer.classList.toggle('show');
           hamburgerIcon.classList.toggle('gg-close'); 
       });