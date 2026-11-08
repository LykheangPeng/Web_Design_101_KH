# Web Design in the AI Era: companion code

Companion files for the bilingual course book *Web Design in the AI Era: HTML, CSS & JavaScript in 12 Sessions* (A Bit About Digital, 2026).

## Folders

- `examples/` - every listing in the book. The folder name matches the label under each listing, for example `ex/s2_text` is `examples/s2_text/`.
- `labs/session-01` to `labs/session-12` - the lab steps for each session (English and Khmer).
- `portfolio-starter/` - a four-page starting point for the portfolio you build in the labs.

## How to run

Most examples open by double-clicking `index.html`. Examples that use `fetch` (for example `s11_fetch`) need a local web server, because browsers block `fetch` from `file://` pages:

```
cd examples/s11_fetch
python -m http.server 8000
```

Then open http://localhost:8000 in your browser. The Live Server extension in VS Code also works.

JavaScript-only examples (`s9_*`, `s11_json`, `s11_storage`) print to the browser console: open `index.html`, press F12 and choose *Console*.

## Licence

Free to use, change and share for non-commercial teaching and self-study.

Created with Claude (AI by Anthropic). All examples were run and checked.
