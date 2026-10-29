export default function Footer({ legal = false }) {
    return (
        <footer className="site-footer">
            <div
                className={`container footer-inner${legal ? " legal-footer" : ""}`}
            >
                <span>
                    © <span data-year>2026</span> CanArkiv
                </span>
                {legal ? (
                    <nav aria-label="Legal and support">
                        <a href="/privacy-policy/">Privacy</a>
                        <a href="/contribution-terms/">Terms</a>
                        <a href="/community-guidelines/">Guidelines</a>
                        <a href="/support/">Support</a>
                    </nav>
                ) : (
                    <a href="/support/">Help &amp; Account</a>
                )}
            </div>
        </footer>
    );
}
