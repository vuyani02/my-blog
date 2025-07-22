import './css/topics.css'

const Topics = () => {
    const topics: string[] = [
        "Technology",
        "Design Thinking",
        "Crypto",
        "NFT",
        "Personal Growth",
        "Reading",
    ];
    return (
        <section className='topics'>
            <h3>Topics for you</h3>
            {
                topics.map((topic, i) => <button key={i} className='topics-btn'>{topic}</button>)
            }
        </section>
    )
}

export default Topics