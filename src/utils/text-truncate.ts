const textTruncate = (str: string, length = 38, ending = '...'): string => {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  return str;
};
export default textTruncate;
