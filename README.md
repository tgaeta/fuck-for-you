# Fuck For You

![Fuck For You Logo](./icon128.png)

## Overview

This Chrome extension modifies the user interface of x.com (formerly Twitter) to provide a more focused browsing experience. It automatically selects the "Following" tab, removes several UI elements, and observes DOM changes to maintain these modifications.

## Features

1. Automatically selects the "Following" tab
2. Removes the "For you" tab
3. Removes the "Trending now" sidebar
4. Removes the "Who to follow" sidebar
5. Removes the Explore button
6. Removes the Community Notes link
7. Removes the Ads link
8. Removes the Verified Orgs Signup link

## How It Works

The extension uses a content script (`content.js`) that performs the following actions:

1. Defines a `modifyPage()` function that:

   - Selects the "Following" tab and removes the "For you" tab
   - Removes various sidebar elements and links

2. Sets up a MutationObserver to watch for changes in the DOM and re-applies the modifications when changes occur.

3. Runs the `modifyPage()` function initially and then continuously observes the DOM for changes.

## Installation

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

Once installed, the extension will automatically modify the x.com interface whenever you visit the site. No additional action is required.

## Customization

You can modify the `content.js` file to add or remove modifications as needed. After making changes, make sure to reload the extension in the Chrome extensions page.

## Disclaimer

This extension significantly alters the user interface of x.com. While it provides a more focused experience, it also removes functionality that some users may depend on. Use at your own discretion.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Fuck For You is released under the [MIT License](./LICENSE.txt).

## Support

If you encounter any issues or have questions, please open an issue in this repository.

---

**Note:** Websites can change their structure at any time. If x.com updates its DOM structure, this extension may need to be updated to continue functioning correctly.
