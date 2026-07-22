# 

Recommended next structure:

```text
EvermistDesignsCo/
  .github/
    workflows/
      pages.yml
  docs/
    evermist-hub-master-plan.md
    content-calendar.md
    seo-keyword-map.md
    product-roadmap.md
  site/
    assets/
      css/
        styles.css
      downloads/
        free-kitchen-reset-checklist.pdf
      images/
        products/
        freebies/
        social-proof/
      js/
        main.js
        analytics.js
    products/
      home-command-center.html
      home-binder-starter-pack.html
      family-command-center.html
      recipe-binder.html
    resources/
      kitchen-reset-checklist.html
      weekly-cleaning-checklist.html
      grocery-list.html
    blog/
      how-to-set-up-family-command-center.html
      weekly-kitchen-reset-routine.html
    tools/
      chore-chart-generator.html
      meal-planner-generator.html
    index.html
    shop.html
    resources.html
    about.html
    contact.html
    disclosure.html
    privacy.html
    terms.html
  product-files/
    source/
    export/
  marketing-assets/
    facebook/
    pinterest/
    gumroad/
    etsy/
  README.md
```

## File Tree For The Next Build Phase

```text
site/
  index.html
  shop.html
  resources.html
  about.html
  contact.html
  disclosure.html
  privacy.html
  terms.html
  products/
    home-command-center.html
    digital-product-shop-guide.html
  resources/
    kitchen-reset-checklist.html
  blog/
    index.html
  tools/
    chore-chart-generator.html
  assets/
    css/
      styles.css
    js/
      main.js
      analytics.js
      generators.js
    images/
      products/
      freebies/
      brand/
    downloads/
      free-kitchen-reset-checklist.pdf
```

## Component Inventory

Because the current site is static HTML/CSS/JS, components are reusable page sections rather than React/Vue components.

### Current Components

- Header/navigation
- Mobile navigation toggle
- Hero section
- Primary CTA button
- Secondary CTA button
- Featured product section
- Product/category cards
- Free resource card
- Newsletter/MailerLite embed
- Footer
- Gumroad outbound links
- Download buttons
- Plausible analytics event tracking

### Needed Components

- Product card with image, price, category, and CTA
- Product detail hero
- Trust strip: instant download, personal use, print at home, beginner friendly
- Testimonial/review card
- Freebie opt-in card
- Coming soon resource card
- Blog article card
- Affiliate recommendation card
- Product comparison table
- FAQ accordion
- Social proof badge
- Breadcrumb navigation
- Generator form controls
- Printable preview grid
- Empty/loading/error states for future tools

## Brand System

### Positioning

EvermistDesignsCo helps busy families organize home life with printable systems that are calm, practical, and easy to use.

### Brand Promise

Organize your home. Simplify your life.

### Voice

- Calm
- Helpful
- Encouraging
- Practical
- Warm, but not overly cute
- Clear about what the buyer gets

### Avoid

- Random unrelated affiliate products
- Too many seller tools under the main Evermist identity
- Overpromising life transformation
- Fake urgency
- Vague product names
- Cluttered mockups

### Visual Direction

- Soft, clean, home-organized look
- Light backgrounds with enough contrast
- Realistic printable previews
- Product images should be easy to inspect
- Use badges sparingly: Free, New, Bundle, 5-Star Rated

### Brand Vocabulary

Use:
- printable home organization
- family command center
- home binder
- kitchen reset
- weekly routine
- busy families
- calmer home
- instant digital download

Avoid making these central:
- side hustle
- digital seller tools
- random Amazon finds
- general templates

## UI/UX Guidelines

### Homepage

Must answer:
- What does Evermist sell?
- Who is it for?
- What should I start with?
- Can I try something free?
- Why should I trust this brand?

Recommended order:
1. Hero
2. Featured product
3. Popular collections
4. Free resource library
5. Trust/social proof
6. Newsletter signup
7. Footer

### Product Pages

Each product page needs:
- Product name
- Clear outcome-based subtitle
- Large product preview/mockup
- Price or marketplace CTA
- What's included
- Who it is for
- How it helps
- File details
- Instant download notice
- Personal-use notice
- FAQ
- Related products
- Review or trust signal when available

### Freebie Pages

Each freebie page needs:
- Specific freebie promise
- Preview image
- Download/subscribe CTA
- What is inside
- How to use it
- Related paid product
- Email signup or download tracking

