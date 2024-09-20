import K, { useState as Oe, useEffect as Se } from "react";
var re = { exports: {} }, W = {};
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
function pr() {
  if (Ce) return W;
  Ce = 1;
  var f = K, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, d = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(j, b, O) {
    var y, p = {}, S = null, Y = null;
    O !== void 0 && (S = "" + O), b.key !== void 0 && (S = "" + b.key), b.ref !== void 0 && (Y = b.ref);
    for (y in b) h.call(b, y) && !m.hasOwnProperty(y) && (p[y] = b[y]);
    if (j && j.defaultProps) for (y in b = j.defaultProps, b) p[y] === void 0 && (p[y] = b[y]);
    return { $$typeof: o, type: j, key: S, ref: Y, props: p, _owner: d.current };
  }
  return W.Fragment = c, W.jsx = T, W.jsxs = T, W;
}
var N = {};
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
function gr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var f = K, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), j = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), te = Symbol.iterator, ke = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var k = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Fe = !1, Ie = !1, $e = !1, We = !1, Ne = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === m || Ne || e === d || e === O || e === y || We || e === Y || Fe || Ie || $e || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === p || e.$$typeof === T || e.$$typeof === j || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
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
        case h:
          return "Fragment";
        case c:
          return "Portal";
        case m:
          return "Profiler";
        case d:
          return "StrictMode";
        case O:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return ae(r) + ".Consumer";
          case T:
            var t = e;
            return ae(t._context) + ".Provider";
          case b:
            return Ye(e, e.render, "ForwardRef");
          case p:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case S: {
            var s = e, u = s._payload, i = s._init;
            try {
              return w(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, F = 0, ie, oe, se, ue, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ve() {
      {
        if (F === 0) {
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
        F++;
      }
    }
    function Me() {
      {
        if (F--, F === 0) {
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
        F < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = k.ReactCurrentDispatcher, J;
    function V(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, M;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ue();
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
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = H.current, H.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (_) {
              n = _;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), R = n.stack.split(`
`), v = a.length - 1, g = R.length - 1; v >= 1 && g >= 0 && a[v] !== R[g]; )
            g--;
          for (; v >= 1 && g >= 0; v--, g--)
            if (a[v] !== R[g]) {
              if (v !== 1 || g !== 1)
                do
                  if (v--, g--, g < 0 || a[v] !== R[g]) {
                    var x = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, x), x;
                  }
                while (v >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        q = !1, H.current = u, Me(), Error.prepareStackTrace = s;
      }
      var D = e ? e.displayName || e.name : "", P = D ? V(D) : "";
      return typeof e == "function" && M.set(e, P), P;
    }
    function Be(e, r, t) {
      return ve(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ke(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case O:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Be(e.render);
          case p:
            return U(e.type, r, t);
          case S: {
            var n = e, s = n._payload, u = n._init;
            try {
              return U(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, pe = {}, ge = k.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function He(e, r, t, n, s) {
      {
        var u = Function.call.bind(I);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var R = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (B(s), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), B(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, B(s), E("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function G(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
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
      if (Ge(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), he(e);
    }
    var $ = k.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ye, z;
    z = {};
    function Xe(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = w($.current.type);
        z[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w($.current.type), e.ref), z[t] = !0);
      }
    }
    function er(e, r) {
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
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, s, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, s) {
      {
        var u, i = {}, a = null, R = null;
        t !== void 0 && (me(t), a = "" + t), Ze(r) && (me(r.key), a = "" + r.key), Xe(r) && (R = r.ref, Qe(r, s));
        for (u in r)
          I.call(r, u) && !ze.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            i[u] === void 0 && (i[u] = v[u]);
        }
        if (a || R) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, g), R && rr(i, g);
        }
        return tr(e, a, R, s, n, $.current, i);
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
      return typeof e == "object" && e !== null && e.$$typeof === o;
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
    function ar(e) {
      return "";
    }
    var _e = {};
    function ir(e) {
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
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + w(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && je(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Ae(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              Q(i.value) && je(i.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var s = w(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
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
    function we(e, r, t, n, s, u) {
      {
        var i = Le(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = ar();
          R ? a += R : a += Re();
          var v;
          e === null ? v = "null" : G(e) ? v = "array" : e !== void 0 && e.$$typeof === o ? (v = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var g = nr(e, r, t, s, u);
        if (g == null)
          return g;
        if (i) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (G(x)) {
                for (var D = 0; D < x.length; D++)
                  xe(x[D], e);
                Object.freeze && Object.freeze(x);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(x, e);
        }
        if (I.call(r, "key")) {
          var P = w(e), _ = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), ee = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[P + ee]) {
            var dr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, P, dr, P), Te[P + ee] = !0;
          }
        }
        return e === h ? sr(g) : or(g), g;
      }
    }
    function ur(e, r, t) {
      return we(e, r, t, !0);
    }
    function lr(e, r, t) {
      return we(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    N.Fragment = h, N.jsx = cr, N.jsxs = fr;
  }()), N;
}
process.env.NODE_ENV === "production" ? re.exports = pr() : re.exports = gr();
var l = re.exports;
const br = ({ content: f, caption: o = "" }) => /* @__PURE__ */ l.jsxs("figure", { className: "card", children: [
  f,
  o && /* @__PURE__ */ l.jsx("figcaption", { children: o })
] }), yr = ({ title: f, content: o }) => /* @__PURE__ */ l.jsxs("details", { className: "collapse", children: [
  /* @__PURE__ */ l.jsx("summary", { children: f }),
  /* @__PURE__ */ l.jsx("figure", { children: o })
] }), L = ({ name: f, cat: o = "brands", option: c = "2x", isHidden: h = !0, event: d = void 0 }) => /* @__PURE__ */ l.jsx(
  "i",
  {
    ...d ? { className: `fa-${o} fa-${f} fa-${c}` } : { className: `fa-${o} fa-${f} fa-${c} fa-fw` },
    "aria-hidden": h,
    ...d ? { onClick: (m) => d(m) } : {},
    ...d ? { onKeyDown: (m) => d(m) } : {},
    ...d ? { tabIndex: 0 } : {}
  }
), Er = ({ url: f, alt: o, design: c = "image" }) => /* @__PURE__ */ l.jsx(
  "img",
  {
    src: f,
    alt: o,
    className: c,
    loading: "lazy"
  }
), hr = ({ content: f, url: o, design: c = "link", label: h = "", title: d = "" }) => {
  const m = o.startsWith("https");
  return /* @__PURE__ */ l.jsx(
    "a",
    {
      href: o,
      className: `${c}`,
      ...h ? { "aria-label": h } : {},
      ...d ? { title: d } : {},
      ...m ? { rel: "noopener noreferrer" } : {},
      ...m ? { target: "_blank" } : {},
      children: f
    }
  );
}, Rr = ({ array: f }) => /* @__PURE__ */ l.jsx("ul", { className: "list", children: f.map(
  (o, c) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(l.Fragment, { children: o }) }, c)
) }), _r = ({ link: f, ico: o, txt: c }) => {
  const { url: h, label: d } = f, { name: m, cat: T, option: j } = o;
  return /* @__PURE__ */ l.jsx(
    hr,
    {
      url: h,
      label: d,
      design: "link button",
      content: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(
          L,
          {
            name: m,
            cat: T,
            option: j,
            isHidden: !1,
            event: void 0
          }
        ),
        c && /* @__PURE__ */ l.jsx("b", { children: c })
      ] })
    }
  );
}, jr = ({ array: f, timer: o = 5e3 }) => {
  const c = f.length, [h, d] = Oe(0), m = () => d((p) => (p + 1) % c), T = () => d((p) => (p - 1 + c) % c);
  //! ********** AUTOPLAY **********
  let [j, b] = Oe(o !== 0);
  const O = () => b((p) => !p);
  Se(() => {
    let p;
    return j && (p = setInterval(() => m(), o)), () => clearInterval(p);
  }, [j, c]);
  //! ********** KEYBOARD EVENTS **********
  const y = (p) => {
    switch (p.key) {
      case "ArrowLeft":
        T();
        break;
      case "ArrowRight":
        m();
        break;
      case "a":
      case "A":
      case "p":
      case "P":
        O();
        break;
    }
  };
  Se(() => (document.addEventListener("keydown", y), () => {
    document.removeEventListener("keydown", y);
  }), []);
  //! ********** RENDER **********
  return /* @__PURE__ */ l.jsxs(
    "figure",
    {
      className: "slider",
      role: "region",
      "aria-label": "slider",
      children: [
        f[h],
        c > 1 && /* @__PURE__ */ l.jsxs("nav", { children: [
          /* @__PURE__ */ l.jsx(
            L,
            {
              name: "chevron-left",
              cat: "solid",
              isHidden: !1,
              event: T
            }
          ),
          /* @__PURE__ */ l.jsx(
            L,
            {
              name: "chevron-right",
              cat: "solid",
              isHidden: !1,
              event: m
            }
          ),
          /* @__PURE__ */ l.jsx(
            L,
            {
              name: j ? "pause" : "play",
              cat: "solid",
              isHidden: !1,
              event: O
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx("progress", { value: (h + 1) / c })
      ]
    }
  );
}, xr = ({ txt: f, lvl: o = 4, sub: c = "", ico: h = void 0 }) => {
  o = Number(o), (o < 1 || o > 3) && (o = 4);
  const d = `h${o}`;
  return /* @__PURE__ */ l.jsxs("hgroup", { className: "title", children: [
    h && /* @__PURE__ */ l.jsx("p", { children: K.createElement(L, h) }),
    K.createElement(d, {}, f),
    c && /* @__PURE__ */ l.jsx("p", { children: c })
  ] });
};
export {
  _r as Button,
  br as Card,
  yr as Collapse,
  L as Icon,
  Er as Image,
  hr as Link,
  Rr as List,
  jr as Slider,
  xr as Title
};
//# sourceMappingURL=index.es.js.map
