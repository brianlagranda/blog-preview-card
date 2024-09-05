import articleIMG from '../assets/images/illustration-article.svg';
import avatarIMG from '../assets/images/image-avatar.webp';

const Card = () => {
  return (
    <article className='font-figtree text-[1vw] w-[327px] md:w-[384px] h-[501px] md:h-[522px] p-6 rounded-[20px] bg-white border border-tBase mx-auto flex flex-col gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
      <img
        src={articleIMG}
        alt='HTML & CSS foundations blog cover'
        className='h-[200px] object-cover rounded-[10px]'
      />
      <div className='flex flex-col gap-3'>
        <span className='bg-bgPrimary px-3 py-1 rounded font-black text-[12px] md:text-[14px] self-start'>
          Learning
        </span>
        <time
          dateTime='2023-12-21'
          className='text-[12px] md:text-[14px] tracking-normal leading-[150%] font-semibold'
        >
          Published 21 Dec 2023
        </time>
        <a href='#'>
          <h2 className='text-[20px] md:text-[24px] font-black text-tBase tracking-normal leading-[150%] hover:text-bgPrimary'>
            HTML & CSS foundations
          </h2>
        </a>

        <p className='text-[14px] md:text-[16px] tracking-normal leading-[150%] font-medium text-secondary'>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <footer>
        <address className='flex items-center gap-3'>
          <img src={avatarIMG} alt='Greg Hooper' className='w-8 h-8' />
          <a href='#' className='text-tBase text-[14px] font-black not-italic'>
            Greg Hooper
          </a>
        </address>
      </footer>
    </article>
  );
};

export default Card;
