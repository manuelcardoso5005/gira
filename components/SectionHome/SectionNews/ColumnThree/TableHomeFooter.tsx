import { useTranslations } from 'next-intl';

export default function TableHomeFooter () {
    const t = useTranslations('tableHeader');
    return (
        <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                <span>Campeão</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>CAF</span>
              </div>
            </div>
            <span className="text-xs font-medium text-purple-600 hover:underline">
              {t('seeall')} →
            </span>
          </div>
        </div>
    )
}