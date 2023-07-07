import {
  Wrapper,
  Header,
  CovidPoliticsForm,
  Heart,
  BackArrow,
} from '@/components';
import { Bike } from 'public';
import { Link } from 'react-router-dom';

const CovidPoliticsPage = () => {
  return (
    <>
      <Wrapper hidden={false}>
        <div className='bg-theme z-20 fixed left-0 w-full px-48'>
          <Header pageNumber={4} />
        </div>
        <div className='flex justify-between'>
          <div className='w-606 mt-48'>
            <p className='text-2xl'>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის.
            </p>
            <br />
            <p className='text-2xl'>
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
              ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
            <CovidPoliticsForm />
          </div>
          <div className='relative mt-48'>
            <Heart />
            <img
              className='w-703 h-703 mt-16'
              src={Bike}
              alt='person on a bike'
            />
          </div>
        </div>
        <div className='mt-20 mb-28 flex justify-center'>
          <Link to='/vaccinated'>
            <BackArrow />
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default CovidPoliticsPage;
