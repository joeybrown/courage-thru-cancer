
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
  new Video('Teri Trotter', ["Breast"], '2016', ''),
  new Video('Brian Churchill', ["Colon"], '2016', ''),
  new Video('Adam Cruthirds', ["Leukemia"], '2016', ''),
  new Video('Virginia Steele', ["Liver"], '2016', ''),
  new Video('Tim McCormack', ["Leukemia"], '2016', ''),
  new Video('Herold Byrd', ["Colon", "Rectal"], '2016', ''),
  new Video('Gina Hollenbeck', ["Lung"], '2016', ''),
  new Video('Allie Allen', ["Brain"], '2016', ''),
  new Video('Debbi Allen', ["Breast"], '2016', ''),

  // 2017
  new Video('Robyn Raby', ["Breast"], '2017', ''),
  new Video('Brown Dudley', ["Leukemia"], '2017', ''),
  new Video('Kate Horton', ["Ovarian"], '2017', ''),
  new Video('Sam Sudduth', ["Non-Hodgkin's Lymphoma", "Melanoma", "Leukemia"], '2017', ''),
  new Video('Jon Thompson', ["Esophageal"], '2017', ''),
  new Video('Sally Maths', ["Breast"], '2017', ''),
  new Video('Rod Seuss', ["Esophageal"], '2017', ''),
  new Video('Lauren Wiener', ["Breast"], '2017', ''),

  // 2018
  new Video('Kim Bowden', ["Breast"], '2018', ''),
  new Video('Jane Ezzell', ["Colon"], '2018', ''),
  new Video('Ethele Hilliard', ["Breast"], '2018', ''),
  new Video('Bruce Hopkins', ["Ocular"], '2018', ''),
  new Video('Stephanie Simpson', ["Breast"], '2018', ''),
  new Video("Mike O'Neill", ["Esophageal"], '2018', ''),
  new Video('Jennifer Chandler', ["Breast"], '2018', ''),
  new Video('Sonya Fought', ["Oral"], '2018', ''),

  // 2019
  new Video('Loren Roberts', ["Prostrate"], '2019', ''),
  new Video('Ed Inman', ["Melanoma"], '2019', ''),
  new Video('Michelle Campbell', ["Lymphoma"], '2019', ''),
  new Video('Treay Gallegher', ["Breast"], '2019', ''),
  new Video('Kim Culbreath', ["Breast"], '2019', ''),
  new Video('Kevin Kane', ["Renal"], '2019', ''),
  new Video('Julie Clam', ["Breast"], '2019', ''),

  // 2020
  // empty

  // 2021
  new Video('Ryen Swenson', ["Non-Hodgkin's Lymphoma"], '2021', ''),
  new Video('Amy Pollon', ["Breast"], '2021', ''),
  new Video("Lori D'Entramont", ["Ovarian"], '2021', ''),
  new Video('Allen Gode', ["Testicular", "Melanoma"], '2021', ''),
  new Video('Hunter Deen', ["Testicular"], '2021', ''),
  new Video('Jeff Eamnest', ["Non-Hodgkin's Lymphoma"], '2021', ''),
  new Video('Lynn Herzke', ["Ovarian"], '2021', ''),
  new Video('LaTona DoBon', ["Breast"], '2021', ''),

  // 2022
  new Video('Madison Martin', ["Leukemia"], '2022', ''),
  new Video('Debbie Murphy', ["Bladder"], '2022', ''),
  new Video('Marsha Everett', ["Ovarian"], '2022', ''),
  new Video('Tina Rodgers', ["Breast"], '2022', ''),
  new Video('Ed Leet', ["Breast"], '2022', ''),
  new Video('Danita Brown', ["Breast"], '2022', ''),
  new Video('Abbey Miesse', ["Breast"], '2022', ''),

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
