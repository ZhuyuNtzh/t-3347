
import React from 'react';
import { Trail } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';
import TrailCard from './TrailCard';
import { getTransportIcon } from '../utils/transportationIcons';

interface MultiDayHikesSectionProps {
  otherMultiDayHikes: Trail[];
  pampLindaHikes: Trail[];
  showSection: boolean;
}

const MultiDayHikesSection: React.FC<MultiDayHikesSectionProps> = ({ 
  otherMultiDayHikes, 
  pampLindaHikes, 
  showSection 
}) => {
  const { t } = useLanguage();

  if (!showSection) {
    return null;
  }

  // Find specific trails for debugging
  const hasJakobCircuit = otherMultiDayHikes.find(trail => 
    trail.id === "11" || 
    (trail.name.toLowerCase().includes('jakob') && trail.name.toLowerCase().includes('frey'))
  );
  
  const hasJakobTambo = otherMultiDayHikes.find(trail => 
    trail.id === "12" || 
    (trail.name.toLowerCase().includes('jakob') && trail.name.toLowerCase().includes('tambo'))
  );

  // Debug for Pampa Linda trails
  const hasPampLindaTrails = pampLindaHikes && pampLindaHikes.length > 0;
  const pampLindaTrailNames = pampLindaHikes.map(t => t.name).join(', ');
  
  console.log('Jakob Tambo trail:', hasJakobTambo);
  console.log('Pampa Linda trails available:', hasPampLindaTrails, pampLindaHikes.length);
  console.log('Pampa Linda trail names:', pampLindaTrailNames);
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-forest mb-6">{t('filterMultiDay')}</h2>
      
      {otherMultiDayHikes.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('bariloche')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMultiDayHikes.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 text-xs">
              <p>Debug - Bariloche multi-day hikes:</p>
              <p>Found Jakob Circuit (id=11): {hasJakobCircuit ? 'Yes' : 'No'}</p>
              <p>Found Jakob Tambo (id=12): {hasJakobTambo ? 'Yes' : 'No'}</p>
              <p>Total trails: {otherMultiDayHikes.length}</p>
              <p>Trail IDs: {otherMultiDayHikes.map(t => t.id).join(', ')}</p>
              <p>Trail names: {otherMultiDayHikes.map(t => t.name).join(', ')}</p>
            </div>
          )}
        </div>
      )}
      
      {pampLindaHikes.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
            {t('pampLinda')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pampLindaHikes.map((trail) => (
              <TrailCard 
                key={trail.id} 
                trail={trail}
                transportIcons={trail.transportation.map(t => getTransportIcon(t))}
              />
            ))}
          </div>
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 text-xs">
              <p>Debug - Pampa Linda trails:</p>
              <p>Total trails: {pampLindaHikes.length}</p>
              <p>Trail IDs: {pampLindaHikes.map(t => t.id).join(', ')}</p>
              <p>Trail names: {pampLindaHikes.map(t => t.name).join(', ')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiDayHikesSection;
