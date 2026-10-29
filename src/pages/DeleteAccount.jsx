// Converted from the current delete-account/index.html. Keep editing this as React JSX.
export default function DeleteAccount() {
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
                        <a className="back-link" href="/support/">
                            ← Help &amp; Account
                        </a>
                        <h1>Delete Your Account.</h1>
                        <p>
                            You can delete your CanArkiv account in the app. If
                            you no longer have access, you can request deletion
                            without the app.
                        </p>
                    </div>
                </section>
                <section className="help-body">
                    <div className="container narrow">
                        <div className="help-section">
                            <h2>Delete your account in the app</h2>
                            <ol className="steps">
                                <li>Sign in to CanArkiv.</li>
                                <li>
                                    Open <strong>Profile</strong> and tap the
                                    <strong>Settings</strong> icon.
                                </li>
                                <li>
                                    Go to
                                    <strong>
                                        Account &amp; Security → Delete Account
                                    </strong>
                                    and follow the confirmation steps.
                                </li>
                            </ol>
                            <p className="discreet-note">
                                Deletion can't be undone. The app shows what
                                will be deleted before you confirm.
                            </p>
                        </div>
                        <div className="help-section">
                            <h2>What gets deleted?</h2>
                            <p>
                                Your profile, ratings, reviews, drink lists,
                                reports, and uploaded photos are deleted.
                                Catalog records and barcode information you've
                                contributed may remain in the archive, without a
                                link to your account.
                            </p>
                        </div>
                        <div className="help-section" id="request">
                            <h2>Request deletion without the app</h2>
                            <p>
                                If you've uninstalled CanArkiv or can't access
                                your account, contact
                                <strong>support@canarkiv.com</strong> with the
                                subject
                                <strong>
                                    CanArkiv account deletion request
                                </strong>
                                . Include the email address linked to your
                                account. We may ask you to verify ownership.
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
                                Don't send your password, verification code, or
                                recovery link. You don't need to reinstall the
                                app to make a deletion request.
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
                        Help &amp; account <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </footer>
        </>
    );
}
