import characterBase from './character/base.json';

/**
 * Make base data like enum
 * @param {array} values
 */
const baseData = (values) => {
  return values.reduce((acc, data, index) => {
    return {
      ...acc,
      [index+1]: {id: index+1, ...data},
      [data.name]: {id: index+1, ...data}
    }
  }, {length: values.length, "UNKNOWN": {id: 0, name: "UNKNOWN", label: "알 수 없음"}, 0: {id: 0, name: "UNKNOWN", label: "알 수 없음"}})
}

export const character = Object.keys(characterBase).reduce((acc, value) => {
  const data = characterBase[value];
  return {
    ...acc,
    [value]: {
      name: data.name,
      data: baseData(data.data)
    }
  }
}, {});

export const equipment = {};
