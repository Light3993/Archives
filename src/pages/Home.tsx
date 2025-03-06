import { Hero } from '../components/home/Hero';
import { Announcements } from '../components/home/Announcements';
import { Professors } from '../components/home/Professors';
import { VideoSection } from '../components/home/VideoSection';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Announcements />
      <Professors />
      <VideoSection />
    </div>
  );
};