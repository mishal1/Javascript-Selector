var $ = function (selector) {
  var elements = [];
  checkIfContainsClassOrId(selector) ? selectorHasClassOrId(selector, elements) : selectorDoesNotContainClassOrId(selector, elements)
  return elements;
}

function findTagName(tagName){
  return document.getElementsByTagName(tagName)
}

function checkIfContainsClassOrId(selector){
  return selector.indexOf('.')!= -1 || selector.indexOf('#')!= -1
}

function addElementToArray(element, elements){
  elements.push(element)
}

function splitSelector(selector){
  return selector.split('.')
}

function selectorHasClassOrId(selector, elements){
  var split = splitSelector(selector)
  var somethingElse = findTagName(split[0])
  for(var position = 0; position < somethingElse.length; position++){
    if(somethingElse[position].className.indexOf(split[1]) != -1){
      addElementToArray(somethingElse[position], elements)
    }
  }
}

function selectorDoesNotContainClassOrId(selector, elements){
  var item = findTagName(selector)
  for(var position = 0; position < item.length; position++){
    addElementToArray(item[position], elements)
  }
}