import "./style.css";
import Counter from "../counter";
const ComingSoon = () => {
  const lang = localStorage.getItem('lang')
  return (
    <div className={`${lang == 'ar' && 'font-[cairo]'} d-flex flex-column`}>
      <header className="relative z-50 hidden">
        <div className="container">
          <nav className="navbar navbar-dark bg-transparent md:flex items-center justify-between">
            <div className="navbar-brand my-auto" href="#"></div>
            <div className="info flex flex-col md:flex-row">
              <span className="navbar-text border-0 md:border-r-[1px]">
                978-130-5444
              </span>
              <span className="navbar-text d-none d-sm-inline-block">
                jerald_glover@glennie.tv
              </span>
            </div>
          </nav>
        </div>
      </header>
      {/* <div className="overlay bg-[#0000006b] absolute top-0 left-0 w-full h-full"></div> */}
      <main className="my-auto relative z-50 text-white text-center pt-20">
        <img
          src="/src/assets/logo.png"
          className="w-52 !h-52 mx-auto mb-2
          "
          alt="logo"
        />
        <div className={`${lang == 'ar' && 'font-[cairo]'} container`}>
          <h2 className="mb-5 text-4xl md:text-7xl font-[200] uppercase">{`${lang == 'en' ?  `We're launching our`: `نحن علي وشك إطلاق`}`}</h2>
          <h2 className="mb-5 text-3xl md:text-4xl font-bold uppercase">{`${lang == 'en' ?  `new website`: `الموقع الإلكتروني الخاص بنا`}`}</h2>
          <p className="page-description mx-auto !mb-6 text-center">
            {`${lang == 'en' ?  `Exciting things are on the way! Stay tuned for something amazing soon!`: `نحن بصدد إطلاق موقعنا الجديد! أشياء مثيرة في الطريق، ترقبوا شيئاً رائعاً قريباً!`}`}
          </p>
        </div>
        <Counter targetDate="2024-10-10T00:00:00" />
      </main>
    </div>
  );
};

export default ComingSoon;
