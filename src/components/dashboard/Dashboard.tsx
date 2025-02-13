"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import Ques1 from './Ques1';
import Ques2 from './Ques2';
import Ques3 from './Ques3';
import { DASHBOARD_LIST } from '@/utils/helper';
const DashBoard = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab") || "Question 1";
    const handleTabClick = (tab: string) => {
    const newUrl = `/dashboard?tab=${(tab)}`;
    router.push(newUrl);
  };
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };
  const renderComponent = () => {
    switch (activeTab) {
      case 'Question 1':
        return <Ques1/>;
      case 'Question 2':
        return <Ques2 />;
      case 'Question 3':
        return <Ques3/>;
      default:
        return <p className="text-white text-2xl">Select a tab</p>;
    }
  };
  return (
    <div className="flex gap-20">
      <div className="bg-blue w-[400px] h-screen pt-5 pb-10 flex flex-col justify-between">
        <div>
            <p className="text-white text-3xl leading-normal font-normal px-5 pb-20 capitalize">dashboard</p>
            <div className='flex flex-col gap-10'>
                {DASHBOARD_LIST.map((tab, i) => (
                      <div key={i} className={`cursor-pointer ${
                            activeTab === tab ? 'bg-white bg-opacity-20' : ''
                          }`}>
                        <p
                          className={`text-white text-2xl font-normal leading-normal px-5 pb-2 ${
                            activeTab === tab ? 'font-bold' : ''
                          }`}
                           onClick={() => handleTabClick(tab)}
                        >
                          {tab}
                        </p>
                      </div>
                
                ))}
            </div>
        </div>
               <div className='px-5'><button onClick={handleLogout} className='text-black bg-white border border-solid border-white py-2 px-5 rounded-lg text-base leading-normal font-semibold hover:bg-black hover:text-white transition-all ease-linear duration-300'>logout</button></div>
             
          </div>
          
      <div className='py-14'>{renderComponent()}</div>
    </div>
  );
};
export default DashBoard;