import { AsyncStorage } from 'react-native';

const KEY_BATAS_NILAI = 'Storage.BatasNilai';

export function saveBatasNilai(batasNilai) {
  AsyncStorage.setItem(KEY_BATAS_NILAI, JSON.stringify(batasNilai))
    .then(() => console.log('Save success!'))
    .catch(e => console.log('Save error', e));
}

export function getBatasNilai() {
  return AsyncStorage.getItem(KEY_BATAS_NILAI).then(value => {
    if (value) {
      return JSON.parse(value);
    }
    return {
      A: 90,
      B: 80,
      C: 70,
      D: 50
    };
  });
}
