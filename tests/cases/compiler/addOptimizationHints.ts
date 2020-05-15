// @target: ES2015
// @experimentalDecorators: true
// @noemithelpers: true
// @addOptimizationHints: true
class HasNoStatics {
  value: unknown;
  method() {}
}

class HasStatic {
  static value = 0;
  static someMethod() {}

  method() {}
}

@decorate
class HasDecorator {
  method() {}
}
