"use client";
import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { useEffect as t, useLayoutEffect as n, useId as o, useRef as i, useState as a, useCallback as s, isValidElement as c, forwardRef as l, useMemo as u, Fragment as f } from "react";
const d = (r2) => {
}, h = "undefined" == typeof window ? t : n, m = (r2) => "number" == typeof r2 && r2 > 0, p = (r2) => m(r2) ? r2 : 0, g = (r2) => Math.round(100 * r2) / 100, y = (r2) => Math.round(2 * r2) / 2, b = (r2) => 0 === r2 ? 0 : -1 * g(r2);
const v = {};
const x = "rr--group", S = "rr--box", w = "rr--svg", C = "rr--reset", $ = "rr--focus-reset", B = "rr--svg-stop-1", k = "rr--svg-stop-2", A = "rr--on", N = "rr--off", M = "rr--fx-zoom", W = "rr--fx-position", I = "rr--fx-opacity", L = "rr--fx-colors", R = "rr--rx-sm", D = "rr--rx-md", F = "rr--rx-lg", O = "rr--rx-full", E = "rr--gap-sm", H = "rr--gap-md", V = "rr--gap-lg", j = "rr--space-sm", Z = "rr--space-md", P = "rr--space-lg", z = "rr--pointer", T = "rr--disabled", q = "rr--dir-y", G = "rr--dir-x", J = "rr--has-stroke", K = "rr--has-border", U = "rr--hf-box-on", X = "rr--hf-box-int", Y = "rr--hf-box-off", Q = "rr--hf-svg-on", _ = "rr--hf-svg-off", rr = "--rr--fill-on-color", er = "--rr--box-on-color", tr = "--rr--border-on-color", nr = "--rr--stroke-on-color", or = "--rr--fill-off-color", ir = "--rr--box-off-color", ar = "--rr--border-off-color", sr = "--rr--stroke-off-color", cr = "--rr--border-width", lr = "horizontal", ur = "vertical", fr = "svg", dr = "box", hr = "none", mr = "small", pr = "medium", gr = "large", yr = "full", br = "none", vr = "zoom", xr = "position", Sr = "opacity", wr = "colors", Cr = "activeFillColor", $r = "activeBoxColor", Br = "activeBoxBorderColor", kr = "activeStrokeColor", Ar = "inactiveFillColor", Nr = "inactiveBoxColor", Mr = "inactiveBoxBorderColor", Wr = "inactiveStrokeColor";
function Ir({ itemShapes: t2, testId: n2, itemStrokeWidth: c2 = 0, orientation: l2 = lr, hasHF: u2 = false }) {
  const f2 = c2 > 0 ? -c2 / 2 : 0, d2 = c2 > 0 ? `${f2} ${f2}` : "0 0", m2 = o(), p2 = i(null), [y2, v2] = a(null), [x2, S2] = a(false), C2 = i(null), $2 = i(null), A2 = s((r2) => {
    const { width: e2, height: t3, x: n3, y: o2 } = r2.getBBox();
    if (((...r3) => r3.every((r4) => "number" == typeof r4))(e2, t3, n3, o2)) {
      const r3 = `${d2} ${g(e2 + c2)} ${g(t3 + c2)}`, i2 = `${b(n3)} ${b(o2)}`;
      v2({ viewBox: r3, translateData: i2 });
    }
  }, [c2, d2]);
  return h(() => {
    if (p2.current) {
      const { width: r2, height: e2, x: t3, y: n3 } = p2.current.getBBox();
      if (0 === r2 && 0 === e2 && 0 === t3 && 0 === n3) {
        const r3 = function(r4) {
          if (!r4 || !r4.parentElement) return null;
          let e3 = r4 == null ? void 0 : r4.parentElement;
          for (; e3 && "none" !== window.getComputedStyle(e3).display; ) e3 = e3.parentElement;
          return e3;
        }(p2.current);
        r3 && ($2.current = r3, S2(true));
      } else S2(false);
      A2(p2.current);
    }
  }, [t2, c2, u2]), h(() => {
    if (x2 && $2.current) return C2.current = new MutationObserver((r2, e2) => {
      r2.forEach(() => {
        "none" === window.getComputedStyle($2.current).display || (A2(p2.current), e2.disconnect());
      });
    }), C2.current.observe($2.current, { attributes: true }), () => {
      var _a;
      (_a = C2.current) == null ? void 0 : _a.disconnect();
    };
  }, [x2, A2]), r("svg", { "aria-hidden": "true", className: w, xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.5 -0.5 28 28", preserveAspectRatio: "xMidYMid meet", ...c2 > 0 ? { strokeWidth: c2 } : {}, ...n2, children: [u2 && e("defs", { children: r("linearGradient", { id: m2, ...l2 === ur ? { gradientTransform: "rotate(90)" } : {}, children: [e("stop", { className: B, offset: "50%" }), e("stop", { className: k, offset: "50%" })] }) }), e("g", { ref: p2, shapeRendering: "geometricPrecision", ...function() {
    if (y2) {
      const r2 = `translate(${y2 == null ? void 0 : y2.translateData})`;
      return "translate(0 0)" === r2 ? {} : { transform: r2 };
    }
    return { transform: void 0 };
  }(), ...u2 ? { fill: `url('#${m2}')` } : {}, children: t2 })] });
}
function Lr(r2, e2, t2) {
  switch (e2) {
    case Cr:
      return r2[rr] = t2, true;
    case $r:
      return r2[er] = t2, true;
    case Br:
      return r2[tr] = t2, true;
    case kr:
      return r2[nr] = t2, true;
  }
  return false;
}
function Rr(r2, e2, t2) {
  if (!Lr(r2, e2, t2)) switch (e2) {
    case Ar:
      r2[or] = t2;
      break;
    case Nr:
      r2[ir] = t2;
      break;
    case Mr:
      r2[ar] = t2;
      break;
    case Wr:
      r2[sr] = t2;
  }
}
function Dr(r2, e2, t2) {
  const n2 = {};
  let o2;
  for (const [t3, o3] of Object.entries(r2)) Lr(n2, t3, o3[e2]);
  return t2 ? (o2 = Array(e2).fill({}), o2.push(n2)) : o2 = Array(e2 + 1).fill(n2), o2;
}
const Fr = (r2) => `${r2} ${L}`;
function Or({ className: r2, radius: e2, readOnly: t2, isDisabled: n2, isDynamic: o2, transition: i2, orientation: a2, absoluteBoxBorderWidth: s2, absoluteStrokeWidth: c2, spaceBetween: l2, spaceInside: u2 }) {
  const f2 = o2 ? z : "", d2 = function(r3) {
    switch (r3) {
      case mr:
        return E;
      case pr:
        return H;
      case gr:
        return V;
      default:
        return "";
    }
  }(l2), h2 = function(r3) {
    switch (r3) {
      case mr:
        return j;
      case pr:
        return Z;
      case gr:
        return P;
      default:
        return "";
    }
  }(u2), m2 = !t2 && n2 ? T : "", p2 = o2 && i2 !== br ? function(r3) {
    switch (r3) {
      case vr:
        return Fr(M);
      case xr:
        return Fr(W);
      case Sr:
        return Fr(I);
      case wr:
        return L;
      default:
        return "";
    }
  }(i2) : "", g2 = a2 === ur ? q : G, y2 = function(r3) {
    switch (r3) {
      case mr:
        return R;
      case pr:
        return D;
      case gr:
        return F;
      case yr:
        return O;
      default:
        return "";
    }
  }(e2);
  return `${x} ${g2} ${c2 > 0 ? J : ""} ${s2 > 0 ? K : ""}
${p2} ${y2} ${f2} ${m2} ${d2}
${h2} ${r2}`.replace(/  +/g, " ").trimEnd();
}
function Er(r2, e2, t2) {
  return Array.from({ length: e2 }, (e3, n2) => r2 ? n2 === t2 ? A : N : n2 <= t2 ? A : N);
}
function Hr(r2, e2, t2) {
  const n2 = Math.floor(y(r2));
  return Array.from({ length: e2 }, (r3, e3) => "box" === t2 ? e3 > n2 ? Y : e3 === n2 ? X : U : e3 > n2 ? _ : Q);
}
function Vr(r2, e2) {
  const t2 = {};
  m(e2) && (t2[cr] = `${e2}px`);
  const n2 = Object.entries(r2);
  if (n2.length > 0) for (const [r3, e3] of n2) Rr(t2, r3, e3);
  return t2;
}
const jr = [Cr, $r, kr, Br];
function Zr(r2, e2, t2 = false) {
  return Array.from({ length: r2 }, (n2, o2) => t2 && e2 < 0 ? o2 === r2 - 1 ? 0 : -1 : e2 <= 0 ? 0 === o2 ? 0 : -1 : e2 > 0 ? o2 === e2 ? 0 : -1 : void 0);
}
const Pr = "@smastrom/react-rating";
function zr(r2, e2) {
  return r2.shouldRender = false, r2.reason = ((r3) => `[${Pr}] - Nothing's returned from rendering. Reason: ${r3}.`)(e2), r2;
}
const Tr = "itemShapes is not a valid JSX element";
const qr = e("polygon", { points: "25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02" }), Gr = e("path", { d: "M12.5,18.16l-7.73,5.61,2.95-9.08L0,9.07H9.55S12.5,0,12.5,0l2.95,9.07h9.55l-7.73,5.62,2.95,9.08-7.73-5.61Z" }), Jr = e("path", { d: "M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z" }), Kr = e("path", { d: "M22.72,8.24h-6.68L13.97,1.88c-.81-2.51-2.13-2.51-2.95,0l-2.07,6.36H2.28c-2.63,0-3.04,1.25-.91,2.8l5.41,3.93-2.06,6.36c-.81,2.51,.25,3.28,2.39,1.73l5.41-3.93,5.41,3.93c2.13,1.55,3.2,.77,2.39-1.73l-2.07-6.36,5.41-3.93c2.13-1.55,1.72-2.8-.91-2.8Z" }), Ur = e("path", { d: "M11.58,.77c.51-1.02,1.33-1.02,1.84,0l2.34,4.73c.5,1.02,1.84,2,2.98,2.16l5.22,.76c1.13,.17,1.39,.95,.57,1.75l-3.78,3.68c-.82,.8-1.33,2.37-1.14,3.5l.89,5.2c.19,1.13-.48,1.61-1.49,1.08l-4.67-2.45c-1.01-.53-2.67-.53-3.68,0l-4.67,2.46c-1.01,.53-1.68,.05-1.49-1.08l.89-5.2c.19-1.13-.32-2.7-1.14-3.5L.48,10.17c-.82-.8-.56-1.58,.57-1.75l5.22-.76c1.13-.16,2.47-1.14,2.98-2.16L11.58,.77h0Z" }), Xr = e("path", { d: "M19.29,1.61c-2.15-2.15-5.63-2.15-7.78,0,0,0,0,0,0,0l-1.06,1.06-1.06-1.06C7.24-.54,3.76-.54,1.61,1.61-.54,3.76-.54,7.24,1.61,9.39l1.06,1.06,7.78,7.78,7.78-7.78,1.06-1.06c2.15-2.15,2.15-5.63,0-7.78,0,0,0,0,0,0Z" }), Yr = { itemShapes: qr, itemStrokeWidth: 2, activeFillColor: "#ffb23f", inactiveFillColor: "#fff7ed", activeStrokeColor: "#e17b21", inactiveStrokeColor: "#eda76a" }, Qr = l(({ value: n2, items: o2 = 5, readOnly: l2 = false, onChange: m2 = d, onHoverChange: g2 = d, onFocus: b2 = d, onBlur: x2 = d, preventDefault: w2 = "all", isDisabled: B2 = false, highlightOnlySelected: k2 = false, orientation: A2 = lr, spaceBetween: N2 = hr, spaceInside: M2 = mr, radius: W2 = hr, transition: I2 = wr, itemStyles: L2 = Yr, isRequired: R2 = false, halfFillMode: D2 = fr, visibleLabelId: F2, visibleItemLabelIds: O2, invisibleItemLabels: E2, invisibleLabel: H2 = l2 ? n2 > 0 ? `Rated ${n2} on ${o2}` : "Not rated" : "Rating Selection", resetLabel: V2 = "Reset rating", id: j2, className: Z2, style: P2 }, z2) => {
  const T2 = Array.from({ length: o2 }, (r2, e2) => e2 + 1), q2 = l2 && !Number.isInteger(n2), G2 = q2 && !k2, J2 = q2 && k2 ? Math.round(n2) : n2, K2 = !l2 && !B2, U2 = J2 >= 0.25, X2 = "string" == typeof Z2 ? Z2 : "", Y2 = D2 === dr ? dr : fr, Q2 = G2 && !((r2) => Number.isInteger(y(r2)))(J2), _2 = !R2 && !l2, rr2 = R2 ? o2 : o2 + 1, er2 = G2 ? function(r2, e2) {
    const t2 = y(e2);
    return Number.isInteger(t2) ? r2.indexOf(t2) : Math.floor(t2);
  }(T2, J2) : T2.indexOf(J2), { staticColors: tr2, arrayColors: nr2, itemShapes: or2, absoluteStrokeWidth: ir2, absoluteBoxBorderWidth: ar2 } = u(() => {
    const { itemShapes: r2, itemStrokeWidth: e2, boxBorderWidth: t2, ...n3 } = L2, o3 = function(r3) {
      const e3 = { ...r3 }, t3 = {}, n4 = Object.entries(e3);
      if (n4.length > 0) for (const [r4, o4] of n4) if (Array.isArray(o4) || "string" == typeof o4) {
        if (Array.isArray(o4)) for (const n5 of jr) if (n5 === r4) {
          const n6 = o4.filter((r5) => "string" == typeof r5);
          n6.length > 0 && (t3[r4] = n6, delete e3[r4]);
        } else delete e3[r4];
      } else delete e3[r4];
      return { arrayColors: t3, staticColors: e3 };
    }(n3);
    return { itemShapes: r2, absoluteStrokeWidth: p(e2), absoluteBoxBorderWidth: p(t2), ...o3 };
  }, [L2]), sr2 = Object.keys(nr2).length > 0, cr2 = s((r2, e2) => ({ dynamicClassNames: Q2 ? Hr(J2, o2, Y2) : Er(k2, o2, r2), dynamicCssVars: e2 && sr2 ? Dr(nr2, r2, k2) : [] }), [nr2, sr2, k2, Y2, Q2, o2, J2]), ur2 = s(() => $r2(Zr(rr2, er2, !R2)), [er2, rr2, R2]), pr2 = i(true), gr2 = i(true), yr2 = i(null), br2 = i([]), vr2 = i(false), [xr2, Sr2] = a({ staticCssVars: Vr(tr2, ar2), ...cr2(er2, U2) }), [Cr2, $r2] = a(() => K2 ? Zr(rr2, er2, !R2) : []);
  h(() => {
    K2 && br2.current && (vr2.current = function(r2) {
      if (r2) return "rtl" === getComputedStyle(r2).getPropertyValue("direction");
      return false;
    }(br2.current[0]));
  }, [K2]), t(() => {
    if (!pr2.current) return Sr2({ staticCssVars: Vr(tr2, ar2), ...cr2(er2, U2) });
    pr2.current = false;
  }, [tr2, cr2, ar2, er2, U2]), t(() => {
    if (!gr2.current && K2) return ur2();
    gr2.current = false;
  }, [K2, ur2]);
  const { shouldRender: Br2, reason: kr2 } = function({ items: r2, itemShapes: e2 }) {
    const t2 = { shouldRender: true, reason: "" };
    if ("number" != typeof r2 || r2 < 1 || r2 > 10) return zr(t2, "items is invalid");
    if (!e2) return zr(t2, "itemStyles needs at least the property itemShapes set");
    if (!Array.isArray(e2) && !c(e2)) return zr(t2, Tr);
    if (Array.isArray(e2)) {
      if (e2.length !== r2) return zr(t2, "itemShapes length mismatch");
      if (!e2.every((r3) => c(r3))) return zr(t2, Tr);
    }
    return t2;
  }({ items: o2, itemShapes: or2 });
  if (!Br2) return console.error(kr2), null;
  function Ar2(r2, e2, t2 = () => {
  }) {
    br2.current.some((e3) => e3 === r2.relatedTarget) ? t2() : e2();
  }
  function Nr2() {
    g2(0), ur2();
  }
  function Mr2(r2) {
    Ar2(r2, () => {
      Nr2();
    }), Sr2({ ...xr2, ...cr2(er2, U2) });
  }
  function Wr2(r2) {
    Ar2(r2, () => {
      Nr2(), x2();
    });
  }
  function Lr2(r2, e2) {
    const t2 = !R2 && e2 === T2.length ? 0 : e2 + 1;
    Ar2(r2, () => {
      b2(), g2(t2);
    }, () => {
      g2(t2);
    });
  }
  function Rr2(r2) {
    $r2(Zr(rr2, r2, !R2)), br2.current[r2].focus();
  }
  const Fr2 = Or({ className: X2, radius: W2, readOnly: l2, isDisabled: B2, isDynamic: K2, transition: I2, orientation: A2, absoluteBoxBorderWidth: ar2, absoluteStrokeWidth: ir2, spaceBetween: N2, spaceInside: M2 });
  function Pr2(r2) {
    return { ref: (e2) => br2.current[r2] = e2 };
  }
  function qr2(r2) {
    return { tabIndex: Cr2[r2], onKeyDown: (e2) => function(r3, e3) {
      let t2 = 0;
      const n3 = R2 ? T2.length - 1 : T2.length, o3 = e3 - 1, i2 = e3 + 1, a2 = !R2 && e3 === T2.length, s2 = 0 === e3 ? n3 : o3, c2 = n3 === e3 ? 0 : i2;
      switch (r3.code) {
        case "Shift":
        case "Tab":
          return true;
        case "ArrowDown":
        case "ArrowRight":
          return t2 = vr2.current ? s2 : c2, Rr2(t2);
        case "ArrowUp":
        case "ArrowLeft":
          return t2 = vr2.current ? c2 : s2, Rr2(t2);
        case "Enter":
        case "Space":
          return "all" !== w2 && "click" !== w2 || r3.preventDefault(), m2(a2 ? 0 : e3 + 1);
      }
      r3.stopPropagation();
    }(e2, r2) };
  }
  function Gr2(r2) {
    return { onClick: (e2) => function(r3, e3) {
      "all" !== w2 && "keydown" !== w2 || r3.preventDefault(), r3.stopPropagation(), m2(R2 || er2 !== e3 ? e3 + 1 : 0);
    }(e2, r2), onMouseEnter: () => function(r3) {
      g2(r3 + 1), Sr2({ ...xr2, ...cr2(r3, true) });
    }(r2), onMouseLeave: Mr2 };
  }
  function Jr2(r2) {
    if (l2) return {};
    const e2 = {};
    if (Array.isArray(O2)) e2["aria-labelledby"] = O2[r2];
    else {
      const t2 = Array.isArray(E2) ? E2 : T2.map((r3, e3) => `Rate ${e3 + 1}`);
      e2["aria-label"] = t2[r2];
    }
    return B2 && (e2["aria-disabled"] = "true"), { role: "radio", "aria-checked": r2 + 1 === J2, ...e2 };
  }
  function Kr2(r2) {
    const e2 = { itemShapes: Array.isArray(or2) ? or2[r2] : or2, itemStrokeWidth: ir2, orientation: A2, hasHF: false, testId: {} };
    return Q2 && Y2 === fr && (e2.hasHF = r2 === er2), e2;
  }
  return e("div", { id: j2, className: Fr2, style: { ...P2, ...xr2.staticCssVars }, ref: function(r2) {
    K2 && !R2 && (yr2.current = r2), z2 && (z2.current = r2);
  }, ...function() {
    if (!l2) {
      const r2 = R2 && !B2, e2 = { role: "radiogroup", "aria-required": r2 };
      return r2 && (e2["aria-invalid"] = J2 <= 0), "string" == typeof F2 && F2.length > 0 ? e2["aria-labelledby"] = F2 : e2["aria-label"] = H2, e2;
    }
    return { role: "img", "aria-label": H2 };
  }(), ...v, children: T2.map((t2, n3) => {
    return r(f, { children: [e("div", { className: `${S} ${xr2.dynamicClassNames[n3]}`, style: xr2.dynamicCssVars[n3], ...Jr2(n3), ...(i2 = n3, K2 ? { ...Pr2(i2), ...qr2(i2), ...Gr2(i2), onFocus: (r2) => Lr2(r2, i2), onBlur: (r2) => Wr2(r2) } : {}), children: e(Ir, { ...Kr2(n3) }) }), _2 && n3 === T2.length - 1 && e("div", { ...(o3 = n3 + 1, { className: C, role: "radio", "aria-label": V2, "aria-checked": 0 === J2, onClick: () => m2(0), onFocus: (r2) => {
      var _a;
      Lr2(r2, o3), (_a = yr2.current) == null ? void 0 : _a.classList.add($);
    }, onBlur: (r2) => {
      var _a;
      Wr2(r2), (_a = yr2.current) == null ? void 0 : _a.classList.remove($);
    }, ...qr2(o3), ...Pr2(o3), ...B2 ? { "aria-disabled": "true" } : {} }) })] }, t2);
    var o3, i2;
  }) });
});
Qr.displayName = "Rating";
export {
  Xr as Heart,
  Qr as Rating,
  Jr as RoundedStar,
  qr as Star,
  Ur as StickerStar,
  Kr as ThinRoundedStar,
  Gr as ThinStar
};
