---
name: blog-writing
description: "Plan, draft, and sharpen technical blog posts and engineering essays for a practitioner audience. Use when writing or reviewing a public tech article, engineering blog, architecture essay, or technical thought-leadership post, especially in this portfolio."
---

# Technical Blog Writing

Help the reader understand a real problem, a defensible claim, and what to do differently. Optimize for usefulness and trust, not virality. Popularity is not proof of correctness or writing quality.

## Workflow

1. **Set the reader and outcome.** Identify the intended practitioner, what they already know, and what they should understand or decide after reading. Do not explain familiar basics unless they matter to the argument.
2. **Find the claim.** Write one sentence that states the argument and its scope. Prefer a useful replacement or boundary over a blanket rejection. List the strongest counterexample and when the advice does not apply.
3. **Choose evidence before polish.** Gather primary sources for factual and product claims. Separate observed measurements, attributed reports, hypothetical examples, and inference. Never invent incidents, quotes, benchmarks, or reader motives. Give numbers their conditions and source.
4. **Choose one concrete example.** Use a real, clearly attributed case or label a scenario hypothetical/composite. Carry it through the problem, mechanism, tradeoffs, and conclusion. Every anecdote should explain or test the claim.
5. **Outline the reasoning.** A useful default is: tension or failure → thesis → how the system works → example/evidence → tradeoffs and limits → practical decision. Change the structure when the argument calls for it.
6. **Draft with the reader in mind.** Open on a specific problem, surprising observation, or consequential question. State the thesis early. Use descriptive headings that advance the reasoning, not generic topic labels. Explain jargon when it first matters, without talking down to experienced readers.
7. **Use technical artifacts selectively.** Include code, configuration, logs, or measurements only when they prove a point. Explain what each fragment demonstrates; label omissions and do not present illustrative snippets as complete, production-safe implementations. For a diagram, write its takeaway as the caption first, then draw only what supports it. Split diagrams that need too much explanation.
8. **Earn credibility.** Explain why the existing approach exists, what it costs, and where your alternative fails or is unnecessary. Critique system choices, not the people who made them. For a vendor-affiliated article, be transparent about affiliation and product limits; the central argument should remain useful without a product pitch or CTA.
9. **Land the conclusion.** Resolve the opening question and leave the reader with a decision, diagnostic, or next step. Do not substitute a recap, sales pitch, or promised sequel for the answer.
10. **Revise in passes.** First check thesis, evidence, and section order; then technical accuracy, attribution, and links; then cut repetition, jargon, hype, and sentences that do not advance the argument. Read it once as the target reader.

## Quality check

Before handing off a draft, confirm:

- The opening gives the target reader a reason to care.
- The claim is clear, bounded, and supported by the example.
- Evidence is inspectable and claims are not stronger than their sources.
- Facts, opinion, hypothetical details, and uncertainty are distinguishable.
- The counterargument and meaningful limits are addressed fairly.
- Every code block and diagram earns its space and is explained.
- Headings make the argument easy to scan; length is no greater than the argument needs.
- The ending gives a usable answer without a forced CTA.

Treat this as an editorial check, not a correctness or security review. Verify technical behavior against authoritative sources separately. There is no universal ideal word count, code-to-prose ratio, or diagram count.

## Portfolio conventions

When creating or editing a post in this repository:

- Read the README and one neighboring post first. Preserve the Docusaurus conventions and existing frontmatter; filenames include the publication date and the `slug` sets the URL.
- Use the established Markdown/MDX style, tags, author metadata, and `<!--truncate-->` excerpt marker where appropriate. Do not invent metadata or alter unrelated posts.
- Keep drafts in the requested location. Writing or editing a post does not authorize committing, pushing, or publishing it.

## Useful models

- [Julia Evans on clear explanations](https://jvns.ca/blog/2020/11/15/simple-explanations-without-sounding-condescending/): relevant stories, useful terminology, and honest uncertainty.
- [Marc Brooker on TCP_NODELAY](https://brooker.co.za/blog/2024/05/09/nagle.html): explain why a mechanism exists before making a scoped recommendation.
- [Ben Johnson on SQLite and Litestream](https://fly.io/blog/all-in-on-sqlite-litestream/): strong opinion paired with explicit limitations.
- [Google's guidance on audience](https://developers.google.com/tech-writing/one/audience) and [technical illustrations](https://developers.google.com/tech-writing/two/illustrations): fit the explanation to reader knowledge; make diagrams instructional.
- [Paul Graham on simple writing](https://www.paulgraham.com/simply.html): reduce prose friction so attention stays on the idea.

For public writing under Austen's name, the `write` skill can help with register and proofreading. Do not apply its mechanical fingerprint for unattributed messages to an authored article.
