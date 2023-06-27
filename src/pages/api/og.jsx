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
        {/* <img
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          src='https://cdn.discordapp.com/attachments/1086253528873435156/1122849424754888744/background.png'
          alt=''
        /> */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            padding: '25px 20px',
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
            {/* <img
              style={{
                width: '8rem',
                height: '6.25rem',
              }}
              src='https://cdn.discordapp.com/attachments/1086253528873435156/1122849899302629376/Asset_2.png'
              alt=''
            /> */}
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
                marginLeft: '40px',
                marginBottom: '48px',
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
              marginLeft: '40px',
              marginBottom: '48px',
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
