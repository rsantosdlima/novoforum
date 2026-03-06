document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle Logic
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const toggleIcon = document.getElementById('toggleIcon');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.classList.remove('fa-chevron-left');
            toggleIcon.classList.add('fa-chevron-right');
        } else {
            toggleIcon.classList.remove('fa-chevron-right');
            toggleIcon.classList.add('fa-chevron-left');
        }
    });

    // 2. Multi-View Navigation Logic
    const navLinks = document.querySelectorAll('.nav-link, .nav-icon');
    const viewSections = document.querySelectorAll('.view-section');
    const headerTitle = document.getElementById('headerTitle');

    // Mapping of view IDs to Header Titles
    const titleMap = {
        'view-chat': 'Portal de Coleta Unificado (Entrada IA)',
        'view-dashboard': 'Dashboard Estratégico e Insights',
        'view-backlog': 'Backlog de Produto (Vibecode Specs)'
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Get target view id
            const targetId = link.getAttribute('data-target');
            if (!targetId) return;

            // Remove active class from all links and icons
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to corresponding nav-link and nav-icon
            document.querySelectorAll(`[data-target="${targetId}"]`).forEach(el => {
                el.classList.add('active');
            });

            // Hide all views and show target view (Using inline styles to avoid CSS caching issues)
            viewSections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
            });

            const activeSection = document.getElementById(targetId);
            activeSection.classList.add('active');

            // Force flex or block explicitly depending on the view to override any CSS cache
            if(targetId === 'view-dashboard' || targetId === 'view-chat' || targetId === 'view-backlog') {
                 activeSection.style.display = 'flex';
                 activeSection.style.flexDirection = 'column';
            } else {
                 activeSection.style.display = 'block';
            }

            // Update Header Title
            if(titleMap[targetId]) {
                headerTitle.textContent = titleMap[targetId];
            }
        });
    });
});
