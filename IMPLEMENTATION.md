# Implementation Document - unfamiliar.id Website Rebuild

## Project Overview

This document tracks the complete content replacement project for the unfamiliar.id website. The current site contains placeholder/dummy content from a green energy template ("Flora&Fauna" / "Flow") that needs to be replaced with the actual **unfamiliar.id** brand content.

**unfamiliar.id** delivers instant, AI-powered identity verification for any scenario. We scan, parse, and authenticate government-issued IDs, match faces, detect spoofing, and confirm identity with precision.

---

## Company Summary

### The Problem
- Identity fraud is accelerating
- Businesses struggle to confidently verify who they're interacting with — online or in-person
- Manual ID checks are slow, inaccurate, and expose organizations to risk, fines, and compliance failures
- Age-restricted industries face increasing pressure to stop underage or fraudulent access

### The Solution
- Instant, AI-powered identity verification for any scenario
- Scan, parse, and authenticate government-issued IDs
- Match faces, detect spoofing, and confirm identity with precision
- Eliminate human error and automate trust

### Core Products
1. **Digital Identity Verification API/SDK** - Multi-step authentication for driver's licenses, passports, IDs, and global documents
2. **AI Document Authentication** - Barcode/visual cross-checking, template validation, and fraud detection
3. **Biometric Face Match + Anti-Spoofing** - Ensures the document belongs to the person submitting it
4. **Age Verification & Compliance** - For cannabis, alcohol, gaming, and regulated markets
5. **Access & Visitor Management** - Verify guests, manage entry, and enforce watchlists
6. **Hardware + Software Bundles** - Scanners and kiosks for physical point-of-entry

### Target Industries
- Cannabis, Alcohol, Nightlife, Gaming (Age-restricted compliance)
- FinTech, Banking, Crypto (eKYC, AML, onboarding)
- Hospitality & Retail (Fraud prevention and access control)
- Security, Law Enforcement, Government (Identity validation and visitor monitoring)
- Transportation & Logistics (Driver verification and secure entry)

---

## Current State

- **Framework**: Next.js 15.5.3 with App Router
- **Styling**: TailwindCSS 4
- **Language**: TypeScript/JavaScript
- **Current Theme**: Green energy company template (Flora&Fauna/Flow) — TO BE REPLACED

---

## New Site Map

### 1. HOME
| Route | Content | Status |
|-------|---------|--------|
| `/` | Hero: "Identity Verified. Trust Automated." | ⬜ Pending |
| | Platform Overview | ⬜ Pending |
| | Key Capabilities | ⬜ Pending |
| | Industries Overview | ⬜ Pending |
| | Developer Hooks | ⬜ Pending |
| | Proof / Stats | ⬜ Pending |
| | Primary CTAs: Demo, Start Verifying | ⬜ Pending |

### 2. ABOUT
| Route | Content | Status |
|-------|---------|--------|
| `/about` | Company Story, Mission & Vision, Leadership, Careers CTA, Contact Points | ⬜ Pending |
| `/about/leadership` | Leadership Team | ⬜ New Page |
| `/about/careers` | Open Roles Listing | ⬜ Pending |
| `/about/careers/[role-name]` | Individual Job Pages | ⬜ New Page |

### 3. PRODUCTS
| Route | Content | Status |
|-------|---------|--------|
| `/products` | Overview of Product Suite, Comparison Grid, SDK/API Summary | ⬜ New Page |
| `/products/digital-identity-verification` | Parsing & OCR, Barcode/MRZ, JSON Responses, SDK Integration, Use Cases | ⬜ New Page |
| `/products/document-authentication` | Template Matching, Security Feature Detection, Tamper Detection | ⬜ New Page |
| `/products/face-match` | One-to-One Match, Liveness Detection, Anti-Spoofing | ⬜ New Page |
| `/products/access` | Visitor Check-In, Door Integrations, Denylist Enforcement | ⬜ New Page |
| `/products/hardware` | Scanners, Kiosks, Handheld Devices | ⬜ New Page |

