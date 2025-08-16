export const metadata = {
    title: "Our Story - StudyMonk",
    description: "Discover the journey of StudyMonk, our vision, and how we make learning impactful.",
    keywords: ["StudyMonk", "Our Story", "Learning", "Education", "Vision"],
    openGraph: {
        title: "Our Story - StudyMonk",
        description: "Discover the journey of StudyMonk, our vision, and how we make learning impactful.",
        url: "https://yourdomain.com/our-story",
        siteName: "StudyMonk",
        images: [
            {
                url: "https://yourdomain.com/assets/banner-bg-2.png",
                width: 1200,
                height: 630,
                alt: "Our Story - StudyMonk",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function OurStoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
