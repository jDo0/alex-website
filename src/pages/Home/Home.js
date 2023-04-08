// styles
import './Home.css'

// components
import NewsStories from '../../components/NewsStories';

export default function Home() {
  return (
    <div className="home__container">
        <div>Home</div>
        <NewsStories />
    </div>
  )
}