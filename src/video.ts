
export class Video {

  constructor(name: string, cancerTypes: string[], year: string, youtubeSlug: string) {
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

export const videos: Video[] = [
  // 2015
  new Video('Gerry Finney', ["Non-Hodgkin's Lymphoma"], '2015', 'td8xtLj34UM'),
  new Video('Dana Burkett', ["Colon"], '2015', ''),
  new Video('Zeke Logan', ['Liver'], '2015', ''),
  new Video('Patric Crump', ['Abdominal'], '2015', ''),
  new Video('Jayde Gordon', ['Brain'], '2015', ''),

  // 2016
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9

  // 2017
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8

  // 2018
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8

  // 2019
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7

  // 2020
  // empty

  // 2021
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8

  // 2022
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
];
