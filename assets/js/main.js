document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Sidebar Toggle (Mobile)
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  const toggleSidebar = () => {
    if (sidebar) {
      sidebar.classList.toggle('active');
      sidebarOverlay.classList.toggle('show');
    }
  };

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

  // TOC Drawer Toggle
  const tocToggle = document.getElementById('toc-toggle');
  const tocFab = document.getElementById('toc-fab');
  const tocDrawer = document.getElementById('toc-drawer');
  const tocOverlay = document.getElementById('toc-overlay');

  const toggleTOC = () => {
    if (tocDrawer) {
      tocDrawer.classList.toggle('open');
      tocOverlay.classList.toggle('show');
    }
  };

  if (tocToggle) tocToggle.addEventListener('click', toggleTOC);
  if (tocFab) tocFab.addEventListener('click', toggleTOC);
  if (tocOverlay) tocOverlay.addEventListener('click', toggleTOC);

  // Dropdown Logic
  const aiDropdownToggle = document.getElementById('ai-dropdown-toggle');
  const aiDropdownMenu = document.getElementById('ai-dropdown-menu');

  if (aiDropdownToggle && aiDropdownMenu) {
    aiDropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      aiDropdownMenu.classList.toggle('show');
      aiDropdownToggle.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!aiDropdownToggle.contains(e.target) && !aiDropdownMenu.contains(e.target)) {
        aiDropdownMenu.classList.remove('show');
        aiDropdownToggle.classList.remove('active');
      }
    });
  }

  // Action Bar Logic
  const showToast = (message) => {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied to clipboard!');
    });
  };

  const btnPrint = document.getElementById('btn-print');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => window.print());
  }

  const btnCopyUrl = document.getElementById('btn-copy-url');
  if (btnCopyUrl) {
    btnCopyUrl.addEventListener('click', () => copyToClipboard(window.location.href));
  }

  const btnCopyMd = document.getElementById('btn-copy-md');
  if (btnCopyMd) {
    btnCopyMd.addEventListener('click', () => {
      const md = document.getElementById('raw-content').textContent;
      copyToClipboard(md);
    });
  }

  // AI Buttons
  const aiButtons = document.querySelectorAll('.ai-btn');
  aiButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const ai = btn.getAttribute('data-ai');
      const title = document.title;
      const url = window.location.href;
      const content = document.getElementById('raw-content').textContent;

      const context = `Title: ${title}\nURL: ${url}\n\nContent:\n${content}`;

      navigator.clipboard.writeText(context).then(() => {
        showToast(`Context copied! Opening ${ai.charAt(0).toUpperCase() + ai.slice(1)}...`);

        let aiUrl = '';
        if (ai === 'chatgpt') aiUrl = 'https://chat.openai.com/';
        if (ai === 'claude') aiUrl = 'https://claude.ai/chat';
        if (ai === 'gemini') aiUrl = 'https://gemini.google.com/app';

        setTimeout(() => {
          window.open(aiUrl, '_blank');
        }, 1000);
      });
    });
  });

  // Deep Link & Browser Link Logic
  const openAppBtn = document.querySelector('.open-app-btn');
  const openBrowserBtn = document.querySelector('.open-browser-btn');

  const getEncodedContent = () => {
    const el = document.getElementById('raw-content');
    if (!el) return '';
    const content = el.textContent;
    return encodeURIComponent(content);
  };

  if (openAppBtn) {
    openAppBtn.addEventListener('click', () => {
      const protocol = openAppBtn.getAttribute('data-protocol');
      const context = getEncodedContent();
      const finalUrl = `${protocol}?context=${context}`;
      window.location.href = finalUrl;
    });
  }

  if (openBrowserBtn) {
    openBrowserBtn.addEventListener('click', () => {
      const baseUrl = openBrowserBtn.getAttribute('data-url');
      const context = getEncodedContent();
      const finalUrl = `${baseUrl}?context=${context}`;
      window.open(finalUrl, '_blank');
    });
  }

  // Heading Anchors
  const headings = document.querySelectorAll('.docs-content h2, .docs-content h3, .docs-content h4');
  headings.forEach(heading => {
    if (heading.id) {
      const anchor = document.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = `#${heading.id}`;
      anchor.innerHTML = '#';
      anchor.style.marginLeft = '0.5rem';
      anchor.style.color = 'var(--color-border)';
      anchor.style.fontSize = '0.8em';
      anchor.style.visibility = 'hidden';

      heading.appendChild(anchor);

      heading.addEventListener('mouseenter', () => anchor.style.visibility = 'visible');
      heading.addEventListener('mouseleave', () => anchor.style.visibility = 'hidden');
    }
  });

  // Medium Zoom
  if (typeof mediumZoom !== 'undefined') {
    mediumZoom('.docs-content img', {
      margin: 24,
      background: 'var(--color-background)',
    });
  }
});
