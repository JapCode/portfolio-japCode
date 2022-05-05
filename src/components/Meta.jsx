import { useEffect, useState } from 'react';
import { Title } from 'react-head';
import useViewSectionState from '../hooks/UseViewSectionState';
import layers from '../utils/navElements';

function MetaElements() {
  const ViewSection = useViewSectionState();
  const [visibleState, setVisibleState] = useState('Home');
  useEffect(() => {
    if (ViewSection !== null) {
      layers.forEach((layer) => {
        if (layer.layer === ViewSection) {
          setVisibleState(layer.name);
        }
      });
    }
  }, [ViewSection]);
  return <Title>{`${visibleState} | JapCode`}</Title>;
}
export default MetaElements;
