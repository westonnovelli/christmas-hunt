function shuffle (arr: any[]): any[] {
  for (let index = arr.length - 1; index > 0; index--) {
      const j = Math.floor(Math.random() * (index + 1));
      const x = arr[index];
      arr[index] = arr[j];
      arr[j] = x;
  }
  return arr;
}

export default shuffle;
