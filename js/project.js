// Carousel 1
const carousel1 = document.querySelector(".cppProjShelf .carousel");
const firstImg1 = carousel1.querySelectorAll("img")[0];
const arrowIcons1 = document.querySelectorAll(".cppProjShelf .wrapper i");

let isDragStart1 = false, isDragging1 = false, prevPageX1, prevScrollLeft1, positionDiff1;

// Function to show/hide carousel1 icons based on scroll position
const showHideIcons1 = () => {
    const scrollWidth1 = carousel1.scrollWidth - carousel1.clientWidth;
    arrowIcons1[0].style.display = carousel1.scrollLeft === 0 ? "none" : "block";
    arrowIcons1[1].style.display = carousel1.scrollLeft === scrollWidth1 ? "none" : "block";
};

// Event listener for carousel1 icons click
arrowIcons1.forEach(icon => {
    icon.addEventListener("click", () => {
        const firstImgWidth1 = firstImg1.clientWidth + 14;
        carousel1.scrollLeft += icon.id === "left" ? -firstImgWidth1 : firstImgWidth1;
        setTimeout(() => showHideIcons1(), 60);
    });
});

// Function to handle auto sliding of carousel1
const autoSlide1 = () => {
    if (carousel1.scrollLeft - (carousel1.scrollWidth - carousel1.clientWidth) > -1 || carousel1.scrollLeft <= 0) {
        return;
    }

    positionDiff1 = Math.abs(positionDiff1);
    const firstImgWidth1 = firstImg1.clientWidth + 14;
    const valDifference1 = firstImgWidth1 - positionDiff1;

    if (carousel1.scrollLeft > prevScrollLeft1) {
        return carousel1.scrollLeft += positionDiff1 > firstImgWidth1 / 3 ? valDifference1 : -positionDiff1;
    }

    carousel1.scrollLeft -= positionDiff1 > firstImgWidth1 / 3 ? valDifference1 : -positionDiff1;
};

// Function to handle drag start event
const dragStart1 = (e) => {
    isDragStart1 = true;
    prevPageX1 = e.pageX || e.touches[0].pageX;
    prevScrollLeft1 = carousel1.scrollLeft;
};

// Function to handle dragging event
const dragging1 = (e) => {
    if (!isDragStart1) return;
    e.preventDefault();
    isDragging1 = true;
    carousel1.classList.add("dragging");
    positionDiff1 = (e.pageX || e.touches[0].pageX) - prevPageX1;
    carousel1.scrollLeft = prevScrollLeft1 - positionDiff1;
    showHideIcons1();
};

// Function to handle drag stop event
const dragStop1 = () => {
    isDragStart1 = false;
    carousel1.classList.remove("dragging");

    if (!isDragging1) return;
    isDragging1 = false;
    autoSlide1();
};

// Event listeners for carousel1
carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("touchstart", dragStart1);
document.addEventListener("mousemove", dragging1);
carousel1.addEventListener("touchmove", dragging1);
document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("touchend", dragStop1);


// Carousel 2
const carousel2 = document.querySelector(".webdesProj .carousel");
const firstImg2 = carousel2.querySelectorAll("img")[0];
const arrowIcons2 = document.querySelectorAll(".webdesProj .wrapper i");

let isDragStart2 = false, isDragging2 = false, prevPageX2, prevScrollLeft2, positionDiff2;

// Function to show/hide carousel2 icons based on scroll position
const showHideIcons2 = () => {
    const scrollWidth2 = carousel2.scrollWidth - carousel2.clientWidth;
    arrowIcons2[0].style.display = carousel2.scrollLeft === 0 ? "none" : "block";
    arrowIcons2[1].style.display = carousel2.scrollLeft === scrollWidth2 ? "none" : "block";
};

// Event listener for carousel2 icons click
arrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        const firstImgWidth2 = firstImg2.clientWidth + 14;
        carousel2.scrollLeft += icon.id === "left" ? -firstImgWidth2 : firstImgWidth2;
        setTimeout(() => showHideIcons2(), 60);
    });
});

