import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing & SEO Insights, Tips and Guides | Spok Digital",
    description:
        "Explore expert insights, digital marketing tips, SEO strategies, Shopify guides and business growth resources from Spok Digital. Stay ahead with the latest industry trends.",
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
