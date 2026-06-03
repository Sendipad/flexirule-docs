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
  const copyText = async (text, message, btn = null) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(message || 'Copied');
      if (btn) {
        const icon = btn.innerHTML;
        btn.innerHTML = '<svg><use href="#icon-check"></use></svg>';
        btn.classList.add('success');
        setTimeout(() => {
          btn.innerHTML = icon;
          btn.classList.remove('success');
        }, 2000);
      }
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

  const desktopSidebarToggle = $('#desktop-sidebar-toggle');
  const sidebarCollapsedKey = 'flexirule:sidebar-collapsed';
  const isSidebarCollapsed = localStorage.getItem(sidebarCollapsedKey) === 'true';

  const setDesktopSidebar = (collapsed) => {
    document.body.classList.toggle('sidebar-collapsed', collapsed);
    localStorage.setItem(sidebarCollapsedKey, String(collapsed));
  };

  if (isSidebarCollapsed) {
    document.body.classList.add('sidebar-collapsed');
  }

  desktopSidebarToggle?.addEventListener('click', () => {
    setDesktopSidebar(!document.body.classList.contains('sidebar-collapsed'));
  });

  const sidebar = $('#sidebar');
  if (sidebar) {
    const sidebarScrollKey = 'flexirule:sidebar-scroll';
    sidebar.scrollTop = Number(sessionStorage.getItem(sidebarScrollKey) || 0);
    sidebar.addEventListener('scroll', () => sessionStorage.setItem(sidebarScrollKey, String(sidebar.scrollTop)), { passive: true });
  }

  const prefetched = new Set();
  const prefetchPage = (href) => {
    if (!href || prefetched.has(href) || href.startsWith('#')) return;
    prefetched.add(href);
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  };
  $$('.sidebar-link, .doc-card, .pager-link').forEach((link) => {
    link.addEventListener('mouseenter', () => prefetchPage(link.href), { once: true });
    link.addEventListener('focus', () => prefetchPage(link.href), { once: true });
  });

  const btnCopyUrl = $('#btn-copy-url');
  if (btnCopyUrl) {
    const originalText = btnCopyUrl.querySelector('span').textContent;
    btnCopyUrl.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Page link copied');
        btnCopyUrl.querySelector('span').textContent = 'Copied ✓';
        setTimeout(() => { btnCopyUrl.querySelector('span').textContent = originalText; }, 2000);
      } catch (_) {
        showToast('Copy failed');
      }
    });
  }

  const btnCopyMd = $('#btn-copy-md');
  if (btnCopyMd) {
    const originalText = btnCopyMd.querySelector('span').textContent;
    btnCopyMd.addEventListener('click', async () => {
      const source = $('#page-source');
      let markdown = '';
      if (source) {
        try {
          const data = JSON.parse(source.textContent || '{}');
          markdown = data.raw || '';
        } catch (_) { /* fallback */ }
      }

      if (!markdown) {
        const body = $('.doc-body');
        markdown = body ? body.innerText : document.body.innerText;
      }

      try {
        await navigator.clipboard.writeText(markdown);
        showToast('Markdown copied');
        btnCopyMd.querySelector('span').textContent = 'Copied ✓';
        setTimeout(() => { btnCopyMd.querySelector('span').textContent = originalText; }, 2000);
      } catch (_) {
        showToast('Copy failed');
        btnCopyMd.querySelector('span').textContent = 'Copy Failed';
        setTimeout(() => { btnCopyMd.querySelector('span').textContent = originalText; }, 2000);
      }
    });
  }

  $('#btn-download-pdf')?.addEventListener('click', () => window.print());

  const openAI = (baseUrl) => {
    const prompt = `I'm currently reading the following documentation page:\n\nTitle: ${document.title}\nURL: ${window.location.href}\n\nPlease answer any questions I have based on the contents of this page.`;
    const url = `${baseUrl}${encodeURIComponent(prompt)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  $('#btn-chatgpt')?.addEventListener('click', () => openAI('https://chatgpt.com/?q='));
  $('#btn-claude')?.addEventListener('click', () => openAI('https://claude.ai/new?q='));

  $$('.btn-feedback').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isFirstAction = !$('.btn-feedback.active');
      $$('.btn-feedback').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      if (isFirstAction) {
        showToast('Thank you for your feedback!');
      }
    });
  });

  $$('pre').forEach((pre) => {
    const code = $('code', pre);
    if (!code || pre.querySelector('.copy-code')) return;
    const button = document.createElement('button');
    button.className = 'copy-code icon-button';
    button.type = 'button';
    button.setAttribute('aria-label', 'Copy code');
    button.innerHTML = '<svg><use href="#icon-copy"></use></svg>';
    button.addEventListener('click', () => copyText(code.innerText, 'Code copied', button));
    pre.prepend(button);
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
  const setToc = (open) => {
    toc?.classList.toggle('mobile-open', open);
    tocToggle?.setAttribute('aria-expanded', String(open));
    if (open) {
      const closeHandler = (e) => {
        if (!toc?.contains(e.target) && !tocToggle?.contains(e.target)) {
          setToc(false);
          document.removeEventListener('click', closeHandler);
        }
      };
      setTimeout(() => document.addEventListener('click', closeHandler), 10);
    }
  };
  tocToggle?.addEventListener('click', () => setToc(!toc?.classList.contains('mobile-open')));

  document.addEventListener('click', (e) => {
    $$('.action-dropdown[open]').forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.removeAttribute('open');
      }
    });
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
    const isTyping = /input|textarea|select/i.test(document.activeElement?.tagName || '');
    const isCommandK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
    if ((event.key === '/' && !isTyping) || isCommandK) {
      event.preventDefault();
      openSearch();
    }
  });


  const searchMemoryKey = 'flexirule:recent-searches';
  const pinnedSearches = ['conditions', 'action runtime', 'rule builder', 'execution context'];
  const readRecentSearches = () => {
    try { return JSON.parse(localStorage.getItem(searchMemoryKey) || '[]'); } catch (_) { return []; }
  };
  const saveRecentSearch = (query) => {
    const normalized = query.trim();
    if (normalized.length < 2) return;
    const recent = [normalized, ...readRecentSearches().filter((item) => item.toLowerCase() !== normalized.toLowerCase())].slice(0, 5);
    try { localStorage.setItem(searchMemoryKey, JSON.stringify(recent)); } catch (_) { /* ignore unavailable storage */ }
    renderSearchChips();
  };
  const runSearchShortcut = (query) => {
    const input = $('.pagefind-ui__search-input');
    if (!input) return;
    input.value = query;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
    saveRecentSearch(query);
  };
  function renderSearchChips() {
    const render = (root, items) => {
      if (!root) return;
      root.innerHTML = '';
      items.forEach((item) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'search-chip';
        button.textContent = item;
        button.addEventListener('click', () => runSearchShortcut(item));
        root.appendChild(button);
      });
      if (!items.length) {
        const empty = document.createElement('span');
        empty.className = 'search-empty';
        empty.textContent = 'No searches yet';
        root.appendChild(empty);
      }
    };
    render($('#recent-searches'), readRecentSearches());
    render($('#pinned-searches'), pinnedSearches);
  }

  let pagefindLoaded = false;
  function initPagefind() {
    renderSearchChips();
    if (pagefindLoaded || !$('#pagefind-search')) return;
    pagefindLoaded = true;
    const script = document.createElement('script');
    script.src = dialog.getAttribute('data-pagefind-script') || '/pagefind/pagefind-ui.js';
    script.onload = () => {
      if (window.PagefindUI) {
        new window.PagefindUI({ element: '#pagefind-search', showSubResults: true, highlightParam: 'highlight', autofocus: true });
        window.setTimeout(() => {
          const input = $('.pagefind-ui__search-input');
          input?.addEventListener('change', () => saveRecentSearch(input.value));
          input?.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') saveRecentSearch(input.value);
          });
        }, 0);
      }
    };
    script.onerror = () => { $('#pagefind-search').innerHTML = '<p class="pagefind-ui__message">Search index is generated during production builds.</p>'; };
    document.head.appendChild(script);
  }
});
