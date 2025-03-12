import React from 'react';
import { Bus, Car, Footprints, ThumbsUp, Users } from 'lucide-react';
import { Trail, TransportationType } from '../../types/trail';
import { useLanguage } from '../../context/LanguageContext';

interface TransportationInfoProps {
  trail: Trail;
  compact?: boolean;
}

const TransportationInfo: React.FC<TransportationInfoProps> = ({ trail, compact = false }) => {
  const { t } = useLanguage();

  // Special handling for Jakob trail
  if (trail.id === "11" || trail.name.toLowerCase().includes("jakob")) {
    return (
      <div className={compact ? "space-y-2" : "space-y-3 bg-gray-50 p-4 rounded-lg"}>
        <div className="flex items-start gap-2">
          <Footprints className="w-4 h-4 flex-shrink-0 text-blue-500 mt-0.5" />
          <div>
            <span className="font-bold block">{t('walkingDistance')}</span>
            {!compact && <span className="text-gray-600">{t('directAccess')}</span>}
          </div>
        </div>
      </div>
    );
  }

  const getTransportationInfo = (type: string) => {
    const getTimeLabel = (minutes: number) => `(${minutes} ${t('minutes')})`;

    switch (type) {
      case 'walking':
        return {
          icon: <Footprints className="w-4 h-4 flex-shrink-0 text-blue-500" />,
          label: `${t('walkingDistance')}`
        };
      case 'bus':
        return {
          icon: <Bus className="w-4 h-4 flex-shrink-0 text-blue-500" />,
          label: `${t('busService')} - ${trail.busLines || 'Line 20'}`
        };
      case 'taxi':
        return {
          icon: <Car className="w-4 h-4 flex-shrink-0 text-blue-500" />,
          label: `${t('taxiService')} ${getTimeLabel(15)}`
        };
      case 'private-transfer':
        return {
          icon: <Users className="w-4 h-4 flex-shrink-0 text-blue-500" />,
          label: `${t('privateTransfer')} ${getTimeLabel(Math.round(trail.distanceFromCampsite * 2))}`
        };
      case 'hitchhiking':
        return {
          icon: <ThumbsUp className="w-4 h-4 flex-shrink-0 text-blue-500" />,
          label: t('hitchhiking')
        };
      default:
        return null;
    }
  };

  const getBusInfo = (trail: Trail) => {
    if (trail.name === "Refugio Frey from Villa Catedral") {
      return "Linea 50 (desde Coihues hasta km 8 ruta 82) + Linea 55 (Ruta 82)";
    }
    
    if (!trail.transportation.includes('bus')) return null;
    
    switch(trail.id) {
      case 't1': // Cerro Llao Llao
        return "Bus 20";
      case 't2': // Cerro Lopez
        return "Bus 20, 21";
      case 't3': // Refugio Frey
        return "Bus 55";
      case 't4': // Cerro Campanario
        return "Bus 20, 21";
      case 't5': // Laguna Negra
        return "Bus 55";
      case 't6': // Cerro Catedral
        return "Bus 55";
      case 't7': // Circuito Chico
        return "Bus 20";
      case 't8': // Cascada de los Duendes
        return "Walking distance";
      case 't9': // Lago Escondido
        return "Bus 20";
      case 't10': // Mirador Lago Gutiérrez
        return "Walking distance";
      case 't11': // Cerro San Martín
        return "Walking distance";
      case 't12': // Refugio Otto Meiling
        return "Bus 50 + Pampa Linda Transfer";
      case 't13': // Refugio San Martín
        return "Bus 50 + Pampa Linda Transfer";
      case 't14': // Cerro Tronador
        return "Bus 50 + Pampa Linda Transfer";
      default:
        return null;
    }
  };

  return (
    <div className={compact ? "space-y-2" : "space-y-3 bg-gray-50 p-4 rounded-lg"}>
      {trail.transportation.map((type, index) => {
        const transportInfo = getTransportationInfo(type);
        if (!transportInfo) return null;
        return (
          <div key={index} className="flex items-start gap-2">
            <div className="mt-0.5">{transportInfo.icon}</div>
            <div>
              <span className="font-bold block">{transportInfo.label}</span>
              {type === 'bus' && !compact && (
                <span className="text-gray-600">{t('busLines')}: {getBusInfo(trail)}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransportationInfo;