### 4. SOLUTIONS
| Route | Content | Status |
|-------|---------|--------|
| `/solutions` | High-Level Overviews, Use Cases, Recommended Product Bundles | ⬜ New Page |
| `/solutions/online-onboarding` | Online Onboarding Solution | ⬜ New Page |
| `/solutions/age-verification` | Age Verification Solution | ⬜ New Page |
| `/solutions/secure-access` | Secure Access & Entry Control | ⬜ New Page |
| `/solutions/marketplaces` | Marketplace / Gig / Delivery Platforms | ⬜ New Page |
| `/solutions/remote-hiring` | Hiring & Workforce | ⬜ New Page |

### 5. DEVELOPERS
| Route | Content | Status |
|-------|---------|--------|
| `/developers` | Developer Landing Page, Quickstart, API Key Generation, SDK Links | ⬜ New Page |
| `/docs` | REST API Reference, Endpoints, Parameters, Error Codes, Webhooks | ⬜ New Page |
| `/docs/sdk` | Web SDK, iOS SDK, Android SDK, UI Components | ⬜ New Page |
| `/developers/samples` | Sample Apps & Tutorials | ⬜ New Page |
| `/developers/changelog` | Changelog | ⬜ New Page |
| `/status` | Status Page (External) | ⬜ New Page |

### 6. PRICING
| Route | Content | Status |
|-------|---------|--------|
| `/pricing` | Starter, Growth, Enterprise, Add-Ons, Usage Tiers, FAQ | ⬜ Pending |

### 7. RESOURCES
| Route | Content | Status |
|-------|---------|--------|
| `/resources` | One-Pagers, Guides, Whitepapers, Case Studies, Videos | ⬜ New Page |
| `/resources/case-studies/[company-name]` | Individual Case Studies | ⬜ New Page |
| `/resources/guides` | Guides & Ebooks | ⬜ New Page |
| `/resources/product-sheets` | Product Sheets | ⬜ New Page |

### 8. COMPANY (SECONDARY)
| Route | Content | Status |
|-------|---------|--------|
| `/contact` | Sales, Support, Partnerships | ⬜ Pending |
| `/press` | Press Kit, Brand Assets, Media Contact | ⬜ New Page |
| `/partners` | Partners | ⬜ New Page |

### 9. SUPPORT
| Route | Content | Status |
|-------|---------|--------|
| `/support` | Get Help, FAQ, Troubleshooting, Integration Support | ⬜ New Page |
| `/support/tickets` | Ticket Portal | ⬜ New Page |
| `/support/knowledge-base` | Knowledge Base | ⬜ New Page |

### 10. LEGAL
| Route | Content | Status |
|-------|---------|--------|
| `/legal` | Overview | ⬜ New Page |
| `/legal/privacy` | Privacy Policy | ⬜ New Page |
| `/legal/terms` | Terms of Use | ⬜ New Page |
| `/legal/cookies` | Cookie Policy | ⬜ New Page |
| `/legal/sla` | SLA (Enterprise) | ⬜ New Page |
| `/legal/dpa` | Data Processing Addendum | ⬜ New Page |
| `/legal/security` | Security Overview | ⬜ New Page |

---

## Pages to Remove/Repurpose

| Current Route | Action | Notes |
|---------------|--------|-------|
| `/blog` | Repurpose → `/resources` | Convert blog to resources/case studies |
| `/blog/[slug]` | Repurpose → `/resources/case-studies/[company-name]` | |
| `/login` | Keep or integrate with dashboard | |
| `/register` | Keep or integrate with dashboard | |

---

## Implementation Phases

### Phase 1: Brand Identity & Global Elements
- [ ] Update site metadata (title: "unfamiliar.id | Identity Verified. Trust Automated.")
- [ ] Replace logo files with unfamiliar.id branding
- [ ] Update company name references ("Flow" / "Flora&Fauna" → "unfamiliar.id")
- [ ] Update color scheme (teal/lime → brand colors TBD)
- [ ] Update favicon
- [ ] Remove announcement bar (pixelrocket promo)