### Mobile UX

- Buttons must be full-width or easy to tap.
- No tiny text inside cards.
- Product images must not be cropped so much that the printable cannot be understood.
- Navigation must close after a link click.
- CTA hierarchy must stay obvious.

## SEO Strategy

### Core SEO Theme

Evermist should target practical, low-drama home organization searches.

Primary keyword clusters:
- printable home organization
- home binder printables
- family command center printable
- kitchen reset checklist
- weekly cleaning checklist printable
- meal planner printable
- grocery list printable
- chore chart printable
- family routine chart printable

### Page Targets

Home:
- printable home organization for busy families

Shop:
- home organization printables

Home Command Center:
- family command center printable bundle

Home Binder:
- home binder starter pack printable

Kitchen Reset Checklist:
- free kitchen reset checklist printable

Blog:
- how to set up a family command center
- weekly kitchen reset routine
- home binder categories
- meal planning for busy families

### SEO Rules

- One primary keyword per page.
- Write titles for humans first, search second.
- Every product image needs descriptive alt text.
- Every product page needs internal links to related products.
- Every blog post should link to one freebie and one paid product.
- Do not create thin placeholder blog posts.
- Add schema later: Product, FAQ, Article, Organization.

## Accessibility Checklist

Every page should meet these basics:

- Use one clear `h1` per page.
- Headings should be nested logically.
- Buttons and links need visible focus states.
- All images need useful alt text or empty alt text if decorative.
- Text contrast should pass WCAG AA.
- Forms need labels.
- Do not rely on color alone to communicate meaning.
- Tap targets should be at least 44px high/wide.
- Navigation should work by keyboard.
- Motion should be subtle and respect reduced-motion preferences.
- Download links should say what file is being downloaded.
- External links should be clear.

## Performance Goals

Targets:
- Largest Contentful Paint under 2.5 seconds.
- Cumulative Layout Shift under 0.1.
- First Input Delay/Interaction to Next Paint in the good range.
- Total page weight under 1.5 MB for normal pages.
- Images compressed and sized for display.
- Lazy-load below-the-fold images.
- Avoid heavy libraries until needed.
- Keep JavaScript small and purposeful.

Current advantage:
- Static GitHub Pages site is fast and cheap.

Main risk:
- Large product/mockup images can slow the site down if not compressed.

## Privacy-Friendly Analytics

Current:
- Plausible is installed for page views, button clicks, outbound clicks, and downloads.

Recommended events:
- Freebie download
- Gumroad product click
- Etsy product click
- Newsletter form submission
- Pinterest outbound click
- Facebook outbound click
- Product page CTA click

Use analytics to answer:
- Which traffic source brings visitors?
- Which pages get clicks?
- Which freebie converts?
- Which product gets interest before sales?
- Where do visitors leave?

## Database Plan For Future

Do not add a database until interactive tools or user accounts require it.

### Phase 1: No Database

Use static HTML, Gumroad checkout, MailerLite, and Plausible.

### Phase 2: Lightweight Data

Use JSON files for:
- Product catalog
- Resource catalog
- Affiliate recommendations
- Blog metadata

Example:

```json
{
  "slug": "home-command-center",
  "title": "Home Command Center Bundle",
  "category": "Home Organization",
  "price": "14.99",
  "gumroadUrl": "https://evermistdesignsco.gumroad.com/l/home-command-center-bundle",
  "featured": true
}
```

### Phase 3: Real Database

Use a hosted database when you need:
- Saved generated plans
- User accounts
- Email subscriber preferences
- Tool history
- Product personalization

Good future options from student benefits:
- MongoDB Atlas for flexible product/tool data
- Supabase or Appwrite for auth and database
- Firebase for simple app-like tools

Recommended future tables/collections:
- users
- products
- resources
- blog_posts
- affiliate_products
- tool_sessions
- generated_printables
- email_leads
- purchases_sync

## API Plan For Future

Do not build APIs for the current static site. Add APIs when tools need server-side logic.

### Future API Endpoints

```text
GET  /api/products
GET  /api/products/:slug
GET  /api/resources
POST /api/leads
POST /api/tools/chore-chart
POST /api/tools/meal-plan
POST /api/tools/cleaning-schedule
POST /api/downloads/track
GET  /api/affiliate-products
```

### API Responsibilities

