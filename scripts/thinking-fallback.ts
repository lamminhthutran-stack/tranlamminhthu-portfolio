import type { Plugin } from "vite";
import { readFileSync } from "node:fs";
import data from "../src/data/thinking.json";
const escape = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!,
  );
// Generate real HTML outside the React root: this SPA cannot render a JSX noscript without JS.
export function thinkingFallback(): Plugin {
  let base = "/";
  return {
    name: "thinking-no-js",
    configResolved(config) {
      base = config.base;
    },
    transformIndexHtml() {
      const css = readFileSync(
        new URL("../src/components/portfolio/thinking.css", import.meta.url),
        "utf8",
      );
      const lenses = data.lenses
        .map(
          (lens, index) =>
            `<article class="lens-panel"><h3>${index + 1}. ${escape(lens.question)}</h3><div class="lens-comparison"><div class="lens-without"><span class="lens-label">Without this lens</span><p><s>${escape(lens.without)}</s></p></div><span class="lens-arrow" aria-hidden="true">→</span><div class="lens-with"><span class="lens-label">With it</span><p>${escape(lens.with)}</p><span class="lens-artifact">Artifact: ${escape(lens.artifact)}</span></div></div></article>`,
        )
        .join("");
      return [
        {
          tag: "noscript",
          injectTo: "body",
          children: `<style>${css} .thinking-fallback{font-family:Arial,sans-serif;background:#FFFCF2;padding:24px;max-width:1100px;margin:auto;box-sizing:border-box}.thinking-fallback *{box-sizing:border-box}.thinking-fallback .lens-panel{margin-top:40px;animation:none}</style><section id="thinking" class="thinking-story thinking-fallback"><h1>How I think</h1><p>One real problem. Five lenses.</p><div class="lens-problem"><span class="lens-label">The problem</span><blockquote>“${escape(data.problem)}”</blockquote><p>Sounds simple. Here's what happened when I looked at it from five angles.</p></div>${lenses}<div class="lens-result"><span class="lens-label">Result</span><h3>${escape(data.result)}</h3><a href="${escape(base + data.caseStudyHref)}">Read the case study →</a></div></section>`,
        },
      ];
    },
  };
}
