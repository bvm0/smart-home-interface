const pageContainer = document.getElementById('page-container');

const coverPage = document.getElementById('cover-page');
const pinPage = document.getElementById('pin-page');
const homePage = document.getElementById('home-page');

let activePage = 'cover';
let pinRequired = false;
let lockStatus = 'unlocked'

if (pinRequired == false) {
  pinPage.style.display = 'none';
}

function setPage(page) {
  if (activePage == 'cover' && !(page == 'cover')) {
    endCoverCycle();
  }
  
  if (pinRequired == true && lockStatus == 'locked') {
    if (page == 'cover') {
      pageContainer.style.transform = '';
      startCoverCycle();
    } else if (page == 'pin') {
      pageContainer.style.transform = 'translateX(-100vw)';
    } else if (page == 'home') {
      pageContainer.style.transform = 'translateX(-200vw)';
    } else {
      console.log('setPage Error: Unknown page selected.');
    }
  } else if (pinRequired == false || lockStatus == 'unlocked') {
    if (page == 'cover') {
      pageContainer.style.transform = '';
      startCoverCycle();
    } else if (page == 'pin') {
      console.log('setPage Error: "pin" page selected despite pinRequired = false.')
    } else if (page == 'home') {
      pageContainer.style.transform = 'translateX(-100vw)';
    } else {
      console.log('setPage Error: Unknown page selected.');
    }
  } else {
    console.log(`setPage Error: Abnormal pinRequired value (${pinRequired})`);
  }
}