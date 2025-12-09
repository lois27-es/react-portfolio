import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './services.css';
import { supabase } from '../supabaseClient'; 

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('id'); 
      
      if (error) {
        console.error('Error fetching services:', error);
      } else {
        setServicesData(data);
      }
    };

    fetchServices();
  }, []);

  return (
    <div id="services" className="services">
      <div className="section-title-wrapper">
        <h1>My Services</h1>
        <div className="section-underline"></div>
      </div>
      <div className="menu-wrap">
        <nav className="menu">
          {servicesData.length > 0 ? (
            servicesData.map((service, idx) => (
              <MenuItem
                key={service.id || idx} 
                text={service.s_name}
                desc={service.s_desc}
              />
            ))
          ) : (
            <p style={{color: 'white', textAlign: 'center'}}>Loading Services...</p>
          )}
        </nav>
      </div>
    </div>
  );
};
function MenuItem({ text, desc }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const handleMouseEnter = (ev) => {
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev) => {
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };
  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
    </React.Fragment>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <div
        className="menu__item-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="service-main-text">
          <h2 style={{color: '#fff'}}>{text}</h2>
          <p style={{color: '#a8b2d1'}}>{desc}</p>
        </div>
      </div>

      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;