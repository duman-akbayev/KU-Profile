from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PREVIEWS = ROOT / "previews"


def font(size: int, bold: bool = False):
    family = "seguisb.ttf" if bold else "segoeui.ttf"
    path = Path("C:/Windows/Fonts") / family
    return ImageFont.truetype(str(path), size) if path.exists() else ImageFont.load_default()


def contain(image: Image.Image, size: tuple[int, int], color=(241, 243, 236)) -> Image.Image:
    image = image.convert("RGB")
    image.thumbnail(size, Image.Resampling.LANCZOS)
    frame = Image.new("RGB", size, color)
    frame.paste(image, ((size[0] - image.width) // 2, (size[1] - image.height) // 2))
    return frame


pages = [
    ("HOME", "home.png"),
    ("ABOUT", "about.png"),
    ("EXPERIENCE", "experience.png"),
    ("PROJECTS", "projects.png"),
    ("PROJECT CASE STUDY", "case-study.png"),
    ("CONTACT", "contact.png"),
    ("CURRICULUM VITAE", "cv.png"),
]

canvas_width = 1460
margin = 60
gap = 32
card_width = 654
image_height = 454
label_height = 42
header_height = 128
row_height = label_height + image_height + 42
rows = 4
canvas_height = header_height + rows * row_height + margin
canvas = Image.new("RGB", (canvas_width, canvas_height), "#071415")
draw = ImageDraw.Draw(canvas)
draw.text((margin, 38), "KANAT UMERTAYEV · PORTFOLIO PAGE PREVIEWS", fill="#edf3e9", font=font(26, True))
draw.text((margin, 78), "Seven production-rendered routes · 1440 × 1000 viewport", fill="#91a29e", font=font(15))

for index, (label, filename) in enumerate(pages):
    column = index % 2
    row = index // 2
    x = margin + column * (card_width + gap)
    y = header_height + row * row_height
    draw.text((x, y), label, fill="#c9f45b", font=font(14, True))
    source = Image.open(PREVIEWS / filename)
    thumb = contain(source, (card_width, image_height))
    thumb = ImageOps.expand(thumb, border=1, fill="#334748")
    canvas.paste(thumb, (x, y + label_height))

canvas.save(PREVIEWS / "portfolio-pages.png", quality=94)

responsive_items = [
    ("MOBILE HOME", "mobile-home.png"),
    ("MOBILE PROJECTS", "mobile-projects.png"),
    ("MOBILE CONTACT", "mobile-contact.png"),
]
responsive_width = 1840
responsive_height = 860
responsive = Image.new("RGB", (responsive_width, responsive_height), "#071415")
rdraw = ImageDraw.Draw(responsive)
rdraw.text((56, 34), "RESPONSIVE & THEME VALIDATION", fill="#edf3e9", font=font(26, True))
rdraw.text((56, 74), "True 390px device emulation · automatic dark mode", fill="#91a29e", font=font(15))

mobile_width, mobile_height = 292, 632
for index, (label, filename) in enumerate(responsive_items):
    x = 56 + index * 320
    y = 138
    rdraw.text((x, 112), label, fill="#c9f45b", font=font(13, True))
    source = Image.open(PREVIEWS / filename)
    thumb = contain(source, (mobile_width, mobile_height))
    thumb = ImageOps.expand(thumb, border=1, fill="#334748")
    responsive.paste(thumb, (x, y))

rdraw.text((1040, 112), "AUTOMATIC DARK THEME", fill="#c9f45b", font=font(13, True))
dark = contain(Image.open(PREVIEWS / "dark-home.png"), (744, 517), color=(7, 20, 21))
dark = ImageOps.expand(dark, border=1, fill="#334748")
responsive.paste(dark, (1040, 138))
rdraw.rounded_rectangle((1040, 686, 1786, 772), radius=18, fill="#102426")
rdraw.text((1068, 706), "LIGHT / DARK", fill="#edf3e9", font=font(16, True))
rdraw.text((1068, 735), "System preference + persistent manual toggle", fill="#91a29e", font=font(14))

responsive.save(PREVIEWS / "responsive-themes.png", quality=94)
print("Created previews/portfolio-pages.png")
print("Created previews/responsive-themes.png")
