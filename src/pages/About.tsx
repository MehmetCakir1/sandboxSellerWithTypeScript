import React from 'react'

const About = () => {
  return (
    <main className='container m-auto flex flex-col items-center justify-center max-w-2xl pt-9 pb-7'>
      <img src="https://picsum.photos/900/400" alt="picsum" className='w-[150px] h-[150px] object-cover rounded-full border border-[5px] border-yellow-400' />
      <h1 className='text-3xl font-bold py-3'>About SandBox</h1>
      <p className='indent-3'>A gentleman was walking through an elephant camp, and he spotted that the elephants weren’t being kept in cages or held by the use of chains.All that was holding them back from escaping the camp, was a small piece of rope tied to one of their legs.
    As the man gazed upon the elephants, he was completely confused as to why the elephants didn’t just use their strength to break the rope and escape the camp. They could easily have done so, but instead, they didn’t try to at all.Curious and wanting to know the answer, he asked a trainer nearby why the elephants were just standing there and never tried to escape.The trainer replied;
    “when they are very young and much smaller we use the same size rope to tie them and, at that age, it’s enough to hold them. As they grow up, they are conditioned to believe they cannot break away. They believe the rope can still hold them, so they never try to break free.”</p>
    </main>
  )
}

export default About