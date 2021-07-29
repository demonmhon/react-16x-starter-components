import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { namespace as ns } from '../../utils/theme';
import './dialog.scss';

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
  const {
    children,
    className,
    centered,
    fullScreen,
    show,
    modal,
    style,
    onClose,
  } = props;

  let dialogDialog;
  let dialogOverlay;

  useEffect(() => {
    if (show) {
      dialogDialog.focus();
    }
    toggleDialogOverlay(show);
  }, [show]);

  const getBrowserScrollbarSize = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  const doOnClose = () => (!modal ? onClose() : false);

  const onKeyDown = (e) => {
    if (e.keyCode === 27 && !props.modal) {
      doOnClose();
    }
  };

  const toggleDialogOverlay = (show) => {
    if (show) {
      dialogOverlay = document.createElement('div');
      dialogOverlay.classList.add(`${ns}-dialog__overlay`);
      document.body.appendChild(dialogOverlay);
      document.body.style.paddingRight = `${getBrowserScrollbarSize()}px`;
      document.body.classList.add(`${ns}-body-dialog--dialog-opened`);
    } else {
      const overlay = document.getElementsByClassName(`${ns}-dialog__overlay`);
      if (overlay.length) {
        document.body.removeChild(overlay[0]);
        document.body.style.paddingRight = 0;
        document.body.classList.remove(`${ns}-body-dialog--dialog-opened`);
      }
    }
  };

  const dialogCssClassList = [`${ns}-dialog`];
  const dialogDialogCssClassList = [`${ns}-dialog__dialog`];
  if (show) dialogCssClassList.push(`${ns}-dialog--show`);
  if (centered) dialogCssClassList.push(`${ns}-dialog--centered`);
  if (fullScreen) dialogCssClassList.push(`${ns}-dialog--full-screen`);
  if (className) dialogDialogCssClassList.push(className);

  const contentComponent = children ? (
    <div className={`${ns}-dialog--body`}>
      <div className={`${ns}-dialog--body-content`}>{children}</div>
    </div>
  ) : (
    <div className={`${ns}-dialog--body`} />
  );

  return (
    <div
      tabIndex="0"
      role="dialog"
      onKeyDown={onKeyDown}
      ref={(el) => {
        dialogDialog = el;
      }}
      className={dialogCssClassList.join(' ')}
    >
      <div className={`${ns}-dialog__display`} onClick={() => doOnClose()}>
        <div
          className={dialogDialogCssClassList.join(' ')}
          style={style}
          onClick={(e) => e.stopPropagation()}
        >
          {contentComponent}
        </div>
      </div>
    </div>
  );
}

Dialog.displayName = 'Dialog';
Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
