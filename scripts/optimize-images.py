"""Encode portfolio photographs as WebP without reducing their resolution."""
from pathlib import Path
from PIL import Image

assets = Path(__file__).resolve().parents[1] / 'src' / 'assets'
names = [
    'luxury-fleet', 'bmw-7-series', 'bmw-7-series-silver', 'bmw-7-series-white',
    'lexus-lx', 'lexus-lx-black', 'lexus-lx-grey', 'land-cruiser-prado',
    'land-cruiser-prado-white', 'land-cruiser-prado-black', 'porsche-911',
    'porsche-911-silver', 'porsche-911-green', 'toyota-prius-yellow',
    'toyota-prius-white', 'toyota-prius-black', 'honda-accord-blue',
    'honda-accord-white', 'honda-accord-black',
    'honda-city-silver', 'honda-city-white', 'honda-city-black',
    'honda-civic-red', 'honda-civic-white', 'honda-civic-blue',
    'toyota-crown-sand', 'toyota-crown-white', 'toyota-crown-black',
    'lexus-ls-black', 'lexus-ls-silver', 'lexus-ls-white',
    'toyota-alphard-white', 'toyota-alphard-black', 'toyota-alphard-grey',
    'nissan-gtr-silver', 'nissan-gtr-red', 'nissan-gtr-black',
]
for name in names:
    source = assets / f'{name}.png'
    if not source.exists():
        continue
    target = assets / f'{name}.webp'
    with Image.open(source) as photo:
        photo.convert('RGB').save(target, 'WEBP', quality=94, method=6)
        print(f'{name}: {photo.width}x{photo.height}, {target.stat().st_size // 1024} KiB')
