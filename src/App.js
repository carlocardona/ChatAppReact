import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
        
            height="100vh"
            projectID="1338d8bc-bf2e-4c0d-b73c-9808f3ce5248"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        
        />
    )
}

export default App;