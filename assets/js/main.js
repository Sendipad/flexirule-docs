document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const toast = $('#toast');
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  };
  const copyText = async (text, message) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(message || 'Copied');
    } catch (_) {
      showToast('Copy failed');
    }
  };

  const themeToggle = $('#theme-toggle');
  themeToggle?.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme') || 'light';
    window.setTheme?.(active === 'dark' ? 'light' : 'dark');
  });

  const menuToggle = $('#mobile-menu-toggle');
  const overlay = $('#sidebar-overlay');
  const setSidebar = (open) => {
    document.body.classList.toggle('sidebar-open', open);
    overlay.hidden = !open;
    menuToggle?.setAttribute('aria-expanded', String(open));
  };
  menuToggle?.addEventListener('click', () => setSidebar(!document.body.classList.contains('sidebar-open')));
  overlay?.addEventListener('click', () => setSidebar(false));
  $$('[data-sidebar-close]').forEach((button) => button.addEventListener('click', () => setSidebar(false)));

  $('#btn-copy-url')?.addEventListener('click', () => copyText(window.location.href, 'Page link copied'));
  $('#btn-copy-md')?.addEventListener('click', () => {
    const source = $('#page-source');
    if (!source) return;
    const data = JSON.parse(source.textContent || '{}');
    copyText(data.raw || '', 'Markdown copied');
  });

  $$('.doc-body h2[id], .doc-body h3[id]').forEach((heading) => {
    if (heading.querySelector('.heading-anchor')) return;
    const anchor = document.createElement('a');
    anchor.className = 'heading-anchor';
    anchor.href = `#${heading.id}`;
    anchor.setAttribute('aria-label', `Link to ${heading.textContent}`);
    anchor.textContent = '#';
    heading.appendChild(anchor);
  });

  $$('pre').forEach((pre) => {
    const code = $('code', pre);
    if (!code || pre.querySelector('.copy-code')) return;
    const button = document.createElement('button');
    button.className = 'copy-code icon-button';
    button.type = 'button';
    button.setAttribute('aria-label', 'Copy code');
    button.innerHTML = '<svg><use href="#icon-copy"></use></svg>';
    button.addEventListener('click', () => copyText(code.innerText, 'Code copied'));
    pre.appendChild(button);
  });

  const progress = $('#reading-progress');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
    progress.style.width = `${value}%`;
  };
  updateProgress();
  document.addEventListener('scroll', updateProgress, { passive: true });

  const toc = $('.toc');
  const tocToggle = $('#toc-toggle');
  tocToggle?.addEventListener('click', () => {
    const open = !toc?.classList.contains('mobile-open');
    toc?.classList.toggle('mobile-open', open);
    tocToggle.setAttribute('aria-expanded', String(open));
  });

  const tocLinks = $$('[data-toc] a');
  if (tocLinks.length) {
    const map = new Map(tocLinks.map((link) => [decodeURIComponent(link.hash.slice(1)), link]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((link) => link.classList.remove('active'));
        map.get(entry.target.id)?.classList.add('active');
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0.01 });
    $$('.doc-body h2[id], .doc-body h3[id]').forEach((heading) => observer.observe(heading));
  }

  const dialog = $('#search-dialog');
  const openSearch = () => {
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    initPagefind();
  };
  $('#search-trigger')?.addEventListener('click', openSearch);
  $('#command-trigger')?.addEventListener('click', openSearch);
  $$('[data-dialog-close]').forEach((button) => button.addEventListener('click', () => dialog?.close()));
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !/input|textarea|select/i.test(document.activeElement?.tagName || '')) {
      event.preventDefault();
      openSearch();
    }
  });

  let pagefindLoaded = false;
  function initPagefind() {
    if (pagefindLoaded || !$('#pagefind-search')) return;
    pagefindLoaded = true;
    const script = document.createElement('script');
    script.src = dialog.getAttribute('data-pagefind-script') || '/pagefind/pagefind-ui.js';
    script.onload = () => {
      if (window.PagefindUI) new window.PagefindUI({ element: '#pagefind-search', showSubResults: true, highlightParam: 'highlight' });
    };
    script.onerror = () => { $('#pagefind-search').innerHTML = '<p class="pagefind-ui__message">Search index is generated during production builds.</p>'; };
    document.head.appendChild(script);
  }
});
