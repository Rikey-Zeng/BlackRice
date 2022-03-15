import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/reg",
      name: "Register",
      showFooter: false,
      component: () => import("../pages/register"),
    },
    {
      path: "/cart",
      name: "Cart",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/cart"),
    },
    {
      path: "/mine",
      name: "Mine",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/mine"),
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        showFooter: false,
      },
      component: () => import("../pages/login"),
    },
    {
      path: "/fenlei",
      name: "Fenlei",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/fenlei"),
    },
    {
      path: "/order",
      name: "Order",
      meta: {
        showFooter: false,
      },
      component: () => import("../pages/order"),
    },
    {
      path: "/detail/:id",
      name: "Detail",

      meta: {
        showFooter: false,
      },
      component: () => import("../pages/detail"),
    },
    {
      path: "/home",
      name: "Home",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/home"),
    },
    {
      path: "/address",
      name: "Address",
      meta: {
        showFooter: true,
      },
      component: () => import("../pages/address"),
    },
  ],
});
export default router;
