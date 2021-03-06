import { Home } from "../Pages/Main/Home";
import { About } from "../Pages/About/About";
import { dataWawan } from "../Pages/data";
import { MainSection } from "../Pages/Section/MainSection";
import { SubSection } from "../Pages/Section/SubSection";

export const mainRoutes = [
    {
        label: "Home",
        path: "/",
        exact: true,
        component: Home,
    },
    {
        label: "About",
        path: "/about",
        component: About,
    },
    ...dataWawan.map((route, idx) => {
        return {
            label: route.title,
            path: '/'+route.slug,
            component: MainSection,
            customProps: {index: idx}
        }
    }),
    ...dataWawan.map((mainRoute, idx) => {
        return mainRoute.content.map((subRoute, profileIdx) => {
            return {
                label: subRoute.nama,
                path: '/'+mainRoute.slug+'/'+subRoute.slug,
                component: SubSection,
                hide: true,
                customProps: {index: idx, profileIndex: profileIdx}
            }
        });
    }).reduce((x,y) => x.concat(y), [])
]
