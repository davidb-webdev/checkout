// import User from "../models/User";
// import { signIn } from "../services/authServices";

// export enum AuthActionType {
//   REGISTERED,
//   SIGNEDIN,
//   SIGNEDOUT,
//   AUTHORIZED
// }

// export interface IAuthAction {
//   type: AuthActionType;
//   payload: string;
// }

// const AuthReducer = (user: null, action: IAuthAction) => {
//   switch (action.type) {
//     case AuthActionType.REGISTERED: {
//       break;
//     }
//     case AuthActionType.SIGNEDIN: {
//       let userData;
//       try {
//         userData = await signIn(action.payload);
//       } catch (error) {
//         console.log(error);
//         return user;
//       }
//       return new User(userData.email, userData.password);
//     }
//     case AuthActionType.SIGNEDOUT: {
//       break;
//     }
//     case AuthActionType.AUTHORIZED: {
//       break;
//     }
//     default: {
//       return user;
//     }
//   }
// };

// export default AuthReducer;
