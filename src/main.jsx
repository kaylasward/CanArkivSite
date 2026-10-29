import { useEffect } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import Help from "./pages/Help.jsx";
import DeleteAccount from "./pages/DeleteAccount.jsx";
import CommunityGuidelines from "./pages/CommunityGuidelines.jsx";
import ContributionTerms from "./pages/ContributionTerms.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import { initializeSite } from "./siteInteractions.js";

function App() {
    useEffect(() => initializeSite(), []);
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/support" || path === "/support/index.html") return <Help />;
    if (path === "/delete-account" || path === "/delete-account/index.html")
        return <DeleteAccount />;
    if (
        path === "/community-guidelines" ||
        path === "/community-guidelines/index.html"
    )
        return <CommunityGuidelines />;
    if (
        path === "/contribution-terms" ||
        path === "/contribution-terms/index.html"
    )
        return <ContributionTerms />;
    if (path === "/privacy-policy" || path === "/privacy-policy/index.html")
        return <PrivacyPolicy />;
    return <Home />;
}

const root = document.getElementById("root");
if (root.hasChildNodes()) {
    hydrateRoot(root, <App />);
} else {
    createRoot(root).render(<App />);
}
