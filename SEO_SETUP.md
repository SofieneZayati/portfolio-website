# Google indexing setup for sofienezayati.tn

The production build includes:

- `public/robots.txt`
- `public/sitemap.xml`
- canonical URLs
- index/follow directives
- Open Graph and Twitter metadata
- `ProfilePage`, `Person`, and `WebSite` JSON-LD
- pre-rendered homepage and project content
- route-specific titles, descriptions, canonical URLs, and project structured data in the initial HTML

After deploying:

1. Add `sofienezayati.tn` as a **Domain property** in Google Search Console.
2. Verify ownership with the TXT record Google gives you.
3. Open **Sitemaps** and submit `sitemap.xml`.
4. Inspect `https://sofienezayati.tn/` and select **Request indexing**.
5. Test the live URL and confirm Google can see the rendered H1: `Sofiene Zayati — Engineering ideas into real products.`.
6. Keep the same full name and portfolio URL on LinkedIn and GitHub.

Google indexing and ranking are not immediate or guaranteed. Search Console is the authoritative place to see the actual status.
