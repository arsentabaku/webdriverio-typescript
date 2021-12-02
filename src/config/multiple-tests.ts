var specs = [
  "../tests/legal-acceptance.spec.js",
  "../tests/side-navigation.spec.js",
];

for (var i = 0; i < specs.length; i++) {
  require(specs[i]);
}
