document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterItems = document.querySelectorAll('[data-category]');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;

      filterItems.forEach(item => {
        const categories = item.dataset.category.split(' ');
        const shouldShow = filter === 'all' || categories.includes(filter);
        item.classList.toggle('hidden', !shouldShow);
      });
    });
  });

  const yearSpans = document.querySelectorAll('[data-year]');
  yearSpans.forEach(span => {
    span.textContent = new Date().getFullYear();
  });
});
