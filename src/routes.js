import Dashboard from "views/Dashboard.jsx";
import Research from "views/Research.jsx";
import Nuis from "views/NUIs.jsx";
import Conclusion from "views/Conclusion.jsx";
import Sources from "views/Sources.jsx";


const routes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bank",
    component: Dashboard,
    layout: "/NUI"
  },
  {
    path: "/research",
    name: "Onderzoek",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-zoom-split",
    component: Research,
    layout: "/NUI"
  },
  {
    path: "/nuis",
    name: "Natural UI's",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-tap-02",
    component: Nuis,
    layout: "/NUI"
  },
  {
    path: "/conclusion",
    name: "Conclusie",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-check-2",
    component: Conclusion,
    layout: "/NUI"
  },
  {
    path: "/sources",
    name: "Bronnen",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-single-copy-04",
    component: Sources,
    layout: "/NUI"
  },
];

export default routes;
