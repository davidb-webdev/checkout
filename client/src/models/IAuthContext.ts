import UserFormData from "./UserFormData";

export default interface IAuthContext {
  signedIn: boolean | null;
  statusMessage: string;
  clearStatusMessage: () => void;
  handleSignIn: (userFormData: UserFormData) => void;
  handleSignOut: () => void;
}
