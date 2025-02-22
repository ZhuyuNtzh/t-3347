import React, { useState } from 'react';
import { trails } from '../data/trails';
import { Badge } from '../components/ui/badge';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Trail, TrailType, Difficulty, TransportationType, TravelTimeCategory } from '../types/trail';
import TrailCard from '../components/TrailCard';
import { Bus, Car, ThumbsUp, Users } from 'lucide-react';

type TimeCategory = 'all' | 'short' | 'medium' | 'long' | 'multi-day';
type TravelTimeCategoryFilter = 'all' | TravelTimeCategory;

const Index = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<TrailType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedTime, setSelectedTime] = useState<TimeCategory>('all');
  const [selectedTravelTime, setSelectedTravelTime] = useState<TravelTimeCategoryFilter>('all');

  const getTimeCategory = (duration: number): TimeCategory => {
    if (duration <= 3) return 'short';
    if (duration <= 6) return 'medium';
    if (duration <= 12) return 'long';
    return 'multi-day';
  };

  const getTravelTimeCategory = (minutes: number): TravelTimeCategory => {
    if (minutes < 30) return 'less-than-30min';
    if (minutes < 60) return '30min-1hour';
    if (minutes < 120) return '1-2hours';
    return 'more-than-2hours';
  };

  const filteredTrails = trails.filter(trail => {
    const typeMatch = selectedType === 'all' || trail.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || trail.difficulty === selectedDifficulty;
    const timeMatch = selectedTime === 'all' || getTimeCategory(trail.duration) === selectedTime;
    const travelTimeMatch = selectedTravelTime === 'all' || getTravelTimeCategory(trail.travelTime) === selectedTravelTime;
    return typeMatch && difficultyMatch && timeMatch && travelTimeMatch;
  });

  const dayHikes = filteredTrails.filter(trail => trail.type === 'day-hike');
  const multiDayHikes = filteredTrails.filter(trail => trail.type === 'multi-day');

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
            Discover Patagonia's Wonders
          </p>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-8 justify-center">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">{t('filterByType')}</p>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedType === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedType('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedType === 'day-hike' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedType('day-hike')}
              >
                {t('filterDayHike')}
              </Badge>
              <Badge 
                variant={selectedType === 'multi-day' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedType('multi-day')}
              >
                {t('filterMultiDay')}
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">{t('filterByDifficulty')}</p>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'easy' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('easy')}
              >
                {t('difficultyEasy')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'moderate' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('moderate')}
              >
                {t('difficultyModerate')}
              </Badge>
              <Badge 
                variant={selectedDifficulty === 'hard' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedDifficulty('hard')}
              >
                {t('difficultyHard')}
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">{t('filterByTime')}</p>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedTime === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTime('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedTime === 'short' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTime('short')}
              >
                1-3h
              </Badge>
              <Badge 
                variant={selectedTime === 'medium' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTime('medium')}
              >
                3-6h
              </Badge>
              <Badge 
                variant={selectedTime === 'long' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTime('long')}
              >
                6-12h
              </Badge>
              <Badge 
                variant={selectedTime === 'multi-day' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTime('multi-day')}
              >
                12h+
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">{t('filterByTravelTime')}</p>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedTravelTime === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTravelTime('all')}
              >
                {t('filterAll')}
              </Badge>
              <Badge 
                variant={selectedTravelTime === 'less-than-30min' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTravelTime('less-than-30min')}
              >
                {t('travelTimeLessThan30')}
              </Badge>
              <Badge 
                variant={selectedTravelTime === '30min-1hour' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTravelTime('30min-1hour')}
              >
                {t('travelTime30To60')}
              </Badge>
              <Badge 
                variant={selectedTravelTime === '1-2hours' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTravelTime('1-2hours')}
              >
                {t('travelTime1To2')}
              </Badge>
              <Badge 
                variant={selectedTravelTime === 'more-than-2hours' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTravelTime('more-than-2hours')}
              >
                {t('travelTimeMore2')}
              </Badge>
            </div>
          </div>
        </div>

        {(selectedType === 'all' || selectedType === 'day-hike') && dayHikes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest mb-6">{t('filterDayHike')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dayHikes.map((trail) => (
                <TrailCard 
                  key={trail.id} 
                  trail={trail} 
                  transportIcons={trail.transportation.map(t => getTransportIcon(t))}
                />
              ))}
            </div>
          </div>
        )}

        {(selectedType === 'all' || selectedType === 'multi-day') && multiDayHikes.length > 0 && (
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
      </div>
    </div>
  );
};

export default Index;
