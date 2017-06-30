# smd-colors

This README outlines the details of collaborating on this Ember addon.

## Installation

- `git clone https://github.com/sauce-consultants/smd-colors.git` this repository
- `cd smd-colors`
- `npm install`
- `bower install`

## Usage

Inject service into your route/component

```

colors: Ember.inject.service('smd-colors'),
```

Use the `colorFor` method to return an assigned color for you're item

```

classModifier: Ember.computed('model.name', function () {

  let value = this.get('model.name'),
    color = this.get('colors').colorFor('thing', value);

    return 'myclass--'+color;
}),
```

## Running

- `ember serve`
- Visit your app at <http://localhost:4200>.

## Running Tests

- `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
- `ember test`
- `ember test --server`

## Building

- `ember build`

For more information on using ember-cli, visit <https://ember-cli.com/>.
