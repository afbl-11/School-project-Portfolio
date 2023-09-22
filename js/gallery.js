var img1 = document.getElementById('img1');
var initialTransform = null;

img1.addEventListener('mousedown', startTransition);
img1.addEventListener('touchstart', startTransition);

function startTransition(event) {
  initialTransform = getTransform(event);
  img1.classList.add('transition-back');
}

img1.addEventListener('mouseup', endTransition);
img1.addEventListener('touchend', endTransition);

function endTransition(event) {
  if (initialTransform) {
    var finalTransform = getTransform(event);
    var deltaX = finalTransform.x - initialTransform.x;
    var deltaY = finalTransform.y - initialTransform.y;
    
    img1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    img1.classList.remove('transition-back');
    initialTransform = null;
  }
}

function getTransform(event) {
  var touch = event.touches && event.touches.length ? event.touches[0] : event;
  return {
    x: touch.clientX,
    y: touch.clientY
  };
}
