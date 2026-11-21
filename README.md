# Resume Website

The website can be accessed at: [https://andrew-kula931.github.io/profile-website/](https://andrew-kula931.github.io/profile-website/)

Tells a little bit about me (the developer)

Features a brief overview of my industry experience and a few projects.
Perhaps there may be an archive of additional content, but you'll have to find that yourself.

## Adding books

Add a directory under `src/content` and place its chapters in Markdown or MDX files. Each chapter needs frontmatter with `book`, `title`, `chapNum`, and `pubDate`; `updatedDate` is optional. The book directory, table of contents, and chapter pages are generated automatically, ordered by `chapNum`.

To add a summary to the writing directory, place a `book.json` file in the book's directory with a `description` array of paragraphs, as in `src/content/experimentt/book.json`.
