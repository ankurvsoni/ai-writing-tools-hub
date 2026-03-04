# EXECUTION PLAN — AI Writing Tools Hub

## 1) Asset Summary
- **Type:** Affiliate content site (SEO)
- **Goal:** rank for high-intent “best / vs / alternatives / review” queries and drive affiliate clicks

## 2) Stack + Repo Structure
- Content-first static workflow (Markdown + frontmatter)
- Deploy target (after approval): static host

```
projects/ai-writing-tools-hub/
  BUILD_BRIEF.md
  EXECUTION_PLAN.md
  APPROVAL_REQUEST.md
  content/
    pages/              # 30 publish-ready pages
    data/
      affiliate-programs.csv
      internal-links.csv
  templates/
    page-template.md
  scripts/
    validate-content.py
  docs/
    publish-checklist.md
```

## 3) Content Batch Plan (First 30 Pages)
- 10 “Best” list pages
- 5 direct comparison pages
- 5 alternatives pages
- 8 product reviews
- 2 evergreen guides (how-to + FAQ)

## 4) Publishing Workflow
1. Draft and QA content locally
2. Validate metadata/schema fields via script
3. Build preview locally
4. Approval gate
5. Publish + submit sitemap

## 5) Tracking Setup Steps
- GA4 + Search Console (post-approval)
- UTM/affiliate params per CTA
- Weekly KPI sheet:
  - pages published
  - clicks
  - conversions
  - revenue per 100 visits

## 6) Approvals Needed (Exact)
- Domain/hosting selection and spend
- CMS/static host account linking
- External publication
- Search Console + Analytics property setup
