// eslint-disable-next-line import/prefer-default-export

/** name formatter */
export const createName = str => {
  const name = str.replace(/@.*$/, '');
  return name;
};
