// app/sitemap.xml/route.ts
import prisma from '@/lib/prisma'
const BASE_URL = 'https://www.spok.digital'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const staticRoutes: { route: string; priority: number }[] = [
    { route: '', priority: 1 },
    { route: '/about', priority: 0.7 },
    { route: '/contact', priority: 0.7 },
    { route: '/blogs', priority: 0.7 },
    { route: '/d2c', priority: 0.7 },
    { route: '/website-landing', priority: 0.5 },
    { route: '/Portfolio', priority: 0.5 },
]

function escapeXml(str: string) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export async function GET() {
    const staticUrls = staticRoutes.map((r) => ({
        loc: `${BASE_URL}${r.route}`,
        lastmod: '2026-08-01',
        changefreq: 'weekly',
        priority: r.priority,
    }))

    let blogUrls: { loc: string; lastmod: string; changefreq: string; priority: number }[] = []
    try {
        const posts = await prisma.blogPost.findMany({
            select: { slug: true, publishedAt: true, updatedAt: true, createdAt: true },
            where: {
                status: 'published',
                noIndex: false,
                OR: [{ canonicalUrl: null }, { canonicalUrl: '' }],
            },
        })

        blogUrls = posts.map((post) => {
            const date = post.publishedAt ?? post.updatedAt ?? post.createdAt
            return {
                loc: `${BASE_URL}/blogs/${post.slug}`,
                lastmod: new Date(date).toISOString().split('T')[0],
                changefreq: 'monthly',
                priority: 0.6,
            }
        })

        console.log(`sitemap: ${blogUrls.length} blog posts included`)
    } catch (err) {
        console.error('sitemap: failed to fetch blog posts', err)
    }

    const urls = [...staticUrls, ...blogUrls]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
            )
            .join('\n')}
</urlset>`

    return new Response(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'no-store, max-age=0',
        },
    })
}