function updateUserInfo() {
    const user = getStoredUser();
    if (user) {
        const userNameEl = document.getElementById('userName');
        const userRoleEl = document.getElementById('userRole');
        if (userNameEl) userNameEl.textContent = user.name;
        if (userRoleEl) userRoleEl.textContent = user.role === USER_ROLES.ADMIN ? 'Administrator' : 'User';
        
        if (user.role !== USER_ROLES.ADMIN) {
            const adminElements = document.querySelectorAll('.admin-only');
            adminElements.forEach(el => el.style.display = 'none');
        }
    }
}

function setActiveNav(page) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="close-btn">&times;</button>
    `;
    document.body.appendChild(notification);
    
    gsap.fromTo(notification, 
        { y: -100, opacity: 0 },
        { y: 20, opacity: 1, duration: 0.3 }
    );
    
    setTimeout(() => {
        gsap.to(notification, {
            y: -100,
            opacity: 0,
            duration: 0.3,
            onComplete: () => notification.remove()
        });
    }, 3000);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function getStatusColor(status) {
    const colors = {
        'Active': '#10b981',
        'Upcoming': '#3b82f6',
        'Completed': '#6b7280',
        'Cancelled': '#ef4444',
        'Certified': '#10b981',
        'Pending': '#f59e0b',
        'Expired': '#ef4444'
    };
    return colors[status] || '#6b7280';
}

function exportToCSV(data, filename) {
    if (!data || data.length === 0) return;
    
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(','),
        ...data.map(row => 
            headers.map(header => 
                JSON.stringify(row[header] || '')
            ).join(',')
        )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function exportToPDF(elementId, filename) {
    showNotification('PDF export functionality will be implemented with jsPDF library', 'info');
}

document.addEventListener('DOMContentLoaded', () => {
    updateUserInfo();
    
    gsap.registerPlugin();
});
