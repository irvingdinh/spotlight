## Reference

All reference materials live under `.idea/github.com/` (gitignored). **Do NOT read these
into the main conversation context.** Instead, spawn an Explore subagent to discover and
read from them on-demand. This keeps the main context lean.

- `.idea/github.com/irvingdinh/guidelines` — Project conventions and guidelines. Consult when setting up standards or following established patterns.
- `.idea/github.com/tailwindcss/spotlight-ts` — Original Spotlight template by Tailwind CSS. Consult when comparing against upstream or understanding the base template structure.

**Convention for new dependencies:** When you need to reference a dependency that is not yet
cloned locally, shallow-clone it into `.idea/github.com/{owner}/{repo}`
(`git clone --depth 1`) and add it to the list above. Prefer local source code over web
search or training knowledge — training data may be outdated.
