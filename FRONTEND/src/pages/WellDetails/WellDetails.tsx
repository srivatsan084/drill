import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { HeaderNav } from './components/HeaderNav';
import { WellHeaderInfo } from './components/WellHeaderInfo';
import { FormationRiskSummary } from './components/FormationRiskSummary';
import { WellStructureView } from './components/WellStructureView';
import { HistoricalOffsetEvents } from './components/HistoricalOffsetEvents';
import { DrillingAnalyticsCharts } from './components/DrillingAnalyticsCharts';
import { OtherInformationCards } from './components/OtherInformationCards';
import { getWellDetails } from '../../services/wellDataService';
import type { WellFullDetails } from '../../types/wellData';

export const WellDetails: React.FC = () => {
  const { wellId } = useParams<{ wellId: string }>();
  const navigate = useNavigate();
  const currentWellId = wellId || 'OIL-159-F-7';

  const [wellData, setWellData] = useState<WellFullDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    getWellDetails(currentWellId)
      .then((data) => {
        if (isMounted) {
          setWellData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err?.message || 'Failed to load well data');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [currentWellId]);

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-[#F4F6F9]">
        <Sidebar activeTab="Wells" />
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-12 h-12 border-4 border-[#FDB813] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-sm font-semibold text-gray-700">Loading Well Overview ({currentWellId})...</p>
        </div>
      </div>
    );
  }

  if (error || !wellData) {
    return (
      <div className="flex h-screen w-full bg-[#F4F6F9]">
        <Sidebar activeTab="Wells" />
        <div className="flex-1 flex flex-col justify-center items-center p-6 text-center">
          <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 max-w-md">
            <h3 className="font-bold text-lg">Error Loading Data</h3>
            <p className="text-sm mt-1">{error || 'Well details not found.'}</p>
            <button
              onClick={() => navigate('/workspace')}
              className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-semibold"
            >
              Return to Workspace
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full bg-[#F4F6F9] font-average">
      {/* Fixed Sidebar */}
      <Sidebar activeTab="Wells" />

      {/* Main Scrollable Content Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Sticky Header with Back Button */}
        <HeaderNav wellId={wellData.header.wellId} />

        {/* Page Body Content */}
        <main className="p-6 md:p-8 space-y-8 max-w-7xl w-full mx-auto">
          {/* Section 1: Well Summary Header Card */}
          <WellHeaderInfo header={wellData.header} />

          {/* Section 2: Formation & Risk Summary */}
          <FormationRiskSummary data={wellData.formationRisk} />

          {/* Section 3: Well Structure 3D Diagram */}
          <WellStructureView imageSrc={wellData.wellStructureImage} />

          {/* Section 4: Historical Drilling Experiences & Offset Events */}
          <HistoricalOffsetEvents
            events={wellData.offsetEvents}
            onViewAll={() => navigate('/workspace')}
          />

          {/* Section 5: Drilling Parameter Analytics (Charts) */}
          <DrillingAnalyticsCharts analytics={wellData.analytics} />

          {/* Section 6: Other Information (Mud, Casing, Cementing, Formation Tops) */}
          <OtherInformationCards data={wellData.otherInformation} />
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 bg-white py-6 px-8 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2025 NWIS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Version 1.0.0</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Terms of Use</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WellDetails;