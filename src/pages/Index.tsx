
import React, { useState } from 'react';
import { trails } from '../data/trails';
import { beaches } from '../data/beaches';
import { Badge } from '../components/ui/badge';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Trail, TrailType, Difficulty, TransportationType, TravelTimeCategory, TrailCategory } from '../types/trail';
import TrailCard from '../components/TrailCard';
import BeachCard from '../components/BeachCard';
import { Bus, Car, FootprintsIcon, Map, Mountain, ThumbsUp, TreePine, Users } from 'lucide-react';

type TravelTimeCategoryFilter = 'all' | TravelTimeCategory;
type TrailCategoryFilter = 'all' | TrailCategory;

const Index = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<TrailType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedTravelTime, setSelectedTravelTime] = useState<TravelTimeCategory | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<TrailCategory | 'all'>('all');

  const getAccessibilityCategory = (trail: Trail): TravelTimeCategory => {
    if (trail.distanceFromCampsite <= 2) return 'direct-access';
    if (trail.travelTime <= 30 && ['bus', 'taxi'].some(t => trail.transportation.includes(t as TransportationType))) {
      return 'easy-access';
    }
    return 'medium-access';
  };

  const filteredTrails = trails.filter(trail => {
    const typeMatch = selectedType === 'all' || trail.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || trail.difficulty === selectedDifficulty;
    const accessibilityMatch = selectedTravelTime === 'all' || getAccessibilityCategory(trail) === selectedTravelTime;
    const categoryMatch = selectedCategory === 'all' || trail.category === selectedCategory;
    return typeMatch && difficultyMatch && accessibilityMatch && categoryMatch;
  });

  const allHikes = filteredTrails;
  
  const dayHikes = selectedCategory === 'all' ? filteredTrails.filter(trail => trail.type === 'day-hike') : [];
  const multiDayHikes = selectedCategory === 'all' ? filteredTrails.filter(trail => trail.type === 'multi-day') : [];
  
  const directAccessTrailNames = [
    'Cascada de los Duendes',
    'Mirador Lago Gutiérrez',
    'Cerro San Martin',
    'Playa Muñoz',
    'Lago Gutiérrez'
  ];
  
  const directAccessHikes = dayHikes.filter(trail => 
    directAccessTrailNames.includes(trail.name)
  );
  
  const otherDayHikes = dayHikes.filter(trail => 
    !directAccessTrailNames.includes(trail.name)
  );

  const getTransportIcon = (type: TransportationType) => {
    switch(type) {
      case 'bus':
        return <Bus className="w-4 h-4" />;
      case 'taxi':
        return <Car className="w-4 h-4" />;
      case 'hitchhiking':
        return <ThumbsUp className="w-4 h-4" />;
      case 'private-transfer':
        return <Users className="w-4 h-4" />;
      case 'walking':
        return <FootprintsIcon className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category: TrailCategory | 'all') => {
    switch(category) {
      case 'high-mountain':
        return <Mountain className="w-4 h-4 mr-1" />;
      case 'easy-mountain':
        return <Mountain className="w-4 h-4 mr-1" />;
      case 'walking-path':
        return <FootprintsIcon className="w-4 h-4 mr-1" />;
      default:
        return <Map className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fadeIn">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/18170e0a-a211-46c5-97e6-3a78c27402e0.png"
              alt="Camping Los Coihues"
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-forest mb-2">
            {t('title')}
          </h1>
          <p className="text-xl text-stone mb-4">
            {t('tagline')}
          </p>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        <div className="mb-8 flex flex-col gap-6 items-end">
          <div className="w-full md:w-auto">
            <p className="text-base font-medium text-gray-500 mb-2">{t('filterByCategory')}</p>
            <div className="flex flex-wrap gap-2 justify-end">
              <Badge 
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('all')}
              >
                <Map className="w-4 h-4 mr-1" />
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedCategory === 'high-mountain' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('high-mountain')}
              >
                <Mountain className="w-4 h-4 mr-1" />
                {t('categoryHighMountain')}
              </Badge>
              <Badge 
                variant={selectedCategory === 'easy-mountain' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('easy-mountain')}
              >
                <TreePine className="w-4 h-4 mr-1" />
                {t('categoryEasyMountain')}
              </Badge>
              <Badge 
                variant={selectedCategory === 'walking-path' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedCategory('walking-path')}
              >
                <FootprintsIcon className="w-4 h-4 mr-1" />
                {t('categoryWalkingPath')}
              </Badge>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <p className="text-base font-medium text-gray-500 mb-2">{t('filterByType')}</p>
            <div className="flex flex-wrap gap-2 justify-end">
              <Badge 
                variant={selectedType === 'all' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedType('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedType === 'day-hike' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedType('day-hike')}
              >
                {t('filterDayHike')}
              </Badge>
              <Badge 
                variant={selectedType === 'multi-day' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedType('multi-day')}
              >
                {t('filterMultiDay')}
              </Badge>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <p className="text-base font-medium text-gray-500 mb-2">{t('filterByDifficulty')}</p>
            <div className="flex flex-wrap gap-2 justify-end">
              <Badge 
                variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedDifficulty('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'easy' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedDifficulty('easy')}
              >
                {t('difficultyEasy')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'moderate' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedDifficulty('moderate')}
              >
                {t('difficultyModerate')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'hard' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedDifficulty('hard')}
              >
                {t('difficultyHard')}
              </Badge>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <p className="text-base font-medium text-gray-500 mb-2">{t('filterByAccessibility')}</p>
            <div className="flex flex-wrap gap-2 justify-end">
              <Badge 
                variant={selectedTravelTime === 'all' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedTravelTime('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedTravelTime === 'direct-access' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedTravelTime('direct-access')}
              >
                {t('accessibilityDirect')}
              </Badge>
              <Badge 
                variant={selectedTravelTime === 'easy-access' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedTravelTime('easy-access')}
              >
                {t('accessibilityEasy')}
              </Badge>
              <Badge 
                variant={selectedTravelTime === 'medium-access' ? 'default' : 'outline'}
                className="cursor-pointer text-base"
                onClick={() => setSelectedTravelTime('medium-access')}
              >
                {t('accessibilityMedium')}
              </Badge>
            </div>
          </div>
        </div>

        {selectedCategory !== 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t(`category${selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allHikes.map((trail) => (
                <TrailCard 
                  key={trail.id} 
                  trail={trail}
                  transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                />
              ))}
            </div>
          </div>
        )}

        {selectedCategory === 'all' && (selectedType === 'all' || selectedType === 'day-hike') && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t('filterDayHike')}</h2>
            
            {directAccessHikes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
                  {t('accessibilityDirect')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {directAccessHikes.map((trail) => (
                    <TrailCard 
                      key={trail.id} 
                      trail={trail} 
                      transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {otherDayHikes.length > 0 && (
              <div>
                {directAccessHikes.length > 0 && (
                  <h3 className="text-xl font-semibold text-forest-light mb-4 border-l-4 border-forest pl-3">
                    {t('nearByBusOrUber')}
                  </h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherDayHikes.map((trail) => (
                    <TrailCard 
                      key={trail.id} 
                      trail={trail}
                      transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {selectedCategory === 'all' && (selectedType === 'all' || selectedType === 'multi-day') && multiDayHikes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t('filterMultiDay')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {multiDayHikes.map((trail) => (
                <TrailCard 
                  key={trail.id} 
                  trail={trail}
                  transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mb-12 mt-16">
          <h2 className="text-2xl font-bold text-forest mb-6">{t('beaches')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beaches.map((beach) => (
              <BeachCard key={beach.id} beach={beach} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
