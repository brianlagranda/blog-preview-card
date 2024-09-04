import articleIMG from '../assets/images/illustration-article.svg';
import avatarIMG from '../assets/images/image-avatar.webp';

const Card = () => {
  return (
    <article className='font-figtree w-[327px] p-6 rounded-[20px] bg-white border border-tBase mx-auto flex flex-col gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
      <img
        src={articleIMG}
        alt='HTML & CSS foundations blog cover'
        className='h-[200px] object-cover rounded-[10px]'
      />
      <div className='flex flex-col gap-3'>
        <span className='bg-bgPrimary px-3 py-[5px] rounded font-extrabold text-xs self-start'>
          Learning
        </span>
        <time
          dateTime='2023-12-21'
          className='text-[12px] tracking-normal leading-[150%] self-start font-semibold'
        >
          Published 21 Dec 2023
        </time>
        <h2 className='text-[20px] font-black text-tBase tracking-normal leading-[150%] '>
          HTML & CSS foundations
        </h2>
        <p className='text-sm tracking-normal leading-[150%] font-medium text-secondary'>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <footer>
        <address className='flex items-center gap-3'>
          <img src={avatarIMG} alt='Greg Hooper' className='w-8 h-8' />
          <a href='#' className='text-tBase text-sm font-black not-italic'>
            Greg Hooper
          </a>
        </address>
      </footer>
    </article>
  );
};

export default Card;
