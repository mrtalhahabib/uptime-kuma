// MrGeek: floating "Cycle" button for Uptime Kuma UI — links to /cycle/
// Served from /cycle/cycle-btn.js (mounted volume), injected via SPA html.
(function () {
    var BTN_ID = "mrgeek-cycle-btn";
    function mount() {
        if (document.getElementById(BTN_ID)) return;
        var a = document.createElement("a");
        a.id = BTN_ID;
        a.href = "/cycle/";
        a.title = "Open Cycle Dashboard";
        a.textContent = "Cycle";
        a.style.cssText = [
            "position:fixed", "right:18px", "bottom:18px", "z-index:99990",
            "padding:7px 16px", "border-radius:20px",
            "background:#5cdd8b", "color:#fff", "font-weight:700", "font-size:13px",
            "font-family:system-ui,-apple-system,'Segoe UI',sans-serif",
            "letter-spacing:.3px", "text-decoration:none",
            "box-shadow:0 2px 10px rgba(0,0,0,.25)",
            "transition:transform .15s ease, box-shadow .15s ease"
        ].join(";");
        a.onmouseenter = function () {
            a.style.transform = "translateY(-2px)";
            a.style.boxShadow = "0 4px 14px rgba(0,0,0,.3)";
        };
        a.onmouseleave = function () {
            a.style.transform = "none";
            a.style.boxShadow = "0 2px 10px rgba(0,0,0,.25)";
        };
        document.body.appendChild(a);
    }
    if (document.body) mount();
    else document.addEventListener("DOMContentLoaded", mount);
})();
