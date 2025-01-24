import React from 'react';

const ScrollerSection = () => {
  return (
    <section id="page2">
      <div id="scroller">
        <div id="scroller-in">
          {['PERSONAL TRAINING', 'GROUP FITNESS CLASSES', 'NUTRITION CONSULTATION', 'STRENGTH TRAINING', 'YOGA SESSIONS'].map((item) => (
            <h4 key={item}>{item}</h4>
          ))}
        </div>
        <div id="scroller-in">
          {['PERSONAL TRAINING', 'GROUP FITNESS CLASSES', 'NUTRITION CONSULTATION', 'STRENGTH TRAINING', 'YOGA SESSIONS'].map((item) => (
            <h4 key={item}>{item}</h4>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollerSection;