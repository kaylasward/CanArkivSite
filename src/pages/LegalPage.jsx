function ThemeToggle() {
    return (
        <button
            className="theme-toggle"
            type="button"
            data-theme-toggle
            aria-label="Toggle light and dark theme"
            title="Toggle theme"
        >
            <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8">
                <path d="M20.7 15.3A9 9 0 0 1 8.7 3.3a9 9 0 1 0 12 12Z" />
            </svg>
        </button>
    );
}

export default function LegalPage({ introduction, sections, title }) {
    return (
        <>
            <a className="skip-link" href="#main">Skip to content</a>
            <header className="site-header">
                <div className="container header-inner">
                    <a className="brand" href="/" aria-label="CanArkiv home">
                        <img src="/assets/brand/logo.png" alt="" width="42" height="42" />
                        <span>CanArkiv</span>
                    </a>
                    <ThemeToggle />
                </div>
            </header>
            <main id="main" className="help-main">
                <section className="help-intro">
                    <div className="container narrow">
                        <a href="/" className="back-link">← Home</a>
                        <h1>{title}</h1>
                        {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        <p className="legal-updated">Updated October 29, 2026</p>
                    </div>
                </section>
                <section className="help-body">
                    <div className="container narrow">
                        {sections.map((section) => (
                            <section className="help-section legal-section" key={section.heading}>
                                <h2>{section.heading}</h2>
                                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                            </section>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <div className="container footer-inner legal-footer">
                    <span>© <span data-year>2026</span> CanArkiv</span>
                    <nav aria-label="Legal and support">
                        <a href="/privacy-policy/">Privacy</a>
                        <a href="/contribution-terms/">Terms</a>
                        <a href="/community-guidelines/">Guidelines</a>
                        <a href="/support/">Support</a>
                    </nav>
                </div>
            </footer>
        </>
    );
}
