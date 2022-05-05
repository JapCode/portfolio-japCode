function switchTransition(element, intervalRef, time) {
  const interval = intervalRef;
  if (element.current !== null) {
    interval.current = setInterval(() => {
      for (let i = 0; i < element.current.children.length; i += 1) {
        if (
          element.current.children[i].classList.contains(
            'switchTranslate--active',
          )
        ) {
          element.current.children[i].classList.remove(
            'switchTranslate--active',
          );
        } else {
          element.current.children[i].classList.add('switchTranslate--active');
        }
      }
    }, time);
  }
}
export default switchTransition;
