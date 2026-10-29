// Remove recovery credentials and provider errors from the browser's visible
// history after the app has had its opportunity to claim the universal link.
if (window.location.search || window.location.hash) {
    window.history.replaceState(null, "", "/reset-password");
}
