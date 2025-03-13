
import React from 'react';
import { Trail } from '../types/trail';
import { Beach } from '../types/beach';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import { getTransportIcon } from '../utils/transportationIcons';
import BeachCard from './BeachCard';
import { useIsMobile } from '../hooks/use-mobile';

interface CategorySectionProps {
  trails: Trail[];
  sectionTitle: string;
  showSection: boolean;
  beaches?: Beach[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  trails, 
  sectionTitle, 
  showSection,
  beaches = []
}) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  if (!showSection || trails.length === 0) {
    return null;
  }

  // Check if we have any hikes with a region property
  const hasRegionalHikes = trails.some(trail => trail.region && trail.region !== '');

  // Group trails by region
  const trailsByRegion = hasRegionalHikes ? 
    trails.reduce((acc, trail) => {
      const region = trail.region || 'other';
      if (!acc[region]) acc[region] = [];
      acc[region].push(trail);
      return acc;
    }, {} as Record<string, Trail[]>) : 
    { all: trails };

  // Sort regions to ensure consistency
  const sortedRegions = Object.keys(trailsByRegion).sort();

  const headingClasses = isMobile 
    ? "text-3xl font-bold text-black mb-6 text-center" 
    : "text-3xl font-bold text-black mb-6";

  return (
    <div className="mb-12">
      <h2 className={headingClasses}>{sectionTitle}</h2>
      
      {/* Show region-specific grouping if we have regional hikes */}
      {hasRegionalHikes ? (
        sortedRegions.map(region => (
          <div key={region} className="mb-8">
            {region !== 'other' && (
              <h3 className={isMobile 
                ? "text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3 text-center" 
                : "text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3"}>
                {t(region === 'pampa-linda' ? 'pampLinda' : region)}
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trailsByRegion[region].map(trail => (
                <TrailCard 
                  key={trail.id} 
                  trail={trail}
                  transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trails.map(trail => (
            <TrailCard 
              key={trail.id} 
              trail={trail}
              transportIcons={trail.transportation.map(t => getTransportIcon(t))}
            />
          ))}
        </div>
      )}

      {beaches && beaches.length > 0 && (
        <div className="mt-8">
          <h3 className={isMobile 
            ? "text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3 text-center" 
            : "text-2xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3"}>
            {t('beaches')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beaches.map(beach => (
              <BeachCard key={beach.id} beach={beach} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
