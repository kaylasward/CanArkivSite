import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
// Converted from the current delete-account/index.html. Keep editing this as React JSX.
export default function DeleteAccount() {
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Header />
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
                                    Open <strong>Profile</strong> and tap the{" "}
                                    <strong>Settings</strong> icon.
                                </li>
                                <li>
                                    Go to{" "}
                                    <strong>
                                        Account &amp; Security → Delete Account
                                    </strong>{" "}
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
                                Your sign-in account, profile, ratings, reviews,
                                Tried and Want to Try lists, reports, blocks,
                                and uploaded community photos are deleted. Basic
                                product facts and barcodes you added may stay in
                                the catalog without a link to your account.
                            </p>
                        </div>
                        <div className="help-section" id="request">
                            <h2>Request deletion without the app</h2>
                            <p>
                                If you've uninstalled CanArkiv or can't access
                                your account, contact{" "}
                                <strong>support@canarkiv.com</strong> with the
                                subject{" "}
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
            <Footer />
        </>
    );
}
