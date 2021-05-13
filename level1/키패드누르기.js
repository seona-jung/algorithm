function solution(numbers, hand) {
  const handObj = {
    left: '*',
    right: '#',
    hand: hand,
    handShort: hand === 'left' ? 'L' : 'R',
  };

  const location = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let str = '';

  numbers.forEach((number) => {
    if ([1, 4, 7].includes(number)) {
      str += 'L';
      handObj.left = number;
    } else if ([3, 6, 9].includes(number)) {
      str += 'R';
      handObj.right = number;
    } else {
      let locationX = location[number][0];
      let locationY = location[number][1];
      let leftX = location[handObj.left][0];
      let leftY = location[handObj.left][1];
      let rightX = location[handObj.right][0];
      let rightY = location[handObj.right][1];

      if (
        Math.abs(locationX - leftX) + Math.abs(locationY - leftY) <
        Math.abs(locationX - rightX) + Math.abs(locationY - rightY)
      ) {
        str += 'L';
        handObj.left = number;
      } else if (
        Math.abs(locationX - leftX) + Math.abs(locationY - leftY) >
        Math.abs(locationX - rightX) + Math.abs(locationY - rightY)
      ) {
        str += 'R';
        handObj.right = number;
      } else {
        str += handObj.handShort;
        handObj[handObj.hand] = number;
      }
    }
  });

  return str;
}
