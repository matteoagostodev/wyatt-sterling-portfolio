
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line
} from 'recharts';
import { TrendingUp, Link, Globe, Search } from 'lucide-react';

const keywordData = [
  { keyword: 'SEO Specialist', rankImprovement: 12, volume: 5400 },
  { keyword: 'SEO Services', rankImprovement: 8, volume: 12000 },
  { keyword: 'SEO Agency', rankImprovement: 15, volume: 8200 },
  { keyword: 'SEO Expert', rankImprovement: 7, volume: 4800 },
  { keyword: 'SEO Optimization', rankImprovement: 10, volume: 3700 },
];

const trafficData = [
  { month: 'Jan', organic: 2400, paid: 800 },
  { month: 'Feb', organic: 2800, paid: 700 },
  { month: 'Mar', organic: 3200, paid: 900 },
  { month: 'Apr', organic: 3800, paid: 850 },
  { month: 'May', organic: 4200, paid: 750 },
  { month: 'Jun', organic: 4800, paid: 700 },
];

const conversionData = [
  { month: 'Jan', rate: 2.1 },
  { month: 'Feb', rate: 2.3 },
  { month: 'Mar', rate: 2.5 },
  { month: 'Apr', rate: 2.9 },
  { month: 'May', rate: 3.2 },
  { month: 'Jun', rate: 3.8 },
];

const RankingMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="seo-stat-card col-span-1">
        <div className="seo-stat-card-header bg-seo-blue">
          <h3 className="font-semibold">Organic Traffic</h3>
          <Globe size={20} />
        </div>
        <div className="seo-stat-card-body">
          <div className="seo-stat-card-value">14,860</div>
          <div className="seo-stat-card-label">Monthly Visitors</div>
          <div className="text-seo-green text-sm mt-2 font-medium">↑ 23% growth</div>
        </div>
      </div>
      
      <div className="seo-stat-card col-span-1">
        <div className="seo-stat-card-header bg-seo-purple">
          <h3 className="font-semibold">Keyword Rankings</h3>
          <Search size={20} />
        </div>
        <div className="seo-stat-card-body">
          <div className="seo-stat-card-value">158</div>
          <div className="seo-stat-card-label">Top 10 Keywords</div>
          <div className="text-seo-green text-sm mt-2 font-medium">↑ 15 new this month</div>
        </div>
      </div>
      
      <div className="seo-stat-card col-span-1">
        <div className="seo-stat-card-header bg-seo-green">
          <h3 className="font-semibold">Backlinks</h3>
          <Link size={20} />
        </div>
        <div className="seo-stat-card-body">
          <div className="seo-stat-card-value">1,243</div>
          <div className="seo-stat-card-label">Quality Backlinks</div>
          <div className="text-seo-green text-sm mt-2 font-medium">↑ 87 new this month</div>
        </div>
      </div>
      
      <div className="seo-stat-card col-span-1">
        <div className="seo-stat-card-header bg-seo-orange">
          <h3 className="font-semibold">Conversion Rate</h3>
          <TrendingUp size={20} />
        </div>
        <div className="seo-stat-card-body">
          <div className="seo-stat-card-value">3.8%</div>
          <div className="seo-stat-card-label">From Organic Traffic</div>
          <div className="text-seo-green text-sm mt-2 font-medium">↑ 0.7% improvement</div>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 analytics-card">
        <h3 className="text-lg font-semibold mb-4">Keyword Ranking Improvements</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={keywordData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="keyword" angle={-45} textAnchor="end" tick={{ fontSize: 12 }} />
              <YAxis label={{ value: 'Rank Improvement', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
                        <p className="font-medium">{payload[0].payload.keyword}</p>
                        <p className="text-seo-green">
                          +{payload[0].value} position improvement
                        </p>
                        <p className="text-gray-500 text-sm">
                          Search volume: {payload[0].payload.volume}/mo
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar 
                dataKey="rankImprovement" 
                fill="#10b981" 
                animationDuration={1500} 
                className="animate-fade-in"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 analytics-card">
        <h3 className="text-lg font-semibold mb-4">Organic vs Paid Traffic</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trafficData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Visitors', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
                        <p className="font-medium">{label}</p>
                        <div className="flex gap-4">
                          <p>
                            <span className="inline-block w-3 h-3 bg-seo-blue rounded-full mr-2"></span>
                            Organic: {payload[0].value}
                          </p>
                          <p>
                            <span className="inline-block w-3 h-3 bg-seo-orange rounded-full mr-2"></span>
                            Paid: {payload[1].value}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="organic" 
                stroke="#2563eb" 
                strokeWidth={3} 
                dot={{ stroke: '#2563eb', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, fill: '#2563eb' }}
              />
              <Line 
                type="monotone" 
                dataKey="paid" 
                stroke="#f59e0b" 
                strokeWidth={3} 
                dot={{ stroke: '#f59e0b', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, fill: '#f59e0b' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 lg:col-span-4 analytics-card">
        <h3 className="text-lg font-semibold mb-4">Conversion Rate Optimization</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={conversionData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis 
                label={{ value: 'Conversion Rate (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} 
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
                        <p className="font-medium">{label}</p>
                        <p>
                          <span className="inline-block w-3 h-3 bg-seo-purple rounded-full mr-2"></span>
                          Conversion Rate: {payload[0].value}%
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke="#8b5cf6" 
                strokeWidth={3} 
                dot={{ stroke: '#8b5cf6', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, fill: '#8b5cf6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RankingMetrics;
