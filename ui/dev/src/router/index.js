import { route } from 'quasar/wrappers';
import VueRouter from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(({ Vue /* store, ssrContext */ }) => {
  Vue.use(VueRouter);

  const Router = new VueRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  // we get each page from server first!
  if (process.env.MODE === 'ssr' && process.env.CLIENT) {
    console.log('!!!!');
    console.log(
      'On route change we deliberately load page from server -- in order to test hydration errors'
    );
    console.log('!!!!');

    let reload = false;
    Router.beforeEach((to, _, next) => {
      if (reload) {
        window.location.href = to.fullPath;
        return;
      }
      reload = true;
      next();
    });
  }

  return Router;
});
