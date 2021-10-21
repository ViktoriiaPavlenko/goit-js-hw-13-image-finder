import getRefs from './refs';
const refs = getRefs();

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const currentTheme = localStorage.getItem('theme') || LIGHT;

localStorage.setItem('theme', currentTheme);
refs.body.classList.add(currentTheme);
refs.checkbox.checked = currentTheme === DARK;

refs.checkbox.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
  refs.body.classList.toggle(DARK);
  refs.body.classList.toggle(LIGHT);

  localStorage.setItem('theme', refs.checkbox.checked ? DARK : LIGHT);
};