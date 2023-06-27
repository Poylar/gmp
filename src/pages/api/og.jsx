import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#fff',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}

        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            padding: '2.5rem 2.3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            <span
              style={{
                height: '5rem',
                width: '2px',
                backgroundColor: '#374151',
                display: 'flex',
              }}
            ></span>
            <h2
              style={{
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: 'bold',
              }}
            >
              Test
            </h2>
          </div>
          <div
            style={{
              maxWidth: '50rem',
              fontSize: '5.65rem',
              lineHeight: '6rem',
              textAlign: 'left',
            }}
          >
            Transforming visions into reality
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
