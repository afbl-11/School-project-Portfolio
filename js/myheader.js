function loadHeader() {
    var header = document.getElementById("myHeader");
    header.innerHTML = ` 
        <a id="name" href="index.html"><h1>M <span>J</span> </h1></a>
        <nav>
            <div class="nav-container">
                <ul id="menuList">
                    <li>
                        <a href="projects.html" onclick="toggleSection('projects')">Projects</a>
                    </li>
                    <li>
                        <a href="gallery.html" onclick="toggleSection('gallery')">Gallery</a>
                    </li>
                    <li>
                        <a href="contacts.html" onclick="toggleSection('contacts')">Contacts</a>
                    </li>
                    <li>
                        <a href="about.html" onclick="toggleSection('about')">About</a>
                    </li>
                    <li>
                        <a href="credits.html" onclick="toggleSection('credits')">Credits</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="hamburger-menu">&#9776;</div>
    `;
    
    var image = document.getElementsByTagName('img')[0];
    image.style.opacity = '0.5'; 

    header.style.display = 'flex';
    header.style.margin = '0';
    header.style.transition = '0.8s ease';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.backgroundColor = 'rgba(4, 4, 4, 0.8)';
    header.style.zIndex = '1';

    var span = document.getElementsByTagName('span')[0];
    span.style.color = "#18d26e";
    
    var h1Element = document.getElementsByTagName('h1')[0]; 
    h1Element.style.fontSize = '24px';
    h1Element.style.paddingLeft = '2rem';

    var navElement = document.getElementsByTagName('nav')[0]; 
    navElement.style.marginLeft = '46rem';

    var hamburgerMenu = document.getElementById('hamburger-menu');
    var menuList = document.getElementById('menuList');
    
   
    hamburgerMenu.addEventListener('click', function() {
        if (menuList.style.display === 'none' || menuList.style.display === '') {
            menuList.style.display = 'block';
        } else {
            menuList.style.display = 'none';
        }
    });

   
    var mediaQuery = window.matchMedia("(max-width: 480px)");
    if (mediaQuery.matches) {
        hamburgerMenu.style.display = 'block'; 
        header.style.flexDirection = 'column';
        header.style.alignItems = 'center';
        header.style.padding = '1rem';
        header.style.height = 'auto';
        
        navElement.style.marginLeft = '0';
        
        h1Element.style.fontSize = '20px';
        h1Element.style.paddingLeft = '0';
        
        menuList.style.display = 'none'; 
    } else {
        hamburgerMenu.style.display = 'none'; 
        menuList.style.display = 'block'; 
    }
}

loadHeader(); 
