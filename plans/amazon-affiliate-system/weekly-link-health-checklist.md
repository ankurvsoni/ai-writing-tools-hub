# Weekly Link Health Checklist (Amazon Affiliate)

Run every Monday before publishing:

1. Open `affiliate-links-v1-validated.csv`
2. Filter rows where:
   - `validation_status != ok`
   - `live_availability` is empty or not `In Stock`
3. Replace weak links with backup ASIN (`backup_asin`)
4. Spot-check top 10 revenue links manually in browser
5. Refresh price/rating snapshot (script below)
6. Update article product blocks with fresh snippet lines
7. Re-run QA pass on 3 newest posts

## Quick run command
```bash
python3 projects/ai-writing-tools-hub/plans/amazon-affiliate-system/scripts/validate_affiliate_links.py
```

## Publish guardrails
- Never hard-code exact price in headline/title
- In-body price mentions must include “at time of writing”
- Always include one backup product per recommendation
- If product unavailable, swap link same day
