import Counter from "../counter";
export default function ComingSoon() {
  return (
    <section className="">
      <img src="/src/assets/logo.png" className="w-52 m-auto mt-5 relative z-20" alt="logo" />
      <div className="content text-center relative z-20">
        <h2 className="text-white text-5xl uppercase font-[200] mt-5 tracking-[3px]">{`We're launching our`}</h2>
        <h4 className="text-white font-bold text-4xl uppercase mt-5 tracking-[3px]">
          new Website
        </h4>
        <p className="w-[65%] text-[25px] m-auto text-white font-[500] mt-5">
          {`We're coming soon! Awesome template to present your future product or service.
          We're working hard to give you the best experience!`}
        </p>
        <div className="counter mt-5">
          <Counter targetDate="2024-10-11T00:00:00" />
        </div>
      </div>
    </section>
  );
}
