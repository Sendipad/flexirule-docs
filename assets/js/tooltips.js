document.addEventListener('DOMContentLoaded', () => {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  let activeTooltip = null;

  const showTooltip = (el) => {
    if (activeTooltip) hideTooltip();

    const text = el.getAttribute('data-tooltip');
    if (!text) return;

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.setAttribute('role', 'tooltip');

    const content = document.createElement('div');
    content.className = 'tooltip-content';

    // Support basic multiline via \n
    text.split('\\n').forEach((line, i) => {
      if (i > 0) content.appendChild(document.createElement('br'));
      content.appendChild(document.createTextNode(line));
    });

    tooltip.appendChild(content);
    document.body.appendChild(tooltip);

    const rect = el.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top = rect.top - tooltipRect.height - 8;
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

    // Viewport collisions
    if (top < 8) {
      top = rect.bottom + 8;
      tooltip.classList.add('tooltip-bottom');
    } else {
      tooltip.classList.add('tooltip-top');
    }

    if (left < 8) left = 8;
    if (left + tooltipRect.width > window.innerWidth - 8) {
      left = window.innerWidth - tooltipRect.width - 8;
    }

    tooltip.style.top = `${top + window.scrollY}px`;
    tooltip.style.left = `${left + window.scrollX}px`;

    setTimeout(() => tooltip.classList.add('is-visible'), 10);
    activeTooltip = tooltip;
  };

  const hideTooltip = () => {
    if (!activeTooltip) return;
    const el = activeTooltip;
    el.classList.remove('is-visible');
    el.addEventListener('transitionend', () => el.remove(), { once: true });
    activeTooltip = null;
  };

  tooltips.forEach((el) => {
    el.addEventListener('mouseenter', () => showTooltip(el));
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('focus', () => showTooltip(el));
    el.addEventListener('blur', hideTooltip);

    // Mobile support
    el.addEventListener('touchstart', (e) => {
      if (activeTooltip) {
        hideTooltip();
      } else {
        showTooltip(el);
        e.preventDefault(); // Prevent ghost click
      }
    }, { passive: false });
  });

  window.addEventListener('scroll', hideTooltip, { passive: true });
  window.addEventListener('resize', hideTooltip, { passive: true });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideTooltip();
  });
});
