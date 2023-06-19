import clsx from 'clsx';
import { useRef } from 'react';
import ArrowDown from '/public/arrow-down.svg';

import { useState } from 'react';

const Accordion = ({ settings, data, active, onToggle, imageIndex, setImageIndex, ...props }) => {
  const [clicked, setClicked] = useState('0');
  const contentEl = useRef(null);
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }

    setImageIndex(index);
    setClicked(index);
  };

  const defaultSettings = {
    wrapperClassNames: props.wrapperClassNames || '',
    rootClassNames: props.rootClassNames || '',
    buttonClassNames: props.buttonClassNames || '',
    contentClassNames: props.contentClassNames || '',
    activeClassNames: props.activeClassNames || '',
    ArrowComponent: props.ArrowComponent || ArrowDown,
  };

  return (
    <div ref={contentEl} className={clsx(props.wrapperClassNames)}>
      {data.map(({ title, description }, index) => {
        let active = clicked === index;
        return (
          <div key={index} className={clsx('accordion-item', active ? ['active', props.activeClassNames] : null, props.rootClassNames)}>
            <button className={clsx('accordion-item__button', defaultSettings.buttonClassNames)} onClick={() => handleToggle(index)}>
              {title}
              <defaultSettings.ArrowComponent className={clsx(active ? props.activeClassNames : '', 'transition-transform')} />
            </button>
            <div
              className={clsx('accordion-item__content-wrapper')}
              style={
                active ? { height: contentEl.current.querySelectorAll('.accordion-item__content-wrapper')[clicked].scrollHeight } : { height: '0px' }
              }
            >
              <div className={clsx('accordion-item__content', defaultSettings.contentClassNames)} dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
