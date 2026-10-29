export default function Footer({ legal = false }) {
    return (
        <footer className="site-footer">
            <div
                className={`container footer-inner${legal ? " legal-footer" : ""}`}
            >
                <span>
                    © <span data-year>2026</span> CanArkiv
                </span>

                <nav aria-label="Footer navigation">
                    <a href="/support/">Help & Account</a>
                    <a href="/privacy-policy/">Privacy</a>
                    <a href="/contribution-terms/">Terms</a>
                    <a href="/community-guidelines/">Guidelines</a>
                </nav>
            </div>
        </footer>
    );
}
