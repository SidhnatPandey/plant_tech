import CanvasGame from './CanvasGame.tsx';
import Whiteboard from './WhiteBoard.tsx';

const Games = () => {
  return (
    // <div className="min-h-screen pt-16">
    //   <section className="py-20 bg-gray-900 text-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <CanvasGame />
    //     </div>
    //   </section>
    // </div>
    <div className="min-h-screen pt-16" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Whiteboard />
    </div>
  );
};

export default Games;
