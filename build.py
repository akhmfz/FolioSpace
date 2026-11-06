#!/usr/bin/env python3
"""Build and validate the deployable, static FolioSpace site."""

from html.parser import HTMLParser
from pathlib import Path
import argparse
import shutil
import subprocess

ROOT = Path(__file__).resolve().parent
PAGES = ("index.html", "templates.html", "template.html")
MARKER = ".foliospace-build-output"


class PageRefs(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs = []
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        for key in ("src", "href"):
            if attrs.get(key):
                self.refs.append(attrs[key])


def validate(site):
    pages = [*site.glob("*.html"), *site.glob("demos/*/*.html")]
    if len(pages) != 7:
        raise SystemExit(f"Expected 7 HTML pages, found {len(pages)}")
    for page in pages:
        parser = PageRefs()
        parser.feed(page.read_text(encoding="utf-8"))
        for ref in parser.refs:
            if ref.startswith(("https:", "http:", "mailto:", "tel:", "javascript:", "//", "data:", "about:")):
                continue
            path, _, fragment = ref.partition("#")
            target = (page.parent / path.split("?", 1)[0]).resolve() if path else page.resolve()
            if not target.exists():
                raise SystemExit(f"Missing local reference: {page.relative_to(site)} -> {ref}")
            if fragment:
                target_parser = PageRefs()
                target_parser.feed(target.read_text(encoding="utf-8"))
                if fragment not in target_parser.ids:
                    raise SystemExit(f"Missing local anchor: {page.relative_to(site)} -> {ref}")
    node = shutil.which("node")
    if not node:
        raise SystemExit("Node.js is needed to run the JavaScript syntax checks")
    for script in (site / "assets/js").glob("*.js"):
        subprocess.run([node, "--check", str(script)], check=True)
    if (site / "archive").exists() or any(site.glob("*.md")) or (site / "references").exists():
        raise SystemExit("Internal notes or archives leaked into the public build")
    return len(pages)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=ROOT / "dist")
    output = parser.parse_args().output.resolve()
    marker = output.parent / f".{output.name}{MARKER}"
    if output.exists():
        if not marker.is_file() or marker.read_text(encoding="utf-8") != "FolioSpace build output\n":
            raise SystemExit(f"Refusing to replace a directory not created by this build: {output}")
        shutil.rmtree(output)
    output.mkdir(parents=True)
    try:
        for page in PAGES:
            shutil.copy2(ROOT / page, output / page)
        for folder in ("assets", "demos"):
            shutil.copytree(ROOT / folder, output / folder)
        marker.write_text("FolioSpace build output\n", encoding="utf-8")
        count = validate(output)
    except BaseException:
        shutil.rmtree(output)
        marker.unlink(missing_ok=True)
        raise
    print(f"Build OK: {output} ({count} pages; no archive, research notes, or project docs)")


if __name__ == "__main__":
    main()
