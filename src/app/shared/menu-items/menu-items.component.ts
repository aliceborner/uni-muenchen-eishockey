export interface Section {
  name: string;
  summary: string;
}

const ABOUT = 'about';
const KONTAKT = 'contact';
const TRAINING = 'training';

export const SECTIONS: { [key: string]: Section } = {
  [ABOUT]: {
    name: 'Über uns',
    summary: 'TODO add summary',
  },
  [TRAINING]: {
    name: 'Training',
    summary: 'TODO add summary',
  },
  [KONTAKT]: {
    name: 'Kontakt',
    summary: 'TODO add summary',
  },
};
