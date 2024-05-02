import Image from "next/image";

export default function Home() {
  return (
    <section className='no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'>
      <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll'>
        <header className='flex flex-col justify-between gap-8'>
          HeaderBox
          TotalBalanceBox
        </header>
        RecentTransactions
      </div>
      RightSidebar
    </section>
  );
}
