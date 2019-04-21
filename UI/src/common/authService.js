import Cookies from 'universal-cookie';

const cookies = new Cookies();

const authService = {
    isAuthenticated() {
        return cookies.get('auth') === 'true';
    },

    signIn() {
        cookies.set('auth', true)
    },

    signOut() {
        cookies.set('auth', false)
    }
};

export default authService;