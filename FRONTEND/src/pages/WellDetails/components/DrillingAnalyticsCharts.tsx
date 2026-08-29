import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import type { DrillingAnalyticsData } from '../../../types/wellData';

interface DrillingAnalyticsChartsProps {
  analytics: DrillingAnalyticsData;
}

export const DrillingAnalyticsCharts: React.FC<DrillingAnalyticsChartsProps> = ({
  analytics,
}) => {
  const [compareOption, setCompareOption] = useState('3 Offset Wells');

  // Vibrant, distinctive colors for wells matching image
  const wellColors = {
    'OIL-159-F-7': '#FDB813', // Yellow (Current Well)
    'OIL-159-F-4': '#EF4444', // Red
    'OIL-159-F-5': '#10B981', // Green
    'OIL-159-F-6': '#3B82F6', // Blue
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-2xs space-y-6">
      {/* Analytics Header & Comparison Select */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-base font-bold text-gray-900">Drilling Parameter Analytics</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Comparative analysis with offset wells
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-600">Compare with:</span>
          <select
            value={compareOption}
            onChange={(e) => setCompareOption(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-800 text-xs rounded-lg px-3 py-1.5 font-semibold focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
          >
            <option value="3 Offset Wells">3 Offset Wells</option>
            <option value="5 Offset Wells">5 Offset Wells</option>
            <option value="All Field Wells">All Field Wells</option>
          </select>
        </div>
      </div>

      {/* 2x2 Grid of Drilling Analytics Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart 1: MD vs TVD */}
        <div className="bg-gray-50/70 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-gray-900">MD vs TVD</h4>
            <span className="text-[10px] text-gray-500 font-medium">TVD (m) vs MD (m)</span>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.mdVsTvd} margin={{ top: 5, right: 15, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="md" tick={{ fontSize: 10 }} label={{ value: 'MD (m)', position: 'insideBottom', offset: -4, fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} label={{ value: 'TVD (m)', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '6px' }} />
                <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '4px' }} />
                <Line type="monotone" dataKey="OIL-159-F-7" stroke={wellColors['OIL-159-F-7']} strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-4" stroke={wellColors['OIL-159-F-4']} strokeWidth={1.8} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-5" stroke={wellColors['OIL-159-F-5']} strokeWidth={1.8} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-6" stroke={wellColors['OIL-159-F-6']} strokeWidth={1.8} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: TVD vs Rate of Turn */}
        <div className="bg-gray-50/70 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-gray-900">TVD vs Rate of Turn</h4>
            <span className="text-[10px] text-gray-500 font-medium">Rate of Turn (°/m)</span>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.rateOfTurn} margin={{ top: 5, right: 15, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="tvd" tick={{ fontSize: 10 }} label={{ value: 'TVD (m)', position: 'insideBottom', offset: -4, fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '6px' }} />
                <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '4px' }} />
                <Line type="monotone" dataKey="OIL-159-F-4" stroke={wellColors['OIL-159-F-4']} strokeWidth={1.8} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-5" stroke={wellColors['OIL-159-F-5']} strokeWidth={1.8} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-6" stroke={wellColors['OIL-159-F-6']} strokeWidth={1.8} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Inclination vs Azimuth */}
        <div className="bg-gray-50/70 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-gray-900">Inclination vs Azimuth</h4>
            <span className="text-[10px] text-gray-500 font-medium">Azimuth (°) vs Inclination (°)</span>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.inclinationAzimuth} margin={{ top: 5, right: 15, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="inclination" tick={{ fontSize: 10 }} label={{ value: 'Inclination (°)', position: 'insideBottom', offset: -4, fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} label={{ value: 'Azimuth (°)', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '6px' }} />
                <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '4px' }} />
                <Line type="monotone" dataKey="OIL-159-F-4" stroke={wellColors['OIL-159-F-4']} strokeWidth={1.8} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-5" stroke={wellColors['OIL-159-F-5']} strokeWidth={1.8} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-6" stroke={wellColors['OIL-159-F-6']} strokeWidth={1.8} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: TVD vs Rate of Build */}
        <div className="bg-gray-50/70 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-gray-900">TVD vs Rate of Build</h4>
            <span className="text-[10px] text-gray-500 font-medium">Rate of Build (°/m)</span>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.rateOfBuild} margin={{ top: 5, right: 15, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="tvd" tick={{ fontSize: 10 }} label={{ value: 'TVD (m)', position: 'insideBottom', offset: -4, fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '6px' }} />
                <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '4px' }} />
                <Line type="monotone" dataKey="OIL-159-F-4" stroke={wellColors['OIL-159-F-4']} strokeWidth={1.8} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-5" stroke={wellColors['OIL-159-F-5']} strokeWidth={1.8} dot={false} />
                <Line type="monotone" dataKey="OIL-159-F-6" stroke={wellColors['OIL-159-F-6']} strokeWidth={1.8} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
