# [💻 whatsthecodeforthat.com](https://whatsthecodeforthat.com)

As developers we often switch between various languages, and sometimes it's difficult to remember how to do the little things. 

> *How do I lower-case a string?*

> *What's the list append function called?* 

> *How do I iterate over the key/value pairs of a map?*

> *Speaking of which, what's the map initialization syntax again?*

Don't sweat it, that's what **[whatsthecodeforthat.com](https://whatsthecodeforthat.com)** is here for, with short snippets reminding you how to handle the small things in various languages. If you don't see a section, example or language that you need, submit a [pull request](https://github.com/KyleBanks/whatsthecodeforthat.com) to help out.

## Contributing

If there's a section, language, or snippet you think is missing or needs updating, please don't hesitate to help out. When making modifications, please follow these general guidelines:

### - Content Sections

If you're adding a new section or subsection to [/content](./content), please try to:

- order the content in order of sophistication; for example, arrays come after primitives, classes come after functions, etc.
- reorder surrounding folder numeric prefixes in lieu of a better system 
- try to avoid language-specific content and aim to focus on situations common to various languages; for example, `goroutines` are unique to the go language, so instead of a `goroutines` section it makes sense to have a `concurrency` section
- ensure an `_index.md` with `title` front-matter for each folder
- limit to depth of content to section and subsection, no more and no less

### - Languages

If you're adding a new language, please try to:

- focus on popular languages, rather than obscure or esoteric ones
- add the language to the list in [config.toml](./config.toml) in alphabetical order
- ensure the language is suitable to be included in most content sections

### - Snippets

If you're adding a language snippet to an existing content section, please try to:

- use the file naming convention of `<lower-case-name>.md`; for example `go.md` or `python.md`
- limit the code sample to using the standard library
- keep the code equivalent to other examples in the same content section, including variable names and values, use of print statements, etc.
- avoid over-optimization, instead strive for simplicity and the general use case
- the snippet file should contain one code block (marked by triple ticks), and any commentary should be done in langauge-specific comments

## Running the Site Locally

This project uses [hugo](https://gohugo.io/) to generate a static website from markdown, so you'll need to have [hugo installed](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo) to run locally. After that, use the `make` target like so to have the site generated, auto-reloaded on changes, and your browser opened:

```
$ make local
```

## License 

```
MIT License

Copyright (c) 2019 Kyle Banks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
