import { Video } from "./video.js";

export class Card {
  constructor(public readonly video: Video) {
  }

  private videoFrame: (height: number, width: number) => string = (height, width) =>
    `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${this.video.youtubeSlug}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

  render(): string {
    let html = `<div class="card">`;
    html += this.videoFrame(315, 560);
    html += '</div>';
    return html;
  }
}

export class CardList {

  // Rendering all videos should be grouped by year.
  static renderAllVideos(videos: Video[]): string {
    let html = '<div>';
    const years = [...new Set(videos.map((item) => item.year))]
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
  }

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

