import Head from "next/head";

const siteTitle = "Gloriana Flores";

export function Layout({ children }) {
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
