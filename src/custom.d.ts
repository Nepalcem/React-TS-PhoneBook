declare module "redux-persist/integration/react" {
  import { ReactNode } from "react";
  import { PersistGateProps } from "redux-persist/integration/react";

  const PersistGate: React.ComponentClass<
    PersistGateProps & { children: ReactNode }
  >;
  export { PersistGate };
}
