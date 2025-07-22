import './css/trends.css'
import Trend from './trend';
import type { trendType } from '../../Types';

const Trends = () => {
    const trends: trendType[] = [
        {
            title: "Be the Person You Are on Vacation",
            author: "Maren Torff",
        },
        {
            title: "Hate NFTs? I have some bad news...",
            author: "Zain Levin",
        },
        {
            title: "The real impact of dark UX patterns",
            author: "Lindsey Curtis",
        },
    ];

    return (
        <section className="trends">
            <h3>Today's Top Trends</h3>
            {
                trends.map(({title, author}, index) => (
                    <Trend key={index} title={title} author={author}/>
                ))
            }
        </section>
    )
}

export default Trends