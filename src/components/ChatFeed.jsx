import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chat && chats[activeChat];

    return (
        <div>
            ChatFeed
        </div>
    );
}

export default ChatFeed;