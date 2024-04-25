// general site stuff
const infoTables = document.querySelectorAll("table");
infoTables.forEach((table) => {
  const tds = Array.from(table.querySelectorAll("td"));
  tds.forEach((td) => {
    // wrap the inner content in a div
    const div = document.createElement("div");
    div.innerHTML = td.innerHTML;
    td.innerHTML = "";
    td.appendChild(div);
  });
  // head the headers
  const thead = table.querySelector("thead");
  console.log({ thead });
  if (!thead) return;
  const headers = Array.from(thead.querySelectorAll("th")).map(
    (th) => th.textContent
  );
  console.log({ headers });
  // for each cell in the table, add a data-label attribute with the header value
  tds.forEach((td) => td.setAttribute("data-label", headers[td.cellIndex]));
});

document
  .querySelectorAll(".js-download")
  .forEach((el) =>
    el.addEventListener("click", download.bind(null, el.dataset.href))
  );

function download(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
