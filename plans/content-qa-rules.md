# Content QA Rules — Amazon Product Cards

## Objective
Prevent repetitive generic copy and enforce product-specific buyer guidance.

## Hard rules (must pass)
1. **No generic boilerplate** in card sublines (`Best for`, `What stands out`, `Before you buy`, `Skip this if`).
2. Each card must include at least:
   - one **product-specific attribute** (format/material/fit/compatibility/use-case)
   - one **buyer-risk check** (size chart, variant contents, ingredient details, compatibility, etc.)
   - one **clear mismatch case** (who should skip)
3. If signal is weak, explicitly say so (e.g., "signal is limited on this listing") — do not fabricate specificity.
4. Keep confidence marker/legend consistent (`🟢 🟡 🔴`) but never let it replace real buyer guidance.

## Blocklist phrases (fail if present)
- "people who value clear tradeoffs and straightforward buying decisions"
- "it targets common real-world use without requiring premium-tier spend"
- "check size/material/spec notes and make sure return policy is clear for your variant"
- "you want top-tier materials/features that usually sit in a higher price band"

## Release checklist (required before deploy)
1. Run duplication/generic scanner.
2. Spot-check at least 3 pages from different categories.
3. Verify one page on production domain (`reviews.orkolabs.com`) after alias update.
4. If scanner finds blocklist text, fix before commit.
