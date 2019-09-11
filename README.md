# Cruzhacks 2020 Website

- name test files `*.test.js`
- run tests with npm test

## assets

- storing svg in here for now, but it won't be necessary to keep them in here
- should be for static images and such

## components

- components go in here in their own folders
- deciding whether we should have subfolders within component folders

## routes

- routes will be defined in here and imported where needed

## utils

- reusable/shared functions belong here

## tests

Add the following to your test.tsx file for your component and replace **placeholder** with your component name.

```typescript
it('matches snapshot', () => {
  const placeholder = renderer.create(<Placeholder />).toJSON();
  expect(placeholder).toMatchSnapshot();
});
```

To run tests on your own, enter `npm test` from your cmd.

To update a snapshot enter `u` while running the script where the test fails, or run `jest -u`

Be careful not to update a failed snapshot test if you're not sure about why it's failing.

### svg optimizer

https://jakearchibald.github.io/svgomg/
