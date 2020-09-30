import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { renderListSafely } from '../../Hocs';
import { Dialog, VideoPaper } from '../../Utils';
import useStyles from './useStyles';

export const getId = (x) => x.split('/').pop();

const Lightbox = ({ lists }) => {
  const [video, setVideo] = React.useState(null);
  const { btn, dialog, paper } = useStyles();

  return (
    <Dialog
      PaperProps={{
        className: paper,
      }}
      ButtonComponent={({ setOpen }) => {
        return lists
          .map((x) => ({
            title: x.title,
            id: getId(x.video),
          }))
          .map((v) => (
            <Button
              key={v.title}
              aria-label="Click to watch the video"
              variant="contained"
              color="primary"
              onClick={() => (setVideo(v), setOpen(true))}
            >
              {v.title}
            </Button>
          ));
      }}
      aria-labelledby="selectedVideo"
      aria-describedby="selectedVideo"
    >
      {({ setOpen }) => {
        return (
          <div className={dialog}>
            <Dialog.CloseBtn
              setOpen={setOpen}
              className={btn}
            />
            <VideoPaper setOpen={setOpen} video={video} />
          </div>
        );
      }}
    </Dialog>
  );
};

Lightbox.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      video: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default renderListSafely(Lightbox);
