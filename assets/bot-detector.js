/**
 * Cloudflare Turnstile verification gate for Chromebook Unlocked.
 *
 * Runs Turnstile INVISIBLY on first page load of a session. Most human
 * visitors are cleared by the non-interactive challenge and never see
 * anything — ads simply load a moment later once the success callback fires.
 * The full-screen interstitial is only revealed if Turnstile decides the
 * visitor needs to interact (i.e. the traffic looks risky/bot-like).
 * Verification is cached in sessionStorage so subsequent navigations within
 * the same tab session pass through instantly.
 *
 * Public API (kept compatible with prior bot-detector.js callers):
 *   window.botDetector.shouldBlockAds()  -> boolean
 *   window.botDetector.isVerified()      -> boolean
 *   window.botDetector.onVerified(cb)    -> register a one-shot callback
 */
