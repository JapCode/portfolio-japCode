// import { useRef } from 'react';

function bongoCatAnimation(config, ref) {
  const bongoCatInterval = ref;
  const pawLeftUp = config.pawLeftUp.current;
  const pawLeftDown = config.pawLeftDown.current;
  const pawRightUp = config.pawRightUp.current;
  const pawRightDown = config.pawRightDown.current;
  bongoCatInterval.current = setInterval(() => {
    if ((pawLeftUp, pawLeftDown, pawRightDown, pawRightUp)) {
      if (pawLeftUp.classList.contains('active')) {
        pawLeftUp.classList.remove('active');
        pawLeftDown.classList.add('active');
        pawRightUp.classList.add('active');
        pawRightDown.classList.remove('active');
      } else {
        pawLeftUp.classList.add('active');
        pawLeftDown.classList.remove('active');
        pawRightDown.classList.add('active');
        pawRightUp.classList.remove('active');
      }
    } else {
      throw new Error('Missing parameters');
    }
  }, 300);
}
export default bongoCatAnimation;
