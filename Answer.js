var $ = function (selector) {
  var elements = [];
  var something = document.getElementsByTagName(selector)
  for(var position = 0; position < something.length; position++){
    elements.push(something[position])
  }
  return elements;
}