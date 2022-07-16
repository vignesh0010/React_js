import React from 'react';

const FRrefs = React.forwardRef((props,ref) => {
  return (
    <div>
      <input type="text" ref={ref} name="frtext" id="frtext" />
    </div>
  )
});

export default FRrefs;