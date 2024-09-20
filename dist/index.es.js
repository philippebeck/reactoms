import H, { useState as Oe, useEffect as Se } from "react";
var re = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function br() {
  if (Ce) return N;
  Ce = 1;
  var d = H, s = Symbol.for("react.element"), a = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(R, y, O) {
    var b, h = {}, S = null, Y = null;
    O !== void 0 && (S = "" + O), y.key !== void 0 && (S = "" + y.key), y.ref !== void 0 && (Y = y.ref);
    for (b in y) v.call(y, b) && !g.hasOwnProperty(b) && (h[b] = y[b]);
    if (R && R.defaultProps) for (b in y = R.defaultProps, y) h[b] === void 0 && (h[b] = y[b]);
    return { $$typeof: s, type: R, key: S, ref: Y, props: h, _owner: f.current };
  }
  return N.Fragment = a, N.jsx = j, N.jsxs = j, N;
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
var Pe;
function Er() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var d = H, s = Symbol.for("react.element"), a = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), R = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), te = Symbol.iterator, $e = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[$e];
      return typeof r == "function" ? r : null;
    }
    var k = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var c = t.map(function(u) {
          return String(u);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Le = !1, Ye = !1, Ve = !1, Me = !1, Ue = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === g || Ue || e === f || e === O || e === b || Me || e === Y || Le || Ye || Ve || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === h || e.$$typeof === j || e.$$typeof === R || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function He(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ae(e) {
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
        case a:
          return "Portal";
        case g:
          return "Profiler";
        case f:
          return "StrictMode";
        case O:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ae(r) + ".Consumer";
          case j:
            var t = e;
            return ae(t._context) + ".Provider";
          case y:
            return He(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case S: {
            var l = e, c = l._payload, u = l._init;
            try {
              return w(u(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, I = 0, ie, oe, se, ue, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ke() {
      {
        if (I === 0) {
          ie = console.log, oe = console.info, se = console.warn, ue = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
    function Je() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ie
            }),
            info: C({}, e, {
              value: oe
            }),
            warn: C({}, e, {
              value: se
            }),
            error: C({}, e, {
              value: ue
            }),
            group: C({}, e, {
              value: le
            }),
            groupCollapsed: C({}, e, {
              value: ce
            }),
            groupEnd: C({}, e, {
              value: fe
            })
          });
        }
        I < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = k.ReactCurrentDispatcher, J;
    function V(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, M;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      M = new qe();
    }
    function ve(e, r) {
      if (!e || q)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = K.current, K.current = null, Ke();
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
            } catch (x) {
              n = x;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (x) {
              n = x;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            n = x;
          }
          e();
        }
      } catch (x) {
        if (x && n && typeof x.stack == "string") {
          for (var o = x.stack.split(`
`), _ = n.stack.split(`
`), p = o.length - 1, m = _.length - 1; p >= 1 && m >= 0 && o[p] !== _[m]; )
            m--;
          for (; p >= 1 && m >= 0; p--, m--)
            if (o[p] !== _[m]) {
              if (p !== 1 || m !== 1)
                do
                  if (p--, m--, m < 0 || o[p] !== _[m]) {
                    var T = `
` + o[p].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, T), T;
                  }
                while (p >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        q = !1, K.current = c, Je(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", P = F ? V(F) : "";
      return typeof e == "function" && M.set(e, P), P;
    }
    function Ge(e, r, t) {
      return ve(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, ze(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case O:
          return V("Suspense");
        case b:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Ge(e.render);
          case h:
            return U(e.type, r, t);
          case S: {
            var n = e, l = n._payload, c = n._init;
            try {
              return U(c(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, pe = {}, ge = k.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Xe(e, r, t, n, l) {
      {
        var c = Function.call.bind($);
        for (var u in e)
          if (c(e, u)) {
            var o = void 0;
            try {
              if (typeof e[u] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              o = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              o = p;
            }
            o && !(o instanceof Error) && (B(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof o), B(null)), o instanceof Error && !(o.message in pe) && (pe[o.message] = !0, B(l), E("Failed %s type: %s", t, o.message), B(null));
          }
      }
    }
    var Ze = Array.isArray;
    function G(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function me(e) {
      if (er(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), he(e);
    }
    var W = k.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, z;
    z = {};
    function tr(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = w(W.current.type);
        z[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(W.current.type), e.ref), z[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          ye || (ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          be || (be = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, n, l, c, u) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ur(e, r, t, n, l) {
      {
        var c, u = {}, o = null, _ = null;
        t !== void 0 && (me(t), o = "" + t), nr(r) && (me(r.key), o = "" + r.key), tr(r) && (_ = r.ref, ar(r, l));
        for (c in r)
          $.call(r, c) && !rr.hasOwnProperty(c) && (u[c] = r[c]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (c in p)
            u[c] === void 0 && (u[c] = p[c]);
        }
        if (o || _) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ir(u, m), _ && or(u, m);
        }
        return sr(e, o, _, l, n, W.current, u);
      }
    }
    var X = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Re() {
      {
        if (X.current) {
          var e = w(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var _e = {};
    function cr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + w(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && xe(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = We(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), u; !(u = c.next()).done; )
              Q(u.value) && xe(u.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Xe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var l = w(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Te = {};
    function we(e, r, t, n, l, c) {
      {
        var u = Be(e);
        if (!u) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = lr();
          _ ? o += _ : o += Re();
          var p;
          e === null ? p = "null" : G(e) ? p = "array" : e !== void 0 && e.$$typeof === s ? (p = "<" + (w(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, o);
        }
        var m = ur(e, r, t, l, c);
        if (m == null)
          return m;
        if (u) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (G(T)) {
                for (var F = 0; F < T.length; F++)
                  je(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(T, e);
        }
        if ($.call(r, "key")) {
          var P = w(e), x = Object.keys(r).filter(function(yr) {
            return yr !== "key";
          }), ee = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[P + ee]) {
            var mr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, P, mr, P), Te[P + ee] = !0;
          }
        }
        return e === v ? dr(m) : fr(m), m;
      }
    }
    function vr(e, r, t) {
      return we(e, r, t, !0);
    }
    function pr(e, r, t) {
      return we(e, r, t, !1);
    }
    var gr = pr, hr = vr;
    L.Fragment = v, L.jsx = gr, L.jsxs = hr;
  }()), L;
}
process.env.NODE_ENV === "production" ? re.exports = br() : re.exports = Er();
var i = re.exports;
const ke = ({ content: d, caption: s = "" }) => /* @__PURE__ */ i.jsxs("figure", { className: "card", children: [
  d,
  s && /* @__PURE__ */ i.jsx("figcaption", { children: s })
] }), _r = ({ title: d, content: s }) => /* @__PURE__ */ i.jsxs("details", { className: "collapse", children: [
  /* @__PURE__ */ i.jsx("summary", { children: d }),
  /* @__PURE__ */ i.jsx("figure", { children: s })
] }), D = ({ name: d, cat: s = "brands", option: a = "2x", isHidden: v = !0, event: f = void 0 }) => /* @__PURE__ */ i.jsx(
  "i",
  {
    ...f ? { className: `fa-${s} fa-${d} fa-${a}` } : { className: `fa-${s} fa-${d} fa-${a} fa-fw` },
    "aria-hidden": v,
    ...f ? { onClick: (g) => f(g) } : {},
    ...f ? { onKeyDown: (g) => f(g) } : {},
    ...f ? { tabIndex: 0 } : {}
  }
), Ae = ({ url: d, alt: s, design: a = "image" }) => /* @__PURE__ */ i.jsx(
  "img",
  {
    src: d,
    alt: s,
    className: a,
    loading: "lazy"
  }
), Ie = ({ content: d, url: s, design: a = "link", label: v = "", title: f = "" }) => {
  const g = s.startsWith("https");
  return /* @__PURE__ */ i.jsx(
    "a",
    {
      href: s,
      className: `${a}`,
      ...v ? { "aria-label": v } : {},
      ...f ? { title: f } : {},
      ...g ? { rel: "noopener noreferrer" } : {},
      ...g ? { target: "_blank" } : {},
      children: d
    }
  );
}, Fe = ({ array: d }) => /* @__PURE__ */ i.jsx("ul", { className: "list", children: d.map(
  (s, a) => /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx(i.Fragment, { children: s }) }, a)
) }), xr = ({ link: d, ico: s, txt: a }) => {
  const { url: v, label: f } = d, { name: g, cat: j, option: R } = s;
  return /* @__PURE__ */ i.jsx(
    Ie,
    {
      url: v,
      label: f,
      design: "link button",
      content: /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(
          D,
          {
            name: g,
            cat: j,
            option: R,
            isHidden: !1,
            event: void 0
          }
        ),
        a && /* @__PURE__ */ i.jsx("b", { children: a })
      ] })
    }
  );
}, De = ({ txt: d, lvl: s = 4, sub: a = "", ico: v = void 0 }) => {
  s = Number(s), (s < 1 || s > 3) && (s = 4);
  const f = `h${s}`;
  return /* @__PURE__ */ i.jsxs("hgroup", { className: "title", children: [
    v && /* @__PURE__ */ i.jsx("p", { children: H.createElement(D, v) }),
    H.createElement(f, {}, d),
    a && /* @__PURE__ */ i.jsx("p", { children: a })
  ] });
}, jr = ({ array: d }) => {
  const s = (a, v) => {
    var g, j;
    const f = {
      url: a.url,
      title: a.detail ? a.detail : void 0,
      design: "link",
      content: /* @__PURE__ */ i.jsx(
        ke,
        {
          caption: a.caption && /* @__PURE__ */ i.jsx(De, { txt: a.caption.title }),
          content: a.image && /* @__PURE__ */ i.jsx(Ae, { url: a.image.url, alt: a.image.alt })
        }
      )
    };
    return a.name ? (f.content = /* @__PURE__ */ i.jsx(i.Fragment, { children: a.name }), f.design = "btn") : a.caption && a.caption.technos && (f.content = /* @__PURE__ */ i.jsx(
      ke,
      {
        caption: /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(De, { txt: a.caption.title }),
          /* @__PURE__ */ i.jsx(
            Fe,
            {
              array: a.caption.technos.map(
                (R) => /* @__PURE__ */ i.jsx(D, { name: R, option: "lg", isHidden: !1 })
              )
            }
          )
        ] }),
        content: /* @__PURE__ */ i.jsx(Ae, { url: ((g = a.image) == null ? void 0 : g.url) ?? "", alt: ((j = a.image) == null ? void 0 : j.alt) ?? "" })
      }
    )), /* @__PURE__ */ i.jsx(Ie, { ...f }, v);
  };
  return /* @__PURE__ */ i.jsx(Fe, { array: d.map(s) });
}, Tr = ({ array: d, timer: s = 5e3 }) => {
  const a = d.length, [v, f] = Oe(0), g = () => f((h) => (h + 1) % a), j = () => f((h) => (h - 1 + a) % a);
  //! ********** AUTOPLAY **********
  let [R, y] = Oe(s !== 0);
  const O = () => y((h) => !h);
  Se(() => {
    let h;
    return R && (h = setInterval(() => g(), s)), () => clearInterval(h);
  }, [R, a]);
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
        O();
        break;
    }
  };
  Se(() => (document.addEventListener("keydown", b), () => {
    document.removeEventListener("keydown", b);
  }), []);
  //! ********** RENDER **********
  return /* @__PURE__ */ i.jsxs(
    "figure",
    {
      className: "slider",
      role: "region",
      "aria-label": "slider",
      children: [
        d[v],
        a > 1 && /* @__PURE__ */ i.jsxs("nav", { children: [
          /* @__PURE__ */ i.jsx(
            D,
            {
              name: "chevron-left",
              cat: "solid",
              isHidden: !1,
              event: j
            }
          ),
          /* @__PURE__ */ i.jsx(
            D,
            {
              name: "chevron-right",
              cat: "solid",
              isHidden: !1,
              event: g
            }
          ),
          /* @__PURE__ */ i.jsx(
            D,
            {
              name: R ? "pause" : "play",
              cat: "solid",
              isHidden: !1,
              event: O
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("progress", { value: (v + 1) / a })
      ]
    }
  );
};
export {
  xr as Button,
  ke as Card,
  _r as Collapse,
  jr as Gallery,
  D as Icon,
  Ae as Image,
  Ie as Link,
  Fe as List,
  Tr as Slider,
  De as Title
};
//# sourceMappingURL=index.es.js.map
