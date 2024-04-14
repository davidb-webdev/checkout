import SignInUserFormData from "./SignInUserFormData";

export default interface IAuthContext {
  signedIn: boolean | null;
  statusMessage: string;
  clearStatusMessage: () => void;
  handleSignIn: (userFormData: SignInUserFormData) => void;
  handleSignOut: () => void;
}
