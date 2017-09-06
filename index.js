function getFirstSelector(selector) {
return document.querySelector(selector)

}

function nestedTarget() {
  return document.querySelector( 'div#nested div.target' )
}

function increaseRankBy(n) {
  return  parseInt(document.querySelectorAll('ul.ranked-list')+ 'n')
}
function increaseRankBy(n) {
  lis = document.querySelectorAll('ul.ranked-list')
  for (let i=0; i < lis.length; i++) {
    list[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    return lis
  }
}