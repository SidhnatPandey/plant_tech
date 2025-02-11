import CanvasGame from './CanvasGame.tsx';

const Games = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CanvasGame />
        </div>
      </section>
    </div>
  );
};

export default Games;
