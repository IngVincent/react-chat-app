import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import Chats from "../components/Chats";


const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />

            </div>
        </div>
    );
}
export default Home