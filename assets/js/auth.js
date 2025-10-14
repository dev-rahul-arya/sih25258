let supabaseClient = null;

async function initSupabase() {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key);
    }
}

function getStoredUser() {
    const userStr = localStorage.getItem('aapda_user');
    return userStr ? JSON.parse(userStr) : null;
}

function setStoredUser(user) {
    localStorage.setItem('aapda_user', JSON.stringify(user));
}

function clearStoredUser() {
    localStorage.removeItem('aapda_user');
}

async function login(email, password) {
    try {
        if (supabaseClient) {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                return { success: false, error: error.message };
            }

            if (data && data.user) {
                const role = data.user.user_metadata?.role || USER_ROLES.USER;
                const name = data.user.user_metadata?.name || data.user.email.split('@')[0];
                
                const userData = {
                    id: data.user.id,
                    email: data.user.email,
                    name: name,
                    role: role
                };
                
                setStoredUser(userData);
                return { success: true, user: userData };
            }
        }
        
        const mockUsers = [
            { email: 'admin@ndma.gov.in', password: 'admin123', role: USER_ROLES.ADMIN, name: 'Admin User', id: 'admin-001' },
            { email: 'user@ndma.gov.in', password: 'user123', role: USER_ROLES.USER, name: 'Regular User', id: 'user-001' }
        ];

        const user = mockUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            const userData = {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            };
            setStoredUser(userData);
            return { success: true, user: userData };
        }
        
        return { success: false, error: 'Invalid email or password' };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Login failed. Please try again.' };
    }
}

async function logout() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }
    clearStoredUser();
    window.location.href = 'login.html';
}

async function checkAuth() {
    if (supabaseClient) {
        const { data } = await supabaseClient.auth.getSession();
        if (data.session) {
            const user = getStoredUser();
            if (user) {
                return user;
            }
        }
    }
    
    const user = getStoredUser();
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}

function isAdmin() {
    const user = getStoredUser();
    return user && user.role === USER_ROLES.ADMIN;
}

function requireAdmin() {
    const user = getStoredUser();
    if (!user || user.role !== USER_ROLES.ADMIN) {
        alert('Access denied. Admin privileges required.');
        window.location.href = 'dashboard.html';
        return false;
    }
    return true;
}

async function initAuth() {
    await initSupabase();
    
    if (supabaseClient) {
        const { data } = await supabaseClient.auth.getSession();
        if (data.session && data.session.user) {
            const role = data.session.user.user_metadata?.role || USER_ROLES.USER;
            const name = data.session.user.user_metadata?.name || data.session.user.email.split('@')[0];
            
            const userData = {
                id: data.session.user.id,
                email: data.session.user.email,
                name: name,
                role: role
            };
            setStoredUser(userData);
        }
    }
}

initAuth();
