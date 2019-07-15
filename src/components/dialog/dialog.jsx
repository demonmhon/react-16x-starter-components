import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import './dialog.scss';

const blockCssName = `${ALIAS}-dialog`;

const propTypes = {
  /**
   * One or more class names to be added to the dialog element (not root), i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Override the inline-styles of the dialog element.
   */
  style: PropTypes.shape({}),
  /**
   * The title of dialog.
   */
  title: PropTypes.string,
  /**
   * Elements to be rendered as children (dialog content) of this component.
   */
  children: PropTypes.node,
  /**
   * Hide the dialog if set to true.
   */
  show: PropTypes.bool,
  /**
   * Modal dialog can only be closed by selecting one of the actions.
   *
   * Dialog won't closed by clicking on overlay and close button won't displayed
   */
  modal: PropTypes.bool,
  /**
   * Vertically center the modal.
   */
  centered: PropTypes.bool,
  /**
   * Show dialog in full screen if set to true.
   */
  fullScreen: PropTypes.bool,
  /**
   * 	A callback function that is triggered when cancel button clicked.
   *
   * ```() => {}```
   */
  onClose: PropTypes.func,
};

const defaultProps = {
  className: '',
  children: null,
  show: false,
  modal: false,
  fullScreen: false,
  onClose: () => {},
};

/**
 * Show text and UI controls focused on a specific task. Or to inform users about critical information, require users actions, or involve multiple tasks.
 * Content (children) in Dialog could be element.
 *
 * Dialog's default width is `360px`. The size could be set from `style` or `className`. And will appear at top of page.
 *
 * Dialog could be closed when dialog get focus and pressing `ESC`.
 */
function Dialog(props) {
  let dialogDialog;
  let dialogOverlay;

  useEffect(() => {
    if (props.show) {
      dialogDialog.focus();
      toggleDialogOverlay(true);
    } else {
      toggleDialogOverlay(false);
    }
  });

  const getBrowserScrollbarSize = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  const doOnClose = () => {
    props.onClose();
  };

  const onKeyDown = e => {
    if (e.keyCode === 27 && !props.modal) {
      doOnClose();
    }
  };

  const toggleDialogOverlay = show => {
    if (show) {
      dialogOverlay = document.createElement('div');
      dialogOverlay.classList.add(`${blockCssName}__overlay`);
      document.body.appendChild(dialogOverlay);
      document.body.style.paddingRight = `${getBrowserScrollbarSize()}px`;
      document.body.classList.add(`${blockCssName}--dialog-opened`);
    } else {
      const overlay = document.getElementsByClassName(
        `${blockCssName}__overlay`
      );
      if (overlay.length) {
        document.body.removeChild(overlay[0]);
        document.body.style.paddingRight = 0;
        document.body.classList.remove(`${blockCssName}--dialog-opened`);
      }
    }
  };

  const {
    className,
    children,
    centered,
    fullScreen,
    show,
    modal,
    style,
  } = props;

  const dialogCssClassList = [blockCssName];
  const dialogDialogCssClassList = [`${blockCssName}__dialog`];
  if (show) dialogCssClassList.push(`${blockCssName}--show`);
  if (centered) dialogCssClassList.push(`${blockCssName}--centered`);
  if (fullScreen) dialogCssClassList.push(`${blockCssName}--full-screen`);
  if (className) dialogDialogCssClassList.push(className);

  const contentComponent = children ? (
    <div className={`${blockCssName}--body`}>
      <div className={`${blockCssName}--body-content`}>{children}</div>
    </div>
  ) : (
    <div className={`${blockCssName}--body`} />
  );

  return (
    <div
      tabIndex="0"
      role="dialog"
      onKeyDown={onKeyDown}
      ref={el => {
        dialogDialog = el;
      }}
      className={dialogCssClassList.join(' ')}
    >
      <div
        className={`${blockCssName}__display`}
        onClick={() => {
          if (!modal) doOnClose();
        }}
      >
        <div
          className={dialogDialogCssClassList.join(' ')}
          style={style}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {contentComponent}
        </div>
      </div>
    </div>
  );
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
