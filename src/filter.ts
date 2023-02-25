export class VideoFilter {
  static renderFilter: () => string = () => {
    let html = '<div>';
    html += '<label for="filter">Filter</label>';
    html += '<input type="text" id="filter" name="filter" onkeyup="filterVideos()" />';
    html += '</div>';
    return html;
  }
}
