/**
 * Bot detector stub — disables Cloudflare Turnstile and restores expected
 * window.botDetector API so pages and games that depend on it work.
 *
 * This file intentionally does not perform any verification. It immediately
 * marks the session as verified and invokes registered callbacks. Use this
 * when you want the site to behave normally without Cloudflare Turnstile.
 *
 * To restore Turnstile behavior later, replace this file with the original
 * implementation from your repository history (or revert this commit).
 */
(function () {
  'use strict';

  // Keep the same public API used across the site.
  window.botDetector = {
    // Return false so ad/games code does not block resource loading.
    shouldBlockAds: function () { return false; },
    // Immediately say the session is verified.
    isVerified: function () { return true; },
    // Call the callback immediately (one-shot) to mimic verification.
    onVerified: function (cb) {
      if (typeof cb !== 'function') return;
      try { cb(); } catch (e) { /* swallow callback errors */ }
    }
  };
})();
