// Converted from the current support/index.html. Keep editing this as React JSX.
export default function Help() {
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="site-header">
                <div className="container header-inner">
                    <a className="brand" href="/" aria-label="CanArkiv home">
                        <img
                            src="/assets/brand/logo.png"
                            alt=""
                            width="42"
                            height="42"
                        />
                        <span>CanArkiv</span>
                    </a>
                    <button
                        className="theme-toggle"
                        type="button"
                        data-theme-toggle
                        aria-label="Toggle light and dark theme"
                        title="Toggle theme"
                    >
                        <svg
                            className="icon-sun"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.8"
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
                        </svg>
                        <svg
                            className="icon-moon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.8"
                        >
                            <path d="M20.7 15.3A9 9 0 0 1 8.7 3.3a9 9 0 1 0 12 12Z" />
                        </svg>
                    </button>
                </div>
            </header>
            <main id="main" className="help-main">
                <section className="help-intro">
                    <div className="container narrow">
                        <a href="/" className="back-link">
                            ← Home
                        </a>
                        <h1>Help &amp; Account.</h1>
                        {/*  <p>
                        Answers about finding drinks, contributing to CanArkiv,
                        and managing your account.
                    </p>  */}
                    </div>
                </section>
                <section className="help-body">
                    <div className="container narrow">
                        <div className="help-section">
                            <h2>FAQ</h2>
                            <div className="faq-list">
                                <details>
                                    <summary>
                                        Can I browse without signing in?
                                    </summary>
                                    <p>
                                        Yes. You can explore energy drinks
                                        without an account. Sign in to save
                                        drinks to your lists, write reviews, or
                                        contribute to the archive.
                                    </p>
                                </details>
                                <details>
                                    <summary>
                                        What if I can't find a drink I want to
                                        save?
                                    </summary>
                                    <p>
                                        Try searching by brand or flavor, or
                                        scan the barcode. If the drink isn't
                                        listed, you can submit it using the
                                        <strong>Add</strong> tab in the app.
                                        You'll need to sign in, and new
                                        submissions are reviewed.
                                    </p>
                                </details>
                                <details>
                                    <summary>
                                        How do I add a photo or correct drink
                                        details?
                                    </summary>
                                    <p>
                                        Open the drink in the app and tap the
                                        three-dot menu. From there, choose
                                        <strong>Add Photo</strong>,
                                        <strong>Add or Edit Details</strong>, or
                                        <strong>Suggest a Correction</strong>.
                                    </p>
                                </details>
                                <details>
                                    <summary>
                                        Why isn't my submission visible yet?
                                    </summary>
                                    <p>
                                        Community contributions are reviewed
                                        before they're shown publicly. You can
                                        check their status under
                                        <strong>Profile → Submissions</strong>.
                                    </p>
                                </details>
                            </div>
                        </div>
                        <div
                            className="help-section account-section"
                            id="account"
                        >
                            <div>
                                <h2>Account Settings</h2>
                                <p>
                                    In the app, open
                                    <strong>Profile → Settings</strong> to edit
                                    your profile or access account settings. To
                                    delete your account, select
                                    <strong>
                                        Account &amp; Security → Delete Account
                                    </strong>
                                    .
                                </p>
                                <p style={{ marginTop: "12px" }}>
                                    Can't access the app? You can also request
                                    account deletion without signing in.
                                </p>
                            </div>
                            <a className="text-action" href="/delete-account/">
                                How to delete your account
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                        <div className="help-section" id="contact">
                            <h2>Still Need Help?</h2>
                            <p>
                                For a bug, a question, or an account issue, you
                                can reach us at the address below. If it’s about
                                a drink, include its brand and flavor; if it’s a
                                bug, tell us what happened.
                            </p>
                            <div className="address-row">
                                <code className="email-address">
                                    support@canarkiv.com
                                </code>
                                <button
                                    type="button"
                                    className="copy-button"
                                    data-copy="support@canarkiv.com"
                                >
                                    Copy address
                                </button>
                            </div>
                            <span
                                className="copy-feedback"
                                data-copy-status
                                aria-live="polite"
                            ></span>
                            <p className="discreet-note">
                                Copy the address and paste it into your email
                                app. Never include passwords, verification
                                codes, or recovery links.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <div className="container footer-inner">
                    <span>
                        © <span data-year>2026</span> CanArkiv
                    </span>
                    <a href="/support/">
                        Help &amp; Account <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </footer>
        </>
    );
}
