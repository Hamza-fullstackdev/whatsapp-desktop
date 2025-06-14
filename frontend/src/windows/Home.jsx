import MainSidebar from "../components/MainSidebar";
import MainWindow from "../components/MainWindow";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <MainSidebar />
      <MainWindow />
    </main>
  );
};

export default Home;
