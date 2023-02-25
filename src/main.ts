export function applyFilter(): void {
  const yearFilter = (
    document.getElementById('year-filters') as HTMLInputElement
  ).value;
  const typeFilter = (
    document.getElementById('type-filters') as HTMLInputElement
  ).value;
  console.log('YEAR FILTER: ' + yearFilter);
  console.log('type FILTER: ' + typeFilter);

  const filteredVideos = videos.filter((video) => {
    if (yearFilter == 'all') {
      // No year filter at all
      if (typeFilter == 'all') {
        // No type and year filter specified
        return true;
      } else {
        //Tpe filter only
        if (video.cancerTypes.includes(typeFilter)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      // There was a year filter
      if (typeFilter == 'all') {
        // No type filter but need to filter by years
        if (video.year == yearFilter) {
          return true;
        } else {
          return false;
        }
      } else {
        //Both a year and type filter were specified
        if (
          video.year === yearFilter &&
          video.cancerTypes.includes(typeFilter)
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  });
  const filteredVideosHtml = CardList.renderAllVideos(filteredVideos);

  // Need to stick this html somewhere! Maybe add a div with an id to the html.
  const html = `${filteredVideosHtml}`;
  //Replace not append
  document.getElementById('gc-all-video').innerHTML = html;

  //Re apply the function declarations
  document.getElementById('type-filters').onchange = function () {
    applyFilter();
  };
  document.getElementById('year-filters').onchange = function () {
    applyFilter();
  };
}

class VideoFilter {
  static renderFilter: () => string = () => {
    let html = '<div id="myfiltercustomcancer">';
    html += '<label for="filter">Filter </label><br/>';
    html += `<label for="type-filter-custom">Choose a type:</label>
    <select onmousedown="this.value='';" name="type-filter-custom-values" id="type-filters">
    <option value="all">None</option>
    <option value="Breast">Breast</option>
    <option value="Colon">Colon</option>
    <option value="Rectal">Rectal</option>
    <option value="Throat">Throat</option>
    <option value="Bone">Bone</option>
    <option value="Thyroid">Thyroid</option>
    <option value="Ewing Sarcoma">Ewing Sarcoma</option>
    <option value="Bladder">Bladder</option>
    <option value="Lung">Lung</option>
    <option value="Oral">Oral</option>
    <option value="Testicular">Testicular</option>
    <option value="Esophageal">Esophageal</option>
    <option value="Ocular">Ocular</option>
    <option value="Leukemia">Leukemia</option>
    <option value="Non-Hodgkin's Lymphoma">Non-Hodgkin's Lymphoma</option>
    <option value="Hodgkin's Lymphoma">Hodgkin's Lymphoma</option>
    <option value="Ovarian">Ovarian</option>
    <option value="Renal">Renal</option>
    <option value="Melanoma">Melanoma</option>
    <option value="Prostrate">Prostrate</option>
    <option value="Colon">Colon</option>
    <option value="Liver">Liver</option>
    <option value="Abdominal">Abdominal</option>
    <option value="Brain">Brain</option>
</select>
<label for="year-filter-custom">Choose a year:</label>
    <select onmousedown="this.value='';" name="year-filter-custom-values" id="year-filters">
    <option value="all">None</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
    </select>
    `;
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
    let html = `<div align="center" class="card">`;
    html += this.videoFrame(315, 800);
    html += '</div>';
    return html;
  }
}

export class CardList {
  static allVideosId = 'gc-all-video';

  // Rendering all videos should be grouped by year.
  static renderAllVideos: (videos: Video[]) => string = (videos: Video[]) => {
    let html = `<div id="${this.allVideosId}">`;
    const years = [...new Set(videos.map((item) => item.year))].sort(function (
      a: string,
      b: string,
    ): number {
      return Number(b) - Number(a);
    });
    for (const year of years) {
      html += `<h2>${year}</h2>`;
      html += '<div align="center">';
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
  new Video('Gerry Finney', ["Hodgkin's Lymphoma"], '2015', 'td8xtLj34UM'),
  new Video('Dana Burkett', ['Colon'], '2015', 'oZpjT-juRfE'),
  new Video('Zeke Logan', ['Liver'], '2015', 'cTdNaladdj4'),
  new Video('Patric Crump', ['Abdominal'], '2015', 'U8yUG936ksA'),
  new Video('Jayde Gordon', ['Brain'], '2015', '92Pnf8vBHKc'),

  // 2016
  new Video('Teri Trotter', ['Breast'], '2016', 'xAs0AVhJPE0'),
  new Video('Brian Churchill', ['Colon'], '2016', 'kP0mMq_dRV8'),
  new Video('Adam Cruthirds', ['Leukemia'], '2016', 'mF5uMP7c1K4'),
  new Video('Virginia Steele', ['Liver'], '2016', '30gbQcrsYKY'),
  new Video('Tim McCormack', ['Leukemia'], '2016', 'WaSn5mLtI2c'),
  new Video('Herold Byrd', ['Colon', 'Rectal'], '2016', 'cD9B50M0lWA'),
  new Video('Gina Hollenbeck', ['Lung'], '2016', 'k2dvMqlRxHM'),
  new Video('Allie Allen', ['Brain'], '2016', 'MME7xh-tu1A'),
  new Video('Debbi Allen', ['Breast'], '2016', 'MME7xh-tu1A'),

  // 2017
  new Video('Robyn Raby', ['Breast'], '2017', 'yQYz8Q0s0II'),
  new Video('Brown Dudley', ['Leukemia'], '2017', 'GhiTtd6TpAQ'),
  new Video('Kate Horton', ['Ovarian'], '2017', 'fXPuSCIBGC8'),
  new Video(
    'Sam Sudduth',
    ["Non-Hodgkin's Lymphoma", 'Melanoma', 'Leukemia'],
    '2017',
    'i9hPNavRx0k',
  ),
  new Video('Jon Thompson', ['Esophageal'], '2017', 'iJEIyTyLekY'),
  new Video('Sally Maths', ['Breast'], '2017', 'J3D_zTkn_vw'),
  new Video('Rod Suess', ['Esophageal'], '2017', '5Wh7LtweGV4'),
  new Video('Lauren Wiener', ['Breast'], '2017', 't4ivmuGUPxA'),

  // 2018
  new Video('Kim Bowden', ['Breast'], '2018', '6p17kh9JvfQ'),
  new Video('Jane Ezzell', ['Colon'], '2018', 'wEzByzNzzb8'),
  new Video('Ethele Hilliard', ['Breast'], '2018', 'WYiycSwfnII'),
  new Video('Bruce Hopkins', ['Ocular'], '2018', '-Iy881-CwQA'),
  new Video('Stephanie Simpson', ['Breast'], '2018', 'avKC8xKoqcY'),
  new Video("Mike O'Neill", ['Esophageal'], '2018', 'dR10zmvbnl8'),
  new Video('Jennifer Chandler', ['Breast'], '2018', '9uWzped9yx4'),
  new Video('Sonya Faught', ['Oral'], '2018', '1f11IFNMUhA'),

  // 2019
  new Video('Loren Roberts', ['Prostrate'], '2019', 'IfTOXzOG458'),
  new Video('Ed Inman', ['Melanoma'], '2019', 'yHWGW3d1D8k'),
  new Video('Michelle Campbell', ['Lymphoma'], '2019', 'x0FycZZN6j0'),
  new Video('Tracy Gallagher', ['Breast'], '2019', 'SoS1f24A_30'),
  new Video('Kim Culbreath', ['Breast'], '2019', 'k_dRMvcu1eM'),
  new Video('Kevin Kane', ['Renal'], '2019', 'anN9jW2pWpc'),
  new Video('Julie Clary', ['Breast'], '2019', 'HProyK8SK1w'),

  // 2020
  // empty

  // 2021
  new Video('Ryan Swanson', ["Hodgkin's Lymphoma"], '2021', 'cT_O3W1u94M'),
  new Video('Amy Pollan', ['Breast'], '2021', 'O98-w1aiWyY'),
  new Video("Lori D'Entremont", ['Ovarian'], '2021', 'AppcYPbAqaM'),
  new Video('Allen Goode', ['Testicular', 'Melanoma'], '2021', 'NAr3Xg7pf1Y'),
  new Video('Hunter Deen', ['Testicular'], '2021', '7gU0UNeRSVY'),
  new Video('Jeff Earnest', ["Hodgkin's Lymphoma"], '2021', 'VeD8g-kAglg'),
  new Video('Lynn Herzke', ['Ovarian'], '2021', 'jisIPW2bng0'),
  new Video('Latoya Dotson', ['Breast'], '2021', 'AC2qxdr2mZQ'),

  // 2022
  new Video('Madison Martin', ['Leukemia'], '2022', 'yImj51trJ1I'),
  new Video('Debbie Murphy', ['Bladder'], '2022', '6OIbAUDG3e8'),
  new Video('Marsha Everett', ['Ovarian'], '2022', 'TjQ1Dg4yLbA'),
  new Video('Tina Rodgers', ['Breast'], '2022', 'b0gZ-BdXq4Q'),
  new Video('Ed Leet', ['Breast'], '2022', 'IBLruLO2bNo'),
  new Video('Danita Brown', ['Breast'], '2022', 'Gr061iN6Jac'),
  new Video('Abbey Miesse', ['Breast'], '2022', '0ec38zC9R8I'),
  //  new Video('Ethan Daniel', ['Leukemia'], '2022', '0ec38zC9R8I'),
  new Video('Mark Bran', ['Lung'], '2022', 'PusZ6noYA_o'),
  new Video(
    'Kristina Bran Thomas',
    ["Hodgkin's Lymphoma"],
    '2022',
    'PusZ6noYA_o',
  ),

  // 2023

  new Video('Ethan Daniel', ['Leukemia'], '2022', 's8Ub7iSyFME'),
  new Video('Joyce Cobb', [''], '2019', '_26HeRexcYY'),
  new Video('Keri Burnette', ['Breast'], '2022', 'weY59ihwAS8'),
  new Video('George Klein', ['Throat'], '2021', 'td_UoJWVzng'),
  new Video('Melissa Corzine', ['Breast'], '2019', '7Vu2RfN4ieY'),
  new Video('Trey Erwin', ['Pancreatic'], '2019', 'bpWWLB6pWfw'),
  new Video('Trevor Trumbo', ['Brain'], '2017', '94kZ_zN9Nss'),
  new Video('Carson Head', ['Bone'], '2017', 'zUZpJlLLCcU'),
  new Video('Cassy Culunga', ['Brain'], '2017', 'kGU0jnaR5IE'),
];

export async function initialRender(): Promise<void> {
  const filterHtml = VideoFilter.renderFilter();
  const allVideosHtml = CardList.renderAllVideos(videos);

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