### Phase 2: Navigation & Footer
- [ ] Update navigation: About, Products, Solutions, Developers, Pricing, Resources
- [ ] Update footer links to match new site map
- [ ] Update newsletter text (identity verification focus)
- [ ] Update social media links
- [ ] Update copyright to "unfamiliar.id"

### Phase 3: Homepage Rebuild
- [ ] Hero: "Identity Verified. Trust Automated."
- [ ] Platform Overview section
- [ ] Key Capabilities (5 core products)
- [ ] Industries Overview (5 verticals)
- [ ] Developer Hooks section
- [ ] Proof/Stats section (verification metrics)
- [ ] Primary CTAs: "Request Demo", "Start Verifying"

### Phase 4: About Section
- [ ] Company Story page
- [ ] Mission & Vision
- [ ] Leadership page (`/about/leadership`)
- [ ] Careers page with job listings
- [ ] Individual job pages (`/about/careers/[role-name]`)

### Phase 5: Products Section (NEW)
- [ ] Products overview page
- [ ] Digital Identity Verification page
- [ ] Document Authentication page
- [ ] Face Match + Anti-Spoofing page
- [ ] Access & Visitor Management page
- [ ] Hardware + Software Bundles page

### Phase 6: Solutions Section (NEW)
- [ ] Solutions overview page
- [ ] Online Onboarding page
- [ ] Age Verification page
- [ ] Secure Access page
- [ ] Marketplaces page
- [ ] Remote Hiring page

### Phase 7: Developers Section (NEW)
- [ ] Developer landing page
- [ ] API Documentation structure
- [ ] SDK Documentation structure
- [ ] Sample Apps & Tutorials
- [ ] Changelog page

### Phase 8: Pricing Page
- [ ] Update to: Starter, Growth, Enterprise tiers
- [ ] Add Add-Ons section
- [ ] Add Usage Tiers
- [ ] Update FAQ for identity verification
- [ ] CTA: "Contact Sales"

### Phase 9: Resources Section (NEW)
- [ ] Resources overview page
- [ ] Case Studies structure
- [ ] Guides & Ebooks
- [ ] Product Sheets

### Phase 10: Support & Legal (NEW)
- [ ] Support landing page
- [ ] Knowledge Base structure
- [ ] Legal overview page
- [ ] Privacy Policy, Terms, Cookie Policy
- [ ] SLA, DPA, Security Overview

### Phase 11: Contact & Secondary Pages
- [ ] Update contact form (Sales, Support, Partnerships)
- [ ] Press page
- [ ] Partners page

---

## 🎯 Snowball Checklist (Easiest → Hardest)

*Start with quick wins to build momentum. Each completed task makes the next one easier.*

### 🟢 TIER 1: Quick Wins (5-15 min each) ✅ COMPLETE
*Text replacements in existing files. No new pages needed.*

- [x] **1.1** Update `src/app/layout.tsx` metadata (title + description)
- [x] **1.2** Update `src/app/page.tsx` page title + hero content
- [x] **1.3** Update `src/app/about/page.tsx` page title
- [x] **1.4** Update `src/app/pricing/page.tsx` page title
- [x] **1.5** Update `src/app/contact/page.tsx` page title
- [x] **1.6** Update `src/app/login/page.tsx` page title
- [x] **1.7** Update `src/app/register/page.tsx` page title
- [x] **1.8** Update announcement bar text (`src/components/layout/announcement-bar.jsx`)
- [x] **1.9** Update CTA section text (`src/components/layout/cta-section.jsx`)
- [x] **1.10** Update footer company name "Flow" → "unfamiliar.id" (`src/components/layout/footer.jsx`)
- [x] **1.11** Update footer links (Products, Resources, Company)
- [x] **1.12** Update footer newsletter title + description

### 🟡 TIER 2: JSON Data Updates (15-30 min each) ✅ COMPLETE
*Update data files. Content changes propagate automatically.*

