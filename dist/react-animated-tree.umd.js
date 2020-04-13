!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t(
        require('@babel/runtime/helpers/extends'),
        require('react'),
        require('@babel/runtime/helpers/inheritsLoose'),
        require('@babel/runtime/helpers/objectWithoutPropertiesLoose'),
        require('prop-types'),
        require('react-spring')
      ))
    : 'function' == typeof define && define.amd
    ? define([
        '@babel/runtime/helpers/extends',
        'react',
        '@babel/runtime/helpers/inheritsLoose',
        '@babel/runtime/helpers/objectWithoutPropertiesLoose',
        'prop-types',
        'react-spring',
      ], t)
    : (e.ReactAnimatedTree = t(
        null,
        e.React,
        null,
        null,
        e.PropTypes,
        e.ReactSpring
      ))
})(this, function(d, h, r, i, e, q) {
  'use strict'
  ;(d = d && d.hasOwnProperty('default') ? d.default : d),
    (h = h && h.hasOwnProperty('default') ? h.default : h),
    (r = r && r.hasOwnProperty('default') ? r.default : r),
    (i = i && i.hasOwnProperty('default') ? i.default : i),
    (e = e && e.hasOwnProperty('default') ? e.default : e)
  function m(e) {
    return h.createElement(
      'svg',
      d({}, e, { viewBox: '61 51 902 666' }),
      h.createElement(
        'g',
        null,
        h.createElement('path', {
          d:
            'M963 384q0 14 -21 62q-26 65 -61 109q-57 71 -139 112q-99 50 -230 50t-231 -50q-80 -41 -138 -112q-34 -43 -61 -109q-21 -48 -21 -62v0v0v0v0q0 -14 21 -62q27 -66 61 -109q57 -71 139 -112q100 -50 230 -50t230 50q81 41 139 112q35 44 62 109q20 48 20 62v0v0v0v0z M889 384q-25 -77 -64 -126h-1q-46 -59 -114 -93q-85 -42 -198.5 -42t-198.5 42q-67 34 -114 93q-40 49 -65 126q25 77 65 126q47 59 114 93q85 43 199 43t198 -43q67 -33 114 -93q40 -49 65 -126zM512 558q-72 0 -122.5 -50.5t-50.5 -122.5t50.5 -122.5t122.5 -50.5 t122.5 50.5t50.5 122.5t-50.5 122.5t-122.5 50.5zM614 385q0 -42 -30 -72t-72 -30t-72 30t-30 72t30 72t72 30t72 -30t30 -72z',
        })
      )
    )
  }
  function f(e) {
    var t = e.children,
      n = i(e, ['children'])
    return h.createElement(q.animated.div, { style: d({}, n, {}, E) }, t)
  }
  var g = Object.freeze({
      PlusSquareO: function(e) {
        return h.createElement(
          'svg',
          d({}, e, { viewBox: '64 -65 897 897' }),
          h.createElement(
            'g',
            null,
            h.createElement('path', {
              d:
                'M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z',
            })
          )
        )
      },
      MinusSquareO: function(e) {
        return h.createElement(
          'svg',
          d({}, e, { viewBox: '64 -65 897 897' }),
          h.createElement(
            'g',
            null,
            h.createElement('path', {
              d:
                'M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z',
            })
          )
        )
      },
      CloseSquareO: function(e) {
        return h.createElement(
          'svg',
          d({}, e, { viewBox: '64 -65 897 897' }),
          h.createElement(
            'g',
            null,
            h.createElement('path', {
              d:
                'M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z',
            })
          )
        )
      },
      EyeO: m,
    }),
    b = {
      position: 'relative',
      padding: '4px 0px 0px 0px',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
    },
    y = {
      width: '1em',
      height: '1em',
      marginRight: 10,
      cursor: 'pointer',
      verticalAlign: 'middle',
    },
    x = {
      textTransform: 'uppercase',
      fontFamily: 'monospace',
      fontSize: '0.6em',
      verticalAlign: 'middle',
    },
    E = {
      willChange: 'transform, opacity, height',
      marginLeft: 6,
      padding: '4px 0px 0px 14px',
      borderLeft: '1px dashed rgba(255,255,255,0.4)',
    },
    t = (function(n) {
      function e(e) {
        var t
        return (
          ((t = n.call(this) || this).toggle = function() {
            return (
              t.props.onToggle && t.props.onToggle(),
              t.props.children &&
                t.setState(function(e) {
                  return { open: !e.open, immediate: !1 }
                })
            )
          }),
          (t.toggleVisibility = function() {
            t.setState(
              function(e) {
                return { visible: !e.visible, immediate: !0 }
              },
              function() {
                return t.props.onClick && t.props.onClick(t.state.visible)
              }
            )
          }),
          (t.state = { open: e.open, visible: e.visible, immediate: !1 }),
          t
        )
      }
      r(e, n)
      var t = e.prototype
      return (
        (t.componentWillReceiveProps = function(r) {
          var i = this
          this.setState(function(e) {
            return ['open', 'visible'].reduce(function(e, t) {
              var n
              return i.props[t] !== r[t]
                ? d({}, e, (((n = {})[t] = r[t]), n))
                : e
            }, {})
          })
        }),
        (t.render = function() {
          var e = this.state,
            t = e.open,
            n = e.visible,
            r = e.immediate,
            i = this.props,
            l = i.children,
            o = i.content,
            a = i.type,
            s = i.style,
            p = i.canHide,
            c = i.springConfig,
            u = i.contentStyle
          Object.assign(E, u)
          var v = g[(l ? (t ? 'Minus' : 'Plus') : 'Close') + 'SquareO']
          return h.createElement(
            'div',
            { style: d({}, b, {}, s), className: 'treeview' },
            h.createElement(v, {
              className: 'toggle',
              style: d({}, y, { opacity: l ? 1 : 0.3 }),
              onClick: this.toggle,
            }),
            h.createElement(
              'span',
              { style: d({}, x, { marginRight: a ? 10 : 0 }) },
              a
            ),
            p &&
              h.createElement(m, {
                className: 'toggle',
                style: d({}, y, { opacity: n ? 1 : 0.4 }),
                onClick: this.toggleVisibility,
              }),
            h.createElement('span', { style: { verticalAlign: 'middle' } }, o),
            h.createElement(
              q.Spring,
              d(
                {
                  native: !0,
                  immediate: r,
                  config: d({}, q.config.default, {
                    restSpeedThreshold: 1,
                    restDisplacementThreshold: 0.01,
                  }),
                  from: {
                    height: 0,
                    opacity: 0,
                    transform: 'translate3d(20px,0,0)',
                    width: 10,
                    overflow: 'hidden',
                  },
                  to: {
                    height: t ? 'auto' : 0,
                    width: t ? 'auto' : 10,
                    overflow: t ? 'visible' : 'hidden',
                    opacity: t ? 1 : 0,
                    transform: t
                      ? 'translate3d(0px,0,0)'
                      : 'translate3d(20px,0,0)',
                  },
                },
                c && c(t),
                { render: f }
              ),
              l
            )
          )
        }),
        e
      )
    })(h.PureComponent)
  return (
    (t.defaultProps = { open: !1, visible: !0, canHide: !1 }),
    (t.propTypes = {
      open: e.bool,
      visible: e.bool,
      canHide: e.bool,
      content: e.node,
      springConfig: e.func,
      onToggle: e.func,
    }),
    t
  )
})
