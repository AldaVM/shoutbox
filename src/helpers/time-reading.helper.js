module.exports = (paragraph) => {
  const p = paragraph.trim().length;

  return p >= 200 ? Math.floor(p / 200) : 1;
};
