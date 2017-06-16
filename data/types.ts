export type UIMessage = {
  id: number;
  text: string;
  type: UIMessageType;
};

export type UIMessageType = 'info' | 'success' | 'error';

export type MessagingState = {
  lastMessage: number;
  messages: UIMessage[];
};

export type State = {
  messaging: MessagingState;
};
