from pathlib import Path
import re

req = ["title:","slug:","intent:","primary_keyword:","meta_title:","meta_description:","affiliate_disclosure:"]
base = Path(__file__).resolve().parents[1] / "content/pages"
errors = []
for p in sorted(base.glob("*.md")):
    text = p.read_text()
    for r in req:
        if r not in text:
            errors.append(f"{p.name}: missing {r}")
    if "Affiliate disclosure" not in text:
        errors.append(f"{p.name}: missing disclosure block")
if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print(f"OK: validated {len(list(base.glob('*.md')))} pages")
