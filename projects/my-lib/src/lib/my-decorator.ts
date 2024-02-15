export function MyDecorator<T extends { new(...args: any[]): {} }>(originalConstructor: T) {
  // Return a new constructor function
  const newConstructor = class extends originalConstructor {
    // You can modify or extend the constructor here
    constructor(...args: any[]) {
      console.log("new constructor");
      super(...args);
    }
  };

  // copying static methods
  Object.entries(Object.getOwnPropertyDescriptors(originalConstructor))
    .filter(([, descriptor]) => descriptor.writable !== false)
    .forEach(([propName]) => {
      const propertyD = Object.getOwnPropertyDescriptor(originalConstructor, propName);
      if (propertyD) {
        Object.defineProperty(
          newConstructor,
          propName,
          propertyD
        );
      }
    });

  return newConstructor;
}