- [x] **2.1** Update `src/data/home-stats.json` (18s, 94%, 200+, 99.9%)
- [x] **2.2** Update `src/data/home-faq.json` (5 identity verification FAQs)
- [x] **2.3** Update `src/data/home-solutions.json` (5 core capabilities)
- [x] **2.4** Update `src/data/pricing.json` (Starter/Growth/Enterprise + features)
- [x] **2.5** Update `src/data/navigation.json` (Products, Solutions, Developers, Pricing, About)
- [x] **2.6** Update `src/data/social-links.json` (LinkedIn, Twitter, GitHub)
- [x] **2.7** Update `src/data/job-filters.json` (Engineering, Product, Sales, CS)

### 🟠 TIER 3: Component Text Updates (30-60 min each) ✅ COMPLETE
*Hardcoded text in JSX components.*

- [x] **3.1** Update hero section in `src/app/page.tsx` (title, subtitle, CTA) - Done in Tier 1
- [x] **3.2** Update navigation component (`src/components/ui/navigation.jsx`)
- [x] **3.3** Update simple navigation (`src/components/layout/simple-navigation.jsx`)
- [x] **3.4** Update footer links (`src/components/layout/footer.jsx`) - Done in Tier 1
- [x] **3.5** Update commitment section (`src/features/home/components/commitment-section.jsx`)
- [x] **3.6** Update solutions section labels (`src/features/home/components/solutions-section.jsx`)
- [x] **3.7** Update FAQ section labels (`src/features/home/components/faq-section.jsx`)
- [x] **3.8** Update about hero (`src/features/about/components/about-hero.jsx`)
- [x] **3.9** Update about details (`src/features/about/components/about-details.jsx`)
- [x] **3.10** Update team section (`src/features/about/components/team-section.jsx`)
- [x] **3.11** Update pricing hero (`src/features/pricing/components/pricing-hero.jsx`)
- [x] **3.12** Update pricing cards labels (`src/features/pricing/components/pricing-cards.jsx`)
- [x] **3.13** Update comparison table - Uses JSON data, already updated
- [x] **3.14** Update contact hero (`src/features/contact/components/contact-hero.jsx`)
- [x] **3.15** Update blog header → resources (`src/features/blog/components/blog-header.jsx`)
- [x] **3.16** Update blog single page text (`src/app/blog/[slug]/page.tsx`)

### 🔴 TIER 4: Content Creation (1-2 hours each)
*Requires writing new content or getting assets.*

- [x] **4.1** Write/source team member bios (`src/data/team.json`) - Placeholder content added
- [x] **4.2** Write/source job listings (`src/data/jobs.json`) - 6 roles added
- [x] **4.3** Write/source testimonials (`src/data/home-testimonials.json`) - 3 industry testimonials
- [ ] **4.4** Create/source case study content (`src/data/blog.json` → resources) - Needs real content

---

## 🖼️ Image Assets Checklist

### Required Logo Files
- [ ] `/public/images/logo.svg` - Primary logo (dark text, for light backgrounds)
- [ ] `/public/images/logo-white.svg` - Inverted logo (white text, for dark backgrounds)
- [ ] `/public/favicon.ico` - Browser favicon (32x32)
- [ ] `/public/apple-touch-icon.png` - Apple touch icon (180x180)

### Team Photos (4 needed)
- [ ] `/public/images/team/ceo.jpg` - CEO headshot (400x400, square)
- [ ] `/public/images/team/cto.jpg` - CTO headshot (400x400, square)
- [ ] `/public/images/team/vp-engineering.jpg` - VP Engineering headshot (400x400, square)
- [ ] `/public/images/team/vp-product.jpg` - VP Product headshot (400x400, square)

### Hero/Marketing Images
- [ ] `/public/images/hero-bg.jpg` - Homepage hero background (1920x1080)
- [ ] `/public/images/about-hero.jpg` - About page hero (1920x800)

### Product Screenshots (optional, enhance credibility)
- [ ] `/public/images/products/dashboard.png` - Dashboard screenshot
- [ ] `/public/images/products/verification-flow.png` - Verification flow screenshot
- [ ] `/public/images/products/mobile-sdk.png` - Mobile SDK screenshot

### Testimonial Photos (3 needed, or use company logos)
- [ ] `/public/images/testimonials/cannabis-dispensary.png` - Testimonial 1
- [ ] `/public/images/testimonials/fintech-startup.png` - Testimonial 2
- [ ] `/public/images/testimonials/online-marketplace.png` - Testimonial 3

