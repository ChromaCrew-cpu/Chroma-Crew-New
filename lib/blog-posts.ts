export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  readTime: string
  content: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-dtf-printing",
    title: "What is DTF Printing? A Beginner's Guide",
    excerpt: "DTF (Direct to Film) printing is one of the most versatile and high-quality methods for printing on garments. Here's everything you need to know.",
    date: "2025-01-10",
    author: "ChromaCrew",
    readTime: "4 min read",
    tags: ["DTF", "printing", "guide"],
    content: `
## What is DTF Printing?

Direct to Film (DTF) printing is a modern garment decoration technique where your design is printed onto a special film using adhesive powder, then heat-pressed onto fabric.

## Why DTF?

- Works on almost any fabric colour — even dark garments
- Produces vibrant, full-colour prints with a soft hand feel
- No minimum order — print just one piece if you want
- Highly durable and wash-resistant when applied correctly

## How We Do It at ChromaCrew

Every order is handled personally. We check your file, print the transfer, and press it onto your chosen garment before packing and shipping island-wide.

## File Requirements

- PNG at 300 DPI with transparent background
- PDF or SVG also accepted
- Send us your file and we'll check it free before printing

Have questions? [Contact us](/contacts) — we're happy to help.
    `,
  },
  {
    slug: "how-to-care-for-dtf-prints",
    title: "How to Care for Your DTF Printed T-Shirt",
    excerpt: "Want your DTF print to last as long as possible? Follow these simple care instructions to keep your shirt looking fresh wash after wash.",
    date: "2025-01-20",
    author: "ChromaCrew",
    readTime: "3 min read",
    tags: ["care", "washing", "tips"],
    content: `
## Caring for Your DTF Print

Follow these steps to make your ChromaCrew tee last as long as possible.

## Washing Instructions

1. **Wait 24 hours** after receiving your shirt before the first wash
2. **Turn inside out** before washing
3. **Cold or warm water** — avoid hot water
4. **Mild detergent** — no bleach or fabric softener on the print area
5. **Tumble dry low** or hang dry — avoid high heat

## What to Avoid

- Do not iron directly on the print
- Do not dry clean
- Avoid scrubbing the print area

## How Long Will It Last?

With proper care, DTF prints can last 50+ washes without significant fading. The key is low heat and no harsh chemicals.

Questions? [Get in touch](/contacts).
    `,
  },
  {
    slug: "how-to-prepare-your-artwork",
    title: "How to Prepare Your Artwork for DTF Printing",
    excerpt: "Submitting the right file means faster turnaround and sharper results. Here's our simple guide to getting your artwork print-ready.",
    date: "2025-02-05",
    author: "ChromaCrew",
    readTime: "5 min read",
    tags: ["files", "artwork", "design", "guide"],
    content: `
## Getting Your File Print-Ready

The better your file, the better your print. Here's what we need.

## Best File Format

**PNG with transparent background** is ideal. We also accept PDF and SVG.

Avoid JPG — it doesn't support transparency, which means white edges around your design.

## Resolution

- **300 DPI minimum** at final print size
- 600 DPI for very fine details or small text
- Design at actual size — don't scale up later

## Colour Mode

Use **RGB** colour mode. We handle the conversion for DTF output in-house.

## White Underbase

Leave transparent areas transparent — we automatically add a white underbase layer where needed for DTF.

## Not Sure?

Send us your file to [abiesivan@gmail.com](mailto:abiesivan@gmail.com) or via WhatsApp and we'll check it for free before printing anything.
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
