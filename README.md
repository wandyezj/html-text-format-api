# text-manipulation-api

Create an API that can represent manipulating and formating text.

## Text

A **block** of text is a continuous string.

A **block** is the biggest piece of text that can be worked on.

A **span** of text is a continuous section of the block of text that has a discrete start and length (start, length)

Example:

The **block** 

> Hi World

A **span** of the **block** might be (0, 2) or "Hi"

The smallest **span** is a single character. 

> Example: (0,1) "H".

A **span** can also be used to indicate the positions between characters. 

> Example: (0,0) indicates the position at the start of the block.
>
> Example: (8,8) indicates the position at the end of the block.

## Formats

Each individual character of the text string can have its own associated format.

Thus a **block** has at most one format for each character of a string.

Generally, formats are applied to a **span** of a **block**.

Possible formats includes:

* font
* size
* color / foreground
* highlight / background
* bold
* underline
* italics
* squiggly lines - notification lines often used for grammar checkers.
    * color
    * specific squiggle

## Scenarios

* Update a span of text (text or format):
    * remove a span
    * insert a span
    * replace a span with another span
* Query what the contexts (text or format) of a span is. 
* Query where a format is applied in a span.
* Undo - each update step is a discrete action that undo may be applied to.

### Edges

What happens to formatting when text is deleted?
* formatting information is also deleted.

What formatting gets applied to inserted text?

## Uses

What would be cool scenarios where this functionality would be useful?

* Grammar -> Highlighting the specific parts of a sentence in differen colors {noun, verb, adjective, etc..}
* Highlighting pairs of words in a large block of text as part of a specific search.
* Auto styling and highlighting code.
* Indicating to people a domain specifc rule has been violated (think legal documents where language matters, also applies to code)
* Creating beautiful ASCII art.
* An API as part of a website to allow people to click and format their text while also doing so programatically.

# Test

Apply the API to manipulate HTML text using spans.

