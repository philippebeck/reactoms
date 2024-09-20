import H, { useState as Se, useEffect as ke } from "react";
var te = { exports: {} }, W = {};
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
function Er() {
  if (Ce) return W;
  Ce = 1;
  var c = H, i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, d = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(R, m, O) {
    var b, h = {}, S = null, Y = null;
    O !== void 0 && (S = "" + O), m.key !== void 0 && (S = "" + m.key), m.ref !== void 0 && (Y = m.ref);
    for (b in m) v.call(m, b) && !g.hasOwnProperty(b) && (h[b] = m[b]);
    if (R && R.defaultProps) for (b in m = R.defaultProps, m) h[b] === void 0 && (h[b] = m[b]);
    return { $$typeof: i, type: R, key: S, ref: Y, props: h, _owner: d.current };
  }
  return W.Fragment = o, W.jsx = j, W.jsxs = j, W;
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
function Rr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var c = H, i = Symbol.for("react.element"), o = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), R = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ne = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ne];
      return typeof r == "function" ? r : null;
    }
    var P = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ye = !1, Ve = !1, Me = !1, Ue = !1, Be = !1, ae;
    ae = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === g || Be || e === d || e === O || e === b || Ue || e === Y || Ye || Ve || Me || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === h || e.$$typeof === j || e.$$typeof === R || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
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
        case o:
          return "Portal";
        case g:
          return "Profiler";
        case d:
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
            return oe(r) + ".Consumer";
          case j:
            var t = e;
            return oe(t._context) + ".Provider";
          case m:
            return Ke(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case S: {
            var l = e, f = l._payload, u = l._init;
            try {
              return w(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, ie, se, ue, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Je() {
      {
        if (I === 0) {
          ie = console.log, se = console.info, ue = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
            log: k({}, e, {
              value: ie
            }),
            info: k({}, e, {
              value: se
            }),
            warn: k({}, e, {
              value: ue
            }),
            error: k({}, e, {
              value: le
            }),
            group: k({}, e, {
              value: ce
            }),
            groupCollapsed: k({}, e, {
              value: fe
            }),
            groupEnd: k({}, e, {
              value: de
            })
          });
        }
        I < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = P.ReactCurrentDispatcher, q;
    function V(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, M;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ge();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = J.current, J.current = null, Je();
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
          for (var s = x.stack.split(`
`), _ = n.stack.split(`
`), p = s.length - 1, y = _.length - 1; p >= 1 && y >= 0 && s[p] !== _[y]; )
            y--;
          for (; p >= 1 && y >= 0; p--, y--)
            if (s[p] !== _[y]) {
              if (p !== 1 || y !== 1)
                do
                  if (p--, y--, y < 0 || s[p] !== _[y]) {
                    var T = `
` + s[p].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, T), T;
                  }
                while (p >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = f, qe(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", C = F ? V(F) : "";
      return typeof e == "function" && M.set(e, C), C;
    }
    function ze(e, r, t) {
      return pe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Xe(e));
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
          case m:
            return ze(e.render);
          case h:
            return U(e.type, r, t);
          case S: {
            var n = e, l = n._payload, f = n._init;
            try {
              return U(f(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, ge = {}, he = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, l) {
      {
        var f = Function.call.bind($);
        for (var u in e)
          if (f(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              s = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              s = p;
            }
            s && !(s instanceof Error) && (B(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof s), B(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, B(l), E("Failed %s type: %s", t, s.message), B(null));
          }
      }
    }
    var Qe = Array.isArray;
    function z(e) {
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
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function me(e) {
      if (rr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), ye(e);
    }
    var N = P.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, Ee, X;
    X = {};
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
    function or(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = w(N.current.type);
        X[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(N.current.type), e.ref), X[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          be || (be = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ee || (Ee = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, n, l, f, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
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
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function lr(e, r, t, n, l) {
      {
        var f, u = {}, s = null, _ = null;
        t !== void 0 && (me(t), s = "" + t), ar(r) && (me(r.key), s = "" + r.key), nr(r) && (_ = r.ref, or(r, l));
        for (f in r)
          $.call(r, f) && !tr.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            u[f] === void 0 && (u[f] = p[f]);
        }
        if (s || _) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(u, y), _ && sr(u, y);
        }
        return ur(e, s, _, l, n, N.current, u);
      }
    }
    var Z = P.ReactCurrentOwner, Re = P.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function _e() {
      {
        if (Z.current) {
          var e = w(Z.current.type);
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
    var xe = {};
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
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + w(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && je(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = We(e);
          if (typeof l == "function" && l !== e.entries)
            for (var f = l.call(e), u; !(u = f.next()).done; )
              ee(u.value) && je(u.value, r);
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
          var n = w(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var l = w(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
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
    var we = {};
    function Oe(e, r, t, n, l, f) {
      {
        var u = He(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = cr();
          _ ? s += _ : s += _e();
          var p;
          e === null ? p = "null" : z(e) ? p = "array" : e !== void 0 && e.$$typeof === i ? (p = "<" + (w(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, s);
        }
        var y = lr(e, r, t, l, f);
        if (y == null)
          return y;
        if (u) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (z(T)) {
                for (var F = 0; F < T.length; F++)
                  Te(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(T, e);
        }
        if ($.call(r, "key")) {
          var C = w(e), x = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), re = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[C + re]) {
            var mr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, C, mr, C), we[C + re] = !0;
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
process.env.NODE_ENV === "production" ? te.exports = Er() : te.exports = Rr();
var a = te.exports;
const Ae = ({ content: c, caption: i = "" }) => /* @__PURE__ */ a.jsxs("figure", { className: "card", children: [
  c,
  i && /* @__PURE__ */ a.jsx("figcaption", { children: i })
] }), xr = ({ title: c, content: i }) => /* @__PURE__ */ a.jsxs("details", { className: "collapse", children: [
  /* @__PURE__ */ a.jsx("summary", { children: c }),
  /* @__PURE__ */ a.jsx("figure", { children: i })
] }), D = ({ name: c, cat: i = "brands", option: o = "2x", isHidden: v = !0, event: d = void 0 }) => /* @__PURE__ */ a.jsx(
  "i",
  {
    ...d ? { className: `fa-${i} fa-${c} fa-${o}` } : { className: `fa-${i} fa-${c} fa-${o} fa-fw` },
    "aria-hidden": v,
    ...d ? { onClick: (g) => d(g) } : {},
    ...d ? { onKeyDown: (g) => d(g) } : {},
    ...d ? { tabIndex: 0 } : {}
  }
), Fe = ({ url: c, alt: i, design: o = "image" }) => /* @__PURE__ */ a.jsx(
  "img",
  {
    src: c,
    alt: i,
    className: o,
    loading: "lazy"
  }
), Ie = ({ content: c, url: i, design: o = "link", label: v = "", title: d = "" }) => {
  const g = i.startsWith("https");
  return /* @__PURE__ */ a.jsx(
    "a",
    {
      href: i,
      className: `${o}`,
      ...v ? { "aria-label": v } : {},
      ...d ? { title: d } : {},
      ...g ? { rel: "noopener noreferrer" } : {},
      ...g ? { target: "_blank" } : {},
      children: c
    }
  );
}, K = ({ array: c }) => /* @__PURE__ */ a.jsx("ul", { className: "list", children: c.map(
  (i, o) => /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(a.Fragment, { children: i }) }, o)
) }), $e = ({ link: c, ico: i, txt: o }) => {
  const { url: v, label: d } = c, { name: g, cat: j, option: R } = i;
  return /* @__PURE__ */ a.jsx(
    Ie,
    {
      url: v,
      label: d,
      design: "link button",
      content: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          D,
          {
            name: g,
            cat: j,
            option: R,
            isHidden: !1,
            event: void 0
          }
        ),
        o && /* @__PURE__ */ a.jsx("b", { children: o })
      ] })
    }
  );
}, jr = ({ array: c }) => /* @__PURE__ */ a.jsx("footer", { className: "footer", children: /* @__PURE__ */ a.jsx(
  K,
  {
    array: c.map(
      (i) => /* @__PURE__ */ a.jsx(
        $e,
        {
          link: i.link,
          ico: i.ico,
          txt: ""
        }
      )
    )
  }
) }), De = ({ txt: c, lvl: i = 4, sub: o = "", ico: v = void 0 }) => {
  i = Number(i), (i < 1 || i > 3) && (i = 4);
  const d = `h${i}`;
  return /* @__PURE__ */ a.jsxs("hgroup", { className: "title", children: [
    v && /* @__PURE__ */ a.jsx("p", { children: H.createElement(D, v) }),
    H.createElement(d, {}, c),
    o && /* @__PURE__ */ a.jsx("p", { children: o })
  ] });
}, Tr = ({ array: c }) => {
  const i = (o, v) => {
    var g, j;
    const d = {
      url: o.url,
      title: o.detail ? o.detail : void 0,
      design: "link",
      content: /* @__PURE__ */ a.jsx(
        Ae,
        {
          caption: o.caption && /* @__PURE__ */ a.jsx(De, { txt: o.caption.title }),
          content: o.image && /* @__PURE__ */ a.jsx(Fe, { url: o.image.url, alt: o.image.alt })
        }
      )
    };
    return o.name ? (d.content = /* @__PURE__ */ a.jsx(a.Fragment, { children: o.name }), d.design = "btn") : o.caption && o.caption.technos && (d.content = /* @__PURE__ */ a.jsx(
      Ae,
      {
        caption: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(De, { txt: o.caption.title }),
          /* @__PURE__ */ a.jsx(
            K,
            {
              array: o.caption.technos.map(
                (R) => /* @__PURE__ */ a.jsx(D, { name: R, option: "lg", isHidden: !1 })
              )
            }
          )
        ] }),
        content: /* @__PURE__ */ a.jsx(Fe, { url: ((g = o.image) == null ? void 0 : g.url) ?? "", alt: ((j = o.image) == null ? void 0 : j.alt) ?? "" })
      }
    )), /* @__PURE__ */ a.jsx(Ie, { ...d }, v);
  };
  return /* @__PURE__ */ a.jsx(K, { array: c.map(i) });
}, wr = ({ array: c }) => /* @__PURE__ */ a.jsx("nav", { className: "navbar", children: /* @__PURE__ */ a.jsx(
  K,
  {
    array: c.map(
      (i) => /* @__PURE__ */ a.jsx(
        $e,
        {
          link: i.link,
          ico: i.ico,
          txt: i.txt
        }
      )
    )
  }
) }), Or = ({ array: c, timer: i = 5e3 }) => {
  const o = c.length, [v, d] = Se(0), g = () => d((h) => (h + 1) % o), j = () => d((h) => (h - 1 + o) % o);
  //! ********** AUTOPLAY **********
  let [R, m] = Se(i !== 0);
  const O = () => m((h) => !h);
  ke(() => {
    let h;
    return R && (h = setInterval(() => g(), i)), () => clearInterval(h);
  }, [R, o]);
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
  ke(() => (document.addEventListener("keydown", b), () => {
    document.removeEventListener("keydown", b);
  }), []);
  //! ********** RENDER **********
  return /* @__PURE__ */ a.jsxs(
    "figure",
    {
      className: "slider",
      role: "region",
      "aria-label": "slider",
      children: [
        c[v],
        o > 1 && /* @__PURE__ */ a.jsxs("nav", { children: [
          /* @__PURE__ */ a.jsx(
            D,
            {
              name: "chevron-left",
              cat: "solid",
              isHidden: !1,
              event: j
            }
          ),
          /* @__PURE__ */ a.jsx(
            D,
            {
              name: "chevron-right",
              cat: "solid",
              isHidden: !1,
              event: g
            }
          ),
          /* @__PURE__ */ a.jsx(
            D,
            {
              name: R ? "pause" : "play",
              cat: "solid",
              isHidden: !1,
              event: O
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("progress", { value: (v + 1) / o })
      ]
    }
  );
};
export {
  $e as Button,
  Ae as Card,
  xr as Collapse,
  jr as Footer,
  Tr as Gallery,
  D as Icon,
  Fe as Image,
  Ie as Link,
  K as List,
  wr as Navbar,
  Or as Slider,
  De as Title
};
//# sourceMappingURL=index.es.js.map
