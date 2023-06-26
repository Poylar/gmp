import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const font = fetch(new URL('../../../public/fonts/Arboria-Medium.ttf', import.meta.url)).then((res) => res.arrayBuffer());

export default async function handler(request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('og:title');
    const title = hasTitle ? searchParams.get('og:title')?.slice(0, 100) : 'Gmp media group';

    const fontData = await font;
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(180deg, #111827 0%, #1F293E 100%)',
            backgroundSize: '100%',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            fontFamily: 'Arboria',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            position: 'relative',
            color: '#fff',
          }}
        >
          <img
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
            src='https://cdn.discordapp.com/attachments/1086253528873435156/1122849424754888744/background.png'
            alt=''
          />
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
              <img
                style={{
                  width: '8rem',
                  height: '6.25rem',
                }}
                src='https://cdn.discordapp.com/attachments/1086253528873435156/1122849899302629376/Asset_2.png'
                alt=''
              />
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
                {title}
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
        height: 630,
        fonts: [
          {
            name: 'Arboria',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