- Generate custom printable data
- Save optional user preferences
- Track downloads privately
- Send leads to email provider
- Serve product data to the frontend
- Keep affiliate disclosures consistent

### API Rules

- No sensitive data unless necessary.
- No storing children's private names without clear purpose and consent.
- Prefer local browser generation for simple printable tools.
- Keep server costs near zero until traffic proves the need.

## GitHub Repository Organization

### Current Repo Role

`evermistdesignsco-site` should remain the public website repo.

### Recommended Branches

- `main`: live production site
- `codex/sprint-*`: feature branches
- `content/*`: blog or page content changes
- `tools/*`: interactive tool development

### Commit Style

Use small, clear commits:

```text
Add free resource library page
Add kitchen reset landing page
Update homepage conversion sections
Add Plausible click tracking
Add chore chart generator prototype
```

### Repo Hygiene

- Keep finished site files in `site/`.
- Keep source product files outside deployed folders.
- Do not commit private customer data.
- Do not commit API keys.
- Use `.gitignore` for temporary exports.
- Put planning docs in `docs/` over time.

## Deployment Plan

Current:
- GitHub Pages deploys the `site/` folder using `.github/workflows/pages.yml`.
- Workflow runs on push to `main` and manually through Actions.

Short-term:
- Keep GitHub Pages.
- Add a custom domain.
- Add `CNAME` after domain is chosen.
- Keep Plausible and MailerLite scripts installed.

Medium-term:
- Add preview checks through GitHub Actions.
- Add HTML validation.
- Add link checking.
- Add image size checks.

Long-term:
- Move interactive tools to a separate app only if static pages become limiting.
- Keep marketing pages static for speed and reliability.

## Testing Strategy

### Manual Tests Before Every Publish

- Open homepage.
- Open shop page.
- Open free resource page.
- Open kitchen reset landing page.
- Test navigation.
- Test mobile menu.
- Click Gumroad links.
- Click download links.
- Confirm MailerLite form loads.
- Confirm Plausible is not throwing console errors.

### Automated Tests To Add

- Link checker
- HTML validator
- Lighthouse CI
- Accessibility scan with axe
- Basic Playwright smoke tests

### Suggested Smoke Tests

- Home page loads.
- Navigation links work.
- Freebie download link exists.
- Product CTA links to Gumroad.
- Newsletter embed container exists.
- No broken internal links.

## Prioritized Backlog

### P0: Revenue And Trust

1. Add first review/social proof to the website where truthful.
2. Create dedicated product pages for top Gumroad/Etsy products.
3. Add product preview galleries.
4. Add FAQ sections to top product pages.
5. Add privacy and terms pages.
6. Add stronger freebie-to-paid-product upsell.
7. Create Kitchen Reset Mini Kit.
8. Create more Pinterest pins for freebie and bundle.
9. Update Facebook pinned/start-here post.
10. Clean brand focus across Gumroad, Pinterest, Etsy, and Facebook.

### P1: Traffic

11. Publish first 3 blog posts.
12. Add SEO titles and descriptions to every page.
13. Add Pinterest-friendly images to each article.
14. Build a keyword map.
15. Add internal linking between blog, freebies, and products.
16. Create a content calendar.

### P2: Conversion

17. Add comparison section: free checklist vs mini kit vs bundle.
18. Add product ladder page.
19. Add email welcome sequence in MailerLite.
20. Add limited but honest launch offer messaging.
21. Improve mobile product images.
22. Add “best place to start” section.

### P3: Technical Moat

23. Build chore chart generator prototype.
24. Build meal planner generator prototype.
25. Let users print or save generated pages.
26. Connect generated tools to product upsells.
27. Add lightweight JSON product catalog.

## 12-Month Roadmap

### Month 1: Stabilize The Brand Hub

- Finish free resource library.
- Add privacy and terms pages.
- Add top product detail pages.
- Improve homepage social proof.
- Make Gumroad/Etsy/Facebook/Pinterest links consistent.
- Publish Kitchen Reset Mini Kit.

### Month 2: Build The Product Ladder

- Create Family Routine + Chore Chart Pack.
- Create Weekly Cleaning Routine Pack.
- Create Meal Planner + Grocery System.
- Bundle related products.
- Improve product thumbnails and mockups.

### Month 3: Start SEO And Pinterest Engine

- Publish 3-5 blog posts.
- Create 5 pins per core product/freebie.
- Track clicks in Plausible.
- Create a keyword map.
- Start newsletter rhythm.

