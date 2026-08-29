import React from 'react';
import type { OtherInformationData } from '../../../types/wellData';

interface OtherInformationCardsProps {
  data: OtherInformationData;
}

export const OtherInformationCards: React.FC<OtherInformationCardsProps> = ({ data }) => {
  const { mudProgram, casingProgram, cementingPractice, formationTops } = data;

  return (
    <div className="space-y-3">
      <h3 className="text-base font-bold text-gray-900">Other Information</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Mud Program */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-2xs space-y-4">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
            Mud Program
          </h4>
          <div className="space-y-3 text-xs">
            <div>
              <span className="text-gray-400 font-medium block">Weight</span>
              <p className="font-bold text-gray-900 text-sm mt-0.5">{mudProgram.weight}</p>
            </div>
            <div>
              <span className="text-gray-400 font-medium block">Type</span>
              <p className="font-semibold text-gray-900 mt-0.5">{mudProgram.type}</p>
            </div>
          </div>
        </div>

        {/* Card 2: Casing Program */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-2xs space-y-4">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
            Casing Program
          </h4>
          <div className="space-y-3 text-xs">
            <div>
              <span className="text-gray-400 font-medium block">Surface Casing</span>
              <p className="font-bold text-gray-900 text-sm mt-0.5">
                {casingProgram.surfaceCasing}
              </p>
            </div>
            <div>
              <span className="text-gray-400 font-medium block">Intermediate Casing</span>
              <p className="font-bold text-gray-900 text-sm mt-0.5">
                {casingProgram.intermediateCasing}
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Cementing Practice */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-2xs space-y-4">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
            Cementing Practice
          </h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-gray-400 font-medium block">Primary</span>
              <p className="font-semibold text-gray-900 mt-0.5">
                Lead: <span className="font-bold">{cementingPractice.primaryLead}</span>
              </p>
              <p className="font-semibold text-gray-900 mt-0.5">
                Tail: <span className="font-bold">{cementingPractice.primaryTail}</span>
              </p>
            </div>
            <div className="pt-1">
              <span className="text-gray-400 font-medium block">Top of Cement</span>
              <p className="font-semibold text-gray-900 mt-0.5">
                {cementingPractice.topOfCement}
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Formation Tops */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-2xs space-y-4">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
            Formation Tops
          </h4>
          <div className="space-y-2 text-xs">
            {formationTops.map((top, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between py-0.5 ${
                  top.isPayZone ? 'font-extrabold text-[#FDB813]' : 'text-gray-700'
                }`}
              >
                <span className={top.isPayZone ? 'text-[#FDB813] font-bold' : 'text-gray-600'}>
                  {top.name}
                </span>
                <span className={top.isPayZone ? 'text-[#FDB813] font-bold' : 'text-gray-900 font-semibold'}>
                  {top.depth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
