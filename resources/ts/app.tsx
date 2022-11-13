require("../js/bootstrap");

import React, { ReactNode } from "react";
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import ThemeProvider from "./Layouts/ThemeContext";
import Template from "./Layouts/Template";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "Brewing Tools";

let theme = "light";
if (theme === "light")
    document.documentElement.setAttribute("data-theme", "light");
else if (theme === "dark")
    document.documentElement.setAttribute("data-theme", "dark");

document.documentElement.setAttribute("style", "");

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: (name) =>
    // resolvePageComponent(
    //     `./Pages/${name}.default`,
    //     import.meta.glob("./Pages/**/*.tsx")
    // ),
    resolve: (name) => {
        const page = require(`./Pages/${name}`).default;
        if (page.layout === undefined)
            page.layout = (page: any) => <Template>{page}</Template>;
        return page;
    },
    setup({ el, App, props }) {
        const container = document.getElementById("app");
        if (container) {
            const root = createRoot(container);
            root.render(
                <ThemeProvider>
                    <App {...props} />
                </ThemeProvider>
            );
        }
    },
});

InertiaProgress.init({ color: "#4B5563" });