### Press/Brand Assets
- [ ] `/public/images/press/logo-dark.zip` - Logo pack (SVG, PNG in various sizes)
- [ ] `/public/images/press/logo-light.zip` - Light logo pack

**Total: 18 image assets needed**

---

### ⚫ TIER 5: New Page Creation (2-4 hours each) ✅ COMPLETE
*Building new pages from scratch.*

- [x] **5.1** Create `/products` overview page
- [x] **5.2** Create `/products/digital-identity-verification` page
- [x] **5.3** Create `/products/document-authentication` page
- [x] **5.4** Create `/products/face-match` page
- [x] **5.5** Create `/products/access` page
- [x] **5.6** Create `/products/hardware` page
- [x] **5.7** Create `/solutions` overview page
- [x] **5.8** Create `/solutions/age-verification` page
- [x] **5.9** Create `/solutions/online-onboarding` page
- [x] **5.10** Create `/solutions/secure-access` page
- [x] **5.11** Create `/solutions/marketplaces` page
- [x] **5.12** Create `/solutions/remote-hiring` page
- [x] **5.13** Create `/developers` landing page
- [x] **5.14** Create `/about/leadership` page
- [x] **5.15** Create `/about/careers/[id]` dynamic page
- [x] **5.16** Create `/resources` overview page
- [ ] **5.17** Repurpose `/blog` → `/resources` routing - Keep both for now

### 🔵 TIER 6: Complex Infrastructure (4+ hours each) ✅ COMPLETE
*Requires significant architecture or external setup.*

- [x] **6.1** Create `/docs` API documentation structure
- [x] **6.2** Create `/docs/sdk` SDK documentation
- [x] **6.3** Create `/developers/samples` with code examples
- [x] **6.4** Create `/developers/changelog` page
- [x] **6.5** Create `/support` landing page
- [ ] **6.6** Create `/support/knowledge-base` structure - Future enhancement
- [x] **6.7** Create `/legal` section (privacy, terms, security)
- [x] **6.8** Create `/press` page with brand assets
- [x] **6.9** Create `/partners` page

---

## Progress Tracking

| Tier | Description | Tasks | Completed | % Done |
|------|-------------|-------|-----------|--------|
| 🟢 1 | Quick Wins | 12 | 12 | ✅ 100% |
| 🟡 2 | JSON Data Updates | 7 | 7 | ✅ 100% |
| 🟠 3 | Component Text Updates | 16 | 16 | ✅ 100% |
| 🔴 4 | Content Creation | 4 | 3 | 75% |
| ⚫ 5 | New Page Creation | 17 | 16 | 94% |
| 🔵 6 | Complex Infrastructure | 9 | 8 | 89% |
| **TOTAL** | | **65** | **62** | **95%** |

---

## Page Count Summary

| Category | Existing Pages | New Pages Needed | Total |
|----------|----------------|------------------|-------|
| Home | 1 | 0 | 1 |
| About | 1 | 3 | 4 |
| Products | 0 | 6 | 6 |
| Solutions | 0 | 6 | 6 |
| Developers | 0 | 6 | 6 |
| Pricing | 1 | 0 | 1 |
| Resources | 0 | 4 | 4 |
| Support | 0 | 3 | 3 |
| Legal | 0 | 7 | 7 |
| Contact/Secondary | 1 | 2 | 3 |
| Auth | 2 | 0 | 2 |
| **TOTAL** | **6** | **37** | **43** |

---

## Technical Notes

- All data files are located in `src/data/` as JSON files
- Component text is split between hardcoded JSX and JSON data files
- Images are stored in `/public/images/`
- New pages will use Next.js App Router structure
- Consider creating reusable page templates for Products, Solutions, Legal pages

---

## Future Expansions (Not Required Now)

- `/customers` - Customer showcase
- `/integrations` - Integration directory
- `/marketplace` - Partner marketplace
- `/events` - Events calendar
- `/community` - Community hub

---

*Last Updated: December 3, 2024*
