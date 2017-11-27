import { lineStyle, fillStyle } from '../utils/polygon-layer-styles';

const legendColor = '#8DA610';

export default {
  id: 'special-purpose-subdistricts',
  title: 'Special Purpose Subdistricts',
  titleTooltip: 'Areas within Special Purpose Districts where unique rules apply',
  visible: false,
  legendIcon: 'polygon',
  legendColor,
  meta: {
    description: 'NYC GIS Zoning Features October 2017, Bytes of the Big Apple',
    url: ['https://www1.nyc.gov/site/planning/data-maps/open-data.page'],
    updated_at: '21 November 2017',
  },
  layers: [
    {
      layer: lineStyle('zoning-sp-sd-line', 'supporting-zoning', 'special-purpose-subdistricts', legendColor),
    },
    {
      layer: fillStyle('zoning-sp-sd-fill', 'supporting-zoning', 'special-purpose-subdistricts', legendColor),
      highlightable: true,
      clickable: true,
      tooltipTemplate: '{{spname}} - {{subdist}}',
    },
  ],
};
