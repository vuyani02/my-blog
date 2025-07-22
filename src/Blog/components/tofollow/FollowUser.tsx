import { FaUserCircle } from "react-icons/fa"
import type { toFollow } from "../../Types"
import "./css/followuser.css"

const FollowUser = ({name, following, follow}: toFollow) => {
    
    const background = following ? 'black' : '';
    const color = following ? 'white' : '';

    return (
        <div className="user-name">
            <div className="name-icon">
                <FaUserCircle className="f-icon"/>
                <span className="name">{name}</span>
            </div>
            <button onClick={() => {follow(name);}} style={{background:background, color:color}} className="following-btn">{following ? 'Following' : 'Follow'}</button>
        </div>
    )
}

export default FollowUser