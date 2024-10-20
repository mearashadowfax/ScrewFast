import { generateSampleChats } from "../../utils/mockDataUtils";
import InboxItem from "./components/InboxItem";


const Inbox = () => {
    return (
        <div className=" space-y-4">
            <h1 className="text-4xl font-thin text-default-900">Inbox</h1>
            <div className="space-y-3">
                {generateSampleChats(15).map((chat) => (
                    <InboxItem key={chat.id} chat={chat} />
                ))}
            </div>
        </div>

    )
}

export default Inbox;