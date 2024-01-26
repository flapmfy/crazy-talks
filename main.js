import './style.css';

const issues = document.querySelectorAll('.issue');
const body = document.querySelector('body');
const primaryNav = document.querySelector('.primary-nav');
const issueLinks = document.querySelectorAll('.issue-link');

const oberver = new IntersectionObserver(issueIsVisible, { threshold: 0.7 });

document.addEventListener('DOMContentLoaded', () => {
  issues.forEach((issue) => oberver.observe(issue));
});

function issueIsVisible(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const intersectionElement = entry.target;
      setActiveLink(intersectionElement.id);
      changeTheme(intersectionElement.dataset.theme);
    }
  });
}

function changeTheme(themeName) {
  body.className = `theme--${themeName}`;
}

function setActiveLink(id) {
  issueLinks.forEach((issueLink) => issueLink.classList.remove('active'));

  let activeLink = primaryNav.querySelector(`a[href="#${id}"]`);
  activeLink.classList.add('active');
}

