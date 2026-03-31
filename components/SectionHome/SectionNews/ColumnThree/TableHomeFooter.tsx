import { useTranslations } from 'next-intl';

interface LegendProps {
  color: string;
  label: string;
}

export default function TableHomeFooter() {
  const t = useTranslations('tableFooter');
  
  return (
    <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <Legend color="bg-purple-600" label={t('champion')} />
          <Legend color="bg-green-500" label={t('qualification1')} />
          <Legend color="bg-red-500" label={t('qualification2')} />
        </div>
        <span className="text-xs font-medium text-purple-600 hover:underline">
          {t('seeall')} →
        </span>
      </div>
    </div>
  );
}

function Legend({ color, label }: LegendProps) {
  return (
    <div className="flex items-center gap-1">
      <div className={`w-2 h-2 ${color} rounded-full`} />
      <span>{label}</span>
    </div>
  );
}