//display hourly rate
const radioButtons = document.getElementsByName('subject');
const hourlyRateDiv = document.getElementById('hourly-rate');
const hourlyRateInput = document.getElementById('rate');

radioButtons.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.value === "Hiring") {
      hourlyRateDiv.style.display = 'block';
      hourlyRateInput.required = true;
    } else {
      hourlyRateDiv.style.display = 'none';
      hourlyRateInput.required = false;
    }
  });
});

// contact me button pressed move smoother to contact me section
const jumpButton = document.querySelector('#contact-button');
const contactMeSection = document.querySelector('#contact-me');

jumpButton.addEventListener('click', function(event) {
  event.preventDefault();
  contactMeSection.scrollIntoView({ behavior: 'smooth' });
});

//action for when button assigned to education cards is clicked
//timer required to prevent card growing infinitely
function toggle(cardId) {
  var card = document.querySelector('#' + cardId);
  var button = document.querySelector('#' + cardId + ' .toggle-button');

  if (!card.classList.contains('expanded') && !card.classList.contains('animating')) { 
    card.classList.add('animating');
    card.style.height = (card.offsetHeight + 270) + 'px';
    button.textContent = "Less";
    setTimeout(function() {
      card.classList.remove('animating');
      card.classList.add('expanded');
    }, 600);
  } else if (!card.classList.contains('animating')) { 
    card.classList.add('animating');
    card.style.height = '';
    button.textContent = "More";
    setTimeout(function() {
      card.classList.remove('animating');
      card.classList.remove('expanded');
    }, 600);
  }
}

//show button when scroll past certain point
window.addEventListener('scroll', function() {
  var button = document.getElementById('back-to-top');
  if (window.pageYOffset > 190) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

//button returns user to top of page
document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});





