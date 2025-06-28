---
mode: agent
---


# goal
Make GitHub-style admonitions work in Docusaurus with the following types:

Navigate to localhost:3000 using playwright and see how the Admonitions aren't support like:
* [!NOTE] - Highlights information that users should take into account, even when skimming.
* [!TIP] - Optional information to help a user be more successful.
* [!IMPORTANT] - Crucial information necessary for users to succeed.
* [!WARNING] - Critical content demanding immediate user attention due to potential risks.
* [!CAUTION] - Negative potential consequences of an action.

YOU MUST USE TYPESCRIPT FOR EVERYTHING. INCLUDING REMARK PLUGIN!

# Requirements
* Use Typescript
* Use Native docusaurus admonitions functionality
* Use the GitHub-style admonition keywords: note, tip, important, warning, caution

# Examples

[!TIP] You can omit the image keyword and use the short version container: node:18 if you don't need to specify parameters.

[!NOTE] The GITHUB_TOKEN expires after the job finishes or 24 hours. This is a limiting factor for SHRs.

# Resources

fetch docs at 
* https://docusaurus.io/docs/markdown-features/admonitions 
* https://docusaurus.io/docs/markdown-features/plugins
to understand how they work.

Make the TIP and NOTE admonitions work.

## GitHub Admonitions

I want the new admonitions to be based on GitHub's.

View them here using playwright:
https://github.com/orgs/community/discussions/16925
Here is how they are displayed:

Note
Highlights information that users should take into account, even when skimming.

Tip
Optional information to help a user be more successful.

Important
Crucial information necessary for users to succeed.

Warning
Critical content demanding immediate user attention due to potential risks.

Caution
Negative potential consequences of an action.


# Info docs

Customizing admonitions
There are two kinds of customizations possible with admonitions: parsing and rendering.

Customizing rendering behavior
You can customize how each individual admonition type is rendered through swizzling. You can often achieve your goal through a simple wrapper. For example, in the follow example, we swap out the icon for info admonitions only.

src/theme/Admonition.js
import React from 'react';
import Admonition from '@theme-original/Admonition';
import MyCustomNoteIcon from '@site/static/img/info.svg';

export default function AdmonitionWrapper(props) {
  if (props.type !== 'info') {
    return <Admonition title="My Custom Admonition Title" {...props} />;
  }
  return <Admonition icon={<MyCustomNoteIcon />} {...props} />;
}

Customizing parsing behavior
Admonitions are implemented with a Remark plugin. The plugin is designed to be configurable. To customize the Remark plugin for a specific content plugin (docs, blog, pages), pass the options through the admonitions key.

docusaurus.config.js
export default {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger'],
            extendDefaults: true,
          },
        },
      },
    ],
  ],
};

The plugin accepts the following options:

keywords: An array of keywords that can be used as the type for the admonition.
extendDefaults: Should the provided options (such as keywords) be merged into the existing defaults. Defaults to true.
The keyword will be passed as the type prop of the Admonition component.

Custom admonition type components
By default, the theme doesn't know what do to with custom admonition keywords such as :::my-custom-admonition. It is your responsibility to map each admonition keyword to a React component so that the theme knows how to render them.

If you registered a new admonition type my-custom-admonition via the following config:

docusaurus.config.js
export default {
  // ...
  presets: [
    [
      'classic',
      {
        // ...
        docs: {
          admonitions: {
            keywords: ['my-custom-admonition'],
            extendDefaults: true,
          },
        },
      },
    ],
  ],
};

You can provide the corresponding React component for :::my-custom-admonition by creating the following file (unfortunately, since it's not a React component file, it's not swizzlable):

src/theme/Admonition/Types.js
import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function MyCustomAdmonition(props) {
  return (
    <div style={{border: 'solid red', padding: 10}}>
      <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'my-custom-admonition': MyCustomAdmonition,
};

export default AdmonitionTypes;

Now you can use your new admonition keyword in a Markdown file, and it will be parsed and rendered with your custom logic:

:::my-custom-admonition[My Title]

It works!

:::