import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
        
            height="100vh"
            projectID="1338d8bc-bf2e-4c0d-b73c-9808f3ce5248"
            userName="admin"
            userSecret="root"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        
        />
    )
}

export default App;