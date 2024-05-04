import React from 'react';

interface CoinTickerWidgetProps {
  coinId: string;
  currency: string;
  locale: string;
  height?: string;
}

const CoinTickerWidget: React.FC<CoinTickerWidgetProps> = ({ coinId, currency, locale, height = "300" }) => {
  return (
    <div>
      <coingecko-coin-price-chart-widget  coin-id={coinId} currency={currency} height={height} locale={locale}></coingecko-coin-price-chart-widget>
    </div>
  );
};

export default CoinTickerWidget;
