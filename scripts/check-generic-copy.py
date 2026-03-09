#!/usr/bin/env python3
from pathlib import Path

BLOCKLIST = [
    "people who value clear tradeoffs and straightforward buying decisions",
    "it targets common real-world use without requiring premium-tier spend",
    "check size/material/spec notes and make sure return policy is clear for your variant",
    "you want top-tier materials/features that usually sit in a higher price band",
    "shoppers prioritizing dependable day-to-day use over trend-only features",
    "it solves one clear buyer need in a simple, compare-friendly format",
    "verify the exact variant details and scan newest low-star reviews for recurring issues",
    "your requirements are highly specific and not flexible to common marketplace tradeoffs",
]

base = Path('content/pages')
hits = []
for p in sorted(base.glob('*.md')):
    text = p.read_text().lower()
    for b in BLOCKLIST:
        if b in text:
            hits.append((p.name, b))

if not hits:
    print('PASS: no blocked generic phrases found')
    raise SystemExit(0)

print('FAIL: blocked generic phrases found')
for f, b in hits:
    print(f'- {f}: {b}')
raise SystemExit(1)
