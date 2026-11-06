// app/sitemap.xml/route.ts
import prisma from '@/lib/prisma'

const BASE_URL = 'https://www.spok.digital'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const staticRoutes = [
    { route: '', priority: 1 },
    { route: '/about', priority: 0.7 },
    { route: '/contact', priority: 0.7 },
    { route: '/blogs', priority: 0.7 },
    { route: '/d2c', priority: 0.7 },
    { route: '/website-landing', priority: 0.5 },
    { route: '/Portfolio', priority: 0.5 },
]

const toDate = (d: Date | string) => new Date(d).toISOString().split('T')[0]
const normalize = (u: string) => u.replace(/\/+$/, '').toLowerCase()

function escapeXml(str: string) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
}

export async function GET() {
    const today = toDate(new Date())

    const staticUrls = staticRoutes.map((r) => ({
        loc: `${BASE_URL}${r.route}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: r.priority,
    }))

    let blogUrls: typeof staticUrls = []
    try {
        const posts = await prisma.blogPost.findMany({
            where: { status: 'published', noIndex: false },
            select: {
                slug: true,
                canonicalUrl: true,
                publishedAt: true,
                updatedAt: true,
                createdAt: true,
            },
            orderBy: { publishedAt: 'desc' },
        })

        blogUrls = posts
            .filter((p) => {
                const own = `${BASE_URL}/blogs/${p.slug}`
                // include if no canonical, or canonical points to itself
                return !p.canonicalUrl?.trim() || normalize(p.canonicalUrl) === normalize(own)
            })
            .map((p) => ({
                loc: `${BASE_URL}/blogs/${p.slug}`,
                lastmod: toDate(p.updatedAt ?? p.publishedAt ?? p.createdAt),
                changefreq: 'monthly',
                priority: 0.6,
            }))
    } catch (err) {
        console.error('sitemap: failed to fetch blog posts', err)
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...blogUrls]
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
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'no-store, max-age=0',
        },
    })
}