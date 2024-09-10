import { LangButton } from "../components/button";
import ComingSoon from "../components/coming-soon-info";

export default function Home() {
  return (
    <main className="main">
      <LangButton className='relative z-50'/>
      <ComingSoon />
    </main>
  );
}
