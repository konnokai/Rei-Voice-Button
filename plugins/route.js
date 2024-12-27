export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    // local
    app.i18n.locale = 'zh';

    // Dark
    let dark_mode = false;
    const cookie_dark = localStorage.getItem('dark');
    if (cookie_dark) {
      dark_mode = cookie_dark;
    } else {
      localStorage.setItem('dark', dark_mode);
    }
    store.commit('SET_DARK', dark_mode);
    next();
  });
};
