declare namespace JSX {
  interface Element {}
  interface IntrinsicAttributes {
    key?: unknown;
  }
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}

declare module 'react' {
  export const StrictMode: (props: { children?: unknown }) => JSX.Element;
  export type ReactNode = unknown;
  export function useState<S>(initialState: S | (() => S)): [
    S,
    (value: S | ((previousState: S) => S)) => void,
  ];
  export interface Context<T> {
    Provider: (props: { value: T; children?: unknown }) => JSX.Element;
  }
  export function createContext<T>(defaultValue: T): Context<T>;
  export function useContext<T>(context: Context<T>): T;
  export function useEffect(effect: () => void | (() => void), dependencies?: readonly unknown[]): void;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: unknown): void;
  };
}

declare module 'react/jsx-runtime' {
  export namespace JSX {
    interface Element {}
    interface IntrinsicAttributes {
      key?: unknown;
    }
    interface IntrinsicElements {
      [elementName: string]: any;
    }
  }
  export function jsx(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export function jsxs(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export const Fragment: unknown;
}

declare module '*.css';
