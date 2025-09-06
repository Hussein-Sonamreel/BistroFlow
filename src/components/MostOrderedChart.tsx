import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { mostOrderedData } from '@/data/adminData';

const MostOrderedChart = () => {
  return (
    <div className="bg-surface p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-serif font-bold text-on-surface mb-4">Most Ordered Dishes</h3>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={mostOrderedData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" stroke="#E0E0E0" />
            <YAxis stroke="#E0E0E0" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1E1E',
                borderColor: 'var(--color-primary)',
              }}
            />
            <Bar dataKey="orders" fill="var(--color-primary)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MostOrderedChart;