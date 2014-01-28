/**
 * Set up the `Person` constructor to turn an options object
 * into instance properties, like `name`, `age`, `gender`, etc.
 */
function Person () {
}

Person.prototype.walk = function () {
  if (!this.walking) {
    console.log(this.name + ' walks.');
    this.walking = true;
  }
};

Person.prototype.stop = function () {
  if (this.walking) {
    console.log(this.name + ' stops walking.');
    this.walking = false;
  }
};

/**
 * Add another prototype method
 */

/**
 * Creates some Person instances and have them walk and stop
 * and whatever other methods you've added
 *
 * var person = new Person({ name: 'Brendan Eich' }); 
 */


/*

function Developer () {
}
// `Developer` inherits from `Person`s prototype
Developer.prototype = new Person();
Developer.prototype.code = function () {
  console.log(this.name + ' is coding');
};

*/
