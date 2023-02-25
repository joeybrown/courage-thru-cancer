
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
  new Video('Dana Burkett', ["Colon"], '2015', 'oZpjT-juRfE'),
  new Video('Zeke Logan', ['Liver'], '2015', 'cTdNaladdj4'),
  new Video('Patric Crump', ['Abdominal'], '2015', 'U8yUG936ksA'),
  new Video('Jayde Gordon', ['Brain'], '2015', '92Pnf8vBHKc'),

  // 2016
  new Video('Teri Trotter', ["Breast"], '2016', 'xAs0AVhJPE0'),
  new Video('Brian Churchill', ["Colon"], '2016', 'kP0mMq_dRV8'),
  new Video('Adam Cruthirds', ["Leukemia"], '2016', 'mF5uMP7c1K4'),
  new Video('Virginia Steele', ["Liver"], '2016', '30gbQcrsYKY'),
  new Video('Tim McCormack', ["Leukemia"], '2016', 'WaSn5mLtI2c'),
  new Video('Herold Byrd', ["Colon", "Rectal"], '2016', 'cD9B50M0lWA'),
  new Video('Gina Hollenbeck', ["Lung"], '2016', 'k2dvMqlRxHM'),
  new Video('Allie Allen', ["Brain"], '2016', 'MME7xh-tu1A'),
  new Video('Debbi Allen', ["Breast"], '2016', 'MME7xh-tu1A'),

  // 2017
  new Video('Robyn Raby', ["Breast"], '2017', 'yQYz8Q0s0II'),
  new Video('Brown Dudley', ["Leukemia"], '2017', 'GhiTtd6TpAQ'),
  new Video('Kate Horton', ["Ovarian"], '2017', 'fXPuSCIBGC8'),
  new Video('Sam Sudduth', ["Non-Hodgkin's Lymphoma", "Melanoma", "Leukemia"], '2017', 'i9hPNavRx0k'),
  new Video('Jon Thompson', ["Esophageal"], '2017', 'iJEIyTyLekY'),
  new Video('Sally Maths', ["Breast"], '2017', 'J3D_zTkn_vw'),
  new Video('Rod Suess', ["Esophageal"], '2017', '5Wh7LtweGV4'),
  new Video('Lauren Wiener', ["Breast"], '2017', 't4ivmuGUPxA'),

  // 2018
  new Video('Kim Bowden', ["Breast"], '2018', '6p17kh9JvfQ'),
  new Video('Jane Ezzell', ["Colon"], '2018', 'wEzByzNzzb8'),
  new Video('Ethele Hilliard', ["Breast"], '2018', 'WYiycSwfnII'),
  new Video('Bruce Hopkins', ["Ocular"], '2018', '-Iy881-CwQA'),
  new Video('Stephanie Simpson', ["Breast"], '2018', 'avKC8xKoqcY'),
  new Video("Mike O'Neill", ["Esophageal"], '2018', 'dR10zmvbnl8'),
  new Video('Jennifer Chandler', ["Breast"], '2018', '9uWzped9yx4'),
  new Video('Sonya Faught', ["Oral"], '2018', '1f11IFNMUhA'),

  // 2019
  new Video('Loren Roberts', ["Prostrate"], '2019', 'IfTOXzOG458'),
  new Video('Ed Inman', ["Melanoma"], '2019', 'yHWGW3d1D8k'),
  new Video('Michelle Campbell', ["Lymphoma"], '2019', 'x0FycZZN6j0'),
  new Video('Tracy Gallagher', ["Breast"], '2019', 'SoS1f24A_30'),
  new Video('Kim Culbreath', ["Breast"], '2019', 'k_dRMvcu1eM'),
  new Video('Kevin Kane', ["Renal"], '2019', 'anN9jW2pWpc'),
  new Video('Julie Clary', ["Breast"], '2019', 'HProyK8SK1w'),

  // 2020
  // empty

  // 2021
  new Video('Ryan Swanson', ["Non-Hodgkin's Lymphoma"], '2021', 'cT_O3W1u94M'),
  new Video('Amy Pollan', ["Breast"], '2021', 'O98-w1aiWyY'),
  new Video("Lori D'Entremont", ["Ovarian"], '2021', 'AppcYPbAqaM'),
  new Video('Allen Goode', ["Testicular", "Melanoma"], '2021', 'NAr3Xg7pf1Y'),
  new Video('Hunter Deen', ["Testicular"], '2021', '7gU0UNeRSVY'),
  new Video('Jeff Earnest', ["Non-Hodgkin's Lymphoma"], '2021', 'VeD8g-kAglg'),
  new Video('Lynn Herzke', ["Ovarian"], '2021', 'jisIPW2bng0'),
  new Video('Latoya Dotson', ["Breast"], '2021', 'AC2qxdr2mZQ'),

  // 2022
  new Video('Madison Martin', ["Leukemia"], '2022', 'yImj51trJ1I'),
  new Video('Debbie Murphy', ["Bladder"], '2022', '6OIbAUDG3e8'),
  new Video('Marsha Everett', ["Ovarian"], '2022', 'TjQ1Dg4yLbA'),
  new Video('Tina Rodgers', ["Breast"], '2022', 'b0gZ-BdXq4Q'),
  new Video('Ed Leet', ["Breast"], '2022', 'IBLruLO2bNo'),
  new Video('Danita Brown', ["Breast"], '2022', 'Gr061iN6Jac'),
  new Video('Abbey Miesse', ["Breast"], '2022', '0ec38zC9R8I'),

  // 2023
  new Video('Joyce Cobb', [""], '2023', ''),
  new Video('George Klein', ["Throat"], '2023', ''),
  new Video('Emily Thomas', ["Oral"], '2023', ''),
  new Video('Melissa Corzine', ["Breast"], '2023', ''),
  new Video('Kimberly Jessop', ["Melanoma"], '2023', ''),
  new Video('Bailey Jessop', ["Bone"], '2023', ''),
  new Video('Alyssa De Jong', ["Melanoma"], '2023', ''),
  new Video('Tuler West', ["Leukemia"], '2023', ''),
  new Video('Remco De Jong', ["Throat"], '2023', ''),
  new Video('Trey Erwin', ["Pancreatic"], '2023', ''),
  new Video('Dakota Cunningham', ["Leukemia"], '2023', ''),
  new Video('John Rose', ["Brain"], '2023', ''),
  new Video('Emily Hines', ["Leukemia"], '2023', ''),
  new Video('McKendree Walker', ["Thyroid"], '2023', ''),
  new Video('Hannah Tate', ["Kidney"], '2023', ''),
  new Video('Kristina Hunsucker', ["Ewing Sarcoma"], '2023', ''),
  new Video('Trevor Trumbo', ["Brain"], '2023', ''),
  new Video('Carson Head', ["Bone"], '2023', ''),
  new Video('Cassy Culunga', ["Brain"], '2023', ''),
  new Video('Keri Burnette', ["Breast"], '2023', '')
];
