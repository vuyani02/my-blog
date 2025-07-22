import type { trendType } from '../../Types'
import './css/trend.css'

const Trend = ({title, author}: trendType) => {
    return (
        <div className='trend'>
            <h4>{title}</h4>
            <p className='trend-p'>by {author}</p>
        </div>
    )
}

export default Trend