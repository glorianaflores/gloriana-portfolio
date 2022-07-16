import Head from "next/head";

export const siteTitle = "Gloriana Flores";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
        </div>
    );
}
