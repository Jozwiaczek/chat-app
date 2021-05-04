interface MessageBaseProps {
  isOwner: boolean;
}

interface MessageProps extends ApiMessage {
  currentNickname?: string;
}
