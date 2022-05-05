function buttonActionMenu(event, array, value, callback) {
  array.forEach((element) => {
    if (element.name === event.target.attributes.name.value) {
      if (value !== element.layer) {
        callback(element.layer);
        setTimeout(() => {
          callback(null);
        }, 500);
      }
    }
  });
}
export default buttonActionMenu;
