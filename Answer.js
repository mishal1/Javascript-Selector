var $ = function (selector) {
  var elements = [];
  var bodyElements = document.body.children;
  var splitArray = selector.split(/(?=\.)|(?=#)/)
  for(var position = 0; position < splitArray.length; position++){
    var tempArray = []
    var element = splitArray[position]
    if(checkIfClass(element)){
      element = element.substring(1)
      for(var pos = 0; pos < bodyElements.length; pos++){
        if(bodyElements[pos].className.indexOf(element) > -1){
          tempArray.push(bodyElements[pos])
        }
      }
      bodyElements = tempArray
    } else if(checkIfId(element)){
      element = element.substring(1)
      for(var pos = 0; pos < bodyElements.length; pos++){
        if(bodyElements[pos].id === element){
          tempArray.push(bodyElements[pos])
        }
      }
      bodyElements = tempArray
    } else {
      for(var pos = 0; pos < bodyElements.length; pos++){
        if(bodyElements[pos].tagName === element.toUpperCase()){
          tempArray.push(bodyElements[pos])
        }
      }
      bodyElements = tempArray;
    }
  };

  for(var pos = 0; pos < bodyElements.length; pos++){
    elements.push(bodyElements[pos])
  }

  return elements;
}

var checkIfClass = function(element){
  return element[0] === '.'
}

var checkIfId = function(element){
  return element[0] === '#'
}