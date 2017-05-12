export interface UIMessage {
  id: number;
  text: string;
  type: UIMessageType;
}

export type UIMessageType = 'info' | 'success' | 'error';

export interface MessagingState {
  nextId: number;
  messages: UIMessage[];
}

export interface State {
  messaging: MessagingState;
}
