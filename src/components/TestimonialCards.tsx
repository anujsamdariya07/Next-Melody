'use client';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      "NextMelody's guitar course helped me finally master the chords I've been struggling with for years. The lessons are clear, concise, and easy to follow.",
    name: 'Alex Johnson',
    title: 'Aspiring Guitarist',
  },
  {
    quote:
      'The vocal training I received through NextMelody was a game-changer. My voice is stronger and more controlled than ever before.',
    name: 'Emily Carter',
    title: 'Singer-Songwriter',
  },
  {
    quote:
      "As a complete beginner, I was nervous about learning the piano. NextMelody made it simple and fun, and now I'm playing songs I love!",
    name: 'Michael Lee',
    title: 'Piano Enthusiast',
  },
  {
    quote:
      "I never thought I could produce my own music until I took the Music Production 101 course on NextMelody. Now, I'm creating tracks I'm proud of.",
    name: 'Sophie Martinez',
    title: 'Budding Music Producer',
  },
  {
    quote:
      'The songwriting masterclass taught me how to turn my thoughts into songs. NextMelody gave me the confidence to share my music with the world.',
    name: 'David Kim',
    title: 'Indie Artist',
  },
];

function TestimonialCards() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear Our Harmony: Voices Of Success</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-8/12 max-w-6xl h-96'>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='normal'
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
