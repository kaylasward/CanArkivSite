import LegalPage from "./LegalPage.jsx";

export default function CommunityGuidelines() {
    return (
        <LegalPage
            title="Community Guidelines."
            introduction={["CanArkiv is a community-built catalog for discovering, tracking, and reviewing energy drinks. Keep what you add relevant, honest, and respectful."]}
            sections={[
                { heading: "Not Allowed", paragraphs: [
                    "Harassment, bullying, hate speech, threats, discrimination, sexually explicit content, graphic violence, or exploitation of minors.",
                    "Spam, scams, impersonation, sharing someone else's private information, fake reviews, or knowingly misleading drink information and barcodes.",
                    "Photos or other content you do not have permission to share.",
                ]},
                { heading: "Reports and Enforcement", paragraphs: [
                    "Use the in-app reporting options to flag content or users that violate these guidelines. You can also block contributors whose reviews or photos you do not want to see.",
                    "Written reviews may appear immediately without preapproval. Reviews and other reported content may be reviewed and removed when they violate these guidelines.",
                ]},
                { heading: "Your Responsibility", paragraphs: ["Share genuine experiences, provide accurate product details when possible, and only upload photos you have the right to use. By contributing to CanArkiv, you agree to follow these guidelines."] },
                { heading: "Your Contributions", paragraphs: ["You keep ownership of your original photos and reviews. You allow CanArkiv to store, copy, display, and moderate them within CanArkiv. Moderated photos and written reviews are public. Basic product facts may stay in the catalog without a link to your account, even after account deletion. See the Contribution Terms for details."] },
            ]}
        />
    );
}
