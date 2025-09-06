import MostOrderedChart from '@/components/MostOrderedChart';

const AdminPage = () => {
  return (
    <div className="bg-background min-h-screen text-on-background">
      <header className="bg-surface p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-serif font-bold text-on-surface">BistroFlow Admin Dashboard</h1>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 gap-8">
          <MostOrderedChart />
          {/* Other charts and stats will go here */}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;