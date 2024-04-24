export enum ModalActionType {
  OPENED,
  CLOSED
}

export interface IModalAction {
  type: ModalActionType;
  which?: string;
}

const ModalReducer = (modal: string | null, action: IModalAction) => {
  switch (action.type) {
    case ModalActionType.OPENED: {
      const { which } = action;
      return modal === which ? null : which;
    }

    case ModalActionType.CLOSED: {
      return null;
    }

    default: {
      return modal;
    }
  }
};

export default ModalReducer;
