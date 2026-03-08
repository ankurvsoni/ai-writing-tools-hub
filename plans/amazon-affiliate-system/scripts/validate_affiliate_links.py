#!/usr/bin/env python3
import csv, re, time
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
from datetime import datetime, UTC
from pathlib import Path

BASE = Path(__file__).resolve().parents[1]
INFILE = BASE / 'affiliate-links-v1.csv'
OUTFILE = BASE / 'affiliate-links-v1-validated.csv'


def extract(pattern, text):
    m = re.search(pattern, text, re.I | re.S)
    return re.sub(r'\s+', ' ', m.group(1)).strip() if m else ''


def fetch(url):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'en-US,en;q=0.9'})
    with urlopen(req, timeout=25) as resp:
        return resp.read().decode('utf-8', 'ignore')


def main():
    rows = list(csv.DictReader(open(INFILE, newline='')))
    for r in rows:
        status, note, html = 'ok', '', ''
        try:
            html = fetch(r['amazon_url'])
        except HTTPError as e:
            status, note = f'http_{e.code}', 'http error'
        except URLError as e:
            status, note = 'error', str(e.reason)[:120]
        except Exception as e:
            status, note = 'error', str(e)[:120]

        title = price = rating = reviews = availability = ''
        if html:
            if 'captcha' in html.lower() and 'Type the characters you see' in html:
                status, note = 'blocked_captcha', 'amazon blocked automated fetch'
            title = extract(r'id="productTitle"[^>]*>(.*?)<', html)
            price = extract(r'class="a-offscreen">(\$[0-9\.,]+)<', html)
            rating = extract(r'data-hook="rating-out-of-text"[^>]*>(.*?)<', html)
            reviews = extract(r'id="acrCustomerReviewText"[^>]*>(.*?)<', html)
            availability = extract(r'id="availability".*?<span[^>]*>(.*?)<', html)
            if not title and status == 'ok':
                status, note = 'parse_limited', 'could not parse full product data'

        r.update({
            'validation_status': status,
            'live_title': title,
            'live_price': price,
            'live_rating': rating,
            'live_reviews': reviews,
            'live_availability': availability,
            'validated_at_utc': datetime.now(UTC).isoformat(timespec='seconds').replace('+00:00', 'Z'),
            'validation_note': note,
        })
        time.sleep(0.8)

    with open(OUTFILE, 'w', newline='') as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)

    print(f'Wrote {OUTFILE} ({len(rows)} rows)')


if __name__ == '__main__':
    main()
