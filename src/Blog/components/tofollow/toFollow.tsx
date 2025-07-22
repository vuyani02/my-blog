import './css/tofollow.css'
import FollowUser from './FollowUser';
import type { PeopleToFollowType } from '../../Types';
import { useState } from 'react';

const ToFollow = () => {

    const [peopleToFollow, SetPeopleToFollow] = useState<PeopleToFollowType[]>([
        { name: "Alena Gouse", following: false },
        { name: "Ruben Bator", following: true },
        { name: "Aspen Stanton", following: false },
        { name: "Madelyn George", following: false },
    ]);

    const follow = (name: string) => {
        SetPeopleToFollow((prev) =>
            prev.map((user) => user.name === name? {...user, following : !user.following} : user)
            )

    }

    return (
        <section className='follow'>
            <h3>People to follow</h3>
            {
                peopleToFollow.map(({name, following}) => <FollowUser key={name}
                    name={name} 
                    following={following}
                    follow ={follow}
                />)
            }
        </section>
    )
}

export default ToFollow