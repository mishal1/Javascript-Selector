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
  return selector.split(/\.|#/)
}

function selectorHasClassOrId(selector, elements){
  var split = splitSelector(selector)
  if(selector.indexOf('.') != -1 && selector.indexOf('#') != -1){
    var items= selector.split(/(?=\.)|(?=#)/)
    if(items[1].indexOf('#') != -1){
      var somethingElse = findTagName(split[0])
      for(var position = 0; position < somethingElse.length; position++){
        if(checkElementContainsAnId && somethingElse[position].className.indexOf(split[2]) != -1)
          addElementToArray(somethingElse[position], elements)
      }
    } else {
      var somethingElse = findTagName(split[0])
      for(var position = 0; position < somethingElse.length; position++){
        if(checkElementContainsAClass && somethingElse[position].id.indexOf(split[2]) != -1)
          addElementToArray(somethingElse[position], elements)
      }
    }
  } else if(selector.indexOf('.') === -1){
    selectorContainsAnId(elements, split)
  } else {
    selectorContainsAClass(elements, split)
  }
}

function selectorDoesNotContainClassOrId(selector, elements){
  var item = findTagName(selector)
  iterateThroughResults(item, elements)
}

function iterateThroughResults(item, elements){
  for(var position = 0; position < item.length; position++) 
    addElementToArray(item[position], elements)
}

function checkElementContainsAClass(){
  return somethingElse[position].className.indexOf(split[1]) != -1
}

function selectorContainsAClass(elements, split){
  if(split.indexOf('') === -1){
    thing(checkElementContainsAClass, split, elements)
  } else {
    var other = document.getElementsByClassName(split[1])
    iterateThroughResults(other, elements)
  }
}

function selectorContainsAnId(elements, split){
  if(split.indexOf('') === -1){
    thing(checkElementContainsAnId, split, elements)
  } else {
    var other = document.getElementById(split[1])
    addElementToArray(other, elements)
  }
}

function thing(checkElement, split, elements){
  var somethingElse = findTagName(split[0])
  for(var position = 0; position < somethingElse.length; position++){
    if(checkElement)
      addElementToArray(somethingElse[position], elements)
  }
}

function checkElementContainsAnId(){
  return somethingElse[position].id.indexOf(split[1]) != -1
}