// Function to handle auto sliding of carousel2
const autoSlide2 = () => {
    if (carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) > -1 || carousel2.scrollLeft <= 0) {
        return;
    }

    positionDiff2 = Math.abs(positionDiff2);
    const firstImgWidth2 = firstImg2.clientWidth + 14;
    const valDifference2 = firstImgWidth2 - positionDiff2;

    if (carousel2.scrollLeft > prevScrollLeft2) {
        return carousel2.scrollLeft += positionDiff2 > firstImgWidth2 / 3 ? valDifference2 : -positionDiff2;
    }

    carousel2.scrollLeft -= positionDiff2 > firstImgWidth2 / 3 ? valDifference2 : -positionDiff2;
};

// Function to handle drag start event
const dragStart2 = (e) => {
    isDragStart2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = carousel2.scrollLeft;
};

// Function to handle dragging event
const dragging2 = (e) => {
    if (!isDragStart2) return;
    e.preventDefault();
    isDragging2 = true;
    carousel2.classList.add("dragging");
    positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
    showHideIcons2();
};

// Function to handle drag stop event
const dragStop2 = () => {
    isDragStart2 = false;
    carousel2.classList.remove("dragging");

    if (!isDragging2) return;
    isDragging2 = false;
    autoSlide2();
};

// Event listeners for carousel2
carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);
document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);


//carrousel 3

// Carousel 3
const carousel3 = document.querySelector(".graphic-des-wrapper .carousel");
const firstImg3 = carousel3.querySelectorAll("img")[0];
const arrowIcons3 = document.querySelectorAll(".graphic-des-wrapper .wrapper i");

let isDragStart3 = false,
  isDragging3 = false,
  prevPageX3,
  prevScrollLeft3,
  positionDiff3;

// Function to show/hide carousel3 icons based on scroll position
const showHideIcons3 = () => {
  const scrollWidth3 = carousel3.scrollWidth - carousel3.clientWidth;
  arrowIcons3[0].style.display = carousel3.scrollLeft === 0 ? "none" : "block";
  arrowIcons3[1].style.display = carousel3.scrollLeft === scrollWidth3 ? "none" : "block";
};

// Event listener for carousel3 icons click
arrowIcons3.forEach((icon) => {
  icon.addEventListener("click", () => {
    const firstImgWidth3 = firstImg3.clientWidth + 14;
    carousel3.scrollLeft += icon.id === "left" ? -firstImgWidth3 : firstImgWidth3;
    setTimeout(() => showHideIcons3(), 60);
  });
});

// Function to handle auto sliding of carousel3
const autoSlide3 = () => {
  if (
    carousel3.scrollLeft - (carousel3.scrollWidth - carousel3.clientWidth) > -1 ||
    carousel3.scrollLeft <= 0
  ) {
    return;
  }

  positionDiff3 = Math.abs(positionDiff3);
  const firstImgWidth3 = firstImg3.clientWidth + 14;
  const valDifference3 = firstImgWidth3 - positionDiff3;

  if (carousel3.scrollLeft > prevScrollLeft3) {
    return (
      (carousel3.scrollLeft += positionDiff3 > firstImgWidth3 / 3 ? valDifference3 : -positionDiff3)
    );
  }

  carousel3.scrollLeft -= positionDiff3 > firstImgWidth3 / 3 ? valDifference3 : -positionDiff3;
};

// Function to handle drag start event
const dragStart3 = (e) => {
  isDragStart3 = true;
  prevPageX3 = e.pageX || e.touches[0].pageX;
  prevScrollLeft3 = carousel3.scrollLeft;
};

// Function to handle dragging event
const dragging3 = (e) => {
  if (!isDragStart3) return;
  e.preventDefault();
  isDragging3 = true;
  carousel3.classList.add("dragging");
  positionDiff3 = (e.pageX || e.touches[0].pageX) - prevPageX3;
  carousel3.scrollLeft = prevScrollLeft3 - positionDiff3;
  showHideIcons3();
};

// Function to handle drag stop event
const dragStop3 = () => {
  isDragStart3 = false;
  carousel3.classList.remove("dragging");

  if (!isDragging3) return;
  isDragging3 = false;
  autoSlide3();
};

// Event listeners for carousel3
carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("touchstart", dragStart3);
document.addEventListener("mousemove", dragging3);
carousel3.addEventListener("touchmove", dragging3);
document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("touchend", dragStop3);
