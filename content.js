// Function to select the "Following" tab and remove unwanted elements
function modifyPage() {
  // Select and click the "Following" tab, remove "For you" tab
  const tabElements = document.querySelectorAll(
    'div[role="tablist"] > div[role="presentation"]'
  );
  tabElements.forEach((tab) => {
    const spanElement = tab.querySelector('span');
    if (spanElement) {
      const text = spanElement.textContent.trim().toLowerCase();
      if (text === 'following') {
        tab.click();
      } else if (text === 'for you') {
        tab.remove();
      }
    }
  });

  // Remove "Trending now" sidebar
  const trendingSidebar = document.querySelector(
    'div[aria-label="Timeline: Trending now"]'
  );
  if (trendingSidebar) {
    trendingSidebar.remove();
  }

  // Remove "Who to follow" sidebar
  const whoToFollowSidebar = document.querySelector(
    'aside[aria-label="Who to follow"][role="complementary"]'
  );
  if (whoToFollowSidebar) {
    whoToFollowSidebar.remove();
  }

  // Remove Explore button
  const exploreButton = document.querySelector(
    'a[aria-label="Search and explore"][data-testid="AppTabBar_Explore_Link"]'
  );
  if (exploreButton) {
    exploreButton.remove();
  }

  // Remove Community Notes link
  const communityNotesLink = document.querySelector(
    'a[href="/i/communitynotes"][role="link"]'
  );
  if (communityNotesLink) {
    communityNotesLink.remove();
  }

  // Remove Ads link
  const adsLink = document.querySelector('a[href^="https://ads.x.com/"]');
  if (adsLink) {
    adsLink.remove();
  }

  // Remove Verified Orgs Signup link
  const verifiedOrgsLink = document.querySelector(
    'a[href="/i/verified-orgs-signup"][role="link"]'
  );
  if (verifiedOrgsLink) {
    verifiedOrgsLink.remove();
  }
}

// Function to observe DOM changes
function observeDOM() {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        modifyPage();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

// Initial run
modifyPage();

// Set up the observer
observeDOM();
