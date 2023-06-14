import clsx from 'clsx';
import { useRef } from 'react';
import ArrowDown from '/public/arrow-down.svg';
const Accordion = ({ data, active, onToggle }) => {
  const contentEl = useRef();
  const { title, description } = data;
  return (
    <div className={`accordion-item ${active ? 'active' : ''}`}>
      <button className='accordion-item__button' onClick={onToggle}>
        {title}
        <ArrowDown className={clsx({ 'rotate-180': active }, 'transition-transform')} />
      </button>
      <div
        ref={contentEl}
        className='accordion-item__content-wrapper'
        style={active ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <p className='accordion-item__content'>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
