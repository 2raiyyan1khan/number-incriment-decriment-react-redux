import * as actionType from "./ActionType";

export const incrimentCounter = () => ({
  type: actionType.INCRIMENT,
});
export const decrimentCounter = () => ({
  type: actionType.DECRIMENT,
});
