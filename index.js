function getFirstSelector(selector) {
return document.querySelector(selector)

}

function nestedTarget() {
  return document.querySelector( 'div#nested div.target' )
}

function increaseRankBy(n) {
  return  parseInt(document.querySelectorAll('ul.ranked-list'))+ 'n'
}