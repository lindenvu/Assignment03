/*eslint-env browser*/
function tellFortune(numChildren, strPartner, strLocation, strJob) {
    "use strict";
    window.document.write("You will be a " + strJob + " in " + strLocation + ", and married to " + strPartner + " with " + numChildren + " kids.<br>");
}
tellFortune(1, "Melania Knauss", "Washington DC", "President");
tellFortune(6, "Angelina Jolie", "Hollywood", "Actor");
tellFortune(2, "Gisele Bundchen", "New England", "NFL Quarterback");