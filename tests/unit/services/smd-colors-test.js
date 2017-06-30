import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:smd-colors', 'Unit | Service | smd colors', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Colors
// - pink
// - orange
// - yellow
// - green
// - blue
// - deep-purple
// - brown

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it returns the same color for equal values', function(assert) {
  let service = this.subject(),
    color;

  color = service.colorFor('animal', 'dog');
  assert.equal(color, 'pink');

  color = service.colorFor('animal', 'dog');
  assert.equal(color, 'pink');
});

test('it returns the different color for different values a', function(assert) {
  let service = this.subject(),
    color;

  color = service.colorFor('animal', 'dog');
  assert.equal(color, 'pink');

  color = service.colorFor('animal', 'cat');
  assert.equal(color, 'orange');

  color = service.colorFor('animal', 'fish');
  assert.equal(color, 'yellow');

  color = service.colorFor('animal', 'dog');
  assert.equal(color, 'pink');
});

test('it returns the different color for different values b', function(assert) {
  let service = this.subject(),
    color;

  color = service.colorFor('animal', 'dog');
  assert.equal(color, 'pink');

  color = service.colorFor('animal', 'cat');
  assert.equal(color, 'orange');

  color = service.colorFor('shape', 'square');
  assert.equal(color, 'pink');

  color = service.colorFor('shape', 'triangle');
  assert.equal(color, 'orange');
});

test('it repeats after exceeding available colors', function(assert) {
  let service = this.subject(),
    color;

  color = service.colorFor('thing', 'thing 1');
  assert.equal(color, 'pink');

  color = service.colorFor('thing', 'thing 2');
  assert.equal(color, 'orange');

  color = service.colorFor('thing', 'thing 3');
  assert.equal(color, 'yellow');

  color = service.colorFor('thing', 'thing 4');
  assert.equal(color, 'green');

  color = service.colorFor('thing', 'thing 5');
  assert.equal(color, 'blue');

  color = service.colorFor('thing', 'thing 6');
  assert.equal(color, 'deep-purple');

  color = service.colorFor('thing', 'thing 7');
  assert.equal(color, 'brown');

  color = service.colorFor('thing', 'thing 8');
  assert.equal(color, 'pink');

  color = service.colorFor('thing', 'thing 9');
  assert.equal(color, 'orange');

  color = service.colorFor('thing', 'thing 10');
  assert.equal(color, 'yellow');

  color = service.colorFor('thing', 'thing 11');
  assert.equal(color, 'green');

  color = service.colorFor('thing', 'thing 12');
  assert.equal(color, 'blue');

  color = service.colorFor('thing', 'thing 13');
  assert.equal(color, 'deep-purple');

  color = service.colorFor('thing', 'thing 14');
  assert.equal(color, 'brown');
});
