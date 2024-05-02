import HeaderBox from "@/components/header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance-box";
import Image from "next/image";

export default function Home() {
  const loggedIn = { firstName: 'Alexander' }
  return (
    <section className='no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'>
      <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll'>
        <header className='flex flex-col justify-between gap-8'>
          <HeaderBox type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions with ease' />
          <TotalBalanceBox accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1200} />
        </header>
        RecentTransactions
      </div>
      <RightSidebar user={loggedIn}
        transactions={[]}
        banks={[{}, {}]} />
    </section>
  );
}
