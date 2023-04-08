// styles
import './News.css'

// components
import NewsStories from '../../components/NewsStories';

export default function News() {
  return (
    <div className="news__container">
        <div>Here you will find the latest news for Alex's business</div>
        <NewsStories />
    </div>
  )
}