const refs = {
  toggleCheckbox: document.querySelector('.js-toggle-checkbox'),
};
console.log(refs);

const onToggleCheckboxChange = event => {
  console.log('change event');
  const isToggleThemeActive = event.target.checked;
  console.log(refs.toggleCheckbox);
  console.dir(refs.toggleCheckbox);
  console.log(isToggleThemeActive);
  if (isToggleThemeActive) {
    document.body.dataset.colorScheme = 'dark';
    localStorage.setItem('page-color-theme', 'dark');
  } else {
    document.body.dataset.colorScheme = 'light';
    localStorage.setItem('page-color-theme', 'light');
  }
};

refs.toggleCheckbox.addEventListener('change', onToggleCheckboxChange);

const setPageColorTheme = () => {
  const colorThemeFromLS = localStorage.getItem('page-color-theme');
  if (colorThemeFromLS === 'dark') {
    document.body.dataset.colorScheme = 'dark';
    refs.toggleCheckbox.checked = true;
  } else {
    document.body.dataset.colorScheme = 'light';
    refs.toggleCheckbox.checked = false;
  }
};

setPageColorTheme();
