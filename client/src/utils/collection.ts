export const getRandomItem = <T>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)];
};

export const last = <T>(arr: T[]): T => arr[arr.length - 1];
