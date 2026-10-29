import LegalPage from "./LegalPage.jsx";

export default function ContributionTerms() {
    return (
        <LegalPage
            title="Contribution Terms."
            introduction={["Photos, reviews, and product details from the community help build CanArkiv's energy drink archive. These terms explain what happens to the things you add."]}
            sections={[
                { heading: "Your Photos and Reviews", paragraphs: [
                    "You keep ownership of original photos and reviews you create. By submitting one, you allow CanArkiv to store, copy, display, and moderate it within CanArkiv. Approved photos and reviews are visible to everyone using CanArkiv.",
                    "This does not give other people blanket permission to redistribute your work. Only submit material you created or have permission to share. CanArkiv may reject or remove a submission that breaks the Community Guidelines.",
                ]},
                { heading: "Product Facts", paragraphs: [
                    "Product facts you add—such as a drink name, flavor, barcode, package size, market, ingredients, or nutrition details—become part of the shared catalog. They may be checked, corrected, combined with other submissions, and shown publicly.",
                    "CanArkiv may make this factual product database available as an open or downloadable dataset in the future. It is not available as a dataset now.",
                ]},
                { heading: "What a Dataset Would Not Include", paragraphs: [
                    "Account details, private data, reviews, personal drink lists, reports, blocks, and review location information would not be included automatically.",
                    "Photos would only be included with separate permission from the person who uploaded them. CanArkiv does not sell personal information or submitted photos.",
                ]},
                { heading: "Deleting Your Account", paragraphs: ["Deleting your account removes your profile, reviews, ratings, personal lists, reports, blocks, and uploaded photos. Basic product facts may stay in the catalog, but they will no longer be linked to your account."] },
            ]}
        />
    );
}
