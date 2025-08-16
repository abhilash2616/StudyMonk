export const metadata = {
    title: "Plans & Pricing - StudyMonk",
    description: "Choose the right StudyMonk plan for your learning journey. Explore flexible pricing options designed to meet every student's needs.",
    keywords: ["Plans", "Pricing", "StudyMonk", "Subscription", "Learning Plans"],
    openGraph: {
        title: "Plans & Pricing - StudyMonk",
        description: "Choose the right StudyMonk plan for your learning journey. Explore flexible pricing options designed to meet every student's needs.",
        url: "https://yourdomain.com/plans-pricing",
        siteName: "StudyMonk",
        images: [
            {
                url: "https://yourdomain.com/assets/plans-pricing.png",
                width: 1200,
                height: 630,
                alt: "Plans & Pricing - StudyMonk",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function PlansPricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
