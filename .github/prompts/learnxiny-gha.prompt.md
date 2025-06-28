---
mode: agent
---
Your goal is to create a learnXinY file for GitHub Actions.

Take a whirlwind tour of your next favorite language. Community-driven!

THE FILE IS CURRENTLY LOCATED AT .github/workflows/cheat-sheet.yml

# Instructions

# Create a learnXinY file for GitHub Actions

# File: learnxiny-gha.md

Create a learnXinY file for GitHub Actions. The file should be named `learnxiny-gha.md`.

The file should be structured similarly to other learnXinY files, with a clear introduction, sections for key concepts, and examples.

The content should be concise, informative, and easy to follow.

# GitHub Actions

To learn about GitHub Actions, you can refer to the official documentation at https://docs.github.com/en/actions.
https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions
https://docs.github.com/en/actions/reference/events-that-trigger-workflows
https://docs.github.com/en/actions/reference/evaluate-expressions-in-workflows-and-actions
https://docs.github.com/en/actions/reference/accessing-contextual-information-about-workflow-runs
https://docs.github.com/en/actions/reference/metadata-syntax-for-github-actions


How to Format a “Learn X in Y Minutes” file https://learnxinyminutes.com/
(Use this as a prompt or checklist when asking an AI to generate one.)

Aspect	Exact spec to tell the AI
Single self-contained code file	“Output one plain-text file that can be run (or at least parsed) by the language’s interpreter/compiler.”
Comment-driven narration	“Explain every concept using the language’s single-line comment token (#, //, --, ;, etc.). Put the comment on the same line as the code whenever it fits; otherwise place it directly above the code block.”
Section headers	“Introduce each major topic with a comment header of the form # ## Topic Name (double hash in shells, // == Topic == in C-style languages, etc.) so they visually stand out but remain valid comments.”
Top banner	“Begin with a 3-line banner comment: (1) Learn <Language> in Y minutes title, (2) URL reference: Based on learnxinyminutes.com docs, (3) MIT licence notice.”
Ordering of topics	“Follow this canonical sequence: 1) Hello World / printing, 2) Primitive data & literals, 3) Variables & assignment, 4) Collections, 5) Control flow, 6) Functions / procs / methods, 7) Modules & imports, 8) OOP / traits / interfaces (if relevant), 9) Errors / exceptions, 10) Concurrency or async (if the language supports it), 11) ‘Gotchas & FAQs’ section at the end.”
Brevity rule	“Aim for ~250–300 lines max. Each line should teach something; strip boilerplate (no project scaffolding, no package.json, etc.). Comment explanations should rarely exceed 80 chars wide.”
Minimal external deps	“Use only the standard library unless the language requires a popular framework to demonstrate basics.”
Idiomatic code	“Write idioms the community actually uses—e.g., list comprehensions in Python, map/filter chains in JS, pattern matching in Rust.”
Whitespace & alignment	“Align assignment operators and hash-rocked comment columns where it helps scanning; keep indentation consistent with the language’s convention (2 vs 4 spaces, tabs, etc.).”
Copy-pastable	“Every snippet must run as-is after copy-pasting the whole file, or after commenting out earlier sections—no undefined variables left hanging.”
Early exit disclaimer	“After the banner, add a short comment: # Prereqs: you already know programming basics—this is just syntax.”
No markdown, no HTML	“Everything lives inside language comments or runnable code—no external markup.”

Skeleton to give the AI (example uses Python comments; swap comment token accordingly)
python
Copy
Edit
# Learn Python in Y Minutes
# Ported & distilled from learnxinyminutes.com
# MIT License

# ## 1. Hello, world
print("Hello, world!")           # basic output

# ## 2. Primitives & variables
an_int    = 42                   # integers
a_float   = 3.14                 # floats
a_string  = "spam"               # strings
a_bool    = True                 # booleans

# ## 3. Collections
a_list  = [1, 2, 3]              # ordered, mutable
a_tuple = (1, 2, 3)              # ordered, immutable
a_set   = {1, 2, 3}              # unique elements
a_dict  = {"key": "value"}       # hash-map

# ## 4. Control flow
for x in a_list:                 # loops
    if x % 2 == 0:
        print(x, "is even")
    else:
        print(x, "is odd")

# ## 5. Functions
def fib(n):                      # recursion example
    """Return first n Fibonacci numbers"""
    seq = [0, 1]
    while len(seq) < n:
        seq.append(seq[-1] + seq[-2])
    return seq

# ## 6. Modules & imports
import math                      # std-lib only
print(math.sqrt(16))

# ## 7. Exceptions
try:
    1 / 0
except ZeroDivisionError as e:
    print("Error:", e)

# ## 8. Classes (OOP)
class Animal:
    def speak(self):
        raise NotImplementedError

class Dog(Animal):
    def speak(self):
        return "Woof!"

print(Dog().speak())

# ## 9. Gotchas & FAQs
# - Indentation matters.
# - Numbers are unlimited precision.
# - Everything is an object.

# End of file – you just Learned Python in Y Minutes!
Give your AI these instructions plus the skeleton (with comment tokens swapped), and it will spit out a faithful “Learn X in Y Minutes” tutorial for any language.