### Month 4: Add First Interactive Tool

- Build Chore Chart Generator.
- Keep it free and ungated at first.
- Add printable output.
- Add paid Family Routine Pack upsell.

### Month 5: Improve Email Funnel

- MailerLite welcome sequence.
- Freebie delivery email.
- Product recommendation email.
- Weekly helpful tip email.
- Launch/update email.

### Month 6: Seasonal Product Push

- Back-to-school command center.
- Summer routine pack.
- Holiday home prep planner.
- Seasonal Pinterest campaigns.

### Month 7: Add Second Interactive Tool

- Meal Planner Generator.
- Grocery list generator.
- Upsell Meal Planner + Grocery System.

### Month 8: Improve Marketplace Strategy

- Clean Etsy SEO.
- Keep Etsy focused on the best-performing printable categories.
- Use Gumroad for bundles, freebies, and affiliate program.
- Use website as the central trust hub.

### Month 9: Add Affiliate Finds Properly

- Create home organization affiliate guide pages.
- Only recommend products that support Evermist printables.
- Add clear affiliate disclosures.
- Track affiliate clicks.

### Month 10: Bundle And Upsell System

- Complete Home Organization Bundle.
- Kitchen Bundle.
- Family Routine Bundle.
- Seasonal Bundle.
- Add comparison charts.

### Month 11: Automation And Data

- Use JSON product catalog.
- Generate product cards from data.
- Add automated link checks.
- Add Lighthouse checks.
- Improve analytics reports.

### Month 12: Decide Platform Upgrade

- Stay static if it is working.
- Move to app/backend only if interactive tools, saved accounts, or paid membership justify it.
- Consider direct checkout with Stripe only if marketplace fees or customer journey become limiting.

## AI Automation Opportunities

- Generate Pinterest pin copy from product metadata.
- Generate Facebook post drafts from blog posts.
- Create SEO title/meta description variants.
- Turn product descriptions into Etsy/Gumroad versions.
- Generate product FAQ drafts.
- Create simple printable page variations.
- Analyze Plausible weekly and suggest content priorities.
- Create content calendars from product launches.
- Create customer support response templates.

Do not automate:
- Final customer replies without review.
- Legal/policy pages without human checking.
- Anything involving private customer data.

## Accessibility And Legal Trust Pages

Needed soon:
- Privacy Policy
- Terms of Use
- Refund/download support note
- Affiliate Disclosure, already started
- Personal-use license language

Every paid product should say:
- Instant digital download
- No physical item shipped
- Personal use only
- Files are delivered through Gumroad/Etsy
- Due to digital nature, refunds follow platform/shop policy

## Success Metrics

### Website

- Page views
- Freebie downloads
- Newsletter signups
- Gumroad outbound clicks
- Etsy outbound clicks
- Product CTA click-through rate

### Gumroad

- Product views
- Conversion rate
- Downloads
- Paid sales
- Reviews
- Affiliate signups

### Etsy

- Etsy search visits
- Listing views per visit
- Favorites
- Cart adds
- Conversion rate

### Pinterest

- Impressions
- Saves
- Outbound clicks
- Top pin topics
- Top boards

### Facebook

- Reach
- Engagement
- Link clicks
- Follower growth
- Comments that reveal product demand

## Decision Rules

Build something only if it helps one of these:
- Trust
- Traffic
- Email subscribers
- Sales
- Repeat buyers
- Product differentiation

Pause or remove anything that creates:
- Brand confusion
- Too many unrelated offers
- Maintenance burden
- Slow pages
- Unclear customer journey

## Immediate Next Sprint

Sprint goal: make the existing hub more trustworthy and better connected to sales.

Tasks:
1. Add truthful review/social proof to the website.
2. Create product page for Digital Product Shop Starter Guide or keep seller tools separated.
3. Create product page for Home Command Center Bundle.
4. Add Privacy Policy and Terms pages.
5. Add FAQ section to the Kitchen Reset Checklist page.
6. Add a product ladder section: Free Checklist -> Mini Kit -> Full Bundle.
7. Start Kitchen Reset Mini Kit product build.
8. Create 10 Pinterest pins for the freebie and bundle.
9. Create 5 Facebook posts built around the freebie, review, and family organization problem.
10. Review Plausible after 7 days and choose the next content/product based on clicks.

