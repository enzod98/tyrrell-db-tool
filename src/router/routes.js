const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "data",
        name: "mainData",
        component: () => import("pages/Main/DataPage.vue"),
      },
      {
        path: "race-setup",
        name: "mainRaceSetup",
        component: () => import("pages/Main/RaceSetup.vue"),
      },
      {
        path: "race-history",
        name: "mainRaceHistory",
        component: () => import("pages/Main/RaceHistory.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
