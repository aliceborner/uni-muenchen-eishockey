export interface AboutItem {
  title: string;
  content: string;
}
const INFO = 'info';
const DIRECTORS = 'directors';
const CLUB = 'club';
const LOGO = 'logo';

export const ABOUT_ITEMS: { [key: string]: AboutItem } = {
  [CLUB]: {
    title: 'Vereinsinformationen',
    content: `Am 12.04.2013 haben wir uns als Verein mit dem Namen "Hockeyspielgemeinschaft München e.V." gegründet.
    Unser Verein besitzt zwei separate Sparten: Eishockey und Inlinehockey.
    Die Eishockeyabteilung besteht zum Großteil aus noch aktiven oder ehemaligen Universitäts-Spielern.
    Daher tritt die Mannschaft weiterhin unter den Namen "Uni München" an.
    Insgesamt spielen bei uns 40-50 aktive Spieler, verteilt in zwei Mannschaften.
    Wir nehmen traditionell am Ligenbetrieb der MEL (früher MHL, MHC) und RHL teil.
    Unsere Inlinehockeymannschaft heißt "The Loggers", allerdings ruht der Trainings- und Spielbetrieb momentan.`,
  },
  [DIRECTORS]: {
    title: 'Vorstand',
    content: `1. Vorsitzender Korbinian Schätzle (Abteilungsleiter Eishockey)
    2. Vorsitzender Nico Hartlieb (Abteilungsleiter Inlinehockey)
    Schatzmeister David Schmölz
    Schriftführer Thomas Schepel

    Sportliche Leitung:
    Eishockey: Thomas Schepel, Tomas Tymko
    Inlinehockey: -`,
  },
  [INFO]: {
    title: 'Weitere Infos',
    content: `Heimspielstätte: Pfaffenhofen und Ottobrunn
    Heimtrikot: Schwarz/Grau
    Auswärtstrikot: Blau/Weiß`,
  },
  [LOGO]: {
    title: 'Logo',
    content: `Unser Logo besteht aus zwei Elementen: Ein Tempel symbolisiert die Universität,
    die uns durch das ZHS-Training als Mannschaft verbindet. Die Eishockeyschläger und Puck stehen natürlich
     für unseren Sport. Unser Maskottchen ist der legendäre Spartaner-König Leonidas.
    Analog hierzu lautet unser Kampfschrei: "Für Sparta!!!!".`,
  },
};
