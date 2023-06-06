import classes from './StartPage.module.css';
import { Logo } from '@/components/icons';

const StartPage = () => {
  return (
    <div
      className={`h-screen flex items-center justify-center flex-col  ${classes.container}`}
    >
      <Logo classes='absolute top-343' />
      <div className=' overflow-hidden'>
        <h1
          className={`text-center font-extrabold text-3xl overflow-hidden opacity-0 hover:cursor-pointer text-black ${classes.heading}`}
        >
          კითხვარის <br />
          დაწყება
        </h1>
      </div>
    </div>
  );
};

export default StartPage;
