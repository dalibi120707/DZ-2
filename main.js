var starbox = {
  coffee: {
    latte: 'Latte',
    capuchino: 'Capuchino',
    americano: 'Americano'
  },
  tea: {
    green: 'Green Tea',
    black: 'Black Tea'
  }
}
var value = prompt('what would you like')

if (starbox.coffee[value]===undefined) {
  if (starbox.tea[value] !== undefined) {
    console.log(starbox.tea[value]);
  } else {
    console.error('error');
  }
}else {
  console.log(starbox.coffee[value]);
}









