// jQuery allows us to query the DOM for elements
console.log('jQuery query:', $('a'));

// We can also just use JavaScript
console.log(document.getElementsByTagName('a'));

document.getElementsByTagName('a')[0].addEventListener('click', function (e) {
  console.log('Normal JS event', e);
});

// Or use events with jQuery
$('a').click(function (e) {
  console.log('jQuery event', e);
});
