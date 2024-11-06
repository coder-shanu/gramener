// json2html.js

export default function json2html(data) {
    // Extract all unique keys from the data to form table headers
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start building the HTML string for the table
    let html = '<table data-user="patidarshanu999@gmail.com">';
  
    // Build table header
    html += "<thead><tr>";
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
  
    // Build table body
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>";
      headers.forEach(header => {
        html += `<td>${row[header] || ""}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
  
    return html;
  }
  