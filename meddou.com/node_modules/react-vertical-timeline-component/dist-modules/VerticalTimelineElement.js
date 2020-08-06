"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const VerticalTimelineElement = ({
  children,
  className,
  contentArrowStyle,
  contentStyle,
  date,
  dateClassName,
  icon,
  iconClassName,
  iconOnClick,
  onTimelineElementClick,
  iconStyle,
  id,
  position,
  style,
  textClassName,
  visibilitySensorProps
}) => {
  const [visible, setVisible] = (0, _react.useState)(false);

  const onVisibilitySensorChange = isVisible => {
    const {
      onChange
    } = visibilitySensorProps;

    if (typeof onChange === 'function') {
      onChange(isVisible);
    }

    if (isVisible) {
      setVisible(true);
    }
  };

  return _react.default.createElement("div", {
    id: id,
    className: (0, _classnames.default)(className, 'vertical-timeline-element', {
      'vertical-timeline-element--left': position === 'left',
      'vertical-timeline-element--right': position === 'right',
      'vertical-timeline-element--no-children': children === ''
    }),
    style: style
  }, _react.default.createElement(_reactVisibilitySensor.default, _extends({}, visibilitySensorProps, {
    onChange: onVisibilitySensorChange
  }), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
    // eslint-disable-line jsx-a11y/no-static-element-interactions
    style: iconStyle,
    onClick: iconOnClick,
    className: (0, _classnames.default)(iconClassName, 'vertical-timeline-element-icon', {
      'bounce-in': visible,
      'is-hidden': !visible
    })
  }, icon), _react.default.createElement("div", {
    style: contentStyle,
    onClick: onTimelineElementClick,
    className: (0, _classnames.default)(textClassName, 'vertical-timeline-element-content', {
      'bounce-in': visible,
      'is-hidden': !visible
    })
  }, _react.default.createElement("div", {
    style: contentArrowStyle,
    className: "vertical-timeline-element-content-arrow"
  }), children, _react.default.createElement("span", {
    className: (0, _classnames.default)(dateClassName, 'vertical-timeline-element-date')
  }, date)))));
};

VerticalTimelineElement.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  className: _propTypes.default.string,
  contentArrowStyle: _propTypes.default.shape({}),
  contentStyle: _propTypes.default.shape({}),
  date: _propTypes.default.node,
  dateClassName: _propTypes.default.string,
  icon: _propTypes.default.element,
  iconClassName: _propTypes.default.string,
  iconStyle: _propTypes.default.shape({}),
  iconOnClick: _propTypes.default.func,
  onTimelineElementClick: _propTypes.default.func,
  id: _propTypes.default.string,
  position: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  textClassName: _propTypes.default.string,
  visibilitySensorProps: _propTypes.default.shape({
    onChange: _propTypes.default.func,
    partialVisibility: _propTypes.default.bool,
    offset: _propTypes.default.shape({})
  })
};
VerticalTimelineElement.defaultProps = {
  children: '',
  className: '',
  contentArrowStyle: null,
  contentStyle: null,
  icon: null,
  iconClassName: '',
  iconOnClick: null,
  onTimelineElementClick: null,
  iconStyle: null,
  id: '',
  style: null,
  date: '',
  position: '',
  textClassName: '',
  visibilitySensorProps: {
    partialVisibility: true,
    offset: {
      bottom: 40
    }
  }
};
var _default = VerticalTimelineElement;
exports.default = _default;