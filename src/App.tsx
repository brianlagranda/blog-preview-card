import BlogCard from './components/BlogCard';

function App() {
  return (
    <>
      <header className='select-none'>
        <h1 className='text-center text-3xl font-bold font-figtree mb-6 text-wrap w-64 mx-auto'>
          Blog Preview Card{' '}
          <a href='https://www.frontendmentor.io/' className='hover:text-white'>
            Frontendmentor.io
          </a>
        </h1>
      </header>
      <main>
        <BlogCard />
      </main>
      <footer>
        <p className='text-center text-xl font-bold font-figtree mt-6'>
          Coded by
          <a
            href='https://github.com/brianlagranda'
            className='hover:text-white'
          >
            Brian Lagranda
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
