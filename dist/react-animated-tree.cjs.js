'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var _inheritsLoose = _interopDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)
var _extends = _interopDefault(require('@babel/runtime/helpers/extends'))
var _objectWithoutPropertiesLoose = _interopDefault(
  require('@babel/runtime/helpers/objectWithoutPropertiesLoose')
)
var React = _interopDefault(require('react'))
var PropTypes = _interopDefault(require('prop-types'))
var reactSpring = require('react-spring')

var MinusSquareO = function MinusSquareO(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends({}, props, {
      viewBox: '64 -65 897 897',
    }),
    /*#__PURE__*/ React.createElement(
      'g',
      null,
      /*#__PURE__*/ React.createElement('path', {
        d:
          'M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z',
      })
    )
  )
}

var PlusSquareO = function PlusSquareO(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends({}, props, {
      viewBox: '64 -65 897 897',
    }),
    /*#__PURE__*/ React.createElement(
      'g',
      null,
      /*#__PURE__*/ React.createElement('path', {
        d:
          'M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z',
      })
    )
  )
}

var EyeO = function EyeO(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends({}, props, {
      viewBox: '61 51 902 666',
    }),
    /*#__PURE__*/ React.createElement(
      'g',
      null,
      /*#__PURE__*/ React.createElement('path', {
        d:
          'M963 384q0 14 -21 62q-26 65 -61 109q-57 71 -139 112q-99 50 -230 50t-231 -50q-80 -41 -138 -112q-34 -43 -61 -109q-21 -48 -21 -62v0v0v0v0q0 -14 21 -62q27 -66 61 -109q57 -71 139 -112q100 -50 230 -50t230 50q81 41 139 112q35 44 62 109q20 48 20 62v0v0v0v0z M889 384q-25 -77 -64 -126h-1q-46 -59 -114 -93q-85 -42 -198.5 -42t-198.5 42q-67 34 -114 93q-40 49 -65 126q25 77 65 126q47 59 114 93q85 43 199 43t198 -43q67 -33 114 -93q40 -49 65 -126zM512 558q-72 0 -122.5 -50.5t-50.5 -122.5t50.5 -122.5t122.5 -50.5 t122.5 50.5t50.5 122.5t-50.5 122.5t-122.5 50.5zM614 385q0 -42 -30 -72t-72 -30t-72 30t-30 72t30 72t72 30t72 -30t30 -72z',
      })
    )
  )
}

var CloseSquareO = function CloseSquareO(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends({}, props, {
      viewBox: '64 -65 897 897',
    }),
    /*#__PURE__*/ React.createElement(
      'g',
      null,
      /*#__PURE__*/ React.createElement('path', {
        d:
          'M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z',
      })
    )
  )
}

var Icons = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  PlusSquareO: PlusSquareO,
  MinusSquareO: MinusSquareO,
  CloseSquareO: CloseSquareO,
  EyeO: EyeO,
})

/*
  tree: {
    position: 'relative',
    padding: '4px 0px 0px 0px',
    //textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    //overflow: 'hidden',
    verticalAlign: 'middle',
  },*/

var styles = {
  tree: {
    position: 'relative',
    padding: '4px 0px 0px 0px',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
  },
  toggle: {
    width: '1em',
    height: '1em',
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle',
  },
  type: {
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    fontSize: '0.6em',
    verticalAlign: 'middle',
  },
  contents: {
    willChange: 'transform, opacity, height',
    marginLeft: 6,
    padding: '4px 0px 0px 14px',
    borderLeft: '1px dashed rgba(255,255,255,0.4)',
  },
}

var Contents = function Contents(_ref) {
  var children = _ref.children,
    style = _objectWithoutPropertiesLoose(_ref, ['children'])

  return /*#__PURE__*/ React.createElement(
    reactSpring.animated.div,
    {
      style: _extends({}, style, {}, styles.contents),
    },
    children
  )
}

