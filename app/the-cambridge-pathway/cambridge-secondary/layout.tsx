export const metadata = {
    title: "Cambridge Secondary - StudyMonk",
    description: "Learn about the Cambridge Secondary program at StudyMonk, designed to build advanced academic skills and global perspectives.",
    keywords: ["Cambridge Secondary", "StudyMonk", "Education", "Advanced Learning", "Global Skills"],
    openGraph: {
        title: "Cambridge Secondary - StudyMonk",
        description: "Learn about the Cambridge Secondary program at StudyMonk, designed to build advanced academic skills and global perspectives.",
        url: "https://yourdomain.com/cambridge-secondary",
        siteName: "StudyMonk",
        images: [
            {
                url: "https://yourdomain.com/assets/cambridge-secondary.png",
                width: 1200,
                height: 630,
                alt: "Cambridge Secondary - StudyMonk",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function CambridgeSecondaryLayout({
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
