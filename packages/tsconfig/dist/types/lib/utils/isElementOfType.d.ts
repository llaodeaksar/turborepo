/// <reference types="react" />
/**
 * Returns true if the element is of type P, returns false otherwise
 * @param {any} element
 * @param {React.ComponentType<P>} ComponentType
 * @returns {boolean}
 */
export declare function isElementOfType<P = {}>(element: unknown, ComponentType: React.ComponentType<P>): element is React.ReactElement<P>;
//# sourceMappingURL=isElementOfType.d.ts.map