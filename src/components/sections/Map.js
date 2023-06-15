import { useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Line, Marker } from 'react-simple-maps';
const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

const Map = () => {
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

  const [scope, animate] = useAnimate();
  const inView = useInView(scope);
  const markerCoordinates = markers.map(({ coordinates }) => coordinates);
  useEffect(() => {
    if (inView) {
      const animation = async () => {
        await animate(scope.current, {
          rotate: [0, 0, 0],
        });
        animate(
          '.rsm-line',
          {
            pathLength: [0, 1],
            opacity: [0, 1],
          },
          {
            duration: 3,
          }
        );
      };

      animation();
    }
  }, [inView]);
  return (
    <div className='w-full h-[800px]'>
      <ComposableMap
        ref={scope}
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
        <Line coordinates={markerCoordinates} stroke='#6366F1' strokeWidth={1.5} strokeLinecap='round' />
        {markers.map(({ name, coordinates, markerOffsetY, markerOffsetX = 0 }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={5} fill='#6366F1' stroke='#fff' strokeWidth={2} />
            <text
              textAnchor='middle'
              y={markerOffsetY}
              x={markerOffsetX}
              filter='url(#solid)'
              fill='white'
              className='text-md text-white'
              fontSize={16}
              fontWeight={500}
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
