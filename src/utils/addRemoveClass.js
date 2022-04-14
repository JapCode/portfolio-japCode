function addRemoveClass(config) {
  const {
    classState,
    element,
    classNameActive,
    classNameInActive,
    classNameDefault,
  } = config;
  if (classState) {
    element.classList.add(classNameActive);
    element.classList.remove(classNameInActive);
    element.classList.remove(classNameDefault);
  } else {
    if (!element.classList.contains(classNameDefault)) {
      element.classList.add(classNameInActive);
      element.classList.remove(classNameActive);
    }
  }
}
export default addRemoveClass;