var Tree = /*#__PURE__*/ (function(_React$PureComponent) {
  _inheritsLoose(Tree, _React$PureComponent)

  function Tree(props) {
    var _this

    _this = _React$PureComponent.call(this) || this

    _this.toggle = function() {
      if (_this.props.onToggle) _this.props.onToggle(!_this.state.open)
      return (
        _this.props.children &&
        _this.setState(function(state) {
          return {
            open: !state.open,
            immediate: false,
          }
        })
      )
    }

    _this.toggleVisibility = function() {
      _this.setState(
        function(state) {
          return {
            visible: !state.visible,
            immediate: true,
          }
        },
        function() {
          return _this.props.onClick && _this.props.onClick(_this.state.visible)
        }
      )
    }

    _this.state = {
      open: props.open,
      visible: props.visible,
      immediate: false,
    }
    return _this
  }

  var _proto = Tree.prototype

  _proto.componentWillReceiveProps = function componentWillReceiveProps(props) {
    var _this2 = this

    this.setState(function(state) {
      return ['open', 'visible'].reduce(function(acc, val) {
        var _extends2

        return _this2.props[val] !== props[val]
          ? _extends(
              {},
              acc,
              ((_extends2 = {}), (_extends2[val] = props[val]), _extends2)
            )
          : acc
      }, {})
    })
  }

  _proto.render = function render() {
    var _this$state = this.state,
      open = _this$state.open,
      visible = _this$state.visible,
      immediate = _this$state.immediate
    var _this$props = this.props,
      children = _this$props.children,
      content = _this$props.content,
      type = _this$props.type,
      style = _this$props.style,
      canHide = _this$props.canHide,
      springConfig = _this$props.springConfig,
      contentStyle = _this$props.contentStyle
    Object.assign(styles.contents, contentStyle)
    var Icon =
      Icons[(children ? (open ? 'Minus' : 'Plus') : 'Close') + 'SquareO']
    return /*#__PURE__*/ React.createElement(
      'div',
      {
        style: _extends({}, styles.tree, {}, style),
        className: 'treeview',
      },
      /*#__PURE__*/ React.createElement(Icon, {
        className: 'toggle',
        style: _extends({}, styles.toggle, {
          opacity: children ? 1 : 0.3,
        }),
        onClick: this.toggle,
      }),
      /*#__PURE__*/ React.createElement(
        'span',
        {
          style: _extends({}, styles.type, {
            marginRight: type ? 10 : 0,
          }),
        },
        type
      ),
      canHide &&
        /*#__PURE__*/ React.createElement(EyeO, {
          className: 'toggle',
          style: _extends({}, styles.toggle, {
            opacity: visible ? 1 : 0.4,
          }),
          onClick: this.toggleVisibility,
        }),
      /*#__PURE__*/ React.createElement(
        'span',
        {
          style: {
            verticalAlign: 'middle',
          },
        },
        content
      ),
      /*#__PURE__*/ React.createElement(
        reactSpring.Spring,
        _extends(
          {
            native: true,
            immediate: immediate,
            config: _extends({}, reactSpring.config['default'], {
              restSpeedThreshold: 1,
              restDisplacementThreshold: 0.01,
            }),
            from: {
              opacity: 0,
              transform: 'translate3d(20px,-50%,0) scale(1, 0)',
              width: 10,
              overflow: 'hidden',
              display: 'none',
            },
            to: {
              display: open ? 'block' : 'none',
              width: open ? 'auto' : 10,
              overflow: open ? 'visible' : 'hidden',
              opacity: open ? 1 : 0,
              transform: open
                ? 'translate3d(0px,0,0) scale(1,1)'
                : 'translate3d(0px,-50%, 0) scale(1,0)',
            },
          },
          springConfig && springConfig(open),
          {
            render: Contents,
          }
        ),
        children
      )
    )
  }

  return Tree
})(React.PureComponent)

Tree.defaultProps = {
  open: false,
  visible: true,
  canHide: false,
}
Tree.propTypes = {
  open: PropTypes.bool,
  visible: PropTypes.bool,
  canHide: PropTypes.bool,
  content: PropTypes.node,
  springConfig: PropTypes.func,
  onToggle: PropTypes.func,
}

module.exports = Tree
