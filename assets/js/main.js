document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('backdrop');

  if (mobileMenuToggle && sidebar) {
    const closeSidebar = () => {
      sidebar.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    };

    mobileMenuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      document.body.classList.toggle('sidebar-open');
    });

    backdrop.addEventListener('click', closeSidebar);

    // Basic swipe-to-close logic for mobile
    let touchStartY = 0;
    sidebar.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    });

    sidebar.addEventListener('touchmove', (e) => {
      const touchY = e.touches[0].clientY;
      const diff = touchY - touchStartY;
      if (diff > 50 && sidebar.classList.contains('active')) {
        closeSidebar();
      }
    });
  }

  // Sidebar Collapsible logic & Persistence
  const expandedSections = JSON.parse(localStorage.getItem('sidebar-expanded') || '{}');

  document.querySelectorAll('.sidebar-item.has-children').forEach(item => {
    const id = item.querySelector('.sidebar-link').getAttribute('href');
    if (expandedSections[id]) {
      item.classList.add('expanded');
    }

    const toggle = item.querySelector('.sidebar-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('expanded');
        expandedSections[id] = item.classList.contains('expanded');
        localStorage.setItem('sidebar-expanded', JSON.stringify(expandedSections));
      });
    }
  });

  // Sidebar Scroll Persistence
  if (sidebar) {
    const scrollPos = localStorage.getItem('sidebar-scroll');
    if (scrollPos) {
      sidebar.scrollTop = scrollPos;
    }
    sidebar.addEventListener('scroll', () => {
      localStorage.setItem('sidebar-scroll', sidebar.scrollTop);
    });
  }

  // Action Menu Dropdown logic
  document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = button.closest('.dropdown');
      dropdown.classList.toggle('active');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.active').forEach(d => d.classList.remove('active'));
  });

  // Copy Markdown logic
  const copyBtn = document.getElementById('copy-markdown');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const content = document.querySelector('.docs-content').innerText;
      navigator.clipboard.writeText(content).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copied!';
        setTimeout(() => copyBtn.innerText = originalText, 2000);
      });
    });
  }

  // Share Copy URL logic
  const shareCopyBtn = document.getElementById('share-copy-url');
  if (shareCopyBtn) {
    shareCopyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const originalText = shareCopyBtn.innerText;
        shareCopyBtn.innerText = 'Copied!';
        setTimeout(() => shareCopyBtn.innerText = originalText, 2000);
      });
    });
  }
});
