var $ = function (selector) {
  var htmlSelector = new JavascriptSelector(selector)
  return htmlSelector.returnElements();
}

var JavascriptSelector = function(selector){
  this.bodyElements = document.body.children
  this.elements = []
  this.splitSelector = selector.split(/(?=\.)|(?=#)/)
}

JavascriptSelector.prototype.returnElements = function() {
  for(var position = 0; position < this.splitSelector.length; position++)
    this.forEachSelector(position)
  this.addToElementsArray()
  return this.elements
};

JavascriptSelector.prototype.forEachSelector = function(position) {
  var tempArray = []
  var element = this.splitSelector[position]
  this.checkWhatSelectorIs(element, tempArray)
};

JavascriptSelector.prototype.selectorIsClass = function(element, tempArray) {
  this.checkBodyElements(element, tempArray, this.checkAnElementsClass)
};

JavascriptSelector.prototype.selectorIsId = function(element, tempArray) {
  this.checkBodyElements(element, tempArray, this.checkAnElementsId)
};

JavascriptSelector.prototype.selectorIsTagName = function(element, tempArray) {
  this.checkBodyElements(element, tempArray, this.checkAnElementsTagName)
};

JavascriptSelector.prototype.checkAnElementsId = function(element, bodyElement) {
  return bodyElement.id === element
};

JavascriptSelector.prototype.checkAnElementsClass = function(element, bodyElement) {
  return bodyElement.className.indexOf(element) > -1
};

JavascriptSelector.prototype.checkAnElementsTagName = function(element, bodyElement) {
  return bodyElement.tagName === element.toUpperCase()
};

JavascriptSelector.prototype.checkBodyElements = function(element, tempArray, ifStatement) {
  for(var pos = 0; pos < this.bodyElements.length; pos++)
    if(ifStatement(element, this.bodyElements[pos])) tempArray.push(this.bodyElements[pos])
  this.bodyElements = tempArray;
};

JavascriptSelector.prototype.addToElementsArray = function() {
  for(var pos = 0; pos < this.bodyElements.length; pos++)
    this.elements.push(this.bodyElements[pos])
};

JavascriptSelector.prototype.checkWhatSelectorIs = function(element, tempArray) {
  if(element[0] === '.') this.selectorIsClass(element.substring(1), tempArray)
  if(element[0] === '#') this.selectorIsId(element.substring(1), tempArray)
  else this.selectorIsTagName(element, tempArray)
};