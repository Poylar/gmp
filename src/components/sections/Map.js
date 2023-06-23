import { SplitText } from '@/scripts/splitText';
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
    <section className='w-full md:h-[800px] relative'>
      <div className='hidden lg:block h-full'>
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
      </div>

      <div className='section lg:hidden flex flex-col bg-gray-900 text-white'>
        <div className='container'>
          <h2 className='text-4xl font-medium text-center mb-6'>{data.title}</h2>

          <div className='flex flex-col gap-2'>
            {markers.map(({ name, coordinates, markerOffsetY, markerOffsetX = 0 }) => (
              <div key={name} className='flex flex-col  items-center justify-center'>
                <span className='py-1 px-2 rounded-3xl bg-white text-gray-950 font-medium'>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
