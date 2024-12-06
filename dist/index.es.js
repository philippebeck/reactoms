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
  var l = K, o = Symbol.for("react.element"), i = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, v = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(x, y, k) {
    var b, g = {}, O = null, Y = null;
    k !== void 0 && (O = "" + k), y.key !== void 0 && (O = "" + y.key), y.ref !== void 0 && (Y = y.ref);
    for (b in y) d.call(y, b) && !m.hasOwnProperty(b) && (g[b] = y[b]);
    if (x && x.defaultProps) for (b in y = x.defaultProps, y) g[b] === void 0 && (g[b] = y[b]);
    return { $$typeof: o, type: x, key: O, ref: Y, props: g, _owner: v.current };
  }
  return W.Fragment = i, W.jsx = T, W.jsxs = T, W;
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
function Rr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var l = K, o = Symbol.for("react.element"), i = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), x = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ae = Symbol.iterator, Ne = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Ne];
      return typeof r == "function" ? r : null;
    }
    var P = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, c = n.getStackAddendum();
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
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === m || Be || e === v || e === k || e === b || Ue || e === Y || Ye || Ve || Me || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === g || e.$$typeof === T || e.$$typeof === x || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
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
        case d:
          return "Fragment";
        case i:
          return "Portal";
        case m:
          return "Profiler";
        case v:
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
          case T:
            var t = e;
            return oe(t._context) + ".Provider";
          case y:
            return Ke(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
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
            var n = c.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
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
      var n;
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
              n = _;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (_) {
              n = _;
            }
            e.call(u.prototype);
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
          for (var s = _.stack.split(`
`), R = n.stack.split(`
`), p = s.length - 1, h = R.length - 1; p >= 1 && h >= 0 && s[p] !== R[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (s[p] !== R[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || s[p] !== R[h]) {
                    var j = `
` + s[p].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, j), j;
                  }
                while (p >= 1 && h >= 0);
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
          case y:
            return ze(e.render);
          case g:
            return U(e.type, r, t);
          case O: {
            var n = e, c = n._payload, f = n._init;
            try {
              return U(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, he = {}, me = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, c) {
      {
        var f = Function.call.bind($);
        for (var u in e)
          if (f(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var R = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              s = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              s = p;
            }
            s && !(s instanceof Error) && (B(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof s), B(null)), s instanceof Error && !(s.message in he) && (he[s.message] = !0, B(c), E("Failed %s type: %s", t, s.message), B(null));
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
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function be(e) {
      if (rr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), ye(e);
    }
    var N = P.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, Z;
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
          Re || (Re = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, n, c, f, u) {
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
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function lr(e, r, t, n, c) {
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
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && or(u, h), R && sr(u, h);
        }
        return ur(e, s, R, c, n, N.current, u);
      }
    }
    var Q = P.ReactCurrentOwner, _e = P.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function xe() {
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
        var r = xe();
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
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + w(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Te(n, r);
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
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Ze(t, e.props, "prop", n, e);
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
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var ke = {};
    function Oe(e, r, t, n, c, f) {
      {
        var u = He(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = cr();
          R ? s += R : s += xe();
          var p;
          e === null ? p = "null" : X(e) ? p = "array" : e !== void 0 && e.$$typeof === o ? (p = "<" + (w(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, s);
        }
        var h = lr(e, r, t, c, f);
        if (h == null)
          return h;
        if (u) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (X(j)) {
                for (var F = 0; F < j.length; F++)
                  we(j[F], e);
                Object.freeze && Object.freeze(j);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(j, e);
        }
        if ($.call(r, "key")) {
          var C = w(e), _ = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), te = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[C + te]) {
            var yr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, C, yr, C), ke[C + te] = !0;
          }
        }
        return e === d ? vr(h) : dr(h), h;
      }
    }
    function pr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var hr = gr, mr = pr;
    L.Fragment = d, L.jsx = hr, L.jsxs = mr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ne.exports = Er() : ne.exports = Rr();
var a = ne.exports;
const Fe = ({ content: l, caption: o = "" }) => /* @__PURE__ */ a.jsxs("figure", { className: "card", children: [
  l,
  o && /* @__PURE__ */ a.jsx("figcaption", { children: o })
] }), xr = ({ title: l, content: o }) => /* @__PURE__ */ a.jsxs("details", { className: "collapse", children: [
  /* @__PURE__ */ a.jsx("summary", { children: l }),
  /* @__PURE__ */ a.jsx("figure", { children: o })
] }), D = ({ name: l, cat: o = "brands", option: i = "2x", isHidden: d = !0, event: v = void 0 }) => /* @__PURE__ */ a.jsx(
  "i",
  {
    ...v ? { className: `fa-${o} fa-${l} fa-${i}` } : { className: `fa-${o} fa-${l} fa-${i} fa-fw` },
    "aria-hidden": d,
    ...v ? { onClick: (m) => v(m) } : {},
    ...v ? { onKeyDown: (m) => v(m) } : {},
    ...v ? { tabIndex: 0 } : {}
  }
), De = ({ url: l, alt: o, design: i = "image" }) => /* @__PURE__ */ a.jsx(
  "img",
  {
    src: l,
    alt: o,
    className: i,
    loading: "lazy"
  }
), $e = ({ content: l, url: o, design: i = "link", label: d = "", title: v = "" }) => {
  const m = o.startsWith("https");
  return /* @__PURE__ */ a.jsx(
    "a",
    {
      href: o,
      className: `${i}`,
      ...d ? { "aria-label": d } : {},
      ...v ? { title: v } : {},
      ...m ? { rel: "noopener noreferrer" } : {},
      ...m ? { target: "_blank" } : {},
      children: l
    }
  );
}, J = ({ array: l }) => /* @__PURE__ */ a.jsx("ul", { className: "list", children: l.map(
  (o, i) => /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(a.Fragment, { children: o }) }, i)
) }), H = ({ link: l, ico: o, txt: i = "" }) => {
  const { url: d, label: v } = l, { name: m, cat: T, option: x } = o;
  return /* @__PURE__ */ a.jsx(
    $e,
    {
      url: d,
      label: v,
      design: "link button",
      content: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          D,
          {
            name: m,
            cat: T,
            option: x,
            isHidden: !1,
            event: void 0
          }
        ),
        i && /* @__PURE__ */ a.jsx("b", { children: i })
      ] })
    }
  );
}, jr = ({ id: l, links: o }) => /* @__PURE__ */ a.jsx(
  "footer",
  {
    id: l,
    className: "footer",
    children: /* @__PURE__ */ a.jsx(
      J,
      {
        array: o.map(
          (i) => /* @__PURE__ */ a.jsx(
            H,
            {
              link: i.link,
              ico: i.ico
            }
          )
        )
      }
    )
  }
), Ie = ({ txt: l, lvl: o = 4, sub: i = "", ico: d = void 0 }) => {
  o = Number(o), (o < 1 || o > 3) && (o = 4);
  const v = `h${o}`;
  return /* @__PURE__ */ a.jsxs("hgroup", { className: "title", children: [
    d && /* @__PURE__ */ a.jsx("p", { children: K.createElement(D, d) }),
    K.createElement(v, {}, l),
    i && /* @__PURE__ */ a.jsx("p", { children: i })
  ] });
}, Tr = ({ array: l }) => {
  const o = (i, d) => {
    const v = {
      url: i.url,
      title: i.detail,
      design: "link",
      content: /* @__PURE__ */ a.jsx(
        Fe,
        {
          caption: /* @__PURE__ */ a.jsx(Ie, { txt: i.caption.title }),
          content: /* @__PURE__ */ a.jsx(De, { url: i.image.url, alt: i.image.alt })
        }
      )
    };
    return i.caption.technos && (v.content = /* @__PURE__ */ a.jsx(
      Fe,
      {
        caption: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(Ie, { txt: i.caption.title }),
          /* @__PURE__ */ a.jsx(
            J,
            {
              array: i.caption.technos.map(
                (m) => /* @__PURE__ */ a.jsx(D, { name: m, option: "lg", isHidden: !1 })
              )
            }
          )
        ] }),
        content: /* @__PURE__ */ a.jsx(De, { url: i.image.url ?? "", alt: i.image.alt ?? "" })
      }
    )), /* @__PURE__ */ a.jsx($e, { ...v }, d);
  };
  return /* @__PURE__ */ a.jsx(J, { array: l.map(o) });
}, wr = ({ brand: l, links: o, contact: i }) => /* @__PURE__ */ a.jsxs("nav", { className: "navbar", children: [
  /* @__PURE__ */ a.jsx(
    H,
    {
      link: l.link,
      ico: l.ico
    }
  ),
  /* @__PURE__ */ a.jsx(
    J,
    {
      array: o.map(
        (d) => /* @__PURE__ */ a.jsx(
          H,
          {
            link: d.link,
            ico: d.ico,
            txt: d.txt
          }
        )
      )
    }
  ),
  /* @__PURE__ */ a.jsx(
    H,
    {
      link: i.link,
      ico: i.ico
    }
  )
] }), kr = ({ array: l, timer: o = 5e3 }) => {
  const i = l.length, [d, v] = Se(0), m = () => v((g) => (g + 1) % i), T = () => v((g) => (g - 1 + i) % i);
  //! ********** AUTOPLAY **********
  let [x, y] = Se(o !== 0);
  const k = () => y((g) => !g);
  Ce(() => {
    let g;
    return x && (g = setInterval(() => m(), o)), () => clearInterval(g);
  }, [x, i]);
  //! ********** KEYBOARD EVENTS **********
  const b = (g) => {
    switch (g.key) {
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
        k();
        break;
    }
  };
  Ce(() => (document.addEventListener("keydown", b), () => {
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
        l[d],
        i > 1 && /* @__PURE__ */ a.jsxs("nav", { children: [
          /* @__PURE__ */ a.jsx(
            D,
            {
              name: "chevron-left",
              cat: "solid",
              isHidden: !1,
              event: T
            }
          ),
          /* @__PURE__ */ a.jsx(
            D,
            {
              name: "chevron-right",
              cat: "solid",
              isHidden: !1,
              event: m
            }
          ),
          /* @__PURE__ */ a.jsx(
            D,
            {
              name: x ? "pause" : "play",
              cat: "solid",
              isHidden: !1,
              event: k
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("progress", { value: (d + 1) / i })
      ]
    }
  );
};
export {
  H as Button,
  Fe as Card,
  xr as Collapse,
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
