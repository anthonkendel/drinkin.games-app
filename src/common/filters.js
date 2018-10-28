import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export function dateInWords(date) {
  return distanceInWordsToNow(date);
}

export function getAverage(array) {
  if (array.length > 0) {
    return (array.reduce((p, c) => p + c, 0) / array.length).toFixed(1);
  }
  return 0;
}
