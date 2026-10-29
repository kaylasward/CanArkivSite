import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function LegalPage({ introduction, sections, title }) {
    return (
        <>
            <a className="skip-link" href="#main">Skip to content</a>
            <Header />
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
            <Footer legal />
        </>
    );
}
