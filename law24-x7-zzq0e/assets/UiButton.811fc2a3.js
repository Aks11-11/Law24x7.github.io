import {
  o as a,
  d as i,
  e as p,
  f as h,
  n as r,
  z as d,
  t as m,
  s as y,
  y as c,
  g,
  x as C,
  A as b,
} from "./vendor-vue.1ba39ed5.js";
import { _ as u } from "./vite.c27b6911.js";
const x = {
    width: "1.2em",
    height: "1.2em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 20 20",
  },
  L = p(
    "path",
    {
      fill: "currentColor",
      d: "M10 1.6a8.4 8.4 0 1 0 0 16.8a8.4 8.4 0 0 0 0-16.8zm4.789 11.461L13.06 14.79L10 11.729l-3.061 3.06L5.21 13.06L8.272 10L5.211 6.939L6.94 5.211L10 8.271l3.061-3.061l1.729 1.729L11.728 10l3.061 3.061z",
    },
    null,
    -1
  ),
  z = [L];
function S(t, s) {
  return a(), i("svg", x, z);
}
const v = { name: "entypo-circle-with-cross", render: S };
const B = {
    name: "UiLoader",
    props: {
      iconColorClass: { type: String, default: "text-brand-primary" },
      textColorClass: { type: String, default: "text-slate-800" },
      label: { type: String, default: "Loading..." },
      size: { type: String, default: "base" },
    },
    data() {
      return {
        classObject: {
          [`ui-loader-${this.size}`]: this.size,
          [this.textColorClass]: this.textColorClass,
        },
      };
    },
  },
  $ = { key: 0 };
function k(t, s, e, f, n, o) {
  const l = v;
  return (
    a(),
    i(
      "div",
      {
        class: r([
          "flex items-center font-extrabold animate-pulse",
          n.classObject,
        ]),
      },
      [
        h(
          l,
          { class: r(["animate-spin ui-loader-icon", e.iconColorClass]) },
          null,
          8,
          ["class"]
        ),
        d(t.$slots, "default", {}, () => [
          e.label ? (a(), i("span", $, m(e.label), 1)) : y("v-if", !0),
        ]),
      ],
      2
    )
  );
}
const _ = u(B, [["render", k]]),
  j = {
    components: { UiLoader: _ },
    props: {
      danger: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      loading: { type: Boolean, default: !1 },
      loadingLabel: { type: String, default: "" },
      loadingClass: { type: String, default: "text-white" },
      size: { type: String, default: "base" },
      theme: { type: String, default: "primary" },
      to: { type: String, default: "" },
    },
    data() {
      return {
        classObject: {
          [`ui-button-${this.size}`]: this.size,
          [`ui-button-${this.theme}`]: this.theme,
          "ui-button-danger": this.danger,
        },
        loaderClassObject: { [`ui-loader-${this.theme}`]: this.theme },
      };
    },
    computed: {
      is() {
        var t, s;
        return (t = this == null ? void 0 : this.$attrs) != null && t.href
          ? "a"
          : (s = this == null ? void 0 : this.$props) != null && s.to
          ? "router-link"
          : "button";
      },
      type() {
        var t, s;
        return (t = this == null ? void 0 : this.$attrs) != null && t.type
          ? (s = this == null ? void 0 : this.$attrs) == null
            ? void 0
            : s.type
          : (this == null ? void 0 : this.is) === "button"
          ? "button"
          : null;
      },
    },
  };
function w(t, s, e, f, n, o) {
  const l = _;
  return (
    a(),
    c(
      b(o.is),
      C({ to: e.to, class: ["ui-button", n.classObject] }, t.$attrs, {
        type: o.type,
        disabled: e.loading || e.disabled,
      }),
      {
        default: g(() => [
          e.loading
            ? (a(),
              c(
                l,
                {
                  key: 0,
                  textColorClass: e.loadingClass,
                  iconColorClass: e.loadingClass,
                  label: e.loadingLabel,
                  size: e.size,
                  class: "!font-semibold",
                },
                null,
                8,
                ["textColorClass", "iconColorClass", "label", "size"]
              ))
            : d(t.$slots, "default", { key: 1 }),
        ]),
        _: 3,
      },
      16,
      ["to", "class", "type", "disabled"]
    )
  );
}
const M = u(j, [["render", w]]);
export { M as _ };
