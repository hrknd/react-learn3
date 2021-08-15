import { ADD_OPERATION_LOG, DELETE_ALL_OPRATION_LOGS } from "../actions";

const operationLogs = (state = [], action) => {
  switch (action.tyle) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAT,
      };
      return [operationLog, ...state];
    case DELETE_ALL_OPRATION_LOGS:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
