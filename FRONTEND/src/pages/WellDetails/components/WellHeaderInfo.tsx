import React, { useState } from 'react';
import { Star } from 'lucide-react';
import type { WellHeaderData } from '../../../types/wellData';

interface WellHeaderInfoProps {
  header: WellHeaderData;
}

export const WellHeaderInfo: React.FC<WellHeaderInfoProps> = ({ header }) => {
  const [isFav, setIsFav] = useState(header.isFavorite ?? true);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-2xs space-y-6">
      {/* Top Main Details Row */}
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-gray-100 pb-5">
        {/* Well ID & Star */}
        <div className="flex items-center gap-3">
          <div>
            <span className="text-xs text-gray-500 font-medium block">Well ID</span>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                {header.wellId}
              </h2>
              <button
                onClick={() => setIsFav(!isFav)}
                className="text-gray-400 hover:text-amber-500 transition-colors p-1"
                title={isFav ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Star
                  className={`w-4 h-4 ${
                    isFav ? 'fill-amber-400 text-amber-400' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Status */}
        <div>
          <span className="text-xs text-gray-500 font-medium block">Status</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-900">{header.status}</span>
          </div>
        </div>

        {/* MD */}
        <div>
          <span className="text-xs text-gray-500 font-medium block">MD</span>
          <p className="text-lg font-bold text-gray-900 mt-0.5">{header.measuredDepth}</p>
        </div>

        {/* TVD */}
        <div>
          <span className="text-xs text-gray-500 font-medium block">TVD</span>
          <p className="text-lg font-bold text-gray-900 mt-0.5">{header.trueVerticalDepth}</p>
        </div>

        {/* Last Updated */}
        <div>
          <span className="text-xs text-gray-500 font-medium block">Last Updated</span>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">{header.lastUpdated}</p>
        </div>
      </div>

      {/* Secondary Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-1">
        <div>
          <span className="text-xs text-gray-400 font-medium block">Location</span>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">{header.location}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-medium block">Rig</span>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">{header.rig}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-medium block">Operator</span>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">{header.operator}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-medium block">Spud Date</span>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">{header.spudDate}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-medium block">Objective</span>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">{header.objective}</p>
        </div>
      </div>
    </div>
  );
};
