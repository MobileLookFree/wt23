function HashTable() {

  this.table = new Array(23);
  this.hash = hash;
  this.chains = chains;
  this.put = put;
  this.get = get;
}

function put(key, data) {

  var pos = this.hash(key);
  var index = 0;
  if (this.table[pos][index] == undefined) {
    this.table[pos][index + 1] = data;
    ++index;
  }

  else {
    while (this.table[pos][index] != undefined) {
      ++index;
    }
    this.table[pos][index] = data;
  }
}

function get(key) {

  return this.table[this.hash(key)];
}

function hash(string) {

  const number = 59;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += number * total + string.charCodeAt(i);
  }

  total = total % this.table.length;

  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
}

function chains() {

  for (var i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}

//Заполнение
function testinput() {
  var names = ["David", "Lenni", "Donnie", "Raymond", "Lenni", "Mike", "Clayton", "Danny", "Jonathan"];

  var hTable = new HashTable();
  hTable.chains();

  for (var key in names) {
    hTable.put(key, names[key]);
    console.log(hTable.get(key));
  }
  console.log(hTable);

  //Тесты корректности работы 
  function testcase() {

    console.log('Ключ для David: ', hTable.hash('David'));

    console.log('David'.charCodeAt(0));
    console.log('David'.charCodeAt(1));
    console.log('David'.charCodeAt(2));
    console.log('David'.charCodeAt(3));
    console.log('David'.charCodeAt(4));
    console.log(String.fromCharCode(68, 97, 118, 105, 100));

    function testHash(string) {

      const number = 59;
      var total = 0;
      for (var i = 0; i < 'David'.length; ++i) {
        total += number * total + 'David'.charCodeAt(i);
      }

      total = total % 23;

      if (total < 0) {
        total += 23 - 1;
      }
      return parseInt(total);
    }

    console.log('Проверка ключа для David: ', testHash('David'));

    if (hTable.hash('David') === testHash('David')) {
      console.log('Совпадают'); //совпадают
    }
    else
      console.log('Не совпадают');

  }

  testcase();

}

testinput();



