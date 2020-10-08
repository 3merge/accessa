import React from 'react';
import { Grid, Collapse } from '@material-ui/core';
import { Link } from '@reach/router';
import useStyles from './useStyles';

const Dropdown = ({ item }) => {
  const [active, setActive] = React.useState(false);
  const activate = () => setActive(true);
  const deactivate = () => setActive(false);
  const ref = React.useRef(null);
  const { ul } = useStyles();

  const { top = 0, left = 0, height = 0 } =
    ref?.current?.getBoundingClientRect() || {};

  return (
    <Grid
      container
      onMouseOver={activate}
      onMouseLeave={deactivate}
      onFocus={activate}
      onBlur={deactivate}
    >
      <Grid item xs={12} tabIndex={0} ref={ref}>
        {item.main}
      </Grid>
      <Collapse
        in={active}
        style={{
          position: 'fixed',
          top: top + height,
          left: left * -1,
          backgroundColor: 'tomato',
          right: 0,
          paddingLeft: left * 2,
          paddingTop: height / 2,
          paddingBottom: height,
        }}
      >
        <ul className={ul}>
          {item.subitems.map((sub, i) => (
            <Grid
              item
              xs={12}
              component="li"
              onBlur={
                i === item.subitems.length - 1
                  ? deactivate
                  : null
              }
              key={sub.sub.concat(i)}
            >
              <Link to={sub.path}>{sub.sub}</Link>
            </Grid>
          ))}
        </ul>
      </Collapse>
    </Grid>
  );
};

export default Dropdown;
