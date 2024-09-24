import K, { useState as Se, useEffect as Ce } from "react";
var ne = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Er() {
  if (Pe) return W;
  Pe = 1;
  var l = K, o = Symbol.for("react.element"), i = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(x, m, k) {
    var b, h = {}, O = null, Y = null;
    k !== void 0 && (O = "" + k), m.key !== void 0 && (O = "" + m.key), m.ref !== void 0 && (Y = m.ref);
    for (b in m) v.call(m, b) && !g.hasOwnProperty(b) && (h[b] = m[b]);
    if (x && x.defaultProps) for (b in m = x.defaultProps, m) h[b] === void 0 && (h[b] = m[b]);
    return { $$typeof: o, type: x, key: O, ref: Y, props: h, _owner: d.current };
  }
  return W.Fragment = i, W.jsx = j, W.jsxs = j, W;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function xr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var l = K, o = Symbol.for("react.element"), i = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), x = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ae = Symbol.iterator, Ne = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Ne];
      return typeof r == "function" ? r : null;
    }
    var P = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ye = !1, Ve = !1, Me = !1, Ue = !1, Be = !1, ie;
    ie = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === g || Be || e === d || e === k || e === b || Ue || e === Y || Ye || Ve || Me || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === h || e.$$typeof === j || e.$$typeof === x || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case i:
          return "Portal";
        case g:
          return "Profiler";
        case d:
          return "StrictMode";
        case k:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return oe(r) + ".Consumer";
          case j:
            var t = e;
            return oe(t._context) + ".Provider";
          case m:
            return Ke(e, e.render, "ForwardRef");
          case h:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case O: {
            var c = e, f = c._payload, u = c._init;
            try {
              return w(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, I = 0, se, ue, le, ce, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Je() {
      {
        if (I === 0) {
          se = console.log, ue = console.info, le = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function qe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: se
            }),
            info: S({}, e, {
              value: ue
            }),
            warn: S({}, e, {
              value: le
            }),
            error: S({}, e, {
              value: ce
            }),
            group: S({}, e, {
              value: fe
            }),
            groupCollapsed: S({}, e, {
              value: de
            }),
            groupEnd: S({}, e, {
              value: ve
            })
          });
        }
        I < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, G;
    function V(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            G = a && a[1] || "";
          }
        return `
` + G + e;
      }
    }
    var z = !1, M;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ge();
    }
    function ge(e, r) {
      if (!e || z)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      z = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = q.current, q.current = null, Je();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (_) {
              a = _;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (_) {
              a = _;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            a = _;
          }
          e();
        }
      } catch (_) {
        if (_ && a && typeof _.stack == "string") {
          for (var s = _.stack.split(`
`), R = a.stack.split(`
`), p = s.length - 1, y = R.length - 1; p >= 1 && y >= 0 && s[p] !== R[y]; )
            y--;
          for (; p >= 1 && y >= 0; p--, y--)
            if (s[p] !== R[y]) {
              if (p !== 1 || y !== 1)
                do
                  if (p--, y--, y < 0 || s[p] !== R[y]) {
                    var T = `
` + s[p].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, T), T;
                  }
                while (p >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        z = !1, q.current = f, qe(), Error.prepareStackTrace = c;
      }
      var F = e ? e.displayName || e.name : "", C = F ? V(F) : "";
      return typeof e == "function" && M.set(e, C), C;
    }
    function ze(e, r, t) {
      return ge(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Xe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case k:
          return V("Suspense");
        case b:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return ze(e.render);
          case h:
            return U(e.type, r, t);
          case O: {
            var a = e, c = a._payload, f = a._init;
            try {
              return U(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, he = {}, ye = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ze(e, r, t, a, c) {
      {
        var f = Function.call.bind($);
        for (var u in e)
          if (f(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var R = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              s = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              s = p;
            }
            s && !(s instanceof Error) && (B(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof s), B(null)), s instanceof Error && !(s.message in he) && (he[s.message] = !0, B(c), E("Failed %s type: %s", t, s.message), B(null));
          }
      }
    }
    var Qe = Array.isArray;
    function X(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function be(e) {
      if (rr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), me(e);
    }
    var N = P.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, xe, Z;
    Z = {};
    function nr(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = w(N.current.type);
        Z[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(N.current.type), e.ref), Z[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, a, c, f, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function lr(e, r, t, a, c) {
      {
        var f, u = {}, s = null, R = null;
        t !== void 0 && (be(t), s = "" + t), ar(r) && (be(r.key), s = "" + r.key), nr(r) && (R = r.ref, ir(r, c));
        for (f in r)
          $.call(r, f) && !tr.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            u[f] === void 0 && (u[f] = p[f]);
        }
        if (s || R) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && or(u, y), R && sr(u, y);
        }
        return ur(e, s, R, c, a, N.current, u);
      }
    }
    var Q = P.ReactCurrentOwner, Re = P.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function _e() {
      {
        if (Q.current) {
          var e = w(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      return "";
    }
    var je = {};
    function fr(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (je[t])
          return;
        je[t] = !0;
        var a = "";
        e && e._owner && e._owner !== Q.current && (a = " It was passed a child from " + w(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), A(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            re(a) && Te(a, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = We(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), u; !(u = f.next()).done; )
              re(u.value) && Te(u.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          Ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var c = w(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            A(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var ke = {};
    function Oe(e, r, t, a, c, f) {
      {
        var u = He(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = cr();
          R ? s += R : s += _e();
          var p;
          e === null ? p = "null" : X(e) ? p = "array" : e !== void 0 && e.$$typeof === o ? (p = "<" + (w(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, s);
        }
        var y = lr(e, r, t, c, f);
        if (y == null)
          return y;
        if (u) {
          var T = r.children;
          if (T !== void 0)
            if (a)
              if (X(T)) {
                for (var F = 0; F < T.length; F++)
                  we(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(T, e);
        }
        if ($.call(r, "key")) {
          var C = w(e), _ = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), te = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[C + te]) {
            var mr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, C, mr, C), ke[C + te] = !0;
          }
        }
        return e === v ? vr(y) : dr(y), y;
      }
    }
    function pr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var hr = gr, yr = pr;
    L.Fragment = v, L.jsx = hr, L.jsxs = yr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ne.exports = Er() : ne.exports = xr();
var n = ne.exports;
const Fe = ({ content: l, caption: o = "" }) => /* @__PURE__ */ n.jsxs("figure", { className: "card", children: [
  l,
  o && /* @__PURE__ */ n.jsx("figcaption", { children: o })
] }), _r = ({ title: l, content: o }) => /* @__PURE__ */ n.jsxs("details", { className: "collapse", children: [
  /* @__PURE__ */ n.jsx("summary", { children: l }),
  /* @__PURE__ */ n.jsx("figure", { children: o })
] }), D = ({ name: l, cat: o = "brands", option: i = "2x", isHidden: v = !0, event: d = void 0 }) => /* @__PURE__ */ n.jsx(
  "i",
  {
    ...d ? { className: `fa-${o} fa-${l} fa-${i}` } : { className: `fa-${o} fa-${l} fa-${i} fa-fw` },
    "aria-hidden": v,
    ...d ? { onClick: (g) => d(g) } : {},
    ...d ? { onKeyDown: (g) => d(g) } : {},
    ...d ? { tabIndex: 0 } : {}
  }
), De = ({ url: l, alt: o, design: i = "image" }) => /* @__PURE__ */ n.jsx(
  "img",
  {
    src: l,
    alt: o,
    className: i,
    loading: "lazy"
  }
), $e = ({ content: l, url: o, design: i = "link", label: v = "", title: d = "" }) => {
  const g = o.startsWith("https");
  return /* @__PURE__ */ n.jsx(
    "a",
    {
      href: o,
      className: `${i}`,
      ...v ? { "aria-label": v } : {},
      ...d ? { title: d } : {},
      ...g ? { rel: "noopener noreferrer" } : {},
      ...g ? { target: "_blank" } : {},
      children: l
    }
  );
}, J = ({ array: l }) => /* @__PURE__ */ n.jsx("ul", { className: "list", children: l.map(
  (o, i) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsx(n.Fragment, { children: o }) }, i)
) }), H = ({ link: l, ico: o, txt: i }) => {
  const { url: v, label: d } = l, { name: g, cat: j, option: x } = o;
  return /* @__PURE__ */ n.jsx(
    $e,
    {
      url: v,
      label: d,
      design: "link button",
      content: /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(
          D,
          {
            name: g,
            cat: j,
            option: x,
            isHidden: !1,
            event: void 0
          }
        ),
        i && /* @__PURE__ */ n.jsx("b", { children: i })
      ] })
    }
  );
}, jr = ({ links: l }) => /* @__PURE__ */ n.jsx("footer", { className: "footer", children: /* @__PURE__ */ n.jsx(
  J,
  {
    array: l.map(
      (o) => /* @__PURE__ */ n.jsx(
        H,
        {
          link: o.link,
          ico: o.ico,
          txt: ""
        }
      )
    )
  }
) }), Ie = ({ txt: l, lvl: o = 4, sub: i = "", ico: v = void 0 }) => {
  o = Number(o), (o < 1 || o > 3) && (o = 4);
  const d = `h${o}`;
  return /* @__PURE__ */ n.jsxs("hgroup", { className: "title", children: [
    v && /* @__PURE__ */ n.jsx("p", { children: K.createElement(D, v) }),
    K.createElement(d, {}, l),
    i && /* @__PURE__ */ n.jsx("p", { children: i })
  ] });
}, Tr = ({ array: l }) => {
  const o = (i, v) => {
    var g, j;
    const d = {
      url: i.url,
      title: i.detail ? i.detail : void 0,
      design: "link",
      content: /* @__PURE__ */ n.jsx(
        Fe,
        {
          caption: i.caption && /* @__PURE__ */ n.jsx(Ie, { txt: i.caption.title }),
          content: i.image && /* @__PURE__ */ n.jsx(De, { url: i.image.url, alt: i.image.alt })
        }
      )
    };
    return i.name ? (d.content = /* @__PURE__ */ n.jsx(n.Fragment, { children: i.name }), d.design = "btn") : i.caption && i.caption.technos && (d.content = /* @__PURE__ */ n.jsx(
      Fe,
      {
        caption: /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx(Ie, { txt: i.caption.title }),
          /* @__PURE__ */ n.jsx(
            J,
            {
              array: i.caption.technos.map(
                (x) => /* @__PURE__ */ n.jsx(D, { name: x, option: "lg", isHidden: !1 })
              )
            }
          )
        ] }),
        content: /* @__PURE__ */ n.jsx(De, { url: ((g = i.image) == null ? void 0 : g.url) ?? "", alt: ((j = i.image) == null ? void 0 : j.alt) ?? "" })
      }
    )), /* @__PURE__ */ n.jsx($e, { ...d }, v);
  };
  return /* @__PURE__ */ n.jsx(J, { array: l.map(o) });
}, wr = ({ brand: l, links: o, contact: i }) => /* @__PURE__ */ n.jsxs("nav", { className: "navbar", children: [
  /* @__PURE__ */ n.jsx(
    H,
    {
      link: l.link,
      ico: l.ico,
      txt: ""
    }
  ),
  /* @__PURE__ */ n.jsx(
    J,
    {
      array: o.map(
        (v) => /* @__PURE__ */ n.jsx(
          H,
          {
            link: v.link,
            ico: v.ico,
            txt: v.txt
          }
        )
      )
    }
  ),
  /* @__PURE__ */ n.jsx(
    H,
    {
      link: i.link,
      ico: i.ico,
      txt: ""
    }
  )
] }), kr = ({ array: l, timer: o = 5e3 }) => {
  const i = l.length, [v, d] = Se(0), g = () => d((h) => (h + 1) % i), j = () => d((h) => (h - 1 + i) % i);
  //! ********** AUTOPLAY **********
  let [x, m] = Se(o !== 0);
  const k = () => m((h) => !h);
  Ce(() => {
    let h;
    return x && (h = setInterval(() => g(), o)), () => clearInterval(h);
  }, [x, i]);
  //! ********** KEYBOARD EVENTS **********
  const b = (h) => {
    switch (h.key) {
      case "ArrowLeft":
        j();
        break;
      case "ArrowRight":
        g();
        break;
      case "a":
      case "A":
      case "p":
      case "P":
        k();
        break;
    }
  };
  Ce(() => (document.addEventListener("keydown", b), () => {
    document.removeEventListener("keydown", b);
  }), []);
  //! ********** RENDER **********
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      className: "slider",
      role: "region",
      "aria-label": "slider",
      children: [
        l[v],
        i > 1 && /* @__PURE__ */ n.jsxs("nav", { children: [
          /* @__PURE__ */ n.jsx(
            D,
            {
              name: "chevron-left",
              cat: "solid",
              isHidden: !1,
              event: j
            }
          ),
          /* @__PURE__ */ n.jsx(
            D,
            {
              name: "chevron-right",
              cat: "solid",
              isHidden: !1,
              event: g
            }
          ),
          /* @__PURE__ */ n.jsx(
            D,
            {
              name: x ? "pause" : "play",
              cat: "solid",
              isHidden: !1,
              event: k
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("progress", { value: (v + 1) / i })
      ]
    }
  );
};
export {
  H as Button,
  Fe as Card,
  _r as Collapse,
  jr as Footer,
  Tr as Gallery,
  D as Icon,
  De as Image,
  $e as Link,
  J as List,
  wr as Navbar,
  kr as Slider,
  Ie as Title
};
//# sourceMappingURL=index.es.js.map
