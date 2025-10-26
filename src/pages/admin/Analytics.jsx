import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import { 
  TrendingUp, Users, ShoppingBag, DollarSign,
  ArrowUp, ArrowDown
} from 'lucide-react';

const Analyticsconst  = ()const  => {
  // Sample data
  const salesDataconst  = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
  ];

  const categoryDataconst  = [
    { name: 'GPUs', value: 400 },
    { name: 'CPUs', value: 300 },
    { name: 'RAM', value: 200 },
    { name: 'Storage', value: 100 },
  ];

  const COLORSconst  = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const statsconst  = [
    {
      title: 'Total Revenue',
      value: '$54,763',
      change: '+12.5%',
      isPositive: true,
      icon: <DollarSign className="h-6 w-6 text-white" />,
      bgColor: 'bg-primary'
    },
    {
      title: 'Total Orders',
      value: '867',
      change: '+8.2%',
      isPositive: true,
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      bgColor: 'bg-secondary'
    },
    {
      title: 'New Customers',
      value: '156',
      change: '-3.1%',
      isPositive: false,
      icon: <Users className="h-6 w-6 text-white" />,
      bgColor: 'bg-accent'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+2.4%',
      isPositive: true,
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      bgColor: 'bg-green-500'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index)const  => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                {stat.icon}
              </div>
            </div>
            <div className={`flex items-center mt-2 ${
              stat.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.isPositive ? 
                <ArrowUp className="h-4 w-4 mr-1" /> : 
                <ArrowDown className="h-4 w-4 mr-1" />
              }
              <span className="text-sm">{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
          <LineChart width={500} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#0F76FD" 
              strokeWidth={2}
            />
          </LineChart>
        </div>

        {/* Revenue by Category */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue by Category</h2>
          <PieChart width={500} height={300}>
            <Pie
              data={categoryData}
              cx={250}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index)const  => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
          <BarChart width={500} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#0F76FD" />
          </BarChart>
        </div>

        {/* Customer Growth */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Customer Growth</h2>
          <AreaChart width={500} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="sales" 
              stroke="#0F76FD"
              fill="#0F76FD"
              fillOpacity={0.1}
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Analytics;