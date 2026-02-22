(function () {
  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Projects filtering
  var search = document.getElementById("search");
  var filter = document.getElementById("filter");
  var grid = document.getElementById("projectGrid");
  if (!grid) return;

  function normalize(s) {
    return (s || "").toLowerCase().trim();
  }

  function apply() {
    var q = normalize(search && search.value);
    var f = normalize(filter && filter.value);
    var cards = grid.querySelectorAll(".project");

    cards.forEach(function (card) {
      var tags = normalize(card.getAttribute("data-tags"));
      var text = normalize(card.textContent);

      var passFilter = (f === "all") || tags.includes(f);
      var passSearch = (!q) || tags.includes(q) || text.includes(q);

      card.style.display = (passFilter && passSearch) ? "" : "none";
    });
  }

  if (search) search.addEventListener("input", apply);
  if (filter) filter.addEventListener("change", apply);
})();
