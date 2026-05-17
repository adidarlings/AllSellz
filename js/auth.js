/* ========================================
   Authentication (localStorage-based)
   ======================================== */

const Auth = {
  user: JSON.parse(localStorage.getItem('allsellz_user') || 'null'),

  login(email, password) {
    const users = JSON.parse(localStorage.getItem('allsellz_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      this.user = { name: user.name, email: user.email };
      localStorage.setItem('allsellz_user', JSON.stringify(this.user));
      this.updateUI();
      return true;
    }
    return false;
  },

  signup(name, email, password) {
    const users = JSON.parse(localStorage.getItem('allsellz_users') || '[]');
    if (users.find(u => u.email === email)) return false;
    users.push({ name, email, password });
    localStorage.setItem('allsellz_users', JSON.stringify(users));
    this.user = { name, email };
    localStorage.setItem('allsellz_user', JSON.stringify(this.user));
    this.updateUI();
    return true;
  },

  logout() {
    this.user = null;
    localStorage.removeItem('allsellz_user');
    this.updateUI();
    toast('Logged out successfully', 'success');
    navigate('home');
  },

  updateUI() {
    const info = document.getElementById('userInfo');
    if (this.user) {
      info.innerHTML = `
        <p class="user-name">${this.user.name}</p>
        <p class="user-email">${this.user.email}</p>`;
    } else {
      info.innerHTML = `
        <p class="user-name">Guest User</p>
        <p class="user-email">Not signed in</p>`;
    }
  }
};
