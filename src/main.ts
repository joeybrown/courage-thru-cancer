export function applyFilter(): void {
  const year = document.getElementById('year-filters').value;
  const type = document.getElementById('type-filters').value;
  console.log('YEAR FILTER: ' + year);
  console.log('type FILTER: ' + type);
}

class VideoFilter {
  static renderFilter: () => string = () => {
    let html = '<div>';
    html += '<label for="filter">Filter </label><br/>';
    html += `<label for="year-filter-custom">Choose a year:</label>
    <select onmousedown="this.value='';" name="year-filter-custom-values" id="year-filters">
    <option value="all">None</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
    </select>
    <label for="type-filter-custom">Choose a type:</label>
    <select onmousedown="this.value='';" name="type-filter-custom-values" id="type-filters">
    <option value="all">None</option>
        <option value="breast">breast</option>
        <option value="testicular">testicular</option>
    </select>`;
    html += '</div>';
    return html;
  };
}

export class Card {
  constructor(public readonly video: Video) {}

  private videoFrame: (height: number, width: number) => string = (
    height,
    width,
  ) =>
    `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${this.video.youtubeSlug}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

  render(): string {
    let html = `<div class="card">`;
    html += this.videoFrame(315, 560);
    html += '</div>';
    return html;
  }
}

export class CardList {
  static allVideosId = 'gc-all-video';

  // Rendering all videos should be grouped by year.
  static renderAllVideos: (videos: Video[]) => string = (videos: Video[]) => {
    let html = `<div id="${this.allVideosId}">`;
    const years = [...new Set(videos.map((item) => item.year))];
    for (const year of years) {
      html += `<h2>${year}</h2>`;
      html += '<div>';
      const videosForYear = videos.filter((item) => item.year === year);
      for (const video of videosForYear) {
        const card = new Card(video);
        html += card.render();
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  };

  // Rendering filtered videos should not be grouped. Slightly different style.
  static renderFilteredVideos(videos: Video[], filterText: string): string {
    let html = '<div>';
    html += `<h2>${filterText}</h2>`;
    html += '<div>';
    for (const video of videos) {
      const card = new Card(video);
      html += card.render();
    }
    html += '</div>';
    return html;
  }
}

class Video {
  constructor(
    name: string,
    cancerTypes: string[],
    year: string,
    youtubeSlug: string,
  ) {
    this.name = name;
    this.cancerTypes = cancerTypes;
    this.year = year;
    this.youtubeSlug = youtubeSlug;
  }

  name: string;
  cancerTypes: string[];
  year: string;

  /*
   * This is not easily accessible. Find it by going to the youtube video and clicking the share button.
   * https://support.google.com/youtube/answer/171780
   */
  youtubeSlug: string;
}

const videos: Video[] = [
  // 2015
  new Video('Gerry Finney', ["Non-Hodgkin's Lymphoma"], '2015', 'td8xtLj34UM'),
  new Video('Dana Burkett', ['Colon'], '2015', ''),
  new Video('Zeke Logan', ['Liver'], '2015', ''),
  new Video('Patric Crump', ['Abdominal'], '2015', ''),
  new Video('Jayde Gordon', ['Brain'], '2015', ''),
];

export async function initialRender(): Promise<void> {
  const allVideos = await Promise.resolve(videos);

  const filterHtml = VideoFilter.renderFilter();
  const allVideosHtml = CardList.renderAllVideos(allVideos);

  // Need to stick this html somewhere! Maybe add a div with an id to the html.
  const html = `<div>${filterHtml}${allVideosHtml}</div>`;
  document.getElementsByClassName('wpb_raw_code wpb_raw_js')[0].innerHTML +=
    html;
  document.getElementById('type-filters').onchange = function (): void {
    applyFilter();
  };
  document.getElementById('year-filters').onchange = function (): void {
    applyFilter();
  };
  console.log(html);
}

initialRender();
