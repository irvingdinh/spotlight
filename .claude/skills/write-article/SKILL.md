---
name: write-article
description: Scaffold and draft blog articles for the Spotlight site. Use when the user wants to create a new article, write a blog post, draft article content, or asks about article structure and formatting.
---

# Write Article

## Scaffolding a new article

Articles live at `src/app/articles/{year}/{slug}/page.mdx` where `{year}` is the
four-digit publication year and `{slug}` is a short kebab-case identifier.

### MDX boilerplate

Every article file must start with this exact structure:

```mdx
import { ArticleLayout } from "@/components/ArticleLayout";

export const article = {
  author: "Irving Dinh",
  date: "YYYY-MM-DD",
  title: "Article Title Here",
  description:
    "A one- or two-sentence summary that appears in article listings and meta tags.",
};

export const metadata = {
  title: article.title,
  description: article.description,
};

export default (props) => <ArticleLayout article={article} {...props} />;

Article body content starts here...
```

### Field notes

| Field         | Guidance                                                                 |
|---------------|--------------------------------------------------------------------------|
| `author`      | Always `"Irving Dinh"`                                                   |
| `date`        | ISO format `YYYY-MM-DD`. Use the intended publication date.              |
| `title`       | Concise, evocative. Sentence case. No trailing period.                   |
| `description` | 1–2 sentences. This shows in article cards and `<meta>` tags.            |
| `slug`        | Derived from the directory name. Keep it short and meaningful.           |

### Checklist after scaffolding

- [ ] File path follows `src/app/articles/{year}/{slug}/page.mdx`
- [ ] All four `article` fields are filled in
- [ ] `metadata` re-exports `title` and `description` from `article`
- [ ] Default export wraps children in `<ArticleLayout>`

---

## Writing style guide

Irving's voice is **personal, narrative, and reflective**. Articles read like a
conversation with a thoughtful friend — never like corporate content or a
technical tutorial. Internalize the following patterns.

### Tone and voice

- **First person, conversational.** Write as "I" — direct and unguarded.
- **Genuine over polished.** Informal language is fine ("bestie", "wanna",
  contractions). Don't sand off the edges.
- **Show vulnerability.** Acknowledge uncertainty, mistakes, things left
  unfinished. "I didn't do anything groundbreaking" is a valid sentence.
- **Specific over abstract.** Name the tools, the companies, the people. Anchor
  stories in concrete details (dates, tech stacks, city names).
- **Reflective.** Don't just recount events — show what they meant, what changed,
  what the takeaway was.

### Structure

- **Opening** — Set the scene. Ground the reader in a moment, a feeling, or a
  situation. No thesis statement; pull the reader into the story.
- **Body sections** — Use `##` headers to mark distinct chapters or themes. Each
  section should be a self-contained story that advances the larger narrative.
  Prefer flowing prose over bullet lists.
- **Closing** — Step back, reflect on the whole arc. End forward-looking or with
  a quiet observation, not a call-to-action.

### Prose conventions

- **Paragraphs are medium-length.** 3–6 sentences. Dense enough to carry weight,
  short enough to breathe.
- **Minimal formatting in body text.** Bold and italic are rare. Let the words
  carry emphasis. No inline code blocks unless referencing actual code/tools.
- **Links to people use their full name** with a LinkedIn URL when relevant.
- **No bullet lists in narrative sections.** Save lists for genuinely list-shaped
  information (tech stacks, checklists). Default to prose.
- **Section titles are short phrases**, not full sentences. Two to five words.

### What to avoid

- Marketing speak, buzzwords, or hype language.
- Filler conclusions like "In conclusion..." or "To sum up..."
- Overly technical explanations — keep the reader in the *story*, not the spec.
- Generic motivational statements. If it could appear on a LinkedIn inspirational
  post, rewrite it.

---

## Workflow

1. **Ask** what the article is about — topic, rough angle, intended date.
2. **Scaffold** the MDX file with the boilerplate above.
3. **Draft** the article body following the style guide. If the user provides
   bullet points or an outline, expand them into narrative prose in Irving's
   voice. If the user provides a rough draft, refine tone and structure.
4. **Review** the draft against the style checklist:
   - Does the opening ground the reader in a specific moment?
   - Are sections driven by story, not exposition?
   - Does the closing reflect rather than summarize?
   - Is the voice genuine and specific?
5. Present the draft and iterate based on feedback.
