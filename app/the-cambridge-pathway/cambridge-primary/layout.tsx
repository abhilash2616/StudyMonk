export const metadata = {
    title: "Cambridge Primary - StudyMonk",
    description: "Explore the Cambridge Primary program at StudyMonk and discover how we build strong educational foundations.",
    keywords: ["Cambridge Primary", "StudyMonk", "Education", "Foundation", "Learning"],
    openGraph: {
        title: "Cambridge Primary - StudyMonk",
        description: "Explore the Cambridge Primary program at StudyMonk and discover how we build strong educational foundations.",
        url: "https://yourdomain.com/cambridge-primary",
        siteName: "StudyMonk",
        images: [
            {
                url: "https://yourdomain.com/assets/cambridge-primary.png",
                width: 1200,
                height: 630,
                alt: "Cambridge Primary - StudyMonk",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function CambridgePrimaryLayout({
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
