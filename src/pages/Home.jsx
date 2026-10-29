import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
// Converted from the current index.html. Keep editing this as React JSX.
export default function Home() {
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Header />
            <main id="main">
                <section className="hero" aria-labelledby="hero-title">
                    <div className="container hero-grid">
                        <div className="hero-copy">
                            <h1 id="hero-title">
                                Find it.
                                <br />
                                Try it.
                                <br />
                                <span className="accent">Remember it.</span>
                            </h1>
                            <p className="hero-lead">
                                Discover energy drinks, keep track of what
                                you've tried, and save the ones you want to try
                                next. Missing a drink? Help add it to the
                                archive.
                            </p>
                        </div>
                        <div className="preview-wrap">
                            <div
                                aria-label="Illustrative CanArkiv Explore screen preview with sample drink entries and the real app can placeholder"
                                className="preview-shell"
                            >
                                <div className="preview-screen">
                                    <div className="preview-search">
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                cx="10.5"
                                                cy="10.5"
                                                r="6.5"
                                            ></circle>
                                            <path d="m16 16 5 5"></path>
                                        </svg>
                                        <span className="preview-search-label">
                                            Search
                                        </span>
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M4 6v12M7 4v16M11 6v12M14 4v16M18 6v12M21 4v16"></path>
                                        </svg>
                                    </div>
                                    <div className="preview-toolbar">
                                        <span className="preview-filter">
                                            Sort: Name ▾
                                        </span>
                                        <span className="preview-filter">
                                            Status: All ▾
                                        </span>
                                    </div>
                                    <div className="preview-list">
                                        <div className="preview-drink">
                                            <div className="preview-image">
                                                <img
                                                    alt=""
                                                    height="62"
                                                    src="/assets/images/drink-placeholder.svg"
                                                    width="62"
                                                />
                                            </div>
                                            <div className="preview-body">
                                                <span className="preview-brand">
                                                    ARCADIA
                                                </span>
                                                <span className="preview-flavor">
                                                    Lime Spark
                                                </span>
                                                <span className="preview-meta">
                                                    <span>
                                                        <span className="preview-star">
                                                            ★
                                                        </span>
                                                        4.3 · 16 ratings
                                                    </span>
                                                    <span className="preview-pill">
                                                        ✓ Tried
                                                    </span>
                                                </span>
                                            </div>
                                            <span
                                                aria-hidden="true"
                                                className="preview-chevron"
                                            >
                                                ›
                                            </span>
                                        </div>
                                        <div className="preview-drink">
                                            <div className="preview-image">
                                                <img
                                                    alt=""
                                                    height="62"
                                                    src="/assets/images/drink-placeholder.svg"
                                                    width="62"
                                                />
                                            </div>
                                            <div className="preview-body">
                                                <span className="preview-brand">
                                                    NOVA
                                                </span>
                                                <span className="preview-flavor">
                                                    Midnight Berry
                                                </span>
                                                <span className="preview-meta">
                                                    <span>
                                                        <span className="preview-star">
                                                            ★
                                                        </span>
                                                        4.6 · 8 ratings
                                                    </span>
                                                    <span className="preview-pill want">
                                                        + Want to Try
                                                    </span>
                                                </span>
                                            </div>
                                            <span
                                                aria-hidden="true"
                                                className="preview-chevron"
                                            >
                                                ›
                                            </span>
                                        </div>
                                        <div className="preview-drink">
                                            <div className="preview-image">
                                                <img
                                                    alt=""
                                                    height="62"
                                                    src="/assets/images/drink-placeholder.svg"
                                                    width="62"
                                                />
                                            </div>
                                            <div className="preview-body">
                                                <span className="preview-brand">
                                                    EMBER
                                                </span>
                                                <span className="preview-flavor">
                                                    Golden Citrus
                                                </span>
                                                <span className="preview-meta">
                                                    <span>
                                                        <span className="preview-star">
                                                            ★
                                                        </span>
                                                        4.1 · 24 ratings
                                                    </span>
                                                </span>
                                            </div>
                                            <span
                                                aria-hidden="true"
                                                className="preview-chevron"
                                            >
                                                ›
                                            </span>
                                        </div>
                                    </div>
                                    <div className="preview-tabbar">
                                        <span className="preview-tab active">
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    cx="10.5"
                                                    cy="10.5"
                                                    r="6.5"
                                                ></circle>
                                                <path d="m16 16 5 5"></path>
                                            </svg>
                                            Explore
                                        </span>
                                        <span className="preview-tab">
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 4v16M4 12h16"></path>
                                            </svg>
                                            Add
                                        </span>
                                        <span className="preview-tab">
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="8"
                                                    r="3.8"
                                                ></circle>
                                                <path d="M4.8 21c.2-4 3.2-6.2 7.2-6.2s7 2.2 7.2 6.2"></path>
                                            </svg>
                                            Profile
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="preview-note">
                                Illustrative preview · Sample drinks
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className="features-section"
                    aria-label="What CanArkiv does"
                    id="features"
                >
                    <div className="container">
                        <div className="feature-grid">
                            <article className="feature">
                                <div className="feature-icon">
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                        <circle
                                            cx="10.5"
                                            cy="10.5"
                                            r="6.5"
                                        ></circle>
                                        <path d="m16 16 5 5"></path>
                                    </svg>
                                </div>
                                <h2>Discover</h2>
                                <p>
                                    Browse energy drinks by brand or flavor, or
                                    scan a barcode to find a match.
                                </p>
                            </article>
                            <article className="feature">
                                <div className="feature-icon">
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                        <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z"></path>
                                    </svg>
                                </div>
                                <h2>Keep Track</h2>
                                <p>
                                    Remember what you've tried and save the
                                    drinks you want to find next.
                                </p>
                            </article>
                            <article className="feature">
                                <div className="feature-icon">
                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                        <path d="m12 2 3.1 6.3 7 1-5 4.9 1.2 7-6.3-3.3L5.7 21l1.2-7-5-4.9 7-1L12 2Z"></path>
                                    </svg>
                                </div>
                                <h2>Rate &amp; Review</h2>
                                <p>
                                    Rate what you drink, leave a few notes, and
                                    see what other people think.
                                </p>
                            </article>
                        </div>
                        <div className="contribute-row">
                            <div className="contribute-icon" aria-hidden="true">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </div>
                            <div>
                                <h2>Help build the archive.</h2>
                                <p>
                                    Can't find what you're looking for? Add a
                                    missing drink, share a photo, or suggest a
                                    correction in the app. Contributions are
                                    reviewed before they appear publicly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="beta-section" aria-labelledby="beta-title">
                    <div className="container beta-inner">
                        <div>
                            <p className="section-kicker">IN TESTING</p>
                            <h2 id="beta-title">Still taking shape.</h2>
                        </div>
                        <p>
                            CanArkiv is in pre-release testing. We're fixing
                            bugs, adding drinks, and refining the experience
                            before a wider launch. Download links will appear
                            here when they're available.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
