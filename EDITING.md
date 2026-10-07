# How to update your portfolio (no local setup needed)

All site content lives in **one file**: [`src/content/content.json`](src/content/content.json).
You never need to touch the component code.

## The 60-second update flow

1. Go to https://github.com/Deenadayalan369/portfolio
2. Click into `src` → `content` → `content.json`
3. Click the **pencil icon** (✏️ "Edit this file") in the top right
4. Change the text you want
5. Scroll down, click **Commit changes**
6. Wait ~40 seconds — Vercel rebuilds and your live site updates automatically

That's it. No terminal, no npm, no laptop required — this works from your phone.

## Rules to avoid breaking the build

JSON is picky about punctuation. Three rules cover almost everything:

- Every piece of text goes in **double quotes**: `"like this"`
- Items in a list are separated by **commas**, but the **last one has no comma**
- Don't delete the `{ }` or `[ ]` brackets

✅ Correct:
```json
"stack": ["Flutter", "Dart", "SQLite"]
```

❌ Broken (trailing comma after the last item):
```json
"stack": ["Flutter", "Dart", "SQLite",]
```

If you do break it, nothing bad happens to the live site — Vercel's build fails and the
**previous version stays up**. You'll get an email, and you just fix the file and commit again.

## Common things you'll want to change

### Add a new project
Copy an existing block inside `"projects": [ ... ]` and change the values. A minimal one:

```json
{
  "slug": "my-new-project",
  "name": "My New Project",
  "tagline": "One line describing it",
  "status": "In progress",
  "stack": ["Python", "FastAPI"],
  "description": "A paragraph about what it does and why.",
  "highlights": [
    "First thing worth bragging about",
    "Second thing"
  ],
  "github": "https://github.com/Deenadayalan369/my-new-project"
}
```

Put a comma after the previous project's closing `}` so the list stays valid.

Optional extras a project can have:
- `"featured": true` — renders it large, with the icon panel, at the top
- `"videoPath": "/videos/demo.mp4"` — adds a "Watch demo" button (upload the file to `public/videos/`)
- `"apkPath": "/downloads/app.apk"` — adds a "Download APK" button (upload to `public/downloads/`)
- `"image": "/images/icon.png"` — the icon shown on featured projects

`"status"` can be anything, but `"Shipped"` renders a teal badge and anything else renders indigo.

### Mark a project as finished
Change `"status": "In progress"` to `"status": "Shipped"`.

### Add a bullet to your job
Find `"bullets": [` under the company and add a new `"...",` line.

### Change your availability line
Edit `"availability"` near the top under `"profile"`.

### Add a skill
Find the right `"group"` in `"skillGroups"` and add it to that group's `"items"` list.

## Replacing the resume PDF

Upload a new file named exactly `Deenadayalan_K_Resume.pdf` into the `public/` folder:
on GitHub, open the `public` folder → **Add file** → **Upload files** → drag it in → Commit.
The download buttons point at that filename, so nothing else needs changing.

## Adding a video or APK

Same idea — upload into `public/videos/` or `public/downloads/` via GitHub's web uploader,
then reference the path in `content.json`.

> GitHub's web uploader caps at 25MB per file. The CuraSynk APK (28MB) was added from the
> command line. For bigger files you'd push from your machine, or host the file elsewhere
> and use the full URL instead of a local path.

## If you ever want to run it locally

```bash
npm install
npm run dev
```
Then open http://localhost:3000.
