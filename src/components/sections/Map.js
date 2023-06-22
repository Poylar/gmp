import { SplitText } from '@/scripts/splitText';
import { isDesktop } from 'react-device-detect';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

const Map = ({ data }) => {
  const markers = [
    {
      markerOffsetY: -15,

      name: 'GMP Berlin',
      coordinates: [13.405, 52.52],
    },
    {
      markerOffsetY: 25,
      name: 'GMP London',
      coordinates: [-0.1278, 51.5074],
    },
    {
      markerOffsetY: 25,
      name: 'GMP Dubai',
      coordinates: [55.2708, 25.2048],
    },
    {
      markerOffsetY: 25,
      name: 'GMP Singapore',
      coordinates: [103.8198, 1.3521],
    },
  ];

  const markerCoordinates = markers.map(({ coordinates }) => coordinates);

  return (
    <div className='w-full h-[800px] relative'>
      <div className='absolute z-10 text-gray-50 container inset-x-0 md:top-32'>
        <h2 className='text-4xl md:text-5xl font-medium max-w-md ml-auto'>
          <SplitText
            initial={{ y: '100%' }}
            whileInView='visible'
            viewport={{ threshold: 0.5 }}
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.1,
                },
              }),
            }}
          >
            {data.title}
          </SplitText>
        </h2>
      </div>

      {isDesktop && (
        <ComposableMap
          className='bg-gray-900 w-full h-full map'
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 435,
            center: [50, 25],
          }}
        >
          <Geographies fill='#192133' stroke='#485672' strokeWidth={0.2} geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                  key={geo.rsmKey}
                  geography={geo}
                />
              ))
            }
          </Geographies>

          {markers.map(({ name, coordinates, markerOffsetY, markerOffsetX = 0 }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={5} fill='#6366F1' stroke='#fff' strokeWidth={2} />
              <text textAnchor='middle' y={markerOffsetY} x={markerOffsetX} fill='white' fontSize={16} fontWeight={500}>
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      )}
    </div>
  );
};

export default Map;
