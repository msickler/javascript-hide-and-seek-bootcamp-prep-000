function getFirstSelector(selector) {
return document.querySelector(selector)

}

function nestedTarget() {
  return document.querySelector( 'div#nested div.target' )
}


function increaseRankBy(n) {
var lis = document.querySelectorAll('ul.ranked-list')
  for (let i=0; i < lis.length; i++) {
    list[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    return lis
  }
}
