import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const root = resolve(import.meta.dirname, "..");
const pages = [
    ["index.html", "/src/pages/Home.jsx"],
    ["support/index.html", "/src/pages/Help.jsx"],
    ["delete-account/index.html", "/src/pages/DeleteAccount.jsx"],
    ["privacy-policy/index.html", "/src/pages/PrivacyPolicy.jsx"],
    ["contribution-terms/index.html", "/src/pages/ContributionTerms.jsx"],
    ["community-guidelines/index.html", "/src/pages/CommunityGuidelines.jsx"],
];

const vite = await createServer({
    root,
    appType: "custom",
    logLevel: "error",
    server: { hmr: false, middlewareMode: true },
});

try {
    for (const [output, modulePath] of pages) {
        const { default: Page } = await vite.ssrLoadModule(modulePath);
        const markup = renderToString(createElement(Page));
        const file = resolve(root, "dist", output);
        const html = await readFile(file, "utf8");
        const mount = '<div id="root"></div>';
        if (!html.includes(mount)) {
            throw new Error(`Missing React mount point in ${output}`);
        }
        await writeFile(
            file,
            html.replace(mount, `<div id="root">${markup}</div>`),
        );
    }
} finally {
    await vite.close();
}
