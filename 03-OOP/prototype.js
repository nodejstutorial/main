var Person = {
	describe: function describe() {
		return this.firstName + ' ' + this.lastName;
	}
}

jane = Object.create(Person);
jane.firstName = 'Jane';
jane.lastName = 'Doe';

console.log(jane.describe());
console.log(Object.keys(jane).toString());

var sys = require('sys');
sys.puts(sys.inspect(jane,true));