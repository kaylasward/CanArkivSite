import LegalPage from "./LegalPage.jsx";

export default function PrivacyPolicy() {
    return (
        <LegalPage
            title="Privacy Policy."
            introduction={[
                "CanArkiv is an independent, community-built energy drink catalog. This policy explains what information the app handles when you browse, create an account, or contribute to the archive.",
                "CanArkiv does not sell personal information or uploaded photos.",
            ]}
            sections={[
                { heading: "Information We Collect", paragraphs: [
                    "Account information includes your email address, authentication identifiers, sign-in provider information, and public display name.",
                    "Your activity may include ratings, reviews, optional review location details, Tried and Want to Try lists, reports, blocked accounts, and contribution or moderation status.",
                    "Contributions may include drink names, brands, barcodes, package sizes, markets, nutrition details, corrections, and photos. Photos are converted to JPEG and stripped of embedded metadata before upload.",
                    "If you ask for a place suggestion, the app uses foreground device location to suggest a country, region, or city. CanArkiv stores only the place details you choose to save with a review, not exact coordinates.",
                    "Production builds may send technical error information to Sentry when error reporting is configured. Default personal-information collection is disabled, and known passwords, tokens, and authorization values are redacted before reports are sent.",
                ]},
                { heading: "How We Use Information", paragraphs: ["CanArkiv uses this information to manage accounts, build and organize the catalog, save your drink lists, show approved photos and reviews, handle reports and moderation, prevent abuse, and fix technical problems."] },
                { heading: "What Other People Can See", paragraphs: [
                    "Approved product details and drink photos are visible to everyone using CanArkiv. Reviews, ratings, display names, approved review photos, and any place details you add to a review are public too.",
                    "Pending photos are limited to their uploader and moderators. Email addresses, authentication details, exact device coordinates, personal drink lists, reports, and blocked-account lists are not public profile information.",
                ]},
                { heading: "Service Providers", paragraphs: [
                    "Supabase provides CanArkiv's sign-in system, database, photo storage, and server functions. Sentry receives technical error reports when error reporting is enabled in a production build. If you use Apple, Google, or another sign-in option, that company handles the information needed to sign you in.",
                    "These providers receive information when their services are used. CanArkiv does not sell that information or your submitted photos.",
                ]},
                { heading: "Possible Future Dataset", paragraphs: [
                    "CanArkiv may one day offer an open or downloadable dataset of product facts, such as drink names, flavors, barcodes, package sizes, markets, ingredients, and nutrition details. No such dataset is available now.",
                    "Account details, private data, reviews, personal drink lists, reports, blocks, and review location information would not be included automatically. Photos would only be included with separate permission from the person who uploaded them.",
                ]},
                { heading: "Retention and Account Deletion", paragraphs: [
                    "CanArkiv does not have a fixed retention schedule yet. Account information and contributions are kept until they are deleted or are no longer needed. Some records may remain in provider backups or security logs, or when the law requires it.",
                    "You can delete your account from Settings → Account & Security. This deletes your profile, ratings, reviews, personal drink lists, reports, blocks, and uploaded photos. Basic product facts and barcodes you contributed may remain in the catalog without identifying you as the contributor.",
                ]},
                { heading: "Your Choices", paragraphs: ["You can edit or delete your reviews in the app, remove review photos and optional location details, deny location access, or delete your account. Use Support for questions or for help with a deletion you cannot complete in the app."] },
            ]}
        />
    );
}
