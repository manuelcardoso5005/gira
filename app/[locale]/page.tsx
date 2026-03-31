import HomeContent from './(page)/Home/page';
import {useTranslations} from 'next-intl';

export default function Home() {

  return (
    <div className="mx-auto max-w-screen-2xl">
      <HomeContent />
    </div>
  );
}