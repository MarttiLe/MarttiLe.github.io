document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  const sections = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('nav a');
  const leftArrow = document.querySelector(".left");
  const rightArrow = document.querySelector(".right");

  function setScrollDirection() {
  if (window.innerWidth < 768) {
    container.style.overflowX = 'hidden';
    container.style.overflowY = 'auto';
  } else {
    container.style.overflowX = 'auto';
    container.style.overflowY = 'hidden';
  }
}

  sections.forEach((section, index) => {
    section.addEventListener('click', function () {
      scrollToSection(index);
    });

    section.addEventListener('touchstart', function () {
      scrollToSection(index);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      scrollToNextSection();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      scrollToPreviousSection();
    }
  });

  container.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
      scrollToNextSection();
    } else {
      scrollToPreviousSection();
    }
  });

  function scrollToNextSection() {
    const currentIndex = getCurrentSectionIndex();
    const nextIndex = (currentIndex + 1) % sections.length;
    scrollToSection(nextIndex);
  }

  function scrollToPreviousSection() {
    const currentIndex = getCurrentSectionIndex();
    const previousIndex = (currentIndex - 1 + sections.length) % sections.length;
    scrollToSection(previousIndex);
  }

  function getCurrentSectionIndex() {
    return Math.round(container.scrollLeft / window.innerWidth);
  }

  function scrollToSection(index) {
    container.scrollLeft = index * window.innerWidth;
  }

  container.addEventListener('scroll', function () {
    const currentSection = getCurrentSectionIndex();
    updateActiveLink(currentSection);
  });

  updateActiveLink(getCurrentSectionIndex());

  function updateActiveLink(currentSection) {
    navLinks.forEach((link, index) => {
      link.classList.remove('active');
      if (index === currentSection) {
        link.classList.add('active');
      }
    });
  }

  rightArrow.addEventListener("click", scrollToNextSection);
  rightArrow.addEventListener("touchstart", scrollToNextSection);

  leftArrow.addEventListener("click", scrollToPreviousSection);
  leftArrow.addEventListener("touchstart", scrollToPreviousSection);
});


function openProjectDetails(projectNumber) {
  // Replace this with logic to handle opening project details
  alert("Opening details for Project " + projectNumber);
  // You can replace the alert with code to display project details in a modal, load them dynamically, or navigate to a dedicated project details page.
}

function toggleSection(section) {
  const paragraphs = document.getElementById(`${section}-content`);
  paragraphs.classList.toggle('active');

  // Close other sections
  const otherSections = ['skills', 'experience'];
  otherSections.forEach((otherSection) => {
    if (otherSection !== section) {
      const otherParagraphs = document.getElementById(`${otherSection}-content`);
      otherParagraphs.classList.remove('active');
    }
  });
}

function toggleSkillsExperience(section) {
  const paragraphs = document.getElementById(`${section}-content`);
  paragraphs.classList.toggle('active');

  // Close other sections
  const otherSections = section === 'skills' ? ['experience', 'about'] : ['skills', 'about'];
  otherSections.forEach((otherSection) => {
    const otherParagraphs = document.getElementById(`${otherSection}-content`);
    otherParagraphs.classList.remove('active');
  });
}


const hoverTexts = document.querySelectorAll('.hover-text');

hoverTexts.forEach(hoverText => {
  hoverText.addEventListener('mouseover', () => {
    changeLetterColors(hoverText, 'lightgrey', 'color 0.5s ease');
  });

  hoverText.addEventListener('mouseout', () => {
    changeLetterColors(hoverText, '', 'color 0.5s ease');
  });
});

function changeLetterColors(element, color, transition) {
  element.style.transition = transition;
  element.style.color = color;
}

document.addEventListener('DOMContentLoaded', function () {
  const skillItems = document.querySelectorAll('.skills-section li');

  skillItems.forEach((item) => {
    let originalColor = '';
    let transitionFinished = true;

    item.addEventListener('mouseover', () => {
      if (transitionFinished) {
        originalColor = item.style.color;
        changeRandomColor(item, 'color 0.5s ease');
      }
    });

    item.addEventListener('transitionend', () => {
      transitionFinished = true;
      resetColor(item, originalColor);
    });

    item.addEventListener('mouseout', () => {
      changeRandomColor(item, 'color 0.5s ease');
      transitionFinished = false;
    });
  });

  function changeRandomColor(element, transition) {
    const randomColor = getRandomColor();
    element.style.transition = transition;
    element.style.color = randomColor;
  }

  function resetColor(element, originalColor) {
    element.style.transition = 'color 0.5s ease';
    element.style.color = originalColor;
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuButton = document.querySelector('.burger-menu');
  const nav = document.querySelector('nav');

  // Toggle 'active' class on burger menu button click
  burgerMenuButton.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});
