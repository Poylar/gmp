import { ComposableMap, Geographies, Geography, Line, Marker } from 'react-simple-maps';
const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

const markers = [
  {
    markerOffsetY: 3,
    markerOffsetX: 55,
    name: 'GMP Berlin',
    coordinates: [13.405, 52.52],
  },
  {
    markerOffsetY: -15,
    name: 'GMP London',
    coordinates: [-0.1278, 51.5074],
  },
  {
    markerOffsetY: -15,
    name: 'GMP Dubai',
    coordinates: [55.2708, 25.2048],
  },
  {
    markerOffsetY: -15,
    name: 'GMP Singapore',
    coordinates: [103.8198, 1.3521],
  },
];

const Map = () => {
  const markerCoordinates = markers.map(({ coordinates }) => coordinates);

  return (
    <div className='w-full h-[800px]'>
      <ComposableMap
        className='bg-gray-900 w-full h-full'
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
        <Line className='kkk' coordinates={markerCoordinates} stroke='#6366F1' strokeWidth={1.5} strokeDasharray='4' strokeLinecap='round' />
        {markers.map(({ name, coordinates, markerOffsetY, markerOffsetX = 0 }) => (
          <Marker key={name} coordinates={coordinates}>
            <defs>
              <filter x='-0.1' y='-0.1' width='1.4' height='100px' id='solid'>
                <feFlood flood-color='#fff' result='bg' />
                <feMerge>
                  <feMergeNode in='bg' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
            </defs>
            <circle r={5} fill='#6366F1' stroke='#fff' strokeWidth={2} />
            <text
              textAnchor='middle'
              y={markerOffsetY}
              x={markerOffsetX}
              filter='url(#solid)'
              className='text-md'
              fontSize={16}
              fontWeight={500}
              style={{
                clipPath: 'inset(-1px -5px -2px -5px round 10px)',
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
