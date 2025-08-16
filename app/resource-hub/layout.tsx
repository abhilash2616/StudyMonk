export const metadata = {
    title: "Resources - StudyMonk",
    description: "Access valuable learning resources, study materials, and guides provided by StudyMonk to support your academic journey.",
    keywords: ["Resources", "Study Materials", "Guides", "Learning", "StudyMonk"],
    openGraph: {
        title: "Resources - StudyMonk",
        description: "Access valuable learning resources, study materials, and guides provided by StudyMonk to support your academic journey.",
        url: "https://yourdomain.com/resources",
        siteName: "StudyMonk",
        images: [
            {
                url: "https://yourdomain.com/assets/resources.png",
                width: 1200,
                height: 630,
                alt: "Resources - StudyMonk",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function ResourcesLayout({
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
