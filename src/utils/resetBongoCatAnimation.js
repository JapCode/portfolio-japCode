const resetBongoCatAnimation = (config) => {
  const pawLeftUp = config.pawLeftUp.current;
  const pawLeftDown = config.pawLeftDown.current;
  const pawRightUp = config.pawRightUp.current;
  const pawRightDown = config.pawRightDown.current;
  // const { pawLeftUp, pawLeftDown, pawRightDown, pawRightUp } = config;
  if (pawLeftUp && pawLeftDown && pawRightDown && pawRightUp) {
    pawRightUp.classList.add('active');
    pawRightDown.classList.remove('active');
    pawLeftUp.classList.add('active');
    pawLeftDown.classList.remove('active');
  }
};
export default resetBongoCatAnimation;
