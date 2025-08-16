export const metadata = {
    title: "Thank You - StudyMonk",
    description: "Thank you for reaching out to StudyMonk. We have received your request and will connect with you soon.",
    openGraph: {
        title: "Thank You - StudyMonk",
        description: "Thank you for reaching out to StudyMonk. We have received your request and will connect with you soon.",
        url: "https://yourdomain.com/thank-you",
        siteName: "StudyMonk",
        images: [
            {
                url: "https://yourdomain.com/assets/thank-you.png",
                width: 1200,
                height: 630,
                alt: "Thank You - StudyMonk",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
