import React from 'react';

const Title = React.memo(({ title }: { title: string }) => {
  return (
    <h3 className="lg:text-[40px] md:text-[35px] text-[25px] text-therd font-bold text-start">
      {title}
    </h3>
  );
});

export default Title;
