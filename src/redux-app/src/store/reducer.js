import { combineReducers } from "redux";
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer,
});

// import * as actions from "./actionTypes";
//
// let lastId = 0;
//
// export default function reducer(state = [], action) {
//   // switch implementation
//   switch (action.type) {
//     case actions.BUG_ADDED:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case actions.BUG_RESOLVED:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );
//     case actions.BUG_REMOVED:
//       return state.filter((bug) => bug.id !== action.payload.id);
//     default:
//       return state;
//   }

//   // if else implementation
//   if (action.type === actions.BUG_ADDED)
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   else if (action.type === actions.BUG_RESOLVED)
//     return state.map((bug) =>
//       bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//     );
//   else if (action.type === actions.BUG_REMOVED)
//     return state.filter((bug) => bug.id !== action.payload.id);
//   return state;
// }
