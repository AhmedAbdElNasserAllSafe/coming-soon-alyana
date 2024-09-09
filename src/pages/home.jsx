import ComingSoon from "../components/coming-soon-info";

export default function Home() {
  return (
    <main className="main md:flex items-center justify-center min-h-screen">
      <img src="/src/assets/ComingSoonT.gif" className="absolute w-full h-full" alt="" />
      <ComingSoon />
    </main>
  );
}
