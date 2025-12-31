// Slideshow functionality
const bgImageContainer = document.getElementById('bg-image-container');

let currentImageIndex = 0;

function cycleCoverImage() {
  if (currentImageIndex < bgImageContainer.children.length - 1) {
    bgImageContainer.children[currentImageIndex].classList.remove('visible');
    bgImageContainer.children[currentImageIndex + 1].classList.add('visible');

    currentImageIndex++;
  } else {
    bgImageContainer.children[currentImageIndex].classList.remove('visible');
    bgImageContainer.children[0].classList.add('visible');

    currentImageIndex = 0;
  }
}

// Start & end slideshow

let coverCycleIntervalID;
function startCoverCycle() {
  coverCycleIntervalID = setInterval(cycleCoverImage, 15000);
}

function endCoverCycle() {
  clearInterval(coverCycleIntervalID);
  coverCycleIntervalID = undefined;
}

startCoverCycle();

// Start cover clock
startClock(coverClockDisplay);

// Advance page on touch or click
function coverTriggered() {
  if (!pinRequired || lockStatus == 'unlocked') {
    setPage('home');
  } else {
    setPage('pin')
  }
}

const triggeringEvents = ['click', 'mousedown', 'touchstart', 'touchmove', 'keydown']

triggeringEvents.forEach(eventName => {
  document.addEventListener(eventName, coverTriggered)
});