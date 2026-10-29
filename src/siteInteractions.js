// Existing interactions preserved, initialized AFTER React mounts its elements.
export function initializeSite() {
    const root = document.documentElement;
    const toggle = document.querySelector("[data-theme-toggle]");
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const key = "canarkiv-theme";
    const read = () => {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    };
    const save = (value) => {
        try {
            localStorage.setItem(key, value);
        } catch {}
    };
    const apply = (theme) => {
        root.dataset.theme = theme;
        toggle?.setAttribute(
            "aria-label",
            `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
        );
        toggle?.setAttribute(
            "title",
            `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
        );
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = theme === "dark" ? "#11171A" : "#F6F7F4";
    };
    const saved = read();
    apply(
        saved === "light" || saved === "dark"
            ? saved
            : media.matches
              ? "dark"
              : "light",
    );
    const onToggle = () => {
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        save(next);
        apply(next);
    };
    toggle?.addEventListener("click", onToggle);
    const onSystemTheme = () => {
        if (!read()) apply(media.matches ? "dark" : "light");
    };
    media.addEventListener?.("change", onSystemTheme);
    document.querySelectorAll("[data-year]").forEach((el) => {
        el.textContent = new Date().getFullYear();
    });

    async function copyAddress(address) {
        if (navigator.clipboard?.writeText)
            return navigator.clipboard.writeText(address);
        const area = document.createElement("textarea");
        area.value = address;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.append(area);
        area.select();
        const ok = document.execCommand("copy");
        area.remove();
        if (!ok) throw Error("Copy unavailable");
    }
    const copyActions = [...document.querySelectorAll("[data-copy]")].map(
        (button) => {
            const onClick = async () => {
                const feedback = button
                    .closest(".help-section")
                    ?.querySelector("[data-copy-status]");
                try {
                    await copyAddress(button.dataset.copy);
                    if (feedback) feedback.textContent = "Address copied.";
                } catch {
                    if (feedback)
                        feedback.textContent =
                            "Could not copy automatically. Please select the address above.";
                }
            };
            button.addEventListener("click", onClick);
            return () => button.removeEventListener("click", onClick);
        },
    );
    return () => {
        toggle?.removeEventListener("click", onToggle);
        media.removeEventListener?.("change", onSystemTheme);
        copyActions.forEach((dispose) => dispose());
    };
}
