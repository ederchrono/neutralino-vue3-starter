# Tortilla machine

> We're not making enchiladas... but we can automate the tortillas!

A tool to find opportunities in your codebase to create code generators.

## How it works?

Tortilla machine reads your codebase files, ignoring your files in the .gitignore file.

It then finds similarities between files and creates a graph of the codebase.

At the end of the process, it creates a list of possible templates that you can choose and bundle into one or more generators.

You can then tweak the templates by adding a prompt that asks the user for variables that you can use to change the location and contents of the templates.

When you finish, you should have a collection of generators that you can run either with tortilla or on your CLI using [hygen](https://www.hygen.io/).
