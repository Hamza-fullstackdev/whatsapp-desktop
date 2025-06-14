import MainSidebar from "../components/MainSidebar";
import MainWindow from "../components/MainWindow";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main className='flex h-screen w-full overflow-y-auto'>
      <Sidebar />
      <MainSidebar />
      <MainWindow />
    </main>
  );
};

export default Home;
